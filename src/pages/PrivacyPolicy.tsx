import { Link } from "react-router-dom";

const PrivacyPolicy = () => (
  <div className="min-h-screen bg-background text-foreground">
    <div className="mx-auto max-w-3xl px-6 py-32">
      <Link to="/" className="font-mono text-sm tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors">
        TENET SYSTEM
      </Link>

      <h1 className="mt-12 text-4xl font-bold tracking-tight">Privacy Policy</h1>
      <p className="mt-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
        Last updated: March 2026
      </p>

      <div className="mt-12 space-y-8 text-sm leading-relaxed text-muted-foreground">
        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">1. Data Controller</h2>
          <p>Tenet System is the data controller responsible for your personal data collected through this website.</p>
        </section>
        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">2. Data We Collect</h2>
          <p>We may collect personal identification information (name, email address, company name) when you voluntarily submit it through our contact form.</p>
        </section>
        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">3. How We Use Your Data</h2>
          <p>We use the information we collect to respond to your inquiries and to evaluate potential business relationships. We do not sell or share your data with third parties for marketing purposes.</p>
        </section>
        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">4. Data Retention</h2>
          <p>We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected.</p>
        </section>
        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">5. Your Rights</h2>
          <p>You have the right to access, rectify, or delete your personal data. To exercise these rights, please contact us at the email address provided on our website.</p>
        </section>
        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">6. Contact</h2>
          <p>For any privacy-related inquiries, please reach out through our contact form or at the addresses listed on our website.</p>
        </section>
      </div>

      <div className="mt-16 border-t border-border/40 pt-8">
        <Link to="/" className="text-sm text-primary hover:underline underline-offset-4">
          Back to homepage
        </Link>
      </div>
    </div>
  </div>
);

export default PrivacyPolicy;
