import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const products = [
  {
    name: "Tapper",
    category: "Mobile Platform",
    description:
      "A mobile-first platform for talent discovery and performance advertising — designed to connect visibility, competition and monetisation within a scalable video ecosystem.",
    tags: ["Mobile-first", "Social Mechanics", "Performance Advertising"],
    accentClass: "bg-accent-tapper",
    glowColor: "255 50% 62%",
  },
  {
    name: "FinGuard",
    category: "Finance Security",
    description:
      "Anti-fraud BEC software for finance teams and SMEs, featuring automated IBAN verification, document OCR and cryptographic proof layers to secure payment workflows.",
    tags: ["BEC Protection", "IBAN Verification", "OCR & Proof Layer"],
    accentClass: "bg-accent-finguard",
    glowColor: "195 55% 46%",
  },
  {
    name: "Delta Terminal",
    category: "Quantitative Systems",
    description:
      "A live monitoring and statistical reporting system built to transform quantitative signals into structured, measurable operational frameworks.",
    tags: ["Live Monitoring", "Statistical Reporting", "Quant Framework"],
    accentClass: "bg-accent-delta",
    glowColor: "152 50% 42%",
  },
];

const ProductsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="products" className="py-36 lg:py-48 border-t border-border/15">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px w-8 bg-primary/30" />
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-primary/70">
            Product Portfolio
          </p>
        </div>
        <h2 className="text-4xl font-bold tracking-[-0.02em] sm:text-5xl">
          Active products
        </h2>
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground font-light leading-relaxed">
          Three products across three distinct verticals — united by proprietary
          ownership, data infrastructure and scalable architecture.
        </p>

        <div className={`mt-24 grid gap-6 lg:grid-cols-3 stagger-reveal ${isVisible ? "is-visible" : ""}`}>
          {products.map((product) => (
            <div
              key={product.name}
              className="group relative rounded-2xl border border-border/20 bg-card/30 p-10 lg:p-12 card-glow overflow-hidden"
            >
              {/* Top accent line */}
              <div className={`h-[2px] w-12 rounded-full ${product.accentClass} opacity-40 mb-8 transition-all duration-500 group-hover:w-20 group-hover:opacity-70`} />

              <p className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground mb-2">
                {product.category}
              </p>

              <h3 className="text-2xl font-bold tracking-tight">{product.name}</h3>

              <p className="mt-5 text-sm leading-[1.8] text-muted-foreground font-light">
                {product.description}
              </p>

              {/* Tags */}
              <div className="mt-8 flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border/20 bg-background/50 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground/70 transition-colors group-hover:border-border/40"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Hover glow effect */}
              <div
                className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full opacity-0 blur-[60px] transition-opacity duration-700 group-hover:opacity-100"
                style={{ background: `hsl(${product.glowColor} / 0.08)` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
