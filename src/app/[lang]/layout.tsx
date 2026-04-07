import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { notFound } from "next/navigation";
import { LocaleProvider, type Locale } from "@/lib/locale";
import { ChatWidget } from "@/components/chat-widget";
import "../globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Lawen Dentistry | Comprehensive Dental Care in Halifax, NS",
  description:
    "Lawen Dentistry provides comprehensive dental care including Invisalign, cosmetic dentistry, implants, and emergency care across two Halifax locations. Diamond+ Invisalign Provider.",
  keywords: [
    "dentist halifax",
    "invisalign halifax",
    "cosmetic dentistry",
    "dental implants",
    "Lawen Dentistry",
    "Dr. Daniel Lawen",
    "emergency dentist halifax",
  ],
  openGraph: {
    title: "Lawen Dentistry | Excellence in Dentistry | Halifax, NS",
    description:
      "Comprehensive dental care delivered with warmth and precision. Two convenient Halifax locations. Diamond+ Invisalign Provider.",
    type: "website",
    locale: "en_CA",
  },
};

const validLocales: Locale[] = ["en", "fr"];

export async function generateStaticParams() {
  return validLocales.map((lang) => ({ lang }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!validLocales.includes(lang as Locale)) {
    notFound();
  }

  const locale = lang as Locale;

  return (
    <html
      lang={locale}
      className={`${cormorant.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <LocaleProvider locale={locale}>
          {children}
          <ChatWidget />
        </LocaleProvider>
      </body>
    </html>
  );
}
