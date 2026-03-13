import { Link } from "react-router-dom";

const TermsOfService = () => (
  <div className="min-h-screen bg-background text-foreground">
    <div className="mx-auto max-w-3xl px-6 py-32">
      <Link to="/" className="font-mono text-sm tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors">
        TENET SYSTEM
      </Link>

      <h1 className="mt-12 text-4xl font-bold tracking-tight">Terms of Service</h1>
      <p className="mt-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
        Last updated: March 2026
      </p>

      <div className="mt-12 space-y-8 text-sm leading-relaxed text-muted-foreground">
        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">1. General</h2>
          <p>These Terms of Service govern your use of the Tenet System website and any related services. By accessing this website, you agree to these terms.</p>
        </section>
        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">2. Intellectual Property</h2>
          <p>All content, trademarks, and intellectual property on this website are owned by Tenet System. Unauthorized reproduction or distribution is prohibited.</p>
        </section>
        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">3. Limitation of Liability</h2>
          <p>Tenet System provides this website on an "as is" basis and makes no representations or warranties of any kind. We shall not be liable for any damages arising from the use of this website.</p>
        </section>
        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">4. Governing Law</h2>
          <p>These terms shall be governed by and construed in accordance with applicable Italian and European Union law.</p>
        </section>
        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">5. Changes</h2>
          <p>Tenet System reserves the right to modify these terms at any time. Continued use of the website constitutes acceptance of any changes.</p>
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

export default TermsOfService;
