import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";

const WhySection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { lang } = useLanguage();
  const th = translations.thesis;

  return (
    <section className="py-28 lg:py-36">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr] items-start">
          <div className="lg:sticky lg:top-32">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary mb-5">
              {t(th.label, lang)}
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl leading-tight">
              {t(th.heading1, lang)}
              <br />
              {t(th.heading2, lang)}
            </h2>
            <p className="mt-4 text-xl font-medium text-primary">{t(th.accent, lang)}</p>
            <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
              {t(th.sub, lang)}
            </p>
          </div>

          <div>
            {th.points.map((point, i) => (
              <div
                key={i}
                className={`py-7 ${i !== th.points.length - 1 ? "border-b border-border/20" : ""}`}
              >
                <h3 className="text-sm font-semibold">{t(point.title, lang)}</h3>
                <p className="mt-2 text-sm leading-[1.75] text-secondary-foreground max-w-lg">
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

export default WhySection;
