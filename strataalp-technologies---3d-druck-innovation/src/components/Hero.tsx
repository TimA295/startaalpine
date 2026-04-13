import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { 
  Printer, 
  Box, 
  Settings, 
  ShoppingBag, 
  ChevronRight, 
  Layers, 
  Cpu, 
  ShieldCheck 
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24">
      {/* Background patterns */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_45%_at_50%_50%,rgba(0,0,0,0.02)_0%,transparent_100%)]" />
      <div className="absolute top-0 left-1/2 -z-10 h-[1000px] w-[1000px] -translate-x-1/2 -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:top-[-10%] sm:h-[1500px] sm:w-[1500px]">
        <svg
          viewBox="0 0 1024 1024"
          className="absolute top-1/2 left-1/2 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
          aria-hidden="true"
        >
          <circle cx="512" cy="512" r="512" fill="url(#grid-pattern)" fillOpacity="0.1" />
          <defs>
            <radialGradient id="grid-pattern">
              <stop stopColor="#000" />
              <stop offset="1" stopColor="#000" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Handgefertigt in Österreich
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
          >
            Ihre Vision in <span className="text-primary italic">3D</span> realisiert.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl"
          >
            Von individuellen Prototypen bis hin zu exklusiven Design-Objekten. 
            StrataAlp Technologies kombiniert modernste Additive Fertigung mit österreichischer Präzision.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#custom-order">
              <Button size="lg" className="h-12 px-8 text-base rounded-full w-full sm:w-auto">
                Custom Order anfragen
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <a href="#shop">
              <Button size="lg" variant="outline" className="h-12 px-8 text-base rounded-full w-full sm:w-auto">
                Shop durchsuchen
                <ShoppingBag className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </motion.div>
        </div>

        {/* Feature grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24"
        >
          <div className="flex flex-col p-6 rounded-2xl bg-card border shadow-sm hover:shadow-md transition-shadow">
            <div className="h-12 w-12 rounded-xl bg-primary/5 flex items-center justify-center mb-4">
              <Layers className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Multi-Material</h3>
            <p className="text-muted-foreground">
              PLA, PETG, ABS, Carbon-Fiber und mehr. Wir wählen das perfekte Material für Ihre Anwendung.
            </p>
          </div>
          <div className="flex flex-col p-6 rounded-2xl bg-card border shadow-sm hover:shadow-md transition-shadow">
            <div className="h-12 w-12 rounded-xl bg-primary/5 flex items-center justify-center mb-4">
              <Cpu className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Präzisionstechnik</h3>
            <p className="text-muted-foreground">
              Toleranzen im Millimeterbereich durch kalibrierte High-End Drucker der neuesten Generation.
            </p>
          </div>
          <div className="flex flex-col p-6 rounded-2xl bg-card border shadow-sm hover:shadow-md transition-shadow">
            <div className="h-12 w-12 rounded-xl bg-primary/5 flex items-center justify-center mb-4">
              <ShieldCheck className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Qualitätsgarantie</h3>
            <p className="text-muted-foreground">
              Jedes Teil wird einer strengen Qualitätskontrolle unterzogen, bevor es unsere Manufaktur verlässt.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
