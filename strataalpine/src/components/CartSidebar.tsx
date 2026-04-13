import { useCart } from "@/context/CartContext";
import { motion, AnimatePresence } from "motion/react";
import { X, ShoppingBag, Trash2, Plus, Minus, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Link } from "react-router-dom";

export default function CartSidebar() {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white dark:bg-black shadow-2xl z-[70] flex flex-col"
          >
            <div className="p-6 flex items-center justify-between border-b">
              <div className="flex items-center gap-2">
                <ShoppingBag className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-bold">Warenkorb ({totalItems})</h2>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setIsCartOpen(false)} className="rounded-full">
                <X className="h-5 w-5" />
              </Button>
            </div>

            <ScrollArea className="flex-grow p-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-20">
                  <div className="h-20 w-20 rounded-full bg-muted flex items-center justify-center mb-4">
                    <ShoppingBag className="h-10 w-10 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Dein Warenkorb ist leer</h3>
                  <p className="text-muted-foreground mb-8">
                    Es sieht so aus, als hättest du noch keine Produkte hinzugefügt.
                  </p>
                  <Button onClick={() => setIsCartOpen(false)} className="rounded-full">
                    Jetzt shoppen
                  </Button>
                </div>
              ) : (
                <div className="space-y-6">
                  {cart.map((item) => (
                    <div key={item.id} className="flex gap-4 group">
                      <div className="h-24 w-24 rounded-xl overflow-hidden bg-muted shrink-0">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="h-full w-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="flex-grow flex flex-col justify-between py-1">
                        <div>
                          <div className="flex justify-between items-start gap-2">
                            <h4 className="font-bold text-sm leading-tight">{item.name}</h4>
                            <button 
                              onClick={() => removeFromCart(item.id)}
                              className="text-muted-foreground hover:text-destructive transition-colors"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">{item.category}</p>
                        </div>
                        
                        <div className="flex justify-between items-center mt-2">
                          <div className="flex items-center border rounded-lg overflow-hidden h-8">
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="px-2 hover:bg-muted transition-colors"
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="px-3 text-xs font-bold w-8 text-center">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="px-2 hover:bg-muted transition-colors"
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>
                          <p className="font-bold text-sm">€ {(parseFloat(item.price) * item.quantity).toFixed(2)}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </ScrollArea>

            {cart.length > 0 && (
              <div className="p-6 bg-muted/30 border-t space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Zwischensumme</span>
                    <span>€ {totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Versand</span>
                    <span className="text-green-600 font-medium">Kostenlos</span>
                  </div>
                  <Separator className="my-2" />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Gesamtbetrag</span>
                    <span>€ {totalPrice.toFixed(2)}</span>
                  </div>
                </div>
                
                <Link to="/checkout" onClick={() => setIsCartOpen(false)}>
                  <Button className="w-full h-14 rounded-full text-lg font-bold group">
                    Zur Kasse gehen
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <p className="text-[10px] text-center text-muted-foreground">
                  Inkl. MwSt. | Versandfertig in 2-3 Werktagen
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
