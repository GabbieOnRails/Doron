import { useCart } from "../context/CartContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, Trash2, Plus, Minus, CreditCard, Truck, ShieldCheck } from "lucide-react";

export default function Checkout() {
  const { cartItems, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();

  if (cartItems.length === 0) {
    return (
      <main className="bg-brand-offwhite min-h-screen">
        <Navbar />
        <div className="h-[70vh] flex flex-col items-center justify-center space-y-8">
          <h1 className="text-4xl md:text-5xl font-serif text-brand-ink">Your bag is empty</h1>
          <Link 
            to="/shop" 
            className="px-12 py-5 bg-brand-ink text-white text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-white hover:text-brand-ink border border-brand-ink transition-all duration-500"
          >
            Explore Catalog
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="bg-brand-offwhite min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-24 max-w-[1500px] mx-auto px-6 md:px-12">
        <h1 className="text-4xl md:text-5xl font-serif text-brand-ink mb-16">Review Your Order</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Cart Items */}
          <div className="lg:col-span-7 space-y-8">
            <div className="divide-y divide-brand-ink/5 border-y border-brand-ink/5">
              {cartItems.map((item) => (
                <div key={item.id} className="py-8 flex gap-8">
                  <div className="w-24 md:w-32 aspect-[3/4] bg-[#F2F2F2] flex-shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  
                  <div className="flex-1 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <div className="space-y-1">
                        <span className="text-[9px] uppercase tracking-[0.3em] font-bold opacity-30">{item.category}</span>
                        <h3 className="text-lg font-serif text-brand-ink">{item.name}</h3>
                      </div>
                      <p className="text-sm font-mono text-brand-brown">{item.price}</p>
                    </div>
                    
                    <div className="flex justify-between items-center mt-4">
                      <div className="flex items-center border border-brand-ink/10">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-2 hover:bg-brand-ink hover:text-white transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-4 text-xs font-mono">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-2 hover:bg-brand-ink hover:text-white transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-brand-ink/40 hover:text-red-500 transition-colors flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest"
                      >
                        <Trash2 className="w-4 h-4" />
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
              <div className="space-y-4">
                <Truck className="w-6 h-6 text-brand-ink/30" />
                <h4 className="text-[10px] font-bold uppercase tracking-widest leading-tight">Complimentary<br />Global Shipping</h4>
              </div>
              <div className="space-y-4">
                <ShieldCheck className="w-6 h-6 text-brand-ink/30" />
                <h4 className="text-[10px] font-bold uppercase tracking-widest leading-tight">Secured<br />Payment Gateways</h4>
              </div>
              <div className="space-y-4">
                <CreditCard className="w-6 h-6 text-brand-ink/30" />
                <h4 className="text-[10px] font-bold uppercase tracking-widest leading-tight">Flexible<br />Installment Plans</h4>
              </div>
            </div>
          </div>
          
          {/* Summary */}
          <div className="lg:col-span-5">
            <div className="bg-white p-8 md:p-12 sticky top-40 space-y-8">
              <h3 className="text-xl font-serif text-brand-ink border-b border-brand-ink/5 pb-6">Summary</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between text-xs font-medium uppercase tracking-widest">
                  <span className="opacity-40">Subtotal ({totalItems} items)</span>
                  <span>${totalPrice}</span>
                </div>
                <div className="flex justify-between text-xs font-medium uppercase tracking-widest">
                  <span className="opacity-40">Shipping</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="flex justify-between text-xs font-medium uppercase tracking-widest">
                  <span className="opacity-40">Estimated Tax</span>
                  <span>Calculated at checkout</span>
                </div>
              </div>
              
              <div className="border-t border-brand-ink/5 pt-6 flex justify-between items-end">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40">Total</span>
                <span className="text-3xl font-serif text-brand-ink">${totalPrice}</span>
              </div>
              
              <button className="w-full bg-brand-ink text-white py-6 text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-brand-brown transition-all duration-500 rounded-none flex items-center justify-center gap-3">
                Proceed to Payment
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <p className="text-[10px] text-center text-brand-ink/40 uppercase tracking-[0.1em] leading-relaxed">
                Prices include all import duties and local taxes.<br />Doron Maison offers secure checkout with SSL encryption.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
