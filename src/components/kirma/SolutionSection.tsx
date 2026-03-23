import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Bot, CalendarCheck, BarChart3, Zap } from "lucide-react";

const features = [
  { icon: Bot, title: "Respuesta automática 24/7", desc: "Un asistente de WhatsApp responde, califica y captura leads mientras tú duermes.", color: "bg-kirma-teal-light", iconColor: "text-accent" },
  { icon: CalendarCheck, title: "Agenda citas solo", desc: "Se conecta a tu calendario y agenda citas sin intervención humana.", color: "bg-kirma-gold-light", iconColor: "text-kirma-gold" },
  { icon: BarChart3, title: "CRM en tiempo real", desc: "Cada lead queda registrado con nombre, teléfono, servicio y estado. Sin perder nada.", color: "bg-kirma-indigo-light", iconColor: "text-kirma-indigo" },
  { icon: Zap, title: "Follow-up inteligente", desc: "Recordatorios automáticos antes de la cita. Reactivación de leads fríos.", color: "bg-kirma-warm-light", iconColor: "text-kirma-warm" },
];

export default function SolutionSection() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="solucion" ref={ref} className="py-20 sm:py-28">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p className={`text-sm font-semibold text-accent uppercase tracking-widest mb-3 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            La solución
          </p>
          <h2 className={`text-3xl sm:text-4xl font-heading font-bold text-balance leading-tight transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            Sistema KIRMA: tu equipo de ventas automático
          </h2>
          <p className={`mt-4 text-muted-foreground text-pretty transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            WhatsApp + Agenda + CRM conectados en un solo flujo. Cada mensaje se convierte en una oportunidad real de venta.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`kirma-card p-6 flex gap-4 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: `${250 + i * 80}ms` }}
            >
              <div className={`flex-shrink-0 w-11 h-11 rounded-xl ${f.color} flex items-center justify-center`}>
                <f.icon size={20} className={f.iconColor} />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-base mb-1">{f.title}</h3>
                <p className="text-sm text-muted-foreground text-pretty">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
