import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";

const accentConfig = [
  { accentClass: "bg-accent-tapper", textAccent: "text-accent-tapper", borderAccent: "border-accent-tapper/40", bgSubtle: "bg-accent-tapper/5" },
  { accentClass: "bg-accent-finguard", textAccent: "text-accent-finguard", borderAccent: "border-accent-finguard/40", bgSubtle: "bg-accent-finguard/5" },
  { accentClass: "bg-accent-delta", textAccent: "text-accent-delta", borderAccent: "border-accent-delta/40", bgSubtle: "bg-accent-delta/5" },
];

const ProductsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { lang } = useLanguage();
  const p = translations.products;

  return (
    <section id="products" className="py-28 lg:py-36 border-t border-border/20">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary mb-5">
          {t(p.label, lang)}
        </p>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {t(p.heading, lang)}
        </h2>
        <p className="mt-4 max-w-2xl text-base text-secondary-foreground leading-relaxed">
          {t(p.sub, lang)}
        </p>

        <div className="mt-16">
          {p.items.map((product, i) => {
            const accent = accentConfig[i];
            return (
              <div
                key={product.name}
                className={`group grid gap-8 lg:grid-cols-[240px_1fr_auto] items-start py-10 lg:py-12 ${
                  i !== p.items.length - 1 ? "border-b border-border/30" : ""
                } ${i === 0 ? "border-t border-border/30" : ""}`}
              >
                {/* Left — name + accent bar */}
                <div className="flex items-start gap-4">
                  <div className={`mt-1.5 h-10 w-1.5 rounded-full ${accent.accentClass} opacity-70 transition-opacity group-hover:opacity-100`} />
                  <div>
                    <h3 className={`text-xl font-bold tracking-tight transition-colors duration-300 ${accent.textAccent} opacity-85 group-hover:opacity-100`}>
                      {product.url ? (
                        <a href={product.url} target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4">
                          {product.name}
                        </a>
                      ) : product.name}
                    </h3>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-muted-foreground/70 font-medium">
                      {t(product.category, lang)}
                    </p>
                  </div>
                </div>

                {/* Center — description */}
                <p className="text-sm leading-[1.75] text-secondary-foreground lg:pt-0.5 max-w-xl">
                  {t(product.description, lang)}
                </p>

                {/* Right — tags */}
                <div className="flex flex-wrap gap-2 lg:justify-end lg:pt-0.5">
                  {(product.tags[lang] || product.tags.en).map((tag) => (
                    <span
                      key={tag}
                      className={`rounded-full border px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground/80 ${accent.borderAccent} ${accent.bgSubtle}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
