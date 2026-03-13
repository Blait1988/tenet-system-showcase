import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-32 lg:py-40 border-t border-border/30">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-widest text-primary mb-4">About</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">The company</h2>

          <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
            Tenet System was founded to build proprietary software products with a concrete logic:
            combining business vision, technical execution and scalable models into self-sustaining
            digital assets.
          </p>

          <div className="mt-12 rounded-2xl border border-border/40 bg-card/20 p-10">
            <p className="text-base leading-relaxed text-muted-foreground">
              Founded by <span className="font-medium text-foreground">Fabrizio Cerulli</span>,
              Tenet System brings together vertical software products developed with a data-driven
              approach and a clear focus on execution and operational scalability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
