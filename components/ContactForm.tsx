"use client";
import { useState } from "react";
import { m } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Loader2, User, Phone, MessageSquare } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle"|"loading"|"done"|"error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("loading");
    try {
      const r = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!r.ok) throw new Error("Request failed");
      setStatus("done");
      form.reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch (e) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="space-y-3">
        <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300">
          <User className="h-4 w-4 text-blue-600" />
          Your Name *
        </label>
        <input 
          name="name" 
          required 
          placeholder="John Smith"
          className="w-full rounded-2xl border-2 border-slate-200 dark:border-slate-700 px-6 py-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all duration-300 text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400"
        />
      </div>
      
      <div className="space-y-3">
        <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300">
          <Phone className="h-4 w-4 text-blue-600" />
          Phone Number *
        </label>
        <input 
          name="phone" 
          type="tel"
          required 
          placeholder="+44"
          className="w-full rounded-2xl border-2 border-slate-200 dark:border-slate-700 px-6 py-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all duration-300 text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400"
        />
      </div>
      
      <div className="space-y-3">
        <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300">
          <MessageSquare className="h-4 w-4 text-blue-600" />
          Message
        </label>
        <textarea 
          name="message" 
          rows={5} 
          placeholder="Tell us about your electrical needs... (e.g., socket installation, EV charger, rewiring, safety inspection)"
          className="w-full rounded-2xl border-2 border-slate-200 dark:border-slate-700 px-6 py-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all duration-300 resize-none text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400"
        />
      </div>
      
      <m.button 
        disabled={status==="loading"}
        whileHover={{ scale: status === "loading" ? 1 : 1.02 }}
        whileTap={{ scale: status === "loading" ? 1 : 0.98 }}
        className="w-full flex items-center justify-center gap-3 rounded-2xl px-8 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg shadow-xl shadow-blue-500/25 hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-6 w-6 animate-spin" />
            Sending Message...
          </>
        ) : (
          <>
            <Send className="h-6 w-6" />
            Send Message
          </>
        )}
      </m.button>
      
      {status === "done" && (
        <m.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="flex items-center gap-3 p-6 rounded-2xl bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-300 shadow-lg"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
            <CheckCircle className="h-6 w-6 text-white" />
          </div>
          <div>
            <p className="font-bold text-lg">Message Sent Successfully!</p>
            <p className="text-sm opacity-90">Thanks for reaching out. We&apos;ll get back to you within 24 hours.</p>
          </div>
        </m.div>
      )}
      
      {status === "error" && (
        <m.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="flex items-center gap-3 p-6 rounded-2xl bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 shadow-lg"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center flex-shrink-0">
            <AlertCircle className="h-6 w-6 text-white" />
          </div>
          <div>
            <p className="font-bold text-lg">Something went wrong</p>
            <p className="text-sm opacity-90">Please try again or call us directly at +44 7456 569003</p>
          </div>
        </m.div>
      )}
    </form>
  );
}
