import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden kirma-gradient-hero">
      {/* Decorative orbs */}
      <div className="absolute top-16 -right-20 w-[500px] h-[500px] rounded-full bg-kirma-teal/5 blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-32 -left-20 w-[400px] h-[400px] rounded-full bg-kirma-gold/5 blur-[80px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/3 blur-[120px] pointer-events-none" />

      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-kirma-gold-light border border-kirma-gold/20 text-kirma-gold text-sm font-medium mb-8 animate-fade-up opacity-0" style={{ animationDelay: "0ms" }}>
            <Sparkles size={14} />
            Automatización que genera dinero
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold tracking-tight text-balance leading-[1.08] animate-fade-up opacity-0" style={{ animationDelay: "80ms" }}>
            Tu negocio atiende clientes 24/7.{" "}
            <span className="bg-gradient-to-r from-primary to-kirma-navy-light bg-clip-text text-transparent">Sin contratar a nadie.</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-muted-foreground text-pretty max-w-2xl mx-auto animate-fade-up opacity-0" style={{ animationDelay: "160ms" }}>
            Sistema KIRMA conecta WhatsApp, agenda y CRM para que cada mensaje se convierta en una cita confirmada — en automático.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up opacity-0" style={{ animationDelay: "240ms" }}>
            <a
              href="#planes"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-accent text-accent-foreground font-semibold text-base hover:opacity-90 active:scale-[0.97] transition-all duration-200 shadow-lg shadow-accent/20"
            >
              Quiero automatizar mi negocio
              <ArrowRight size={18} />
            </a>
            <a
              href="#demo"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border-2 border-border text-foreground font-semibold text-base hover:border-primary/30 hover:bg-card/50 active:scale-[0.97] transition-all duration-200"
            >
              <MessageCircle size={18} />
              Ver demo en vivo
            </a>
          </div>

          {/* Social proof */}
          <div className="mt-14 flex items-center justify-center gap-8 text-sm text-muted-foreground animate-fade-up opacity-0" style={{ animationDelay: "360ms" }}>
            <div className="flex items-center gap-2">
              <span className="font-heading font-bold text-kirma-gold text-lg">+240</span> negocios activos
            </div>
            <div className="w-px h-5 bg-border" />
            <div className="flex items-center gap-2">
              <span className="font-heading font-bold text-accent text-lg">93%</span> tasa de respuesta
            </div>
            <div className="hidden sm:block w-px h-5 bg-border" />
            <div className="hidden sm:flex items-center gap-2">
              <span className="font-heading font-bold text-primary text-lg">4.2x</span> más citas
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
