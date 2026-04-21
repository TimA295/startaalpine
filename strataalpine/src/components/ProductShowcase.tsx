import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const SHOWCASE_IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1542362567-b055002b91f4?auto=format&fit=crop&q=80&w=2070",
    title: "Carbon Fiber Steering Wheels",
    subtitle: "Precision engineered for ultimate control."
  },
  {
    url: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=2070",
    title: "Sim Rig Custom Mounts",
    subtitle: "Solid as a rock, adjustable for performance."
  },
  {
    url: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=2070",
    title: "Aerodynamic Performance Parts",
    subtitle: "Tested at speed, designed for the track."
  }
];

export default function ProductShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % SHOWCASE_IMAGES.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + SHOWCASE_IMAGES.length) % SHOWCASE_IMAGES.length);

  return (
    <section className="py-24 bg-card border-y relative overflow-hidden">
      <div className="container px-4 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 text-primary font-mono text-xs font-bold uppercase tracking-widest rounded">
            Gallery 0{currentIndex + 1}
          </div>
          
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic">
              {SHOWCASE_IMAGES[currentIndex].title}
            </h2>
            <p className="text-xl text-muted-foreground font-light max-w-lg">
              {SHOWCASE_IMAGES[currentIndex].subtitle}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prev}
              className="rounded-full h-12 w-12 border-2"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={next}
              className="rounded-full h-12 w-12 border-2"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
            <div className="ml-4 h-1 w-24 bg-muted overflow-hidden rounded-full">
              <motion.div 
                className="h-full bg-primary"
                initial={false}
                animate={{ width: `${((currentIndex + 1) / SHOWCASE_IMAGES.length) * 100}%` }}
              />
            </div>
          </div>
        </div>

        <div className="relative aspect-[16/10] lg:aspect-square group cursor-pointer overflow-hidden rounded-2xl shadow-2xl">
          {SHOWCASE_IMAGES.map((img, idx) => (
            <motion.div
              key={idx}
              className="absolute inset-0"
              initial={{ opacity: 0, x: 50 }}
              animate={{ 
                opacity: idx === currentIndex ? 1 : 0,
                x: idx === currentIndex ? 0 : (idx < currentIndex ? -50 : 50),
                scale: idx === currentIndex ? 1 : 1.1
              }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <img 
                src={img.url} 
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 -z-10 translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
        <span className="text-[20rem] font-black italic select-none">RACING</span>
      </div>
    </section>
  );
}
