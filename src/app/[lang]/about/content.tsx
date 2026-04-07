"use client";

import { Navbar } from "@/components/navbar";
import { FooterSection } from "@/components/sections/footer";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/motion";
import {
  Heart,
  Shield,
  Users,
  Award,
  Calendar,
  CheckCircle,
} from "lucide-react";
import Link from "@/components/locale-link";
import { useLocale } from "@/lib/locale";
import { getTranslations } from "@/lib/translations";

const content = {
  en: {
    badge: "About Our Practice",
    heroTitle: "Excellence in",
    heroHighlight: "Dentistry",
    heroDesc:
      "Lawen Dentistry combines comprehensive general dentistry with advanced cosmetic and restorative treatments, offering personalized and compassionate care for patients of all ages at two convenient Halifax locations.",
    specialist: "Doctor of Dental Surgery (DDS)",
    bio1: "Dr. Daniel Lawen is a Doctor of Dental Surgery and the founder of Lawen Dentistry in Halifax, Nova Scotia. As a Diamond+ Invisalign Provider, he is among the top-tier clear aligner practitioners in the country, with extensive experience delivering outstanding orthodontic results.",
    bio2: "Dr. Lawen is a proud member of the American Academy of Clear Aligners and the Academy of General Dentistry. His commitment to continuing education and advanced techniques ensures patients receive the highest standard of care across all dental disciplines.",
    bio3: "From routine cleanings and preventive care to complex restorative procedures and cosmetic transformations, Dr. Lawen and his team are dedicated to creating healthy, confident smiles in a warm and welcoming environment.",
    statPatients: "Patients Treated",
    statCertified: "Diamond+ Provider",
    statRating: "Patient Rating",
    valuesTitle: "Our Values",
    valuesSubtitle:
      "Dental care designed with your comfort, health, and confidence at the heart of everything we do.",
    valuePatientCentered: "Patient-Centered",
    valuePatientCenteredDesc: "Personalized care for every family member.",
    valueCompassionate: "Compassionate",
    valueCompassionateDesc: "Understanding & supportive approach.",
    valueAllAges: "All Ages",
    valueAllAgesDesc: "From children to seniors.",
    valueExcellence: "Excellence",
    valueExcellenceDesc: "Highest dental care standards.",
    inclusiveTitle: "Inclusive Care",
    inclusiveDesc:
      "Lawen Dentistry proudly provides safe, respectful, and fully inclusive care for all members of our community.",
    certBadge: "Trusted & Certified",
    certTitle: "Recognized by Leading Dental Organizations",
    certSubtitle:
      "Dr. Lawen\u2019s commitment to excellence is validated by prestigious dental institutions and professional organizations.",
    certAACA: "Member of the American Academy of Clear Aligners.",
    certAGD: "Member of the Academy of General Dentistry.",
    certInvisalign: "Diamond+ Invisalign Provider.",
    certLabel: "Certified",
    ctaTitle: "Ready to Start Your",
    ctaHighlight: "Smile Journey?",
    ctaDesc:
      "Book your appointment today and experience personalized dental care that puts you first.",
    ctaButton: "Book Your Appointment",
  },
  fr: {
    badge: "\u00C0 propos de notre cabinet",
    heroTitle: "L\u2019excellence en",
    heroHighlight: "Dentisterie",
    heroDesc:
      "Lawen Dentistry combine la dentisterie g\u00E9n\u00E9rale compl\u00E8te et les traitements cosm\u00E9tiques et restaurateurs avanc\u00E9s, offrant des soins personnalis\u00E9s et empreints de compassion pour les patients de tous \u00E2ges \u00E0 nos deux emplacements d\u2019Halifax.",
    specialist: "Docteur en chirurgie dentaire (DDS)",
    bio1: "Le Dr Daniel Lawen est docteur en chirurgie dentaire et fondateur de Lawen Dentistry \u00E0 Halifax, Nouvelle-\u00C9cosse. En tant que fournisseur Invisalign Diamond+, il fait partie des praticiens d\u2019aligneurs transparents les plus exp\u00E9riment\u00E9s au pays.",
    bio2: "Le Dr Lawen est fier membre de l\u2019American Academy of Clear Aligners et de l\u2019Academy of General Dentistry. Son engagement envers la formation continue et les techniques avanc\u00E9es garantit aux patients les plus hautes normes de soins dans toutes les disciplines dentaires.",
    bio3: "Des nettoyages de routine et soins pr\u00E9ventifs aux proc\u00E9dures restauratrices complexes et transformations cosm\u00E9tiques, le Dr Lawen et son \u00E9quipe se consacrent \u00E0 cr\u00E9er des sourires sains et confiants dans un environnement chaleureux et accueillant.",
    statPatients: "Patients trait\u00E9s",
    statCertified: "Fournisseur Diamond+",
    statRating: "\u00C9valuation des patients",
    valuesTitle: "Nos valeurs",
    valuesSubtitle:
      "Des soins dentaires con\u00E7us avec votre confort, votre sant\u00E9 et votre confiance au c\u0153ur de tout ce que nous faisons.",
    valuePatientCentered: "Centr\u00E9 sur le patient",
    valuePatientCenteredDesc:
      "Soins personnalis\u00E9s pour chaque membre de la famille.",
    valueCompassionate: "Bienveillant",
    valueCompassionateDesc: "Approche compr\u00E9hensive et soutenante.",
    valueAllAges: "Tous les \u00E2ges",
    valueAllAgesDesc: "Des enfants aux a\u00EEn\u00E9s.",
    valueExcellence: "Excellence",
    valueExcellenceDesc: "Les plus hautes normes dentaires.",
    inclusiveTitle: "Soins inclusifs",
    inclusiveDesc:
      "Lawen Dentistry offre fi\u00E8rement des soins s\u00E9curitaires, respectueux et pleinement inclusifs pour tous les membres de notre communaut\u00E9.",
    certBadge: "Certifi\u00E9 et reconnu",
    certTitle: "Reconnu par les principales organisations dentaires",
    certSubtitle:
      "L\u2019engagement du Dr Lawen envers l\u2019excellence est valid\u00E9 par des institutions dentaires prestigieuses et des organisations professionnelles.",
    certAACA: "Membre de l\u2019American Academy of Clear Aligners.",
    certAGD: "Membre de l\u2019Academy of General Dentistry.",
    certInvisalign: "Fournisseur Invisalign Diamond+.",
    certLabel: "Certifi\u00E9",
    ctaTitle: "Pr\u00EAt \u00E0 commencer votre",
    ctaHighlight: "parcours sourire\u00A0?",
    ctaDesc:
      "R\u00E9servez votre rendez-vous d\u00E8s aujourd\u2019hui et d\u00E9couvrez des soins dentaires personnalis\u00E9s qui vous placent au premier plan.",
    ctaButton: "R\u00E9server votre rendez-vous",
  },
};

export function AboutContent() {
  const locale = useLocale();
  const t = getTranslations(locale);
  const c = content[locale];

  const values = [
    {
      icon: Heart,
      title: c.valuePatientCentered,
      desc: c.valuePatientCenteredDesc,
    },
    {
      icon: Users,
      title: c.valueCompassionate,
      desc: c.valueCompassionateDesc,
    },
    {
      icon: Shield,
      title: c.valueAllAges,
      desc: c.valueAllAgesDesc,
    },
    {
      icon: Award,
      title: c.valueExcellence,
      desc: c.valueExcellenceDesc,
    },
  ];

  const certifications = [
    {
      name: "American Academy of Clear Aligners",
      desc: c.certAACA,
    },
    {
      name: "Academy of General Dentistry",
      desc: c.certAGD,
    },
    {
      name: "Invisalign Diamond+",
      desc: c.certInvisalign,
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

        {/* About Dr. Lawen */}
        <section className="py-24 bg-cream">
          <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="relative">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-navy/10">
                  <img
                    src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop"
                    alt="Dr. Daniel Lawen, DDS"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-gold/10 rounded-2xl w-32 h-32 -z-10" />
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div>
                <p className="text-gold text-sm font-medium tracking-wider uppercase mb-3">
                  {c.specialist}
                </p>
                <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-navy mb-6">
                  Dr. Daniel Lawen, DDS
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>{c.bio1}</p>
                  <p>{c.bio2}</p>
                  <p>{c.bio3}</p>
                </div>
                <div className="flex items-center gap-6 mt-8">
                  <div className="text-center">
                    <div className="font-heading text-2xl font-bold text-gold">
                      1000+
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {c.statPatients}
                    </div>
                  </div>
                  <div className="w-px h-10 bg-border" />
                  <div className="text-center">
                    <div className="font-heading text-2xl font-bold text-gold">
                      Diamond+
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {c.statCertified}
                    </div>
                  </div>
                  <div className="w-px h-10 bg-border" />
                  <div className="text-center">
                    <div className="font-heading text-2xl font-bold text-gold">
                      5.0
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {c.statRating}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 bg-white noise-overlay">
          <div className="relative z-10 max-w-6xl mx-auto px-6">
            <FadeIn className="text-center mb-16">
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4">
                {c.valuesTitle}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {c.valuesSubtitle}
              </p>
            </FadeIn>
            <StaggerChildren
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
              staggerDelay={0.08}
            >
              {values.map((v) => (
                <StaggerItem key={v.title}>
                  <div className="group p-6 rounded-2xl bg-cream/50 border border-border/50 hover:border-gold/30 hover:shadow-md transition-all duration-500 h-full text-center">
                    <div className="p-3 rounded-xl bg-gold/10 w-fit mx-auto mb-4 group-hover:bg-gold/20 transition-colors">
                      <v.icon className="w-6 h-6 text-gold" />
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-navy mb-2">
                      {v.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>

            {/* Inclusive banner */}
            <FadeIn delay={0.2} className="mt-12">
              <div className="p-6 rounded-2xl bg-gold/5 border border-gold/20 text-center">
                <h3 className="font-heading text-xl font-semibold text-navy mb-2">
                  {c.inclusiveTitle}
                </h3>
                <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
                  {c.inclusiveDesc}
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-24 bg-cream">
          <div className="max-w-4xl mx-auto px-6">
            <FadeIn className="text-center mb-16">
              <p className="text-gold text-sm font-medium tracking-wider uppercase mb-3">
                {c.certBadge}
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4">
                {c.certTitle}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {c.certSubtitle}
              </p>
            </FadeIn>
            <StaggerChildren
              className="grid sm:grid-cols-3 gap-6"
              staggerDelay={0.08}
            >
              {certifications.map((cert) => (
                <StaggerItem key={cert.name}>
                  <div className="p-6 rounded-2xl bg-white border border-border/50 text-center hover:border-gold/30 hover:shadow-md transition-all duration-500 h-full">
                    <div className="p-3 rounded-xl bg-gold/10 w-fit mx-auto mb-4">
                      <CheckCircle className="w-6 h-6 text-gold" />
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-navy mb-2">
                      {cert.name}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {cert.desc}
                    </p>
                    <span className="inline-block mt-3 text-xs font-medium text-gold bg-gold/10 px-3 py-1 rounded-full">
                      {c.certLabel}
                    </span>
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
                {c.ctaTitle}{" "}
                <span className="text-gold">{c.ctaHighlight}</span>
              </h2>
              <p className="text-white/50 mb-8">
                {c.ctaDesc}
              </p>
              <Link
                href="/contact"
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
