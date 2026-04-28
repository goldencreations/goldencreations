import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/seo-landing-page";

const pageKeywords = [
  "kadi za mialiko",
  "mialiko ya kidigitali",
  "kadi za mialiko tanzania",
  "kadi za harusi",
  "kadi za sherehe",
  "kadi za kisasa",
  "mwaliko wa mtandaoni",
  "e-card tanzania",
  "kadi za whatsapp",
  "kadi za mialiko dar es salaam",
];

const pageFaqs = [
  {
    question: "Kadi za mialiko hutengenezwa kwa muda gani?",
    answer: "Mara nyingi tunatengeneza muundo wa awali ndani ya masaa 24 kulingana na maelezo ya tukio lako.",
  },
  {
    question: "Naweza kutuma mialiko kupitia WhatsApp na SMS?",
    answer: "Ndiyo, mialiko yetu ya kidigitali inaweza kusambazwa kwa WhatsApp na SMS kwa urahisi kwa wageni wote.",
  },
  {
    question: "Je, mnatengeneza kadi za matukio tofauti?",
    answer: "Ndiyo, tunatengeneza kadi za harusi, send-off, kitchen party, birthday na matukio ya kikazi.",
  },
];

export const metadata: Metadata = {
  title: "Kadi za Mialiko Tanzania | Golden eCards",
  description:
    "Pata kadi za mialiko za kisasa Tanzania. Tunatengeneza mialiko ya kidigitali ya harusi, send-off, kitchen party, siku ya kuzaliwa na matukio ya kikazi.",
  keywords: pageKeywords,
  alternates: {
    canonical: "/kadi-za-mialiko",
  },
};

export default function KadiZaMialikoPage() {
  return (
    <SeoLandingPage
      title="Kadi za Mialiko za Kisasa Tanzania"
      subtitle="Mialiko ya kidigitali inayovutia na kufika haraka"
      intro="Golden eCards inakusaidia kupata kadi za mialiko za kidigitali zenye muonekano wa kifahari, zinazotumwa kwa WhatsApp na SMS, pamoja na ufuatiliaji wa wageni kwa urahisi."
      keywords={pageKeywords}
      faqs={pageFaqs}
    />
  );
}
