import type { Metadata } from "next";
import { PricingContent } from "./content";

export const metadata: Metadata = {
  title: "Pricing | Lawen Dentistry - Halifax, NS",
  description:
    "Dental service pricing at Lawen Dentistry in Halifax, Nova Scotia. Cleanings, whitening, Invisalign, implants, and more.",
};

export default function Pricing() {
  return <PricingContent />;
}
