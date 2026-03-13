import { useState, FormEvent } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";
import { CheckCircle2, AlertCircle, Mail } from "lucide-react";

const inputClass =
  "w-full h-12 rounded-md border border-border/50 bg-card/60 px-4 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors";

const labelClass =
  "block text-[11px] font-medium uppercase tracking-[0.15em] text-muted-foreground/80 mb-2";

type FormStatus = "idle" | "sending" | "success" | "error";

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [agreed, setAgreed] = useState(false);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const { lang } = useLanguage();
  const c = translations.contact;

  const isValid = agreed && name.trim() && email.trim() && message.trim();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!isValid) return;

    setStatus("sending");

    // ----------------------------------------------------------
    // PLACEHOLDER: Replace with your backend endpoint.
    // Expected POST body: { name, email, company, message }
    // Destination: info@tenetsystem.it
    // ----------------------------------------------------------
    try {
      // Simulate network call — swap with real fetch() later
      await new Promise((resolve) => setTimeout(resolve, 1200));

      // Example real implementation:
      // const res = await fetch("https://your-endpoint.com/contact", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ name, email, company, message }),
      // });
      // if (!res.ok) throw new Error("Send failed");

      setStatus("success");
      setName("");
      setEmail("");
      setCompany("");
      setMessage("");
      setAgreed(false);
    } catch {
      setStatus("error");
    }
  };

  const resetStatus = () => setStatus("idle");

  return (
    <section id="contact" className="py-28 lg:py-36 border-t border-border/30">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] items-start">
          {/* Left column — info */}
          <div className="lg:sticky lg:top-32">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary mb-4">
              {t(c.label, lang)}
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {t(c.heading, lang)}
            </h2>
            <p className="mt-4 text-base text-secondary-foreground leading-relaxed max-w-md">
              {t(c.sub, lang)}
            </p>

            {/* Company details block */}
            <div className="mt-8 space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p className="whitespace-pre-line">{t(c.companyBlock, lang)}</p>

              <div className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-primary/70" />
                <div>
                  <span className="text-[11px] uppercase tracking-[0.1em] text-muted-foreground/60 mr-2">
                    {t(c.generalEmail, lang)}:
                  </span>
                  <a href="mailto:info@tenetsystem.it" className="text-foreground hover:text-primary transition-colors">
                    info@tenetsystem.it
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-primary/70" />
                <div>
                  <span className="text-[11px] uppercase tracking-[0.1em] text-muted-foreground/60 mr-2">
                    {t(c.supportEmail, lang)}:
                  </span>
                  <a href="mailto:support@tenetsystem.it" className="text-foreground hover:text-primary transition-colors">
                    support@tenetsystem.it
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right column — form or status */}
          {status === "success" ? (
            <div className="flex flex-col items-center justify-center text-center py-16 space-y-4">
              <CheckCircle2 className="h-10 w-10 text-primary" />
              <p className="text-base font-medium text-foreground">
                {t(c.successMessage, lang)}
              </p>
              <button
                onClick={resetStatus}
                className="mt-4 text-xs text-primary underline-offset-4 hover:underline"
              >
                {lang === "en" ? "Send another message" : "Invia un altro messaggio"}
              </button>
            </div>
          ) : status === "error" ? (
            <div className="flex flex-col items-center justify-center text-center py-16 space-y-4">
              <AlertCircle className="h-10 w-10 text-destructive" />
              <p className="text-base font-medium text-foreground">
                {t(c.errorMessage, lang)}
              </p>
              <button
                onClick={resetStatus}
                className="mt-4 text-xs text-primary underline-offset-4 hover:underline"
              >
                {lang === "en" ? "Try again" : "Riprova"}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className={labelClass}>{t(c.name, lang)} *</label>
                  <input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t(c.namePlaceholder, lang)}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>{t(c.email, lang)} *</label>
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t(c.emailPlaceholder, lang)}
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className={labelClass}>{t(c.company, lang)}</label>
                <input
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder={t(c.companyPlaceholder, lang)}
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass}>{t(c.message, lang)} *</label>
                <textarea
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t(c.messagePlaceholder, lang)}
                  rows={5}
                  className="w-full rounded-md border border-border/50 bg-card/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors resize-none"
                />
              </div>

              <div className="flex items-center gap-3 pt-1">
                <Checkbox
                  id="privacy"
                  checked={agreed}
                  onCheckedChange={(v) => setAgreed(v === true)}
                  className="h-4 w-4 rounded-sm border-border/60 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                />
                <label htmlFor="privacy" className="text-xs text-muted-foreground/80 leading-relaxed cursor-pointer">
                  {t(c.privacy, lang)}{" "}
                  <a href="/privacy" className="text-primary underline-offset-4 hover:underline">
                    {t(c.privacyLink, lang)}
                  </a>
                  .
                </label>
              </div>

              <Button
                type="submit"
                disabled={!isValid || status === "sending"}
                className="h-12 px-10 text-sm font-medium tracking-wide rounded-md bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-40 transition-all"
              >
                {status === "sending"
                  ? (lang === "en" ? "Sending…" : "Invio in corso…")
                  : t(c.submit, lang)}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
