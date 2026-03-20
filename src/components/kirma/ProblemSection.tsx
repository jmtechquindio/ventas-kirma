import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Clock, UserX, DollarSign, PhoneOff } from "lucide-react";

const problems = [
  { icon: PhoneOff, title: "Mensajes sin responder", desc: "Clientes escriben por WhatsApp y nadie contesta a tiempo. Se van con la competencia." },
  { icon: Clock, title: "Procesos manuales", desc: "Agendar citas, dar seguimiento, mandar recordatorios… todo a mano, todo lento." },
  { icon: UserX, title: "Leads que se pierden", desc: "No hay sistema. Los datos quedan en chats, papeles o en la cabeza de alguien." },
  { icon: DollarSign, title: "Dinero en la mesa", desc: "Cada mensaje sin responder = un cliente que se fue. Cada cita olvidada = dinero perdido." },
];

export default function ProblemSection() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="problema" className="py-20 sm:py-28 bg-card" ref={ref}>
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p className={`text-sm font-semibold text-accent uppercase tracking-widest mb-3 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            El problema real
          </p>
          <h2 className={`text-3xl sm:text-4xl font-heading font-bold text-balance leading-tight transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            ¿Cuántos clientes pierdes cada semana sin darte cuenta?
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {problems.map((p, i) => (
            <div
              key={p.title}
              className={`kirma-card p-6 flex gap-4 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: `${200 + i * 80}ms` }}
            >
              <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-destructive/10 flex items-center justify-center">
                <p.icon size={20} className="text-destructive" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-base mb-1">{p.title}</h3>
                <p className="text-sm text-muted-foreground text-pretty">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
