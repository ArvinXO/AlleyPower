"use client";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) {
    return (
      <button
        aria-label="Toggle Theme"
        className="p-2 rounded-md border border-zinc-200 dark:border-zinc-800"
      >
        <div className="h-4 w-4" />
      </button>
    );
  }
  
  const isDark = theme === "dark";
  
  return (
    <button
      aria-label="Toggle Theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="p-2 rounded-md border border-zinc-200 dark:border-zinc-800"
    >
      {isDark ? <Sun className="h-4 w-4"/> : <Moon className="h-4 w-4"/>}
    </button>
  );
}
