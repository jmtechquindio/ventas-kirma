import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTASection() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="contacto" ref={ref} className="py-20 sm:py-28 bg-card">
      <div className="container">
        <div
          className={`max-w-3xl mx-auto kirma-gradient rounded-3xl p-10 sm:p-14 text-center relative overflow-hidden transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          {/* Decorative accents */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-kirma-gold/10 rounded-full blur-[60px] pointer-events-none" />
          
          <div className="relative">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-kirma-gold/20 text-kirma-gold text-xs font-semibold mb-6 border border-kirma-gold/20">
              <Sparkles size={12} />
              Sin compromiso
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary-foreground text-balance leading-tight">
              ¿Listo para dejar de perder clientes?
            </h2>
            <p className="mt-4 text-primary-foreground/70 text-pretty max-w-lg mx-auto">
              Agenda una llamada de 15 minutos. Te mostramos cómo funciona KIRMA para tu negocio y te damos un plan de implementación sin compromiso.
            </p>
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-kirma-gold text-white font-semibold text-base hover:opacity-90 active:scale-[0.97] transition-all duration-200 shadow-lg shadow-kirma-gold/30"
            >
              Agendar mi demo gratis
              <ArrowRight size={18} />
            </a>
            <p className="mt-4 text-primary-foreground/50 text-xs">Sin tarjeta. 15 minutos.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
