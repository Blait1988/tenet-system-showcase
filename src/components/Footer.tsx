import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";

const Footer = () => {
  const { lang } = useLanguage();
  const f = translations.footer;

  return (
    <footer className="border-t border-border/30 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <span className="text-sm font-semibold tracking-[0.2em] text-foreground">
              TENET SYSTEM
            </span>
            <p className="mt-1.5 text-xs text-muted-foreground tracking-wide">
              {t(f.tagline, lang)}
            </p>
          </div>

          <div className="flex flex-wrap gap-8 text-xs text-muted-foreground tracking-wide">
            <a href="#products" className="transition-colors hover:text-foreground">{t(f.products, lang)}</a>
            <a href="#contact" className="transition-colors hover:text-foreground">{t(f.contact, lang)}</a>
            <Link to="/privacy" className="transition-colors hover:text-foreground">{t(f.privacy, lang)}</Link>
            <Link to="/terms" className="transition-colors hover:text-foreground">{t(f.terms, lang)}</Link>
          </div>
        </div>

        <div className="mt-12 border-t border-border/20 pt-6">
          <p className="text-[11px] tracking-wide text-muted-foreground/40">
            {t(f.bottom, lang)}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
