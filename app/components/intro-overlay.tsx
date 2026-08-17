"use client";

import { useEffect, useState } from "react";

const WORDS = ["Now", "is", "the", "time."];
const STAGGER_MS = 190;
const WORD_DURATION_MS = 700;
const HOLD_MS = 650;
const EXIT_DURATION_MS = 600;

export function IntroOverlay() {
  const [phase, setPhase] = useState<"in" | "out" | "done">("in");

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const lastWordStart = STAGGER_MS * (WORDS.length - 1);
    const exitDelay = reducedMotion
      ? 0
      : lastWordStart + WORD_DURATION_MS + HOLD_MS;

    const exitTimer = setTimeout(() => setPhase("out"), exitDelay);
    return () => clearTimeout(exitTimer);
  }, []);

  useEffect(() => {
    if (phase !== "out") return;
    const doneTimer = setTimeout(() => setPhase("done"), EXIT_DURATION_MS);
    return () => clearTimeout(doneTimer);
  }, [phase]);

  if (phase === "done") return null;

  return (
    <div
      aria-hidden
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[var(--color-tokens-bg-weak)] transition-opacity duration-[600ms] ease-out ${
        phase === "out" ? "opacity-0" : "opacity-100"
      }`}
    >
      <p className="flex gap-3 text-[32px] font-medium tracking-[-1.2px] text-[color:var(--color-tokens-text-strongest)] sm:text-[40px] md:text-[length:var(--text-headings-h2-500-font-size)] md:leading-[var(--text-headings-h2-500-line-height)] md:tracking-[var(--text-headings-h2-500-letter-spacing)]">
        {WORDS.map((word, i) => (
          <span
            key={word}
            className="animate-word-in inline-block"
            style={{ animationDelay: `${i * STAGGER_MS}ms` }}
          >
            {word}
          </span>
        ))}
      </p>
    </div>
  );
}
