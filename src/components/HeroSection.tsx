import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const HeroSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section className="relative min-h-screen flex items-center pt-16">
      {/* Warm gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(38_25%_58%_/_0.04),_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsl(30_5%_15%_/_0.5),_transparent_60%)]" />

      <div ref={ref} className="mx-auto max-w-7xl px-6 py-32 lg:py-44 w-full">
        <div
          className={`max-w-4xl transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Label */}
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary mb-8">
            Software Company
          </p>

          {/* Headline */}
          <h1 className="text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
            Building proprietary
            <br />
            software systems across
            <br />
            <span className="text-primary">high-value verticals.</span>
          </h1>

          {/* Subheadline */}
          <p className="mt-10 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Tenet System is the software company behind a growing portfolio of
            proprietary digital products across mobile, finance security and
            quantitative systems.
          </p>

          {/* CTAs */}
          <div className="mt-12 flex flex-wrap gap-5">
            <a
              href="#products"
              className="inline-flex h-13 items-center rounded-lg bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Explore products
            </a>
            <a
              href="#contact"
              className="inline-flex h-13 items-center rounded-lg border border-border/60 px-8 text-sm font-medium text-foreground transition-colors hover:bg-accent"
            >
              Get in touch
            </a>
          </div>

          {/* Labels */}
          <div className="mt-20 flex flex-wrap gap-12 text-xs uppercase tracking-[0.2em] text-muted-foreground/60">
            <span>3 Active Products</span>
            <span>Proprietary Software</span>
            <span>Vertical Systems</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
