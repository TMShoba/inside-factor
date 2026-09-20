import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Inside Factor | Investigative Journalism by Thabo Makwakwa",
  description:
    "Inside Factor — Unfiltered investigative journalism from South Africa. Probing the deepest layers of reality. Hard-hitting news, politics, corruption exposés and analysis.",
  keywords: [
    "Inside Factor",
    "Thabo Makwakwa",
    "investigative journalism",
    "South Africa news",
    "corruption",
    "politics",
  ],
  openGraph: {
    title: "Inside Factor",
    description: "Unfiltered investigative journalism from South Africa",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)]">
        {children}
      </body>
    </html>
  );
}
