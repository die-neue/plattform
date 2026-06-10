import Link from "next/link";
import { Header, Footer, REPO_URL } from "@/components/site";
import { SignupForm } from "@/components/signup-form";
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
                Unterstützer werden
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
            Trag dich als Unterstützer ein, sofort und ohne Hürde. Mitglied mit vollem
            Stimmrecht wirst du im nächsten Schritt. Wie das geht, erklären wir dir nach
            deiner Bestätigung.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="border border-tuerkis p-6">
              <p className="text-xs font-bold uppercase tracking-wide text-tuerkis">Jetzt</p>
              <h3 className="mt-2 text-2xl font-black uppercase tracking-tight">
                Unterstützer werden
              </h3>
              <p className="mt-3 text-sm text-muted">Sofort, ohne Hürde, kostenlos.</p>
              <ul className="mt-4 space-y-2 text-sm text-ink/90">
                <li>Newsletter und Infos erhalten</li>
                <li>Vorschläge einbringen</li>
                <li>Mitdiskutieren</li>
                <li>An offenen Formaten teilnehmen</li>
                <li>Spenden</li>
              </ul>
              <SignupForm
                typ="unterstuetzer"
                buttonLabel="Dabei sein"
                placeholder="Deine E-Mail"
              />
            </div>

            <div className="border border-white/15 p-6">
              <p className="text-xs font-bold uppercase tracking-wide text-muted">
                Nächster Schritt
              </p>
              <h3 className="mt-2 text-2xl font-black uppercase tracking-tight">
                Mitglied werden
              </h3>
              <p className="mt-3 text-sm text-muted">
                Volles Stimmrecht, Programm und Ämter mitgestalten. Über ein
                Aufnahmeverfahren mit kurzer Prüffrist. Beitrag ab 3 Euro im Monat, sozial
                gestaffelt.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-ink/90">
                <li>Über Positionen mitentscheiden</li>
                <li>Wählen und gewählt werden</li>
                <li>Auf Parteitagen abstimmen</li>
              </ul>
              <Link
                href="/mitglied"
                className="mt-6 inline-block border border-tuerkis px-5 py-3 text-sm font-bold uppercase tracking-wide text-tuerkis hover:bg-tuerkis hover:text-navy"
              >
                So wirst du Mitglied
              </Link>
            </div>
          </div>
          <p className="mt-4 text-xs text-muted">
            Nach der Eintragung erhältst du eine Bestätigungsmail (Double-Opt-in). Erst nach
            deiner Bestätigung speichern wir dich.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
