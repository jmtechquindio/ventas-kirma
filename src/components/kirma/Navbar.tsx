import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Problema", href: "#problema" },
  { label: "Solución", href: "#solucion" },
  { label: "Nichos", href: "#nichos" },
  { label: "Demo", href: "#demo" },
  { label: "Planes", href: "#planes" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-xl border-b border-border/60">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="font-heading font-bold text-xl tracking-tight flex items-center gap-1.5">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-primary-foreground text-sm font-bold">K</span>
          <span className="text-foreground">KIRMA</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200">
              {l.label}
            </a>
          ))}
          <a
            href="#planes"
            className="inline-flex items-center px-5 py-2.5 rounded-lg bg-accent text-accent-foreground text-sm font-semibold hover:opacity-90 active:scale-[0.97] transition-all duration-200"
          >
            Quiero más clientes
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-foreground" aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-card border-b border-border px-4 pb-4 animate-fade-up">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-3 text-sm font-medium text-muted-foreground hover:text-foreground">
              {l.label}
            </a>
          ))}
          <a href="#planes" onClick={() => setOpen(false)} className="mt-2 block text-center px-5 py-2.5 rounded-lg bg-accent text-accent-foreground text-sm font-semibold">
            Quiero más clientes
          </a>
        </div>
      )}
    </nav>
  );
}
