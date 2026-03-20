import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Stethoscope, Home, Dumbbell, UtensilsCrossed } from "lucide-react";

const nichos = [
  {
    icon: Stethoscope,
    name: "Clínicas dentales",
    problem: "Pacientes piden cita por WhatsApp y nadie responde. Se pierden implantes de $800+.",
    result: "Bot responde, agenda la valoración y manda recordatorio. 4x más citas de implantes.",
  },
  {
    icon: Home,
    name: "Inmobiliarias",
    problem: "Leads de portales llegan y se enfrían. Los agentes no dan seguimiento rápido.",
    result: "Captura automática, calificación del lead y agenda de visita en minutos.",
  },
  {
    icon: Dumbbell,
    name: "Gimnasios / fitness",
    problem: "Gente pregunta precios y no regresa. Las pruebas gratis no se convierten.",
    result: "Bot envía horarios, agenda la clase de prueba y hace follow-up para inscripción.",
  },
  {
    icon: UtensilsCrossed,
    name: "Restaurantes",
    problem: "Reservas por teléfono se pierden. No hay base de datos de clientes recurrentes.",
    result: "Reservas automáticas por WhatsApp. Base de clientes para promos y eventos.",
  },
];

export default function NichosSection() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="nichos" ref={ref} className="py-20 sm:py-28">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p className={`text-sm font-semibold text-accent uppercase tracking-widest mb-3 transition-all duration-700 ${visible ? "opacity-100" : "opacity-0 translate-y-4"}`}>
            Multi-nicho
          </p>
          <h2 className={`text-3xl sm:text-4xl font-heading font-bold text-balance leading-tight transition-all duration-700 delay-100 ${visible ? "opacity-100" : "opacity-0 translate-y-4"}`}>
            Funciona para tu tipo de negocio
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {nichos.map((n, i) => (
            <div
              key={n.name}
              className={`kirma-card p-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
              style={{ transitionDelay: `${200 + i * 90}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-kirma-green-light flex items-center justify-center">
                  <n.icon size={20} className="text-primary" />
                </div>
                <h3 className="font-heading font-bold text-base">{n.name}</h3>
              </div>
              <p className="text-sm text-destructive/80 mb-2">
                <span className="font-semibold">Problema:</span> {n.problem}
              </p>
              <p className="text-sm text-primary">
                <span className="font-semibold">Resultado:</span> {n.result}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
