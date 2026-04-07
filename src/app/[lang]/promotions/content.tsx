"use client";

import { Navbar } from "@/components/navbar";
import { FooterSection } from "@/components/sections/footer";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/motion";
import { Calendar, Tag, Clock, Sparkles, Star, Smile } from "lucide-react";
import Link from "@/components/locale-link";
import { useLocale } from "@/lib/locale";
import { getTranslations } from "@/lib/translations";

const promoContent = {
  en: {
    badge: "Limited time offers",
    heroTitle: "Current",
    heroHighlight: "Promotions",
    heroDesc:
      "Take advantage of our exclusive dental offers. Quality care at exceptional prices to keep your smile healthy and bright.",
    promos: [
      {
        icon: Smile,
        title: "Free Invisalign Consultation",
        desc: "Thinking about straightening your smile? Book a complimentary Invisalign consultation with Dr. Lawen, Diamond+ Invisalign Provider. Includes a digital scan and personalized treatment overview.",
        validity: "Ongoing",
      },
      {
        icon: Sparkles,
        title: "New Patient Special",
        desc: "Welcome to Lawen Dentistry! New patients receive a comprehensive exam, digital x-rays, and a professional cleaning at a special introductory rate. Call for details.",
        validity: "Limited time",
      },
      {
        icon: Star,
        title: "Teeth Whitening Bundle",
        desc: "Brighten your smile with our professional whitening bundle. Get in-office whitening plus a take-home maintenance kit at a discounted package price. Ask us for details.",
        validity: "While supplies last",
      },
    ],
    ctaTitle: "Ready to",
    ctaHighlight: "Book?",
    ctaDesc: "Contact us today to take advantage of these limited-time dental offers.",
    ctaBook: "Book Now",
    ctaPricing: "View All Prices",
  },
  fr: {
    badge: "Offres \u00E0 dur\u00E9e limit\u00E9e",
    heroTitle: "Promotions",
    heroHighlight: "en cours",
    heroDesc:
      "Profitez de nos offres dentaires exclusives. Des soins de qualit\u00E9 \u00E0 des prix exceptionnels pour garder votre sourire sain et \u00E9clatant.",
    promos: [
      {
        icon: Smile,
        title: "Consultation Invisalign gratuite",
        desc: "Vous pensez \u00E0 aligner votre sourire\u00A0? R\u00E9servez une consultation Invisalign gratuite avec le Dr Lawen, fournisseur Invisalign Diamond+. Comprend un scan num\u00E9rique et un aper\u00E7u personnalis\u00E9 du traitement.",
        validity: "En cours",
      },
      {
        icon: Sparkles,
        title: "Offre nouveau patient",
        desc: "Bienvenue chez Lawen Dentistry\u00A0! Les nouveaux patients b\u00E9n\u00E9ficient d\u2019un examen complet, de radiographies num\u00E9riques et d\u2019un nettoyage professionnel \u00E0 un tarif de lancement sp\u00E9cial. Appelez pour d\u00E9tails.",
        validity: "Dur\u00E9e limit\u00E9e",
      },
      {
        icon: Star,
        title: "Forfait blanchiment",
        desc: "Illuminez votre sourire avec notre forfait blanchiment professionnel. Blanchiment en cabinet plus un kit d\u2019entretien \u00E0 domicile \u00E0 un prix forfaitaire r\u00E9duit. Demandez-nous les d\u00E9tails.",
        validity: "Jusqu\u2019\u00E0 \u00E9puisement des stocks",
      },
    ],
    ctaTitle: "Pr\u00EAt \u00E0",
    ctaHighlight: "r\u00E9server\u00A0?",
    ctaDesc:
      "Contactez-nous d\u00E8s aujourd\u2019hui pour profiter de ces offres dentaires \u00E0 dur\u00E9e limit\u00E9e.",
    ctaBook: "R\u00E9server",
    ctaPricing: "Voir tous les tarifs",
  },
};

export function PromotionsContent() {
  const locale = useLocale();
  const t = getTranslations(locale);
  const c = promoContent[locale];

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative bg-navy pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/95 to-navy/90" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <FadeIn>
              <p className="text-gold text-sm font-medium tracking-wider uppercase mb-4">
                {c.badge}
              </p>
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-semibold text-white leading-tight mb-6">
                {c.heroTitle} <span className="text-gold">{c.heroHighlight}</span>
              </h1>
              <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto">
                {c.heroDesc}
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Promotions Cards */}
        <section className="py-24 bg-cream">
          <div className="max-w-4xl mx-auto px-6">
            <StaggerChildren className="space-y-6" staggerDelay={0.1}>
              {c.promos.map((promo) => (
                <StaggerItem key={promo.title}>
                  <div className="p-8 rounded-2xl bg-white border border-border/50 hover:border-gold/30 hover:shadow-md transition-all duration-500">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-gold/10 shrink-0">
                        <promo.icon className="w-6 h-6 text-gold" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <h3 className="font-heading text-xl font-semibold text-navy">
                            {promo.title}
                          </h3>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                          {promo.desc}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="w-4 h-4 text-gold" />
                          {promo.validity}
                        </div>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-navy text-center">
          <div className="max-w-2xl mx-auto px-6">
            <FadeIn>
              <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-white mb-4">
                {c.ctaTitle} <span className="text-gold">{c.ctaHighlight}</span>
              </h2>
              <p className="text-white/50 mb-8">
                {c.ctaDesc}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-navy px-10 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-gold/20"
                >
                  <Calendar className="w-5 h-5" />
                  {c.ctaBook}
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white px-6 py-4 rounded-full text-sm transition-all duration-300 hover:bg-white/15"
                >
                  {c.ctaPricing}
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  );
}
