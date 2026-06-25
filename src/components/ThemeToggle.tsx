"use client";

import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@/components/icons";
import { useTheme } from "@/components/ThemeProvider";

const AUTO_KNOB_DURATION_MS = 550;

export function ThemeToggle() {
  const { theme, mounted, toggleTheme, autoAnimateTarget, clearAutoAnimate } =
    useTheme();
  const [knobIsDark, setKnobIsDark] = useState(false);
  const [isKnobAnimating, setIsKnobAnimating] = useState(false);

  useEffect(() => {
    if (!mounted) return;

    if (autoAnimateTarget) {
      const endIsDark = autoAnimateTarget === "dark";
      setKnobIsDark(!endIsDark);
      setIsKnobAnimating(true);

      const startFrame = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setKnobIsDark(endIsDark);
        });
      });

      const endTimer = window.setTimeout(() => {
        setIsKnobAnimating(false);
        clearAutoAnimate();
      }, AUTO_KNOB_DURATION_MS + 50);

      return () => {
        cancelAnimationFrame(startFrame);
        window.clearTimeout(endTimer);
      };
    }

    setKnobIsDark(theme === "dark");
    setIsKnobAnimating(false);
  }, [mounted, autoAnimateTarget, theme, clearAutoAnimate]);

  const isDark = theme === "dark";

  if (!mounted) {
    return (
      <div
        className="h-8 w-14 shrink-0 rounded-full border border-border/40 bg-transparent"
        aria-hidden="true"
      />
    );
  }

  const useSlowKnobTransition = isKnobAnimating || autoAnimateTarget !== null;

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={toggleTheme}
      className="focus-ring relative inline-flex h-8 w-14 shrink-0 items-center rounded-full border border-border/40 bg-transparent p-0.5 transition-colors"
    >
      <span className="pointer-events-none absolute inset-0 flex items-center justify-between px-1.5">
        <SunIcon
          className={`h-3.5 w-3.5 transition-opacity ${
            isDark ? "text-muted opacity-40" : "text-accent opacity-100"
          }`}
        />
        <MoonIcon
          className={`h-3.5 w-3.5 transition-opacity ${
            isDark ? "text-accent opacity-100" : "text-muted opacity-40"
          }`}
        />
      </span>
      <span
        className={`pointer-events-none relative z-10 block h-6 w-6 rounded-full bg-accent shadow-sm transition-transform ease-out motion-reduce:transition-none ${
          knobIsDark ? "translate-x-6" : "translate-x-0"
        }`}
        style={{
          transitionDuration: useSlowKnobTransition ? `${AUTO_KNOB_DURATION_MS}ms` : "200ms",
        }}
      />
    </button>
  );
}
