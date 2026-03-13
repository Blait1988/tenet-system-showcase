import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const products = [
  {
    name: "Tapper",
    category: "Mobile Platform",
    description:
      "A mobile-first platform for talent discovery and performance advertising — designed to connect visibility, competition and monetisation within a scalable video ecosystem.",
    tags: ["Mobile-first", "Social Mechanics", "Performance Advertising"],
    accentVar: "--accent-tapper",
    accentClass: "bg-accent-tapper",
    borderHover: "hover:border-accent-tapper/30",
  },
  {
    name: "FinGuard",
    category: "Finance Security SaaS",
    description:
      "Anti-fraud BEC software for finance teams and SMEs, featuring automated IBAN verification, document OCR and cryptographic proof layers to secure payment workflows.",
    tags: ["BEC Protection", "IBAN Verification", "OCR & Proof Layer"],
    accentVar: "--accent-finguard",
    accentClass: "bg-accent-finguard",
    borderHover: "hover:border-accent-finguard/30",
  },
  {
    name: "Delta Terminal",
    category: "Quantitative Monitoring System",
    description:
      "A live monitoring and statistical reporting system built to transform quantitative signals into structured, measurable operational frameworks.",
    tags: ["Live Monitoring", "Statistical Reporting", "Quant Framework"],
    accentVar: "--accent-delta",
    accentClass: "bg-accent-delta",
    borderHover: "hover:border-accent-delta/30",
  },
];

const ProductsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="products" className="py-32 lg:py-40 border-t border-border/30">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-widest text-primary mb-4">Product Portfolio</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Active products</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Three products across three distinct verticals — united by a shared philosophy of
            proprietary ownership, data infrastructure and scalable architecture.
          </p>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {products.map((product, i) => (
            <div
              key={product.name}
              className={`group relative flex flex-col rounded-2xl border border-border/40 bg-card/25 p-10 transition-all duration-500 hover:bg-card/60 ${product.borderHover}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Accent bar */}
              <div className={`h-1 w-10 rounded-full ${product.accentClass} opacity-60 mb-6`} />

              <p className="text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
                {product.category}
              </p>

              <h3 className="mt-2 text-2xl font-bold">{product.name}</h3>

              <p className="mt-5 flex-1 text-sm leading-relaxed text-muted-foreground">
                {product.description}
              </p>

              {/* Tags */}
              <div className="mt-8 flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border/40 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-8">
                <span className="inline-flex items-center text-sm font-medium text-primary transition-all group-hover:gap-2">
                  Learn more
                  <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
