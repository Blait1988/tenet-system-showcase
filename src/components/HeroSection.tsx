import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";

const HeroSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const { lang } = useLanguage();
  const h = translations.hero;

  return (
    <section className="relative min-h-screen flex items-center pt-16">
      {/* Subtle warm gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(38_25%_58%_/_0.03),_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsl(30_5%_12%_/_0.6),_transparent_50%)]" />

      <div ref={ref} className="mx-auto max-w-7xl px-6 py-28 lg:py-36 w-full">
        <div
          className={`max-w-4xl transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary mb-6">
            {t(h.label, lang)}
          </p>

          <h1 className="text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
            {t(h.headline1, lang)}
            <br />
            {t(h.headline2, lang)}
            <br />
            <span className="text-primary">{t(h.headline3, lang)}</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {t(h.sub, lang)}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#products"
              className="inline-flex h-12 items-center rounded-lg bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              {t(h.cta1, lang)}
            </a>
            <a
              href="#contact"
              className="inline-flex h-12 items-center rounded-lg border border-border/60 px-8 text-sm font-medium text-foreground transition-colors hover:bg-accent"
            >
              {t(h.cta2, lang)}
            </a>
          </div>

          <div className="mt-16 flex flex-wrap gap-10 text-xs uppercase tracking-[0.2em] text-muted-foreground/50">
            <span>{t(h.tag1, lang)}</span>
            <span>{t(h.tag2, lang)}</span>
            <span>{t(h.tag3, lang)}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
