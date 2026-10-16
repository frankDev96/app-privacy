import Link from "next/link";
import type { ReactNode } from "react";
import type { PrivacyApp } from "@/content/apps";

const themes = {
  hydrofit: {
    name: "text-[#0077ff]",
    title:
      "bg-gradient-to-r from-[#0058bf] to-[#12a36a] bg-clip-text text-transparent",
  },
  arrow: {
    name: "text-[#c026d3]",
    title:
      "w-fit bg-gradient-to-r from-[#c026d3] via-[#ea580c] to-[#0891b2] bg-clip-text text-transparent",
  },
} as const;

export function PolicyDocument({
  app,
  children,
  theme,
}: {
  app: PrivacyApp;
  children: ReactNode;
  theme?: keyof typeof themes;
}) {
  const tone = theme ? themes[theme] : undefined;

  return (
    <main className="mx-auto w-full max-w-2xl px-6 py-14">
      <p className="text-sm font-medium text-zinc-500">
        <Link
          href="/"
          className="underline decoration-zinc-400 underline-offset-4 hover:text-zinc-950"
        >
          PlaystackInteractive
        </Link>
      </p>
      <p className="mt-6">
        <Link
          href={`/${app.slug}`}
          className={`text-sm font-medium tracking-wide underline decoration-current underline-offset-4 ${tone?.name ?? "text-zinc-500"}`}
        >
          {app.name}
        </Link>
      </p>
      <h1
        className={`mt-1 text-3xl font-semibold tracking-tight ${tone?.title ?? ""}`}
      >
        Privacy Policy
      </h1>
      <p className="mt-4 text-sm text-zinc-500">
        Effective date: {app.effectiveDate}
      </p>
      <div className="mt-10 space-y-8 text-[15px] leading-7 text-zinc-800">
        {children}
      </div>
    </main>
  );
}

export function PolicySection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="space-y-3">
      <h2 className="text-lg font-semibold text-zinc-950">{title}</h2>
      {children}
    </section>
  );
}

export function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      prefetch={false}
      className="underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-800"
    >
      {children}
    </Link>
  );
}
