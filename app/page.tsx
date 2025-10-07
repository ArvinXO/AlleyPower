import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import ThreeBackground from "@/components/ThreeBackground";
import ClientOnly from "@/components/ClientOnly";
import { Phone, Mail, Clock, MapPin, Zap } from "lucide-react";

export default function Page() {
  return (
    <main className="overflow-hidden">
      <ClientOnly>
        <NavBar />
      <section className="relative">
        <ThreeBackground />
        <Hero />
      </section>
      <Services />
      <Testimonials />
      
      <section id="contact" className="py-16 lg:py-24 bg-gradient-to-b from-white via-zinc-50 to-white dark:from-zinc-900 dark:via-zinc-900/50 dark:to-zinc-900">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-900 dark:text-amber-200 text-sm font-medium mb-4">
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-zinc-900 to-amber-900 dark:from-white dark:to-amber-200 bg-clip-text text-transparent">
              Ready to Get Started?
            </h2>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-300">
              Tell us about your project and we&apos;ll get right back to you
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div className="bg-white dark:bg-zinc-800 rounded-2xl border border-zinc-200 dark:border-zinc-700 p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-zinc-900 dark:text-white">Send us a message</h3>
                <ContactForm />
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-8 text-white shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-white/20 rounded-xl backdrop-blur">
                    <Zap className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold">Contact Information</h3>
                </div>
                
                <div className="space-y-4">
                  <a href="tel:+440000000000" className="flex items-start gap-4 p-4 rounded-xl bg-white/10 backdrop-blur hover:bg-white/20 transition-colors group">
                    <Phone className="h-5 w-5 mt-0.5 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="text-sm opacity-90">Phone</div>
                      <div className="font-semibold">+44 00 0000 0000</div>
                    </div>
                  </a>
                  
                  <a href="mailto:hello@example.com" className="flex items-start gap-4 p-4 rounded-xl bg-white/10 backdrop-blur hover:bg-white/20 transition-colors group">
                    <Mail className="h-5 w-5 mt-0.5 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="text-sm opacity-90">Email</div>
                      <div className="font-semibold">hello@example.com</div>
                    </div>
                  </a>
                  
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white/10 backdrop-blur">
                    <Clock className="h-5 w-5 mt-0.5" />
                    <div>
                      <div className="text-sm opacity-90">Hours</div>
                      <div className="font-semibold">Mon–Sat 8:00–18:00</div>
                      <div className="text-sm opacity-90 mt-1">24/7 Emergency Service</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white/10 backdrop-blur">
                    <MapPin className="h-5 w-5 mt-0.5" />
                    <div>
                      <div className="text-sm opacity-90">Service Areas</div>
                      <div className="font-semibold">London & Surrounding Areas</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-zinc-800 rounded-2xl border border-zinc-200 dark:border-zinc-700 p-6 shadow-lg">
                <h4 className="font-bold mb-3 text-zinc-900 dark:text-white">Why Choose Us?</h4>
                <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-300">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    Licensed & fully insured
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    Free quotes & transparent pricing
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    Same-day service available
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    Quality workmanship guaranteed
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <footer className="py-12 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 font-bold text-lg">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <span className="bg-gradient-to-r from-zinc-900 to-amber-900 dark:from-white dark:to-amber-200 bg-clip-text text-transparent">
                Alex Alley Electrics
              </span>
            </div>
            <div className="text-sm text-zinc-600 dark:text-zinc-400">
              © {new Date().getFullYear()} Alex Alley Electrics. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
      </ClientOnly>
    </main>
  );
}
