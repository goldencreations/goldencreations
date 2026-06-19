import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Golden eCards Tanzania",
  description:
    "Read how Golden eCards collects, uses, protects, and deletes personal information for digital invitations, RSVP, contribution tracking, and QR event check-in services.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

const sections = [
  {
    title: "Information We Collect",
    body: [
      "Golden eCards collects the information needed to create and manage digital invitations and event services. This may include names, phone numbers, WhatsApp numbers, event details, guest lists, RSVP responses, contribution records, QR check-in status, delivery reports, and messages you send to us through WhatsApp, phone, Instagram, or website forms.",
      "For clients who order packages with contribution tracking, reminders, follow-up calls, reception support, or event reports, we may process donor names, phone numbers, pledge or payment status, and event attendance details on behalf of the event organizer.",
    ],
  },
  {
    title: "How We Use Information",
    body: [
      "We use personal information to design and deliver digital invitation cards, send WhatsApp and SMS invitations or reminders, manage RSVPs, support QR code event check-in, track invitation reports, provide customer support, prepare event reports, and improve our services.",
      "We may also use contact information to respond to inquiries, confirm event details, communicate package updates, and send thank-you or reminder messages requested by the event organizer.",
    ],
  },
  {
    title: "Sharing And Service Providers",
    body: [
      "We do not sell personal information. We may share limited information with trusted service providers only when needed to deliver the service, such as WhatsApp, SMS delivery providers, hosting providers, analytics tools, QR scanning or event support staff, and payment or contribution support channels used for a specific event.",
      "Event organizers are responsible for making sure they have permission to share guest or contributor details with Golden eCards for invitation delivery, RSVP, contribution tracking, or event management.",
    ],
  },
  {
    title: "Data Retention",
    body: [
      "We keep information only as long as reasonably needed to provide the requested service, support the event, prepare reports, meet business or legal requirements, and resolve disputes. Event records may be archived after an event so we can answer follow-up questions from the client.",
      "Clients and app users may request deletion of account or event-related personal information using the instructions on our Delete User Account in App page.",
    ],
  },
  {
    title: "Security",
    body: [
      "We use reasonable administrative and technical measures to protect personal information. No digital service is completely risk-free, but we work to limit access to authorized team members and service providers who need the information to support Golden eCards services.",
    ],
  },
  {
    title: "Your Choices",
    body: [
      "You may ask us to update, correct, or delete your personal information. You may also ask us to stop sending invitation, reminder, or marketing messages where applicable. Some information may need to be retained where required for event records, security, fraud prevention, legal compliance, or transaction history.",
    ],
  },
  {
    title: "Contact Us",
    body: [
      "For privacy questions or data requests, contact Golden eCards by WhatsApp or phone at +255 765 800 227, or through Instagram at @goldenecard. Our offices are in Mbezi Beach Massana and Makumbusho Bus Stop in Dar es Salaam, and Mwanza CCM.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <section className="relative pt-36 pb-20 bg-background">
        <div className="celebration-pattern" />
        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          <p className="text-gold text-sm font-medium tracking-wider uppercase font-body mb-3">
            Golden eCards
          </p>
          <h1 className="text-4xl md:text-6xl font-semibold font-heading mb-6">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground leading-relaxed font-body text-lg mb-4">
            This Privacy Policy explains how Golden eCards, a service of Golden Creations,
            handles information for digital invitation cards, WhatsApp and SMS delivery,
            RSVPs, contribution tracking, event management, and QR check-in services across
            Tanzania.
          </p>
          <p className="text-sm text-muted-foreground font-body mb-12">
            Last updated: June 19, 2026
          </p>

          <div className="space-y-6">
            {sections.map((section) => (
              <section
                key={section.title}
                className="rounded-2xl border border-border/50 bg-card p-6 md:p-8"
              >
                <h2 className="text-2xl font-semibold font-heading mb-4">{section.title}</h2>
                <div className="space-y-4">
                  {section.body.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-muted-foreground leading-relaxed font-body"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
