import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import { Phone, Mail, Clock, MapPin, Zap } from "lucide-react";

export default function Page() {
  return (
    <main className="overflow-hidden">
      <NavBar />
      <Hero />
      <Services />
      <Testimonials />
      
      <section id="contact" className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-950">
        <div className="container">
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            <span className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-200/50 dark:border-blue-800/50 text-blue-700 dark:text-blue-300 text-sm font-semibold mb-6 backdrop-blur-sm">
              Get In Touch
            </span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6">
              <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 dark:from-white dark:via-blue-100 dark:to-indigo-100 bg-clip-text text-transparent">
                Ready to Get
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Started?
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Tell us about your project and we&apos;ll get right back to you with a free quote
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <div className="space-y-8">
              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl border border-white/20 dark:border-slate-700/50 p-8 lg:p-10 shadow-2xl shadow-blue-500/5">
                <h3 className="text-3xl font-bold mb-8 text-slate-900 dark:text-white">Send us a message</h3>
                <ContactForm />
              </div>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl p-8 lg:p-10 text-white shadow-2xl shadow-blue-500/25">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl backdrop-blur flex items-center justify-center">
                    <Zap className="h-7 w-7" />
                  </div>
                  <h3 className="text-3xl font-bold">Contact Information</h3>
                </div>
                
                <div className="space-y-6">
                  <a href="tel:+440000000000" className="flex items-start gap-4 p-6 rounded-2xl bg-white/10 backdrop-blur hover:bg-white/20 transition-all duration-300 group">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-blue-100 text-sm font-medium mb-1">Phone</div>
                      <div className="font-bold text-lg">+44 00 0000 0000</div>
                    </div>
                  </a>
                  
                  <a href="mailto:hello@example.com" className="flex items-start gap-4 p-6 rounded-2xl bg-white/10 backdrop-blur hover:bg-white/20 transition-all duration-300 group">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-blue-100 text-sm font-medium mb-1">Email</div>
                      <div className="font-bold text-lg">hello@example.com</div>
                    </div>
                  </a>
                  
                  <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/10 backdrop-blur">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-blue-100 text-sm font-medium mb-1">Hours</div>
                      <div className="font-bold text-lg">Mon–Sat 8:00–18:00</div>
                      <div className="text-blue-100 text-sm mt-1">24/7 Emergency Service</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/10 backdrop-blur">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-blue-100 text-sm font-medium mb-1">Service Areas</div>
                      <div className="font-bold text-lg">London & Surrounding Areas</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl border border-white/20 dark:border-slate-700/50 p-8 shadow-xl">
                <h4 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Why Choose Us?</h4>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-white" />
                    </div>
                    <span className="text-slate-700 dark:text-slate-300 font-medium">Licensed & fully insured</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-white" />
                    </div>
                    <span className="text-slate-700 dark:text-slate-300 font-medium">Free quotes & transparent pricing</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-white" />
                    </div>
                    <span className="text-slate-700 dark:text-slate-300 font-medium">Same-day service available</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-white" />
                    </div>
                    <span className="text-slate-700 dark:text-slate-300 font-medium">Quality workmanship guaranteed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <footer className="py-16 border-t border-white/20 dark:border-slate-800/50 bg-gradient-to-br from-slate-100 via-white to-blue-100 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-950">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3 font-bold text-xl">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg">
                <Zap className="h-7 w-7 text-white" />
              </div>
              <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 dark:from-white dark:via-blue-100 dark:to-indigo-100 bg-clip-text text-transparent">
                Alex Alley Electrics
              </span>
            </div>
            <div className="text-slate-600 dark:text-slate-400 font-medium">
              © {new Date().getFullYear()} Alex Alley Electrics. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
