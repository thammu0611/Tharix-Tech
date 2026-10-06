export interface NavItem {
  label: string;
  href: string;
  description?: string;
  children?: NavItem[];
}

export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Web Development", href: "/services/web-development" },
      { label: "Mobile Development", href: "/services/mobile-development" },
      { label: "UI/UX Design", href: "/services/ui-ux-design" },
      { label: "AI & Machine Learning", href: "/services/ai-ml" },
      { label: "Custom Software", href: "/services/custom-software" },
      { label: "Cloud & Backend", href: "/services/cloud-backend" },
    ],
  },
  { label: "Solutions", href: "/solutions" },
  { label: "Work", href: "/work" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export const footerNav = {
  company: {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Our Work", href: "/work" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  services: {
    title: "Services",
    links: [
      { label: "Web Development", href: "/services/web-development" },
      { label: "Mobile Development", href: "/services/mobile-development" },
      { label: "UI/UX Design", href: "/services/ui-ux-design" },
      { label: "AI & ML", href: "/services/ai-ml" },
      { label: "Cloud & Backend", href: "/services/cloud-backend" },
      { label: "Custom Software", href: "/services/custom-software" },
    ],
  },
  resources: {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Case Studies", href: "/work" },
      { label: "FAQ", href: "/faq" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
} as const;
