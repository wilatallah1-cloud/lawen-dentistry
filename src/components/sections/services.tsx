"use client";

import { FadeIn, StaggerChildren, StaggerItem } from "@/components/motion";
import {
  Smile,
  Sparkles,
  Wrench,
  Moon,
  Baby,
  Zap,
  ShieldCheck,
  ArrowRight,
  Calendar,
} from "lucide-react";
import Link from "@/components/locale-link";
import { useLocale } from "@/lib/locale";
import { getTranslations } from "@/lib/translations";

export function ServicesSection() {
  const locale = useLocale();
  const t = getTranslations(locale);

  const services = [
    {
      icon: Smile,
      title: t.services.familyMedicine,
      desc: t.services.familyMedicineDesc,
      price: "Diamond+ Provider",
      color: "from-blue-50 to-blue-100/50",
      iconBg: "bg-blue-100 text-blue-700",
      href: "/cosmetic-dentistry",
    },
    {
      icon: Sparkles,
      title: t.services.injectables,
      desc: t.services.injectablesDesc,
      price: t.services.consultation,
      color: "from-amber-50 to-yellow-50",
      iconBg: "bg-amber-100 text-amber-700",
      href: "/cosmetic-dentistry/whitening",
    },
    {
      icon: Wrench,
      title: t.services.weightManagement,
      desc: t.services.weightManagementDesc,
      price: t.services.consultation,
      color: "from-green-50 to-emerald-50",
      iconBg: "bg-green-100 text-green-700",
      href: "/general-dentistry",
    },
    {
      icon: Moon,
      title: t.services.laserTreatments,
      desc: t.services.laserTreatmentsDesc,
      price: t.services.consultation,
      color: "from-purple-50 to-violet-50",
      iconBg: "bg-purple-100 text-purple-700",
      href: "/general-dentistry/sedation",
    },
    {
      icon: Baby,
      title: t.services.preventiveScreenings,
      desc: t.services.preventiveScreeningsDesc,
      price: t.services.consultation,
      color: "from-teal-50 to-cyan-50",
      iconBg: "bg-teal-100 text-teal-700",
      href: "/general-dentistry/preventative",
    },
    {
      icon: Zap,
      title: t.services.bodyContouring,
      desc: t.services.bodyContouringDesc,
      price: "Call Now",
      color: "from-rose-50 to-pink-50",
      iconBg: "bg-rose-100 text-rose-700",
      href: "/general-dentistry/emergency",
    },
    {
      icon: ShieldCheck,
      title: t.services.penileAndBBL,
      desc: t.services.penileAndBBLDesc,
      price: t.services.consultation,
      color: "from-slate-50 to-stone-50",
      iconBg: "bg-slate-100 text-slate-700",
      href: "/general-dentistry/preventative",
    },
  ];
  return (
    <section id="services" className="relative py-24 sm:py-32 bg-white noise-overlay">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 mb-6">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-sm text-gold font-medium tracking-wide">
              {t.services.badge}
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4">
            {t.services.title}
            <br />
            <span className="text-gold">{t.services.titleHighlight}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t.services.subtitle}
          </p>
        </FadeIn>

        <StaggerChildren
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerDelay={0.08}
        >
          {services.map((service, idx) => (
            <StaggerItem key={service.title} className={idx === services.length - 1 ? "sm:col-span-2 lg:col-span-1 lg:last:col-start-2" : ""}>
              <div className="group relative h-full rounded-2xl border border-border/50 bg-white overflow-hidden hover:border-gold/40 hover:shadow-lg hover:shadow-gold/5 transition-all duration-500">
                {/* Gradient header */}
                <div
                  className={`h-20 bg-gradient-to-br ${service.color} flex items-center px-6`}
                >
                  <div
                    className={`p-2.5 rounded-xl ${service.iconBg} transition-transform duration-300 group-hover:scale-110`}
                  >
                    <service.icon className="w-5 h-5" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-heading text-xl font-semibold text-navy mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {service.desc}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <span className="text-xs font-semibold text-gold uppercase tracking-wider">
                      {service.price}
                    </span>
                    <Link
                      href={service.href}
                      className="flex items-center gap-1.5 text-sm font-medium text-navy/60 hover:text-gold transition-colors group/link"
                    >
                      {t.services.learnMore}
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <FadeIn delay={0.4} className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            {t.services.notSure}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white px-8 py-3.5 rounded-full text-sm font-medium transition-all duration-300 hover:shadow-lg"
          >
            <Calendar className="w-4 h-4" />
            {t.services.scheduleConsultation}
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
