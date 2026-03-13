import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Check } from "lucide-react";

const points = [
  "Proprietary products, not just client work",
  "Vertical focus, not generic software",
  "Data and automation at the core",
  "Built with commercial logic, not just technical elegance",
  "Structured for long-term product scaling",
];

const WhySection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-28 lg:py-36">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Not an agency.
              <br />
              Not a generic startup.
              <br />
              <span className="text-primary">A product engine.</span>
            </h2>
          </div>

          <div className="space-y-5">
            {points.map((point) => (
              <div key={point} className="flex items-start gap-4">
                <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                  <Check className="h-3.5 w-3.5 text-primary" />
                </div>
                <p className="text-base text-muted-foreground">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
