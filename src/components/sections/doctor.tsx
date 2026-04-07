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
        {/* Dr. Lawen */}
        <ScaleIn>
          <div className="relative rounded-2xl overflow-hidden bg-navy-dark shadow-2xl mb-8">
            <div className="grid md:grid-cols-2 items-end">
              {/* Image */}
              <div className="relative h-[400px] md:h-[520px]">
                <div
                  className="absolute inset-0 bg-cover bg-[center_20%]"
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
                  <p className="text-white/60 leading-relaxed text-sm mb-4">
                    {t.doctor.bio}
                  </p>
                  <p className="text-white/50 leading-relaxed text-xs mb-6">
                    Member: American Academy of Clear Aligners, Academy of General Dentistry, Canadian Dental Association, Nova Scotia Dental Association, International Congress of Oral Implantologists
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
                        Since 2006
                      </div>
                      <div className="text-white/40 text-xs uppercase tracking-wider">
                        {t.doctor.patients}
                      </div>
                    </div>
                    <div className="w-px h-10 bg-white/10" />
                    <div className="text-center">
                      <div className="font-heading text-2xl font-bold text-gold">
                        15+
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

        {/* Dr. Kottapalli */}
        <FadeIn delay={0.3}>
          <div className="relative rounded-2xl overflow-hidden bg-navy-dark/80 shadow-lg p-8 md:p-10">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0">
                <img
                  src="/dr-kottapalli.webp"
                  alt="Dr. Saud Kottapalli, DDS"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="w-10 h-px bg-gold mb-4" />
                <h3 className="font-heading text-2xl font-semibold text-white mb-1">
                  Dr. Saud Kottapalli, D.D.S.
                </h3>
                <p className="text-gold text-sm font-light tracking-wide mb-4">
                  Doctor of Dental Surgery
                </p>
                <p className="text-white/60 text-sm leading-relaxed mb-3">
                  Dr. Kottapalli studied at Dalhousie University, earning both a Bachelor of Science and Doctor of Dental Surgery. He received the International College of Dentists Award for the best combination of academic performance, personal character, and extracurricular participation.
                </p>
                <p className="text-white/50 text-xs leading-relaxed">
                  Trained in restorative, surgical, endodontic, and prosthetic dentistry. Certified Invisalign provider. Speaks English, Urdu, Hindi, and Arabic.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
