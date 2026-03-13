import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  {
    num: "01",
    title: "Opportunity",
    text: "Identificazione di verticali in cui tecnologia, dati o automazione possono generare vantaggio reale.",
  },
  {
    num: "02",
    title: "System Design",
    text: "Progettazione di architetture software coerenti con complessità tecnica, monetizzazione e scalabilità.",
  },
  {
    num: "03",
    title: "Execution",
    text: "Sviluppo rapido, iterazione controllata, deployment orientato ai risultati.",
  },
  {
    num: "04",
    title: "Measurement",
    text: "Ogni sistema viene costruito con logiche di tracking, reporting e ottimizzazione continua.",
  },
];

const ApproachSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="approach" className="py-28 lg:py-36 border-t border-border/40">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            How Tenet System builds products
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Ogni prodotto nasce dalla stessa disciplina: problema reale, architettura pulita,
            misurazione continua.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className="relative"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <span className="font-mono text-4xl font-bold text-primary/15">{step.num}</span>
              <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
