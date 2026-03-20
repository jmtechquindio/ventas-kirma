import { useScrollReveal } from "@/hooks/useScrollReveal";
import { MessageSquare, Calendar, TrendingUp } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: MessageSquare,
    title: "El cliente te escribe",
    desc: "Por WhatsApp, Instagram o tu web. El bot responde en segundos, resuelve dudas y captura sus datos.",
  },
  {
    num: "02",
    icon: Calendar,
    title: "Se agenda la cita",
    desc: "El sistema muestra horarios disponibles y confirma la cita. Manda recordatorio automático.",
  },
  {
    num: "03",
    icon: TrendingUp,
    title: "Tú cierras la venta",
    desc: "Llegas a la cita con toda la info del cliente. Solo te falta cerrar. El CRM registra todo.",
  },
];

export default function HowItWorks() {
  const { ref, visible } = useScrollReveal();

  return (
    <section ref={ref} className="py-20 sm:py-28 bg-card">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p className={`text-sm font-semibold text-primary uppercase tracking-widest mb-3 transition-all duration-700 ${visible ? "opacity-100" : "opacity-0 translate-y-4"}`}>
            Cómo funciona
          </p>
          <h2 className={`text-3xl sm:text-4xl font-heading font-bold text-balance leading-tight transition-all duration-700 delay-100 ${visible ? "opacity-100" : "opacity-0 translate-y-4"}`}>
            3 pasos. Sin complicaciones.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((s, i) => (
            <div
              key={s.num}
              className={`relative text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: `${200 + i * 120}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-kirma-green-light flex items-center justify-center mx-auto mb-5">
                <s.icon size={24} className="text-primary" />
              </div>
              <span className="text-xs font-heading font-bold text-primary/60 uppercase tracking-widest">Paso {s.num}</span>
              <h3 className="font-heading font-bold text-lg mt-2 mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground text-pretty">{s.desc}</p>

              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-7 -right-4 w-8 border-t-2 border-dashed border-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
