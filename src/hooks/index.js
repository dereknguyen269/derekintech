import { useEffect, useState } from "react";

// Keep the existing preference key so returning visitors retain their theme.
function initialTheme() {
  try {
    const stored = localStorage.getItem("theme");
    if (stored === "dark" || stored === "light") return stored;
  } catch {}
  return "light";
}

export function useTheme() {
  const [theme, setTheme] = useState(initialTheme);
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", theme === "dark" ? "#1c1e1b" : "#f7f6f1");
    try {
      localStorage.setItem("theme", theme);
    } catch {}
  }, [theme]);
  return {
    theme,
    toggle: () =>
      setTheme((current) => (current === "light" ? "dark" : "light")),
  };
}
