import Link from "next/link";
import type { ReactNode } from "react";
import type { PrivacyApp } from "@/content/apps";

export function PolicyDocument({
  app,
  children,
}: {
  app: PrivacyApp;
  children: ReactNode;
}) {
  return (
    <main className="mx-auto w-full max-w-2xl px-6 py-14">
      <p className="text-sm font-medium text-zinc-500">
        <Link href="/" className="hover:text-zinc-950">
          App Privacy
        </Link>
      </p>
      <p className="mt-6 text-sm font-medium tracking-wide text-zinc-500">
        {app.name}
      </p>
      <h1 className="mt-1 text-3xl font-semibold tracking-tight">
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
    <a
      className="underline decoration-zinc-300 underline-offset-2 hover:decoration-zinc-800"
      href={href}
    >
      {children}
    </a>
  );
}
