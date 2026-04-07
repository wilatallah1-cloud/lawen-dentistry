"use client";

import { FadeIn, StaggerChildren, StaggerItem } from "@/components/motion";
import { Heart, CheckCircle, Users, Award, Shield, Scan } from "lucide-react";
import { useLocale } from "@/lib/locale";
import { getTranslations } from "@/lib/translations";

export function AboutSection() {
  const locale = useLocale();
  const t = getTranslations(locale);

  const values = [
    {
      icon: CheckCircle,
      title: t.about.patientCentered,
      desc: t.about.patientCenteredDesc,
    },
    {
      icon: Award,
      title: t.about.compassionate,
      desc: t.about.compassionateDesc,
    },
    {
      icon: Users,
      title: t.about.allAges,
      desc: t.about.allAgesDesc,
    },
    {
      icon: Scan,
      title: t.about.excellence,
      desc: t.about.excellenceDesc,
    },
    {
      icon: Shield,
      title: "Insurance Accepted",
      desc: "We submit claims on your behalf for speedy reimbursement. Most major dental plans accepted.",
      wide: true,
    },
  ];
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 mb-8">
            <Heart className="w-4 h-4 text-gold" />
            <span className="text-sm text-gold font-medium tracking-wide">
              {t.about.badge}
            </span>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <FadeIn delay={0.1}>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-navy leading-tight mb-6">
                {t.about.title}{" "}
                <span className="text-gold">{t.about.titleHighlight}</span> {t.about.titleEnd}
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {t.about.p1}
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {t.about.p2}
              </p>
            </FadeIn>

            {/* Languages & New Patients badge */}
            <FadeIn delay={0.35}>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-sm font-medium text-navy">
                  <Users className="w-3.5 h-3.5 text-gold" />
                  New Patients Welcome
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-navy/5 border border-navy/10 text-sm font-medium text-navy">
                  English, French & Arabic
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-navy/5 border border-navy/10 text-sm font-medium text-navy">
                  <Shield className="w-3.5 h-3.5 text-gold" />
                  Most Insurance Plans Accepted
                </span>
              </div>
            </FadeIn>
          </div>

          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 gap-4" staggerDelay={0.08}>
            {values.map((v) => (
              <StaggerItem
                key={v.title}
                className={v.wide ? "sm:col-span-2" : ""}
              >
                <div className="flex items-start gap-4 p-5 rounded-xl bg-white border border-border/50 hover:border-gold/30 hover:shadow-sm transition-all duration-300 group">
                  <div className="mt-0.5 p-2 rounded-lg bg-gold/10 text-gold group-hover:bg-gold group-hover:text-navy transition-colors duration-300">
                    <v.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy text-sm mb-1">
                      {v.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </div>
    </section>
  );
}
