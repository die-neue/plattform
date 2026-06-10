import type { Metadata } from "next";
import Link from "next/link";
import { Header, Footer } from "@/components/site";
import { getRedis } from "@/lib/store";
import { getResend, MAIL_FROM, SITE_URL } from "@/lib/mail";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Anmeldung bestätigen | Die Neue",
};

type Pending = { email: string; typ: string; ts: number; unsub?: string };

export default async function BestaetigenPage({
  searchParams,
}: {
  searchParams: Promise<{ token?: string }>;
}) {
  const { token } = await searchParams;
  let status: "ok" | "abgelaufen" | "fehler" = "fehler";

  const redis = getRedis();
  if (token && redis) {
    const pending = (await redis.get(`pending:${token}`)) as Pending | null;
    if (pending && pending.email) {
      await redis.sadd("subscribers", pending.email);
      await redis.hset("subscriber_info", {
        [pending.email]: {
          typ: pending.typ,
          confirmed: Date.now(),
          unsub: pending.unsub ?? null,
        },
      });
      if (pending.unsub) {
        await redis.set(`unsub:${pending.unsub}`, pending.email);
      }
      // Marker, damit ein zweiter Aufruf (Mail-Vorschau, Scanner oder Doppelklick)
      // nicht faelschlich "abgelaufen" zeigt, sondern weiterhin "bestaetigt".
      await redis.set(`confirmed:${token}`, pending.email, { ex: 60 * 60 * 24 * 7 });

      // Begruessungsmail mit Mitglieds-Aufruf, einmalig (nur im pending-Zweig).
      const resend = getResend();
      if (resend) {
        const unsubUrl = pending.unsub
          ? `${SITE_URL}/abmelden?token=${pending.unsub}`
          : `${SITE_URL}/abmelden`;
        try {
          await resend.emails.send({
            from: MAIL_FROM,
            to: pending.email,
            subject: "Willkommen bei Die Neue",
            text:
              "Schön, dass du dabei bist. Du bist jetzt Unterstützer von Die Neue.\n\n" +
              "Als Unterstützer kannst du Vorschläge einbringen, mitdiskutieren und bleibst informiert.\n\n" +
              "Willst du wirklich mitentscheiden, über Programm und Ämter? Dann werde Mitglied:\n" +
              `${SITE_URL}/mitglied\n\n` +
              "Abmelden kannst du dich jederzeit hier:\n" +
              `${unsubUrl}\n\n` +
              "Die Neue. Der Staat muss liefern oder lassen.",
            headers: {
              "List-Unsubscribe": `<${SITE_URL}/api/abmelden?token=${pending.unsub}>`,
              "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
            },
          });
        } catch {
          // Begruessungsmail-Fehler ignorieren, die Bestaetigung bleibt gueltig.
        }
      }

      await redis.del(`pending:${token}`);
      status = "ok";
    } else {
      const confirmedEmail = (await redis.get(`confirmed:${token}`)) as string | null;
      status = confirmedEmail ? "ok" : "abgelaufen";
    }
  }

  const text =
    status === "ok"
      ? "Danke. Deine Anmeldung ist bestätigt. Wir melden uns."
      : status === "abgelaufen"
        ? "Dieser Bestätigungslink ist abgelaufen oder wurde schon benutzt. Bitte trag dich noch einmal ein."
        : "Mit diesem Link stimmt etwas nicht. Bitte trag dich noch einmal ein.";

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-5 py-20">
          <h1 className="text-3xl font-black uppercase tracking-tight sm:text-4xl">
            {status === "ok" ? "Bestätigt" : "Hinweis"}
          </h1>
          <p className="mt-4 text-lg text-ink/90">{text}</p>
          <Link
            href="/"
            className="mt-8 inline-block bg-tuerkis px-5 py-3 text-sm font-bold uppercase tracking-wide text-navy hover:bg-tuerkis-600"
          >
            Zur Startseite
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
