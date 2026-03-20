import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$297",
    period: "/mes",
    desc: "Para negocios que quieren empezar a automatizar.",
    features: [
      "Bot WhatsApp (hasta 500 conversaciones/mes)",
      "Agenda automática (1 calendario)",
      "CRM básico en Google Sheets",
      "Recordatorios de cita",
      "Soporte por email",
    ],
    cta: "Empezar ahora",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$597",
    period: "/mes",
    desc: "Para negocios que quieren escalar sus ventas.",
    features: [
      "Todo lo de Starter +",
      "Conversaciones ilimitadas",
      "Múltiples calendarios",
      "Follow-up inteligente",
      "Dashboard de métricas",
      "Soporte prioritario por WhatsApp",
      "Flujos personalizados",
    ],
    cta: "Escalar mi negocio",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "Para franquicias y cadenas con múltiples sedes.",
    features: [
      "Todo lo de Growth +",
      "Multi-sucursal",
      "Integración con tu software",
      "API personalizada",
      "Onboarding dedicado",
      "Account manager",
    ],
    cta: "Hablar con ventas",
    highlighted: false,
  },
];

export default function PricingSection() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="planes" ref={ref} className="py-20 sm:py-28">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p className={`text-sm font-semibold text-primary uppercase tracking-widest mb-3 transition-all duration-700 ${visible ? "opacity-100" : "opacity-0 translate-y-4"}`}>
            Planes
          </p>
          <h2 className={`text-3xl sm:text-4xl font-heading font-bold text-balance leading-tight transition-all duration-700 delay-100 ${visible ? "opacity-100" : "opacity-0 translate-y-4"}`}>
            Invierte en clientes, no en personal
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-start">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`kirma-card p-6 ${plan.highlighted ? "ring-2 ring-primary relative" : ""} transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: `${200 + i * 100}ms` }}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
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
                    <Check size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contacto"
                className={`mt-8 block w-full text-center py-3 rounded-xl font-semibold text-sm transition-all duration-200 active:scale-[0.97] ${
                  plan.highlighted
                    ? "bg-primary text-primary-foreground hover:opacity-90"
                    : "border-2 border-border text-foreground hover:border-primary/30"
                }`}
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
