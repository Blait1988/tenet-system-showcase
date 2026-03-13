import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-28 lg:py-36 border-t border-border/40">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About</h2>

          <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
            Tenet System nasce dall'idea di costruire prodotti software proprietari con una logica
            concreta: combinare visione di business, execution tecnica e modelli scalabili.
          </p>

          <div className="mt-10 rounded-xl border border-border/60 bg-card/40 p-8">
            <p className="text-base leading-relaxed text-muted-foreground">
              Fondata da <span className="font-medium text-foreground">Fabrizio Cerulli</span>,
              Tenet System riunisce sotto un'unica struttura prodotti verticali sviluppati con
              approccio data-driven e orientamento all'execution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
