"use client";

import { motion } from "framer-motion";
import { Calendar, Phone, Star, MapPin, Clock, Shield } from "lucide-react";
import Link from "@/components/locale-link";
import { useLocale } from "@/lib/locale";
import { getTranslations } from "@/lib/translations";

export function HeroSection() {
  const locale = useLocale();
  const t = getTranslations(locale);

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
            backgroundImage: "url('/hero-bg.webp')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/40 to-navy/90" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-navy to-transparent" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-24">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-white leading-[1.05] mb-6"
        >
          {t.hero.excellenceIn}
          <br />
          <span className="gold-shimmer">{t.hero.medicine}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg sm:text-xl text-white/70 font-light max-w-2xl mx-auto mb-10 tracking-wide"
        >
          {t.hero.subtitle}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Link
            href="#services"
            className="group flex items-center gap-3 bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/20 hover:border-gold/40 text-white px-8 py-4 rounded-full text-sm font-medium tracking-wide transition-all duration-300"
          >
            {t.hero.privateMedicine}
          </Link>
          <Link
            href="#contact"
            className="group flex items-center gap-3 bg-gold hover:bg-gold-light text-navy px-8 py-4 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 hover:shadow-xl hover:shadow-gold/20"
          >
            <Calendar className="w-4 h-4" />
            {t.hero.medicalAesthetic}
          </Link>
        </motion.div>

        {/* Trust Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 pt-8 border-t border-white/10"
        >
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map(i => (
                <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
              ))}
            </div>
            <span className="text-white/50 text-xs">5-Star Reviews</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-3.5 h-3.5 text-gold" />
            <span className="text-white/50 text-xs">Insurance Accepted</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-gold" />
            <span className="text-white/50 text-xs">2 Halifax Locations</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-gold" />
            <span className="text-white/50 text-xs">Mon-Fri 8AM-5PM</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
