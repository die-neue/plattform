import type { Metadata } from "next";
import { Header, Footer } from "@/components/site";

export const metadata: Metadata = {
  title: "Datenschutz | Die Neue",
};

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-lg font-bold text-tuerkis">{title}</h2>
      <div className="mt-2 space-y-2 text-ink/90">{children}</div>
    </div>
  );
}

export default function DatenschutzPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-5 py-16">
          <h1 className="text-3xl font-black uppercase tracking-tight sm:text-4xl">
            Datenschutz
          </h1>
          <p className="mt-4 text-sm text-muted">
            Entwurf. Vor dem aktiven Bewerben von einer oder einem Datenschutzkundigen prüfen
            lassen. Platzhalter stehen in eckigen Klammern.
          </p>

          <div className="mt-8 space-y-6">
            <Block title="Verantwortlicher">
              <p>
                Die Neue (in Gründung), [Straße und Hausnummer], [Postleitzahl] Berlin,
                E-Mail [kontakt@die-neue.org].
              </p>
            </Block>

            <Block title="Eintragung als Unterstützer oder Vormerkung">
              <p>
                Wenn du dich einträgst, verarbeiten wir deine E-Mail-Adresse und den
                Zeitpunkt der Eintragung. Zweck ist, dich zu informieren und dich über den
                Start der Mitgliedschaft zu benachrichtigen.
              </p>
              <p>
                Rechtsgrundlage ist deine Einwilligung nach Artikel 6 Absatz 1 Buchstabe a
                der Datenschutz-Grundverordnung. Du kannst die Einwilligung jederzeit
                widerrufen, zum Beispiel per E-Mail an [kontakt@die-neue.org]. Wir speichern
                die Daten nur so lange, wie es für diesen Zweck nötig ist, und geben sie nicht
                an Dritte zu Werbezwecken weiter.
              </p>
            </Block>

            <Block title="Hosting">
              <p>
                Diese Website wird bei der Vercel Inc. betrieben. Beim Aufruf werden technisch
                notwendige Daten wie die IP-Adresse verarbeitet, um die Seite auszuliefern und
                sicher zu betreiben. Mit dem Anbieter besteht eine Vereinbarung zur
                Auftragsverarbeitung, eine Übermittlung in Drittländer ist über die
                Standardvertragsklauseln abgesichert.
              </p>
            </Block>

            <Block title="Reichweitenmessung">
              <p>
                Wir nutzen eine datensparsame Reichweitenmessung (Vercel Web Analytics). Sie
                arbeitet ohne Cookies und legt keine über die Sitzung hinausgehenden,
                personenbezogenen Profile an.
              </p>
            </Block>

            <Block title="Deine Rechte">
              <p>
                Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der
                Verarbeitung, Datenübertragbarkeit und Widerspruch. Du kannst dich außerdem
                bei einer Datenschutz-Aufsichtsbehörde beschweren. Wende dich dafür an
                [kontakt@die-neue.org].
              </p>
            </Block>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
