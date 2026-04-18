import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ImageIcon } from "lucide-react";
import { motion } from "framer-motion";
import CornerNav from "@/components/CornerNav";
import IngredientList from "@/components/detail/IngredientList";
import BenefitsList from "@/components/detail/BenefitsList";
import SpecTable from "@/components/detail/SpecTable";
import FragranceNotes from "@/components/detail/FragranceNotes";
import FooterSlab from "@/components/FooterSlab";
import { products } from "@/data/products";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <CornerNav onSearchToggle={() => {}} showSearch={false} />
        <div className="text-center">
          <p className="text-2xl text-foreground mb-4">Product not found</p>
          <Link
            to="/"
            className="text-xs tracking-[0.3em] uppercase text-primary border-b border-primary pb-1"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Back to Catalogue
          </Link>
        </div>
      </div>
    );
  }

  const isMaterial = product.category === "Material";
  const isBeautySkincare =
    product.category === "Beauty & Care" && product.benefits;
  const isBeautyFragrance =
    product.category === "Beauty & Care" && !product.benefits;

  return (
    <div className="min-h-screen bg-background">
      <CornerNav onSearchToggle={() => {}} showSearch={false} />

      {/* Back navigation */}
      <div className="fixed top-0 left-0 right-0 z-30 pt-20 px-6 md:px-16 pointer-events-none">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors pointer-events-auto"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Link>
      </div>

      {/* Main Content */}
      <div className="pt-32 md:pt-0 md:min-h-screen md:flex">
        {/* Left: Sticky Image Frame */}
        <div className="w-full md:w-3/5 md:h-screen md:sticky md:top-0 p-6 md:p-0">
          <div className="h-full flex items-center justify-center p-8 md:p-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-full h-auto max-h-[80vh] bg-card overflow-hidden"
            >
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto object-contain"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <ImageIcon className="mx-auto h-12 w-12 text-muted-foreground/30" />
                    <p
                      className="mt-3 text-xs text-muted-foreground/40 tracking-wider uppercase"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      Product Image
                    </p>
                  </div>
                </div>
              )}

              {/* Slab shadow */}
              <div className="absolute inset-0 shadow-[6px_6px_0px_0px_hsl(var(--border))] pointer-events-none" />

              {/* Corner markers */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-primary/40 pointer-events-none" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-primary/40 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-primary/40 pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-primary/40 pointer-events-none" />
            </motion.div>
          </div>
        </div>

        {/* Right: Scrollable Data Sheet */}
        <div className="w-full md:w-2/5 px-6 md:px-12 pb-24 md:pt-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Header */}
            <div className="mb-12">
              <span
                className="text-xs tracking-[0.3em] uppercase text-primary block mb-3"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {product.brand}
              </span>
              <h1 className="text-4xl md:text-5xl font-light text-foreground leading-tight mb-4">
                {product.name}
              </h1>
              <div className="w-16 h-px bg-primary mb-4" />
              <p className="text-base text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Meta info */}
            <div className="flex items-center gap-6 mb-12 pb-8 border-b border-border/40">
              {product.weight && (
                <div>
                  <p
                    className="text-xs text-muted-foreground/60 tracking-wider uppercase mb-1"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    Net Weight
                  </p>
                  <p
                    className="text-sm text-foreground"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {product.weight}
                  </p>
                </div>
              )}
              <div>
                <p
                  className="text-xs text-muted-foreground/60 tracking-wider uppercase mb-1"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  Category
                </p>
                <p
                  className="text-sm text-foreground capitalize"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {product.category}
                </p>
              </div>
              {product.price && (
                <div>
                  <p
                    className="text-xs text-muted-foreground/60 tracking-wider uppercase mb-1"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    Price
                  </p>
                  <p
                    className="text-sm text-foreground"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {product.price}
                  </p>
                </div>
              )}
            </div>

            {/* Content sections based on type */}
            <div className="space-y-12">
              {isBeautySkincare && (
                <>
                  <IngredientList ingredients={product.ingredients} />
                  <BenefitsList benefits={product.benefits} />
                </>
              )}

              {isMaterial && (
                <>
                  <SpecTable specs={product.specs} />
                  <BenefitsList benefits={product.benefits} />
                </>
              )}

              {isBeautyFragrance && (
                <>
                  <FragranceNotes notes={product.ingredients} />
                  <SpecTable specs={product.specs} />
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      <FooterSlab />
    </div>
  );
};

export default ProductDetail;
