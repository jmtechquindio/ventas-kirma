export default function Footer() {
  return (
    <footer className="py-10 border-t border-border">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-primary text-primary-foreground text-xs font-bold">K</span>
          <span className="font-heading font-bold text-foreground">KIRMA</span>
        </div>
        <p>© {new Date().getFullYear()} Sistema KIRMA. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
