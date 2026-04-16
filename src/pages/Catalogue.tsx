import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products, categories, brands } from "@/data/products";

const Catalogue = () => {
  const [searchParams] = useSearchParams();
  const initialBrand = searchParams.get("brand") || "";
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBrand, setSelectedBrand] = useState(initialBrand);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (selectedCategory && p.category !== selectedCategory) return false;
      if (selectedBrand && p.brand !== selectedBrand) return false;
      return true;
    });
  }, [selectedCategory, selectedBrand]);

  const FilterButton = ({
    label,
    active,
    onClick,
  }: {
    label: string;
    active: boolean;
    onClick: () => void;
  }) => (
    <button
      onClick={onClick}
      className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
        active
          ? "bg-primary text-primary-foreground"
          : "bg-muted text-muted-foreground hover:bg-muted/80"
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container py-12">
        <h1 className="font-serif text-4xl font-bold text-foreground">Catalogue</h1>
        <p className="mt-2 text-muted-foreground">
          Explore all products from our partner brands.
        </p>

        {/* Filters */}
        <div className="mt-8 space-y-4">
          <div className="flex flex-wrap gap-2">
            <FilterButton label="All Categories" active={!selectedCategory} onClick={() => setSelectedCategory("")} />
            {categories.map((c) => (
              <FilterButton key={c} label={c} active={selectedCategory === c} onClick={() => setSelectedCategory(c)} />
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            <FilterButton label="All Brands" active={!selectedBrand} onClick={() => setSelectedBrand("")} />
            {brands.map((b) => (
              <FilterButton key={b} label={b} active={selectedBrand === b} onClick={() => setSelectedBrand(b)} />
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="mt-16 text-center text-muted-foreground">No products found.</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Catalogue;
