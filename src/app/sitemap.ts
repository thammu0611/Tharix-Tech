import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { posts } from "@/data/posts";

const base = siteConfig.url.replace(/\/$/, "");

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = (
    [
      { url: `${base}/`, changeFrequency: "monthly", priority: 1 },
      { url: `${base}/about`, changeFrequency: "monthly", priority: 0.8 },
      { url: `${base}/services`, changeFrequency: "monthly", priority: 0.9 },
      { url: `${base}/solutions`, changeFrequency: "monthly", priority: 0.7 },
      { url: `${base}/work`, changeFrequency: "monthly", priority: 0.9 },
      { url: `${base}/careers`, changeFrequency: "weekly", priority: 0.7 },
      { url: `${base}/blog`, changeFrequency: "weekly", priority: 0.8 },
      { url: `${base}/faq`, changeFrequency: "monthly", priority: 0.6 },
      { url: `${base}/contact`, changeFrequency: "yearly", priority: 0.9 },
      { url: `${base}/privacy`, changeFrequency: "yearly", priority: 0.3 },
      { url: `${base}/terms`, changeFrequency: "yearly", priority: 0.3 },
    ] as const
  ).map((route) => ({ ...route, lastModified: now }));

  return [
    ...staticRoutes,
    ...services.map((service) => ({
      url: `${base}/services/${service.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...projects.map((project) => ({
      url: `${base}/work/${project.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...posts.map((post) => ({
      url: `${base}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
