import { motion, useScroll, AnimatePresence } from "motion/react";
import { ShoppingBag, Search, User, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { totalItems } = useCart();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
    return () => unsubscribe();
  }, [scrollY]);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navStyles = isHomePage 
    ? (isScrolled ? "bg-brand-brown/95 backdrop-blur-md py-4" : "bg-transparent py-8")
    : "bg-brand-brown py-4 shadow-sm";

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-white/5 ${navStyles} text-white`}
      >
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 flex items-center justify-between font-sans">
          <Link to="/" className="flex items-center gap-2">
            <h1 className="text-xl md:text-2xl font-bold tracking-[0.2em] uppercase">
              doron
            </h1>
          </Link>
          
          <div className="hidden lg:flex items-center gap-10 text-[11px] uppercase tracking-[0.2em] font-medium opacity-80">
            <Link to="/" className="hover:opacity-100 transition-opacity">Home</Link>
            <Link to="/shop" className="hover:opacity-100 transition-opacity">Shop All</Link>
            <Link to="#" className="hover:opacity-100 transition-opacity">Showrooms</Link>
            <Link to="#" className="hover:opacity-100 transition-opacity">Contact</Link>
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <button className="p-2 hover:opacity-100 transition-opacity opacity-80 hidden md:block">
              <Search className="w-5 h-5" />
            </button>
            <Link to="/checkout" className="p-2 hover:opacity-100 transition-opacity opacity-80 relative group">
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-white text-brand-brown text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center border border-brand-brown">
                  {totalItems}
                </span>
              )}
            </Link>
            <button className="p-2 hover:opacity-100 transition-opacity opacity-80 hidden md:block">
              <User className="w-5 h-5" />
            </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
            className="fixed inset-0 z-40 bg-brand-brown text-white pt-32 px-6 flex flex-col"
          >
            <div className="flex flex-col gap-8 text-3xl font-serif">
              <Link to="/" className="hover:italic transition-all">Home</Link>
              <Link to="/shop" className="hover:italic transition-all">Catalog</Link>
              <Link to="#" className="hover:italic transition-all opacity-40">Showrooms</Link>
              <Link to="#" className="hover:italic transition-all opacity-40">Contact</Link>
              <Link to="/checkout" className="hover:italic transition-all flex items-center gap-4">
                Bag
                {totalItems > 0 && (
                  <span className="text-sm font-mono opacity-50">({totalItems})</span>
                )}
              </Link>
            </div>

            <div className="mt-auto pb-12 space-y-6">
              <div className="h-[1px] bg-white/10 w-full" />
              <div className="flex justify-between items-center text-[10px] uppercase tracking-widest font-bold opacity-40">
                <p>© DORON 2025</p>
                <div className="flex gap-4">
                  <span>IG</span>
                  <span>FB</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
