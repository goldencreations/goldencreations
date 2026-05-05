"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/language-context";
import { LanguageSwitcher } from "./language-switcher";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  const navLinks = [
    { href: "/why-us", label: t.navWhyUs },
    { href: "/services", label: t.navServices },
    { href: "/portfolio", label: t.navPortfolio },
    { href: "/testimonials", label: t.navReviews },
    { href: "/packages", label: t.navPackages },
    { href: "/contact", label: t.navContact },
  ];

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 50);
        ticking = false;
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-background/95 backdrop-blur-md border-b border-border/50 py-3" 
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <Image 
                src="/images/logo.png" 
                alt="Golden eCards" 
                width={50} 
                height={50}
                className="h-12 w-auto"
              />
              <div className="hidden sm:block">
                <div className="text-xl font-semibold text-gold font-heading">Golden eCards</div>
                <div className="text-xs text-muted-foreground font-body">Digital Invitation Cards</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-gold transition-colors font-body"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Language Switcher & CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <LanguageSwitcher />
              <Button 
                asChild
                className="bg-gold hover:bg-gold-dark text-background rounded-full px-6 font-body"
              >
                <a href="https://wa.me/255765800227" target="_blank" rel="noopener noreferrer">
                  <Phone className="w-4 h-4 mr-2" />
                  {t.navCTA}
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-3">
              <LanguageSwitcher />
              <button
                className="text-foreground p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
                type="button"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-40 bg-background pt-24 px-4 lg:hidden"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-lg text-foreground hover:text-gold py-3 border-b border-border/50 font-body"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button 
              asChild
              className="bg-gold hover:bg-gold-dark text-background rounded-full mt-4 font-body"
            >
              <a href="https://wa.me/255765800227" target="_blank" rel="noopener noreferrer">
                <Phone className="w-4 h-4 mr-2" />
                {t.navCTA}
              </a>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
