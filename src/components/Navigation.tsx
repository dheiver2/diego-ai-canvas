
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Experience", path: "/experience" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-white/10">
      <div className="container mx-auto py-4 lg:py-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl lg:text-3xl font-bold gradient-text relative group">
            <span className="shimmer-effect">Diego Fan</span>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-500"></div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-3">
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link text-sm lg:text-base px-3 lg:px-5 py-2 lg:py-3 relative group transition-all duration-300 animate-slide-up ${isActive(item.path) ? 'active' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></div>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden hover:bg-primary/20 transition-all duration-300 hover:scale-110 transform animate-pulse-glow group relative overflow-hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="relative z-10">
              {isOpen ? <X size={24} className="group-hover:rotate-90 transition-transform duration-300" /> : <Menu size={24} className="group-hover:scale-110 transition-transform duration-300" />}
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2 border-t border-white/10 pt-4 animate-slide-up">
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-4 py-3 text-base rounded-lg transition-all duration-300 animate-scale-in group relative overflow-hidden ${
                  isActive(item.path)
                    ? 'bg-primary text-primary-foreground animate-pulse-glow'
                    : 'text-foreground hover:bg-primary/20 hover:scale-105 transform'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setIsOpen(false)}
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
