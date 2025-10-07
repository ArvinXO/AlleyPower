"use client";

import { useEffect, useState } from "react";
import { LazyMotion, domAnimation } from "framer-motion";

export default function ClientOnly({ children }: { children: React.ReactNode }) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  // Always render children, but disable animations until mounted
  return (
    <LazyMotion features={domAnimation} strict>
      <div style={{ opacity: hasMounted ? 1 : 1 }}>
        {children}
      </div>
    </LazyMotion>
  );
}
