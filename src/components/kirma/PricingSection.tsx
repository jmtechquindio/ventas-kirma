import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Básico",
    price: "$349.000",
    currency: "COP",
    period: "/mes",
    usd: "~$85 USD",
    desc: "Para negocios que quieren empezar a automatizar su atención.",
    features: [
      "Bot WhatsApp (hasta 500 conversaciones/mes)",
      "Agenda automática (1 calendario)",
      "CRM básico en Google Sheets",
      "Recordatorios de cita automáticos",
      "Soporte por email",
    ],
    cta: "Empezar ahora",
    highlighted: false,
    accent: "border-kirma-teal/20",
    ctaClass: "border-2 border-border text-foreground hover:border-accent/40 hover:bg-kirma-teal-light",
  },
  {
    name: "Profesional",
    price: "$749.000",
    currency: "COP",
    period: "/mes",
    usd: "~$180 USD",
    desc: "Para negocios que quieren escalar ventas y fidelizar clientes.",
    features: [
      "Todo lo de Básico +",
      "Conversaciones ilimitadas",
      "Múltiples calendarios",
      "Follow-up inteligente automático",
      "Dashboard de métricas",
      "Soporte prioritario por WhatsApp",
      "Flujos personalizados",
    ],
    cta: "Escalar mi negocio",
    highlighted: true,
    accent: "ring-2 ring-kirma-gold",
    ctaClass: "kirma-gradient-accent text-accent-foreground hover:opacity-90",
  },
  {
    name: "Empresarial",
    price: "A medida",
    currency: "",
    period: "",
    usd: "",
    desc: "Para franquicias y cadenas con múltiples sedes en Colombia.",
    features: [
      "Todo lo de Profesional +",
      "Multi-sucursal ilimitada",
      "Integración con tu software actual",
      "API personalizada",
      "Onboarding y capacitación dedicada",
      "Account manager exclusivo",
    ],
    cta: "Hablar con ventas",
    highlighted: false,
    accent: "border-kirma-indigo/20",
    ctaClass: "border-2 border-border text-foreground hover:border-primary/30 hover:bg-kirma-indigo-light",
  },
];

export default function PricingSection() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="planes" ref={ref} className="py-20 sm:py-28">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p className={`text-sm font-semibold text-accent uppercase tracking-widest mb-3 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            Planes
          </p>
          <h2 className={`text-3xl sm:text-4xl font-heading font-bold text-balance leading-tight transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            Invierte en clientes, no en personal
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-start">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`kirma-card p-6 ${plan.accent} relative transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: `${200 + i * 100}ms` }}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-kirma-gold text-white text-xs font-semibold flex items-center gap-1 shadow-lg shadow-kirma-gold/30">
                  <Star size={10} fill="currentColor" />
                  Más popular
                </div>
              )}
              <h3 className="font-heading font-bold text-lg">{plan.name}</h3>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-3xl font-heading font-bold">{plan.price}</span>
                <span className="text-sm text-muted-foreground">{plan.period}</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{plan.desc}</p>
              <ul className="mt-6 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check size={16} className="text-accent mt-0.5 flex-shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contacto"
                className={`mt-8 block w-full text-center py-3 rounded-xl font-semibold text-sm transition-all duration-200 active:scale-[0.97] ${plan.ctaClass}`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
