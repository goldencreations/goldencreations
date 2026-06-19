import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Delete User Account in App | Golden eCards",
  description:
    "Instructions for deleting a Golden eCards app account and requesting removal of personal data connected to digital invitations and event services.",
  alternates: {
    canonical: "/delete-user-account-in-app",
  },
};

const deletionSteps = [
  "Open the Golden eCards app and sign in to your account.",
  "Go to Profile or Settings.",
  "Select Delete Account or Request Account Deletion.",
  "Confirm the phone number or account details connected to your Golden eCards account.",
  "Submit the request. Our team will review and process the deletion request.",
];

const deletedData = [
  "Your app account profile details, such as your name and phone number.",
  "Personal information connected to app login and customer support records.",
  "Event records, invitation lists, RSVP records, contribution tracking details, and QR check-in records that are no longer required to provide service or keep lawful business records.",
];

const retainedData = [
  "Payment, transaction, or contribution records that must be kept for accounting, dispute resolution, fraud prevention, or legal compliance.",
  "Event records that belong to another organizer, unless the organizer also requests deletion or the data is no longer needed.",
  "Limited backup copies that are removed during normal backup rotation.",
];

export default function DeleteUserAccountInAppPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <section className="relative pt-36 pb-20 bg-background">
        <div className="celebration-pattern" />
        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          <p className="text-gold text-sm font-medium tracking-wider uppercase font-body mb-3">
            Account deletion
          </p>
          <h1 className="text-4xl md:text-6xl font-semibold font-heading mb-6">
            Delete User Account in App
          </h1>
          <p className="text-muted-foreground leading-relaxed font-body text-lg mb-4">
            Use this page to understand how to delete your Golden eCards app account and
            request removal of personal information connected to digital invitations, RSVP,
            contribution tracking, event reports, and QR check-in services.
          </p>
          <p className="text-sm text-muted-foreground font-body mb-12">
            Last updated: June 19, 2026
          </p>

          <div className="grid gap-6">
            <section className="rounded-2xl border border-border/50 bg-card p-6 md:p-8">
              <h2 className="text-2xl font-semibold font-heading mb-4">
                Delete Your Account Inside The App
              </h2>
              <ol className="space-y-3 list-decimal list-inside text-muted-foreground font-body leading-relaxed">
                {deletionSteps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </section>

            <section className="rounded-2xl border border-border/50 bg-card p-6 md:p-8">
              <h2 className="text-2xl font-semibold font-heading mb-4">
                Request Deletion By Contacting Us
              </h2>
              <p className="text-muted-foreground leading-relaxed font-body mb-5">
                If you cannot access the app, contact Golden eCards by WhatsApp or phone at
                +255 765 800 227. Include the phone number used in the app, your name, and a
                short message saying you want your Golden eCards account deleted.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-gold hover:bg-gold-dark text-background rounded-full font-body">
                  <a href="https://wa.me/255765800227" target="_blank" rel="noopener noreferrer">
                    Request on WhatsApp
                  </a>
                </Button>
                <Button asChild variant="outline" className="rounded-full border-gold/50 text-gold hover:bg-gold/10 font-body">
                  <Link href="/privacy-policy">Read Privacy Policy</Link>
                </Button>
              </div>
            </section>

            <section className="rounded-2xl border border-border/50 bg-card p-6 md:p-8">
              <h2 className="text-2xl font-semibold font-heading mb-4">
                Data Deleted After Approval
              </h2>
              <ul className="space-y-3 list-disc pl-5 text-muted-foreground font-body leading-relaxed">
                {deletedData.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="rounded-2xl border border-border/50 bg-card p-6 md:p-8">
              <h2 className="text-2xl font-semibold font-heading mb-4">
                Data We May Retain
              </h2>
              <ul className="space-y-3 list-disc pl-5 text-muted-foreground font-body leading-relaxed">
                {retainedData.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="text-muted-foreground leading-relaxed font-body mt-5">
                Approved deletion requests are normally processed within 30 days, unless a
                longer period is required for verification, legal compliance, security, or
                dispute resolution.
              </p>
            </section>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
