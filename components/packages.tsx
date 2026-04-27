"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star, Sparkles, Crown, Phone } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

const packages = [
  {
    name: "GOLDEN BASIC",
    price: "350,000",
    descriptionEN: "Digital invitations made simple",
    descriptionSW: "Waalike Kidigital/Kisasa na E-Cards",
    popular: false,
    icon: null,
    features: [
      { en: "E-Cards 250 Maximum", sw: "E-Cards 250 Maximum" },
      { en: "E-Card Design (1) & Save the date (1)", sw: "E-Card Design (1) & Save the date (1)" },
      { en: "WhatsApp Cards with QR CODE", sw: "WhatsApp Cards zikiwa na QR CODE (Smart Phone Only)" },
      { en: "SMS Cards with serial number", sw: "SMS Cards zikiwa na serial namba (SIM Kiswaswadu)" },
      { en: "Verification Follow Up Calls", sw: "Waalikwa kupigiwa simu (Verification Follow Up Calls)" },
      { en: "Scanner & Receptionist 1", sw: "Scanner & Receptionist 1" },
      { en: "Thank You Messages", sw: "Waalikwa kuwashukuru kushiriki (Thank You)" },
      { en: "Invitation Link Report", sw: "Pata report ya Mialiko (Invitation Link Report)" },
      { en: "Extra Card @ Tsh 1,500/=", sw: "Add Card or Extra Card @ Tsh 1,500/=" },
    ],
  },
  {
    name: "GOLDEN ROYAL",
    price: "450,000",
    descriptionEN: "Perfect for standard events",
    descriptionSW: "Paketi bora kwa matukio ya kawaida",
    popular: false,
    icon: null,
    features: [
      { en: "E-Cards 300 Maximum", sw: "E-Cards 300 Maximum" },
      { en: "E-Card Design (1) & Save the date (1)", sw: "E-Card Design (1) & Save the date (1)" },
      { en: "WhatsApp Cards with QR CODE", sw: "WhatsApp Cards zikiwa na QR CODE (Smart Phone Only)" },
      { en: "SMS Cards with serial number", sw: "SMS Cards zikiwa na serial namba (SIM Kiswaswadu)" },
      { en: "Verification Follow Up Calls", sw: "Waalikwa kupigiwa simu (Verification Follow Up Calls)" },
      { en: "Scanner & Receptionist 1", sw: "Scanner & Receptionist 1" },
      { en: "Thank You Messages", sw: "Waalikwa kuwashukuru kushiriki (Thank You)" },
      { en: "Invitation Link Report", sw: "Pata report ya Mialiko (Invitation Link Report)" },
      { en: "Extra Card @ Tsh 1,500/=", sw: "Add Card or Extra Card @ Tsh 1,500/=" },
    ],
  },
  {
    name: "GOLDEN PREMIUM",
    price: "650,000",
    descriptionEN: "For big events with contributions",
    descriptionSW: "Kwa matukio makubwa na michango",
    popular: true,
    icon: Star,
    features: [
      { en: "Contribution Campaign SMS & WhatsApp X2", sw: "E-Card Michango Kampeni SMS & WHATSAPP X2" },
      { en: "E-Cards 400 Maximum", sw: "E-Cards 400 Maximum" },
      { en: "E-Card Design (1) & Save the date (1)", sw: "E-Card Design (1) & Save the date (1)" },
      { en: "WhatsApp Cards with QR CODE", sw: "WhatsApp Cards zikiwa na QR CODE (Smart Phone Only)" },
      { en: "SMS Cards with serial number", sw: "SMS Cards zikiwa na serial namba (SIM Kiswaswadu)" },
      { en: "Verification Follow Up Calls", sw: "Waalikwa kupigiwa simu (Verification Follow Up Calls)" },
      { en: "Scanners & Receptionists 2", sw: "Scanners & Receptionists 2" },
      { en: "Thank You Messages", sw: "Waalikwa kuwashukuru kushiriki (Thank You)" },
      { en: "Invitation Link Report", sw: "Pata report ya Mialiko (Invitation Link Report)" },
      { en: "Extra Card @ Tsh 1,500/=", sw: "Add Card or Extra Card @ Tsh 1,500/=" },
    ],
  },
  {
    name: "GOLDEN VIP",
    price: "950,000",
    descriptionEN: "Exclusive package for large events",
    descriptionSW: "Paketi ya kipekee kwa matukio makubwa",
    popular: false,
    icon: Crown,
    features: [
      { en: "Contribution Campaign SMS & WhatsApp X2", sw: "E-Card Michango Kampeni SMS & WHATSAPP X2" },
      { en: "E-Cards 500 Maximum", sw: "E-Cards 500 Maximum" },
      { en: "E-Card Design (1) & Save the date (1)", sw: "E-Card Design (1) & Save the date (1)" },
      { en: "WhatsApp Cards with QR CODE", sw: "WhatsApp Cards zikiwa na QR CODE (Smart Phone Only)" },
      { en: "SMS Cards with serial number", sw: "SMS Cards zikiwa na serial namba (SIM Kiswaswadu)" },
      { en: "Verification Follow Up Calls", sw: "Waalikwa kupigiwa simu (Verification Follow Up Calls)" },
      { en: "6 Ushers (3 Gents & 3 Ladies)", sw: "Scanners & Receptionists/Ushers (3 Gents & 3 Ladies in Impressive Dress)" },
      { en: "Save the Date & Event Reminder", sw: "Save the Date & Ukumbusho wa Sherehe WhatsApp + SMS" },
      { en: "Thank You Messages", sw: "Waalikwa kuwashukuru kushiriki (Thank You)" },
      { en: "Extra Card @ Tsh 1,500/=", sw: "Add Card or Extra Card @ Tsh 1,500/=" },
    ],
  },
  {
    name: "GOLDEN VVIP",
    price: "1,300,000",
    descriptionEN: "The ultimate premium experience",
    descriptionSW: "Paketi ya hali ya juu kabisa",
    popular: false,
    icon: Crown,
    features: [
      { en: "Contribution Campaign SMS & WhatsApp", sw: "E-Card Michango Kampeni SMS & WHATSAPP" },
      { en: "E-Cards 600 Maximum", sw: "E-Cards 600 Maximum" },
      { en: "E-Card Design (1) & Save the date (1)", sw: "E-Card Design (1) & Save the date (1)" },
      { en: "WhatsApp Cards with QR CODE", sw: "WhatsApp Cards zikiwa na QR CODE (Smart Phone Only)" },
      { en: "SMS Cards with serial number", sw: "SMS Cards zikiwa na serial namba (SIM Kiswaswadu)" },
      { en: "Verification Follow Up Calls", sw: "Waalikwa kupigiwa simu (Verification Follow Up Calls)" },
      { en: "10 Ushers (5 Gents & 5 Ladies)", sw: "Scanners & Receptionists/Ushers (5 Gents & 5 Ladies in Impressive Dress)" },
      { en: "Save the Date & Reminder (X2)", sw: "Save the Date & Ukumbusho wa Sherehe WhatsApp + SMS (X2)" },
      { en: "Thank You Messages", sw: "Waalikwa kuwashukuru kushiriki (Thank You)" },
      { en: "Extra Card @ Tsh 1,500/=", sw: "Add Card or Extra Card @ Tsh 1,500/=" },
    ],
  },
];

export function Packages() {
  const { language, t } = useLanguage();

  return (
    <motion.section
      id="packages"
      className="py-24 bg-background relative"
      initial={{ opacity: 0, y: 100, scale: 0.92, rotateX: 8, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      style={{ transformOrigin: "center bottom" }}
    >
      <div className="celebration-pattern" />
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm font-medium tracking-wider uppercase font-body">{t.packagesTag}</span>
          <h2 className="text-3xl md:text-5xl font-semibold mt-3 mb-4 font-heading">
            {t.packagesTitle.split(' ')[0]} <span className="text-gold">{t.packagesTitle.split(' ').slice(1).join(' ')}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body">
            {t.packagesSubtitle}
          </p>
        </motion.div>

        {/* Discount Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-gold/20 via-gold/10 to-gold/20 border border-gold/30 rounded-2xl p-6 mb-12 text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <Sparkles className="w-5 h-5 text-gold" />
            <span className="text-gold font-semibold font-body">
              {language === 'en' ? 'LIMITED TIME OFFER' : 'OFA YA MUDA MFUPI'}
            </span>
            <Sparkles className="w-5 h-5 text-gold" />
          </div>
          <p className="text-foreground font-body">
            {language === 'en' ? 'Call now for FREE consultation! WhatsApp: ' : 'Piga simu sasa upate ushauri wa BURE! WhatsApp: '}
            <span className="text-gold font-bold">0765 800 227</span>
          </p>
        </motion.div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="flex items-center gap-1 px-4 py-1.5 bg-gold rounded-full text-background text-xs font-semibold font-body">
                    <Star className="w-3 h-3 fill-current" />
                    {t.popular}
                  </div>
                </div>
              )}
              <Card className={`h-full card-shimmer ${pkg.popular ? 'border-gold bg-gradient-to-b from-gold/10 to-transparent' : 'border-border/50 bg-card'}`}>
                <CardHeader className="text-center pb-4">
                  <CardTitle className="font-heading">
                    {pkg.icon && <pkg.icon className="w-6 h-6 text-gold mx-auto mb-2" />}
                    <span className={`text-base ${pkg.popular ? 'text-gold' : 'text-foreground'}`}>{pkg.name}</span>
                  </CardTitle>
                  <div className="mt-4">
                    <span className="text-2xl font-semibold font-heading">Tsh {pkg.price}/=</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2 font-body">
                    {language === 'en' ? pkg.descriptionEN : pkg.descriptionSW}
                  </p>
                </CardHeader>
                <CardContent className="pt-4 border-t border-border/50">
                  <ul className="space-y-2">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs font-body">
                        <Check className="w-3 h-3 text-gold flex-shrink-0 mt-0.5" />
                        <span>{language === 'en' ? feature.en : feature.sw}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    asChild
                    className={`w-full mt-6 rounded-full text-sm font-body ${
                      pkg.popular 
                        ? 'bg-gold hover:bg-gold-dark text-background' 
                        : 'bg-secondary hover:bg-secondary/80'
                    }`}
                  >
                    <a href="https://wa.me/255765800227" target="_blank" rel="noopener noreferrer">
                      <Phone className="w-3 h-3 mr-2" />
                      {t.packageCTA}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Custom Package CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4 font-body">
            {language === 'en' 
              ? 'Need something more special? We create packages that fit your needs.'
              : 'Unahitaji kitu maalum zaidi? Tunaunda paketi zinazofaa mahitaji yako.'
            }
          </p>
          <Button 
            asChild
            variant="outline" 
            className="border-gold/50 text-gold hover:bg-gold/10 rounded-full px-8 font-body"
          >
            <a href="https://wa.me/255765800227" target="_blank" rel="noopener noreferrer">
              {language === 'en' ? 'Request Custom Package' : 'Omba Paketi Maalum'}
            </a>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}
