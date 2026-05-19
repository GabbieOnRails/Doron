import { motion } from "motion/react";
import { Link } from "react-router-dom";

export default function MissionSection() {
  return (
    <section className="py-24 bg-white snap-start">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 w-full">
        <div className="relative group aspect-[4/5] md:aspect-[21/9] w-full overflow-hidden rounded-[2rem] md:rounded-[3rem] bg-brand-brown">
          {/* Background Image */}
          <motion.img 
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="https://i.ibb.co/G3dJFR1p/doron-men-1777877589-3889441349867265491-3615955564.jpg" 
            alt="Doron Men"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 brightness-[1.05] contrast-[1.05]"
            referrerPolicy="no-referrer"
          />
          
          {/* Subtle Contrast Overlay */}
          <div className="absolute inset-0 bg-black/25 mix-blend-multiply" />
          
          {/* Content Overlay */}
          <div className="absolute inset-0 p-6 md:p-20 flex flex-col items-center justify-center text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4 md:space-y-6 max-w-[280px] md:max-w-none"
            >
              <div className="space-y-2">
                <h2 className="text-3xl md:text-5xl font-serif tracking-tight leading-tight">
                  Your Style,<br className="md:hidden" /> Your Standards.
                </h2>
                <p className="text-[10px] md:text-base font-medium opacity-80 uppercase tracking-[0.2em] md:tracking-[0.3em]">
                  built for modern men.
                </p>
              </div>
              
              <div className="pt-6 md:pt-8">
                <Link 
                  to="/shop"
                  className="inline-block px-8 md:px-12 py-4 md:py-5 border border-white text-white text-[10px] md:text-[11px] font-bold uppercase tracking-[0.3em] rounded-none hover:bg-white hover:text-brand-ink transition-all duration-500"
                >
                  Shop Collection
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
