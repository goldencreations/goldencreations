"use client";

import { motion } from "framer-motion";
import { 
  Zap, 
  Target, 
  Users, 
  Clock, 
  Shield, 
  TrendingDown,
  CheckCircle2
} from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export function WhyUs() {
  const { t } = useLanguage();

  const problems = [
    {
      traditional: t.problem1T,
      solution: t.problem1S,
      icon: Clock
    },
    {
      traditional: t.problem2T,
      solution: t.problem2S,
      icon: Target
    },
    {
      traditional: t.problem3T,
      solution: t.problem3S,
      icon: Shield
    },
    {
      traditional: t.problem4T,
      solution: t.problem4S,
      icon: TrendingDown
    },
  ];

  const advantages = [
    { icon: Zap, title: t.adv1Title, description: t.adv1Desc },
    { icon: Target, title: t.adv2Title, description: t.adv2Desc },
    { icon: Users, title: t.adv3Title, description: t.adv3Desc },
    { icon: Clock, title: t.adv4Title, description: t.adv4Desc },
  ];

  return (
    <section id="why-us" className="py-24 bg-background relative">
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
          <span className="text-gold text-sm font-medium tracking-wider uppercase font-body">{t.whyUsTag}</span>
          <h2 className="text-3xl md:text-5xl font-semibold mt-3 mb-4 font-heading">
            {t.whyUsTitle.split('Golden')[0]}<span className="text-gold">Golden eCards</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body">
            {t.whyUsSubtitle}
          </p>
        </motion.div>

        {/* Problem vs Solution */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Traditional Problems */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card/50 border border-border/50 rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
                <span className="text-destructive text-xl">✕</span>
              </div>
              <h3 className="text-xl font-semibold font-heading">{t.traditional}</h3>
            </div>
            <div className="space-y-4">
              {problems.map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-destructive/50" />
                  <span className="font-body">{item.traditional}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Golden eCards Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-gold/10 to-gold/5 border border-gold/30 rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-gold" />
              </div>
              <h3 className="text-xl font-semibold text-gold font-heading">{t.goldenWay}</h3>
            </div>
            <div className="space-y-4">
              {problems.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <item.icon className="w-5 h-5 text-gold flex-shrink-0" />
                  <span className="font-body">{item.solution}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mx-auto mb-4">
                <advantage.icon className="w-8 h-8 text-gold" />
              </div>
              <h4 className="font-semibold mb-2 font-heading">{advantage.title}</h4>
              <p className="text-sm text-muted-foreground font-body">{advantage.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
