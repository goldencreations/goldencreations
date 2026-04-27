import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { WhyUs } from "@/components/why-us";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Why Golden eCards | Digital Invitation Benefits",
  description:
    "See why Golden eCards is trusted in Tanzania. Compare traditional invitation problems with our faster, trackable, and cost-effective digital process.",
  alternates: {
    canonical: "/why-us",
  },
};

export default function WhyUsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="pt-12">
        <WhyUs />
      </div>
      <Footer />
    </main>
  );
}
