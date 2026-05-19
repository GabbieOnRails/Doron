/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Marquee from "./components/Marquee";
import ProductGrid from "./components/ProductGrid";
import MissionSection from "./components/MissionSection";
import Footer from "./components/Footer";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import Checkout from "./pages/Checkout";
import { CartProvider } from "./context/CartContext";
import { motion, useScroll, useSpring } from "motion/react";

function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="relative selection:bg-brand-brown selection:text-white h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[6px] bg-brand-brown z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <Hero />
      
      <div className="bg-brand-offwhite relative">
        <ProductGrid />
        
        <MissionSection />

        <Footer />
      </div>
    </main>
  );
}

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}
