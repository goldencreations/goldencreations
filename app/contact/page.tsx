import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Contact Golden eCards | Tanzania",
  description:
    "Contact Golden eCards via WhatsApp, phone, or Instagram. Reach our team for digital invitation design and event support in Tanzania.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="pt-12">
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
