import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-36 lg:py-48 border-t border-border/15">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="grid gap-20 lg:grid-cols-[1fr_1fr] items-start">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-primary/30" />
              <p className="text-xs font-medium uppercase tracking-[0.35em] text-primary/70">
                About
              </p>
            </div>
            <h2 className="text-4xl font-bold tracking-[-0.02em] sm:text-5xl">The company</h2>

            <p className="mt-8 text-lg leading-[1.7] text-muted-foreground font-light">
              Tenet System was founded to build proprietary software products with a concrete logic:
              combining business vision, technical execution and scalable models into self-sustaining
              digital assets.
            </p>
          </div>

          <div className="lg:pt-16">
            <div className="rounded-2xl border border-border/15 bg-card/20 p-12 card-glow">
              <p className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground/60 mb-6">Founder</p>
              <p className="text-xl font-semibold text-foreground mb-4">Fabrizio Cerulli</p>
              <p className="text-sm leading-[1.8] text-muted-foreground font-light">
                Tenet System brings together vertical software products developed with a data-driven
                approach and a clear focus on execution and operational scalability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
