import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/seo-landing-page";

const pageKeywords = [
  "kadi za kitchen party",
  "mialiko ya kitchen party",
  "kitchen party invitation tanzania",
  "kadi za kitchen party whatsapp",
  "mialiko ya kitchen party dar es salaam",
  "e-card kitchen party",
  "mialiko ya kisasa kitchen party",
  "kadi za sherehe kitchen party",
  "kadi za mualiko kitchen party",
  "kitchen party card design",
];

const pageFaqs = [
  {
    question: "Kadi za kitchen party zinapatikana kwa muda gani?",
    answer: "Baada ya kupokea taarifa zako, mara nyingi tunatoa draft ya kwanza ndani ya siku moja.",
  },
  {
    question: "Ninaweza kuweka picha yangu kwenye kadi?",
    answer: "Ndiyo, unaweza kutuma picha na maandishi yako na tutavipanga kwa muonekano wa kitaalamu.",
  },
  {
    question: "Mnatuma kadi za kitchen party kwa wageni moja kwa moja?",
    answer: "Ndiyo, tunaweza kusaidia usambazaji wa kadi kwa WhatsApp na SMS kulingana na list ya wageni.",
  },
];

export const metadata: Metadata = {
  title: "Kadi za Kitchen Party | Golden eCards",
  description:
    "Pata kadi za kitchen party za kisasa na zenye mvuto. Mialiko ya kidigitali inayotumwa haraka kwa WhatsApp na SMS popote Tanzania.",
  keywords: pageKeywords,
  alternates: {
    canonical: "/kadi-za-kitchen-party",
  },
};

export default function KadiZaKitchenPartyPage() {
  return (
    <SeoLandingPage
      title="Kadi za Kitchen Party Tanzania"
      subtitle="Mialiko maridadi kwa kitchen party yako"
      intro="Golden eCards hukusaidia kutengeneza mialiko ya kitchen party inayoonekana vizuri, inafika kwa muda, na inaongeza hadhi ya sherehe yako."
      keywords={pageKeywords}
      faqs={pageFaqs}
    />
  );
}
