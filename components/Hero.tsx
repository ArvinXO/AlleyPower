"use client";
import { m } from "framer-motion";
import Link from "next/link";
import { Zap, Shield, Clock, Star, Award, Users } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-950">
      {/* Animated electrical background elements */}
      <div className="absolute inset-0">
        {/* Main electrical glow */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-amber-400/20 to-yellow-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-400/15 to-cyan-400/15 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-orange-400/10 to-red-400/10 rounded-full blur-3xl animate-pulse delay-500" />
        
        {/* Electrical spark effects */}
        <div className="absolute top-20 right-20 w-2 h-2 bg-amber-400 rounded-full animate-ping" />
        <div className="absolute bottom-32 left-32 w-1 h-1 bg-yellow-400 rounded-full animate-ping delay-700" />
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-orange-400 rounded-full animate-ping delay-300" />
        
        {/* Circuit board pattern overlay */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="circuit" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M0 10h20M10 0v20" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.3"/>
                <circle cx="10" cy="10" r="1" fill="currentColor" opacity="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)" className="text-amber-500"/>
          </svg>
        </div>
      </div>
      
      <div className="container relative z-10 py-20">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <m.div 
            initial={{opacity:0,y:20}} 
            animate={{opacity:1,y:0}} 
            transition={{delay:0.1, duration:0.6}}
            className="inline-block mb-8"
          >
            <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-amber-500/10 to-yellow-500/10 border border-amber-200/50 dark:border-amber-800/50 text-amber-700 dark:text-amber-300 text-sm font-semibold backdrop-blur-sm">
              <Zap className="h-4 w-4 animate-pulse" />
              NVQ Level 3 Qualified • London Based • NICEIC Approved
            </span>
          </m.div>
          
          {/* Main heading */}
          <m.h1 
            initial={{opacity:0,y:30}} 
            animate={{opacity:1,y:0}} 
            transition={{delay:0.2, duration:0.8}}
            className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8"
          >
            <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 dark:from-white dark:via-blue-100 dark:to-indigo-100 bg-clip-text text-transparent">
              Powering London
            </span>
            <br />
            <span className="bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500 bg-clip-text text-transparent animate-pulse">
              One Circuit at a Time
            </span>
          </m.h1>
          
          {/* Subtitle */}
          <m.p 
            initial={{opacity:0,y:20}} 
            animate={{opacity:1,y:0}} 
            transition={{delay:0.3, duration:0.6}}
            className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed mb-12 max-w-3xl mx-auto"
          >
            Professional electrical installations, repairs & testing across London. From domestic rewires to commercial PAT testing - fully qualified, insured & Part P certified.
          </m.p>
          
          {/* CTA buttons */}
          <m.div 
            initial={{opacity:0,y:20}} 
            animate={{opacity:1,y:0}} 
            transition={{delay:0.4, duration:0.6}}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Link 
              href="#contact" 
              className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-2xl font-bold text-lg shadow-xl shadow-amber-500/25 hover:shadow-2xl hover:shadow-amber-500/40 transition-all duration-300 hover:scale-105 hover:-translate-y-1"
            >
              Get Free Quote
              <Zap className="h-6 w-6 group-hover:rotate-12 transition-transform animate-pulse" />
            </Link>
            <Link 
              href="#services" 
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white/80 dark:bg-slate-800/80 text-slate-900 dark:text-white rounded-2xl font-bold text-lg border-2 border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
            >
              View Services
            </Link>
          </m.div>
          
          {/* Stats grid */}
          <m.div 
            initial={{opacity:0,y:30}} 
            animate={{opacity:1,y:0}} 
            transition={{delay:0.6, duration:0.8}}
            className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {/* Stat 1 */}
            <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-slate-700/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl mb-4 mx-auto">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-slate-900 dark:text-white mb-1">Part P</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Certified</div>
            </div>
            
            {/* Stat 2 */}
            <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-slate-700/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl mb-4 mx-auto">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-slate-900 dark:text-white mb-1">24/7</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Emergency Call Out</div>
            </div>
            
            {/* Stat 3 */}
            <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-slate-700/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl mb-4 mx-auto animate-pulse">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-slate-900 dark:text-white mb-1">NVQ L3</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Qualified</div>
            </div>
            
            {/* Stat 4 */}
            <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-slate-700/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl mb-4 mx-auto">
                <Award className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-slate-900 dark:text-white mb-1">NICEIC</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Approved</div>
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
