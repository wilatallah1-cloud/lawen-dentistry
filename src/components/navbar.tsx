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
import Link from "next/link";

const aestheticLinks = [
  { label: "All Aesthetic Services", href: "/medical-aesthetic" },
  { label: "Injectables & Fillers", href: "/medical-aesthetic/injectables" },
  { label: "Radiofrequency & Lifting", href: "/medical-aesthetic/radiofrequency-lifting" },
  { label: "Lasers", href: "/medical-aesthetic/lasers" },
  { label: "Lipolysis", href: "/medical-aesthetic/lipolysis" },
  { label: "Liquid Brazilian Butt Lift", href: "/medical-aesthetic/liquid-brazilian-butt-lift" },
  { label: "Hair Stimulation", href: "/medical-aesthetic/hair-stimulation" },
  { label: "Non-Surgical Blepharoplasty", href: "/medical-aesthetic/non-surgical-blepharoplasty" },
  { label: "Facial Contouring", href: "/medical-aesthetic/facial-contouring" },
];

const sexualHealthLinks = [
  { label: "Penis Fillers", href: "/sexual-health/penis-fillers" },
  { label: "Scrotox & Grotox", href: "/sexual-health/scrotox-grotox" },
  { label: "Holetox (Anal Botox)", href: "/sexual-health/holetox" },
  { label: "Penis Enhancement Benefits", href: "/sexual-health/penis-enhancement-benefits" },
  { label: "FAQ - Penile Enhancement", href: "/sexual-health/faq" },
];

const medicalLinks = [
  { label: "All Medical Services", href: "/medical-services" },
  { label: "Consultation", href: "/medical-services/consultation" },
  { label: "Family Medicine", href: "/medical-services/family-medicine" },
  { label: "Minor Emergency", href: "/medical-services/minor-emergency" },
  { label: "Mental Health", href: "/medical-services/mental-health" },
  { label: "Hormonotherapy", href: "/medical-services/hormonotherapy" },
  { label: "Weight Management", href: "/medical-services/weight-management" },
];

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
        className={`flex items-center gap-1 px-2.5 py-2 text-[13px] font-medium whitespace-nowrap transition-colors duration-300 hover:text-gold ${
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

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
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <span
                  className={`font-heading text-2xl md:text-3xl font-semibold italic tracking-wide transition-colors duration-300 ${
                    scrolled ? "text-navy" : "text-white"
                  }`}
                >
                  Dr. Laurent
                </span>
                <span
                  className={`block text-[10px] tracking-[0.2em] uppercase transition-colors duration-300 whitespace-nowrap ${
                    scrolled ? "text-gold" : "text-gold-light"
                  }`}
                >
                  Médecine Privée & Esthétique
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden xl:flex items-center gap-0">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-2.5 py-2 text-[13px] font-medium whitespace-nowrap transition-colors duration-300 hover:text-gold ${
                    scrolled ? "text-navy/70" : "text-white/80"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <DesktopDropdown
                label="Aesthetic"
                links={[...aestheticLinks, { label: "── Sexual Health ──", href: "#" }, ...sexualHealthLinks]}
                scrolled={scrolled}
              />
              <DesktopDropdown
                label="Services"
                links={medicalLinks}
                scrolled={scrolled}
              />
              {[
                { label: "Pricing", href: "/pricing" },
                { label: "Promotions", href: "/promotions" },
                { label: "FAQ", href: "/faq" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-2.5 py-2 text-[13px] font-medium whitespace-nowrap transition-colors duration-300 hover:text-gold ${
                    scrolled ? "text-navy/70" : "text-white/80"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden xl:flex items-center gap-3">
              <Link
                href="tel:+15145003422"
                className={`flex items-center gap-1.5 text-[13px] transition-colors duration-300 ${
                  scrolled ? "text-navy" : "text-white"
                }`}
              >
                <Phone className="w-3.5 h-3.5" />
                <span className="hidden 2xl:inline">(514) 500-3422</span>
              </Link>
              <Link
                href="/contact"
                className="flex items-center gap-1.5 bg-gold hover:bg-gold-light text-navy px-4 py-2 rounded-full text-[13px] font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-gold/20"
              >
                <Calendar className="w-3.5 h-3.5" />
                Book Now
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`xl:hidden p-2 transition-colors ${
                scrolled ? "text-navy" : "text-white"
              }`}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
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
            className="fixed inset-0 z-40 bg-navy pt-24 px-6 overflow-y-auto xl:hidden pb-32"
          >
            <nav className="flex flex-col">
              <Link href="/" onClick={closeMobile} className="block py-3 text-xl font-heading text-white/80 hover:text-gold transition-colors border-b border-white/5">
                Home
              </Link>
              <Link href="/about" onClick={closeMobile} className="block py-3 text-xl font-heading text-white/80 hover:text-gold transition-colors border-b border-white/5">
                About
              </Link>
              <MobileAccordion label="Medical Aesthetic" links={aestheticLinks} onNavigate={closeMobile} />
              <MobileAccordion label="Sexual Health" links={sexualHealthLinks} onNavigate={closeMobile} />
              <MobileAccordion label="Medical Services" links={medicalLinks} onNavigate={closeMobile} />
              <Link href="/pricing" onClick={closeMobile} className="block py-3 text-xl font-heading text-white/80 hover:text-gold transition-colors border-b border-white/5">
                Pricing
              </Link>
              <Link href="/promotions" onClick={closeMobile} className="block py-3 text-xl font-heading text-white/80 hover:text-gold transition-colors border-b border-white/5">
                Promotions
              </Link>
              <Link href="/faq" onClick={closeMobile} className="block py-3 text-xl font-heading text-white/80 hover:text-gold transition-colors border-b border-white/5">
                FAQ
              </Link>
              <Link href="/contact" onClick={closeMobile} className="block py-3 text-xl font-heading text-white/80 hover:text-gold transition-colors border-b border-white/5">
                Contact
              </Link>
            </nav>
            <div className="mt-8 flex flex-col gap-3">
              <Link
                href="tel:+15145003422"
                className="flex items-center justify-center gap-2 bg-white/10 text-white py-3 rounded-xl text-base"
              >
                <Phone className="w-5 h-5" />
                (514) 500-3422
              </Link>
              <Link
                href="/contact"
                onClick={closeMobile}
                className="flex items-center justify-center gap-2 bg-gold text-navy py-3 rounded-xl text-base font-semibold"
              >
                <Calendar className="w-5 h-5" />
                Book Your Appointment
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 xl:hidden bg-navy/95 backdrop-blur-md border-t border-white/10">
        <div className="grid grid-cols-3 divide-x divide-white/10">
          <Link
            href="tel:+15145003422"
            className="flex flex-col items-center gap-1 py-3 text-white/80 hover:text-gold transition-colors"
          >
            <Phone className="w-5 h-5" />
            <span className="text-xs">Call</span>
          </Link>
          <Link
            href="/contact"
            className="flex flex-col items-center gap-1 py-3 text-gold"
          >
            <Calendar className="w-5 h-5" />
            <span className="text-xs font-semibold">Book</span>
          </Link>
          <Link
            href="https://maps.google.com/?q=4072+Le+Corbusier+Laval+QC"
            target="_blank"
            className="flex flex-col items-center gap-1 py-3 text-white/80 hover:text-gold transition-colors"
          >
            <MapPin className="w-5 h-5" />
            <span className="text-xs">Location</span>
          </Link>
        </div>
      </div>
    </>
  );
}
