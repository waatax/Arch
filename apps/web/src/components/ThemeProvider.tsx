'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

export type Theme = 'light' | 'sepia' | 'dark' | 'oled';
export type FontSize = 'sm' | 'base' | 'lg' | 'xl';
export type ReadingWidth = 'standard' | 'wide';

interface ThemeContextType {
  theme: Theme;
  fontSize: FontSize;
  readingWidth: ReadingWidth;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
  setFontSize: (size: FontSize) => void;
  setReadingWidth: (width: ReadingWidth) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  fontSize: 'base',
  readingWidth: 'standard',
  toggleTheme: () => {},
  setTheme: () => {},
  setFontSize: () => {},
  setReadingWidth: () => {},
});

function readStorage(key: string) {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function writeStorage(key: string, value: string) {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    // A disabled, full or corrupted WebView storage must never blank the app.
  }
}

export function useTheme() {
  return useContext(ThemeContext);
}

export default function ThemeProvider({ children }: { children: ReactNode }) {
  // Keep the first client render identical to SSR, then restore preferences.
  const [theme, setThemeState] = useState<Theme>('light');
  const [fontSize, setFontSizeState] = useState<FontSize>('base');
  const [readingWidth, setReadingWidthState] = useState<ReadingWidth>('standard');
  const [preferencesReady, setPreferencesReady] = useState(false);

  useEffect(() => {
    const restorePreferences = window.setTimeout(() => {
      const savedTheme = readStorage('arch-theme');
      if (savedTheme === 'light' || savedTheme === 'sepia' || savedTheme === 'dark' || savedTheme === 'oled') {
        setThemeState(savedTheme);
      } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setThemeState(prefersDark ? 'dark' : 'light');
      }

      const savedFontSize = readStorage('arch-font-size');
      setFontSizeState(
        savedFontSize === 'sm' || savedFontSize === 'lg' || savedFontSize === 'xl'
          ? (savedFontSize as FontSize)
          : 'base'
      );

      const savedWidth = readStorage('arch-reading-width');
      setReadingWidthState(savedWidth === 'wide' ? 'wide' : 'standard');

      setPreferencesReady(true);
    }, 0);
    return () => window.clearTimeout(restorePreferences);
  }, []);

  useEffect(() => {
    if (!preferencesReady) return;
    const root = document.documentElement;

    // Remove legacy theme classes
    root.classList.remove('dark', 'theme-sepia', 'theme-oled');

    // Apply active theme
    if (theme === 'dark') {
      root.classList.add('dark');
      root.style.colorScheme = 'dark';
    } else if (theme === 'oled') {
      root.classList.add('dark', 'theme-oled');
      root.style.colorScheme = 'dark';
    } else if (theme === 'sepia') {
      root.classList.add('theme-sepia');
      root.style.colorScheme = 'light';
    } else {
      root.style.colorScheme = 'light';
    }
    writeStorage('arch-theme', theme);

    // Font size
    root.classList.remove('text-size-sm', 'text-size-base', 'text-size-lg', 'text-size-xl');
    root.classList.add(`text-size-${fontSize}`);
    writeStorage('arch-font-size', fontSize);

    // Reading width
    writeStorage('arch-reading-width', readingWidth);
  }, [theme, fontSize, readingWidth, preferencesReady]);

  const toggleTheme = () => {
    setThemeState((prev) => {
      if (prev === 'light') return 'sepia';
      if (prev === 'sepia') return 'dark';
      if (prev === 'dark') return 'oled';
      return 'light';
    });
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  const setFontSize = (size: FontSize) => {
    setFontSizeState(size);
  };

  const setReadingWidth = (width: ReadingWidth) => {
    setReadingWidthState(width);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        fontSize,
        readingWidth,
        toggleTheme,
        setTheme,
        setFontSize,
        setReadingWidth,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

