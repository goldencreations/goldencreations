"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Send, Heart, QrCode, MessageSquare } from "lucide-react";
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

  const eventCards = [
    { label: t.eventWedding, imageSrc: "/images/wedding.jpeg" },
    { label: t.eventSendoff, imageSrc: "/images/sendoff.jpeg" },
    {
      label: t.eventKitchen,
      imageSrc: "/images/kitchen%20party.jpeg",
    },
  ];

  return (
    <motion.section
      id="services"
      className="py-24 bg-secondary/50 relative"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
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
          <div className="flex w-full max-w-7xl mx-auto flex-nowrap items-stretch justify-center gap-5 md:gap-7 lg:gap-8">
            {eventCards.map((event, index) => (
              <motion.div
                key={event.imageSrc}
                initial={{ opacity: 0, scale: 0.96, y: 12 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="group min-w-0 flex-1 basis-0 cursor-default"
              >
                <div className="relative aspect-[3/5] w-full overflow-hidden rounded-3xl border border-border/50 bg-card shadow-sm transition-all duration-300 hover:border-gold/50 hover:shadow-md">
                  <Image
                    src={event.imageSrc}
                    alt={event.label}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 34vw, 400px"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/88 via-black/25 to-transparent"
                    aria-hidden
                  />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-left md:p-7">
                    <p className="text-xl font-semibold leading-tight text-white font-heading sm:text-2xl md:text-3xl">
                      {event.label}
                    </p>
                    <p className="mt-2 text-sm font-normal text-white/90 font-body sm:text-base">
                      {t.eventCardSubtitle}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
