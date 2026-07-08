import { NextRequest, NextResponse } from "next/server";
import { getRedis } from "@/lib/store";

export const runtime = "nodejs";

// Haelt die Redis-Datenbank im Gratis-Plan aktiv: Upstash archiviert Datenbanken ohne
// Traffic, ein taeglicher Schreibzugriff per Vercel Cron (vercel.json) verhindert das.
export async function GET(req: NextRequest) {
  // Wenn CRON_SECRET gesetzt ist, nur Aufrufe des Vercel-Crons zulassen.
  const secret = process.env.CRON_SECRET;
  if (secret && req.headers.get("authorization") !== `Bearer ${secret}`) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  const redis = getRedis();
  if (!redis) {
    return NextResponse.json({ ok: false }, { status: 503 });
  }

  await redis.set("betrieb:zuletzt_aktiv", new Date().toISOString());

  return NextResponse.json({ ok: true });
}
