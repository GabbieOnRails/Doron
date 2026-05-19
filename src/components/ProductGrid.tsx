import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { PRODUCTS } from "../data/products";

export default function ProductGrid() {
  const displayProducts = PRODUCTS.slice(0, 6);

  return (
    <section className="min-h-screen flex flex-col justify-center py-24 bg-white snap-start">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 w-full">
        <div className="flex justify-between items-end mb-16 px-2">
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tighter text-brand-ink">
            Doron Men's Favourite
          </h2>
          <Link 
            to="/shop"
            className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-brown hover:opacity-60 transition-opacity pb-1"
          >
            Shop All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16 px-2">
          {displayProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group"
            >
              <Link to={`/product/${product.id}`}>
                <div className="relative aspect-[3/4.2] overflow-hidden bg-[#F2F2F2] mb-6">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-102"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </Link>
              
              <div className="flex justify-between items-start gap-4">
                <div className="space-y-1">
                  <Link to={`/product/${product.id}`}>
                    <h3 className="text-[11px] font-bold text-brand-ink uppercase tracking-wider leading-tight hover:opacity-70 transition-opacity">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="text-[11px] text-brand-brown font-medium opacity-50 font-mono">
                    {product.price}
                  </p>
                </div>
                <div className="flex gap-3 pt-0.5">
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
    </section>
  );
}
