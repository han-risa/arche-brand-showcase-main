const SpecTable = ({ specs }: { specs?: Record<string, string> }) => {
  if (!specs) return null;

  return (
    <div>
      <p
        className="text-xs tracking-[0.2em] uppercase text-primary mb-4"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
      >
        Specifications
      </p>
      <div className="border-t border-border">
        {Object.entries(specs).map(([key, value]) => (
          <div
            key={key}
            className="flex justify-between py-3 border-b border-border/40 text-sm"
          >
            <span
              className="text-muted-foreground text-xs tracking-wider uppercase"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              {key}
            </span>
            <span className="text-foreground">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecTable;
