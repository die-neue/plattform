import type { Metadata } from "next";
import Link from "next/link";
import { Header, Footer } from "@/components/site";

export const metadata: Metadata = {
  title: "Mitglied werden | Die Neue",
  description:
    "Vom Unterstützer zum Mitglied: mitentscheiden über Programm und Ämter bei Die Neue.",
};

export default function MitgliedPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-5 py-16">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-tuerkis">
            Nächster Schritt
          </p>
          <h1 className="mt-3 text-4xl font-black uppercase tracking-tight sm:text-5xl">
            Mitglied werden
          </h1>
          <p className="mt-6 text-lg text-ink/90">
            Unterstützen kann jeder, sofort und ohne Hürde. Wer wirklich mitentscheiden will,
            über Programm, Kandidaten und die Richtung der Partei, wird Mitglied.
          </p>

          <div className="mt-10 space-y-8">
            <div>
              <h2 className="text-lg font-bold text-tuerkis">Was Mitglieder können</h2>
              <ul className="mt-3 space-y-2 text-ink/90">
                <li>Über Positionen und das Programm mitentscheiden</li>
                <li>Wählen und selbst für Ämter kandidieren</li>
                <li>Auf Parteitagen abstimmen</li>
                <li>Vorschläge verbindlich einbringen</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-bold text-tuerkis">Gut zu wissen</h2>
              <ul className="mt-3 space-y-2 text-ink/90">
                <li>Beitrag ab 3 Euro im Monat, sozial gestaffelt.</li>
                <li>Aufnahme über ein kurzes Verfahren mit zwei Wochen Prüffrist.</li>
                <li>
                  Voraussetzung ist das Bekenntnis zum Grundgesetz, zur Menschenwürde und zu
                  unseren Werten.
                </li>
                <li>
                  Mehr dazu im{" "}
                  <Link href="/programm" className="text-tuerkis hover:underline">
                    Programm
                  </Link>
                  .
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-bold text-tuerkis">So geht es jetzt los</h2>
              <p className="mt-3 text-ink/90">
                Die formale Mitgliedschaft startet mit der Gründung der Partei. Wenn du von
                Anfang an dabei sein willst, sag uns kurz Bescheid. Wir melden uns, sobald
                die Aufnahme möglich ist.
              </p>
              <a
                href="mailto:kontakt@die-neue.org?subject=Mitgliedschaft%20bei%20Die%20Neue"
                className="mt-6 inline-block bg-tuerkis px-5 py-3 text-sm font-bold uppercase tracking-wide text-navy hover:bg-tuerkis-600"
              >
                Mitgliedschaft anfragen
              </a>
            </div>
          </div>

          <p className="mt-12">
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
