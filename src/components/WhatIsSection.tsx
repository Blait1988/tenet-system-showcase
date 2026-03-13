import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const cards = [
  {
    title: "Proprietary by design",
    text: "Costruiamo asset software proprietari invece di dipendere da modelli di puro servizio.",
  },
  {
    title: "Vertical systems",
    text: "Ogni prodotto nasce per risolvere problemi specifici in mercati distinti, con architetture e logiche su misura.",
  },
  {
    title: "Execution first",
    text: "Dalla strategia al deployment, il focus è sulla costruzione di sistemi che possano operare, misurare e scalare.",
  },
];

const WhatIsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-28 lg:py-36">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            A software company built around proprietary products.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Tenet System è la struttura attraverso cui nascono, si sviluppano e si scalano prodotti
            digitali proprietari. Ogni prodotto viene costruito con un approccio orientato a dati,
            execution, automazione e sostenibilità del modello.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className="rounded-xl border border-border/60 bg-card/50 p-8 transition-all duration-300 hover:border-primary/30 hover:bg-card"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <h3 className="text-lg font-semibold">{card.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;
