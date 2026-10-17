const steps = [
  {
    step: "1",
    title: "Join the Google Group",
    detail:
      "Required. Use the Google account linked to your Android device’s Play Store.",
    href: "https://groups.google.com/g/help-escape-arrow-early-access",
    className: "bg-[#d946ef]",
  },
  {
    step: "2",
    title: "Opt in as a closed tester",
    detail: "After joining the group, open the testing link and opt in.",
    href: "https://play.google.com/apps/testing/com.helpescapearrow",
    className: "bg-[#f97316]",
  },
  {
    step: "3",
    title: "Download and test the game",
    detail:
      "Install from Google Play and keep it installed for the full 14 days.",
    href: "https://play.google.com/store/apps/details?id=com.helpescapearrow",
    className: "bg-[#0891b2]",
  },
];

const features = [
  {
    title: "Zen Mode",
    body: "Relax and solve puzzles with unlimited moves.",
    className: "bg-[#fef3c7] text-[#92400e]",
  },
  {
    title: "Challenge Mode",
    body: "Test your logic and planning with move limits.",
    className: "bg-[#fae8ff] text-[#86198f]",
  },
  {
    title: "Minimalist visuals",
    body: "Obsidian and charcoal boards with glowing accents.",
    className: "bg-[#cffafe] text-[#155e75]",
  },
  {
    title: "Immersive feedback",
    body: "Mechanical sound effects and tactile haptics.",
    className: "bg-[#dcfce7] text-[#166534]",
  },
];

export function HelpEscapeArrowTesting() {
  return (
    <section id="testing" className="mx-auto mt-8 w-full max-w-2xl scroll-mt-8 px-6 pb-16">
      <div className="overflow-hidden rounded-3xl shadow-[0_20px_50px_-24px_rgba(217,70,239,0.55)]">
        <div className="bg-gradient-to-br from-[#c026d3] via-[#e11d48] to-[#0369a1] px-6 py-8 text-white">
          <p className="inline-flex rounded-full bg-white/20 px-3 py-1 text-xs font-semibold tracking-wide">
            Android · Puzzle
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight">
            Looking for closed testers
          </h2>
          <p className="mt-2 text-sm text-white/90">
            Help Escape Arrow, a minimalist logic puzzle
          </p>
        </div>

        <div className="space-y-4 bg-white px-6 py-6">
          <p className="text-[15px] leading-7 text-[#243044]">
            I&apos;m an indie developer running the closed testing track for
            Help Escape Arrow. To meet Google Play&apos;s closed testing
            requirements before production, I need testers who join the test,
            download the game, and keep it installed for at least 14
            consecutive days.
          </p>
          <p className="text-[15px] leading-7 text-[#243044]">
            If you are testing an app too, share your testing link. I&apos;ll
            return the favor and test yours for 14 days as well.
          </p>

          <div className="rounded-2xl bg-gradient-to-r from-[#fff7ed] via-[#fdf2f8] to-[#ecfeff] px-4 py-4">
            <p className="text-xs font-semibold tracking-wide text-[#c026d3]">
              About the game
            </p>
            <p className="mt-2 text-[15px] leading-7 text-[#243044]">
              Tap interlocking directional arrows and launch them off the grid
              along unobstructed paths.
            </p>
          </div>

          <ul className="grid gap-3 sm:grid-cols-2">
            {features.map((feature) => (
              <li
                key={feature.title}
                className={`rounded-2xl px-4 py-4 ${feature.className}`}
              >
                <p className="text-sm font-semibold">{feature.title}</p>
                <p className="mt-1 text-sm leading-6 opacity-90">{feature.body}</p>
              </li>
            ))}
          </ul>

          <div>
            <h3 className="text-lg font-semibold text-[#3b0764]">
              How to participate
            </h3>
            <ol className="mt-3 space-y-3">
              {steps.map((step) => (
                <li
                  key={step.href}
                  className={`${step.className} flex items-center gap-4 rounded-2xl px-4 py-4 text-white`}
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white/20 text-sm font-semibold">
                    {step.step}
                  </span>
                  <span>
                    <span className="block font-semibold">{step.title}</span>
                    <span className="mt-0.5 block text-sm text-white/90">
                      {step.detail}
                    </span>
                  </span>
                </li>
              ))}
            </ol>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              On Android, opt in from the Play listing for com.helpescapearrow.
              Playing a few levels every couple of days, and sharing feedback,
              helps a lot.
            </p>
          </div>

          <div className="rounded-2xl bg-[#fff7ed] px-4 py-4 text-[#9a3412]">
            <p className="text-sm font-semibold">Keep it installed for 14 days</p>
            <p className="mt-1 text-sm leading-6">
              The game needs to stay on the device for the full testing period.
              Feedback on level difficulty, screen scaling, gameplay, and bugs
              is especially useful.
            </p>
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-[#f97316] via-[#d946ef] to-[#0891b2] px-5 py-5 text-white">
            <h3 className="text-lg font-semibold">Let&apos;s support each other</h3>
            <p className="mt-2 text-sm leading-6 text-white/95">
              If you are in a closed test too, send your testing link. I&apos;ll
              join, install your app, and test it for 14 days in return.
            </p>
            <p className="mt-3 text-sm leading-6 text-white/95">
              Thanks for helping an indie developer bring Help Escape Arrow to
              life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
