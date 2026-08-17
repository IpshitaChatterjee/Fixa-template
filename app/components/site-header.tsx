"use client";

import { useState } from "react";
import Goo from "gooey-react";
import { useDialKit } from "dialkit";

const NAV_ITEMS = ["Features", "Fixa AI", "FAQs"];

// Entry animation — already tuned, no longer exposed as dials.
const ENTRY_SCALE_DURATION = 150;
const ENTRY_TRANSLATE_DURATION = 470;
const ENTRY_TRANSLATE_DELAY = 70;
const ENTRY_MORPH_DURATION = 320;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  const dial = useDialKit("Navbar", {
    dropGap: [18, 8, 64],
    circleSize: [51, 24, 56],
    navRectWidth: [280, 100, 320],
    navRectHeight: [46, 24, 56],
    navRectRadius: [15, 0, 24],
    exitMorphDuration: [330, 100, 600],
    exitRetractDuration: [200, 100, 800],
    gooIntensity: {
      type: "select",
      options: ["weak", "medium", "strong"],
      default: "weak",
    },
  });

  // The drop-to-rect morph starts right as the drop lands. The ease-out
  // curve visually settles slightly before its literal end, so start the
  // morph a touch early rather than at the exact mathematical finish.
  const entryMorphDelay = Math.round(
    (ENTRY_TRANSLATE_DURATION + ENTRY_TRANSLATE_DELAY) * 0.85,
  );

  const openTransition = `scale ${ENTRY_SCALE_DURATION}ms var(--ease-smooth), translate ${ENTRY_TRANSLATE_DURATION}ms ${ENTRY_TRANSLATE_DELAY}ms var(--ease-smooth), width ${ENTRY_MORPH_DURATION}ms ${entryMorphDelay}ms var(--ease-smooth), height ${ENTRY_MORPH_DURATION}ms ${entryMorphDelay}ms var(--ease-smooth), border-radius ${ENTRY_MORPH_DURATION}ms ${entryMorphDelay}ms var(--ease-smooth)`;
  // Mirrors the open sequence in reverse: shrink the rect back to a circle
  // first, then translate + scale it back up into the navbar once that's done.
  // scale shares translate's duration here (unlike the open transition) so
  // it doesn't shrink to invisible mid-flight — it stays visible for the
  // whole trip and disappears right as it reaches the navbar.
  const closeTransition = `width ${dial.exitMorphDuration}ms var(--ease-smooth), height ${dial.exitMorphDuration}ms var(--ease-smooth), border-radius ${dial.exitMorphDuration}ms var(--ease-smooth), translate ${dial.exitRetractDuration}ms ${dial.exitMorphDuration}ms var(--ease-smooth), scale ${dial.exitRetractDuration}ms ${dial.exitMorphDuration}ms var(--ease-smooth)`;

  // Links fade in the instant the rect morph finishes; on close they
  // disappear immediately so the shape can collapse without text on it.
  const linksDelay = entryMorphDelay + ENTRY_MORPH_DURATION;

  return (
    <header className="relative z-10 flex justify-center pt-12">
      <div className="relative w-[191px]">
        {/* Goo layer: a hidden copy of the pill shape + the circle. The
            crisp pill below fully covers this copy at rest, so only the
            circle (and its connecting neck while it's close to the pill)
            is ever visible here — the real pill's corners stay untouched. */}
        <Goo
          className="pointer-events-none absolute top-0 left-1/2 h-[220px] w-[360px] -translate-x-1/2"
          intensity={dial.gooIntensity as "weak" | "medium" | "strong"}
        >
          <div className="absolute top-0 left-1/2 h-12 w-[191px] -translate-x-1/2 rounded-xl bg-[var(--color-tokens-bg-weakest)]" />
          <div
            className="absolute top-12 left-1/2 origin-center bg-[var(--color-tokens-bg-weakest)]"
            style={{
              width: open ? dial.navRectWidth : dial.circleSize,
              height: open ? dial.navRectHeight : dial.circleSize,
              borderRadius: open ? dial.navRectRadius : 9999,
              translate: open ? `-50% ${dial.dropGap}px` : "-50% 0",
              scale: open ? 1 : 0,
              transition: open ? openTransition : closeTransition,
            }}
          />
        </Goo>

        {/* Crisp nav links, positioned exactly over the morphed rect —
            never touched by the goo filter, so the text stays sharp. */}
        <div
          className={`absolute left-1/2 flex -translate-x-1/2 select-none items-center gap-2 p-3 text-center text-[length:var(--text-control-s-500-font-size)] leading-[var(--text-control-s-500-line-height)] font-medium tracking-[var(--text-control-s-500-letter-spacing)] text-[color:var(--color-tokens-text-strongest)] transition-opacity duration-200 ease-[var(--ease-smooth)] ${
            open ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          style={{
            top: 48 + dial.dropGap,
            width: dial.navRectWidth,
            height: dial.navRectHeight,
            transitionDelay: open ? `${linksDelay}ms` : "0ms",
          }}
        >
          {NAV_ITEMS.map((item) => (
            <a key={item} href="#" className="flex-1">
              {item}
            </a>
          ))}
        </div>

        <div className="relative z-10 flex w-full select-none items-center gap-2 rounded-xl bg-[var(--color-tokens-bg-weakest)] p-3">
          <p className="flex-1 text-[length:var(--text-control-xl-600-font-size)] leading-[var(--text-control-xl-600-line-height)] font-semibold tracking-[var(--text-control-xl-600-letter-spacing)] text-[color:var(--color-tokens-text-strongest)]">
            Fixa.
          </p>
          <button
            type="button"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((prev) => !prev)}
            className="relative size-5 shrink-0 cursor-pointer"
          >
            <span
              className={`absolute top-1/2 left-[1.25px] h-[1.875px] w-[17.5px] rounded-[1px] bg-[var(--color-tokens-icon-strongest)] transition-transform duration-300 ease-[var(--ease-smooth)] ${
                open ? "translate-y-0 rotate-45" : "-translate-y-[3.5px] rotate-0"
              }`}
            />
            <span
              className={`absolute top-1/2 left-[1.25px] h-[1.875px] w-[17.5px] rounded-[1px] bg-[var(--color-tokens-icon-strongest)] transition-transform duration-300 ease-[var(--ease-smooth)] ${
                open ? "translate-y-0 -rotate-45" : "translate-y-[3.5px] rotate-0"
              }`}
            />
          </button>
        </div>
      </div>
    </header>
  );
}
