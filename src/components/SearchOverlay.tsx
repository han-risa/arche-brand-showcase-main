import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Product } from "@/data/products";
import { motion, AnimatePresence } from "framer-motion";

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
}

const SearchOverlay = ({ isOpen, onClose, products }: SearchOverlayProps) => {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery("");
    }
  }, [isOpen]);

  const results =
    query.length > 0
      ? products.filter(
          (p) =>
            p.name.toLowerCase().includes(query.toLowerCase()) ||
            p.brand.toLowerCase().includes(query.toLowerCase()) ||
            p.category.toLowerCase().includes(query.toLowerCase()),
        )
      : [];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-40 bg-background/95 backdrop-blur-sm flex items-start justify-center pt-32"
        >
          <div className="w-full max-w-xl px-6">
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products..."
              className="w-full bg-transparent border-b border-border pb-4 text-2xl font-light text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors"
            />
            <div className="mt-8 space-y-4">
              {results.map((p) => (
                <Link
                  key={p.id}
                  to={`/product/${p.id}`}
                  onClick={onClose}
                  className="block group"
                >
                  <p
                    className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-1"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {p.brand}
                  </p>
                  <p className="text-lg text-foreground group-hover:text-primary transition-colors">
                    {p.name}
                  </p>
                </Link>
              ))}
              {query.length > 0 && results.length === 0 && (
                <p className="text-sm text-muted-foreground">
                  No products found.
                </p>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SearchOverlay;
