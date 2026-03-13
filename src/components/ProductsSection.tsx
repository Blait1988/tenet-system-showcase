import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const products = [
  {
    name: "Tapper",
    category: "Mobile Platform",
    description:
      "A mobile-first platform for talent discovery and performance advertising — designed to connect visibility, competition and monetisation within a scalable video ecosystem.",
    tags: ["Mobile-first", "Social Mechanics", "Performance Advertising"],
    accentClass: "bg-accent-tapper",
    borderAccent: "group-hover:border-accent-tapper/20",
  },
  {
    name: "FinGuard",
    category: "Finance Security",
    description:
      "Anti-fraud BEC software for finance teams and SMEs, featuring automated IBAN verification, document OCR and cryptographic proof layers to secure payment workflows.",
    tags: ["BEC Protection", "IBAN Verification", "OCR & Proof Layer"],
    accentClass: "bg-accent-finguard",
    borderAccent: "group-hover:border-accent-finguard/20",
  },
  {
    name: "Delta Terminal",
    category: "Quantitative Systems",
    description:
      "A live monitoring and statistical reporting system built to transform quantitative signals into structured, measurable operational frameworks.",
    tags: ["Live Monitoring", "Statistical Reporting", "Quant Framework"],
    accentClass: "bg-accent-delta",
    borderAccent: "group-hover:border-accent-delta/20",
  },
];

const ProductsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="products" className="py-36 lg:py-48 border-t border-border/20">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary mb-6">
          Product Portfolio
        </p>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Active products
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Three products across three distinct verticals — united by proprietary
          ownership, data infrastructure and scalable architecture.
        </p>

        <div className="mt-24 space-y-0">
          {products.map((product, i) => (
            <div
              key={product.name}
              className={`group grid gap-8 lg:grid-cols-[200px_1fr_1fr] items-start py-16 ${
                i !== products.length - 1 ? "border-b border-border/20" : ""
              }`}
            >
              {/* Left — name + accent */}
              <div>
                <div className={`h-1 w-8 rounded-full ${product.accentClass} opacity-50 mb-5`} />
                <h3 className="text-2xl font-bold tracking-tight">{product.name}</h3>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {product.category}
                </p>
              </div>

              {/* Center — description */}
              <p className="text-base leading-relaxed text-muted-foreground lg:pt-7">
                {product.description}
              </p>

              {/* Right — tags */}
              <div className="flex flex-wrap gap-2 lg:justify-end lg:pt-7">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border/30 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
