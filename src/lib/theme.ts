export const THEME_STORAGE_KEY = "theme";
export const THEME_SOURCE_KEY = "theme-source";
export const AUTO_ANIMATE_ATTR = "data-theme-auto";

export type Theme = "light" | "dark";
export type ThemeSource = "auto" | "manual";
export type AutoAnimateTarget = Theme | null;

const NIGHT_START_HOUR = 18;
const DAY_START_HOUR = 6;

export function getThemeFromTime(date = new Date()): Theme {
  const hour = date.getHours();
  return hour >= NIGHT_START_HOUR || hour < DAY_START_HOUR ? "dark" : "light";
}

export function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
}

export function getThemeSource(): ThemeSource {
  try {
    const source = localStorage.getItem(THEME_SOURCE_KEY);
    if (source === "manual") {
      return "manual";
    }
    // Prototype toggles saved theme without theme-source — treat as manual
    if (localStorage.getItem(THEME_STORAGE_KEY)) {
      return "manual";
    }
  } catch {
    // localStorage unavailable
  }
  return "auto";
}

export function getStoredTheme(): Theme | null {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === "light" || stored === "dark") {
      return stored;
    }
  } catch {
    // localStorage unavailable
  }
  return null;
}

export function resolveTheme(): Theme {
  if (getThemeSource() === "manual") {
    return getStoredTheme() ?? "light";
  }
  return getThemeFromTime();
}

export function setManualTheme(theme: Theme) {
  try {
    localStorage.setItem(THEME_SOURCE_KEY, "manual");
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // Ignore write failures
  }
}

export function getAutoAnimateTarget(): AutoAnimateTarget {
  if (typeof document === "undefined") return null;
  const value = document.documentElement.getAttribute(AUTO_ANIMATE_ATTR);
  if (value === "light" || value === "dark") {
    return value;
  }
  return null;
}

export function triggerThemeTransition() {
  document.documentElement.setAttribute("data-theme-transitioning", "");
  window.setTimeout(() => {
    document.documentElement.removeAttribute("data-theme-transitioning");
  }, 650);
}
