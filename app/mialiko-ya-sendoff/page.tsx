import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/seo-landing-page";

const pageKeywords = [
  "mialiko ya sendoff",
  "kadi za sendoff",
  "kadi za mualiko wa sendoff",
  "mialiko ya kitchen party na sendoff",
  "sendoff invitation tanzania",
  "sendoff e-card",
  "kadi za send-off dar es salaam",
  "mialiko ya sherehe ya sendoff",
  "mialiko ya kisasa sendoff",
  "kadi za sendoff whatsapp",
];

const pageFaqs = [
  {
    question: "Mialiko ya send-off inafaa kwa matukio gani?",
    answer: "Inafaa kwa send-off, kitchen party na sherehe zinazohitaji mwaliko wa kifahari na unaotumwa kwa urahisi.",
  },
  {
    question: "Naweza kubadilisha maandishi ya kadi ya send-off?",
    answer: "Ndiyo, tunarekebisha majina, tarehe, ukumbi, ratiba na ujumbe maalum wa familia yako.",
  },
  {
    question: "Je, mnaweza kusaidia ufuatiliaji wa wageni?",
    answer: "Ndiyo, tuna huduma za RSVP na ufuatiliaji wa wageni ili ujue walioona na wanaothibitisha kuhudhuria.",
  },
];

export const metadata: Metadata = {
  title: "Mialiko ya Send-off | Golden eCards Tanzania",
  description:
    "Tengeneza mialiko ya send-off ya kuvutia kwa njia ya kidigitali. Kadi za sendoff za kisasa, za haraka, na rahisi kutuma kwa wageni wote.",
  keywords: pageKeywords,
  alternates: {
    canonical: "/mialiko-ya-sendoff",
  },
};

export default function MialikoYaSendoffPage() {
  return (
    <SeoLandingPage
      title="Mialiko ya Send-off Tanzania"
      subtitle="Kadi za sendoff zenye ubunifu na utoaji wa haraka"
      intro="Kuanzia muonekano wa kadi hadi ujumbe wa mwisho kwa wageni, tunakupa mialiko ya send-off inayofaa tamaduni na mtindo wa tukio lako."
      keywords={pageKeywords}
      faqs={pageFaqs}
    />
  );
}
