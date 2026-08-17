import Image from "next/image";

export function SiteHeader() {
  return (
    <header className="relative z-10 flex justify-center pt-12">
      <div className="flex w-[191px] items-center gap-2 rounded-xl bg-[var(--color-tokens-bg-weakest)] p-3">
        <p className="flex-1 text-[length:var(--text-control-xl-600-font-size)] leading-[var(--text-control-xl-600-line-height)] font-semibold tracking-[var(--text-control-xl-600-letter-spacing)] text-[color:var(--color-tokens-text-strongest)] [text-shadow:0_1px_0_var(--color-tokens-static-black-black-alpha-16)]">
          Fixa.
        </p>
        <Image
          src="/icons/menu.svg"
          alt=""
          width={18}
          height={10}
          className="h-[10px] w-[18px] shrink-0"
        />
      </div>
    </header>
  );
}
