import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart, Star } from "lucide-react";
import { useCart, Product } from "@/context/CartContext";

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "GT3 Pro Steering Plate",
    price: "189.00",
    category: "Sim Racing",
    image: "https://images.unsplash.com/photo-1542362567-b055002b91f4?auto=format&fit=crop&q=80&w=600",
    rating: 4.9,
    tag: "Pro-Grade"
  },
  {
    id: 2,
    name: "Carbon Air Intake Vent",
    price: "124.50",
    category: "Automotive",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=600",
    rating: 4.8,
    tag: "Track Ready"
  },
  {
    id: 3,
    name: "Magnetic Paddle Shifters",
    price: "79.00",
    category: "Sim Racing",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=600",
    rating: 5.0,
    tag: "High-Click"
  },
  {
    id: 4,
    name: "Custom Gauge Pod",
    price: "45.00",
    category: "Automotive",
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=600",
    rating: 4.7,
    tag: null
  }
];

export default function ProductGrid() {
  const { addToCart } = useCart();

  return (
    <section id="shop" className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-12">
          <div className="max-w-3xl">
            <div className="inline-block px-3 py-1 bg-primary text-primary-foreground font-mono text-[10px] font-bold uppercase tracking-widest mb-4">
              Catalog 2026
            </div>
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter italic mb-6">
              Full Self-Service <br />
              Performance <span className="text-primary italic">Gear.</span>
            </h2>
            <p className="text-muted-foreground text-xl font-light">
              Präzisionsteile gefertigt mit industriellen FDM und SLA Verfahren. 
              Bereit für den harten Einsatz auf dem Asphalt oder im virtuellen Cockpit.
            </p>
          </div>
          <Button variant="outline" className="rounded-xl h-14 px-8 border-2 font-bold uppercase italic tracking-wider">
            Alle Produkte
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {PRODUCTS.map((product) => (
            <Card key={product.id} className="group overflow-hidden border-2 bg-card/50 hover:border-primary/50 transition-all duration-300 rounded-2xl flex flex-col">
              <CardHeader className="p-0 relative">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <p className="text-white text-sm font-medium italic uppercase tracking-wider">Schnellansicht</p>
                  </div>
                </div>
                {product.tag && (
                  <Badge className="absolute top-4 left-4 racing-gradient text-white border-none shadow-lg px-3 py-1 font-mono text-[10px] uppercase tracking-tighter">
                    {product.tag}
                  </Badge>
                )}
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/60 backdrop-blur-md text-white px-2 py-1 rounded font-mono text-[10px] font-bold">
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  {product.rating}
                </div>
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-3 font-mono">
                  {product.category}
                </p>
                <CardTitle className="text-2xl mb-4 font-black uppercase tracking-tight italic group-hover:text-primary transition-colors leading-tight">
                  {product.name}
                </CardTitle>
                <div className="h-px w-full bg-border mb-6 group-hover:bg-primary/30 transition-colors" />
                <p className="text-3xl font-black italic tracking-tighter">€ {product.price}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button 
                  className="w-full h-12 rounded-xl gap-2 font-bold uppercase italic racing-gradient border-b-2 border-black/20"
                  onClick={() => addToCart(product)}
                >
                  <ShoppingCart className="h-4 w-4" />
                  Bestellen
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
