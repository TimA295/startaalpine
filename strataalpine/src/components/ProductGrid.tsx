import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart, Star } from "lucide-react";

const PRODUCTS = [
  {
    id: 1,
    name: "Geometrische Vase 'Alps'",
    price: "34.90",
    category: "Home Decor",
    image: "https://picsum.photos/seed/vase/600/600",
    rating: 4.9,
    tag: "Bestseller"
  },
  {
    id: 2,
    name: "Modulare Schreibtisch-Ablage",
    price: "22.50",
    category: "Office",
    image: "https://picsum.photos/seed/desk/600/600",
    rating: 4.8,
    tag: "Neu"
  },
  {
    id: 3,
    name: "Artikulierter Drache",
    price: "19.00",
    category: "Toys",
    image: "https://picsum.photos/seed/dragon/600/600",
    rating: 5.0,
    tag: "Beliebt"
  },
  {
    id: 4,
    name: "Minimalistischer Kopfhörerhalter",
    price: "28.00",
    category: "Tech",
    image: "https://picsum.photos/seed/headphone/600/600",
    rating: 4.7,
    tag: null
  }
];

export default function ProductGrid() {
  return (
    <section id="shop" className="py-24">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Vorgefertigte Designs</h2>
            <p className="text-muted-foreground text-lg">
              Entdecken Sie unsere kuratierte Auswahl an 3D-gedruckten Produkten. 
              Jedes Stück wird on-demand für Sie gefertigt, um Abfall zu minimieren.
            </p>
          </div>
          <Button variant="outline" className="rounded-full">Alle Produkte ansehen</Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((product) => (
            <Card key={product.id} className="group overflow-hidden border-none shadow-sm hover:shadow-xl transition-all duration-300">
              <CardHeader className="p-0 relative">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {product.tag && (
                  <Badge className="absolute top-4 left-4 bg-white/90 text-black hover:bg-white border-none shadow-sm">
                    {product.tag}
                  </Badge>
                )}
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/50 backdrop-blur-md text-white px-2 py-1 rounded-lg text-xs font-medium">
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  {product.rating}
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
                  {product.category}
                </p>
                <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </CardTitle>
                <p className="text-2xl font-bold">€ {product.price}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button className="w-full rounded-full gap-2">
                  <ShoppingCart className="h-4 w-4" />
                  In den Warenkorb
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
