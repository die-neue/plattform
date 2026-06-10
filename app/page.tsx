import Link from "next/link";
import { Header, Footer, REPO_URL } from "@/components/site";
import { kernformel, praeambel, sofortprogramm } from "@/lib/content";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="border-b border-white/10">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-tuerkis">
              Die Neue
            </p>
            <h1 className="mt-4 text-4xl font-black uppercase leading-[1.04] tracking-tight sm:text-6xl md:text-7xl">
              Der Staat muss <span className="text-tuerkis">liefern</span> oder lassen.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted sm:text-xl">{kernformel}</p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-wide">
              <Link
                href="/programm"
                className="bg-tuerkis px-5 py-3 text-navy hover:bg-tuerkis-600"
              >
                Programm lesen
              </Link>
              <Link
                href="#mitmachen"
                className="border border-tuerkis px-5 py-3 text-tuerkis hover:bg-tuerkis hover:text-navy"
              >
                Mitglied werden
              </Link>
              <a
                href={REPO_URL}
                rel="noreferrer"
                className="border border-white/20 px-5 py-3 text-ink hover:border-white/50"
              >
                Auf GitHub ansehen
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="text-3xl font-black uppercase tracking-tight sm:text-4xl">
            Worum es geht
          </h2>
          <div className="mt-6 max-w-3xl space-y-4 text-lg text-ink/90">
            {praeambel.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <p className="mt-8 max-w-3xl border-l-4 border-tuerkis pl-5 text-xl font-bold">
            {kernformel}
          </p>
        </section>

        <section className="border-y border-white/10 bg-navy-700">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <h2 className="text-3xl font-black uppercase tracking-tight sm:text-4xl">
              Unser Sofortprogramm
            </h2>
            <p className="mt-2 text-muted">Womit wir anfangen.</p>
            <ol className="mt-8 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
              {sofortprogramm.map((it, i) => (
                <li key={i} className="bg-navy-700 p-6">
                  <span className="text-3xl font-black text-tuerkis">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 text-lg font-bold">{it.titel}</h3>
                  <p className="mt-2 text-sm text-muted">{it.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="mitmachen" className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="text-3xl font-black uppercase tracking-tight sm:text-4xl">
            Mitmachen
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            Wir bauen eine Partei, die liefert. Trag dich ein und sei von Anfang an dabei.
            Der Mitglieds- und Vorschlagsprozess startet in Kürze.
          </p>
          <form className="mt-6 flex max-w-md flex-col gap-3 sm:flex-row" action="#">
            <input
              type="email"
              required
              placeholder="Deine E-Mail"
              className="flex-1 border border-white/20 bg-navy px-4 py-3 text-ink placeholder:text-muted focus:border-tuerkis focus:outline-none"
            />
            <button
              type="submit"
              className="bg-tuerkis px-5 py-3 font-bold uppercase tracking-wide text-navy hover:bg-tuerkis-600"
            >
              Dabei sein
            </button>
          </form>
          <p className="mt-3 text-xs text-muted">
            Noch kein Versand aktiv, dies ist ein Vorschau-Auftritt.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
