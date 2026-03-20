import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState, useEffect } from "react";

const conversation = [
  { from: "client", text: "Hola, ¿cuánto cuesta una limpieza dental?", delay: 0 },
  { from: "bot", text: "¡Hola! 👋 Gracias por escribirnos. La limpieza dental tiene un precio de $45 USD. ¿Te gustaría agendar una cita? Tenemos disponibilidad esta semana.", delay: 1200 },
  { from: "client", text: "Sí, me interesa", delay: 2800 },
  { from: "bot", text: "Perfecto. ¿Me compartes tu nombre completo para reservar tu lugar?", delay: 3800 },
  { from: "client", text: "María González", delay: 5000 },
  { from: "bot", text: "Gracias María 🙌 Tenemos disponible:\n\n📅 Miércoles 14:00\n📅 Jueves 10:30\n📅 Viernes 16:00\n\n¿Cuál te funciona mejor?", delay: 6000 },
  { from: "client", text: "Jueves 10:30", delay: 7500 },
  { from: "bot", text: "✅ ¡Listo! Tu cita está confirmada:\n\n🦷 Limpieza dental\n📅 Jueves 10:30\n📍 Clínica Dental Sonrisa\n\nTe enviaremos un recordatorio 24h antes. ¡Nos vemos, María!", delay: 8500 },
];

export default function DemoSection() {
  const { ref, visible } = useScrollReveal();
  const [visibleMessages, setVisibleMessages] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (visible && !started) {
      setStarted(true);
      conversation.forEach((msg, i) => {
        setTimeout(() => setVisibleMessages(i + 1), msg.delay);
      });
    }
  }, [visible, started]);

  return (
    <section id="demo" ref={ref} className="py-20 sm:py-28 bg-card">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p className={`text-sm font-semibold text-primary uppercase tracking-widest mb-3 transition-all duration-700 ${visible ? "opacity-100" : "opacity-0 translate-y-4"}`}>
            Demo en vivo
          </p>
          <h2 className={`text-3xl sm:text-4xl font-heading font-bold text-balance leading-tight transition-all duration-700 delay-100 ${visible ? "opacity-100" : "opacity-0 translate-y-4"}`}>
            Así se ve en acción
          </h2>
          <p className={`mt-4 text-muted-foreground text-pretty transition-all duration-700 delay-200 ${visible ? "opacity-100" : "opacity-0 translate-y-4"}`}>
            Simulación real: un paciente pregunta por WhatsApp → el bot responde, captura datos y agenda — todo sin intervención humana.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          {/* Phone frame */}
          <div className="rounded-3xl bg-kirma-dark p-3 shadow-2xl">
            <div className="rounded-2xl bg-background overflow-hidden">
              {/* Header */}
              <div className="kirma-gradient px-4 py-3 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center text-primary-foreground text-xs font-bold">K</div>
                <div>
                  <p className="text-sm font-semibold text-primary-foreground">Clínica Dental Sonrisa</p>
                  <p className="text-xs text-primary-foreground/60">En línea</p>
                </div>
              </div>

              {/* Messages */}
              <div className="p-4 space-y-3 min-h-[420px] bg-kirma-surface">
                {conversation.slice(0, visibleMessages).map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${msg.from === "client" ? "justify-end" : "justify-start"} animate-fade-up`}
                  >
                    <div
                      className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm whitespace-pre-line ${
                        msg.from === "client"
                          ? "bg-primary text-primary-foreground rounded-br-md"
                          : "bg-card text-foreground rounded-bl-md shadow-sm"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}

                {/* Typing indicator */}
                {visibleMessages > 0 && visibleMessages < conversation.length && conversation[visibleMessages]?.from === "bot" && (
                  <div className="flex justify-start">
                    <div className="bg-card px-4 py-3 rounded-2xl rounded-bl-md shadow-sm flex gap-1">
                      <span className="w-2 h-2 rounded-full bg-muted-foreground/40 animate-pulse" />
                      <span className="w-2 h-2 rounded-full bg-muted-foreground/40 animate-pulse" style={{ animationDelay: "150ms" }} />
                      <span className="w-2 h-2 rounded-full bg-muted-foreground/40 animate-pulse" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* CRM capture indicator */}
          {visibleMessages >= conversation.length && (
            <div className="mt-6 kirma-card p-4 text-center animate-fade-up">
              <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">📋 Capturado en CRM</p>
              <p className="text-sm text-muted-foreground">María González · Limpieza · Jueves 10:30 · Confirmada</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
