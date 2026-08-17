export function HeroShowcase() {
  return (
    <section className="relative -mt-12 rounded-t-[32px] bg-[var(--color-tokens-bg-weak)] px-6 pt-16 pb-24 md:px-16">
      {/* TODO: replace with the real product screenshot — drop the file at public/hero-image.png */}
      <div className="mx-auto flex aspect-16/10 max-w-[1120px] items-center justify-center overflow-hidden rounded-2xl border border-dashed border-black/10 bg-white/40">
        <p className="text-sm text-black/40">Product screenshot goes here</p>
      </div>
    </section>
  );
}
