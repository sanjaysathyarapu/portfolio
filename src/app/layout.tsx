import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { portfolio } from "@/data/portfolio";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex",
  display: "swap",
});

const { seo } = portfolio;

export const metadata: Metadata = {
  title: seo.siteTitle,
  description: seo.siteDescription,
  metadataBase: new URL(seo.siteUrl),
  openGraph: {
    title: seo.siteTitle,
    description: seo.siteDescription,
    url: seo.siteUrl,
    siteName: seo.siteTitle,
    images: [
      {
        url: seo.ogImage,
        width: 1200,
        height: 630,
        alt: seo.siteTitle,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: seo.siteTitle,
    description: seo.siteDescription,
    images: [seo.ogImage],
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
      className={`${fraunces.variable} ${ibmPlexSans.variable}`}
    >
      <body>
        {/* Skip link for keyboard users */}
        <a
          href="#main-content"
          className="focus-ring sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to main content
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
