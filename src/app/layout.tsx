import type { Metadata } from "next";
import { draftMode } from "next/headers";
import { Geist, Geist_Mono } from "next/font/google";
import { VisualEditing } from "next-sanity/visual-editing";
import "./globals.css";
import { getSiteUrl } from "@/lib/site";
import { isSanityConfigured } from "@/sanity/lib/client";
import { SanityLive } from "@/sanity/lib/live";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "Flux Graph | Visual planning for systems, content, and GTM",
    template: "%s | Flux Graph",
  },
  description:
    "Flux Graph turns complex systems, content, and go-to-market work into a living map. See dependencies, align every team, and ship with clarity.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isEnabled } = await draftMode();

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full dark`}
    >
      <body className="min-h-full bg-background text-foreground">
        {children}
        {isSanityConfigured ? <SanityLive /> : null}
        {isSanityConfigured && isEnabled ? <VisualEditing /> : null}
      </body>
    </html>
  );
}
