const FooterSlab = () => (
  <footer className="border-t border-border px-6 md:px-16 py-12">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <p
        className="text-xs tracking-[0.3em] uppercase text-muted-foreground"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
      >
        © {new Date().getFullYear()} Arche
      </p>
      <p className="text-xs text-muted-foreground/60">
        Connecting brands, business owners & influencers.
      </p>
    </div>
  </footer>
);

export default FooterSlab;
