"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "en" | "sw";

interface Translations {
  // Navigation
  navServices: string;
  navPortfolio: string;
  navWhyUs: string;
  navPackages: string;
  navReviews: string;
  navContact: string;
  navCTA: string;
  
  // Hero
  heroBadge: string;
  heroTitle1: string;
  heroTitle2: string;
  heroSubtitle: string;
  heroCTA1: string;
  heroCTA2: string;
  heroStat1: string;
  heroStat2: string;
  heroStat3: string;
  heroStat4: string;
  
  // Services
  servicesTag: string;
  servicesTitle: string;
  servicesSubtitle: string;
  service1Title: string;
  service1Desc: string;
  service2Title: string;
  service2Desc: string;
  service3Title: string;
  service3Desc: string;
  service4Title: string;
  service4Desc: string;
  eventsTitle: string;
  eventWedding: string;
  eventBirthday: string;
  eventSendoff: string;
  eventKitchen: string;
  eventGraduation: string;
  eventBabyShower: string;
  eventCorporate: string;
  eventConference: string;
  
  // Why Us
  whyUsTag: string;
  whyUsTitle: string;
  whyUsSubtitle: string;
  traditional: string;
  goldenWay: string;
  problem1T: string;
  problem1S: string;
  problem2T: string;
  problem2S: string;
  problem3T: string;
  problem3S: string;
  problem4T: string;
  problem4S: string;
  adv1Title: string;
  adv1Desc: string;
  adv2Title: string;
  adv2Desc: string;
  adv3Title: string;
  adv3Desc: string;
  adv4Title: string;
  adv4Desc: string;
  
  // Portfolio
  portfolioTag: string;
  portfolioTitle: string;
  portfolioSubtitle: string;
  filterAll: string;
  videoShowcase: string;
  
  // Packages
  packagesTag: string;
  packagesTitle: string;
  packagesSubtitle: string;
  packageCTA: string;
  extraCard: string;
  popular: string;
  
  // Testimonials
  testimonialsTag: string;
  testimonialsTitle: string;
  testimonialsSubtitle: string;
  eventOf: string;
  trustBadge: string;
  
  // Contact
  contactTag: string;
  contactTitle: string;
  contactSubtitle: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  contactEvent: string;
  contactMessage: string;
  contactSubmit: string;
  contactWhatsApp: string;
  contactInstagram: string;
  contactOffices: string;
  
  // Footer
  footerTagline: string;
  footerQuickLinks: string;
  footerServices: string;
  footerContact: string;
  footerRights: string;
}

const translations: Record<Language, Translations> = {
  en: {
    // Navigation
    navServices: "Services",
    navPortfolio: "Our Work",
    navWhyUs: "Why Us",
    navPackages: "Packages",
    navReviews: "Reviews",
    navContact: "Contact",
    navCTA: "WhatsApp Us",
    
    // Hero
    heroBadge: "Tanzania's #1 Digital Invitation Platform",
    heroTitle1: "Planning Events Is",
    heroTitle2: "Too Stressful",
    heroSubtitle: "Guest lists, follow-ups, RSVPs, and tracking can quickly become overwhelming. Golden eCards turns that chaos into a smooth digital experience from invite to event day.",
    heroCTA1: "WhatsApp Us",
    heroCTA2: "View Samples",
    heroStat1: "Invitations Sent",
    heroStat2: "Happy Clients",
    heroStat3: "All Regions",
    heroStat4: "Rating",
    
    // Services
    servicesTag: "How We Solve It",
    servicesTitle: "What We Do",
    servicesSubtitle: "Comprehensive digital solutions for all your event needs. From design to delivery, we handle everything with precision and elegance.",
    service1Title: "Digital Invitations",
    service1Desc: "Stunning electronic cards designed to impress. Replace paper invitations with elegant digital alternatives sent via WhatsApp & SMS.",
    service2Title: "Contribution Tracking",
    service2Desc: "Track wedding and event contributions seamlessly with digital reminders and real-time updates for donors and organizers.",
    service3Title: "Event Management",
    service3Desc: "Effortlessly track guest arrivals using QR code scanning. Know exactly who attended your event in real-time.",
    service4Title: "Digital RSVPs",
    service4Desc: "Send invitations and receive instant guest responses via WhatsApp and SMS. No more guessing who will attend.",
    eventsTitle: "Every Event, Every Occasion",
    eventWedding: "Weddings",
    eventBirthday: "Birthdays",
    eventSendoff: "Send-offs",
    eventKitchen: "Kitchen Party",
    eventGraduation: "Graduations",
    eventBabyShower: "Baby Showers",
    eventCorporate: "Corporate Events",
    eventConference: "Conferences",
    
    // Why Us
    whyUsTag: "The Problem",
    whyUsTitle: "Why Choose Golden eCards?",
    whyUsSubtitle: "Traditional invitations cause delays, missed responses, and extra cost. Here is the exact difference between old methods and the Golden eCards workflow.",
    traditional: "Traditional Way",
    goldenWay: "Golden eCards Way",
    problem1T: "Paper cards take days to print",
    problem1S: "Delivered within 24 hours",
    problem2T: "Manual guest counting is inaccurate",
    problem2S: "Real-time QR tracking accuracy",
    problem3T: "Lost invitations & no RSVPs",
    problem3S: "WhatsApp delivery & instant response",
    problem4T: "High printing & distribution costs",
    problem4S: "Save up to 70% on invitations",
    adv1Title: "Lightning Fast",
    adv1Desc: "Same-day design turnaround for urgent events",
    adv2Title: "99.9% Accuracy",
    adv2Desc: "Precise tracking with zero margin for error",
    adv3Title: "50+ Team Members",
    adv3Desc: "Dedicated designers and support staff",
    adv4Title: "24/7 Support",
    adv4Desc: "Always available when you need us",
    
    // Portfolio
    portfolioTag: "Proof",
    portfolioTitle: "Samples & Videos",
    portfolioSubtitle: "See real invitation designs and watch our work in motion. This is how your event can look and feel with Golden eCards.",
    filterAll: "All",
    videoShowcase: "See Our Work in Action",
    
    // Packages
    packagesTag: "Choose Your Plan",
    packagesTitle: "Our Packages",
    packagesSubtitle: "Choose the perfect package for your event. All packages include professional design and dedicated support.",
    packageCTA: "Choose Package",
    extraCard: "Extra Card",
    popular: "Most Popular",
    
    // Testimonials
    testimonialsTag: "Real Results",
    testimonialsTitle: "What Our Clients Say",
    testimonialsSubtitle: "Don't just take our word for it. Here's what our happy clients across Tanzania have to say about their experience with Golden eCards.",
    eventOf: "Event:",
    trustBadge: "Trusted by clients across all 26 regions of Tanzania",
    
    // Contact
    contactTag: "Get in Touch",
    contactTitle: "Contact Us",
    contactSubtitle: "Ready to make your event unforgettable? Reach out to us through any of these channels.",
    contactName: "Your Name",
    contactEmail: "Email Address",
    contactPhone: "Phone Number",
    contactEvent: "Event Type",
    contactMessage: "Tell us about your event...",
    contactSubmit: "Send Message",
    contactWhatsApp: "Chat on WhatsApp",
    contactInstagram: "Follow on Instagram",
    contactOffices: "Our Offices",
    
    // Footer
    footerTagline: "Creating memorable digital experiences for your special moments across Tanzania.",
    footerQuickLinks: "Quick Links",
    footerServices: "Services",
    footerContact: "Contact",
    footerRights: "All rights reserved.",
  },
  sw: {
    // Navigation
    navServices: "Huduma",
    navPortfolio: "Kazi Zetu",
    navWhyUs: "Kwa Nini Sisi",
    navPackages: "Bei",
    navReviews: "Maoni",
    navContact: "Wasiliana",
    navCTA: "WhatsApp Sasa",
    
    // Hero
    heroBadge: "Jukwaa #1 la Mialiko ya Kidigitali Tanzania",
    heroTitle1: "Tukio Lako Linastahili",
    heroTitle2: "Mguso wa Dhahabu",
    heroSubtitle: "Badilisha wakati wako maalum na mialiko ya kidigitali ya kupendeza. Kuanzia harusi hadi matukio ya kikazi, tunaunda e-kadi nzuri zinazovutia wageni wako na kurahisisha usimamizi wa matukio kote Tanzania.",
    heroCTA1: "WhatsApp Sasa",
    heroCTA2: "Tazama Sampuli",
    heroStat1: "Mialiko Yaliyotumwa",
    heroStat2: "Wateja Wenye Furaha",
    heroStat3: "Mikoa Yote",
    heroStat4: "Ukadiriaji",
    
    // Services
    servicesTag: "Tunavyotatua",
    servicesTitle: "Huduma Zetu",
    servicesSubtitle: "Suluhisho kamili za kidigitali kwa mahitaji yote ya matukio yako. Kuanzia muundo hadi usambazaji, tunashughulikia kila kitu kwa usahihi na umaridadi.",
    service1Title: "Mialiko ya Kidigitali",
    service1Desc: "E-Cards nzuri zilizoundwa kuvutia. Badilisha kadi za karatasi na mbadala wa kidigitali unaotumwa kupitia WhatsApp na SMS.",
    service2Title: "Ufuatiliaji wa Michango",
    service2Desc: "Fuatilia michango ya harusi na matukio bila shida na vikumbusho vya kidigitali na taarifa za moja kwa moja.",
    service3Title: "Usimamizi wa Matukio",
    service3Desc: "Fuatilia wageni wanaofika kwa urahisi kwa kutumia QR code scanning. Jua hasa ni nani aliyehudhuria.",
    service4Title: "RSVP za Kidigitali",
    service4Desc: "Tuma mialiko na upate majibu ya wageni papo hapo kupitia WhatsApp na SMS.",
    eventsTitle: "Kila Tukio, Kila Sherehe",
    eventWedding: "Harusi",
    eventBirthday: "Siku ya Kuzaliwa",
    eventSendoff: "Send-off",
    eventKitchen: "Kitchen Party",
    eventGraduation: "Graduation",
    eventBabyShower: "Baby Shower",
    eventCorporate: "Matukio ya Kikazi",
    eventConference: "Mikutano",
    
    // Why Us
    whyUsTag: "Changamoto",
    whyUsTitle: "Kwa Nini Golden eCards?",
    whyUsSubtitle: "Tunasuluhisha matatizo yanayoletwa na mialiko ya jadi. Pata tofauti ya dhahabu katika kasi, usahihi, na kuaminika.",
    traditional: "Njia ya Jadi",
    goldenWay: "Njia ya Golden eCards",
    problem1T: "Kadi za karatasi zinachukua siku kuchapisha",
    problem1S: "Zinafika ndani ya masaa 24",
    problem2T: "Kuhesabu wageni kwa mkono hakuna usahihi",
    problem2S: "Ufuatiliaji wa QR kwa wakati halisi",
    problem3T: "Mialiko iliyopotea & hakuna RSVP",
    problem3S: "Usambazaji wa WhatsApp & majibu ya papo hapo",
    problem4T: "Gharama kubwa za kuchapisha & kusambaza",
    problem4S: "Okoa hadi 70% kwenye mialiko",
    adv1Title: "Haraka Sana",
    adv1Desc: "Muundo wa siku moja kwa matukio ya dharura",
    adv2Title: "Usahihi 99.9%",
    adv2Desc: "Ufuatiliaji sahihi bila makosa",
    adv3Title: "Wafanyakazi 50+",
    adv3Desc: "Wabunifu na wafanyakazi wa msaada waliojitolea",
    adv4Title: "Msaada 24/7",
    adv4Desc: "Daima tunapatikana unapotuhitaji",
    
    // Portfolio
    portfolioTag: "Uthibitisho",
    portfolioTitle: "Sampuli za Miundo",
    portfolioSubtitle: "Chunguza mkusanyiko wetu wa mialiko ya kidigitali iliyoundwa kwa uzuri. Kila muundo unabadilishwa ili kuonyesha mtindo wako wa kipekee.",
    filterAll: "Zote",
    videoShowcase: "Tazama Kazi Zetu",
    
    // Packages
    packagesTag: "Chagua Kifurushi",
    packagesTitle: "Vifurushi Vyetu",
    packagesSubtitle: "Chagua kifurushi kinachofaa kwa tukio lako. Vifurushi vyote vinajumuisha muundo wa kitaalamu na msaada.",
    packageCTA: "Chagua Kifurushi",
    extraCard: "Kadi ya Ziada",
    popular: "Maarufu Zaidi",
    
    // Testimonials
    testimonialsTag: "Matokeo Halisi",
    testimonialsTitle: "Wateja Wetu Wanasema Nini",
    testimonialsSubtitle: "Usisikilize tu maneno yetu. Hapa ni maoni ya wateja wetu wenye furaha kote Tanzania kuhusu uzoefu wao na Golden eCards.",
    eventOf: "Tukio:",
    trustBadge: "Tunaaminiwa na wateja katika mikoa yote 26 ya Tanzania",
    
    // Contact
    contactTag: "Wasiliana Nasi",
    contactTitle: "Wasiliana Nasi",
    contactSubtitle: "Uko tayari kufanya tukio lako lisilo sahaulika? Wasiliana nasi kupitia njia yoyote kati ya hizi.",
    contactName: "Jina Lako",
    contactEmail: "Barua Pepe",
    contactPhone: "Namba ya Simu",
    contactEvent: "Aina ya Tukio",
    contactMessage: "Tuambie kuhusu tukio lako...",
    contactSubmit: "Tuma Ujumbe",
    contactWhatsApp: "Ongea WhatsApp",
    contactInstagram: "Fuata Instagram",
    contactOffices: "Ofisi Zetu",
    
    // Footer
    footerTagline: "Kuunda uzoefu wa kidigitali unaokumbukwa kwa wakati wako maalum kote Tanzania.",
    footerQuickLinks: "Viungo vya Haraka",
    footerServices: "Huduma",
    footerContact: "Wasiliana",
    footerRights: "Haki zote zimehifadhiwa.",
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const saved = localStorage.getItem("golden-ecard-lang") as Language;
    if (saved && (saved === "en" || saved === "sw")) {
      setLanguage(saved);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("golden-ecard-lang", lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
