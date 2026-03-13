import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border/15 py-24">
    <div className="mx-auto max-w-7xl px-6">
      <div className="flex flex-col gap-16 md:flex-row md:items-start md:justify-between">
        <div>
          <span className="text-sm font-semibold tracking-[0.25em] text-foreground">
            TENET SYSTEM
          </span>
          <p className="mt-3 text-sm text-muted-foreground/50 font-light">
            Proprietary Software Systems
          </p>
        </div>

        <div className="flex flex-wrap gap-10 text-[13px] text-muted-foreground font-light">
          <a href="#products" className="nav-link-animated transition-colors hover:text-foreground">Products</a>
          <a href="#contact" className="nav-link-animated transition-colors hover:text-foreground">Contact</a>
          <Link to="/privacy" className="nav-link-animated transition-colors hover:text-foreground">Privacy Policy</Link>
          <Link to="/terms" className="nav-link-animated transition-colors hover:text-foreground">Terms of Service</Link>
        </div>
      </div>

      <div className="mt-20 border-t border-border/10 pt-8">
        <p className="text-xs tracking-[0.15em] text-muted-foreground/30 font-light">
          © {new Date().getFullYear()} Tenet System. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
