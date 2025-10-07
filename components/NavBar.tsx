"use client";
import Link from "next/link";
import { Phone, Menu, X, Zap } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 dark:bg-zinc-900/80 border-b border-zinc-200/50 dark:border-zinc-800/50 shadow-sm">
      <nav className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg group">
          <div className="relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.svg" alt="logo" className="h-8 w-8 group-hover:scale-110 transition-transform" />
            <div className="absolute inset-0 bg-amber-400/20 rounded-lg blur-md group-hover:bg-amber-400/40 transition-colors" />
          </div>
          <span className="bg-gradient-to-r from-zinc-900 to-amber-900 dark:from-white dark:to-amber-200 bg-clip-text text-transparent">
            Alex Alley Electrics
          </span>
        </Link>
        
        <div className="hidden md:flex items-center gap-6">
          <Link href="#services" className="text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
            Services
          </Link>
          <Link href="#testimonials" className="text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
            Reviews
          </Link>
          <Link href="#contact" className="text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
            Contact
          </Link>
        </div>
        
        <div className="flex items-center gap-3">
          <a 
            href="tel:+440000000000" 
            className="hidden sm:inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg shadow-amber-500/30 hover:shadow-xl hover:shadow-amber-500/40 transition-all hover:scale-105"
          >
            <Phone className="h-4 w-4" /> Call Now
          </a>
          <ThemeToggle />
          <button 
            aria-label="Menu" 
            onClick={() => setOpen(v=>!v)} 
            className="md:hidden p-2 rounded-lg border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>
      
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-zinc-200 dark:border-zinc-800 md:hidden overflow-hidden"
          >
            <div className="container py-4 flex flex-col gap-3">
              <Link 
                href="#services" 
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 px-4 py-3 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              >
                <Zap className="h-4 w-4 text-amber-600" />
                <span className="font-medium">Services</span>
              </Link>
              <Link 
                href="#testimonials" 
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 px-4 py-3 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              >
                <span className="font-medium">Reviews</span>
              </Link>
              <Link 
                href="#contact" 
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 px-4 py-3 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              >
                <span className="font-medium">Contact</span>
              </Link>
              <a 
                href="tel:+440000000000"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold"
              >
                <Phone className="h-4 w-4" /> Call Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
