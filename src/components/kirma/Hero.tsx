import { ArrowRight, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-20 -right-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-accent/5 blur-3xl pointer-events-none" />

      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-kirma-green-light text-primary text-sm font-medium mb-8 animate-fade-up opacity-0" style={{ animationDelay: "0ms" }}>
            <MessageCircle size={14} />
            Automatización que genera dinero
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold tracking-tight text-balance leading-[1.08] animate-fade-up opacity-0" style={{ animationDelay: "80ms" }}>
            Tu negocio atiende clientes 24/7.{" "}
            <span className="text-primary">Sin contratar a nadie.</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-muted-foreground text-pretty max-w-2xl mx-auto animate-fade-up opacity-0" style={{ animationDelay: "160ms" }}>
            Sistema KIRMA conecta WhatsApp, agenda y CRM para que cada mensaje se convierta en una cita confirmada — en automático.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up opacity-0" style={{ animationDelay: "240ms" }}>
            <a
              href="#planes"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-base hover:opacity-90 active:scale-[0.97] transition-all duration-200 animate-pulse-green"
            >
              Quiero automatizar mi negocio
              <ArrowRight size={18} />
            </a>
            <a
              href="#demo"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border-2 border-border text-foreground font-semibold text-base hover:border-primary/30 active:scale-[0.97] transition-all duration-200"
            >
              Ver demo en vivo
            </a>
          </div>

          {/* Social proof */}
          <div className="mt-14 flex items-center justify-center gap-8 text-sm text-muted-foreground animate-fade-up opacity-0" style={{ animationDelay: "360ms" }}>
            <div className="flex items-center gap-2">
              <span className="font-heading font-bold text-foreground text-lg">+240</span> negocios activos
            </div>
            <div className="w-px h-5 bg-border" />
            <div className="flex items-center gap-2">
              <span className="font-heading font-bold text-foreground text-lg">93%</span> tasa de respuesta
            </div>
            <div className="hidden sm:block w-px h-5 bg-border" />
            <div className="hidden sm:flex items-center gap-2">
              <span className="font-heading font-bold text-foreground text-lg">4.2x</span> más citas
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
