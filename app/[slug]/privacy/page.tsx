import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PolicyDocument } from "@/components/policy-document";
import { apps, getApp } from "@/content/apps";
import { policies } from "@/content/policies";

export function generateStaticParams() {
  return apps.map((app) => ({ slug: app.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const app = getApp(slug);

  if (!app) {
    return { title: "Privacy Policy" };
  }

  return {
    title: `${app.name} Privacy Policy`,
    description: `Privacy policy for ${app.name}.`,
  };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const app = getApp(slug);
  const Policy = policies[slug];

  if (!app || !Policy) {
    notFound();
  }

  return (
    <PolicyDocument
      app={app}
      theme={
        slug === "hydrofit"
          ? "hydrofit"
          : slug === "helpescapearrow"
            ? "arrow"
            : undefined
      }
    >
      <Policy />
    </PolicyDocument>
  );
}
