import { motion } from "framer-motion";

const IngredientList = ({ ingredients }: { ingredients?: string[] }) => {
  if (!ingredients || ingredients.length === 0) return null;

  return (
    <div>
      <p
        className="text-xs tracking-[0.2em] uppercase text-primary mb-4"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
      >
        Key Ingredients
      </p>
      <div className="space-y-3">
        {ingredients.map((ing, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * i }}
            className="flex items-center gap-3"
          >
            <div className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
            <span className="text-sm text-foreground">{ing}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default IngredientList;
