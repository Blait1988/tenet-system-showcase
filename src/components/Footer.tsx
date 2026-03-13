import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border/40 py-16">
    <div className="mx-auto max-w-7xl px-6">
      <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div>
          <span className="font-mono text-sm font-semibold tracking-[0.2em] text-foreground">
            TENET SYSTEM
          </span>
          <p className="mt-2 font-mono text-xs tracking-wider text-muted-foreground">
            Proprietary Software Systems
          </p>
        </div>

        <div className="flex flex-wrap gap-8 text-sm text-muted-foreground">
          <a href="#products" className="transition-colors hover:text-foreground">Products</a>
          <a href="#contact" className="transition-colors hover:text-foreground">Contact</a>
          <Link to="/privacy" className="transition-colors hover:text-foreground">Privacy Policy</Link>
          <Link to="/terms" className="transition-colors hover:text-foreground">Terms of Service</Link>
        </div>
      </div>

      <div className="mt-12 border-t border-border/30 pt-8">
        <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground/60">
          Built around software, data and scalable execution.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
