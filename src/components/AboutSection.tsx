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
            <a
              href="https://www.linkedin.com/in/fabriziocerulli/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="#0A66C2">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
