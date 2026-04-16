import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import CornerNav from "@/components/CornerNav";
import HeroSection from "@/components/HeroSection";
import ProductCard from "@/components/ProductCard";
import CategoryFilter from "@/components/CategoryFilter";
import InquiryForm from "@/components/InquiryForm";
import FooterSlab from "@/components/FooterSlab";
import SearchOverlay from "@/components/SearchOverlay";
import { products } from "@/data/products";

const Index = () => {
  const [category, setCategory] = useState("all");
  const [showSearch, setShowSearch] = useState(false);

  const filtered = useMemo(() => {
    return category === "all"
      ? products
      : products.filter((p) => p.category === category);
  }, [category]);

  return (
    <div className="min-h-screen bg-background">
      <CornerNav
        onSearchToggle={() => setShowSearch(!showSearch)}
        showSearch={showSearch}
      />
      <SearchOverlay
        isOpen={showSearch}
        onClose={() => setShowSearch(false)}
        products={products}
      />

      <HeroSection />

      {/* Catalogue Section */}
      <section id="catalogue-section" className="px-6 md:px-16 py-24">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <p
              className="text-xs tracking-[0.3em] uppercase text-primary mb-4"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Collection Index
            </p>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
              <div>
                <h2 className="text-3xl md:text-5xl font-light text-foreground">
                  Catalogue
                </h2>
                <p className="text-sm text-muted-foreground mt-2">
                  Brands hosted on the Arche platform
                </p>
              </div>
              <CategoryFilter active={category} onChange={setCategory} />
            </div>
            <div className="w-full h-px bg-border mt-8" />
          </motion.div>

          {/* Product List */}
          <div className="space-y-24">
            {filtered.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-sm text-muted-foreground text-center py-20">
              No products in this category.
            </p>
          )}
        </div>
      </section>

      {/* Separator */}
      <div className="w-full h-px bg-border" />

      <InquiryForm />

      <FooterSlab />
    </div>
  );
};

export default Index;
