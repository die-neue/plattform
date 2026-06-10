import type { Metadata } from "next";
import { Header, Footer } from "@/components/site";
import { UnsubscribeForm } from "@/components/unsubscribe-form";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Abmelden | Die Neue",
};

export default async function AbmeldenPage({
  searchParams,
}: {
  searchParams: Promise<{ token?: string }>;
}) {
  const { token } = await searchParams;
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-5 py-20">
          <h1 className="text-3xl font-black uppercase tracking-tight sm:text-4xl">
            Abmelden
          </h1>
          {token ? (
            <UnsubscribeForm token={token} />
          ) : (
            <p className="mt-4 text-lg text-muted">Dieser Abmeldelink ist ungültig.</p>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
