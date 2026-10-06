"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";

export type ThemeChoice = "light" | "dark" | "system";
export type ResolvedTheme = "light" | "dark";

const STORAGE_KEY = "tharix-theme";

/* ──────────────────────────────────────────────────────────────
   Theme is held in a tiny external store rather than component
   state. Two reasons:
     1. The stored preference and the OS preference both live
        outside React, so `useSyncExternalStore` is the correct
        primitive — no setState-inside-effect cascade on mount.
     2. The server snapshot is deterministic ("system"), so
        hydration never mismatches. The inline head script has
        already painted the right theme by then.
   ────────────────────────────────────────────────────────────── */

let choice: ThemeChoice = "system";
let systemDark = false;
let hydrated = false;
let mediaQuery: MediaQueryList | null = null;

const listeners = new Set<() => void>();
const emit = () => listeners.forEach((l) => l());

function readStored(): ThemeChoice {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value === "light" || value === "dark" || value === "system" ? value : "system";
  } catch {
    return "system";
  }
}

function onSystemChange() {
  systemDark = mediaQuery?.matches ?? false;
  emit();
}

function initialise() {
  if (hydrated || typeof window === "undefined") return;
  choice = readStored();
  mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  systemDark = mediaQuery.matches;
  mediaQuery.addEventListener("change", onSystemChange);
  hydrated = true;
  queueMicrotask(emit);
}

function subscribe(callback: () => void) {
  listeners.add(callback);
  initialise();
  return () => {
    listeners.delete(callback);
  };
}

/** Snapshot is a primitive string so referential equality is free. */
const getSnapshot = () => `${choice}|${systemDark ? 1 : 0}|${hydrated ? 1 : 0}`;
const getServerSnapshot = () => "system|0|0";

function persist(next: ThemeChoice) {
  choice = next;
  try {
    localStorage.setItem(STORAGE_KEY, next);
  } catch {
    /* storage blocked — the preference simply will not persist */
  }
  emit();
}

/**
 * Inlined in <head> so the correct theme is applied before first paint.
 * Keep the storage key and class name in sync with this module.
 */
export const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem('${STORAGE_KEY}');
    var explicit = stored === 'light' || stored === 'dark' ? stored : null;
    var systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var dark = explicit ? explicit === 'dark' : systemDark;
    document.documentElement.classList.toggle('dark', dark);
    document.documentElement.style.colorScheme = dark ? 'dark' : 'light';
  } catch (e) {}
})();
`;

interface ThemeContextValue {
  theme: ThemeChoice;
  resolved: ResolvedTheme;
  setTheme: (next: ThemeChoice) => void;
  /** Cycles light → dark → system. */
  cycle: () => void;
  /** False until the client store has read the stored preference. */
  mounted: boolean;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const snapshot = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [rawChoice, rawSystem, rawHydrated] = snapshot.split("|");

  const theme = rawChoice as ThemeChoice;
  const mounted = rawHydrated === "1";
  const resolved: ResolvedTheme =
    theme === "system" ? (rawSystem === "1" ? "dark" : "light") : theme;

  // Synchronising the DOM with resolved state is exactly what effects are for.
  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    root.classList.toggle("dark", resolved === "dark");
    root.style.colorScheme = resolved;
  }, [resolved, mounted]);

  const setTheme = useCallback((next: ThemeChoice) => persist(next), []);
  const cycle = useCallback(
    () => persist(theme === "light" ? "dark" : theme === "dark" ? "system" : "light"),
    [theme],
  );

  const value = useMemo(
    () => ({ theme, resolved, setTheme, cycle, mounted }),
    [theme, resolved, setTheme, cycle, mounted],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside <ThemeProvider>");
  return ctx;
}
