"use client";

import { FadeIn } from "@/components/motion";
import { Calendar, Phone, MapPin } from "lucide-react";
import Link from "@/components/locale-link";
import { useLocale } from "@/lib/locale";
import { getTranslations } from "@/lib/translations";

export function CTASection() {
  const locale = useLocale();
  const t = getTranslations(locale);
  return (
    <section className="relative py-24 sm:py-32 bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream to-white" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <FadeIn>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 mb-6">
            <Calendar className="w-4 h-4 text-gold" />
            <span className="text-sm text-gold font-medium tracking-wide">
              {t.cta.badge}
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4">
            {t.cta.title}{" "}
            <span className="text-gold">{t.cta.titleHighlight}</span> {t.cta.titleEnd}
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-muted-foreground max-w-lg mx-auto mb-8">
            {t.cta.subtitle}
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:9024241888"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-gold/20"
            >
              <Phone className="w-5 h-5" />
              Spring Garden
            </a>
            <a
              href="tel:9024061888"
              className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-navy/20"
            >
              <Phone className="w-5 h-5" />
              Mumford Road
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
