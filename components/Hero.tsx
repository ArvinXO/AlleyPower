"use client";
import { m } from "framer-motion";
import Link from "next/link";
import { Zap, Shield, Clock, Star, Award, Users } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-950">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-amber-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse delay-500" />
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
            <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-200/50 dark:border-blue-800/50 text-blue-700 dark:text-blue-300 text-sm font-semibold backdrop-blur-sm">
              <Zap className="h-4 w-4" />
              Licensed & Insured Electrician
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
              Powering Your
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Space Safely
            </span>
          </m.h1>
          
          {/* Subtitle */}
          <m.p 
            initial={{opacity:0,y:20}} 
            animate={{opacity:1,y:0}} 
            transition={{delay:0.3, duration:0.6}}
            className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed mb-12 max-w-3xl mx-auto"
          >
            Expert electrical services for homes and businesses. From EV chargers to complete rewires, we deliver quality workmanship with a smile.
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
              className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl font-bold text-lg shadow-xl shadow-blue-500/25 hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 hover:-translate-y-1"
            >
              Get Free Quote
              <Zap className="h-6 w-6 group-hover:rotate-12 transition-transform" />
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
            <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-slate-700/50 shadow-lg">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl mb-4 mx-auto">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-slate-900 dark:text-white mb-1">100%</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Fully Insured</div>
            </div>
            
            {/* Stat 2 */}
            <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-slate-700/50 shadow-lg">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl mb-4 mx-auto">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-slate-900 dark:text-white mb-1">24/7</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Emergency</div>
            </div>
            
            {/* Stat 3 */}
            <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-slate-700/50 shadow-lg">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl mb-4 mx-auto">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-slate-900 dark:text-white mb-1">Same Day</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Service</div>
            </div>
            
            {/* Stat 4 */}
            <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-slate-700/50 shadow-lg">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl mb-4 mx-auto">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-slate-900 dark:text-white mb-1">500+</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Happy Clients</div>
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
