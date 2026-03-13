import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { termsTranslations } from "@/i18n/translations-legal";
import type { Lang } from "@/i18n/translations";

const tl = (obj: Record<Lang, string>, lang: Lang) => obj[lang];

const TermsOfService = () => {
  const { lang } = useLanguage();
  const ts = termsTranslations;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-6 py-32">
        <Link
          to="/"
          className="font-mono text-sm tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors"
        >
          TENET SYSTEM
        </Link>

        <h1 className="mt-12 text-4xl font-bold tracking-tight">
          {tl(ts.title, lang)}
        </h1>
        <p className="mt-2 text-base text-muted-foreground">
          {tl(ts.subtitle, lang)}
        </p>
        <p className="mt-1 font-mono text-xs uppercase tracking-wider text-muted-foreground/60">
          {tl(ts.lastUpdated, lang)}
        </p>

        <div className="mt-12 space-y-10 text-sm leading-relaxed text-muted-foreground">
          {ts.sections.map((s, i) => (
            <section key={i}>
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-foreground">
                {tl(s.heading, lang)}
              </h2>
              <p className="whitespace-pre-line">{tl(s.body, lang)}</p>
            </section>
          ))}
        </div>

        <div className="mt-16 border-t border-border/40 pt-8">
          <Link to="/" className="text-sm text-primary hover:underline underline-offset-4">
            {lang === "en" ? "Back to homepage" : "Torna alla homepage"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
