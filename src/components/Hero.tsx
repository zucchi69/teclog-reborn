import { Button } from "@/components/ui/button";
import { ChevronDown, Shield, Award, Users } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { icon: Shield, value: "30+", label: "Anos de Experiência" },
  { icon: Award, value: "500+", label: "Projetos Concluídos" },
  { icon: Users, value: "50+", label: "Clientes Atendidos" },
];

export const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Engenharia de dutos e pipelines"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-overlay" />
        <div className="absolute inset-0 bg-petrol-dark/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gold/20 backdrop-blur-sm border border-gold/30 rounded-full px-5 py-2 mb-8 animate-fade-up opacity-0">
            <Award className="w-5 h-5 text-gold" />
            <span className="text-gold-light font-medium">Referência em Engenharia de Dutos</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-primary-foreground leading-tight mb-6 animate-fade-up opacity-0 animation-delay-100">
            Tecnologia e Excelência em{" "}
            <span className="text-gradient-gold">Manutenção de Dutos</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-gold-light/90 max-w-2xl mb-10 animate-fade-up opacity-0 animation-delay-200">
            Há mais de 30 anos oferecendo soluções especializadas em limpeza, inertização 
            e manutenção de dutos para a indústria de petróleo e gás do Brasil.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-up opacity-0 animation-delay-300">
            <Button variant="hero" size="xl" asChild>
              <a href="#servicos">Conheça Nossos Serviços</a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#contato">Fale Conosco</a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 animate-fade-up opacity-0 animation-delay-400">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="flex items-center gap-4 bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-5"
              >
                <div className="w-14 h-14 bg-gradient-gold rounded-xl flex items-center justify-center shadow-gold">
                  <stat.icon className="w-7 h-7 text-petrol-dark" />
                </div>
                <div>
                  <div className="text-3xl font-heading font-bold text-primary-foreground">{stat.value}</div>
                  <div className="text-sm text-gold-light">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#servicos"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary-foreground/60 hover:text-gold transition-colors animate-float"
      >
        <span className="text-sm font-medium">Saiba mais</span>
        <ChevronDown className="w-6 h-6" />
      </a>
    </section>
  );
};
