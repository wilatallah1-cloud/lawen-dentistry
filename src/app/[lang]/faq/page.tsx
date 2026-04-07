import type { Metadata } from "next";
import { FaqContent } from "./content";

export const metadata: Metadata = {
  title: "FAQ | Lawen Dentistry - Halifax, NS",
  description:
    "Find answers to common questions about our dental services, treatments, and what to expect at Lawen Dentistry in Halifax, Nova Scotia.",
};

export default function Faq() {
  return <FaqContent />;
}
