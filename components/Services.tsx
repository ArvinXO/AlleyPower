"use client";
import ServiceCard from "./ServiceCard";
import { Plug, Bolt, Gauge, ShieldCheck, ArrowRight, Zap, Home, Building2, Car } from "lucide-react";
import { m } from "framer-motion";
import Link from "next/link";

const items = [
  { 
    Icon: Home, 
    title: "Domestic Electrical Work", 
    desc: "Complete residential electrical services across London - from additional sockets to full consumer unit upgrades, all Part P compliant", 
    color: "from-blue-500 to-cyan-500",
    features: ["Socket & Switch Installation", "LED Lighting Design", "Consumer Unit Upgrades", "Kitchen & Bathroom Electrics"]
  },
  { 
    Icon: Car, 
    title: "EV Charging Points", 
    desc: "OZEV-approved electric vehicle charging installations with up to £350 government grant support for eligible properties", 
    color: "from-amber-500 to-orange-500",
    features: ["7kW & 22kW Chargers", "OZEV Grant Applications", "Smart App Control", "Tethered & Untethered"]
  },
  { 
    Icon: Zap, 
    title: "Rewiring & Upgrades", 
    desc: "Full and partial house rewires to 18th Edition standards with RCD protection and surge protection devices", 
    color: "from-purple-500 to-pink-500",
    features: ["Full House Rewires", "Partial Circuit Upgrades", "18th Edition Compliance", "Surge Protection (SPD)"]
  },
  { 
    Icon: Building2, 
    title: "Commercial & Testing", 
    desc: "Commercial electrical installations, maintenance contracts, and comprehensive testing services including EICR and PAT testing", 
    color: "from-green-500 to-emerald-500",
    features: ["Commercial Installations", "EICR Certificates", "PAT Testing", "Emergency Lighting"]
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-950">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-amber-500/10 to-yellow-500/10 border border-amber-200/50 dark:border-amber-800/50 text-amber-700 dark:text-amber-300 text-sm font-semibold mb-6 backdrop-blur-sm">
              <Zap className="inline h-4 w-4 mr-2 animate-pulse" />
              Professional Electrical Services
            </span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6">
              <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 dark:from-white dark:via-blue-100 dark:to-indigo-100 bg-clip-text text-transparent">
                Qualified Electrician
              </span>
              <br />
              <span className="bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
                London Services
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto">
              NVQ Level 3 Qualified · NICEIC Approved · Part P Certified · 18th Edition Compliant
            </p>
          </m.div>
        </div>
        
        {/* Services Grid */}
        <m.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-8 mb-16"
        >
          {items.map((item, index) => (
            <ServiceCard key={item.title} {...item} index={index} />
          ))}
        </m.div>

        {/* CTA Section */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl p-12 text-white shadow-2xl shadow-amber-500/25">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Emergency Call Out Available
            </h3>
            <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
              24/7 emergency electrical services across London. No call out charge for booked work. Free quotes and competitive pricing.
            </p>
            <Link 
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-amber-600 rounded-2xl font-bold text-lg hover:bg-amber-50 transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-lg"
            >
              Call Now: +44 7456 569003
              <Zap className="h-5 w-5 animate-pulse" />
            </Link>
          </div>
        </m.div>
      </div>
    </section>
  );
}
