"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  MapPin, 
  Phone, 
  Clock, 
  MessageCircle,
  Instagram
} from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export function Contact() {
  const { language, t } = useLanguage();

  const contactInfo = [
    {
      icon: Phone,
      titleEN: "Phone",
      titleSW: "Simu",
      details: ["0765 800 227 (WhatsApp & " + (language === 'en' ? 'Call' : 'Simu') + ")"],
    },
    {
      icon: MapPin,
      titleEN: "Our Offices",
      titleSW: "Ofisi Zetu",
      details: [
        "Mbezi Beach Massana, Dar es Salaam",
        "Makumbusho Bus Stop, Dar es Salaam",
        "Mwanza CCM"
      ],
    },
    {
      icon: Clock,
      titleEN: "Working Hours",
      titleSW: "Saa za Kazi",
      details: [
        language === 'en' ? "Monday - Saturday: 8:00 AM - 8:00 PM" : "Jumatatu - Jumamosi: 8:00 AM - 8:00 PM",
        language === 'en' ? "Sunday: 10:00 AM - 6:00 PM" : "Jumapili: 10:00 AM - 6:00 PM"
      ],
    },
  ];

  return (
    <section id="contact" className="py-24 bg-background relative">
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
          <span className="text-gold text-sm font-medium tracking-wider uppercase font-body">{t.contactTag}</span>
          <h2 className="text-3xl md:text-5xl font-semibold mt-3 mb-4 font-heading">
            {t.contactTitle.split(' ')[0]} <span className="text-gold">{t.contactTitle.split(' ').slice(1).join(' ')}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body">
            {t.contactSubtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-card border-border/50 card-shimmer">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 font-heading">
                  {language === 'en' ? 'Send Us a Message' : 'Tutumie Ujumbe'}
                </h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm mb-2 font-body">{t.contactName}</label>
                      <input 
                        type="text" 
                        placeholder={language === 'en' ? "Your name" : "Jina lako"}
                        className="w-full px-4 py-3 rounded-lg bg-secondary border border-border/50 focus:border-gold/50 focus:outline-none transition-colors font-body"
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-2 font-body">{t.contactPhone}</label>
                      <input 
                        type="tel" 
                        placeholder="07XX XXX XXX"
                        className="w-full px-4 py-3 rounded-lg bg-secondary border border-border/50 focus:border-gold/50 focus:outline-none transition-colors font-body"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm mb-2 font-body">{t.contactEvent}</label>
                    <select className="w-full px-4 py-3 rounded-lg bg-secondary border border-border/50 focus:border-gold/50 focus:outline-none transition-colors font-body">
                      <option value="">{language === 'en' ? 'Select event type' : 'Chagua aina ya tukio'}</option>
                      <option value="wedding">{language === 'en' ? 'Wedding' : 'Harusi'}</option>
                      <option value="sendoff">Send-off</option>
                      <option value="kitchen">Kitchen Party</option>
                      <option value="birthday">{language === 'en' ? 'Birthday' : 'Siku ya Kuzaliwa'}</option>
                      <option value="graduation">Graduation</option>
                      <option value="corporate">{language === 'en' ? 'Corporate Event' : 'Tukio la Kikazi'}</option>
                      <option value="babyshower">Baby Shower</option>
                      <option value="other">{language === 'en' ? 'Other' : 'Nyingine'}</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm mb-2 font-body">
                      {language === 'en' ? 'Your Message' : 'Ujumbe Wako'}
                    </label>
                    <textarea 
                      rows={4}
                      placeholder={t.contactMessage}
                      className="w-full px-4 py-3 rounded-lg bg-secondary border border-border/50 focus:border-gold/50 focus:outline-none transition-colors resize-none font-body"
                    />
                  </div>
                  <Button 
                    type="submit"
                    className="w-full bg-gold hover:bg-gold-dark text-background py-6 rounded-full font-body"
                  >
                    {t.contactSubmit}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border/50"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2 font-heading">
                    {language === 'en' ? info.titleEN : info.titleSW}
                  </h4>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-muted-foreground text-sm font-body">{detail}</p>
                  ))}
                </div>
              </div>
            ))}

            {/* Quick Contact Buttons */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <Button 
                asChild
                className="bg-green-600 hover:bg-green-700 text-white py-6 rounded-xl font-body"
              >
                <a href="https://wa.me/255765800227" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  {t.contactWhatsApp}
                </a>
              </Button>
              <Button 
                asChild
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-6 rounded-xl font-body"
              >
                <a href="https://www.instagram.com/goldenecard/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-5 h-5 mr-2" />
                  {t.contactInstagram}
                </a>
              </Button>
            </div>

            {/* Call Button */}
            <div className="pt-2">
              <Button 
                asChild
                variant="outline"
                className="w-full border-gold/50 text-gold hover:bg-gold/10 py-6 rounded-xl font-body"
              >
                <a href="tel:+255765800227">
                  <Phone className="w-5 h-5 mr-2" />
                  {language === 'en' ? 'Call: 0765 800 227' : 'Piga Simu: 0765 800 227'}
                </a>
              </Button>
            </div>

            {/* Coverage Info */}
            <div className="p-6 rounded-xl bg-gold/10 border border-gold/30">
              <h4 className="font-semibold mb-2 text-gold font-heading">
                {language === 'en' ? 'We Serve All of Tanzania' : 'Tunafanya Kazi Tanzania Nzima'}
              </h4>
              <p className="text-sm text-muted-foreground font-body">
                {language === 'en' 
                  ? 'We serve all 26 regions of mainland Tanzania plus Zanzibar. Wherever you are, we can help you!'
                  : 'Tunahudumia mikoa yote 26 ya Tanzania bara pamoja na Zanzibar. Popote ulipo, tunaweza kukusaidia!'
                }
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
