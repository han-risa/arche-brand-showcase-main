import { motion } from "framer-motion";

const FragranceNotes = ({ notes }: { notes?: string[] }) => {
  if (!notes || notes.length === 0) return null;

  return (
    <div>
      <p
        className="text-xs tracking-[0.2em] uppercase text-primary mb-4"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
      >
        Fragrance Notes
      </p>
      <div className="flex flex-wrap gap-3">
        {notes.map((note, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 * i }}
            className="px-4 py-2 border border-border text-sm text-foreground"
          >
            {note}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FragranceNotes;
