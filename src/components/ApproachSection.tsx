import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const pillars = [
  {
    title: "Opportunity",
    text: "We identify verticals where technology, data or automation can create defensible competitive advantages.",
  },
  {
    title: "Architecture",
    text: "We design software systems aligned with technical complexity, monetisation models and long-term scalability requirements.",
  },
  {
    title: "Execution",
    text: "Rapid development cycles, controlled iteration and deployment strategies oriented toward measurable business outcomes.",
  },
  {
    title: "Scale",
    text: "Every system is built with infrastructure for growth — tracking, optimisation and operational efficiency from day one.",
  },
];

const ApproachSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="approach" className="py-36 lg:py-48 border-t border-border/15">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-2xl mb-24">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-primary/30" />
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-primary/70">
              Our Process
            </p>
          </div>
          <h2 className="text-4xl font-bold tracking-[-0.02em] sm:text-5xl">
            How we build products
          </h2>
          <p className="mt-5 text-lg text-muted-foreground font-light leading-relaxed">
            Every product follows the same discipline: a real problem, clean
            architecture, continuous measurement.
          </p>
        </div>

        <div className={`grid gap-0 sm:grid-cols-2 stagger-reveal ${isVisible ? "is-visible" : ""}`}>
          {pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className={`group py-14 px-0 sm:px-12 transition-colors duration-300 ${
                i < 2 ? "border-b border-border/15" : ""
              } ${i % 2 === 0 ? "sm:border-r sm:border-border/15 sm:pr-16 sm:pl-0" : "sm:pl-16 sm:pr-0"}`}
            >
              <h3 className="text-2xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-primary">
                {pillar.title}
              </h3>
              <p className="mt-5 text-sm leading-[1.8] text-muted-foreground font-light">
                {pillar.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
