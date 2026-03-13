import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const points = [
  {
    title: "Proprietary by design",
    text: "We build and own every product. No client work, no outsourcing — only proprietary software assets designed for long-term value.",
  },
  {
    title: "Vertical focus",
    text: "Each product targets a specific market with purpose-built architecture, data models and business logic tailored to real industry problems.",
  },
  {
    title: "Execution-driven",
    text: "From concept to deployment, every decision is guided by measurable outcomes, operational efficiency and scalable infrastructure.",
  },
];

const WhatIsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-36 lg:py-48">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="grid gap-20 lg:grid-cols-[1fr_1fr] items-start">
          {/* Left — statement */}
          <div className="lg:sticky lg:top-32">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-primary/30" />
              <p className="text-xs font-medium uppercase tracking-[0.35em] text-primary/70">
                Who we are
              </p>
            </div>
            <h2 className="text-4xl font-bold tracking-[-0.02em] sm:text-5xl leading-[1.1]">
              A software company built around
              <br className="hidden lg:block" />
              <span className="text-gradient-gold">proprietary products.</span>
            </h2>
            <p className="mt-8 text-lg leading-[1.7] text-muted-foreground font-light">
              Tenet System is the structure through which proprietary digital
              products are conceived, developed and scaled.
            </p>
          </div>

          {/* Right — editorial list */}
          <div className={`stagger-reveal ${isVisible ? "is-visible" : ""}`}>
            {points.map((point, i) => (
              <div
                key={point.title}
                className={`group py-10 ${i !== points.length - 1 ? "border-b border-border/15" : ""}`}
              >
                <h3 className="text-lg font-semibold transition-colors duration-300 group-hover:text-primary">
                  {point.title}
                </h3>
                <p className="mt-3 text-sm leading-[1.8] text-muted-foreground font-light max-w-md">
                  {point.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;
