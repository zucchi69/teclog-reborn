import { CheckCircle2, Target, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

const highlights = [
  "Equipe técnica altamente qualificada",
  "Certificações e conformidade com normas NR",
  "Equipamentos de última geração",
  "Atendimento em todo território nacional",
  "Experiência comprovada em grandes projetos",
  "Compromisso com segurança e meio ambiente",
];

export const About = () => {
  return (
    <section id="sobre" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-gold font-medium tracking-widest uppercase text-sm mb-4">
              Quem Somos
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Mais de <span className="text-petrol">30 Anos</span> de Tradição em Engenharia
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              A <strong className="text-foreground">TECLOG - Tecnologia e Logística</strong> é uma empresa capixaba 
              com mais de três décadas de atuação no setor de óleo e gás. Nascemos da paixão pela engenharia 
              e do compromisso com a excelência em serviços de manutenção industrial.
            </p>
            <p className="text-muted-foreground mb-8">
              Localizada em Serra, Espírito Santo, nossa empresa se especializou em serviços de limpeza, 
              inertização e testes hidrostáticos de dutos, atendendo grandes empresas do setor energético 
              brasileiro através de processos licitatórios públicos.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-petrol-accent flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <Button variant="default" size="lg" asChild>
              <a href="#contato">Entre em Contato</a>
            </Button>
          </div>

          {/* Mission & Vision Cards */}
          <div className="space-y-6">
            <div className="bg-card rounded-2xl p-8 shadow-md border border-border">
              <div className="w-14 h-14 bg-petrol-accent rounded-xl flex items-center justify-center shadow-petrol mb-6">
                <Target className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">Nossa Missão</h3>
              <p className="text-muted-foreground">
                Prestar serviços de engenharia e logística com excelência técnica, segurança operacional 
                e respeito ao meio ambiente, contribuindo para o desenvolvimento sustentável do setor 
                energético brasileiro.
              </p>
            </div>

            <div className="bg-petrol rounded-2xl p-8 shadow-petrol">
              <div className="w-14 h-14 bg-petrol-accent rounded-xl flex items-center justify-center shadow-petrol mb-6">
                <Eye className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-heading font-semibold text-primary-foreground mb-4">Nossa Visão</h3>
              <p className="text-gold-light">
                Ser reconhecida como empresa de referência em serviços especializados para a indústria 
                de óleo e gás, mantendo os mais elevados padrões de qualidade, segurança e inovação 
                tecnológica.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
