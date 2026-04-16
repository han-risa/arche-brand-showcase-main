import { Link } from "react-router-dom";
import { Search, X } from "lucide-react";
import archeLogo from "@/assets/arche-logo.jpeg";

interface CornerNavProps {
  onSearchToggle: () => void;
  showSearch: boolean;
}

const CornerNav = ({ onSearchToggle, showSearch }: CornerNavProps) => {
  return (
    <>
      {/* Top-left: Logo */}
      <div className="fixed top-6 left-6 md:left-10 z-50">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={archeLogo}
            alt="Arche"
            className="h-10 w-10 rounded-lg object-cover"
          />
          <span
            className="font-mono text-xs tracking-[0.3em] uppercase text-foreground group-hover:text-primary transition-colors"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Arche
          </span>
        </Link>
      </div>

      {/* Top-right: Search toggle */}
      <div className="fixed top-6 right-6 md:right-10 z-50">
        <button
          onClick={onSearchToggle}
          className="p-2 text-muted-foreground hover:text-foreground transition-colors"
          aria-label={showSearch ? "Close search" : "Open search"}
        >
          {showSearch ? <X className="w-5 h-5" /> : <Search className="w-5 h-5" />}
        </button>
      </div>
    </>
  );
};

export default CornerNav;
