import { NextRequest, NextResponse } from "next/server";
import { getRedis } from "@/lib/store";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  // Token entweder aus der Query (Ein-Klick-Abmeldung der Mail-Programme)
  // oder aus dem JSON-Body (Klick auf der Abmelde-Seite).
  let token = req.nextUrl.searchParams.get("token");
  if (!token) {
    try {
      const body = await req.json();
      token = typeof body?.token === "string" ? body.token : null;
    } catch {
      // kein JSON-Body, ignorieren
    }
  }

  if (!token) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const redis = getRedis();
  if (!redis) {
    return NextResponse.json({ ok: false }, { status: 503 });
  }

  const email = (await redis.get(`unsub:${token}`)) as string | null;
  if (!email) {
    return NextResponse.json({ ok: false }, { status: 404 });
  }

  await redis.srem("subscribers", email);
  await redis.hdel("subscriber_info", email);
  await redis.del(`unsub:${token}`);

  return NextResponse.json({ ok: true });
}
