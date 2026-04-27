import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Services } from "@/components/services";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Services | Golden eCards Tanzania",
  description:
    "Explore Golden eCards services: digital invitations, RSVP automation, contribution tracking, and QR event check-in across Tanzania.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="pt-12">
        <Services />
      </div>
      <Footer />
    </main>
  );
}
