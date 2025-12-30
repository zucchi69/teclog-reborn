import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Phone,
    label: "Telefone / Fax",
    value: "(27) 3245-0143",
    href: "tel:+552732450143",
  },
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
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve. Obrigado pelo interesse!",
    });
    setFormData({ name: "", email: "", phone: "", company: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contato" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-gold font-medium tracking-widest uppercase text-sm mb-4">
            Contato
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Vamos Conversar Sobre seu <span className="text-petrol">Projeto</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Entre em contato conosco para solicitar um orçamento ou tirar dúvidas 
            sobre nossos serviços. Nossa equipe está pronta para atendê-lo.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 md:p-10 shadow-md">
            <h3 className="text-2xl font-heading font-semibold text-foreground mb-6">
              Envie sua Mensagem
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-petrol focus:border-transparent transition-all"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-petrol focus:border-transparent transition-all"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-petrol focus:border-transparent transition-all"
                    placeholder="(00) 00000-0000"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-petrol focus:border-transparent transition-all"
                    placeholder="Nome da empresa"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-petrol focus:border-transparent transition-all resize-none"
                  placeholder="Descreva seu projeto ou dúvida..."
                />
              </div>
              <Button type="submit" variant="default" size="lg" className="w-full">
                <Send className="w-5 h-5 mr-2" />
                Enviar Mensagem
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-5 bg-card rounded-2xl p-6 shadow-sm border border-border hover:border-gold/30 transition-colors"
              >
                <div className="w-14 h-14 bg-petrol rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-foreground mb-1">{item.label}</h4>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-muted-foreground hover:text-petrol transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-muted-foreground">{item.value}</span>
                  )}
                </div>
              </div>
            ))}

            {/* Map Embed */}
            <div className="bg-card rounded-2xl overflow-hidden shadow-sm border border-border h-64">
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
        </div>
      </div>
    </section>
  );
};
