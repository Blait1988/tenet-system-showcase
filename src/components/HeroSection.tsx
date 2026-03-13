import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const HeroSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.05);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden grain-overlay">
      {/* Animated gradient orbs */}
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="hero-orb hero-orb-3" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      <div ref={ref} className="relative mx-auto max-w-7xl px-6 py-36 lg:py-48 w-full">
        <div className={`stagger-reveal ${isVisible ? "is-visible" : ""}`}>
          {/* Label */}
          <div>
            <p className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.35em] text-primary/70 mb-10">
              <span className="h-px w-8 bg-primary/30" />
              Software Company
            </p>
          </div>

          {/* Headline */}
          <div>
            <h1 className="text-5xl font-bold leading-[1.05] tracking-[-0.02em] sm:text-6xl lg:text-[5.5rem]">
              Building proprietary
              <br className="hidden sm:block" />
              software systems
              <br className="hidden sm:block" />
              <span className="text-gradient-gold">across high-value verticals.</span>
            </h1>
          </div>

          {/* Subheadline */}
          <div>
            <p className="mt-10 max-w-xl text-lg leading-[1.7] text-muted-foreground font-light">
              Tenet System is the software company behind a growing portfolio of
              proprietary digital products across mobile, finance security and
              quantitative systems.
            </p>
          </div>

          {/* CTAs */}
          <div>
            <div className="mt-14 flex flex-wrap items-center gap-6">
              <a
                href="#products"
                className="group relative inline-flex h-14 items-center overflow-hidden rounded-full bg-primary px-10 text-sm font-medium text-primary-foreground transition-all duration-500 hover:shadow-[0_0_40px_-10px_hsl(var(--glow-primary)_/_0.4)]"
              >
                <span className="relative z-10">Explore products</span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </a>
              <a
                href="#contact"
                className="inline-flex h-14 items-center rounded-full border border-border/40 px-10 text-sm font-medium text-foreground/80 transition-all duration-400 hover:border-primary/30 hover:text-foreground hover:bg-primary/5"
              >
                Get in touch
              </a>
            </div>
          </div>

          {/* Bottom labels with animated line */}
          <div>
            <div className="mt-28 flex items-center gap-8">
              <div className="h-px w-16 bg-gradient-to-r from-primary/40 to-transparent shimmer-line" />
              <div className="flex flex-wrap gap-10 text-[11px] uppercase tracking-[0.25em] text-muted-foreground/50 font-medium">
                <span>3 Active Products</span>
                <span>Proprietary Software</span>
                <span>Vertical Systems</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
