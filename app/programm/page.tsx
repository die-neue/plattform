import type { Metadata } from "next";
import Link from "next/link";
import { Header, Footer, REPO_URL } from "@/components/site";
import { claim, staatsverstaendnis, mechanismen, positionen } from "@/lib/content";

export const metadata: Metadata = {
  title: "Programm | Die Neue",
  description: "Das Programm der Neuen, offen und nachvollziehbar.",
};

export default function ProgrammPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="border-b border-white/10">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-tuerkis">
              Programm
            </p>
            <h1 className="mt-3 text-4xl font-black uppercase tracking-tight sm:text-5xl">
              {claim}
            </h1>
            <p className="mt-6 max-w-3xl text-lg text-ink/90">{staatsverstaendnis}</p>
          </div>
        </section>

        <section className="border-b border-white/10 bg-navy-700">
          <div className="mx-auto max-w-6xl px-5 py-14">
            <h2 className="text-2xl font-black uppercase tracking-tight sm:text-3xl">
              Unsere Mechanismen
            </h2>
            <p className="mt-2 text-muted">
              Wir setzen nicht auf Appelle, sondern auf Regeln, die wirken.
            </p>
            <div className="mt-8 grid gap-px bg-white/10 sm:grid-cols-2">
              {mechanismen.map((m, i) => (
                <div key={i} className="bg-navy-700 p-6">
                  <h3 className="text-lg font-bold text-tuerkis">{m.titel}</h3>
                  <p className="mt-2 text-sm text-muted">{m.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-14">
          <h2 className="text-2xl font-black uppercase tracking-tight sm:text-3xl">
            Unsere Positionen
          </h2>
          <div className="mt-8 space-y-px bg-white/10">
            {positionen.map((p) => (
              <article key={p.nr} className="bg-navy p-6 sm:p-8">
                <div className="flex items-baseline gap-4">
                  <span className="text-2xl font-black text-tuerkis">
                    {String(p.nr).padStart(2, "0")}
                  </span>
                  <h3 className="text-xl font-bold sm:text-2xl">{p.titel}</h3>
                </div>
                <p className="mt-4 max-w-3xl text-lg text-ink/90">{p.einfach}</p>
                <details className="group mt-4">
                  <summary className="cursor-pointer list-none text-sm font-bold uppercase tracking-wide text-tuerkis hover:text-tuerkis-600">
                    Tiefe und Belege anzeigen
                  </summary>
                  <div className="mt-5 max-w-3xl space-y-5 border-l-2 border-white/10 pl-5">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wide text-muted">
                        Was wir konkret fordern
                      </p>
                      <ul className="mt-2 space-y-2">
                        {p.forderungen.map((f, i) => (
                          <li key={i} className="flex gap-3 text-sm text-ink/90">
                            <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 bg-tuerkis" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wide text-muted">
                        Machbarkeit
                      </p>
                      <p className="mt-1 text-sm text-muted">{p.machbarkeit}</p>
                    </div>
                  </div>
                </details>
              </article>
            ))}
          </div>

          <div className="mt-10 border border-white/10 p-6">
            <p className="text-sm text-muted">
              Das gesamte Programm und der Weg seiner Entstehung sind öffentlich.
            </p>
            <a
              href={REPO_URL}
              rel="noreferrer"
              className="mt-3 inline-block bg-tuerkis px-5 py-3 text-sm font-bold uppercase tracking-wide text-navy hover:bg-tuerkis-600"
            >
              Programm auf GitHub ansehen
            </a>
          </div>

          <p className="mt-10">
            <Link
              href="/"
              className="text-sm font-bold uppercase tracking-wide text-muted hover:text-ink"
            >
              Zurück zur Startseite
            </Link>
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
