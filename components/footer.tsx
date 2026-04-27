"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, Phone, MapPin, Instagram } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

const offices = [
  "Mbezi Beach Massana, Dar es Salaam",
  "Makumbusho Bus Stop, Dar es Salaam",
  "Mwanza CCM",
];

export function Footer() {
  const { language, t } = useLanguage();

  const footerLinks = {
    services: language === 'en' ? [
      { label: "Digital Invitations", href: "/services" },
      { label: "Contribution Tracking", href: "/services" },
      { label: "Event Management", href: "/services" },
      { label: "QR Check-in", href: "/services" },
      { label: "Video Invitations", href: "/services" },
    ] : [
      { label: "Mialiko ya Kidigitali", href: "/services" },
      { label: "Ufuatiliaji wa Michango", href: "/services" },
      { label: "Usimamizi wa Matukio", href: "/services" },
      { label: "QR Check-in", href: "/services" },
      { label: "Video Invitations", href: "/services" },
    ],
    eventTypes: language === 'en' ? [
      { label: "Wedding", href: "/portfolio" },
      { label: "Kitchen Party", href: "/portfolio" },
      { label: "Send-off", href: "/portfolio" },
      { label: "Birthday", href: "/portfolio" },
      { label: "Graduation", href: "/portfolio" },
    ] : [
      { label: "Harusi", href: "/portfolio" },
      { label: "Kitchen Party", href: "/portfolio" },
      { label: "Send-off", href: "/portfolio" },
      { label: "Siku ya Kuzaliwa", href: "/portfolio" },
      { label: "Graduation", href: "/portfolio" },
    ],
    company: language === 'en' ? [
      { label: "About Us", href: "/why-us" },
      { label: "Our Work", href: "/portfolio" },
      { label: "Pricing", href: "/packages" },
      { label: "Reviews", href: "/testimonials" },
      { label: "Contact", href: "/contact" },
    ] : [
      { label: "Kuhusu Sisi", href: "/why-us" },
      { label: "Kazi Zetu", href: "/portfolio" },
      { label: "Bei Zetu", href: "/packages" },
      { label: "Maoni", href: "/testimonials" },
      { label: "Wasiliana", href: "/contact" },
    ],
  };

  return (
    <footer className="bg-card border-t border-border/50 relative">
      <div className="celebration-pattern" />
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Image 
                src="/images/logo.png" 
                alt="Golden eCards" 
                width={50} 
                height={50}
                className="h-14 w-auto"
              />
              <div>
                <div className="text-2xl font-semibold text-gold font-heading">Golden eCards</div>
                <div className="text-sm text-muted-foreground font-body">Digital Invitation Cards</div>
              </div>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm leading-relaxed font-body">
              {t.footerTagline}
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <a href="tel:+255765800227" className="flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors font-body">
                <Phone className="w-4 h-4 text-gold" />
                <span>0765 800 227</span>
              </a>
              <a href="https://www.instagram.com/goldenecard/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors font-body">
                <Instagram className="w-4 h-4 text-gold" />
                <span>@goldenecard</span>
              </a>
            </div>

            <div className="flex items-center gap-2 text-sm text-gold font-heading italic">
              <span>&ldquo;Your event deserves a golden touch&rdquo;</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 font-heading">{t.footerServices}</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-muted-foreground hover:text-gold transition-colors text-sm font-body"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Event Types */}
          <div>
            <h4 className="font-semibold mb-4 font-heading">
              {language === 'en' ? 'Event Types' : 'Aina za Matukio'}
            </h4>
            <ul className="space-y-3">
              {footerLinks.eventTypes.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-muted-foreground hover:text-gold transition-colors text-sm font-body"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Offices */}
          <div>
            <h4 className="font-semibold mb-4 font-heading">{t.contactOffices}</h4>
            <ul className="space-y-3">
              {offices.map((office, index) => (
                <li key={index} className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-sm font-body">{office}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground font-body">
            © {new Date().getFullYear()} Golden eCards. {t.footerRights}
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1 font-body">
            {language === 'en' ? 'A service of ' : 'Huduma ya '}
            <span className="text-gold font-semibold">Golden Creations</span>
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1 font-body">
            {language === 'en' ? 'Made with' : 'Imetengenezwa kwa'} <Heart className="w-4 h-4 text-gold fill-gold" /> {language === 'en' ? 'in Tanzania' : 'Tanzania'}
          </p>
        </div>
      </div>
    </footer>
  );
}
