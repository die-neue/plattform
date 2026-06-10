"use client";

import { useState } from "react";
import Link from "next/link";

type Props = {
  typ: "unterstuetzer" | "mitglied";
  buttonLabel: string;
  placeholder: string;
  variant?: "solid" | "outline";
};

export function SignupForm({ typ, buttonLabel, placeholder, variant = "solid" }: Props) {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!consent) {
      setStatus("error");
      setMessage("Bitte stimme der Datenschutzerklärung zu.");
      return;
    }
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/api/anmelden", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, typ, consent }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        setStatus("ok");
        setMessage(
          data.already
            ? "Du bist bereits eingetragen."
            : "Fast geschafft. Bitte bestätige den Link in deiner E-Mail.",
        );
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Das hat nicht geklappt. Bitte später erneut versuchen.");
      }
    } catch {
      setStatus("error");
      setMessage("Das hat nicht geklappt. Bitte später erneut versuchen.");
    }
  }

  if (status === "ok") {
    return (
      <p className="mt-6 border border-tuerkis bg-tuerkis/10 p-4 text-sm text-ink">{message}</p>
    );
  }

  const btn =
    variant === "outline"
      ? "border border-tuerkis px-5 py-3 font-bold uppercase tracking-wide text-tuerkis hover:bg-tuerkis hover:text-navy"
      : "bg-tuerkis px-5 py-3 font-bold uppercase tracking-wide text-navy hover:bg-tuerkis-600";

  return (
    <form className="mt-6" onSubmit={onSubmit}>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          className="flex-1 border border-white/20 bg-navy px-4 py-3 text-ink placeholder:text-muted focus:border-tuerkis focus:outline-none"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className={`${btn} disabled:opacity-60`}
        >
          {status === "loading" ? "Moment ..." : buttonLabel}
        </button>
      </div>
      <label className="mt-3 flex items-start gap-2 text-xs text-muted">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5"
        />
        <span>
          Ich bin mit der Verarbeitung meiner E-Mail einverstanden. Es gilt die{" "}
          <Link href="/datenschutz" className="text-tuerkis hover:underline">
            Datenschutzerklärung
          </Link>
          .
        </span>
      </label>
      {status === "error" && <p className="mt-2 text-xs text-red-400">{message}</p>}
    </form>
  );
}
