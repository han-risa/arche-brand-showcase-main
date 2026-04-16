import { categories } from "@/data/products";

interface CategoryFilterProps {
  active: string;
  onChange: (cat: string) => void;
}

const CategoryFilter = ({ active, onChange }: CategoryFilterProps) => {
  const allCats = ["all", ...categories];

  return (
    <div className="flex flex-wrap gap-4">
      {allCats.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`text-xs tracking-[0.2em] uppercase pb-1 transition-colors ${
            active === cat
              ? "text-foreground border-b border-primary"
              : "text-muted-foreground hover:text-foreground"
          }`}
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          {cat === "all" ? "All" : cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
