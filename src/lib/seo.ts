import type { Metadata } from "next";
import { siteConfig, contact, socials } from "@/data/site";

const base = siteConfig.url.replace(/\/$/, "");

interface PageMetaInput {
  title: string;
  description: string;
  /** Path with leading slash, e.g. "/services/web-development". */
  path: string;
  type?: "website" | "article";
  publishedTime?: string;
  /** Overrides the generated OG image path. */
  image?: string;
  keywords?: string[];
}

/**
 * Builds a complete, per-page metadata object: unique title, description,
 * canonical URL, Open Graph and Twitter cards.
 */
export function pageMeta({
  title,
  description,
  path,
  type = "website",
  publishedTime,
  image,
  keywords,
}: PageMetaInput): Metadata {
  const url = `${base}${path === "/" ? "" : path}`;

  // When no explicit image is given, Next's file-based `opengraph-image`
  // and `twitter-image` conventions supply the card artwork automatically.
  const images = image
    ? [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} — ${siteConfig.tagline}`,
        },
      ]
    : undefined;

  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type,
      ...(publishedTime ? { publishedTime } : {}),
      ...(images ? { images } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(image ? { images: [image] } : {}),
    },
  };
}

/** Organisation-level structured data, emitted once in the root layout. */
export function organisationJsonLd() {
  const sameAs = socials.filter((s) => s.status === "confirmed").map((s) => s.href);

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: base,
    slogan: siteConfig.tagline,
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: contact.address.locality,
      addressRegion: contact.address.region,
      addressCountry: contact.address.country,
    },
    ...(sameAs.length ? { sameAs } : {}),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: base,
    inLanguage: "en",
  };
}

export function breadcrumbJsonLd(trail: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${base}${item.path === "/" ? "" : item.path}`,
    })),
  };
}

export function serviceJsonLd(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${base}${path}`,
    provider: { "@type": "Organization", name: siteConfig.name, url: base },
    areaServed: "Worldwide",
  };
}

export function articleJsonLd(input: {
  title: string;
  description: string;
  path: string;
  date: string;
  author: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: input.title,
    description: input.description,
    datePublished: input.date,
    dateModified: input.date,
    author: { "@type": "Organization", name: input.author },
    publisher: { "@type": "Organization", name: siteConfig.name, url: base },
    mainEntityOfPage: `${base}${input.path}`,
  };
}

export function faqJsonLd(items: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}
