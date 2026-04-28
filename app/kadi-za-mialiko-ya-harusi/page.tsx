import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/seo-landing-page";

const pageKeywords = [
  "kadi za mialiko ya harusi",
  "mialiko ya harusi",
  "kadi za harusi tanzania",
  "kadi za harusi dar es salaam",
  "mialiko ya ndoa",
  "mialiko ya harusi whatsapp",
  "e-card ya harusi",
  "kadi ya save the date",
  "kadi za send-off na harusi",
  "mialiko ya harusi ya kisasa",
];

const pageFaqs = [
  {
    question: "Mnatengeneza kadi za mialiko ya harusi kwa mtindo gani?",
    answer: "Tunatengeneza mitindo mbalimbali ya kisasa na ya kifahari kulingana na rangi, theme na mapendeleo ya wanandoa.",
  },
  {
    question: "Je, mnaweza kujumuisha save the date?",
    answer: "Ndiyo, tunaweza kuandaa save the date na mialiko kamili ya harusi ndani ya kifurushi kimoja.",
  },
  {
    question: "Mialiko ya harusi inaweza kufika kwa wageni wote haraka?",
    answer: "Ndiyo, usambazaji wa WhatsApp na SMS huruhusu mialiko kufika haraka kwa wageni wengi kwa muda mfupi.",
  },
];

export const metadata: Metadata = {
  title: "Kadi za Mialiko ya Harusi | Golden eCards",
  description:
    "Pata kadi za mialiko ya harusi za kipekee Tanzania. Kuanzia save the date hadi mialiko kamili ya harusi, tunatengeneza kwa ubora na utoaji wa haraka.",
  keywords: pageKeywords,
  alternates: {
    canonical: "/kadi-za-mialiko-ya-harusi",
  },
};

export default function KadiZaMialikoYaHarusiPage() {
  return (
    <SeoLandingPage
      title="Kadi za Mialiko ya Harusi Tanzania"
      subtitle="Mialiko ya ndoa yenye mguso wa kifahari"
      intro="Kwa wanandoa wanaotaka muonekano wa kisasa, Golden eCards huandaa kadi za mialiko ya harusi zinazovutia, zinazotumwa kwa urahisi, na zinazosaidia kupanga wageni kwa usahihi."
      keywords={pageKeywords}
      faqs={pageFaqs}
    />
  );
}
