"use client";
import { m } from "framer-motion";
import { Star, Quote, ThumbsUp, Zap } from "lucide-react";

const testimonials = [
  {
    name: "James M.",
    role: "Homeowner",
    location: "Clapham, London",
    text: "Alex completely rewired our Victorian terrace. Incredibly tidy work, explained everything about the 18th Edition requirements. Brilliant electrician!",
    rating: 5,
    service: "Full House Rewire"
  },
  {
    name: "Sarah T.",
    role: "Tesla Owner", 
    location: "Richmond, London",
    text: "Fantastic EV charger installation. Alex sorted the OZEV grant paperwork and the smart charging app works perfectly. Highly professional!",
    rating: 5,
    service: "EV Charger & OZEV Grant"
  },
  {
    name: "David K.",
    role: "Landlord",
    location: "Wandsworth, London", 
    text: "Regular EICR testing for my rental properties. Always on time, thorough reports, and competitive pricing. Wouldn't use anyone else.",
    rating: 5,
    service: "EICR Certificates"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-gradient-to-br from-white via-slate-50 to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-950">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-200/50 dark:border-green-800/50 text-green-700 dark:text-green-300 text-sm font-semibold mb-6 backdrop-blur-sm">
              <ThumbsUp className="inline h-4 w-4 mr-2" />
              Customer Reviews
            </span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6">
              <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 dark:from-white dark:via-blue-100 dark:to-indigo-100 bg-clip-text text-transparent">
                London Customers
              </span>
              <br />
              <span className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
                Love Our Work
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Real reviews from real customers across London • Trusted local electrician
            </p>
          </m.div>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <m.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="group relative p-8 rounded-3xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-white/20 dark:border-slate-700/50 hover:border-white/40 dark:hover:border-slate-600/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 overflow-hidden"
            >
              {/* Background decorations */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-full blur-2xl" />
              <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-full blur-2xl" />
              
              {/* Quote icon */}
              <div className="absolute top-6 right-6 text-blue-500/20 group-hover:text-blue-500/30 transition-colors duration-300">
                <Quote className="h-10 w-10" />
              </div>
              
              {/* Service badge */}
              <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-amber-500/10 to-yellow-500/10 text-amber-600 dark:text-amber-400 text-xs font-semibold mb-6">
                <Zap className="inline h-3 w-3 mr-1" />
                {testimonial.service}
              </div>
              
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              
              {/* Testimonial text */}
              <blockquote className="text-slate-700 dark:text-slate-300 leading-relaxed mb-8 text-lg font-medium">
                &quot;{testimonial.text}&quot;
              </blockquote>
              
              {/* Author info */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {testimonial.name[0]}
                </div>
                <div>
                  <div className="font-bold text-slate-900 dark:text-white text-lg">
                    {testimonial.name}
                  </div>
                  <div className="text-slate-600 dark:text-slate-400 font-medium">
                    {testimonial.role}
                  </div>
                  <div className="text-slate-500 dark:text-slate-500 text-sm">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </m.div>
          ))}
        </div>

        {/* Trust indicators */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl p-12 text-white shadow-2xl shadow-green-500/25">
            <div className="flex items-center justify-center gap-3 mb-4">
              <ThumbsUp className="h-8 w-8" />
              <h3 className="text-3xl md:text-4xl font-bold">
                Trusted London Electrician
              </h3>
            </div>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              NVQ Level 3 qualified • NICEIC approved • Part P certified • Fully insured • No call out charge for booked work
            </p>
          </div>
        </m.div>
      </div>
    </section>
  );
}
