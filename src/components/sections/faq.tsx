"use client";

import { FadeIn } from "@/components/motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, Phone, ArrowRight } from "lucide-react";
import Link from "@/components/locale-link";
import { useLocale } from "@/lib/locale";
import { getTranslations } from "@/lib/translations";
import type { Locale } from "@/lib/locale";

const faqsData: Record<string, { q: string; a: string }[]> = {
  en: [
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
};

export function FAQSection() {
  const locale = useLocale();
  const t = getTranslations(locale);
  const faqs = faqsData[locale];
  return (
    <section id="faq" className="relative py-24 sm:py-32 bg-cream">
      <div className="max-w-3xl mx-auto px-6">
        <FadeIn className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 mb-6">
            <HelpCircle className="w-4 h-4 text-gold" />
            <span className="text-sm text-gold font-medium tracking-wide">
              {t.faqSection.badge}
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4">
            {t.faqSection.title} <span className="text-gold">{t.faqSection.titleHighlight}</span>
          </h2>
          <p className="text-muted-foreground">
            {t.faqSection.subtitle}
          </p>
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

        <FadeIn delay={0.3} className="mt-12">
          <div className="text-center p-8 rounded-2xl bg-white border border-border/50">
            <h3 className="font-heading text-xl font-semibold text-navy mb-2">
              {t.faqSection.stillHaveQuestions}
            </h3>
            <p className="text-muted-foreground text-sm mb-6">
              {t.faqSection.stillHaveQuestionsDesc}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="#contact"
                className="flex items-center gap-2 bg-gold hover:bg-gold-light text-navy px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300"
              >
                {t.faqSection.contactUs}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="tel:+19024241888"
                className="flex items-center gap-2 bg-navy hover:bg-navy-light text-white px-6 py-3 rounded-full text-sm font-medium transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                Call (902) 424-1888
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
