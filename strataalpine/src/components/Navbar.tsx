import { Button } from "@/components/ui/button";
import { Printer, ShoppingCart, Menu, X, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    // Initialize theme
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/80 dark:bg-black/80 backdrop-blur-md border-b py-3 shadow-sm" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="container px-4 mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2 font-display text-2xl font-bold tracking-tight">
          <div className="h-9 w-9 rounded-lg bg-primary flex items-center justify-center text-primary-foreground">
            <Printer className="h-5 w-5" />
          </div>
          StrataAlp
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Start</a>
          <a href="#shop" className="text-sm font-medium hover:text-primary transition-colors">Shop</a>
          <a href="#custom-order" className="text-sm font-medium hover:text-primary transition-colors">Custom Order</a>
          <a href="#faq" className="text-sm font-medium hover:text-primary transition-colors">FAQ</a>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleDarkMode}
            className="rounded-full"
          >
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>

          <Button 
            variant="ghost" 
            size="icon" 
            className="relative"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingCart className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-primary text-[10px] font-bold text-primary-foreground rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Button>
          
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-black border-t overflow-hidden"
          >
            <div className="container px-4 py-8 flex flex-col gap-6">
              <a href="#" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>Start</a>
              <a href="#shop" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>Shop</a>
              <a href="#custom-order" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>Custom Order</a>
              <a href="#faq" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>FAQ</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
