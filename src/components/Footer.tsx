import { Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const }
    }
  };

  return (
    <footer className="bg-brand-beige py-20 pb-0 overflow-hidden snap-start">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-24 mb-20"
        >
          
          {/* Link Columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-24 order-2 lg:order-1">
            <motion.div variants={itemVariants} className="space-y-6">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-ink/40">Company</h4>
              <ul className="space-y-3 text-[11px] font-medium uppercase tracking-widest text-brand-ink">
                <li><a href="#" className="hover:opacity-50 transition-opacity">About Us</a></li>
                <li><a href="#" className="hover:opacity-50 transition-opacity">Size Guide</a></li>
                <li><a href="#" className="hover:opacity-50 transition-opacity">Shipping & Returns</a></li>
                <li><a href="#" className="hover:opacity-50 transition-opacity">News</a></li>
              </ul>
            </motion.div>
            
            <motion.div variants={itemVariants} className="space-y-6">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-ink/40">Catalog</h4>
              <ul className="space-y-3 text-[11px] font-medium uppercase tracking-widest text-brand-ink">
                <li><Link to="/shop" className="hover:opacity-50 transition-opacity">Suits</Link></li>
                <li><Link to="/shop" className="hover:opacity-50 transition-opacity">Shirts</Link></li>
                <li><Link to="/shop" className="hover:opacity-50 transition-opacity">Trousers</Link></li>
                <li><Link to="/shop" className="hover:opacity-50 transition-opacity">Knitwear</Link></li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6 col-span-2 md:col-span-1">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-ink/40">Terms & Policy</h4>
              <ul className="space-y-3 text-[11px] font-medium uppercase tracking-widest text-brand-ink">
                <li><a href="#" className="hover:opacity-50 transition-opacity">Terms of Service</a></li>
                <li><a href="#" className="hover:opacity-50 transition-opacity">Privacy Policy</a></li>
                <li><a href="#" className="hover:opacity-50 transition-opacity">Cookie Policy</a></li>
              </ul>
            </motion.div>
          </div>

          {/* Newsletter Section */}
          <motion.div variants={itemVariants} className="lg:w-1/3 space-y-10 lg:space-y-12 order-1 lg:order-2">
            <div className="space-y-8 text-center lg:text-left">
              <div className="space-y-2">
                <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-ink">Stay Inspired. Stay Elegant.</h4>
                <p className="text-[13px] text-brand-ink/60 font-medium leading-relaxed max-w-[300px] mx-auto lg:ml-0">
                  Join our list for exclusive updates, new collections, and styling insights.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-end gap-4 border-b border-brand-ink/20 pb-0 sm:pb-2 group focus-within:border-brand-ink transition-colors">
                <input 
                  type="email" 
                  placeholder="E-mail address"
                  className="bg-transparent flex-1 text-[13px] font-medium placeholder:text-brand-ink/30 outline-none py-3 sm:pb-2 text-center sm:text-left"
                />
                <button className="bg-brand-ink text-white px-8 py-3 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-[#333] transition-colors mb-2 sm:-mb-0.5 whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end gap-6 text-brand-ink">
              <a href="#" className="hover:opacity-50 transition-opacity"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:opacity-50 transition-opacity"><Twitter className="w-5 h-5" /></a>
            </div>
          </motion.div>
        </motion.div>

        {/* Massive Brand Name Background */}
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 0.7, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative pt-12 md:pt-20 -mx-6 md:-mx-12 overflow-hidden pointer-events-none select-none"
        >
          <h2 className="text-[28vw] font-display font-bold uppercase leading-none tracking-[-0.05em] text-white/40 whitespace-nowrap text-center opacity-70">
            DORON
          </h2>
        </motion.div>
      </div>
    </footer>
  );
}
