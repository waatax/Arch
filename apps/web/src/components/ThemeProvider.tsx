'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Theme = 'light' | 'dark';
type FontSize = 'sm' | 'base' | 'lg';

interface ThemeContextType {
  theme: Theme;
  fontSize: FontSize;
  toggleTheme: () => void;
  setFontSize: (size: FontSize) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  fontSize: 'base',
  toggleTheme: () => {},
  setFontSize: () => {},
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
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'light';
    const savedTheme = readStorage('arch-theme');
    if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });
  const [fontSize, setFontSizeState] = useState<FontSize>(() => {
    if (typeof window === 'undefined') return 'base';
    const savedFontSize = readStorage('arch-font-size');
    return savedFontSize === 'sm' || savedFontSize === 'lg' ? savedFontSize : 'base';
  });

  useEffect(() => {
    const root = document.documentElement;

    // Theme
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    writeStorage('arch-theme', theme);

    // Font size
    root.classList.remove('text-size-sm', 'text-size-base', 'text-size-lg');
    root.classList.add(`text-size-${fontSize}`);
    writeStorage('arch-font-size', fontSize);
  }, [theme, fontSize]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const setFontSize = (size: FontSize) => {
    setFontSizeState(size);
  };

  return (
    <ThemeContext.Provider value={{ theme, fontSize, toggleTheme, setFontSize }}>
      {children}
    </ThemeContext.Provider>
  );
}
