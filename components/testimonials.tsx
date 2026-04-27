"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

const testimonialsData = {
  en: [
    {
      name: "Fatma Abdallah",
      role: "Bride, Dar es Salaam",
      content: "Golden eCards made our wedding invitation process so easy! The designs were stunning and our guests loved receiving them via WhatsApp. The RSVP tracking saved us so much time.",
      rating: 5,
      event: "Wedding"
    },
    {
      name: "John Mwakasege",
      role: "Event Manager, Arusha",
      content: "We use Golden eCards for all our corporate events. The QR code check-in feature is brilliant - we always know exactly who attended. Professional service every time.",
      rating: 5,
      event: "Corporate"
    },
    {
      name: "Amina Hussein",
      role: "Birthday Celebrant, Mwanza",
      content: "My 30th birthday invitations were absolutely beautiful! The team delivered within hours and the animated card was the talk of the party. Highly recommend!",
      rating: 5,
      event: "Birthday"
    },
    {
      name: "Hassan Mzee",
      role: "Father of the Groom, Zanzibar",
      content: "The contribution tracking feature was a game-changer for our son's wedding. Every donation was tracked digitally with automatic thank-you messages. Simply amazing service.",
      rating: 5,
      event: "Wedding"
    },
    {
      name: "Grace Kimaro",
      role: "School Administrator, Dodoma",
      content: "Our graduation ceremony invitations reached all 500+ parents instantly. The support team was incredibly helpful and patient. Will definitely use again next year.",
      rating: 5,
      event: "Graduation"
    },
    {
      name: "Ahmed Salim",
      role: "Business Owner, Tanga",
      content: "From company launch to annual dinners, Golden eCards has handled all our invitations. The designs always match our brand perfectly. True professionals!",
      rating: 5,
      event: "Corporate"
    },
  ],
  sw: [
    {
      name: "Fatma Abdallah",
      role: "Bi Harusi, Dar es Salaam",
      content: "Golden eCards walifanya mchakato wetu wa mialiko ya harusi kuwa rahisi sana! Miundo ilikuwa ya kupendeza na wageni wetu walipenda kupokea kupitia WhatsApp. Ufuatiliaji wa RSVP ulituokoa muda mwingi.",
      rating: 5,
      event: "Harusi"
    },
    {
      name: "John Mwakasege",
      role: "Msimamizi wa Matukio, Arusha",
      content: "Tunatumia Golden eCards kwa matukio yetu yote ya kikazi. Kipengele cha kuingia kwa QR code ni bora - tunajua hasa ni nani aliyehudhuria. Huduma ya kitaalamu kila wakati.",
      rating: 5,
      event: "Kikazi"
    },
    {
      name: "Amina Hussein",
      role: "Mshereheshaji Siku ya Kuzaliwa, Mwanza",
      content: "Mialiko yangu ya siku ya kuzaliwa ya miaka 30 ilikuwa nzuri sana! Timu ilitoa ndani ya masaa na kadi ya animated ilikuwa mazungumzo ya sherehe. Ninapendekeza sana!",
      rating: 5,
      event: "Siku ya Kuzaliwa"
    },
    {
      name: "Hassan Mzee",
      role: "Baba wa Bwana Harusi, Zanzibar",
      content: "Kipengele cha ufuatiliaji wa michango kilikuwa mabadiliko makubwa kwa harusi ya mtoto wetu. Kila mchango ulifuatiliwa kidigitali na ujumbe wa asante wa moja kwa moja. Huduma ya ajabu.",
      rating: 5,
      event: "Harusi"
    },
    {
      name: "Grace Kimaro",
      role: "Msimamizi wa Shule, Dodoma",
      content: "Mialiko yetu ya sherehe ya graduation ilifika kwa wazazi wote 500+ papo hapo. Timu ya msaada ilikuwa ya kusaidia sana na ya subira. Hakika nitatumia tena mwaka ujao.",
      rating: 5,
      event: "Graduation"
    },
    {
      name: "Ahmed Salim",
      role: "Mmiliki wa Biashara, Tanga",
      content: "Kuanzia uzinduzi wa kampuni hadi chakula cha jioni cha kila mwaka, Golden eCards wameshughulikia mialiko yetu yote. Miundo daima inaendana na brand yetu kikamilifu. Wataalamu wa kweli!",
      rating: 5,
      event: "Kikazi"
    },
  ]
};

export function Testimonials() {
  const { language, t } = useLanguage();
  const testimonials = testimonialsData[language];

  return (
    <motion.section
      id="testimonials"
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
          <span className="text-gold text-sm font-medium tracking-wider uppercase font-body">{t.testimonialsTag}</span>
          <h2 className="text-3xl md:text-5xl font-semibold mt-3 mb-4 font-heading">
            {t.testimonialsTitle.split(' ').slice(0, -1).join(' ')} <span className="text-gold">{t.testimonialsTitle.split(' ').slice(-1)}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body">
            {t.testimonialsSubtitle}
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full bg-card border-border/50 hover:border-gold/30 transition-colors card-shimmer">
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <Quote className="w-8 h-8 text-gold/30 mb-4" />
                  
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>
                  
                  {/* Content */}
                  <p className="text-foreground leading-relaxed mb-6 font-body">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                  
                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                      <span className="text-gold font-semibold font-heading">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold font-heading">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground font-body">{testimonial.role}</div>
                    </div>
                  </div>
                  
                  {/* Event Tag */}
                  <div className="mt-4 pt-4 border-t border-border/50">
                    <span className="text-xs px-3 py-1 bg-gold/10 text-gold rounded-full font-body">
                      {t.eventOf} {testimonial.event}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-6 font-body">{t.trustBadge}</p>
          <div className="flex flex-wrap justify-center gap-8 text-muted-foreground/50">
            <span className="font-body">Dar es Salaam</span>
            <span>•</span>
            <span className="font-body">Arusha</span>
            <span>•</span>
            <span className="font-body">Mwanza</span>
            <span>•</span>
            <span className="font-body">Zanzibar</span>
            <span>•</span>
            <span className="font-body">Dodoma</span>
            <span>•</span>
            <span className="font-body">Mbeya</span>
            <span>•</span>
            <span className="text-gold font-body">& more</span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
