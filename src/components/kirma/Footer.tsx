export default function Footer() {
  return (
    <footer className="py-10 border-t border-border">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p className="font-heading font-bold text-foreground">KIRMA</p>
        <p>© {new Date().getFullYear()} Sistema KIRMA. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
