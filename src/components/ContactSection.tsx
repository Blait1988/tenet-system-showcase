import { useState, FormEvent } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";

const inputClass =
  "w-full h-12 rounded-md border border-border/50 bg-card/60 px-4 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors";

const labelClass =
  "block text-[11px] font-medium uppercase tracking-[0.15em] text-muted-foreground/80 mb-2";

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
        <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] items-start">
          <div className="lg:sticky lg:top-32">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary mb-4">
              {t(c.label, lang)}
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {t(c.heading, lang)}
            </h2>
            <p className="mt-4 text-base text-secondary-foreground leading-relaxed max-w-md">
              {t(c.sub, lang)}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className={labelClass}>{t(c.name, lang)}</label>
                <input
                  placeholder={t(c.namePlaceholder, lang)}
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>{t(c.email, lang)}</label>
                <input
                  type="email"
                  placeholder={t(c.emailPlaceholder, lang)}
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label className={labelClass}>{t(c.company, lang)}</label>
              <input
                placeholder={t(c.companyPlaceholder, lang)}
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>{t(c.message, lang)}</label>
              <textarea
                placeholder={t(c.messagePlaceholder, lang)}
                rows={5}
                className="w-full rounded-md border border-border/50 bg-card/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors resize-none"
              />
            </div>

            <div className="flex items-center gap-3 pt-1">
              <Checkbox
                id="privacy"
                checked={agreed}
                onCheckedChange={(v) => setAgreed(v === true)}
                className="h-4 w-4 rounded-sm border-border/60 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
              />
              <label htmlFor="privacy" className="text-xs text-muted-foreground/80 leading-relaxed cursor-pointer">
                {t(c.privacy, lang)}{" "}
                <a href="/privacy" className="text-primary underline-offset-4 hover:underline">
                  {t(c.privacyLink, lang)}
                </a>
                .
              </label>
            </div>

            <Button
              type="submit"
              disabled={!agreed}
              className="h-12 px-10 text-sm font-medium tracking-wide rounded-md bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-40 transition-all"
            >
              {t(c.submit, lang)}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
