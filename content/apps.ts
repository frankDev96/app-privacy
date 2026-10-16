export type PrivacyApp = {
  slug: string;
  name: string;
  summary: string;
  effectiveDate: string;
  icon: string;
};

export const apps: PrivacyApp[] = [
  {
    slug: "hydrofit",
    name: "HydroFit.do",
    summary: "Offline-first, privacy-centric hydration companion.",
    effectiveDate: "September 26, 2026",
    icon: "/icons/hydrofit.png",
  },
  {
    slug: "helpescapearrow",
    name: "Help Escape Arrow",
    summary: "Android puzzle game.",
    effectiveDate: "1 November 2026",
    icon: "/icons/help-escape-arrow.webp",
  },
];

export function getApp(slug: string): PrivacyApp | undefined {
  return apps.find((app) => app.slug === slug);
}
