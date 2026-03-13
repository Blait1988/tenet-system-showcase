import { useState, FormEvent } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [agreed, setAgreed] = useState(false);
  const { lang } = useLanguage();
  const c = translations.contact;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="py-28 lg:py-36 border-t border-border/30">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary mb-4">
              {t(c.label, lang)}
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {t(c.heading, lang)}
            </h2>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed max-w-md">
              {t(c.sub, lang)}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {t(c.name, lang)}
                </label>
                <Input
                  placeholder={t(c.namePlaceholder, lang)}
                  className="bg-card/50 border-border/40 h-11 text-sm placeholder:text-muted-foreground/40 focus:border-primary/50"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {t(c.email, lang)}
                </label>
                <Input
                  type="email"
                  placeholder={t(c.emailPlaceholder, lang)}
                  className="bg-card/50 border-border/40 h-11 text-sm placeholder:text-muted-foreground/40 focus:border-primary/50"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {t(c.company, lang)}
              </label>
              <Input
                placeholder={t(c.companyPlaceholder, lang)}
                className="bg-card/50 border-border/40 h-11 text-sm placeholder:text-muted-foreground/40 focus:border-primary/50"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {t(c.message, lang)}
              </label>
              <Textarea
                placeholder={t(c.messagePlaceholder, lang)}
                rows={5}
                className="bg-card/50 border-border/40 resize-none text-sm placeholder:text-muted-foreground/40 focus:border-primary/50"
              />
            </div>

            <div className="flex items-start gap-3 pt-1">
              <Checkbox
                id="privacy"
                checked={agreed}
                onCheckedChange={(v) => setAgreed(v === true)}
                className="mt-0.5"
              />
              <label htmlFor="privacy" className="text-xs text-muted-foreground leading-relaxed cursor-pointer">
                {t(c.privacy, lang)}{" "}
                <a href="/privacy" className="text-primary underline-offset-4 hover:underline">
                  {t(c.privacyLink, lang)}
                </a>
                .
              </label>
            </div>

            <Button type="submit" disabled={!agreed} className="h-11 px-8 text-sm">
              {t(c.submit, lang)}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
