import Link from "next/link";
import { claim } from "@/lib/content";

export const REPO_URL = "https://github.com/die-neue/programm";

export function Wordmark() {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <span className="inline-block h-5 w-5 -skew-x-12 bg-tuerkis transition-transform group-hover:translate-x-0.5" />
      <span className="text-lg font-black uppercase tracking-tight">Die Neue</span>
    </Link>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Wordmark />
        <nav className="flex items-center gap-5 text-sm font-bold uppercase tracking-wide">
          <Link href="/programm" className="text-muted hover:text-ink">
            Programm
          </Link>
          <Link
            href="/#mitmachen"
            className="bg-tuerkis px-3 py-2 text-navy hover:bg-tuerkis-600"
          >
            Mitmachen
          </Link>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-navy-700">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <p className="text-2xl font-black uppercase tracking-tight">
          Die Neue. <span className="text-tuerkis">{claim}</span>
        </p>
        <div className="mt-8 grid gap-8 text-sm text-muted sm:grid-cols-3">
          <div>
            <p className="font-bold uppercase tracking-wide text-ink">Mitmachen</p>
            <ul className="mt-3 space-y-1">
              <li>
                <Link href="/#mitmachen" className="hover:text-ink">
                  Mitglied werden
                </Link>
              </li>
              <li>
                <Link href="/programm" className="hover:text-ink">
                  Programm lesen
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-bold uppercase tracking-wide text-ink">Transparenz</p>
            <ul className="mt-3 space-y-1">
              <li>
                <a href={REPO_URL} className="hover:text-ink" rel="noreferrer">
                  Programm auf GitHub
                </a>
              </li>
              <li>Finanzen offen, über die Pflicht hinaus</li>
            </ul>
          </div>
          <div>
            <p className="font-bold uppercase tracking-wide text-ink">Rechtliches</p>
            <ul className="mt-3 space-y-1">
              <li>
                <Link href="/impressum" className="hover:text-ink">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="hover:text-ink">
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-10 text-xs text-muted">
          Inhalte kommen von Menschen. Aufbereitung und Teile der Kommunikation werden durch
          Künstliche Intelligenz unterstützt und sind als solche gekennzeichnet. Arbeitsstand,
          in Gründung.
        </p>
      </div>
    </footer>
  );
}
