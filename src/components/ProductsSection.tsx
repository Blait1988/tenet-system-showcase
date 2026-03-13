import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const products = [
  {
    name: "Tapper",
    category: "Mobile Platform",
    description:
      "Piattaforma mobile-first per talent discovery e performance advertising, progettata per unire visibilità, competizione e monetizzazione in un ecosistema video ad alta scalabilità.",
    tags: ["Mobile-first", "Social Mechanics", "Performance Advertising"],
  },
  {
    name: "FinGuard",
    category: "Finance Security SaaS",
    description:
      "Software antifrode BEC per finance team e PMI, con verifica IBAN automatizzata, OCR documentale e prove crittografiche per rafforzare i processi di pagamento.",
    tags: ["BEC Protection", "IBAN Verification", "OCR & Proof Layer"],
  },
  {
    name: "Delta Terminal",
    category: "Quantitative Monitoring System",
    description:
      "Sistema di monitoraggio live e reporting statistico progettato per trasformare segnali quantitativi in framework operativi ordinati e misurabili.",
    tags: ["Live Monitoring", "Statistical Reporting", "Quant Framework"],
  },
];

const ProductsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="products" className="py-28 lg:py-36">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Active products</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Tre prodotti, tre verticali diversi, una sola filosofia di costruzione: dati, sistema,
            scalabilità.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {products.map((product, i) => (
            <div
              key={product.name}
              className="group relative flex flex-col rounded-xl border border-border/60 bg-card/40 p-8 transition-all duration-500 hover:border-primary/40 hover:bg-card/80"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Category label */}
              <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-primary/70">
                {product.category}
              </span>

              <h3 className="mt-3 text-2xl font-bold">{product.name}</h3>

              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {product.description}
              </p>

              {/* Tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border/60 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6">
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
