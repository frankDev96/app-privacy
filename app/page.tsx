import Link from "next/link";
import { apps } from "@/content/apps";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-2xl px-6 py-14">
      <p className="text-sm font-medium tracking-wide text-zinc-500">
        Appworks
      </p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight">
        App Privacy
      </h1>
      <p className="mt-4 max-w-xl text-[15px] leading-7 text-zinc-700">
        Static privacy policies for the apps published from this account.
      </p>
      <ul className="mt-10 divide-y divide-zinc-200 border-y border-zinc-200">
        {apps.map((app) => (
          <li key={app.slug}>
            <Link
              href={`/${app.slug}/privacy`}
              className="flex items-baseline justify-between gap-6 py-5 hover:text-zinc-600"
            >
              <span>
                <span className="block text-lg font-medium text-zinc-950">
                  {app.name}
                </span>
                <span className="mt-1 block text-sm text-zinc-500">
                  {app.summary}
                </span>
              </span>
              <span className="shrink-0 text-sm text-zinc-500">
                /{app.slug}/privacy
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
