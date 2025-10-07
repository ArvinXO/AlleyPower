"use client";
import ServiceCard from "./ServiceCard";
import { Plug, Bolt, Gauge, ShieldCheck, ArrowRight } from "lucide-react";
import { m } from "framer-motion";
import Link from "next/link";

const items = [
  { 
    Icon: Plug, 
    title: "Domestic Electrics", 
    desc: "Complete home electrical solutions including sockets, lighting, fault finding, consumer units, and EICR certificates", 
    color: "from-blue-500 to-cyan-500",
    features: ["Socket Installation", "LED Lighting", "Consumer Units", "EICR Testing"]
  },
  { 
    Icon: Bolt, 
    title: "EV Chargers", 
    desc: "OZEV-approved electric vehicle charging solutions for homes and workplaces with government grant support", 
    color: "from-amber-500 to-orange-500",
    features: ["Home Chargers", "Workplace Install", "OZEV Grants", "Smart Charging"]
  },
  { 
    Icon: Gauge, 
    title: "Rewires & Upgrades", 
    desc: "Full and partial rewiring services with modern surge protection and RCD safety systems", 
    color: "from-purple-500 to-pink-500",
    features: ["Full Rewires", "Partial Upgrades", "Surge Protection", "RCD Installation"]
  },
  { 
    Icon: ShieldCheck, 
    title: "Safety & Compliance", 
    desc: "Comprehensive electrical safety testing including EICR, PAT testing, and landlord compliance certificates", 
    color: "from-green-500 to-emerald-500",
    features: ["EICR Certificates", "PAT Testing", "Safety Inspections", "Compliance Reports"]
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
            <span className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-200/50 dark:border-blue-800/50 text-blue-700 dark:text-blue-300 text-sm font-semibold mb-6 backdrop-blur-sm">
              Our Services
            </span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6">
              <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 dark:from-white dark:via-blue-100 dark:to-indigo-100 bg-clip-text text-transparent">
                Expert Electrical
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Solutions
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Professional workmanship · Transparent pricing · Fully insured · Same-day service available
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
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-white shadow-2xl shadow-blue-500/25">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Every project is unique. Get in touch for a free consultation and personalized quote tailored to your specific needs.
            </p>
            <Link 
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-600 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-lg"
            >
              Get Free Quote
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </m.div>
      </div>
    </section>
  );
}
