import { useState, FormEvent } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="py-36 lg:py-48 border-t border-border/15">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="grid gap-20 lg:grid-cols-2">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-primary/30" />
              <p className="text-xs font-medium uppercase tracking-[0.35em] text-primary/70">
                Contact
              </p>
            </div>
            <h2 className="text-4xl font-bold tracking-[-0.02em] sm:text-5xl">Let's talk</h2>
            <p className="mt-5 text-lg text-muted-foreground font-light leading-[1.7]">
              For partnerships, selected enquiries or to learn more about Tenet System's product portfolio.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="text-[13px] font-medium text-foreground/80">Name</label>
                <Input placeholder="Your name" className="bg-card/30 border-border/20 h-12 rounded-xl focus:border-primary/40 transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-[13px] font-medium text-foreground/80">Email</label>
                <Input type="email" placeholder="you@company.com" className="bg-card/30 border-border/20 h-12 rounded-xl focus:border-primary/40 transition-colors" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[13px] font-medium text-foreground/80">Company / Project</label>
              <Input placeholder="Company or project name" className="bg-card/30 border-border/20 h-12 rounded-xl focus:border-primary/40 transition-colors" />
            </div>

            <div className="space-y-2">
              <label className="text-[13px] font-medium text-foreground/80">Message</label>
              <Textarea
                placeholder="Tell us about your needs..."
                rows={5}
                className="bg-card/30 border-border/20 rounded-xl resize-none focus:border-primary/40 transition-colors"
              />
            </div>

            <div className="flex items-start gap-3">
              <Checkbox
                id="privacy"
                checked={agreed}
                onCheckedChange={(v) => setAgreed(v === true)}
                className="mt-0.5"
              />
              <label htmlFor="privacy" className="text-sm text-muted-foreground leading-relaxed cursor-pointer font-light">
                I agree to the processing of my data in accordance with the{" "}
                <a href="/privacy" className="text-primary underline-offset-4 hover:underline">
                  Privacy Policy
                </a>
                .
              </label>
            </div>

            <button
              type="submit"
              disabled={!agreed}
              className="inline-flex h-13 items-center rounded-full bg-primary px-10 text-sm font-medium text-primary-foreground transition-all duration-500 hover:shadow-[0_0_40px_-10px_hsl(var(--glow-primary)_/_0.4)] disabled:opacity-30 disabled:cursor-not-allowed"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
