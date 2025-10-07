"use client";
import { type LucideIcon } from "lucide-react";
import { m } from "framer-motion";

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function ServiceCard({ 
  Icon, 
  title, 
  desc, 
  color, 
  index 
}: { 
  Icon: LucideIcon; 
  title: string; 
  desc: string; 
  color: string;
  index: number;
}) {
  return (
    <m.div 
      variants={item}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="group relative p-6 rounded-2xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 hover:border-transparent hover:shadow-2xl transition-all duration-300 overflow-hidden"
    >
      {/* Gradient background on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
      
      {/* Icon with gradient background */}
      <div className="relative">
        <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${color} shadow-lg mb-4`}>
          <Icon className="h-6 w-6 text-white" />
        </div>
      </div>
      
      <h3 className="relative font-bold text-xl mb-2 text-zinc-900 dark:text-white">
        {title}
      </h3>
      <p className="relative text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
        {desc}
      </p>
      
      {/* Decorative corner element */}
      <div className={`absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br ${color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`} />
    </m.div>
  );
}
