import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";

const ApproachSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { lang } = useLanguage();
  const a = translations.approach;

  return (
    <section id="approach" className="py-28 lg:py-36 border-t border-border/20">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary mb-5">
            {t(a.label, lang)}
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t(a.heading, lang)}
          </h2>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            {t(a.sub, lang)}
          </p>
        </div>

        <div className="grid gap-0 sm:grid-cols-2">
          {a.pillars.map((pillar, i) => (
            <div
              key={i}
              className={`py-10 px-0 sm:px-10 ${
                i < 2 ? "border-b border-border/20" : ""
              } ${i % 2 === 0 ? "sm:border-r sm:border-border/20 sm:pr-12 sm:pl-0" : "sm:pl-12 sm:pr-0"}`}
            >
              <h3 className="text-lg font-semibold tracking-tight">{t(pillar.title, lang)}</h3>
              <p className="mt-3 text-sm leading-[1.75] text-secondary-foreground">
                {t(pillar.text, lang)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
