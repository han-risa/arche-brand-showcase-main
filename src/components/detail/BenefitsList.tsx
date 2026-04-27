import { motion } from "framer-motion";

const BenefitsList = ({
  benefits,
  title = "Benefits",
}: {
  benefits?: string[];
  title?: string;
}) => {
  if (!benefits || benefits.length === 0) return null;

  return (
    <div>
      <p
        className="text-xs tracking-[0.2em] uppercase text-primary mb-4"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
      >
        {title}
      </p>
      <div className="space-y-3">
        {benefits.map((b, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * i }}
            className="flex items-start gap-3"
          >
            <div className="w-1.5 h-1.5 bg-secondary rounded-full shrink-0 mt-1.5" />
            <span className="text-sm text-muted-foreground">{b}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BenefitsList;
