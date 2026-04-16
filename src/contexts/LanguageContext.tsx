/*
 * LanguageContext — LOCKED TO ENGLISH
 *
 * The Bulgarian content is intentionally preserved in every `T` / `t()` call
 * site across the codebase, but it is never rendered in the current build.
 * To re-enable bilingual mode, swap this file back with the archived original
 * (`LanguageContext.tsx.disabled.bak`) and restore the BG switcher in the nav.
 */
import React, { createContext, useContext, useCallback, useMemo } from 'react';

/**
 * Language type intentionally kept as the same bilingual union (`'bg' | 'en'`)
 * so existing `lang === 'bg'` call sites continue to type-check. At runtime the
 * value is permanently `'en'` in this build, which makes the Bulgarian branches
 * unreachable dead code rather than type errors.
 */
type Language = 'bg' | 'en';

interface LanguageContextType {
  lang: Language;
  /** No-op kept for API compatibility with the archived bilingual provider. */
  setLang: (lang: Language) => void;
  /** No-op kept for API compatibility. */
  toggleLang: () => void;
  /** Always returns the English string — BG is preserved in call sites but not rendered. */
  t: (bg: string, en: string) => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const lang: Language = 'en';
  const setLang = useCallback((_l: Language) => { /* locked */ }, []);
  const toggleLang = useCallback(() => { /* locked */ }, []);
  const t = useCallback((_bg: string, en: string) => en, []);

  // Keep the DOM language flags in sync so legacy CSS selectors still behave.
  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('data-lang', 'en');
    document.documentElement.setAttribute('lang', 'en');
  }

  const value = useMemo(() => ({ lang, setLang, toggleLang, t }), [setLang, toggleLang, t]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}

/**
 * Bilingual text component — English-only in the current build.
 * The `bg` prop is intentionally accepted and ignored so every existing call
 * site continues to compile. Re-enable bilingual mode by restoring the archived
 * provider.
 */
export function T({ en }: { bg: string; en: string }) {
  return <>{en}</>;
}
