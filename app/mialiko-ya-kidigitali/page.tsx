import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/seo-landing-page";

const pageKeywords = [
  "mialiko ya kidigitali",
  "mialiko ya kisasa",
  "ecard",
  "mialiko ya mtandaoni",
  "kadi za kidigitali",
  "mialiko ya whatsapp",
  "mialiko ya sms",
  "digital invitation tanzania",
  "mialiko online tanzania",
  "mialiko smart",
];

const pageFaqs = [
  {
    question: "Mialiko ya kidigitali ni nini?",
    answer: "Ni kadi za mualiko zinazotengenezwa na kusambazwa mtandaoni kupitia WhatsApp, SMS na viunganishi vya kidigitali.",
  },
  {
    question: "Je, mialiko ya kidigitali inapunguza gharama?",
    answer: "Ndiyo, mara nyingi inapunguza gharama za uchapishaji na usambazaji ukilinganishwa na kadi za karatasi.",
  },
  {
    question: "Ninawezaje kuanza kupata mialiko ya kidigitali?",
    answer: "Wasiliana nasi kwa WhatsApp, tuma taarifa za tukio, halafu timu yetu itaanza kazi ya muundo mara moja.",
  },
];

export const metadata: Metadata = {
  title: "Mialiko ya Kidigitali | Golden eCards Tanzania",
  description:
    "Huduma bora ya mialiko ya kidigitali Tanzania. Tengeneza na tuma mialiko kupitia WhatsApp na SMS kwa haraka, kwa ubunifu, na kwa gharama nafuu.",
  keywords: pageKeywords,
  alternates: {
    canonical: "/mialiko-ya-kidigitali",
  },
};

export default function MialikoYaKidigitaliPage() {
  return (
    <SeoLandingPage
      title="Mialiko ya Kidigitali Tanzania"
      subtitle="Badala ya karatasi, tumia mialiko ya kisasa yenye matokeo"
      intro="Tunatoa mialiko ya kidigitali kwa harusi, send-off, kitchen party, mahafali na matukio ya kikazi. Ujumbe wako unafika kwa wakati na unafuatiliwa kwa urahisi."
      keywords={pageKeywords}
      faqs={pageFaqs}
    />
  );
}
