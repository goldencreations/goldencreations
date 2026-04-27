import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { WhyUs } from "@/components/why-us";
import { Portfolio } from "@/components/portfolio";
import { Packages } from "@/components/packages";
import { Testimonials } from "@/components/testimonials";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <Portfolio />
      <Packages />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
