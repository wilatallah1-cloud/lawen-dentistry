import type { Metadata } from "next";
import { ContactContent } from "./content";

export const metadata: Metadata = {
  title: "Contact | Lawen Dentistry - Halifax, NS",
  description:
    "Contact Lawen Dentistry in Halifax. Schedule appointments, ask questions, or visit us at 275-5991 Spring Garden Road, Halifax, NS B3H 1Y6.",
};

export default function Contact() {
  return <ContactContent />;
}
