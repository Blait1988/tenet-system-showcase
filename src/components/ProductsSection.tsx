import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";

const accentConfig = [
  { accentClass: "bg-accent-tapper", textAccent: "group-hover:text-accent-tapper", borderAccent: "border-accent-tapper/30" },
  { accentClass: "bg-accent-finguard", textAccent: "group-hover:text-accent-finguard", borderAccent: "border-accent-finguard/30" },
  { accentClass: "bg-accent-delta", textAccent: "group-hover:text-accent-delta", borderAccent: "border-accent-delta/30" },
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
        <p className="mt-4 max-w-2xl text-base text-muted-foreground leading-relaxed">
          {t(p.sub, lang)}
        </p>

        <div className="mt-16 space-y-0">
          {p.items.map((product, i) => {
            const accent = accentConfig[i];
            return (
              <div
                key={product.name}
                className={`group grid gap-6 lg:grid-cols-[220px_1fr_auto] items-start py-12 ${
                  i !== p.items.length - 1 ? "border-b border-border/20" : ""
                }`}
              >
                {/* Left — name + accent */}
                <div className="flex items-start gap-4">
                  <div className={`mt-2 h-8 w-1 rounded-full ${accent.accentClass} opacity-60`} />
                  <div>
                    <h3 className={`text-xl font-bold tracking-tight transition-colors ${accent.textAccent}`}>
                      {product.name}
                    </h3>
                    <p className="mt-0.5 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      {t(product.category, lang)}
                    </p>
                  </div>
                </div>

                {/* Center — description */}
                <p className="text-sm leading-relaxed text-muted-foreground lg:pt-1">
                  {t(product.description, lang)}
                </p>

                {/* Right — tags */}
                <div className="flex flex-wrap gap-2 lg:justify-end lg:pt-1">
                  {(product.tags[lang] || product.tags.en).map((tag) => (
                    <span
                      key={tag}
                      className={`rounded-full border px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground ${accent.borderAccent}`}
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
