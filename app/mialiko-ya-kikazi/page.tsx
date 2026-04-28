import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/seo-landing-page";

const pageKeywords = [
  "mialiko ya kikazi",
  "mialiko ya kampuni",
  "mialiko ya conference",
  "mialiko ya semina",
  "corporate invitation tanzania",
  "kadi za tukio la kikazi",
  "mialiko ya uzinduzi wa biashara",
  "mialiko ya event ya kampuni",
  "kadi za mkutano",
  "mialiko ya biashara",
];

const pageFaqs = [
  {
    question: "Mialiko ya kikazi inafaa matukio gani?",
    answer: "Inafaa semina, mikutano, uzinduzi wa bidhaa, conference, warsha na hafla za kampuni.",
  },
  {
    question: "Mnaweza kutumia nembo na rangi za kampuni yetu?",
    answer: "Ndiyo, tunabinafsisha mialiko kwa kutumia brand colors, logo na mtindo wa mawasiliano wa kampuni yako.",
  },
  {
    question: "Je, kuna njia ya kufuatilia waliohudhuria tukio?",
    answer: "Ndiyo, tunaweza kuweka mfumo wa RSVP na QR check-in kwa ufuatiliaji sahihi wa washiriki.",
  },
];

export const metadata: Metadata = {
  title: "Mialiko ya Kikazi na Kampuni | Golden eCards",
  description:
    "Mialiko ya kikazi kwa semina, mikutano, uzinduzi, na matukio ya kampuni. Kadi za kidigitali za kitaalamu kwa biashara Tanzania.",
  keywords: pageKeywords,
  alternates: {
    canonical: "/mialiko-ya-kikazi",
  },
};

export default function MialikoYaKikaziPage() {
  return (
    <SeoLandingPage
      title="Mialiko ya Kikazi Tanzania"
      subtitle="Kadi za kampuni, semina, mikutano na conference"
      intro="Kwa matukio ya biashara yanayohitaji mwonekano wa kitaalamu, Golden eCards hutoa mialiko ya kikazi yenye ubora wa juu, urahisi wa usambazaji, na ufuatiliaji wa wageni."
      keywords={pageKeywords}
      faqs={pageFaqs}
    />
  );
}
