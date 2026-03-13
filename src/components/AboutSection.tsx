import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";
import { Linkedin } from "lucide-react";

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { lang } = useLanguage();
  const a = translations.about;

  return (
    <section id="about" className="py-28 lg:py-36 border-t border-border/30">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="grid gap-16 lg:grid-cols-[1.2fr_1fr] items-start">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary mb-5">
              {t(a.label, lang)}
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {t(a.heading, lang)}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              {t(a.description, lang)}
            </p>
          </div>

          <div className="rounded-xl border border-border/40 bg-card/30 p-8 lg:p-10">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary mb-4">
              {t(a.founderLabel, lang)}
            </p>
            <p className="text-xl font-bold tracking-tight">{a.founderName}</p>
            <div className="mt-1 h-px w-10 bg-primary/40" />
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {t(a.founderBio, lang)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
