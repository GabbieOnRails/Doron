import { useParams, Link } from "react-router-dom";
import { PRODUCTS } from "../data/products";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";
import { motion } from "motion/react";
import { ArrowLeft, Plus, Minus, ShoppingBag } from "lucide-react";
import { useState } from "react";

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = PRODUCTS.find((p) => p.id === Number(id));
  const [selectedSize, setSelectedSize] = useState("M");
  const [isAdded, setIsAdded] = useState(false);

  if (!product) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-serif mb-4">Product not found</h1>
          <Link to="/shop" className="text-brand-brown underline uppercase tracking-widest text-xs">Back to shop</Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-24 max-w-[1800px] mx-auto px-6 md:px-12">
        <Link to="/shop" className="inline-flex items-center gap-2 mb-12 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-ink/40 hover:text-brand-ink transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Catalog
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Images */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="aspect-[3/4.2] bg-[#F2F2F2] overflow-hidden rounded-sm"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
          
          {/* Info */}
          <div className="lg:col-span-5">
            <div className="sticky top-40 space-y-12">
              <div className="space-y-4">
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-30">
                  {product.category}
                </span>
                <h1 className="text-4xl md:text-5xl font-serif text-brand-ink leading-tight">
                  {product.name}
                </h1>
                <p className="text-2xl font-mono text-brand-brown">
                  {product.price}
                </p>
              </div>

              <div className="space-y-6">
                <p className="text-sm text-brand-ink/60 leading-relaxed max-w-md italic">
                  An exploration of architectural form and functional elegance. This piece is meticulously crafted using premium materials to ensure both aesthetic impact and lasting comfort. Designed for the modern man who values precision and understated luxury.
                </p>
              </div>

              <div className="space-y-8">
                <div className="space-y-4">
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-ink/40">Select Size</h4>
                  <div className="flex gap-4">
                    {['S', 'M', 'L', 'XL'].map((size) => (
                      <button 
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`w-12 h-12 flex items-center justify-center border text-[11px] font-bold transition-all duration-300 ${
                          selectedSize === size 
                            ? 'border-brand-ink bg-brand-ink text-white' 
                            : 'border-brand-ink/10 text-brand-ink/40 hover:border-brand-ink/30'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-8">
                  <button 
                    onClick={handleAddToCart}
                    className={`w-full py-6 text-[11px] font-bold uppercase tracking-[0.3em] transition-all duration-500 rounded-none border ${
                      isAdded 
                        ? 'bg-green-600 border-green-600 text-white' 
                        : 'bg-brand-ink border-brand-ink text-white hover:bg-white hover:text-brand-ink'
                    }`}
                  >
                    {isAdded ? 'Added to bag' : 'Add to bag'}
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8 border-t border-brand-ink/5 pt-12">
                <div className="space-y-2">
                  <h5 className="text-[10px] font-bold uppercase tracking-widest">Composition</h5>
                  <p className="text-[11px] text-brand-ink/50">100% Fine gauge wool, ethically sourced.</p>
                </div>
                <div className="space-y-2">
                  <h5 className="text-[10px] font-bold uppercase tracking-widest">Care</h5>
                  <p className="text-[11px] text-brand-ink/50">Dry clean only by specialists.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
