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
        className="p-3 rounded-2xl bg-white/80 dark:bg-slate-800/80 border border-white/20 dark:border-slate-700/50 backdrop-blur-sm shadow-lg"
      >
        <div className="h-5 w-5" />
      </button>
    );
  }
  
  const isDark = theme === "dark";
  
  return (
    <button
      aria-label="Toggle Theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="p-3 rounded-2xl bg-white/80 dark:bg-slate-800/80 border border-white/20 dark:border-slate-700/50 hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 backdrop-blur-sm shadow-lg hover:scale-105"
    >
      {isDark ? <Sun className="h-5 w-5 text-amber-500"/> : <Moon className="h-5 w-5 text-blue-600"/>}
    </button>
  );
}
