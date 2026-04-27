"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Sparkles } from "lucide-react";
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

      {/* Floating cards decoration */}
      <motion.div
        className="absolute top-20 right-10 md:right-20 w-32 md:w-48 h-40 md:h-56 bg-gradient-to-br from-gold/20 to-gold/5 rounded-2xl border border-gold/30 backdrop-blur-sm hidden lg:block"
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-32 left-10 md:left-20 w-28 md:w-40 h-36 md:h-48 bg-gradient-to-br from-gold/15 to-gold/5 rounded-2xl border border-gold/20 backdrop-blur-sm hidden lg:block"
        animate={{ y: [0, 15, 0], rotate: [0, -3, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 mb-8"
          >
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-gold text-sm font-medium font-body">{t.heroBadge}</span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-6 font-heading"
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
