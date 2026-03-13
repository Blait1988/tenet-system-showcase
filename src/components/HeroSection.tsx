import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const metrics = [
  { label: "Active Products", value: "3" },
  { label: "SaaS & Data Systems", value: "" },
  { label: "Automation-Driven", value: "" },
  { label: "Built for Scale", value: "" },
];

const EcosystemVisual = () => (
  <div className="relative w-full max-w-md mx-auto lg:mx-0">
    {/* Central hub */}
    <div className="relative mx-auto w-full aspect-square max-w-sm">
      <div className="absolute inset-[30%] rounded-xl border border-primary/30 bg-card/80 backdrop-blur flex items-center justify-center">
        <span className="font-mono text-xs text-primary tracking-wider">TENET</span>
      </div>

      {/* Product nodes */}
      {[
        { name: "Tapper", pos: "top-0 left-1/2 -translate-x-1/2", color: "border-primary/40" },
        { name: "FinGuard", pos: "bottom-4 left-4", color: "border-primary/30" },
        { name: "Delta Terminal", pos: "bottom-4 right-4", color: "border-primary/20" },
      ].map((product) => (
        <div
          key={product.name}
          className={`absolute ${product.pos} rounded-lg border ${product.color} bg-card/60 px-4 py-3 backdrop-blur`}
        >
          <span className="font-mono text-[10px] text-muted-foreground tracking-wider uppercase">
            {product.name}
          </span>
        </div>
      ))}

      {/* Connection lines (SVG) */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 300" fill="none">
        <line x1="150" y1="90" x2="150" y2="40" stroke="hsl(152 60% 42% / 0.15)" strokeWidth="1" />
        <line x1="120" y1="170" x2="60" y2="240" stroke="hsl(152 60% 42% / 0.12)" strokeWidth="1" />
        <line x1="180" y1="170" x2="240" y2="240" stroke="hsl(152 60% 42% / 0.10)" strokeWidth="1" />
      </svg>
    </div>
  </div>
);

const HeroSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section className="relative min-h-screen flex items-center pt-16">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.02] via-transparent to-transparent" />

      <div ref={ref} className="mx-auto max-w-7xl px-6 py-20 lg:py-32 w-full">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Text */}
          <div
            className={`space-y-8 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Software systems
              <br />
              <span className="text-primary">built for scale.</span>
            </h1>

            <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
              Progettiamo, sviluppiamo e portiamo sul mercato prodotti verticali capaci di unire
              tecnologia, execution e modelli di business difendibili.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#products"
                className="inline-flex h-11 items-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Scopri i prodotti
              </a>
              <a
                href="#contact"
                className="inline-flex h-11 items-center rounded-md border border-border px-6 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                Contattaci
              </a>
            </div>

            {/* Metrics */}
            <div className="flex flex-wrap gap-6 pt-4">
              {metrics.map((m) => (
                <div key={m.label} className="flex items-center gap-2">
                  {m.value && (
                    <span className="font-mono text-2xl font-semibold text-primary">{m.value}</span>
                  )}
                  <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    {m.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <EcosystemVisual />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
