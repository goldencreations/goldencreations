"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Celebration background pattern */}
      <div className="celebration-pattern" />
      
      {/* Floating decorations */}
      <div className="floating-decoration" style={{ top: '10%', left: '5%' }} />
      <div className="floating-decoration" style={{ top: '60%', right: '5%' }} />
      <div className="floating-decoration" style={{ bottom: '10%', left: '40%' }} />

      {/* Decorative invitation florals */}
      <motion.div
        className="pointer-events-none absolute top-20 right-10 z-[1] hidden h-40 w-32 md:right-20 md:h-56 md:w-48 lg:block"
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      >
        <Image
          src="/images/sample1.png"
          alt=""
          fill
          className="object-contain object-right-top drop-shadow-md"
          sizes="(min-width: 768px) 192px, 128px"
        />
        <div className="absolute inset-0 bg-black/40 rounded-2xl" aria-hidden />
      </motion.div>
      <motion.div
        className="pointer-events-none absolute bottom-32 left-10 z-[1] hidden h-36 w-28 md:left-20 md:h-48 md:w-40 lg:block"
        animate={{ y: [0, 15, 0], rotate: [0, -3, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        aria-hidden
      >
        <Image
          src="/images/sample2.png"
          alt=""
          fill
          className="object-contain object-left-bottom drop-shadow-md"
          sizes="(min-width: 768px) 160px, 112px"
        />
        <div className="absolute inset-0 bg-black/40 rounded-2xl" aria-hidden />
      </motion.div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-normal leading-tight mb-6 font-heading"
          >
            <span className="text-foreground">{t.heroTitle1}</span>
            <br />
            <span className="text-gold">{t.heroTitle2}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed font-body"
          >
            {t.heroSubtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button 
              asChild
              size="lg" 
              className="bg-gold hover:bg-gold-dark text-background px-8 py-6 text-lg font-medium rounded-full group font-body"
            >
              <a href="https://wa.me/255765800227" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                {t.heroCTA1}
              </a>
            </Button>
            <Button 
              asChild
              size="lg" 
              className="bg-secondary hover:bg-secondary/80 text-foreground border border-gold/30 px-8 py-6 text-lg rounded-full font-body"
            >
              <a href="tel:+255765800227">
                <Phone className="w-5 h-5 mr-2" />
                0765 800 227
              </a>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border/50"
          >
            {[
              { value: "50,000+", label: t.heroStat1 },
              { value: "2,500+", label: t.heroStat2 },
              { value: "26+", label: t.heroStat3 },
              { value: "4.9★", label: t.heroStat4 },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-semibold text-gold font-heading">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1 font-body">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-gold/50 flex justify-center">
          <div className="w-1.5 h-3 bg-gold rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
}
