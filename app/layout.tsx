import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Die Neue. Der Staat muss liefern oder lassen.",
  description:
    "Die Neue ist die Partei für einen Staat, der seine Kernaufgaben wieder zuverlaessig erfuellt. Weniger Buerokratie, mehr Eigentum, mehr Tempo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-navy text-ink">{children}</body>
    </html>
  );
}
