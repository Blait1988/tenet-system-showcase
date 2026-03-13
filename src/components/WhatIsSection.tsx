import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";

const WhatIsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { lang } = useLanguage();
  const w = translations.whatIs;

  return (
    <section className="py-28 lg:py-36">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="grid gap-16 lg:grid-cols-[1fr_1fr] items-start">
          <div className="lg:sticky lg:top-32">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary mb-5">
              {t(w.label, lang)}
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem] leading-[1.12]">
              {t(w.heading, lang)}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              {t(w.sub, lang)}
            </p>
          </div>

          <div>
            {w.points.map((point, i) => (
              <div
                key={i}
                className={`py-8 ${i !== w.points.length - 1 ? "border-b border-border/30" : ""}`}
              >
                <h3 className="text-base font-semibold">{t(point.title, lang)}</h3>
                <p className="mt-2.5 text-sm leading-[1.75] text-secondary-foreground max-w-md">
                  {t(point.text, lang)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;
