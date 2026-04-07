"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Phone,
  Calendar,
  MapPin,
  ChevronDown,
  Sparkles,
  Stethoscope,
} from "lucide-react";
import Link from "@/components/locale-link";
import { usePathname } from "next/navigation";
import { useLocale } from "@/lib/locale";
import { getTranslations } from "@/lib/translations";

function DesktopDropdown({
  label,
  links,
  scrolled,
}: {
  label: string;
  links: { label: string; href: string }[];
  scrolled: boolean;
  icon?: typeof Sparkles;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-1 px-2.5 py-2 text-sm font-medium whitespace-nowrap transition-colors duration-300 hover:text-gold ${
          scrolled ? "text-navy/70" : "text-white/80"
        }`}
      >
        {label}
        <ChevronDown className={`w-3 h-3 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-xl border border-border/50 py-2 z-50"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-2.5 text-sm text-navy/70 hover:text-gold hover:bg-cream transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileAccordion({
  label,
  links,
  onNavigate,
}: {
  label: string;
  links: { label: string; href: string }[];
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/5">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full py-3 text-xl font-heading text-white/80 hover:text-gold transition-colors"
      >
        {label}
        <ChevronDown className={`w-5 h-5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pl-4 pb-3 space-y-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onNavigate}
                  className="block py-2 text-base text-white/50 hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const locale = useLocale();
  const t = getTranslations(locale);

  const cosmeticLinks = [
    { label: t.nav.allAesthetic, href: "/cosmetic-dentistry" },
    { label: t.nav.injectables, href: "/cosmetic-dentistry/whitening" },
    { label: t.nav.radiofrequency, href: "/cosmetic-dentistry/veneers" },
    { label: t.nav.lasers, href: "/cosmetic-dentistry/smile-makeovers" },
  ];

  const generalLinks = [
    { label: t.nav.allMedical, href: "/general-dentistry" },
    { label: t.nav.consultation, href: "/general-dentistry/new-patient" },
    { label: t.nav.familyMedicine, href: "/general-dentistry/preventative" },
    { label: t.nav.minorEmergency, href: "/general-dentistry/emergency" },
    { label: t.nav.mentalHealth, href: "/general-dentistry/sedation" },
    { label: t.nav.hormonotherapy, href: "/general-dentistry/tmj" },
    { label: t.nav.weightManagement, href: "/general-dentistry/periodontics" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  const pathname = usePathname();
  const basePath = pathname.replace(/^\/(en|fr)/, "") || "/";
  const otherLocale = locale === "en" ? "fr" : "en";
  const switchHref = `/${otherLocale}${basePath === "/" ? "" : basePath}`;

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(212,168,67,0.2)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-24">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <img
                src="/logo.png"
                alt="Lawen Dentistry - Halifax, NS"
                className={`h-14 md:h-24 lg:h-28 w-auto transition-all duration-300 ${
                  scrolled ? "" : "brightness-0 invert"
                }`}
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden xl:flex items-center gap-0">
              {[
                { label: t.nav.home, href: "/" },
                { label: t.nav.about, href: "/about" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-2.5 py-2 text-sm font-medium whitespace-nowrap transition-colors duration-300 hover:text-gold ${
                    scrolled ? "text-navy/70" : "text-white/80"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <DesktopDropdown
                label={t.nav.aesthetic}
                links={cosmeticLinks}
                scrolled={scrolled}
              />
              <DesktopDropdown
                label={t.nav.services}
                links={generalLinks}
                scrolled={scrolled}
              />
              {[
                { label: t.nav.pricing, href: "/pricing" },
                { label: t.nav.promotions, href: "/promotions" },
                { label: t.nav.faq, href: "/faq" },
                { label: t.nav.contact, href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-2.5 py-2 text-sm font-medium whitespace-nowrap transition-colors duration-300 hover:text-gold ${
                    scrolled ? "text-navy/70" : "text-white/80"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden xl:flex items-center gap-3">
              <a
                href={switchHref}
                className={`px-2.5 py-1.5 rounded-full border text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  scrolled
                    ? "border-navy/20 text-navy hover:bg-gold hover:border-gold hover:text-navy"
                    : "border-white/30 text-white hover:bg-gold hover:border-gold hover:text-navy"
                }`}
              >
                {otherLocale === "fr" ? "FR" : "EN"}
              </a>
              <Link
                href="tel:+19024241888"
                className={`flex items-center gap-1.5 text-sm transition-colors duration-300 ${
                  scrolled ? "text-navy" : "text-white"
                }`}
              >
                <Phone className="w-3.5 h-3.5" />
                <span className="hidden 2xl:inline">(902) 424-1888</span>
              </Link>
              <Link
                href="/contact"
                className="flex items-center gap-1.5 bg-gold hover:bg-gold-light text-navy px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-gold/20"
              >
                <Calendar className="w-3.5 h-3.5" />
                {t.nav.bookNow}
              </Link>
            </div>

            {/* Mobile: Lang + Menu Toggle */}
            <div className="xl:hidden flex items-center gap-2">
              <a
                href={switchHref}
                className={`px-2.5 py-1.5 rounded-full border text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  scrolled
                    ? "border-navy/20 text-navy hover:bg-gold hover:border-gold"
                    : "border-white/30 text-white hover:bg-gold hover:border-gold hover:text-navy"
                }`}
              >
                {otherLocale === "fr" ? "FR" : "EN"}
              </a>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`p-2 transition-colors ${
                  scrolled ? "text-navy" : "text-white"
                }`}
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-navy pt-16 md:pt-24 px-6 overflow-y-auto xl:hidden pb-32"
          >
            <nav className="flex flex-col">
              <Link href="/" onClick={closeMobile} className="block py-3 text-xl font-heading text-white/80 hover:text-gold transition-colors border-b border-white/5">
                {t.nav.home}
              </Link>
              <Link href="/about" onClick={closeMobile} className="block py-3 text-xl font-heading text-white/80 hover:text-gold transition-colors border-b border-white/5">
                {t.nav.about}
              </Link>
              <MobileAccordion label={t.nav.medicalAesthetic} links={cosmeticLinks} onNavigate={closeMobile} />
              <MobileAccordion label={t.nav.medicalServices} links={generalLinks} onNavigate={closeMobile} />
              <Link href="/pricing" onClick={closeMobile} className="block py-3 text-xl font-heading text-white/80 hover:text-gold transition-colors border-b border-white/5">
                {t.nav.pricing}
              </Link>
              <Link href="/promotions" onClick={closeMobile} className="block py-3 text-xl font-heading text-white/80 hover:text-gold transition-colors border-b border-white/5">
                {t.nav.promotions}
              </Link>
              <Link href="/faq" onClick={closeMobile} className="block py-3 text-xl font-heading text-white/80 hover:text-gold transition-colors border-b border-white/5">
                {t.nav.faq}
              </Link>
              <Link href="/contact" onClick={closeMobile} className="block py-3 text-xl font-heading text-white/80 hover:text-gold transition-colors border-b border-white/5">
                {t.nav.contact}
              </Link>
            </nav>
            <div className="mt-8 flex flex-col gap-3">
              <Link
                href="tel:+19024241888"
                className="flex items-center justify-center gap-2 bg-white/10 text-white py-3 rounded-xl text-base"
              >
                <Phone className="w-5 h-5" />
                (902) 424-1888
              </Link>
              <Link
                href="/contact"
                onClick={closeMobile}
                className="flex items-center justify-center gap-2 bg-gold text-navy py-3 rounded-xl text-base font-semibold"
              >
                <Calendar className="w-5 h-5" />
                {t.nav.bookNow}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 xl:hidden bg-navy/95 backdrop-blur-md border-t border-white/10">
        <div className="grid grid-cols-3 divide-x divide-white/10">
          <Link
            href="tel:+19024241888"
            className="flex flex-col items-center gap-1 py-3 text-white/80 hover:text-gold transition-colors"
          >
            <Phone className="w-5 h-5" />
            <span className="text-xs">{t.nav.call}</span>
          </Link>
          <Link
            href="/contact"
            className="flex flex-col items-center gap-1 py-3 text-gold"
          >
            <Calendar className="w-5 h-5" />
            <span className="text-xs font-semibold">{t.nav.book}</span>
          </Link>
          <Link
            href="https://maps.google.com/?q=5991+Spring+Garden+Road+Halifax+NS"
            target="_blank"
            className="flex flex-col items-center gap-1 py-3 text-white/80 hover:text-gold transition-colors"
          >
            <MapPin className="w-5 h-5" />
            <span className="text-xs">{t.nav.location}</span>
          </Link>
        </div>
      </div>
    </>
  );
}
