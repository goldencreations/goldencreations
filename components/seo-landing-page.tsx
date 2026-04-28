import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";

interface FaqItem {
  question: string;
  answer: string;
}

interface SeoLandingPageProps {
  title: string;
  subtitle: string;
  intro: string;
  keywords: string[];
  faqs: FaqItem[];
}

export function SeoLandingPage({ title, subtitle, intro, keywords, faqs }: SeoLandingPageProps) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <section className="pt-36 pb-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-semibold font-heading mb-6">{title}</h1>
          <p className="text-xl text-gold font-body mb-4">{subtitle}</p>
          <p className="text-muted-foreground leading-relaxed font-body mb-10">{intro}</p>

          <div className="rounded-2xl border border-border/50 bg-card p-6 md:p-8 mb-10">
            <h2 className="text-2xl font-semibold font-heading mb-4">Maneno Muhimu ya Utafutaji</h2>
            <div className="flex flex-wrap gap-3">
              {keywords.map((keyword) => (
                <span
                  key={keyword}
                  className="px-4 py-2 text-sm rounded-full bg-secondary border border-border/50 text-foreground font-body"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <Button asChild className="bg-gold hover:bg-gold-dark text-background rounded-full font-body">
              <a href="https://wa.me/255765800227" target="_blank" rel="noopener noreferrer">
                WhatsApp Sasa
              </a>
            </Button>
            <Button asChild variant="outline" className="rounded-full border-gold/50 text-gold hover:bg-gold/10 font-body">
              <Link href="/portfolio">Tazama Sampuli</Link>
            </Button>
          </div>

          <div className="mt-12 rounded-2xl border border-border/50 bg-card p-6 md:p-8">
            <h2 className="text-2xl font-semibold font-heading mb-6">Maswali Yanayoulizwa Mara kwa Mara</h2>
            <div className="space-y-5">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <h3 className="text-lg font-semibold font-heading mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground font-body leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
