"use client";

import { motion } from "framer-motion";
import { 
  Send, 
  Heart, 
  QrCode, 
  MessageSquare, 
  GraduationCap,
  Building2,
  Users,
  Cake,
  Baby,
  PartyPopper,
  Briefcase
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/lib/language-context";

export function Services() {
  const { t } = useLanguage();

  const mainServices = [
    {
      icon: Send,
      title: t.service1Title,
      description: t.service1Desc
    },
    {
      icon: Heart,
      title: t.service2Title,
      description: t.service2Desc
    },
    {
      icon: QrCode,
      title: t.service3Title,
      description: t.service3Desc
    },
    {
      icon: MessageSquare,
      title: t.service4Title,
      description: t.service4Desc
    },
  ];

  const eventTypes = [
    { icon: Heart, label: t.eventWedding },
    { icon: Cake, label: t.eventBirthday },
    { icon: Users, label: t.eventSendoff },
    { icon: Building2, label: t.eventKitchen },
    { icon: GraduationCap, label: t.eventGraduation },
    { icon: Baby, label: t.eventBabyShower },
    { icon: PartyPopper, label: t.eventCorporate },
    { icon: Briefcase, label: t.eventConference },
  ];

  return (
    <motion.section
      id="services"
      className="py-24 bg-secondary/50 relative"
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
          <span className="text-gold text-sm font-medium tracking-wider uppercase font-body">{t.servicesTag}</span>
          <h2 className="text-3xl md:text-5xl font-semibold mt-3 mb-4 font-heading">
            {t.servicesTitle.split(' ')[0]} <span className="text-gold">{t.servicesTitle.split(' ').slice(1).join(' ')}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body">
            {t.servicesSubtitle}
          </p>
        </motion.div>

        {/* Main Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {mainServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-card border-border/50 hover:border-gold/50 transition-all duration-300 h-full group card-shimmer">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                    <service.icon className="w-7 h-7 text-gold" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 font-heading">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed font-body">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Event Types */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-xl md:text-2xl font-semibold mb-8 font-heading">
            {t.eventsTitle}
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {eventTypes.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-center gap-2 px-5 py-3 rounded-full bg-card border border-border/50 hover:border-gold/50 transition-colors cursor-pointer group"
              >
                <event.icon className="w-5 h-5 text-gold" />
                <span className="text-sm font-medium font-body">{event.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
