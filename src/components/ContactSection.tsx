import { useState, FormEvent } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Placeholder for future backend integration
  };

  return (
    <section id="contact" className="py-28 lg:py-36 border-t border-border/40">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Let's talk</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Per partnership, richieste selezionate o approfondimenti sui prodotti Tenet System.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Name</label>
                <Input placeholder="Your name" className="bg-card/60 border-border/60" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Email</label>
                <Input type="email" placeholder="you@company.com" className="bg-card/60 border-border/60" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Company / Project</label>
              <Input placeholder="Company or project name" className="bg-card/60 border-border/60" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Message</label>
              <Textarea
                placeholder="Tell us about your needs..."
                rows={5}
                className="bg-card/60 border-border/60 resize-none"
              />
            </div>

            <div className="flex items-start gap-3">
              <Checkbox
                id="privacy"
                checked={agreed}
                onCheckedChange={(v) => setAgreed(v === true)}
                className="mt-0.5"
              />
              <label htmlFor="privacy" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                I agree to the processing of my data in accordance with the{" "}
                <a href="/privacy" className="text-primary underline-offset-4 hover:underline">
                  Privacy Policy
                </a>
                .
              </label>
            </div>

            <Button type="submit" disabled={!agreed} className="w-full sm:w-auto">
              Send message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
