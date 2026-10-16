export type PrivacyApp = {
  slug: string;
  name: string;
  summary: string;
  effectiveDate: string;
};

export const apps: PrivacyApp[] = [
  {
    slug: "hydrofit",
    name: "HydroFit.do",
    summary: "Personal hydration companion.",
    effectiveDate: "September 26, 2026",
  },
  {
    slug: "helpescapearrow",
    name: "Help Escape Arrow",
    summary: "Android puzzle game.",
    effectiveDate: "1 November 2026",
  },
];

export function getApp(slug: string): PrivacyApp | undefined {
  return apps.find((app) => app.slug === slug);
}
