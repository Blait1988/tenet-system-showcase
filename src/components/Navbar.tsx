import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { lang, setLang } = useLanguage();

  const navLinks = [
    { label: t(translations.nav.products, lang), href: "#products" },
    { label: t(translations.nav.approach, lang), href: "#approach" },
    { label: t(translations.nav.about, lang), href: "#about" },
    { label: t(translations.nav.contact, lang), href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/20 bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="/" className="flex items-center">
          <img src="/tenet-logo.png" alt="Tenet System" className="h-8" />
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}

          {/* Language switcher */}
          <div className="flex items-center gap-1 text-xs tracking-wider ml-2">
            <button
              onClick={() => setLang("en")}
              className={`px-2 py-1 rounded transition-colors ${
                lang === "en" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              EN
            </button>
            <span className="text-border">|</span>
            <button
              onClick={() => setLang("it")}
              className={`px-2 py-1 rounded transition-colors ${
                lang === "it" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              IT
            </button>
          </div>

          <Button size="sm" className="ml-2" asChild>
            <a href="#contact">{t(translations.nav.cta, lang)}</a>
          </Button>
        </div>

        {/* Mobile */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72 bg-background border-border">
            <div className="mt-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-lg text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}

              {/* Mobile language switcher */}
              <div className="flex items-center gap-2 text-sm tracking-wider pt-2 border-t border-border/30">
                <button
                  onClick={() => setLang("en")}
                  className={`px-3 py-1.5 rounded transition-colors ${
                    lang === "en" ? "text-foreground bg-accent" : "text-muted-foreground"
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLang("it")}
                  className={`px-3 py-1.5 rounded transition-colors ${
                    lang === "it" ? "text-foreground bg-accent" : "text-muted-foreground"
                  }`}
                >
                  IT
                </button>
              </div>

              <Button className="mt-2" asChild>
                <a href="#contact" onClick={() => setOpen(false)}>
                  {t(translations.nav.cta, lang)}
                </a>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
