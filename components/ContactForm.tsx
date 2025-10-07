"use client";
import { useState } from "react";
import { m } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

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
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Your Name *
        </label>
        <input 
          name="name" 
          required 
          placeholder="John Smith"
          className="w-full rounded-xl border-2 border-zinc-200 dark:border-zinc-700 px-4 py-3 bg-white dark:bg-zinc-900 focus:border-amber-500 dark:focus:border-amber-500 focus:outline-none transition-colors"
        />
      </div>
      
      <div className="space-y-2">
        <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Phone Number *
        </label>
        <input 
          name="phone" 
          type="tel"
          required 
          placeholder="+44 7700 900000"
          className="w-full rounded-xl border-2 border-zinc-200 dark:border-zinc-700 px-4 py-3 bg-white dark:bg-zinc-900 focus:border-amber-500 dark:focus:border-amber-500 focus:outline-none transition-colors"
        />
      </div>
      
      <div className="space-y-2">
        <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Message
        </label>
        <textarea 
          name="message" 
          rows={4} 
          placeholder="Tell us about your electrical needs..."
          className="w-full rounded-xl border-2 border-zinc-200 dark:border-zinc-700 px-4 py-3 bg-white dark:bg-zinc-900 focus:border-amber-500 dark:focus:border-amber-500 focus:outline-none transition-colors resize-none"
        />
      </div>
      
      <m.button 
        disabled={status==="loading"}
        whileHover={{ scale: status === "loading" ? 1 : 1.02 }}
        whileTap={{ scale: status === "loading" ? 1 : 0.98 }}
        className="w-full flex items-center justify-center gap-2 rounded-xl px-6 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold shadow-lg shadow-amber-500/30 hover:shadow-xl hover:shadow-amber-500/40 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="h-5 w-5" />
            Send Message
          </>
        )}
      </m.button>
      
      {status === "done" && (
        <m.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 p-4 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-300"
        >
          <CheckCircle className="h-5 w-5" />
          <p className="text-sm font-medium">Thanks! We&apos;ll be in touch soon.</p>
        </m.div>
      )}
      
      {status === "error" && (
        <m.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300"
        >
          <AlertCircle className="h-5 w-5" />
          <p className="text-sm font-medium">Something went wrong. Please try again.</p>
        </m.div>
      )}
    </form>
  );
}
