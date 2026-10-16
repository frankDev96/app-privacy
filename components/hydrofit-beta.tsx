import Link from "next/link";

const steps = [
  {
    step: "1",
    title: "Join the Google Group",
    href: "https://groups.google.com/g/hydrofit-beta-testers",
    detail: "Ask to join the closed tester group.",
    className: "bg-[#0077ff]",
  },
  {
    step: "2",
    title: "Opt-in on the web",
    href: "https://play.google.com/apps/testing/com.hydrofitdo",
    detail: "Accept the beta on Google Play.",
    className: "bg-[#00a3c4]",
  },
  {
    step: "3",
    title: "Download on Android",
    href: "https://play.google.com/store/apps/details?id=com.hydrofitdo",
    detail: "Install HydroFit from the Play listing.",
    className: "bg-[#12a36a]",
  },
];

export function HydrofitBeta() {
  return (
    <section id="beta" className="mx-auto w-full max-w-2xl px-6 pb-16">
      <div className="overflow-hidden rounded-3xl shadow-[0_20px_50px_-24px_rgba(0,119,255,0.55)]">
        <div className="bg-gradient-to-br from-[#0058bf] via-[#0077ff] to-[#19c3b5] px-6 py-8 text-white">
          <p className="inline-flex rounded-full bg-white/20 px-3 py-1 text-xs font-semibold tracking-wide">
            Android · Health & Fitness
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight">
            Looking for mutual testers
          </h2>
          <p className="mt-2 text-sm text-sky-100">
            HydroFit, a privacy-first hydration tracker
          </p>
        </div>

        <div className="space-y-4 bg-white px-6 py-6">
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl bg-[#eaf2ff] px-4 py-4">
              <p className="text-xs font-semibold tracking-wide text-[#0058bf]">
                App name
              </p>
              <p className="mt-1 text-lg font-semibold text-[#0b3a6e]">
                HydroFit
              </p>
            </div>
            <div className="rounded-2xl bg-[#e7faf4] px-4 py-4">
              <p className="text-xs font-semibold tracking-wide text-[#0d7a52]">
                Category
              </p>
              <p className="mt-1 text-lg font-semibold text-[#0b3a6e]">
                Health & Fitness / Utility
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-[#f4f0ff] px-4 py-4">
            <p className="text-xs font-semibold tracking-wide text-[#6d28d9]">
              Description
            </p>
            <p className="mt-2 text-[15px] leading-7 text-[#243044]">
              HydroFit is an offline-first, privacy-centric hydration
              companion. It calculates a tailored daily water target based on
              your body weight, logs your intake entirely locally, and sends
              reliable reminders. No user accounts, no cloud syncs, and your
              data never leaves your phone.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[#0b3a6e]">
              How to join the beta test
            </h3>
            <ol className="mt-3 space-y-3">
              {steps.map((step) => (
                <li
                  key={step.href}
                  className={`${step.className} flex items-center gap-4 rounded-2xl px-4 py-4 text-white`}
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/20 text-sm font-semibold">
                    {step.step}
                  </span>
                  <span>
                    <Link
                      href={step.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      prefetch={false}
                      className="font-semibold underline decoration-white/80 underline-offset-4"
                    >
                      {step.title}
                    </Link>
                    <span className="mt-0.5 block text-sm text-white/85">
                      {step.detail}
                    </span>
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-[#ff8a4c] to-[#f43f5e] px-5 py-5 text-white">
            <h3 className="text-lg font-semibold">Mutual support</h3>
            <p className="mt-2 text-sm leading-6 text-white/95">
              I need to fulfill the 14-day closed testing phase and will keep
              your app installed and actively test it for the full 14 days in
              return.
            </p>
            <p className="mt-3 text-sm leading-6 text-white/95">
              Share your Google Group and testing links. I will join your
              group, install your app, and reply with proof right away.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
