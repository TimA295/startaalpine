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
    <section className="relative overflow-hidden pt-24 pb-20 md:pt-40 md:pb-32">
      {/* Background patterns */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_45%_at_50%_50%,rgba(255,0,0,0.05)_0%,transparent_100%)] dark:bg-[radial-gradient(45%_45%_at_50%_50%,rgba(255,0,0,0.1)_0%,transparent_100%)]" />
      <div className="absolute top-0 right-0 -z-10 opacity-10 blur-3xl pointer-events-none">
        <div className="h-[500px] w-[500px] bg-primary rounded-full" />
      </div>

      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-card border shadow-sm mb-8 font-mono text-xs font-bold tracking-[0.2em] uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Next-Gen Additive Performance
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-6xl md:text-9xl font-black tracking-[calc(-0.04em)] uppercase italic leading-[0.85] mb-8"
          >
            Drive the <br />
            <span className="text-primary not-italic">Future.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl font-light leading-relaxed"
          >
            Von der Rennstrecke direkt in Ihren Simulator. Wir fertigen hochfeste 
            Komponenten aus Carbon-Faser und technischen Kunststoffen für maximale Performance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <a href="#custom-order">
              <Button size="lg" className="h-16 px-10 text-lg font-bold uppercase italic tracking-wider rounded-xl w-full sm:w-auto racing-gradient border-b-4 border-black/20">
                Custom Engineering
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <a href="#shop">
              <Button size="lg" variant="outline" className="h-16 px-10 text-lg font-bold uppercase italic tracking-wider rounded-xl w-full sm:w-auto border-2">
                Shop Equipment
                <ShoppingBag className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </motion.div>
        </div>

        {/* Feature grid with numbering */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-32 border-t pt-16"
        >
          <div className="group space-y-4">
            <div className="font-mono text-4xl font-black text-primary/10 group-hover:text-primary/100 transition-colors duration-500">01</div>
            <h3 className="text-2xl font-bold uppercase italic flex items-center gap-3">
              <Layers className="h-6 w-6 text-primary" />
              Carbon Infused
            </h3>
            <p className="text-muted-foreground text-lg">
              Unsere Carbon-Fiber Filamente bieten die Festigkeit von Metall bei einem Bruchteil des Gewichts.
            </p>
          </div>
          <div className="group space-y-4">
            <div className="font-mono text-4xl font-black text-primary/10 group-hover:text-primary/100 transition-colors duration-500">02</div>
            <h3 className="text-2xl font-bold uppercase italic flex items-center gap-3">
              <Cpu className="h-6 w-6 text-primary" />
              Aerodynamik
            </h3>
            <p className="text-muted-foreground text-lg">
              Präzise berechnete Geometrien für optimierten Luftstrom und maximalen Anpressdruck auf der Strecke.
            </p>
          </div>
          <div className="group space-y-4">
            <div className="font-mono text-4xl font-black text-primary/10 group-hover:text-primary/100 transition-colors duration-500">03</div>
            <h3 className="text-2xl font-bold uppercase italic flex items-center gap-3">
              <ShieldCheck className="h-6 w-6 text-primary" />
              Stress Tested
            </h3>
            <p className="text-muted-foreground text-lg">
              Jedes Teil wird für extreme Belastungen im Simulator oder Realbetrieb entwickelt und geprüft.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
