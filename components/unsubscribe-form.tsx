"use client";

import { useState } from "react";
import Link from "next/link";

export function UnsubscribeForm({ token }: { token: string }) {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");

  async function onUnsub() {
    setStatus("loading");
    try {
      const res = await fetch(`/api/abmelden?token=${encodeURIComponent(token)}`, {
        method: "POST",
      });
      setStatus(res.ok ? "ok" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "ok") {
    return (
      <div className="mt-4">
        <p className="text-lg text-ink/90">
          Du bist abgemeldet. Wir senden dir keine E-Mails mehr.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block bg-tuerkis px-5 py-3 text-sm font-bold uppercase tracking-wide text-navy hover:bg-tuerkis-600"
        >
          Zur Startseite
        </Link>
      </div>
    );
  }

  if (status === "error") {
    return (
      <p className="mt-4 text-lg text-muted">
        Dieser Abmeldelink ist ungültig oder du bist bereits abgemeldet.
      </p>
    );
  }

  return (
    <div className="mt-4">
      <p className="text-lg text-ink/90">
        Möchtest du dich von den E-Mails von Die Neue abmelden?
      </p>
      <button
        onClick={onUnsub}
        disabled={status === "loading"}
        className="mt-6 bg-tuerkis px-5 py-3 text-sm font-bold uppercase tracking-wide text-navy hover:bg-tuerkis-600 disabled:opacity-60"
      >
        {status === "loading" ? "Moment ..." : "Jetzt abmelden"}
      </button>
    </div>
  );
}
