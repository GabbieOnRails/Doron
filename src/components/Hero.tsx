import { motion } from "motion/react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative h-[120vh] w-full overflow-hidden bg-brand-brown flex items-end snap-start">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        {/* Desktop Image */}
        <motion.img
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src="https://i.ibb.co/HfZTXhNj/Chat-GPT-Image-May-19-2026-11-49-56-AM.png"
          alt="DORON Collection 2025 Desktop"
          className="hidden md:block w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        {/* Mobile Image */}
        <motion.img
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src="https://i.ibb.co/PvBFCstj/Chat-GPT-Image-May-19-2026-11-46-20-AM.png"
          alt="DORON Collection 2025 Mobile"
          className="block md:hidden w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-6 md:px-12 pb-24">
      </div>
    </section>
  );
}
