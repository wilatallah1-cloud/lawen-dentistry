import type { Metadata } from "next";
import { AboutContent } from "./content";

export const metadata: Metadata = {
  title: "About | Lawen Dentistry - Halifax, NS",
  description:
    "Learn about Dr. Daniel Lawen, DDS, Diamond+ Invisalign Provider and founder of Lawen Dentistry in Halifax, Nova Scotia.",
};

export default function About() {
  return <AboutContent />;
}
