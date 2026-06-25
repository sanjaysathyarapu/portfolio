"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  applyTheme,
  AUTO_ANIMATE_ATTR,
  getAutoAnimateTarget,
  getThemeFromTime,
  getThemeSource,
  getStoredTheme,
  setManualTheme,
  triggerThemeTransition,
  type AutoAnimateTarget,
  type Theme,
} from "@/lib/theme";

type ThemeContextValue = {
  theme: Theme;
  mounted: boolean;
  toggleTheme: () => void;
  autoAnimateTarget: AutoAnimateTarget;
  clearAutoAnimate: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);
  const [autoAnimateTarget, setAutoAnimateTarget] =
    useState<AutoAnimateTarget>(null);

  useEffect(() => {
    const source = getThemeSource();
    let resolved: Theme;

    if (source === "manual") {
      resolved = getStoredTheme() ?? "light";
      applyTheme(resolved);
    } else {
      resolved = getThemeFromTime();
      applyTheme(resolved);
    }

    const animateTarget =
      source === "manual" ? null : getAutoAnimateTarget();

    setTheme(resolved);
    setAutoAnimateTarget(animateTarget);
    setMounted(true);

    document.documentElement.removeAttribute(AUTO_ANIMATE_ATTR);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next: Theme = prev === "dark" ? "light" : "dark";
      applyTheme(next);
      setManualTheme(next);
      triggerThemeTransition();
      return next;
    });
  }, []);

  const clearAutoAnimate = useCallback(() => {
    setAutoAnimateTarget(null);
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        mounted,
        toggleTheme,
        autoAnimateTarget,
        clearAutoAnimate,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
