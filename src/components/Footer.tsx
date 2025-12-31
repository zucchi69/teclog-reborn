import { Phone, Mail, MapPin } from "lucide-react";
const footerLinks = [{
  label: "Início",
  href: "#inicio"
}, {
  label: "Serviços",
  href: "#servicos"
}, {
  label: "Sobre",
  href: "#sobre"
}, {
  label: "Clientes",
  href: "#clientes"
}, {
  label: "Contato",
  href: "#contato"
}];
const services = ["Inertização", "Limpeza de Dutos", "Teste Hidrostático", "Enchimento de Dutos", "Manutenção Industrial", "Esvaziamento e Secagem"];
export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-petrol-dark text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#inicio" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-petrol-accent rounded-xl flex items-center justify-center shadow-petrol">
                <span className="text-primary-foreground font-heading font-bold text-xl">T</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-2xl tracking-tight text-primary-foreground">
                  TECLOG
                </span>
                <span className="text-xs font-medium tracking-widest text-primary-foreground">
                  TECNOLOGIA E LOGÍSTICA
                </span>
              </div>
            </a>
            <p className="mb-6 text-primary-foreground">
              Há mais de 30 anos oferecendo soluções especializadas em engenharia e 
              logística para a indústria de óleo e gás.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6 text-petrol-accent">Navegação</h4>
            <ul className="space-y-3">
              {footerLinks.map(link => <li key={link.label}>
                  <a href={link.href} className="text-primary-foreground/80 hover:text-gold transition-colors">
                    {link.label}
                  </a>
                </li>)}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6 text-petrol-accent">Serviços</h4>
            <ul className="space-y-3">
              {services.map(service => <li key={service}>
                  <a href="#servicos" className="text-primary-foreground/80 hover:text-gold transition-colors">
                    {service}
                  </a>
                </li>)}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6 text-petrol-accent">Contato</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+552732450143" className="flex items-center gap-3 text-primary-foreground/80 hover:text-gold transition-colors">
                  <Phone className="w-5 h-5 text-petrol-accent" />
                  <span>(27) 3245-0143</span>
                </a>
              </li>
              <li>
                <a href="mailto:teclog@teclog.eng.br" className="flex items-center gap-3 text-primary-foreground/80 hover:text-gold transition-colors">
                  <Mail className="w-5 h-5 text-petrol-accent" />
                  <span>teclog@teclog.eng.br</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/80">
                <MapPin className="w-5 h-5 text-petrol-accent flex-shrink-0 mt-1" />
                <span>
                  Estrada do Contorno de Jacaraipe, nº 235
                  <br />
                  Portal de Jacaraipe - Serra - ES
                  <br />
                  CEP: 29.173-830
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6 flex justify-center items-center">
          <p className="text-primary-foreground/60 text-sm text-center">
            © {currentYear} TECLOG - Tecnologia e Logística Ltda. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>;
};