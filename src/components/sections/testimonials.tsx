"use client";

import { FadeIn, StaggerChildren, StaggerItem } from "@/components/motion";
import { Star, Quote, MessageCircle } from "lucide-react";
import { useLocale } from "@/lib/locale";
import { getTranslations } from "@/lib/translations";

const testimonials = [
  {
    name: "Talie T.",
    treatment: "General Dentistry",
    rating: 5,
    text: "Dr. Lawen really makes you forget you're at the big scary dentist office. The entire team is warm, welcoming, and incredibly skilled.",
  },
  {
    name: "Amara H.",
    treatment: "Invisalign",
    rating: 5,
    text: "The Invisalign process is so streamlined they have it down to a science. Couldn't be happier with my results and the entire experience.",
  },
  {
    name: "Lacey C.",
    treatment: "Invisalign",
    rating: 5,
    text: "I just finished my Invisalign treatment and can't say enough great things. My new smile makes me feel more confident and so happy!",
  },
  {
    name: "Connor M.",
    treatment: "Long-term Patient",
    rating: 5,
    text: "Outstanding care and customer service! I have been going for 7 years and they have always been incredible. Highly recommend to everyone.",
  },
  {
    name: "Sarah W.",
    treatment: "Cosmetic Dentistry",
    rating: 5,
    text: "Dr. Lawen and his team transformed my smile completely. The attention to detail and care throughout the process was exceptional.",
  },
  {
    name: "Michael R.",
    treatment: "Emergency Care",
    rating: 5,
    text: "Had a dental emergency and they got me in right away. Professional, compassionate, and thorough. This is what great dental care looks like.",
  },
];

export function TestimonialsSection() {
  const locale = useLocale();
  const t = getTranslations(locale);
  return (
    <section id="testimonials" className="relative py-24 sm:py-32 bg-navy overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gold/3 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/10 mb-6">
            <MessageCircle className="w-4 h-4 text-gold" />
            <span className="text-sm text-gold font-medium tracking-wide">
              {t.testimonials.badge}
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-4">
            {t.testimonials.title} <span className="gold-shimmer">{t.testimonials.titleHighlight}</span> {t.testimonials.titleEnd}
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            {t.testimonials.subtitle}
          </p>
        </FadeIn>

        <StaggerChildren
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerDelay={0.08}
        >
          {testimonials.map((item) => (
            <StaggerItem key={item.name}>
              <div className="relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/8 hover:border-gold/20 transition-all duration-500 h-full flex flex-col">
                <Quote className="w-8 h-8 text-gold/30 mb-4" />

                <div className="flex gap-1 mb-3">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-gold text-gold"
                    />
                  ))}
                </div>

                <p className="text-white/70 text-sm leading-relaxed flex-1 mb-5">
                  &ldquo;{item.text}&rdquo;
                </p>

                <div className="pt-4 border-t border-white/10">
                  <div className="font-semibold text-white text-sm">
                    {item.name}
                  </div>
                  <div className="text-gold/70 text-xs uppercase tracking-wider mt-0.5">
                    {item.treatment}
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
