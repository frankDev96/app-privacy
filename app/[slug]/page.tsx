import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { HelpEscapeArrowTesting } from "@/components/help-escape-arrow-testing";
import { HydrofitBeta } from "@/components/hydrofit-beta";
import { apps, getApp } from "@/content/apps";
import { publicPath } from "@/lib/public-path";

const details = {
  hydrofit: HydrofitBeta,
  helpescapearrow: HelpEscapeArrowTesting,
};

const pageBackground: Record<string, string> = {
  hydrofit:
    "min-h-full bg-[linear-gradient(180deg,#d7ecff_0%,#e7fff6_220px,#f6f5f2_460px)]",
  helpescapearrow:
    "min-h-full bg-[linear-gradient(180deg,#fce7f3_0%,#ffedd5_200px,#cffafe_420px,#f6f5f2_680px)]",
};

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
    return { title: "App" };
  }

  return {
    title: app.name,
    description: app.summary,
  };
}

export default async function AppDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const app = getApp(slug);
  const Detail = details[slug as keyof typeof details];

  if (!app || !Detail) {
    notFound();
  }

  return (
    <div className={pageBackground[slug]}>
      <header className="mx-auto flex w-full max-w-2xl items-center justify-between gap-4 px-6 pt-14">
        <Link
          href="/"
          className="text-sm font-medium text-zinc-500 underline decoration-zinc-400 underline-offset-4 hover:text-zinc-950"
        >
          PlaystackInteractive
        </Link>
        <Link
          href={`/${app.slug}/privacy`}
          className="inline-flex shrink-0 rounded-full bg-zinc-950 px-4 py-2 text-sm font-semibold text-white underline decoration-white underline-offset-4"
        >
          View privacy policy
        </Link>
      </header>
      <div className="mx-auto flex w-full max-w-2xl items-center gap-4 px-6 pt-8 mb-4">
        <img
          src={publicPath(app.icon)}
          alt=""
          className="size-16 shrink-0 rounded-2xl bg-white object-cover shadow-sm"
        />
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">{app.name}</h1>
          <p className="mt-1 text-sm text-zinc-600">{app.summary}</p>
        </div>
      </div>
      <Detail />
    </div>
  );
}
