import Link from "next/link";
import { apps } from "@/content/apps";
import { publicPath } from "@/lib/public-path";

const cards: Record<string, string> = {
  hydrofit:
    "bg-gradient-to-r from-[#0077ff] to-[#12a36a] text-white",
  helpescapearrow:
    "bg-gradient-to-r from-[#c026d3] via-[#ea580c] to-[#0891b2] text-white",
};

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-2xl px-6 py-14">
      <h1 className="text-3xl font-semibold tracking-tight">
        PlaystackInteractive
      </h1>
      <p className="mt-4 max-w-xl text-[15px] leading-7 text-zinc-700">
        Android apps published by PlaystackInteractive.
      </p>
      <ul className="mt-10 space-y-4">
        {apps.map((app) => (
          <li key={app.slug}>
            <div
              className={`flex items-center gap-4 rounded-2xl px-4 py-4 ${cards[app.slug] ?? "bg-white text-zinc-950"}`}
            >
              <img
                src={publicPath(app.icon)}
                alt=""
                className="size-16 shrink-0 rounded-2xl bg-white object-cover"
              />
              <span>
                <Link
                  href={`/${app.slug}`}
                  className="text-lg font-medium underline decoration-current underline-offset-4"
                >
                  {app.name}
                </Link>
                <span className="mt-1 block text-sm opacity-90">
                  {app.summary}
                </span>
              </span>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
