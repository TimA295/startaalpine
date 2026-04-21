import { Printer, Instagram, Facebook, Twitter, Mail, MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="bg-muted/50 pt-24 pb-12 border-t">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2 font-display text-2xl font-bold">
              <div className="h-10 w-10 rounded-xl bg-primary flex items-center justify-center text-primary-foreground">
                <Printer className="h-6 w-6" />
              </div>
              StrataAlp
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Innovative 3D-Druck Lösungen aus dem Herzen Österreichs. 
              StrataAlp Technologies verbindet Technologie mit Handwerkskunst.
            </p>
            <div className="flex gap-4">
              <a href="#" className="h-10 w-10 rounded-full border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">Navigation</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Startseite</a></li>
              <li><a href="#shop" className="hover:text-primary transition-colors">Shop</a></li>
              <li><a href="#custom-order" className="hover:text-primary transition-colors">Custom Order</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Über uns</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Support</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Versand & Rückgabe</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Material-Guide</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Datenschutz</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Impressum</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Kontakt</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span>Technologiepark 1, <br />1010 Wien, Österreich</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span>strataalptechnologies@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2026 StrataAlp Technologies. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">AGB</a>
            <a href="#" className="hover:text-primary transition-colors">Datenschutz</a>
            <a href="#" className="hover:text-primary transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
