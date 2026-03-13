import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const EcosystemVisual = () => (
  <div className="relative w-full max-w-lg mx-auto">
    <div className="relative w-full aspect-[4/3]">
      {/* Central company block */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-border bg-card px-8 py-5 shadow-lg shadow-primary/5">
        <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">Parent Company</p>
        <p className="mt-1 text-lg font-semibold text-foreground">Tenet System</p>
      </div>

      {/* Product nodes */}
      <div className="absolute top-0 left-0 rounded-xl border border-accent-tapper/20 bg-card/70 px-5 py-3">
        <div className="h-1 w-6 rounded-full bg-accent-tapper/50 mb-2" />
        <p className="text-xs font-medium text-foreground/80">Tapper</p>
        <p className="text-[10px] text-muted-foreground">Mobile Platform</p>
      </div>

      <div className="absolute top-0 right-0 rounded-xl border border-accent-finguard/20 bg-card/70 px-5 py-3">
        <div className="h-1 w-6 rounded-full bg-accent-finguard/50 mb-2" />
        <p className="text-xs font-medium text-foreground/80">FinGuard</p>
        <p className="text-[10px] text-muted-foreground">Finance Security</p>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-xl border border-accent-delta/20 bg-card/70 px-5 py-3">
        <div className="h-1 w-6 rounded-full bg-accent-delta/50 mb-2" />
        <p className="text-xs font-medium text-foreground/80">Delta Terminal</p>
        <p className="text-[10px] text-muted-foreground">Quant Systems</p>
      </div>

      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 300" fill="none">
        <line x1="80" y1="65" x2="170" y2="130" stroke="hsl(255 50% 62% / 0.12)" strokeWidth="1" />
        <line x1="320" y1="65" x2="230" y2="130" stroke="hsl(195 55% 46% / 0.12)" strokeWidth="1" />
        <line x1="200" y1="175" x2="200" y2="235" stroke="hsl(152 50% 42% / 0.10)" strokeWidth="1" />
      </svg>
    </div>
  </div>
);

const HeroSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section className="relative min-h-screen flex items-center pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-transparent" />

      <div ref={ref} className="mx-auto max-w-7xl px-6 py-24 lg:py-36 w-full">
        <div className="grid gap-20 lg:grid-cols-2 items-center">
          {/* Text */}
          <div
            className={`space-y-10 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.5rem]">
              Building proprietary software systems across high-value verticals.
            </h1>

            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
              Tenet System is the software company behind a growing portfolio of proprietary digital
              products across mobile, finance security and quantitative systems.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#products"
                className="inline-flex h-12 items-center rounded-lg bg-primary px-7 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Explore our products
              </a>
              <a
                href="#contact"
                className="inline-flex h-12 items-center rounded-lg border border-border px-7 text-sm font-medium text-foreground transition-colors hover:bg-accent"
              >
                Get in touch
              </a>
            </div>

            {/* Labels */}
            <div className="flex flex-wrap gap-x-8 gap-y-3 pt-2">
              {["3 Active Products", "Proprietary Software", "Vertical Systems", "Built for Scale"].map((label) => (
                <span key={label} className="text-xs uppercase tracking-widest text-muted-foreground">
                  {label}
                </span>
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
