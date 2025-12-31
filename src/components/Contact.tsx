import { Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: Mail,
    label: "E-mail",
    value: "teclog@teclog.eng.br",
    href: "mailto:teclog@teclog.eng.br",
  },
  {
    icon: MapPin,
    label: "Endereço",
    value: "Av. Lagoa Juara, 235 - Portal de Jacaraípe, Serra - ES, 29173-830",
    href: "https://maps.google.com/?q=Av.+Lagoa+Juara,+235+-+Portal+de+Jacaraípe,+Serra+-+ES,+29173-830",
  },
  {
    icon: Clock,
    label: "Horário",
    value: "Segunda a Sexta: 8h às 18h",
    href: null,
  },
];

export const Contact = () => {
  return (
    <section id="contato" className="scroll-mt-24 py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block font-medium tracking-widest uppercase text-sm mb-4 text-muted-foreground">
            Contato
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Vamos Conversar Sobre seu{" "}
            <span className="text-secondary">Projeto</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Entre em contato conosco para solicitar um orçamento ou tirar
            dúvidas sobre nossos serviços. Nossa equipe está pronta para
            atendê-lo.
          </p>

          {/* Email CTA */}
          <Button size="lg" className="gap-2" asChild>
            <a href="mailto:teclog@teclog.eng.br?subject=Solicitação de Orçamento">
              <Mail className="w-5 h-5" />
              Enviar E-mail
            </a>
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Contact Info Cards */}
          {contactInfo.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center text-center gap-4 bg-card rounded-2xl p-6 shadow-sm border border-border hover:border-gold/30 transition-colors"
            >
              <div className="w-14 h-14 bg-petrol-accent rounded-xl flex items-center justify-center flex-shrink-0">
                <item.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-foreground mb-1">
                  {item.label}
                </h4>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="text-muted-foreground hover:text-petrol transition-colors text-sm"
                  >
                    {item.value}
                  </a>
                ) : (
                  <span className="text-muted-foreground text-sm">
                    {item.value}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Map Embed */}
        <div className="mt-12 max-w-4xl mx-auto bg-card rounded-2xl overflow-hidden shadow-sm border border-border h-64">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.5!2d-40.2085!3d-20.1355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb818e1b9c0c0c7%3A0x0!2sAv.+Lagoa+Juara%2C+235+-+Portal+de+Jacaraípe%2C+Serra+-+ES%2C+29173-830!5e0!3m2!1spt-BR!2sbr!4v1"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização da Teclog"
          />
        </div>
      </div>
    </section>
  );
};
