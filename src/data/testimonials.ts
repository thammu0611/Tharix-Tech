/**
 * TESTIMONIALS
 * ────────────
 * No fabricated client quotes. Until real, attributable testimonials are
 * supplied and approved for publication, this array stays empty and the
 * site renders an honest empty state instead of invented praise.
 *
 * To publish a real testimonial, add an entry with the client's consent:
 *
 *   {
 *     id: "acme-2026",
 *     quote: "…",
 *     name: "…",
 *     position: "…",
 *     company: "…",
 *     photo: "/testimonials/acme.jpg",   // optional
 *     approved: true,
 *   }
 *
 * Only entries with `approved: true` are rendered.
 */

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  position: string;
  company: string;
  photo?: string;
  approved: boolean;
}

export const testimonials: Testimonial[] = [];

export const approvedTestimonials = testimonials.filter((t) => t.approved);
