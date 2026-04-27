"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play, Instagram } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/lib/language-context";

const portfolioItems = [
  {
    id: 1,
    titleEN: "Kitchen Party - Lisa Doreen",
    titleSW: "Kitchen Party - Lisa Doreen",
    category: "Kitchen Party",
    type: "image",
    image: "/images/sample1.png",
    descriptionEN: "Kitchen Party invitation with rose and gold flowers",
    descriptionSW: "Mwaliko wa Kitchen Party wenye maua ya waridi na dhahabu",
  },
  {
    id: 2,
    titleEN: "Send-off - Agnes",
    titleSW: "Send-off - Agnes",
    category: "Send-off",
    type: "image",
    image: "/images/sample2.png",
    descriptionEN: "Send-off invitation with green color and white flowers",
    descriptionSW: "Mwaliko wa Send-off wenye rangi ya kijani na maua meupe",
  },
  {
    id: 3,
    titleEN: "Wedding - Hafidhi & Aisha",
    titleSW: "Harusi - Hafidhi & Aisha",
    category: "Wedding",
    type: "image",
    image: "/images/sample3.png",
    descriptionEN: "Wedding invitation with black and white flowers",
    descriptionSW: "Mwaliko wa harusi wenye maua meusi na meupe",
  },
];

export function Portfolio() {
  const { language, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState(language === 'en' ? "All" : "Zote");
  const [playingVideo, setPlayingVideo] = useState(false);

  const categoriesEN = ["All", "Wedding", "Kitchen Party", "Send-off", "Birthday", "Corporate"];
  const categoriesSW = ["Zote", "Wedding", "Kitchen Party", "Send-off", "Birthday", "Corporate"];
  const categories = language === 'en' ? categoriesEN : categoriesSW;

  const allLabel = language === 'en' ? "All" : "Zote";
  const filteredItems = activeCategory === allLabel || activeCategory === "All" || activeCategory === "Zote"
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <motion.section
      id="portfolio"
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
          className="text-center mb-12"
        >
          <span className="text-gold text-sm font-medium tracking-wider uppercase font-body">{t.portfolioTag}</span>
          <h2 className="text-3xl md:text-5xl font-semibold mt-3 mb-4 font-heading">
            {t.portfolioTitle.split(' ')[0]} <span className="text-gold">{t.portfolioTitle.split(' ').slice(1).join(' ')}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body">
            {t.portfolioSubtitle}
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all font-body ${
                activeCategory === category
                  ? "bg-gold text-background"
                  : "bg-card border border-border/50 text-muted-foreground hover:border-gold/50 hover:text-gold"
              }`}
            >
              {category === "All" || category === "Zote" ? t.filterAll : category}
            </button>
          ))}
        </motion.div>

        {/* Video Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="bg-card rounded-2xl border border-border/50 overflow-hidden card-shimmer">
            <div className="p-6 border-b border-border/50">
              <h3 className="text-xl font-semibold font-heading">
                <Play className="w-5 h-5 inline mr-2 text-gold" />
                {t.videoShowcase}
              </h3>
            </div>
            <div className="aspect-video bg-background relative">
              {!playingVideo ? (
                <div 
                  className="absolute inset-0 flex items-center justify-center cursor-pointer group"
                  onClick={() => setPlayingVideo(true)}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-background/50" />
                  <div className="w-20 h-20 rounded-full bg-gold flex items-center justify-center z-10 group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-background ml-1" />
                  </div>
                  <span className="absolute bottom-6 left-6 text-foreground font-semibold font-body">
                    {language === 'en' ? 'Our Services Video' : 'Video ya Huduma Zetu'}
                  </span>
                </div>
              ) : (
                <video 
                  src="/videos/video2.mp4" 
                  controls 
                  autoPlay
                  className="w-full h-full object-cover"
                >
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          </div>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border/50 card-shimmer"
            >
              {/* Image */}
              <div className="aspect-[3/4] relative overflow-hidden">
                <Image
                  src={item.image}
                  alt={language === 'en' ? item.titleEN : item.titleSW}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-background/80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 text-center">
                  <h3 className="text-lg font-semibold mb-2 font-heading">
                    {language === 'en' ? item.titleEN : item.titleSW}
                  </h3>
                  <span className="text-sm text-gold mb-4 font-body">{item.category}</span>
                  <p className="text-sm text-muted-foreground font-body">
                    {language === 'en' ? item.descriptionEN : item.descriptionSW}
                  </p>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-4">
                <h3 className="font-semibold text-foreground font-heading">
                  {language === 'en' ? item.titleEN : item.titleSW}
                </h3>
                <span className="text-sm text-gold font-body">{item.category}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4 font-body">
            {language === 'en' 
              ? 'View more samples on our Instagram' 
              : 'Tazama mifano zaidi kwenye Instagram yetu'
            }
          </p>
          <Button 
            asChild
            variant="outline" 
            size="lg" 
            className="border-gold/50 text-gold hover:bg-gold/10 rounded-full px-8 font-body"
          >
            <a href="https://www.instagram.com/goldenecard/" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-5 h-5 mr-2" />
              {language === 'en' ? 'View More on Instagram' : 'Tazama Zaidi kwenye Instagram'}
            </a>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}
