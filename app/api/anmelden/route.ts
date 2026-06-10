import { NextRequest, NextResponse } from "next/server";
import { getRedis } from "@/lib/store";
import { getResend, MAIL_FROM, SITE_URL } from "@/lib/mail";

export const runtime = "nodejs";

function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(req: NextRequest) {
  let body: { email?: string; typ?: string; consent?: boolean };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Ungültige Anfrage." }, { status: 400 });
  }

  const email = String(body.email || "").trim().toLowerCase();
  const typ = body.typ === "mitglied" ? "mitglied" : "unterstuetzer";
  const consent = body.consent === true;

  if (!isEmail(email)) {
    return NextResponse.json({ error: "Bitte eine gültige E-Mail angeben." }, { status: 400 });
  }
  if (!consent) {
    return NextResponse.json({ error: "Bitte der Datenschutzerklärung zustimmen." }, { status: 400 });
  }

  const redis = getRedis();
  const resend = getResend();
  if (!redis || !resend) {
    return NextResponse.json(
      { error: "Die Anmeldung ist gerade nicht möglich. Bitte später erneut versuchen." },
      { status: 503 },
    );
  }

  const already = await redis.sismember("subscribers", email);
  if (already) {
    return NextResponse.json({ ok: true, already: true });
  }

  const token = crypto.randomUUID();
  await redis.set(
    `pending:${token}`,
    { email, typ, ts: Date.now() },
    { ex: 60 * 60 * 24 },
  );

  const confirmUrl = `${SITE_URL}/bestaetigen?token=${token}`;
  try {
    await resend.emails.send({
      from: MAIL_FROM,
      to: email,
      subject: "Bitte bestätige deine Anmeldung bei Die Neue",
      text:
        "Danke für dein Interesse an Die Neue.\n\n" +
        "Bitte bestätige deine Anmeldung mit einem Klick:\n" +
        confirmUrl +
        "\n\nWenn du das nicht warst, ignoriere diese E-Mail einfach.\n\n" +
        "Die Neue. Der Staat muss liefern oder lassen.",
    });
  } catch {
    return NextResponse.json(
      { error: "Die Bestätigungsmail konnte nicht gesendet werden. Bitte später erneut versuchen." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
