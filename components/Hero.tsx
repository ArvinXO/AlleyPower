"use client";
import { m } from "framer-motion";
import Link from "next/link";
import { Zap, Shield, Clock } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-orange-50 dark:from-zinc-900 dark:via-zinc-900 dark:to-amber-950/20" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-20 -left-20 w-72 h-72 bg-amber-400/20 dark:bg-amber-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 -right-20 w-96 h-96 bg-orange-400/20 dark:bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-700" />
      
      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 py-16 lg:py-24 items-center">
        <div>
          <m.div 
            initial={{opacity:0,y:20}} 
            animate={{opacity:1,y:0}} 
            transition={{delay:0.1, duration:0.6}}
            className="inline-block mb-4"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-900 dark:text-amber-200 text-sm font-medium">
              <Zap className="h-4 w-4" />
              Licensed & Insured Electrician
            </span>
          </m.div>
          
          <m.h1 
            initial={{opacity:0,y:20}} 
            animate={{opacity:1,y:0}} 
            transition={{delay:0.2, duration:0.6}}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight bg-gradient-to-br from-zinc-900 via-zinc-800 to-amber-900 dark:from-white dark:via-zinc-100 dark:to-amber-200 bg-clip-text text-transparent"
          >
            Powering Your Space Safely
          </m.h1>
          
          <m.p 
            initial={{opacity:0,y:20}} 
            animate={{opacity:1,y:0}} 
            transition={{delay:0.3, duration:0.6}}
            className="mt-6 text-xl text-zinc-600 dark:text-zinc-300 leading-relaxed"
          >
            Expert electrical services for homes and businesses. From EV chargers to complete rewires, we deliver quality workmanship with a smile.
          </m.p>
          
          <m.div 
            initial={{opacity:0,y:20}} 
            animate={{opacity:1,y:0}} 
            transition={{delay:0.4, duration:0.6}}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Link 
              href="#contact" 
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-full font-semibold shadow-lg shadow-amber-500/30 hover:shadow-xl hover:shadow-amber-500/40 transition-all duration-300 hover:scale-105"
            >
              Get Free Quote
              <Zap className="h-5 w-5 group-hover:rotate-12 transition-transform" />
            </Link>
            <Link 
              href="#services" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white rounded-full font-semibold border-2 border-zinc-200 dark:border-zinc-700 hover:border-amber-500 dark:hover:border-amber-500 transition-all duration-300 hover:scale-105"
            >
              View Services
            </Link>
          </m.div>
          
          <m.div 
            initial={{opacity:0}} 
            animate={{opacity:1}} 
            transition={{delay:0.6, duration:0.6}}
            className="mt-12 flex flex-wrap gap-6"
          >
            <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
              <Shield className="h-5 w-5 text-amber-600 dark:text-amber-400" />
              <span>Fully Insured</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
              <Clock className="h-5 w-5 text-amber-600 dark:text-amber-400" />
              <span>24/7 Emergency</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
              <Zap className="h-5 w-5 text-amber-600 dark:text-amber-400" />
              <span>Same Day Service</span>
            </div>
          </m.div>
        </div>
        
        <m.div 
          initial={{opacity:0,scale:0.95,rotateY:10}} 
          animate={{opacity:1,scale:1,rotateY:0}} 
          transition={{delay:0.3, duration:0.8}}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-orange-600/20 rounded-3xl blur-2xl" />
          <div className="relative bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900 p-2 rounded-3xl shadow-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/hero.jpg" 
              alt="Professional electrician at work" 
              className="w-full rounded-2xl shadow-lg"
            />
          </div>
          {/* Floating badge */}
          <m.div
            initial={{opacity:0,y:20}}
            animate={{opacity:1,y:0}}
            transition={{delay:0.8, duration:0.6}}
            className="absolute -bottom-6 -left-6 bg-white dark:bg-zinc-800 rounded-2xl shadow-xl p-4 border border-zinc-200 dark:border-zinc-700"
          >
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-amber-400 to-orange-600 p-3 rounded-xl">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-zinc-900 dark:text-white">500+</div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">Happy Clients</div>
              </div>
            </div>
          </m.div>
        </m.div>
      </div>
    </section>
  );
}
