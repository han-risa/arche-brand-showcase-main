import { Link } from "react-router-dom";
import { Product } from "@/data/products";
import { ImageIcon, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const ProductCard = ({
  product,
  index,
}: {
  product: Product;
  index: number;
}) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
    >
      <Link
        to={`/product/${product.id}`}
        className={`group flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-8 md:gap-16 items-center`}
      >
        {/* Image frame */}
        <div className="w-full md:w-1/2 relative">
          <div className="aspect-[4/5] bg-card flex items-center justify-center relative overflow-hidden">
            {product.image ? (
              <img
                src={product.image}
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
            ) : (
              <div className="text-center">
                <ImageIcon className="mx-auto h-12 w-12 text-muted-foreground/30" />
                <p
                  className="mt-3 text-xs text-muted-foreground/40 tracking-wider uppercase"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  Product Image
                </p>
              </div>
            )}
            {/* Slab shadow */}
            <div className="absolute inset-0 shadow-[4px_4px_0px_0px_hsl(var(--border))] pointer-events-none" />
            {/* Corner markers */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-primary/40 pointer-events-none" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-primary/40 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-primary/40 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-primary/40 pointer-events-none" />
          </div>
        </div>

        {/* Details */}
        <div className="w-full md:w-1/2 space-y-4">
          <p
            className="text-xs tracking-[0.3em] uppercase text-primary"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            {product.brand}
          </p>
          <h3 className="text-2xl md:text-3xl font-light text-foreground group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <div className="w-12 h-px bg-primary" />
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
            {product.description}
          </p>
          {product.weight && (
            <p
              className="text-xs text-muted-foreground/60 tracking-wider"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              {product.weight}
            </p>
          )}
          <div className="pt-2">
            <span
              className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-primary group-hover:text-foreground transition-colors"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              View Details{" "}
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
