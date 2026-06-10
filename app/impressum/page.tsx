import type { Metadata } from "next";
import { Header, Footer } from "@/components/site";

export const metadata: Metadata = {
  title: "Impressum | Die Neue",
};

export default function ImpressumPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-5 py-16">
          <h1 className="text-3xl font-black uppercase tracking-tight sm:text-4xl">
            Impressum
          </h1>
          <p className="mt-4 text-sm text-muted">
            Hinweis: Die Partei befindet sich in Gründung. Die folgenden Angaben werden mit
            der Gründung vervollständigt. Platzhalter stehen in eckigen Klammern.
          </p>

          <div className="mt-8 space-y-6 text-ink/90">
            <div>
              <h2 className="text-lg font-bold text-tuerkis">Angaben gemäß § 5 DDG</h2>
              <p className="mt-2">
                Die Neue (in Gründung)
                <br />
                [Straße und Hausnummer]
                <br />
                [Postleitzahl] Berlin
              </p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-tuerkis">Vertreten durch</h2>
              <p className="mt-2">Den Bundesvorstand: [Namen der Vorstandsmitglieder]</p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-tuerkis">Kontakt</h2>
              <p className="mt-2">
                E-Mail: [kontakt@die-neue.org]
              </p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-tuerkis">
                Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
              </h2>
              <p className="mt-2">
                [Vor- und Nachname]
                <br />
                [Straße und Hausnummer]
                <br />
                [Postleitzahl] Berlin
              </p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-tuerkis">Haftung für Inhalte und Links</h2>
              <p className="mt-2 text-sm text-muted">
                Für die Inhalte dieser Seiten sind wir nach den allgemeinen Gesetzen
                verantwortlich. Für die Inhalte verlinkter externer Seiten sind deren
                Betreiber verantwortlich. Bei bekanntwerden von Rechtsverletzungen entfernen
                wir entsprechende Links umgehend.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
