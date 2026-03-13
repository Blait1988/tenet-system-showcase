import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  {
    num: "01",
    title: "Opportunity",
    text: "We identify verticals where technology, data or automation can create defensible competitive advantages.",
  },
  {
    num: "02",
    title: "Architecture",
    text: "We design software systems aligned with technical complexity, monetisation models and long-term scalability requirements.",
  },
  {
    num: "03",
    title: "Execution",
    text: "Rapid development cycles, controlled iteration and deployment strategies oriented toward measurable business outcomes.",
  },
  {
    num: "04",
    title: "Scale",
    text: "Every system is built with infrastructure for growth — tracking, optimisation and operational efficiency from day one.",
  },
];

const ApproachSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="approach" className="py-32 lg:py-40 border-t border-border/30">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-widest text-primary mb-4">Our Process</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            How we build products
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Every product follows the same discipline: a real problem, clean architecture,
            continuous measurement.
          </p>
        </div>

        <div className="mt-20 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.num}>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-xs font-semibold text-primary">
                  {step.num}
                </div>
                <div className="h-px flex-1 bg-border/40" />
              </div>
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
