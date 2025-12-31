import { ArrowRight } from "lucide-react";
import serviceInertization from "@/assets/service-inertization.jpg";
import serviceCleaning from "@/assets/service-cleaning.jpg";
import serviceHydrostatic from "@/assets/service-hydrostatic.jpg";
import serviceFilling from "@/assets/service-filling.jpg";
import serviceMaintenance from "@/assets/service-maintenance.jpg";
import serviceDrying from "@/assets/service-drying.jpg";

const services = [
  {
    title: "Inertização",
    description: "Substituição de atmosfera de dutos com gases inertes para garantir segurança em operações de manutenção e inspeção.",
    image: serviceInertization,
  },
  {
    title: "Limpeza de Dutos",
    description: "Remoção de detritos, incrustações e resíduos através de técnicas especializadas de passagem de pigs.",
    image: serviceCleaning,
  },
  {
    title: "Teste Hidrostático",
    description: "Ensaios de pressão para verificação da integridade estrutural e estanqueidade de dutos e equipamentos.",
    image: serviceHydrostatic,
  },
  {
    title: "Enchimento de Dutos",
    description: "Operações controladas de enchimento com água ou outros fluidos para comissionamento e testes.",
    image: serviceFilling,
  },
  {
    title: "Manutenção Industrial",
    description: "Serviços especializados de manutenção preventiva e corretiva em equipamentos industriais.",
    image: serviceMaintenance,
  },
  {
    title: "Esvaziamento e Secagem",
    description: "Procedimentos de desidratação e remoção de fluidos para preparação de dutos e sistemas.",
    image: serviceDrying,
  },
];

export const Services = () => {
  return (
    <section id="servicos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-gold font-medium tracking-widest uppercase text-sm mb-4">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Soluções Completas para a{" "}
            <span className="text-petrol">Indústria de Óleo & Gás</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Oferecemos serviços especializados em engenharia e logística, atendendo às 
            mais exigentes normas de qualidade e segurança do setor.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group relative bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-petrol-dark/80 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3 group-hover:text-petrol transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {service.description}
                </p>
                <a
                  href="#contato"
                  className="inline-flex items-center gap-2 text-gold font-medium hover:text-gold-dark transition-colors group/link"
                >
                  <span>Saiba mais</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>

              {/* Accent Border */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-petrol-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
