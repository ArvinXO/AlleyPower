"use client";
import { type LucideIcon } from "lucide-react";
import { m } from "framer-motion";
import { Check } from "lucide-react";

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 }
};

export default function ServiceCard({ 
  Icon, 
  title, 
  desc, 
  color, 
  features,
  index 
}: { 
  Icon: LucideIcon; 
  title: string; 
  desc: string; 
  color: string;
  features: string[];
  index: number;
}) {
  return (
    <m.div 
      variants={item}
      whileHover={{ y: -12, scale: 1.02 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group relative p-8 rounded-3xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-white/20 dark:border-slate-700/50 hover:border-white/40 dark:hover:border-slate-600/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 overflow-hidden"
    >
      {/* Gradient background on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-full blur-2xl" />
      <div className={`absolute -bottom-16 -right-16 w-32 h-32 bg-gradient-to-br ${color} opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-opacity duration-500`} />
      
      {/* Icon with gradient background */}
      <div className="relative mb-6">
        <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${color} shadow-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="h-8 w-8 text-white" />
        </div>
      </div>
      
      {/* Content */}
      <div className="relative">
        <h3 className="font-bold text-2xl mb-4 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6 text-lg">
          {desc}
        </p>
        
        {/* Features list */}
        <div className="space-y-3">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <div className={`flex items-center justify-center w-5 h-5 rounded-full bg-gradient-to-r ${color} flex-shrink-0`}>
                <Check className="h-3 w-3 text-white" />
              </div>
              <span className="text-slate-600 dark:text-slate-400 font-medium">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>
    </m.div>
  );
}
