import { Link } from "react-router-dom";
import petrobrasLogo from "@/assets/clients/petrobras.png";
import transpetroLogo from "@/assets/clients/transpetro.png";
import valeLogo from "@/assets/clients/vale.png";
import arcelormittalLogo from "@/assets/clients/arcelormittal.png";
import samarcoLogo from "@/assets/clients/samarco.svg";
import petrocityLogo from "@/assets/clients/petrocity.png";

const clients = [
  { name: "Petrobras", logo: petrobrasLogo, scale: "scale-100" },
  { name: "Transpetro", logo: transpetroLogo, scale: "scale-[2.5]" },
  { name: "Vale", logo: valeLogo, scale: "scale-100" },
  { name: "ArcelorMittal", logo: arcelormittalLogo, scale: "scale-100" },
  { name: "Samarco", logo: samarcoLogo, scale: "scale-100" },
  { name: "Petrocity", logo: petrocityLogo, scale: "scale-110" },
];

export const Clients = () => {
  return (
    <section id="clientes" className="scroll-mt-24 py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block font-medium tracking-widest uppercase text-sm mb-4 text-muted-foreground">
            Nossos Clientes
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Empresas que <span className="text-secondary">Confiam</span> em Nós
          </h2>
          <p className="text-lg text-muted-foreground">
            Temos orgulho de atender algumas das maiores empresas do setor
            energético e industrial do Brasil, construindo parcerias duradouras
            baseadas em confiança e resultados.
          </p>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {clients.map((client, index) => (
            <div
              key={client.name}
              className="group bg-card rounded-2xl p-6 flex flex-col items-center justify-center border border-border hover:border-gold/50 hover:shadow-gold transition-all duration-300 hover:-translate-y-1 min-h-[140px]"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="w-full h-16 flex items-center justify-center mb-3 overflow-hidden">
                <img
                  src={client.logo}
                  alt={`Logo ${client.name}`}
                  className={`max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300 ${client.scale}`}
                />
              </div>
              <span className="text-xs font-medium text-muted-foreground text-center group-hover:text-foreground transition-colors">
                {client.name}
              </span>
            </div>
          ))}
        </div>

        {/* Trust Banner */}
        <div className="mt-16 bg-gradient-hero rounded-3xl p-10 md:p-14 text-center">
          <h3 className="text-2xl font-heading font-bold text-primary-foreground mb-4 md:text-4xl">
            Quer fazer parte dessa lista?
          </h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-primary-foreground">
            Entre em contato conosco e descubra como podemos agregar valor às
            operações da sua empresa com nossos serviços especializados.
          </p>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 font-semibold px-8 py-4 rounded-xl transition-colors shadow-gold bg-[#b3dfe6] text-secondary-foreground"
          >
            Solicitar Proposta Comercial
          </a>
        </div>
      </div>
    </section>
  );
};
