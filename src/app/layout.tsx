import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";

import { Navbar } from "@/components/navigation/Navbar";
import { ScrollProgress } from "@/components/navigation/ScrollProgress";
import { BackToTop } from "@/components/navigation/BackToTop";
import { StickyMobileCTA } from "@/components/navigation/StickyMobileCTA";
import { Footer } from "@/components/layout/Footer";
import { Providers } from "@/components/layout/Providers";
import { themeInitScript } from "@/hooks/use-theme";
import { organisationJsonLd, websiteJsonLd } from "@/lib/seo";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  keywords: [
    "software development company",
    "web development",
    "mobile app development",
    "UI/UX design",
    "AI and machine learning",
    "cloud engineering",
    "custom software",
    "Chennai",
  ],
  formatDetection: { telephone: false, address: false, email: false },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f6f5" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0d10" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Applies the stored theme before first paint — no flash. */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organisationJsonLd()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd()) }}
        />
      </head>
      <body className="grain relative min-h-dvh antialiased">
        <Providers>
          <ScrollProgress />
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
          <BackToTop />
          <StickyMobileCTA />
        </Providers>
      </body>
    </html>
  );
}
