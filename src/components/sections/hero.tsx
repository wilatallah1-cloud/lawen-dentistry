"use client";

import { motion } from "framer-motion";
import { Stethoscope, Sparkles } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-navy">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('https://drlaurentmedecineprivee.ca/assets/hero-medical-consultation-DPuVY465.jpg')",
          }}
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/40 to-navy/90" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-navy to-transparent" />
        {/* Gold accent glow */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-gold/3 rounded-full blur-3xl" />
      </div>

      {/* Floating diamonds */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-32 right-[15%] diamond w-6 h-6 opacity-20"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-40 left-[10%] diamond w-8 h-8 opacity-15"
      />
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 right-[8%] diamond w-5 h-5 opacity-20"
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <div className="p-3 rounded-full border border-gold/30 bg-gold/5">
            <Stethoscope className="w-7 h-7 text-gold" />
          </div>
          <div className="w-px h-10 bg-gold/30" />
          <div className="p-3 rounded-full border border-gold/30 bg-gold/5">
            <Sparkles className="w-7 h-7 text-gold" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-white leading-[1.05] mb-6"
        >
          Excellence in
          <br />
          <span className="gold-shimmer">Medicine</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg sm:text-xl text-white/70 font-light max-w-2xl mx-auto mb-4 tracking-wide"
        >
          Private Healthcare & Medical Aesthetic Solutions
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-sm sm:text-base text-white/50 max-w-xl mx-auto mb-10 leading-relaxed"
        >
          One physician. Two specialties. Dr. Laurent unites comprehensive
          medical care and advanced medical aesthetic treatments under one
          roof—distinct services delivered with the same precision, safety, and
          personalized excellence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="#services"
            className="group flex items-center gap-3 bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/20 hover:border-gold/40 text-white px-8 py-4 rounded-full text-sm font-medium tracking-wide transition-all duration-300"
          >
            <Stethoscope className="w-4 h-4 text-gold" />
            Private Medicine
          </Link>
          <Link
            href="#services"
            className="group flex items-center gap-3 bg-gold hover:bg-gold-light text-navy px-8 py-4 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 hover:shadow-xl hover:shadow-gold/20"
          >
            <Sparkles className="w-4 h-4" />
            Medical Aesthetic
          </Link>
        </motion.div>


      </div>
    </section>
  );
}
