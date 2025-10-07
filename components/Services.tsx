"use client";
import ServiceCard from "./ServiceCard";
import { Plug, Bolt, Gauge, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  { Icon: Plug, title: "Domestic Electrics", desc: "Sockets, lighting, fault finding, consumer units, EICR", color: "from-blue-500 to-cyan-500" },
  { Icon: Bolt, title: "EV Chargers", desc: "OZEV-ready installs, home & workplace chargers", color: "from-amber-500 to-orange-500" },
  { Icon: Gauge, title: "Rewires & Upgrades", desc: "Partial/Full rewires, surge & RCD protection", color: "from-purple-500 to-pink-500" },
  { Icon: ShieldCheck, title: "Safety & Compliance", desc: "EICR, PAT, landlord safety checks", color: "from-green-500 to-emerald-500" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Services() {
  return (
    <section id="services" className="py-16 lg:py-24 bg-gradient-to-b from-white via-zinc-50 to-white dark:from-zinc-900 dark:via-zinc-900/50 dark:to-zinc-900">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-900 dark:text-amber-200 text-sm font-medium mb-4">
              Our Services
            </span>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-zinc-900 to-amber-900 dark:from-white dark:to-amber-200 bg-clip-text text-transparent">
              Expert Electrical Solutions
            </h2>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-300">
              Transparent pricing · Professional workmanship · Fully insured
            </p>
          </motion.div>
        </div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {items.map((i, index) => (
            <ServiceCard key={i.title} {...i} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
