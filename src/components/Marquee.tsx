import { motion } from "motion/react";

export default function Marquee() {
  return (
    <section className="h-screen flex items-center border-y border-brand-ink/10 overflow-hidden bg-brand-ink text-white snap-start">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center gap-12 px-6">
            <span className="font-display text-[10vw] font-black uppercase tracking-tighter">
              DORON MAISON
            </span>
            <div className="w-8 h-8 bg-brand-beige rotate-45" />
            <span className="font-display text-[10vw] font-black uppercase tracking-tighter text-outline">
              COLLECTION 2025
            </span>
            <div className="w-8 h-8 border-2 border-brand-beige rounded-full" />
            <span className="font-display text-[10vw] font-black uppercase tracking-tighter">
              REFINED PRESENCE
            </span>
            <div className="w-8 h-8 bg-white rotate-12" />
          </div>
        ))}
      </div>
    </section>
  );
}
