import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    question: "Welche Materialien stehen zur Verfügung?",
    answer: "Wir bieten eine breite Palette an Thermoplasten an, darunter PLA für dekorative Zwecke, PETG für mechanische Bauteile, sowie technische Materialien wie ABS, ASA und Carbon-faserverstärkte Filamente für höchste Ansprüche."
  },
  {
    question: "Wie lange dauert ein durchschnittlicher Druckauftrag?",
    answer: "Die Produktionszeit hängt stark von der Größe und Komplexität ab. Einfache Teile sind oft innerhalb von 24-48 Stunden versandfertig. Größere Projekte oder Kleinserien besprechen wir individuell mit Ihnen."
  },
  {
    question: "Können Sie auch beim Design helfen?",
    answer: "Ja, StrataAlp bietet auch CAD-Design-Dienstleistungen an. Wenn Sie nur eine Skizze oder eine Idee haben, können unsere Ingenieure daraus ein druckfertiges 3D-Modell erstellen."
  },
  {
    question: "Versenden Sie auch außerhalb von Österreich?",
    answer: "Unser Fokus liegt auf dem österreichischen Markt, um kurze Lieferwege und persönliche Beratung zu garantieren. Auf Anfrage versenden wir jedoch auch gerne in die gesamte DACH-Region."
  },
  {
    question: "Welche Dateiformate werden akzeptiert?",
    answer: "Am besten senden Sie uns .STL, .OBJ oder .STEP Dateien. Wir können jedoch auch mit vielen anderen gängigen CAD-Formaten arbeiten."
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-muted/20">
      <div className="container px-4 mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Häufig gestellte Fragen</h2>
          <p className="text-muted-foreground text-lg">
            Alles, was Sie über unseren 3D-Druck-Service wissen müssen.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {FAQS.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-medium text-lg">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
