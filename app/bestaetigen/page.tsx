import type { Metadata } from "next";
import Link from "next/link";
import { Header, Footer } from "@/components/site";
import { getRedis } from "@/lib/store";

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
      await redis.del(`pending:${token}`);
      status = "ok";
    } else {
      status = "abgelaufen";
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
