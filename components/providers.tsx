"use client";

import { ThemeProvider } from "next-themes";
import { LazyMotion, domAnimation } from "framer-motion";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
      </ThemeProvider>
    </LazyMotion>
  );
}
