"use client";

import { Navbar } from "@/components/navbar";
import { FooterSection } from "@/components/sections/footer";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/motion";
import {
  Phone,
  Calendar,
  CheckCircle,
  Star,
  Quote,
  ArrowRight,
  Shield,
  Clock,
  type LucideIcon,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "@/components/locale-link";
import { useLocale } from "@/lib/locale";
import { getTranslations } from "@/lib/translations";

/* ─── Types ─── */
export interface ServiceFeature {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface ServiceStep {
  step: number;
  title: string;
  desc: string;
}

export interface ServiceTestimonial {
  name: string;
  initial: string;
  treatment: string;
  text: string;
  rating: number;
}

export interface ServiceFAQ {
  q: string;
  a: string;
}

export interface ServicePageProps {
  /* Hero */
  heroTitle: string;
  heroHighlight?: string;
  heroDescription: string;
  heroBadges?: string[];
  heroImage?: string;

  /* Why choose */
  whyTitle?: string;
  whySubtitle?: string;
  features: ServiceFeature[];

  /* Procedures / Services */
  proceduresTitle?: string;
  proceduresSubtitle?: string;
  procedures: { title: string; desc: string }[];

  /* Process steps */
  steps?: ServiceStep[];

  /* Testimonials */
  testimonials?: ServiceTestimonial[];

  /* FAQ */
  faqTitle?: string;
  faqs: ServiceFAQ[];
  faqCategories?: { label: string; faqs: ServiceFAQ[] }[];

  /* Contact form */
  formTitle?: string;
  formOptions?: string[];
}

/* ─── Component ─── */
export function ServicePageLayout({
  heroTitle,
  heroHighlight,
  heroDescription,
  heroBadges = [],
  heroImage,
  whyTitle,
  whySubtitle,
  features,
  proceduresTitle,
  proceduresSubtitle,
  procedures,
  steps,
  testimonials,
  faqTitle,
  faqs,
  formTitle,
  formOptions = [],
}: ServicePageProps) {
  const locale = useLocale();
  const t = getTranslations(locale);

  const effectiveWhyTitle = whyTitle || t.service.whyChoose;
  const effectiveProceduresTitle = proceduresTitle || t.service.ourTreatments;
  const effectiveFaqTitle = faqTitle || t.service.faq;
  const effectiveFormTitle = formTitle || t.service.bookConsultation;

  return (
    <>
      <Navbar />
      <main>
        {/* ─── Hero ─── */}
        <section className="relative min-h-screen flex items-center overflow-hidden pt-16 md:pt-20">
          <div className="absolute inset-0 bg-navy">
            {heroImage && (
              <div
                className="absolute inset-0 bg-cover bg-center opacity-25"
                style={{ backgroundImage: `url('${heroImage}')` }}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-b from-navy/50 via-navy/60 to-navy/95" />
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div>
              <FadeIn>
                <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-semibold text-white leading-tight mb-6">
                  {heroTitle}{" "}
                  {heroHighlight && (
                    <span className="text-gold">{heroHighlight}</span>
                  )}
                </h1>
              </FadeIn>
              <FadeIn delay={0.1}>
                <p className="text-white/60 text-lg leading-relaxed mb-6 max-w-lg">
                  {heroDescription}
                </p>
              </FadeIn>
              {heroBadges.length > 0 && (
                <FadeIn delay={0.2}>
                  <div className="flex flex-wrap gap-3 mb-8">
                    {heroBadges.map((badge) => (
                      <span
                        key={badge}
                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-white/80 text-sm"
                      >
                        <CheckCircle className="w-4 h-4 text-gold" />
                        {badge}
                      </span>
                    ))}
                  </div>
                </FadeIn>
              )}
              <FadeIn delay={0.3}>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="#contact"
                    className="flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-navy px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-gold/20"
                  >
                    <Calendar className="w-5 h-5" />
                    {t.service.bookConsultation}
                  </Link>
                  <Link
                    href="tel:+19024241888"
                    className="flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white px-6 py-4 rounded-full text-sm transition-all duration-300 hover:bg-white/15"
                  >
                    <Phone className="w-4 h-4" />
                    Call (902) 424-1888
                  </Link>
                </div>
              </FadeIn>
            </div>

            {/* Right: Form */}
            <FadeIn delay={0.2} direction="left">
              <div
                id="contact"
                className="bg-white rounded-2xl p-8 shadow-2xl"
              >
                <h3 className="font-heading text-2xl font-semibold text-navy mb-2">
                  {effectiveFormTitle}
                </h3>
                <p className="text-muted-foreground text-sm mb-6">
                  {t.service.formSubtitle}
                </p>
                <form className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-navy block mb-1.5">
                      {t.service.fullName}
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-cream/50 text-sm focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-navy block mb-1.5">
                      {t.service.emailAddress}
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-cream/50 text-sm focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-navy block mb-1.5">
                      {t.service.phoneNumber}
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-cream/50 text-sm focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold"
                    />
                  </div>
                  {formOptions.length > 0 && (
                    <div>
                      <label className="text-sm font-medium text-navy block mb-1.5">
                        {t.service.interestedIn}
                      </label>
                      <select
                        required
                        className="w-full px-4 py-3 rounded-xl border border-border bg-cream/50 text-sm focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold"
                      >
                        <option value="">{t.service.selectTreatment}</option>
                        {formOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}
                  <button
                    type="submit"
                    className="w-full bg-gold hover:bg-gold-light text-navy py-3.5 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg"
                  >
                    {t.service.submit}
                  </button>
                  <p className="text-xs text-center text-muted-foreground">
                    <Shield className="w-3 h-3 inline mr-1" />
                    {t.service.confidential}
                  </p>
                </form>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ─── Why Choose ─── */}
        <section className="py-24 bg-cream">
          <div className="max-w-6xl mx-auto px-6">
            <FadeIn className="text-center mb-16">
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4">
                {effectiveWhyTitle}
              </h2>
              {whySubtitle && (
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  {whySubtitle}
                </p>
              )}
            </FadeIn>
            <StaggerChildren
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
              staggerDelay={0.08}
            >
              {features.map((f) => (
                <StaggerItem key={f.title}>
                  <div className="group p-6 rounded-2xl bg-white border border-border/50 hover:border-gold/30 hover:shadow-md transition-all duration-500 h-full">
                    <div className="p-3 rounded-xl bg-gold/10 w-fit mb-4 group-hover:bg-gold/20 transition-colors">
                      <f.icon className="w-6 h-6 text-gold" />
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-navy mb-2">
                      {f.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </section>

        {/* ─── Procedures ─── */}
        <section className="py-24 bg-white noise-overlay">
          <div className="relative z-10 max-w-6xl mx-auto px-6">
            <FadeIn className="text-center mb-16">
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4">
                {effectiveProceduresTitle}
              </h2>
              {proceduresSubtitle && (
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  {proceduresSubtitle}
                </p>
              )}
            </FadeIn>
            <StaggerChildren
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
              staggerDelay={0.08}
            >
              {procedures.map((p) => (
                <StaggerItem key={p.title}>
                  <div className="group p-6 rounded-2xl border border-border/50 hover:border-gold/30 hover:shadow-md bg-cream/50 transition-all duration-500 h-full flex flex-col">
                    <h3 className="font-heading text-xl font-semibold text-navy mb-3">
                      {p.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">
                      {p.desc}
                    </p>
                    <Link
                      href="#contact"
                      className="flex items-center gap-2 text-gold text-sm font-medium hover:gap-3 transition-all"
                    >
                      {t.service.bookEvaluation}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </section>

        {/* ─── Process Steps ─── */}
        {steps && steps.length > 0 && (
          <section className="py-24 bg-cream">
            <div className="max-w-4xl mx-auto px-6">
              <FadeIn className="text-center mb-16">
                <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-navy">
                  {t.service.ourProcess}
                </h2>
              </FadeIn>
              <div className="space-y-6">
                {steps.map((s, i) => (
                  <FadeIn key={s.step} delay={i * 0.1}>
                    <div className="flex gap-6 items-start p-6 rounded-2xl bg-white border border-border/50">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                        <span className="font-heading text-xl font-bold text-gold">
                          {s.step}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-heading text-lg font-semibold text-navy mb-1">
                          {s.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {s.desc}
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ─── Testimonials ─── */}
        {testimonials && testimonials.length > 0 && (
          <section className="py-24 bg-navy">
            <div className="max-w-6xl mx-auto px-6">
              <FadeIn className="text-center mb-16">
                <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-2">
                  {t.service.patientTestimonials}
                </h2>
                <div className="flex items-center justify-center gap-2 mt-4">
                  <span className="text-white/60 text-sm">{t.service.rated}</span>
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-gold text-gold"
                      />
                    ))}
                  </div>
                  <span className="text-white/60 text-sm">{t.service.byPatients}</span>
                </div>
              </FadeIn>
              <StaggerChildren
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
                staggerDelay={0.1}
              >
                {testimonials.map((tm) => (
                  <StaggerItem key={tm.name}>
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 h-full flex flex-col">
                      <Quote className="w-8 h-8 text-gold/30 mb-3" />
                      <p className="text-white/70 text-sm leading-relaxed flex-1 mb-5">
                        &ldquo;{tm.text}&rdquo;
                      </p>
                      <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                        <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold font-semibold text-sm">
                          {tm.initial}
                        </div>
                        <div>
                          <div className="text-white text-sm font-medium">
                            {tm.name}
                          </div>
                          <div className="text-gold/60 text-xs uppercase tracking-wider">
                            {tm.treatment}
                          </div>
                        </div>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerChildren>
            </div>
          </section>
        )}

        {/* ─── FAQ ─── */}
        <section className="py-24 bg-cream">
          <div className="max-w-3xl mx-auto px-6">
            <FadeIn className="text-center mb-14">
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-navy">
                {effectiveFaqTitle}
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Accordion className="space-y-3">
                {faqs.map((faq, i) => (
                  <AccordionItem
                    key={i}
                    className="bg-white border border-border/50 rounded-xl px-6 data-open:border-gold/30 data-open:shadow-sm transition-all duration-300"
                  >
                    <AccordionTrigger className="text-left font-medium text-navy hover:text-gold text-sm sm:text-base py-4 sm:py-5 min-h-[44px] hover:no-underline data-open:text-gold">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </FadeIn>
          </div>
        </section>

        {/* ─── Bottom CTA ─── */}
        <section className="py-20 bg-navy text-center">
          <div className="max-w-2xl mx-auto px-6">
            <FadeIn>
              <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-white mb-4">
                {t.service.readyTitle}{" "}
                <span className="text-gold">{t.service.transformation}</span>
              </h2>
              <p className="text-white/50 mb-8">
                {t.service.bookToday}
              </p>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy px-10 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-gold/20"
              >
                <Calendar className="w-5 h-5" />
                {t.nav.bookNow}
              </Link>
            </FadeIn>
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  );
}
