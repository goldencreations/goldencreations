import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/seo-landing-page";

const pageKeywords = [
  "mialiko ya siku ya kuzaliwa",
  "kadi za birthday",
  "birthday invitation tanzania",
  "kadi za kuzaliwa",
  "birthday e-card",
  "kadi za mialiko ya birthday",
  "mialiko ya sherehe ya kuzaliwa",
  "kadi za birthday whatsapp",
  "mialiko ya kuzaliwa ya watoto",
  "mialiko ya kuzaliwa ya watu wazima",
];

const pageFaqs = [
  {
    question: "Mialiko ya siku ya kuzaliwa inafaa watoto na watu wazima?",
    answer: "Ndiyo, tunatengeneza miundo tofauti kulingana na umri, theme ya sherehe na aina ya wageni.",
  },
  {
    question: "Je, mialiko ya birthday inaweza kuwa na animation?",
    answer: "Ndiyo, tunaweza kuandaa mialiko ya kidigitali yenye mwonekano wa kuvutia ikiwemo motion au video fupi.",
  },
  {
    question: "Nitatumaje mialiko kwa marafiki na familia?",
    answer: "Utapokea faili au link tayari kwa kutuma kupitia WhatsApp, SMS na mitandao mingine ya kijamii.",
  },
];

export const metadata: Metadata = {
  title: "Mialiko ya Siku ya Kuzaliwa | Golden eCards",
  description:
    "Tengeneza mialiko ya siku ya kuzaliwa kwa urahisi. Kadi za birthday za kidigitali, za ubunifu, na rahisi kusambaza kwa marafiki na familia.",
  keywords: pageKeywords,
  alternates: {
    canonical: "/mialiko-ya-siku-ya-kuzaliwa",
  },
};

export default function MialikoYaSikuYaKuzaliwaPage() {
  return (
    <SeoLandingPage
      title="Mialiko ya Siku ya Kuzaliwa Tanzania"
      subtitle="Kadi za birthday zenye ubora na mvuto"
      intro="Iwe ni birthday ya mtoto au mtu mzima, Golden eCards hutengeneza mialiko ya siku ya kuzaliwa yenye muundo wa kipekee na usambazaji wa haraka."
      keywords={pageKeywords}
      faqs={pageFaqs}
    />
  );
}
