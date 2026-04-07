"use client";

import { Navbar } from "@/components/navbar";
import { FooterSection } from "@/components/sections/footer";
import { FadeIn } from "@/components/motion";
import { Calendar, Phone } from "lucide-react";
import Link from "@/components/locale-link";
import { useLocale } from "@/lib/locale";
import { getTranslations } from "@/lib/translations";

interface PriceItem {
  name: string;
  price: string;
  promo?: string;
}

interface PriceCategory {
  title: string;
  items: PriceItem[];
}

const pricingContent = {
  en: {
    badge: "Transparent pricing",
    heroTitle: "Our",
    heroHighlight: "Prices",
    heroDesc:
      "Clear and transparent pricing for all our dental services. Contact us for a personalized quote.",
    generalHeading: "General & Preventive Dentistry",
    cosmeticHeading: "Cosmetic & Specialty Dentistry",
    ctaTitle: "Questions About Our",
    ctaHighlight: "Rates?",
    ctaDesc:
      "Contact us for a personalized consultation and a quote tailored to your dental needs.",
    ctaContact: "Contact Us",
    ctaCall: "Call (902) 424-1888",
  },
  fr: {
    badge: "Tarification transparente",
    heroTitle: "Nos",
    heroHighlight: "tarifs",
    heroDesc:
      "Tarification claire et transparente pour tous nos services dentaires. Contactez-nous pour un devis personnalis\u00E9.",
    generalHeading: "Dentisterie g\u00E9n\u00E9rale et pr\u00E9ventive",
    cosmeticHeading: "Dentisterie cosm\u00E9tique et sp\u00E9cialis\u00E9e",
    ctaTitle: "Des questions sur nos",
    ctaHighlight: "tarifs\u00A0?",
    ctaDesc:
      "Contactez-nous pour une consultation personnalis\u00E9e et un devis adapt\u00E9 \u00E0 vos besoins dentaires.",
    ctaContact: "Contactez-nous",
    ctaCall: "Appeler (902) 424-1888",
  },
};

function getGeneralCategories(locale: "en" | "fr"): PriceCategory[] {
  if (locale === "fr") {
    return [
      {
        title: "Examens et nettoyages",
        items: [
          { name: "Examen dentaire complet (nouveau patient)", price: "Appelez pour tarif" },
          { name: "Examen de rappel", price: "Appelez pour tarif" },
          { name: "Nettoyage dentaire (adulte)", price: "Appelez pour tarif" },
          { name: "Nettoyage dentaire (enfant)", price: "Appelez pour tarif" },
          { name: "Nettoyage en profondeur (d\u00E9tartrage)", price: "Appelez pour tarif" },
        ],
      },
      {
        title: "Radiographies et imagerie",
        items: [
          { name: "Radiographies de routine", price: "Appelez pour tarif" },
          { name: "Radiographie panoramique", price: "Appelez pour tarif" },
          { name: "Scan num\u00E9rique iTero", price: "Appelez pour tarif" },
        ],
      },
      {
        title: "Soins pr\u00E9ventifs",
        items: [
          { name: "Traitement au fluorure", price: "Appelez pour tarif" },
          { name: "Scellants dentaires (par dent)", price: "Appelez pour tarif" },
          { name: "Prot\u00E8ge-dents sur mesure", price: "Appelez pour tarif" },
          { name: "Appareil pour bruxisme", price: "Appelez pour tarif" },
        ],
      },
      {
        title: "Restaurations",
        items: [
          { name: "Obturation composite (blanche)", price: "Appelez pour tarif" },
          { name: "Couronne dentaire", price: "Appelez pour tarif" },
          { name: "Pont dentaire", price: "Appelez pour tarif" },
          { name: "Inlay / Onlay", price: "Appelez pour tarif" },
        ],
      },
      {
        title: "Soins d\u2019urgence",
        items: [
          { name: "Examen d\u2019urgence", price: "Appelez pour tarif" },
          { name: "R\u00E9paration de dent cass\u00E9e", price: "Appelez pour tarif" },
          { name: "Traitement de douleur dentaire", price: "Appelez pour tarif" },
        ],
      },
    ];
  }
  return [
    {
      title: "Exams & Cleanings",
      items: [
        { name: "Comprehensive dental exam (new patient)", price: "Call for pricing" },
        { name: "Recall exam", price: "Call for pricing" },
        { name: "Dental cleaning (adult)", price: "Call for pricing" },
        { name: "Dental cleaning (child)", price: "Call for pricing" },
        { name: "Deep cleaning (scaling & root planing)", price: "Call for pricing" },
      ],
    },
    {
      title: "X-Rays & Imaging",
      items: [
        { name: "Routine x-rays", price: "Call for pricing" },
        { name: "Panoramic x-ray", price: "Call for pricing" },
        { name: "iTero digital scan", price: "Call for pricing" },
      ],
    },
    {
      title: "Preventive Care",
      items: [
        { name: "Fluoride treatment", price: "Call for pricing" },
        { name: "Dental sealants (per tooth)", price: "Call for pricing" },
        { name: "Custom mouth guard", price: "Call for pricing" },
        { name: "Night guard (bruxism)", price: "Call for pricing" },
      ],
    },
    {
      title: "Restorations",
      items: [
        { name: "Composite (white) filling", price: "Call for pricing" },
        { name: "Dental crown", price: "Call for pricing" },
        { name: "Dental bridge", price: "Call for pricing" },
        { name: "Inlay / Onlay", price: "Call for pricing" },
      ],
    },
    {
      title: "Emergency Care",
      items: [
        { name: "Emergency exam", price: "Call for pricing" },
        { name: "Broken tooth repair", price: "Call for pricing" },
        { name: "Toothache treatment", price: "Call for pricing" },
      ],
    },
  ];
}

function getCosmeticCategories(locale: "en" | "fr"): PriceCategory[] {
  if (locale === "fr") {
    return [
      {
        title: "Invisalign",
        items: [
          { name: "Consultation Invisalign", price: "Gratuit" },
          { name: "Invisalign Comprehensive", price: "Appelez pour tarif" },
          { name: "Invisalign Lite", price: "Appelez pour tarif" },
          { name: "Invisalign Express", price: "Appelez pour tarif" },
          { name: "Invisalign Teen", price: "Appelez pour tarif" },
        ],
      },
      {
        title: "Blanchiment des dents",
        items: [
          { name: "Blanchiment en cabinet", price: "Appelez pour tarif" },
          { name: "Kit de blanchiment \u00E0 domicile", price: "Appelez pour tarif" },
          { name: "Retouche de blanchiment", price: "Appelez pour tarif" },
        ],
      },
      {
        title: "Dentisterie cosm\u00E9tique",
        items: [
          { name: "Facettes en porcelaine (par dent)", price: "Appelez pour tarif" },
          { name: "Collage dentaire", price: "Appelez pour tarif" },
          { name: "Remodelage des gencives", price: "Appelez pour tarif" },
          { name: "Transformation compl\u00E8te du sourire", price: "Appelez pour tarif" },
        ],
      },
      {
        title: "Implants dentaires",
        items: [
          { name: "Consultation implant", price: "Appelez pour tarif" },
          { name: "Implant dentaire (unitaire)", price: "Appelez pour tarif" },
          { name: "Couronne sur implant", price: "Appelez pour tarif" },
          { name: "Implants All-on-4", price: "Appelez pour tarif" },
        ],
      },
      {
        title: "Parodontie",
        items: [
          { name: "Traitement de maladie des gencives", price: "Appelez pour tarif" },
          { name: "Greffe de gencive", price: "Appelez pour tarif" },
          { name: "Entretien parodontal", price: "Appelez pour tarif" },
        ],
      },
      {
        title: "Endodontie",
        items: [
          { name: "Traitement de canal (ant\u00E9rieur)", price: "Appelez pour tarif" },
          { name: "Traitement de canal (pr\u00E9molaire)", price: "Appelez pour tarif" },
          { name: "Traitement de canal (molaire)", price: "Appelez pour tarif" },
        ],
      },
      {
        title: "Chirurgie orale",
        items: [
          { name: "Extraction simple", price: "Appelez pour tarif" },
          { name: "Extraction chirurgicale", price: "Appelez pour tarif" },
          { name: "Extraction de dents de sagesse", price: "Appelez pour tarif" },
        ],
      },
      {
        title: "S\u00E9dation",
        items: [
          { name: "S\u00E9dation au protoxyde d\u2019azote", price: "Appelez pour tarif" },
          { name: "S\u00E9dation orale", price: "Appelez pour tarif" },
        ],
      },
      {
        title: "Traitement ATM / Articulation",
        items: [
          { name: "Consultation ATM", price: "Appelez pour tarif" },
          { name: "Appareil ATM", price: "Appelez pour tarif" },
        ],
      },
    ];
  }
  return [
    {
      title: "Invisalign",
      items: [
        { name: "Invisalign consultation", price: "Free" },
        { name: "Invisalign Comprehensive", price: "Call for pricing" },
        { name: "Invisalign Lite", price: "Call for pricing" },
        { name: "Invisalign Express", price: "Call for pricing" },
        { name: "Invisalign Teen", price: "Call for pricing" },
      ],
    },
    {
      title: "Teeth Whitening",
      items: [
        { name: "In-office whitening", price: "Call for pricing" },
        { name: "Take-home whitening kit", price: "Call for pricing" },
        { name: "Whitening touch-up", price: "Call for pricing" },
      ],
    },
    {
      title: "Cosmetic Dentistry",
      items: [
        { name: "Porcelain veneers (per tooth)", price: "Call for pricing" },
        { name: "Dental bonding", price: "Call for pricing" },
        { name: "Gum contouring", price: "Call for pricing" },
        { name: "Complete smile makeover", price: "Call for pricing" },
      ],
    },
    {
      title: "Dental Implants",
      items: [
        { name: "Implant consultation", price: "Call for pricing" },
        { name: "Single dental implant", price: "Call for pricing" },
        { name: "Implant crown", price: "Call for pricing" },
        { name: "All-on-4 implants", price: "Call for pricing" },
      ],
    },
    {
      title: "Periodontics",
      items: [
        { name: "Gum disease treatment", price: "Call for pricing" },
        { name: "Gum graft", price: "Call for pricing" },
        { name: "Periodontal maintenance", price: "Call for pricing" },
      ],
    },
    {
      title: "Endodontics",
      items: [
        { name: "Root canal (anterior)", price: "Call for pricing" },
        { name: "Root canal (premolar)", price: "Call for pricing" },
        { name: "Root canal (molar)", price: "Call for pricing" },
      ],
    },
    {
      title: "Oral Surgery",
      items: [
        { name: "Simple extraction", price: "Call for pricing" },
        { name: "Surgical extraction", price: "Call for pricing" },
        { name: "Wisdom teeth removal", price: "Call for pricing" },
      ],
    },
    {
      title: "Sedation Dentistry",
      items: [
        { name: "Nitrous oxide (laughing gas)", price: "Call for pricing" },
        { name: "Oral sedation", price: "Call for pricing" },
      ],
    },
    {
      title: "TMJ / Joint Treatment",
      items: [
        { name: "TMJ consultation", price: "Call for pricing" },
        { name: "TMJ appliance", price: "Call for pricing" },
      ],
    },
  ];
}

function PriceTable({ category }: { category: PriceCategory }) {
  return (
    <div className="mb-10 last:mb-0">
      <h3 className="font-heading text-xl font-semibold text-navy mb-4">
        {category.title}
      </h3>
      <div className="bg-white rounded-xl border border-border/50 overflow-hidden">
        {category.items.map((item, i) => (
          <div
            key={i}
            className={`flex items-center justify-between px-4 sm:px-5 py-3 sm:py-3.5 min-h-[44px] ${
              i !== category.items.length - 1 ? "border-b border-border/30" : ""
            } hover:bg-cream/50 transition-colors`}
          >
            <span className="text-sm text-navy">{item.name}</span>
            <span className="text-sm font-semibold text-navy flex items-center gap-2 shrink-0 ml-4">
              {item.promo && (
                <span className="text-muted-foreground line-through text-xs">
                  {item.promo}
                </span>
              )}
              <span className={item.promo ? "text-gold" : ""}>
                {item.price}
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function PricingContent() {
  const locale = useLocale();
  const t = getTranslations(locale);
  const c = pricingContent[locale];
  const generalCategories = getGeneralCategories(locale);
  const cosmeticCategories = getCosmeticCategories(locale);

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

        {/* General & Preventive Prices */}
        <section className="py-24 bg-cream">
          <div className="max-w-4xl mx-auto px-6">
            <FadeIn className="mb-12">
              <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-navy">
                {c.generalHeading}
              </h2>
            </FadeIn>
            {generalCategories.map((cat, i) => (
              <FadeIn key={cat.title} delay={Math.min(i * 0.03, 0.3)}>
                <PriceTable category={cat} />
              </FadeIn>
            ))}
          </div>
        </section>

        {/* Cosmetic & Specialty Prices */}
        <section className="py-24 bg-white noise-overlay">
          <div className="relative z-10 max-w-4xl mx-auto px-6">
            <FadeIn className="mb-12">
              <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-navy">
                {c.cosmeticHeading}
              </h2>
            </FadeIn>
            {cosmeticCategories.map((cat, i) => (
              <FadeIn key={cat.title} delay={Math.min(i * 0.03, 0.3)}>
                <PriceTable category={cat} />
              </FadeIn>
            ))}
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
                  {c.ctaContact}
                </Link>
                <Link
                  href="tel:+19024241888"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white px-6 py-4 rounded-full text-sm transition-all duration-300 hover:bg-white/15"
                >
                  <Phone className="w-4 h-4" />
                  {c.ctaCall}
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
