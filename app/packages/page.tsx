import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Packages } from "@/components/packages";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Pricing Packages | Golden eCards",
  description:
    "Compare Golden eCards packages from BASIC to VVIP. Find pricing, features, and event support options for your invitation campaign.",
  alternates: {
    canonical: "/packages",
  },
};

export default function PackagesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="pt-12">
        <Packages />
      </div>
      <Footer />
    </main>
  );
}
