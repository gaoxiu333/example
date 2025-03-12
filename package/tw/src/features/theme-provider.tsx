"use client";
import React, { useCallback, useContext, useMemo, useState } from "react";
import { useEffect } from "react";

const ThemeContext = React.createContext<{
  theme: Theme;
  setTheme: (theme: Theme) => void;
} | null>(null!);

type ThemeProviderProps = {
  children: React.ReactNode;
};
type Theme = "light" | "dark" | "auto";

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>("light");
  useEffect(() => {
    if (theme !== "auto") {
      document.documentElement.classList.toggle("dark", theme === "dark");
    }

    function handleChange(e: MediaQueryListEvent) {
      document.documentElement.dataset.theme = e.matches ? "dark" : "light";
    }
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme]);

  // TODO: 这个优化为什么会让 setTheme 函数失效？？
  const setThemeCallback = useCallback(() => {
    return setTheme;
  }, [setTheme]);
  const values = useMemo(() => {
    return {
      theme,
      setTheme: setTheme,
    };
  }, [theme, setThemeCallback]);
  return <ThemeContext value={values}>{children}</ThemeContext>;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
