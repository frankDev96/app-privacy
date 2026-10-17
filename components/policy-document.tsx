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
      <p className="text-sm font-medium text-zinc-500">PlaystackInteractive</p>
      <p
        className={`mt-6 text-sm font-medium tracking-wide ${tone?.name ?? "text-zinc-500"}`}
      >
        {app.name}
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

