import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="contacto" ref={ref} className="py-20 sm:py-28 bg-card">
      <div className="container">
        <div
          className={`max-w-3xl mx-auto kirma-gradient rounded-3xl p-10 sm:p-14 text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
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
            className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-base hover:opacity-90 active:scale-[0.97] transition-all duration-200 animate-pulse-green"
          >
            Agendar mi demo gratis
            <ArrowRight size={18} />
          </a>
          <p className="mt-4 text-primary-foreground/50 text-xs">Sin compromiso. Sin tarjeta. 15 minutos.</p>
        </div>
      </div>
    </section>
  );
}
