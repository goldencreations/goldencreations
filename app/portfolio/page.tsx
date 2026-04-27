import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Portfolio } from "@/components/portfolio";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Portfolio | Invitation Samples & Videos",
  description:
    "View real invitation samples and videos from Golden eCards. Wedding, send-off, kitchen party, birthday, and corporate design examples.",
  alternates: {
    canonical: "/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="pt-12">
        <Portfolio />
      </div>
      <Footer />
    </main>
  );
}
