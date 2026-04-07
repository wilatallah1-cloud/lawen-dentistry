"use client";

import { FadeIn, ScaleIn } from "@/components/motion";
import { useLocale } from "@/lib/locale";
import { getTranslations } from "@/lib/translations";

export function DoctorSection() {
  const locale = useLocale();
  const t = getTranslations(locale);
  return (
    <section className="relative py-20 sm:py-28 bg-cream overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <ScaleIn>
          <div className="relative rounded-2xl overflow-hidden bg-navy-dark shadow-2xl">
            <div className="grid md:grid-cols-2 items-end">
              {/* Image */}
              <div className="relative h-[400px] md:h-[520px]">
                <div
                  className="absolute inset-0 bg-cover bg-top"
                  style={{
                    backgroundImage:
                      "url('/dr-lawen.webp')",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-navy-dark/80 hidden md:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-transparent to-transparent md:hidden" />
              </div>

              {/* Info overlay */}
              <div className="relative p-8 md:p-12 md:-ml-16">
                <FadeIn delay={0.2}>
                  <div className="mb-6">
                    <div className="w-12 h-px bg-gold mb-6" />
                    <h3 className="font-heading text-3xl sm:text-4xl font-semibold text-white mb-2">
                      {t.doctor.name}
                    </h3>
                    <p className="text-gold text-lg font-light tracking-wide">
                      {t.doctor.role}
                    </p>
                  </div>
                  <p className="text-white/60 leading-relaxed text-sm mb-6">
                    {t.doctor.bio}
                  </p>
                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <div className="font-heading text-2xl font-bold text-gold">
                        2
                      </div>
                      <div className="text-white/40 text-xs uppercase tracking-wider">
                        {t.doctor.years}
                      </div>
                    </div>
                    <div className="w-px h-10 bg-white/10" />
                    <div className="text-center">
                      <div className="font-heading text-2xl font-bold text-gold">
                        15+
                      </div>
                      <div className="text-white/40 text-xs uppercase tracking-wider">
                        {t.doctor.patients}
                      </div>
                    </div>
                    <div className="w-px h-10 bg-white/10" />
                    <div className="text-center">
                      <div className="font-heading text-2xl font-bold text-gold">
                        Since 2006
                      </div>
                      <div className="text-white/40 text-xs uppercase tracking-wider">
                        {t.doctor.certifications}
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </ScaleIn>
      </div>
    </section>
  );
}
