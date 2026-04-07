"use client";

import { Navbar } from "@/components/navbar";
import { FooterSection } from "@/components/sections/footer";
import { FadeIn } from "@/components/motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Calendar,
  CheckCircle,
  Shield,
} from "lucide-react";
import Link from "@/components/locale-link";
import { useLocale } from "@/lib/locale";
import { getTranslations } from "@/lib/translations";

const content = {
  en: {
    badge: "Get in Touch",
    heroTitle: "Contact",
    heroHighlight: "Us",
    heroDesc:
      "Have questions or need to schedule a dental appointment? We\u2019re here to help you achieve your healthiest smile.",
    formTitle: "Send Us a Message",
    formDesc:
      "Fill out the form below and we\u2019ll get back to you as soon as possible.",
    labelName: "Full Name",
    labelEmail: "Email Address",
    labelPhone: "Phone Number",
    labelSubject: "Subject",
    labelMessage: "Message",
    sendMessage: "Send Message",
    confidential: "Your information is 100% confidential and secure",
    infoPhone: "Phone",
    infoEmail: "Email",
    infoHours: "Hours",
    locationSpringGarden: "Spring Garden Location",
    locationMumford: "Mumford Road Location",
    bookTitle: "Book an Appointment",
    bookDesc: "Ready to schedule? Click below to call and book your appointment directly.",
    bookButton: "Book Now",
    expectTitle: "What to Expect",
    expectDesc:
      "We\u2019ll review your message and contact you within 24 hours to discuss next steps.",
    expectItems: [
      "Quick response time",
      "Personalized consultation",
      "Confidential service",
    ],
    ctaTitle: "Ready to Start Your",
    ctaHighlight: "Smile Journey?",
    ctaDesc: "Book your consultation today",
    ctaButton: "Book Now",
  },
  fr: {
    badge: "Contactez-nous",
    heroTitle: "Contactez-",
    heroHighlight: "nous",
    heroDesc:
      "Des questions ou besoin de prendre un rendez-vous dentaire\u00A0? Nous sommes l\u00E0 pour vous aider \u00E0 obtenir votre plus beau sourire.",
    formTitle: "Envoyez-nous un message",
    formDesc:
      "Remplissez le formulaire ci-dessous et nous vous r\u00E9pondrons dans les plus brefs d\u00E9lais.",
    labelName: "Nom complet",
    labelEmail: "Adresse courriel",
    labelPhone: "Num\u00E9ro de t\u00E9l\u00E9phone",
    labelSubject: "Objet",
    labelMessage: "Message",
    sendMessage: "Envoyer le message",
    confidential: "Vos informations sont 100\u00A0% confidentielles et s\u00E9curis\u00E9es",
    infoPhone: "T\u00E9l\u00E9phone",
    infoEmail: "Courriel",
    infoHours: "Heures",
    locationSpringGarden: "Emplacement Spring Garden",
    locationMumford: "Emplacement Mumford Road",
    bookTitle: "Prendre rendez-vous",
    bookDesc:
      "Pr\u00EAt \u00E0 planifier\u00A0? Cliquez ci-dessous pour appeler et r\u00E9server votre rendez-vous directement.",
    bookButton: "R\u00E9server",
    expectTitle: "\u00C0 quoi s\u2019attendre",
    expectDesc:
      "Nous examinerons votre message et vous contacterons dans les 24 heures pour discuter des prochaines \u00E9tapes.",
    expectItems: [
      "Temps de r\u00E9ponse rapide",
      "Consultation personnalis\u00E9e",
      "Service confidentiel",
    ],
    ctaTitle: "Pr\u00EAt \u00E0 commencer votre",
    ctaHighlight: "parcours sourire\u00A0?",
    ctaDesc: "R\u00E9servez votre consultation d\u00E8s aujourd\u2019hui",
    ctaButton: "R\u00E9server",
  },
};

export function ContactContent() {
  const locale = useLocale();
  const t = getTranslations(locale);
  const c = content[locale];

  const contactInfo = [
    {
      icon: MapPin,
      title: c.locationSpringGarden,
      detail: "275-5991 Spring Garden Road, Halifax, NS B3H 1Y6",
      href: "https://maps.google.com/?q=275-5991+Spring+Garden+Road+Halifax+NS+B3H+1Y6",
    },
    {
      icon: MapPin,
      title: c.locationMumford,
      detail: "101-7037 Mumford Road, Halifax, NS B3L 2J1",
      href: "https://maps.google.com/?q=101-7037+Mumford+Road+Halifax+NS+B3L+2J1",
    },
    {
      icon: Phone,
      title: c.infoPhone,
      detail: "(902) 424-1888 / (902) 406-1888",
      href: "tel:+19024241888",
    },
    {
      icon: Mail,
      title: c.infoEmail,
      detail: "info@ourdentist.ca",
      href: "mailto:info@ourdentist.ca",
    },
    {
      icon: Clock,
      title: c.infoHours,
      detail: locale === "fr" ? "Lun-Ven : 8h00 - 17h00" : "Mon-Fri: 8AM - 5PM",
      href: undefined,
    },
  ];

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

        {/* Contact Form + Info */}
        <section className="py-24 bg-cream">
          <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <FadeIn>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-border/50">
                <h2 className="font-heading text-2xl font-semibold text-navy mb-2">
                  {c.formTitle}
                </h2>
                <p className="text-muted-foreground text-sm mb-6">
                  {c.formDesc}
                </p>
                <form className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-navy block mb-1.5">
                      {c.labelName}
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-cream/50 text-sm focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-navy block mb-1.5">
                      {c.labelEmail}
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-cream/50 text-sm focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-navy block mb-1.5">
                      {c.labelPhone}
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-cream/50 text-sm focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-navy block mb-1.5">
                      {c.labelSubject}
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-cream/50 text-sm focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-navy block mb-1.5">
                      {c.labelMessage}
                    </label>
                    <textarea
                      rows={5}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-cream/50 text-sm focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gold hover:bg-gold-light text-navy py-3.5 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg"
                  >
                    {c.sendMessage}
                  </button>
                  <p className="text-xs text-center text-muted-foreground">
                    <Shield className="w-3 h-3 inline mr-1" />
                    {c.confidential}
                  </p>
                </form>
              </div>
            </FadeIn>

            {/* Info */}
            <FadeIn delay={0.1}>
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div
                    key={info.title}
                    className="p-5 rounded-2xl bg-white border border-border/50 flex items-start gap-4"
                  >
                    <div className="p-3 rounded-xl bg-gold/10 shrink-0">
                      <info.icon className="w-5 h-5 text-gold" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-heading text-base font-semibold text-navy mb-1">
                        {info.title}
                      </h3>
                      {info.href ? (
                        <a
                          href={info.href}
                          target={info.href.startsWith("http") ? "_blank" : undefined}
                          rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-sm text-muted-foreground hover:text-gold transition-colors break-all"
                        >
                          {info.detail}
                        </a>
                      ) : (
                        <p className="text-sm text-muted-foreground">
                          {info.detail}
                        </p>
                      )}
                    </div>
                  </div>
                ))}

                {/* Book appointment card */}
                <div className="p-6 rounded-2xl bg-navy text-white">
                  <h3 className="font-heading text-xl font-semibold mb-2">
                    {c.bookTitle}
                  </h3>
                  <p className="text-white/60 text-sm mb-4">
                    {c.bookDesc}
                  </p>
                  <Link
                    href="tel:+19024241888"
                    className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300"
                  >
                    <Calendar className="w-4 h-4" />
                    {c.bookButton}
                  </Link>
                </div>

                {/* What to expect */}
                <div className="p-6 rounded-2xl bg-gold/5 border border-gold/20">
                  <h3 className="font-heading text-lg font-semibold text-navy mb-3">
                    {c.expectTitle}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    {c.expectDesc}
                  </p>
                  <ul className="space-y-2">
                    {c.expectItems.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle className="w-4 h-4 text-gold shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Map */}
        <section className="h-80 bg-navy/5">
          <iframe
            title="Lawen Dentistry - Spring Garden Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2838.5!2d-63.58!3d44.64!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s275-5991+Spring+Garden+Road%2C+Halifax%2C+NS+B3H+1Y6!5e0!3m2!1sen!2sca!4v1"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </section>

        {/* CTA */}
        <section className="py-20 bg-navy text-center">
          <div className="max-w-2xl mx-auto px-6">
            <FadeIn>
              <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-white mb-4">
                {c.ctaTitle}{" "}
                <span className="text-gold">{c.ctaHighlight}</span>
              </h2>
              <p className="text-white/50 mb-8">
                {c.ctaDesc}
              </p>
              <Link
                href="tel:+19024241888"
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy px-10 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-gold/20"
              >
                <Calendar className="w-5 h-5" />
                {c.ctaButton}
              </Link>
            </FadeIn>
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  );
}
