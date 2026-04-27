"use client";

import { useLanguage } from "@/lib/language-context";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 bg-secondary/50 rounded-full p-1">
      <Button
        variant={language === "en" ? "default" : "ghost"}
        size="sm"
        onClick={() => setLanguage("en")}
        className={`rounded-full px-3 h-8 text-xs font-medium ${
          language === "en" 
            ? "bg-gold text-background hover:bg-gold-dark" 
            : "text-muted-foreground hover:text-foreground hover:bg-transparent"
        }`}
      >
        EN
      </Button>
      <Button
        variant={language === "sw" ? "default" : "ghost"}
        size="sm"
        onClick={() => setLanguage("sw")}
        className={`rounded-full px-3 h-8 text-xs font-medium ${
          language === "sw" 
            ? "bg-gold text-background hover:bg-gold-dark" 
            : "text-muted-foreground hover:text-foreground hover:bg-transparent"
        }`}
      >
        SW
      </Button>
    </div>
  );
}
