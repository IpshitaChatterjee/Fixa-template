import { SiteHeader } from "./site-header";

export function Hero() {
  return (
    <section className="relative z-10 flex h-dvh w-full flex-col overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-800 via-zinc-900 to-black" />
      <video
        className="absolute inset-0 h-dvh w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/hero-poster.jpg"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/15 to-black/40" />

      <SiteHeader />

      <div className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-1 flex-col items-center justify-end gap-14 px-6 pb-12 text-center md:gap-24">
        <div className="flex w-full flex-col items-center gap-5 text-[color:var(--color-tokens-text-static)]">
          <div className="flex flex-col items-center leading-[1.05] tracking-[var(--text-display-l-700-letter-spacing)] md:leading-[var(--text-display-l-700-line-height)]">
            <p className="text-[44px] sm:text-[56px] md:text-[length:var(--text-display-l-700-font-size)]">
              Plan your day
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2">
              <p className="text-[44px] sm:text-[56px] md:text-[length:var(--text-display-l-700-font-size)]">
                without
              </p>
              <p className="font-serif text-[52px] italic sm:text-[64px] md:text-[84px]">
                overwhelm
              </p>
            </div>
          </div>
          <div className="text-[length:var(--text-body-s-500-font-size)] leading-[var(--text-body-s-500-line-height)] font-medium tracking-[var(--text-body-s-500-letter-spacing)]">
            <p>Fixa is a simple ADHD friendly planner</p>
            <p>that turns your thoughts into a clear plan.</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 rounded-lg bg-[var(--color-tokens-static-black-black-alpha-24)] py-1.5 pr-1 pl-5 backdrop-blur-[8px] sm:flex-row sm:gap-5">
          <p className="text-[length:var(--text-body-s-500-font-size)] leading-[var(--text-body-s-500-line-height)] font-medium text-[color:var(--color-tokens-text-static)] sm:whitespace-nowrap">
            No clutter. No complicated setup. Just your day, clearly planned.
          </p>
          <button
            type="button"
            className="shrink-0 rounded-md bg-[var(--color-tokens-bg-weakest)] px-3 py-2 text-[length:var(--text-control-m-500-font-size)] leading-[var(--text-control-m-500-line-height)] font-medium tracking-[var(--text-control-m-500-letter-spacing)] text-[color:var(--color-tokens-text-strongest)] shadow-[inset_0_2px_0_0_var(--effects-shadows-interactive-inverse-inner),inset_0_0_0_1px_var(--effects-shadows-interactive-inverse-base)]"
          >
            Join the waitlist
          </button>
        </div>
      </div>
    </section>
  );
}
