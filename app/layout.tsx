import React from "react";
import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import { Quicksand } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { GoogleAnalytics } from "@/components/google-analytics";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://ventory.app"),

  title: "Ventory — The Voice-First SME Co-Pilot | First AI Powered SME",

  description:
    "Ventory is the first AI-powered voice-first SME co-pilot designed for African retail shops. We provide intelligent inventory management, sales tracking, and voice-activated business insights.",

  keywords: [
    "Ventory",
    "SME co-pilot",
    "voice-first retail",
    "AI shop assistant",
    "inventory management",
    "Naira revenue tracking",
    "offline-first sync",
    "African SME",
    "retail operations",
    "business insights"
  ],

  authors: [{ name: "Ventory Team", url: "https://ventory.app" }],
  creator: "Ventory",
  publisher: "Ventory Inc.",

  openGraph: {
    title: "Ventory — The First AI-Powered SME Co-Pilot",
    description:
      "A voice-first shop assistant that automates inventory and sales tracking for local business owners.",
    url: "https://ventory.app",
    siteName: "Ventory",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ventory - SME Co-Pilot",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Ventory — The Voice-First SME Co-Pilot",
    description:
      "Speak directly to your terminal to update inventory, calculate margins, and log sales without typing a single letter.",
    images: ["/og-image.png"],
    creator: "@ventoryapp",
  },

  alternates: {
    canonical: "https://ventory.app",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headerList = await headers();
  const nonce = headerList.get("x-nonce") ?? undefined;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* MAIN STRUCTURED DATA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "Ventory",
                url: "https://ventory.app",
                logo: "https://ventory.app/logo.png",
                description:
                  "Ventory is an AI-powered SME co-pilot focused on building voice-first solutions for local market merchants.",
                sameAs: [
                  "https://x.com/ventoryapp",
                  "https://www.linkedin.com/company/ventoryapp",
                  "https://github.com/ventoryapp"
                ],
                foundingDate: "2025",
                areaServed: "Global"
              },

              {
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                name: "Ventory App",
                applicationCategory: "BusinessApplication",
                description:
                  "Voice-first shop operations and inventory management.",
              }
            ]),
          }}
        />

        {/* HIDDEN SEO*/}
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        <meta name="geo.region" content="Global" />
      </head>

      <body
        className={`${quicksand.variable} font-sans antialiased dark:bg-background dark:text-foreground overflow-x-hidden`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>

        <GoogleAnalytics nonce={nonce} />
      </body>
    </html>
  );
}