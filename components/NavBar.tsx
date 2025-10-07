"use client";
import Link from "next/link";
import { Phone, Menu, X, Zap, Star } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { m, AnimatePresence } from "framer-motion";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl bg-white/70 dark:bg-slate-900/70 border-b border-white/20 dark:border-slate-800/50 shadow-lg shadow-black/5">
      <nav className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3 font-bold text-xl group">
          <div className="relative">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <div className="absolute inset-0 bg-blue-500/20 rounded-2xl blur-lg group-hover:bg-blue-500/30 transition-colors duration-300" />
          </div>
          <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 dark:from-white dark:via-blue-100 dark:to-indigo-100 bg-clip-text text-transparent">
            Alex Alley Electrics
          </span>
        </Link>
        
        <div className="hidden lg:flex items-center gap-8">
          <Link href="#services" className="text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 relative group">
            Services
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:w-full transition-all duration-300" />
          </Link>
          <Link href="#testimonials" className="text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 relative group">
            Reviews
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:w-full transition-all duration-300" />
          </Link>
          <Link href="#contact" className="text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 relative group">
            Contact
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:w-full transition-all duration-300" />
          </Link>
        </div>
        
        <div className="flex items-center gap-4">
          <a 
            href="tel:+440000000000" 
            className="hidden sm:inline-flex items-center gap-2 rounded-2xl px-6 py-3 text-sm font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xl shadow-blue-500/25 hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
          >
            <Phone className="h-4 w-4" /> Call Now
          </a>
          <ThemeToggle />
          <button 
            aria-label="Menu" 
            onClick={() => setOpen(v=>!v)} 
            className="lg:hidden p-3 rounded-2xl bg-white/80 dark:bg-slate-800/80 border border-white/20 dark:border-slate-700/50 hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 backdrop-blur-sm shadow-lg"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>
      
      <AnimatePresence>
        {open && (
          <m.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-white/20 dark:border-slate-800/50 lg:hidden overflow-hidden backdrop-blur-2xl bg-white/80 dark:bg-slate-900/80"
          >
            <div className="container py-6 flex flex-col gap-4">
              <Link 
                href="#services" 
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 px-6 py-4 rounded-2xl hover:bg-white/60 dark:hover:bg-slate-800/60 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                  <Zap className="h-5 w-5 text-white" />
                </div>
                <span className="font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Services</span>
              </Link>
              <Link 
                href="#testimonials" 
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 px-6 py-4 rounded-2xl hover:bg-white/60 dark:hover:bg-slate-800/60 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center">
                  <Star className="h-5 w-5 text-white" />
                </div>
                <span className="font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Reviews</span>
              </Link>
              <Link 
                href="#contact" 
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 px-6 py-4 rounded-2xl hover:bg-white/60 dark:hover:bg-slate-800/60 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <span className="font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Contact</span>
              </Link>
              <a 
                href="tel:+440000000000"
                className="flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold shadow-xl shadow-blue-500/25 hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105"
              >
                <Phone className="h-5 w-5" /> Call Now
              </a>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  );
}
