"use client";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sophie R.",
    role: "Homeowner",
    text: "Super quick fault finding and very tidy work. Alex explained everything clearly and the pricing was very fair. Highly recommend!",
    rating: 5
  },
  {
    name: "Mike L.",
    role: "Business Owner",
    text: "Installed our EV charger perfectly and explained everything. Professional service from start to finish. Will definitely use again.",
    rating: 5
  },
  {
    name: "Aisha K.",
    role: "Property Manager",
    text: "Professional, fair price, and always on time. We use Alex for all our properties now. Excellent communication throughout.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-gradient-to-b from-white via-amber-50/30 to-white dark:from-zinc-900 dark:via-amber-950/10 dark:to-zinc-900">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-900 dark:text-amber-200 text-sm font-medium mb-4">
              Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-zinc-900 to-amber-900 dark:from-white dark:to-amber-200 bg-clip-text text-transparent">
              What Our Clients Say
            </h2>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-300">
              Don&apos;t just take our word for it
            </p>
          </motion.div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="relative p-6 rounded-2xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="absolute top-4 right-4 text-amber-400">
                <Quote className="h-8 w-8 opacity-20" />
              </div>
              
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              
              <blockquote className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
                &quot;{t.text}&quot;
              </blockquote>
              
              <div className="flex items-center gap-3 pt-4 border-t border-zinc-200 dark:border-zinc-700">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center text-white font-bold">
                  {t.name[0]}
                </div>
                <div>
                  <figcaption className="font-semibold text-zinc-900 dark:text-white">
                    {t.name}
                  </figcaption>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">{t.role}</p>
                </div>
              </div>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
