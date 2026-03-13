import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const cards = [
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
    <section className="py-32 lg:py-40">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-widest text-primary mb-4">Who we are</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            A software company built around proprietary products.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Tenet System is the structure through which proprietary digital products are conceived,
            developed and scaled. Every product is built with a disciplined approach to data,
            execution, automation and sustainable business models.
          </p>
        </div>

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className="rounded-2xl border border-border/50 bg-card/30 p-10 transition-all duration-300 hover:border-primary/20 hover:bg-card/60"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <h3 className="text-lg font-semibold">{card.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;
