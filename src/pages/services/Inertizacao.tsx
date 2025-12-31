import { ServicePageLayout } from "@/components/ServicePageLayout";
import img1 from "@/assets/services/inertizacao/inertizacao1.jpg";
import img2 from "@/assets/services/inertizacao/inertizacao2.jpg";
import img3 from "@/assets/services/inertizacao/inertizacao3.jpg";
import img4 from "@/assets/services/inertizacao/inertizacao4.jpg";
import img5 from "@/assets/services/inertizacao/inertizacao5.jpg";
import img6 from "@/assets/services/inertizacao/inertizacao6.jpg";

const Inertizacao = () => {
  return (
    <ServicePageLayout
      title="Inertização de Dutos e Equipamentos"
      subtitle="Serviço Especializado"
      heroImage={img3}
      description={[
        "Quando a segurança não pode esperar, a inertização com nitrogênio é a solução definitiva. Este processo substitui atmosferas potencialmente perigosas por um ambiente inerte, garantindo operações seguras em ambientes industriais de alta complexidade.",
        "Na Teclog, dominamos a arte de transformar riscos em segurança. Nosso processo de inertização é essencial para permitir cortes a quente em dutos operacionalmente ativos, prevenir reações indesejadas durante o manuseio de substâncias e proteger equipamentos contra corrosão durante o comissionamento.",
        "Com equipamentos de última geração e uma equipe altamente qualificada, oferecemos unidades de bombeio e vaporização de nitrogênio com total suporte técnico, assegurando a excelência em cada operação.",
      ]}
      features={[
        "Inertização ou purga por deslocamento",
        "Inertização por diluição",
        "Inertização por ciclo de pressão",
      ]}
      images={[img6, img4, img1, img5, img2]}
    />
  );
};

export default Inertizacao;
