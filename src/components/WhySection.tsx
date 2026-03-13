import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const points = [
  {
    title: "Proprietary products, not client work",
    text: "Every product we build is owned by Tenet System. We invest in our own software assets rather than building for others.",
  },
  {
    title: "Vertical focus, not generic software",
    text: "Each product targets a specific market with tailored architecture — not one-size-fits-all solutions.",
  },
  {
    title: "Data and automation at the core",
    text: "Our systems are built around data infrastructure and process automation as foundational capabilities.",
  },
  {
    title: "Commercial logic, not just technical elegance",
    text: "Every architectural decision considers business viability, monetisation and market positioning alongside technical merit.",
  },
  {
    title: "Structured for long-term scaling",
    text: "Products are designed from day one to grow — in users, data volume, features and market reach.",
  },
];

const WhySection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-36 lg:py-48">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="grid gap-20 lg:grid-cols-[1fr_1.4fr] items-start">
          <div className="lg:sticky lg:top-32">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-primary/30" />
              <p className="text-xs font-medium uppercase tracking-[0.35em] text-primary/70">
                Our Thesis
              </p>
            </div>
            <h2 className="text-4xl font-bold tracking-[-0.02em] sm:text-5xl leading-tight">
              Not an agency.
              <br />
              Not a generic startup.
            </h2>
            <p className="mt-5 text-2xl font-semibold text-gradient-gold">A product engine.</p>
            <p className="mt-8 text-base text-muted-foreground leading-[1.7] font-light">
              Tenet System exists to build, own and scale proprietary software
              products — each one designed as an independent, defensible business
              asset.
            </p>
          </div>

          <div className={`stagger-reveal ${isVisible ? "is-visible" : ""}`}>
            {points.map((point, i) => (
              <div
                key={point.title}
                className={`group py-8 ${i !== points.length - 1 ? "border-b border-border/15" : ""}`}
              >
                <h3 className="text-base font-semibold transition-colors duration-300 group-hover:text-primary">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm leading-[1.8] text-muted-foreground font-light max-w-lg">
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

export default WhySection;
