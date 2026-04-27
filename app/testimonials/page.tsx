import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Testimonials } from "@/components/testimonials";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Client Reviews | Golden eCards Testimonials",
  description:
    "Read testimonials from clients across Tanzania who used Golden eCards for weddings, corporate events, birthdays, and graduations.",
  alternates: {
    canonical: "/testimonials",
  },
};

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="pt-12">
        <Testimonials />
      </div>
      <Footer />
    </main>
  );
}
