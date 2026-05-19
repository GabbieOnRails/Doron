import { motion } from "motion/react";
import { Link } from "react-router-dom";
import suitsImg from "../assets/images/doron_suits_1779184286093.png";
import outerwearImg from "../assets/images/doron_outerwear_1779184301790.png";
import accessoriesImg from "../assets/images/doron_accessories_1779184321153.png";
import footwearImg from "../assets/images/doron_footwear_1779184337800.png";

const CATEGORIES = [
  {
    title: "Tailored",
    id: "01",
    img: suitsImg,
    span: "md:col-span-1",
  },
  {
    title: "Structural",
    id: "02",
    img: outerwearImg,
    span: "md:col-span-1",
  },
  {
    title: "Detail",
    id: "03",
    img: accessoriesImg,
    span: "md:col-span-1",
  },
  {
    title: "Foundation",
    id: "04",
    img: footwearImg,
    span: "md:col-span-1",
  },
];

export default function Categories() {
  return (
    <section className="h-screen flex flex-col justify-center py-32 bg-brand-offwhite snap-start">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 w-full">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-20">
          <div>
            <span className="text-brand-brown font-mono text-xs font-bold uppercase tracking-[0.4em] mb-4 block">
              The Collection
            </span>
            <h2 className="text-[8vw] md:text-[6vw] font-display font-black uppercase tracking-tight leading-none">
              Signature <span className="text-outline">Series</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm font-medium text-brand-ink/40 leading-relaxed italic border-l-2 border-brand-brown pl-6">
            Refining the modern wardrobe through architectural precision and organic materials.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-[2px] bg-brand-ink/5 border border-brand-ink/5">
          {CATEGORIES.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group bg-white relative overflow-hidden aspect-[4/5]`}
            >
              <img
                src={cat.img}
                alt={cat.title}
                className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 p-8"
                referrerPolicy="no-referrer"
              />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-between pointer-events-none">
                <span className="text-brand-brown font-mono text-[10px] font-bold tracking-widest translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  EST. 2025
                </span>
                
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tighter leading-none mb-2">
                    {cat.title}
                  </h3>
                   <div className="w-0 group-hover:w-full h-[2px] bg-brand-brown transition-all duration-500 delay-100" />
                </div>
              </div>
              
              <Link to="/shop" className="absolute inset-0 z-10" aria-label={`Shop ${cat.title}`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
