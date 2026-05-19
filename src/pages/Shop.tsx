import { motion } from "motion/react";
import { PRODUCTS } from "../data/products";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function Shop() {
  const { addToCart } = useCart();

  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      
      <div className="pt-40 pb-24 max-w-[1800px] mx-auto px-6 md:px-12">
        <header className="mb-20">
          <h1 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tight mb-4">
            Catalog
          </h1>
          <p className="text-brand-brown opacity-60 text-sm max-w-xl">
            Exploring the intersection of architectural structure and fluid movement through our full collection of systemic wear.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-20">
          {PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.8 }}
              className="group"
            >
              <div className="relative aspect-[3/4.2] overflow-hidden bg-[#F2F2F2] mb-6">
                <Link to={`/product/${product.id}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-102"
                    referrerPolicy="no-referrer"
                  />
                </Link>
                <div className="absolute bottom-4 right-4 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <button 
                    onClick={() => addToCart(product)}
                    className="w-10 h-10 bg-white text-brand-ink rounded-full flex items-center justify-center shadow-xl hover:bg-brand-ink hover:text-white transition-colors"
                    title="Add to bag"
                  >
                    <ShoppingBag className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <div className="flex justify-between items-start gap-4">
                <div className="space-y-1">
                  <span className="text-[9px] uppercase tracking-[0.3em] font-bold opacity-30">
                    {product.category}
                  </span>
                  <Link to={`/product/${product.id}`}>
                    <h3 className="text-[11px] font-bold text-brand-ink uppercase tracking-wider leading-tight hover:opacity-70 transition-opacity">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="text-[11px] text-brand-brown font-medium opacity-50 font-mono">
                    {product.price}
                  </p>
                </div>
                <div className="flex gap-3 pt-4">
                  {['S', 'M', 'L'].map((size) => (
                    <button 
                      key={size}
                      className="text-[10px] font-bold text-brand-ink/30 hover:text-brand-brown transition-colors uppercase tracking-widest"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
