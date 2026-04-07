import type { Metadata } from "next";
import { PromotionsContent } from "./content";

export const metadata: Metadata = {
  title: "Promotions | Lawen Dentistry - Halifax, NS",
  description:
    "Take advantage of exclusive dental promotions at Lawen Dentistry in Halifax. Quality dental care at exceptional prices.",
};

export default function Promotions() {
  return <PromotionsContent />;
}
