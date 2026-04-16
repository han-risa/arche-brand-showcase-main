import { motion } from "framer-motion";

const HeroSection = () => {
  const scrollToCatalogue = () => {
    document
      .getElementById("catalogue-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="text-center px-6 relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xs tracking-[0.4em] uppercase text-muted-foreground mb-6"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          Brand Collaboration Platform
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-6xl md:text-8xl lg:text-9xl font-light text-foreground tracking-tight"
        >
          Arche
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 max-w-md mx-auto text-sm text-muted-foreground leading-relaxed"
        >
          Connecting business owners and influencers to promote and grow brands
          together.
        </motion.p>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          onClick={scrollToCatalogue}
          className="mt-12 text-xs tracking-[0.3em] uppercase text-primary border-b border-primary pb-1 hover:text-foreground hover:border-foreground transition-colors"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          View Catalogue
        </motion.button>
      </div>

      {/* Subtle decorative elements */}
      <div className="absolute top-10 left-10 w-16 h-16 border-t border-l border-border/30" />
      <div className="absolute bottom-10 right-10 w-16 h-16 border-b border-r border-border/30" />
    </section>
  );
};

export default HeroSection;
