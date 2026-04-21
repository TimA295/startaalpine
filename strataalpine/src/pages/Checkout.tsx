import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, CreditCard, Truck, CheckCircle2, ShoppingBag } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Checkout() {
  const { cart, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // 1: Info, 2: Payment, 3: Success

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) setStep(step + 1);
    if (step === 2) {
      setTimeout(() => {
        clearCart();
      }, 500);
    }
  };

  if (cart.length === 0 && step !== 3) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
          <ShoppingBag className="h-16 w-16 text-muted-foreground mb-4" />
          <h2 className="text-2xl font-bold mb-2">Dein Warenkorb ist leer</h2>
          <p className="text-muted-foreground mb-6">Füge Produkte hinzu, um mit dem Checkout fortzufahren.</p>
          <Link to="/">
            <Button className="rounded-full">Zurück zum Shop</Button>
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow bg-background pt-32 pb-12">
        <div className="container px-4 mx-auto max-w-6xl">
          <div className="flex items-center gap-4 mb-8">
            <Link to="/">
              <Button variant="ghost" size="icon" className="rounded-full">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <h1 className="text-3xl font-bold">Checkout</h1>
          </div>

        <AnimatePresence mode="wait">
          {step === 3 ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-md mx-auto text-center py-12"
            >
              <div className="h-20 w-20 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="h-12 w-12" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Vielen Dank für deine Bestellung!</h2>
              <p className="text-muted-foreground mb-8">
                Wir haben deine Bestellung erhalten und senden dir in Kürze eine Bestätigungs-E-Mail.
              </p>
              <Link to="/">
                <Button className="w-full rounded-full h-12 text-lg">Weiter shoppen</Button>
              </Link>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column: Forms */}
              <div className="lg:col-span-2 space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`h-8 w-8 rounded-full flex items-center justify-center text-sm font-bold ${step >= 1 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>1</div>
                  <div className={`h-px flex-grow bg-muted ${step >= 2 ? 'bg-primary' : ''}`} />
                  <div className={`h-8 w-8 rounded-full flex items-center justify-center text-sm font-bold ${step >= 2 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>2</div>
                </div>

                <Card className="border-none shadow-sm">
                  <form onSubmit={handleNextStep}>
                    {step === 1 ? (
                      <>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Truck className="h-5 w-5" />
                            Versandinformationen
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="firstName">Vorname</Label>
                              <Input id="firstName" required placeholder="Max" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="lastName">Nachname</Label>
                              <Input id="lastName" required placeholder="Mustermann" />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">E-Mail Adresse</Label>
                            <Input id="email" type="email" required placeholder="max@beispiel.de" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="address">Straße & Hausnummer</Label>
                            <Input id="address" required placeholder="Musterstraße 123" />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="zip">PLZ</Label>
                              <Input id="zip" required placeholder="1010" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="city">Stadt</Label>
                              <Input id="city" required placeholder="Wien" />
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter>
                          <Button type="submit" className="w-full h-12 rounded-full">Weiter zur Zahlung</Button>
                        </CardFooter>
                      </>
                    ) : (
                      <>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <CreditCard className="h-5 w-5" />
                            Zahlungsmethode
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                          <div className="grid grid-cols-1 gap-4">
                            {['Kreditkarte', 'PayPal', 'Klarna Sofortüberweisung'].map((method) => (
                              <label key={method} className="flex items-center gap-4 p-4 border rounded-xl cursor-pointer hover:bg-muted/50 transition-colors has-[:checked]:border-primary has-[:checked]:bg-primary/5">
                                <input type="radio" name="payment" className="h-4 w-4 text-primary" defaultChecked={method === 'Kreditkarte'} />
                                <span className="font-medium">{method}</span>
                              </label>
                            ))}
                          </div>
                          
                          <div className="space-y-4 pt-4">
                            <div className="space-y-2">
                              <Label htmlFor="cardNum">Kartennummer</Label>
                              <Input id="cardNum" placeholder="0000 0000 0000 0000" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label htmlFor="expiry">Gültig bis</Label>
                                <Input id="expiry" placeholder="MM/YY" />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="cvc">CVC</Label>
                                <Input id="cvc" placeholder="123" />
                              </div>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="flex flex-col gap-4">
                          <Button type="submit" className="w-full h-12 rounded-full text-lg">Bestellung abschließen</Button>
                          <Button type="button" variant="ghost" onClick={() => setStep(1)} className="w-full">Zurück zu den Versandinfos</Button>
                        </CardFooter>
                      </>
                    )}
                  </form>
                </Card>
              </div>

              {/* Right Column: Order Summary */}
              <div className="space-y-6">
                <Card className="border-none shadow-sm sticky top-24">
                  <CardHeader>
                    <CardTitle>Bestellübersicht</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="max-h-[300px] overflow-y-auto space-y-4 pr-2">
                      {cart.map((item) => (
                        <div key={item.id} className="flex gap-3">
                          <div className="h-16 w-16 rounded-lg overflow-hidden bg-muted shrink-0">
                            <img src={item.image} alt={item.name} className="h-full w-full object-cover" referrerPolicy="no-referrer" />
                          </div>
                          <div className="flex-grow min-w-0">
                            <p className="font-bold text-sm truncate">{item.name}</p>
                            <p className="text-xs text-muted-foreground">{item.quantity}x € {item.price}</p>
                          </div>
                          <p className="font-bold text-sm">€ {(parseFloat(item.price) * item.quantity).toFixed(2)}</p>
                        </div>
                      ))}
                    </div>
                    <Separator />
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
                      <div className="flex justify-between text-xl font-bold">
                        <span>Gesamt</span>
                        <span>€ {totalPrice.toFixed(2)}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </AnimatePresence>
        </div>
      </div>
      <Footer />
    </div>
  );
}
