"use client";

import { Navbar } from "@/components/navbar";
import { FooterSection } from "@/components/sections/footer";
import { FadeIn } from "@/components/motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Calendar, Phone } from "lucide-react";
import Link from "@/components/locale-link";
import { useLocale } from "@/lib/locale";
import { getTranslations } from "@/lib/translations";

const faqContent = {
  en: {
    badge: "Frequently Asked Questions",
    heroTitle: "Your Questions",
    heroHighlight: "Answered",
    heroDesc:
      "Find answers to common questions about our dental services, treatments, and what to expect at Lawen Dentistry.",
    stillTitle: "Still Have Questions?",
    stillDesc:
      "We\u2019re here to help! Contact us for personalized answers to your specific questions about our dental services and treatments.",
    contactUs: "Contact Us",
    callLabel: "Call (902) 424-1888",
    ctaTitle: "Ready to Start Your",
    ctaHighlight: "Smile Journey?",
    ctaDesc:
      "Book your appointment today and experience personalized dental care that puts you first.",
    ctaButton: "Book Your Appointment",
    faqs: [
      {
        q: "What services does Lawen Dentistry offer?",
        a: "We offer over 15 specialized dental services including Invisalign, cosmetic dentistry, dental implants, teeth whitening, children's dentistry, sedation dentistry, emergency care, periodontics, endodontics, TMJ treatment, wisdom teeth removal, and more.",
      },
      {
        q: "How do I book an appointment?",
        a: "You can book by calling our Spring Garden location at (902) 424-1888, our Mumford Road location at (902) 406-1888, or by emailing info@ourdentist.ca. We're happy to find a time that works for your schedule.",
      },
      {
        q: "What are your office hours and locations?",
        a: "Both locations are open Monday through Friday, 8:00 AM to 5:00 PM. Spring Garden: 275-5991 Spring Garden Road, Halifax, NS. Mumford Road: 101-7037 Mumford Road, Halifax, NS. We are closed on weekends.",
      },
      {
        q: "What makes Dr. Lawen a Diamond+ Invisalign Provider?",
        a: "Diamond+ is one of the highest tiers in the Invisalign provider program, awarded based on the number and quality of Invisalign cases completed. This means Dr. Lawen has extensive experience delivering outstanding clear aligner results.",
      },
      {
        q: "Do you accept dental insurance?",
        a: "Yes, we work with most major dental insurance providers. Our team will help you understand your coverage and maximize your benefits. Contact us for specific insurance questions.",
      },
      {
        q: "Is sedation dentistry safe?",
        a: "Absolutely. We offer safe, effective sedation options for patients who experience dental anxiety. Dr. Lawen and the team monitor you throughout the entire procedure to ensure your comfort and safety.",
      },
      {
        q: "Do you offer emergency dental appointments?",
        a: "Yes. If you have a dental emergency such as severe pain, a broken tooth, or trauma, call us immediately at (902) 424-1888. We prioritize urgent cases and will work to see you as quickly as possible.",
      },
      {
        q: "What should I expect at my first visit?",
        a: "Your first visit includes a comprehensive examination, digital x-rays, and a discussion of your dental health goals. We take time to listen to your concerns and create a personalized treatment plan. Expect a warm, pressure-free experience.",
      },
      {
        q: "Do you see children and families?",
        a: "Yes! We welcome patients of all ages, from young children to seniors. Our team is experienced in making children feel comfortable and building positive dental habits from an early age.",
      },
      {
        q: "What technology do you use?",
        a: "We use advanced dental technology including iTero digital scanners for precise Invisalign treatment planning, 3D panoramic x-rays, and modern equipment to ensure accurate diagnoses and comfortable treatments.",
      },
    ],
  },
  fr: {
    badge: "Foire aux questions",
    heroTitle: "Vos questions",
    heroHighlight: "r\u00E9pondues",
    heroDesc:
      "Trouvez les r\u00E9ponses aux questions fr\u00E9quentes sur nos services dentaires, traitements et ce \u00E0 quoi vous attendre chez Lawen Dentistry.",
    stillTitle: "D\u2019autres questions\u00A0?",
    stillDesc:
      "Nous sommes l\u00E0 pour vous aider\u00A0! Contactez-nous pour des r\u00E9ponses personnalis\u00E9es \u00E0 vos questions sp\u00E9cifiques sur nos services et traitements dentaires.",
    contactUs: "Contactez-nous",
    callLabel: "Appeler (902) 424-1888",
    ctaTitle: "Pr\u00EAt \u00E0 commencer votre",
    ctaHighlight: "parcours sourire\u00A0?",
    ctaDesc:
      "R\u00E9servez votre rendez-vous d\u00E8s aujourd\u2019hui et d\u00E9couvrez des soins dentaires personnalis\u00E9s qui vous placent au premier plan.",
    ctaButton: "R\u00E9server votre rendez-vous",
    faqs: [
      {
        q: "Quels services offre Lawen Dentistry\u00A0?",
        a: "Nous offrons plus de 15 services dentaires sp\u00E9cialis\u00E9s, dont Invisalign, la dentisterie cosm\u00E9tique, les implants dentaires, le blanchiment, la dentisterie pour enfants, la s\u00E9dation, les soins d\u2019urgence, la parodontie, l\u2019endodontie, le traitement ATM et plus encore.",
      },
      {
        q: "Comment puis-je prendre rendez-vous\u00A0?",
        a: "Vous pouvez r\u00E9server en appelant notre emplacement Spring Garden au (902) 424-1888, notre emplacement Mumford Road au (902) 406-1888, ou en nous \u00E9crivant \u00E0 info@ourdentist.ca.",
      },
      {
        q: "Quels sont vos heures et emplacements\u00A0?",
        a: "Les deux emplacements sont ouverts du lundi au vendredi, de 8h00 \u00E0 17h00. Spring Garden : 275-5991 Spring Garden Road, Halifax, NS. Mumford Road : 101-7037 Mumford Road, Halifax, NS. Ferm\u00E9 les fins de semaine.",
      },
      {
        q: "Qu\u2019est-ce qui fait du Dr Lawen un fournisseur Invisalign Diamond+\u00A0?",
        a: "Diamond+ est l\u2019un des plus hauts niveaux du programme Invisalign, attribu\u00E9 en fonction du nombre et de la qualit\u00E9 des cas trait\u00E9s. Cela signifie que le Dr Lawen poss\u00E8de une vaste exp\u00E9rience en aligneurs transparents.",
      },
      {
        q: "Acceptez-vous les assurances dentaires\u00A0?",
        a: "Oui, nous travaillons avec la plupart des grands fournisseurs d\u2019assurance dentaire. Notre \u00E9quipe vous aidera \u00E0 comprendre votre couverture et \u00E0 maximiser vos avantages.",
      },
      {
        q: "La dentisterie sous s\u00E9dation est-elle s\u00E9curitaire\u00A0?",
        a: "Absolument. Nous offrons des options de s\u00E9dation s\u00FBres et efficaces pour les patients anxieux. Le Dr Lawen et l\u2019\u00E9quipe vous surveillent tout au long de la proc\u00E9dure pour assurer votre confort et votre s\u00E9curit\u00E9.",
      },
      {
        q: "Offrez-vous des rendez-vous dentaires d\u2019urgence\u00A0?",
        a: "Oui. Si vous avez une urgence dentaire comme une douleur intense, une dent cass\u00E9e ou un traumatisme, appelez-nous imm\u00E9diatement au (902) 424-1888. Nous priorisons les cas urgents.",
      },
      {
        q: "\u00C0 quoi dois-je m\u2019attendre lors de ma premi\u00E8re visite\u00A0?",
        a: "Votre premi\u00E8re visite comprend un examen complet, des radiographies num\u00E9riques et une discussion sur vos objectifs de sant\u00E9 dentaire. Attendez-vous \u00E0 une exp\u00E9rience chaleureuse et sans pression.",
      },
      {
        q: "Recevez-vous les enfants et les familles\u00A0?",
        a: "Oui\u00A0! Nous accueillons les patients de tous \u00E2ges, des jeunes enfants aux a\u00EEn\u00E9s. Notre \u00E9quipe est exp\u00E9riment\u00E9e pour mettre les enfants \u00E0 l\u2019aise.",
      },
      {
        q: "Quelle technologie utilisez-vous\u00A0?",
        a: "Nous utilisons une technologie dentaire avanc\u00E9e, notamment les scanners num\u00E9riques iTero pour la planification pr\u00E9cise des traitements Invisalign, les radiographies panoramiques 3D et des \u00E9quipements modernes.",
      },
    ],
  },
};

export function FaqContent() {
  const locale = useLocale();
  const t = getTranslations(locale);
  const c = faqContent[locale];

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

        {/* FAQ */}
        <section className="py-24 bg-cream">
          <div className="max-w-3xl mx-auto px-6">
            <FadeIn>
              <Accordion className="space-y-3">
                {c.faqs.map((faq, i) => (
                  <AccordionItem
                    key={i}
                    className="bg-white border border-border/50 rounded-xl px-6 data-open:border-gold/30 data-open:shadow-sm transition-all duration-300"
                  >
                    <AccordionTrigger className="text-left font-medium text-navy hover:text-gold text-sm sm:text-base py-5 hover:no-underline data-open:text-gold">
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

        {/* Still Have Questions */}
        <section className="py-20 bg-white noise-overlay">
          <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
            <FadeIn>
              <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-navy mb-4">
                {c.stillTitle}
              </h2>
              <p className="text-muted-foreground mb-8">
                {c.stillDesc}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-navy px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-gold/20"
                >
                  <Calendar className="w-5 h-5" />
                  {c.contactUs}
                </Link>
                <Link
                  href="tel:+19024241888"
                  className="inline-flex items-center justify-center gap-2 bg-navy text-white px-6 py-4 rounded-full text-sm transition-all duration-300 hover:bg-navy/90"
                >
                  <Phone className="w-4 h-4" />
                  {c.callLabel}
                </Link>
              </div>
            </FadeIn>
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
