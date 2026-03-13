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
    <section id="approach" className="py-36 lg:py-48 border-t border-border/20">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-2xl mb-24">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary mb-6">
            Our Process
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            How we build products
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Every product follows the same discipline: a real problem, clean
            architecture, continuous measurement.
          </p>
        </div>

        <div className="grid gap-0 sm:grid-cols-2">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className={`py-12 px-0 sm:px-10 ${
                i < 2 ? "border-b border-border/20" : ""
              } ${i % 2 === 0 ? "sm:border-r sm:border-border/20 sm:pr-14 sm:pl-0" : "sm:pl-14 sm:pr-0"}`}
            >
              <h3 className="text-xl font-semibold tracking-tight">{pillar.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
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
