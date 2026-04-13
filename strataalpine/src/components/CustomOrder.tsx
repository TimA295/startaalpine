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
    <section id="custom-order" className="py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ihr Projekt, <br />
              <span className="text-primary">unsere Expertise.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Haben Sie eine STL-Datei oder nur eine vage Idee? Wir unterstützen Sie 
              beim Design, der Materialwahl und dem finalen Druck. Unser Team in 
              Österreich steht für persönliche Beratung und schnelle Umsetzung.
            </p>
            
            <ul className="space-y-4">
              {[
                "Kostenlose Machbarkeitsanalyse",
                "Express-Versand innerhalb Österreichs",
                "Individuelle Materialberatung",
                "Prototyping & Kleinserien"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <Card className="border-none shadow-xl bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Anfrage senden</CardTitle>
              <CardDescription>
                Laden Sie Ihre Datei hoch oder beschreiben Sie Ihr Vorhaben.
              </CardDescription>
            </CardHeader>
            <CardContent>
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
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">Vorname</Label>
                        <Input id="first-name" placeholder="Max" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Nachname</Label>
                        <Input id="last-name" placeholder="Mustermann" required />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="beispiel@gmail.com" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">Projektbeschreibung</Label>
                      <textarea
                        id="description"
                        className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Erzählen Sie uns von Ihrer Idee..."
                        required
                      />
                    </div>

                    <div className="border-2 border-dashed border-muted rounded-xl p-8 text-center hover:border-primary/50 transition-colors cursor-pointer group">
                      <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground group-hover:text-primary transition-colors" />
                      <p className="text-sm font-medium">Datei hochladen (.stl, .obj, .step)</p>
                      <p className="text-xs text-muted-foreground mt-1">Maximal 50MB</p>
                    </div>

                    <Button type="submit" className="w-full h-12 rounded-full">
                      Anfrage absenden
                      <Send className="ml-2 h-4 w-4" />
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
