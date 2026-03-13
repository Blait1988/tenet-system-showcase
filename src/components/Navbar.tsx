import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const navLinks = [
  { label: "Products", href: "#products" },
  { label: "Approach", href: "#approach" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-2xl border-b border-border/15 shadow-[0_1px_30px_-10px_hsl(var(--glow-primary)_/_0.05)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo with subtle glow on hover */}
        <a
          href="/"
          className="group relative text-sm font-semibold tracking-[0.25em] text-foreground transition-colors"
        >
          <span className="relative z-10">TENET SYSTEM</span>
          <span className="absolute -inset-x-3 -inset-y-2 rounded-lg bg-primary/0 transition-all duration-500 group-hover:bg-primary/5" />
        </a>

        {/* Desktop — animated underline links */}
        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link-animated text-[13px] font-medium tracking-wide text-muted-foreground transition-colors duration-300 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-4 inline-flex h-10 items-center rounded-full border border-primary/30 bg-primary/5 px-6 text-[13px] font-medium text-primary transition-all duration-400 hover:bg-primary/15 hover:border-primary/50 hover:shadow-[0_0_20px_-5px_hsl(var(--glow-primary)_/_0.2)]"
          >
            Get in touch
          </a>
        </div>

        {/* Mobile */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <button className="flex h-10 w-10 items-center justify-center rounded-full border border-border/30 text-muted-foreground transition-colors hover:text-foreground hover:border-border/60">
              <Menu className="h-4 w-4" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80 bg-background/95 backdrop-blur-2xl border-border/20">
            <div className="mt-12 flex flex-col gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-2xl font-light text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex h-12 items-center justify-center rounded-full border border-primary/30 bg-primary/5 text-sm font-medium text-primary transition-colors hover:bg-primary/15"
              >
                Get in touch
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
