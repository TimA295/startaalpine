import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, Send, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function CustomOrder() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="custom-order" className="py-24 bg-card border-y">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-block px-3 py-1 bg-primary text-primary-foreground font-mono text-[10px] font-bold uppercase tracking-widest">
              Special Engineering
            </div>
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter italic leading-[0.9]">
              Ihr Projekt, <br />
              <span className="text-primary italic">unsere Präzision.</span>
            </h2>
            <p className="text-xl text-muted-foreground font-light leading-relaxed max-w-xl">
              Besitzen Sie eine STL-Datei oder nur eine vage Skizze? Wir optimieren Ihr Design für maximale Festigkeit und Aerodynamik. Engineering-Support direkt aus Österreich.
            </p>
            
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "Machbarkeitsanalyse",
                "CFD Simulation",
                "Materialberatung",
                "Einzelfertigung"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 group">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <CheckCircle2 className="h-5 w-5 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <span className="font-bold uppercase italic text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <Card className="border-2 shadow-2xl bg-background/50 backdrop-blur-xl rounded-3xl overflow-hidden">
            <CardHeader className="p-8 pb-4">
              <CardTitle className="text-3xl font-black uppercase italic tracking-tight">Anfrage senden</CardTitle>
              <CardDescription className="text-base">
                Laden Sie Ihre Konstruktionsdaten hoch oder beschreiben Sie Ihr Concept.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8 pt-0">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="first-name" className="text-xs font-black uppercase tracking-widest font-mono text-primary">01 Vorname</Label>
                        <Input id="first-name" placeholder="Max" required className="h-12 rounded-xl bg-card border-2" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name" className="text-xs font-black uppercase tracking-widest font-mono text-primary">02 Nachname</Label>
                        <Input id="last-name" placeholder="Mustermann" required className="h-12 rounded-xl bg-card border-2" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-xs font-black uppercase tracking-widest font-mono text-primary">03 Email</Label>
                      <Input id="email" type="email" placeholder="beispiel@gmail.com" required className="h-12 rounded-xl bg-card border-2" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description" className="text-xs font-black uppercase tracking-widest font-mono text-primary">04 Projektbeschreibung</Label>
                      <textarea
                        id="description"
                        className="flex min-h-[120px] w-full rounded-xl border-2 border-input bg-card px-4 py-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Erzählen Sie uns von Ihrer Idee..."
                        required
                      />
                    </div>

                    <div className="border-2 border-dashed border-muted rounded-2xl p-10 text-center hover:border-primary/50 transition-all cursor-pointer group bg-muted/20">
                      <Upload className="h-10 w-10 mx-auto mb-3 text-muted-foreground group-hover:text-primary transition-colors" />
                      <p className="font-bold uppercase italic text-sm">Daten Upload (.stl, .obj, .step)</p>
                      <p className="text-xs text-muted-foreground mt-2 font-mono">Limit 50MB per File</p>
                    </div>

                    <Button type="submit" className="w-full h-14 rounded-xl text-lg font-black uppercase italic tracking-widest racing-gradient border-b-4 border-black/20">
                      Engineering Anfrage
                      <Send className="ml-2 h-5 w-5" />
                    </Button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center"
                  >
                    <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Anfrage erhalten!</h3>
                    <p className="text-muted-foreground">
                      Vielen Dank für Ihr Interesse. Wir melden uns innerhalb von 24 Stunden bei Ihnen.
                    </p>
                    <Button 
                      variant="ghost" 
                      className="mt-6"
                      onClick={() => setSubmitted(false)}
                    >
                      Weitere Anfrage senden
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
