import { Link, useLocation } from "react-router-dom";
import archeLogo from "@/assets/arche-logo.jpeg";

const Navbar = () => {
  const location = useLocation();

  const linkClass = (path: string) =>
    `text-sm font-medium transition-colors hover:text-accent ${
      location.pathname === path ? "text-accent" : "text-foreground/70"
    }`;

  return (
    <nav className="sticky top-0 z-50 border-b bg-card/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={archeLogo} alt="Arche" className="h-10 w-10 rounded-lg object-cover" />
          <span className="font-serif text-xl font-semibold text-foreground">Arche</span>
        </Link>
        <div className="flex items-center gap-8">
          <Link to="/" className={linkClass("/")}>Home</Link>
          <Link to="/catalogue" className={linkClass("/catalogue")}>Catalogue</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
