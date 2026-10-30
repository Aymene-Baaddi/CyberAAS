import { useState } from "react";

const links = [
  { href: "#service", label: "Offer" },
  { href: "#services", label: "Scope" },
  { href: "#sectors", label: "Sectors" },
  { href: "#method", label: "Method" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="tone-paper fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur-md">
      <nav className="relative mx-auto flex h-16 max-w-6xl items-center justify-between px-6" aria-label="Primary">
        <a href="#top" className="font-display text-[15px] font-semibold tracking-tight">
          Kryptos
        </a>

        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] tracking-[0.12em] text-muted-foreground uppercase transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden h-9 items-center rounded-full bg-foreground px-4 text-sm font-medium text-background md:inline-flex"
        >
          Request a test
        </a>

        <button
          type="button"
          className="inline-flex h-9 items-center px-1 text-sm md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {open ? (
        <div id="mobile-nav" className="border-t border-border bg-background md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-6 py-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="border-b border-border py-3 text-sm"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-4 inline-flex h-10 items-center justify-center bg-alert text-sm font-medium text-alert-foreground"
              onClick={() => setOpen(false)}
            >
              Request a test
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
