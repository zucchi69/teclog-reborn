import { ServicePageLayout } from "@/components/ServicePageLayout";
import img1 from "@/assets/services/enchimento/enchimento1.jpg";
import img2 from "@/assets/services/enchimento/enchimento2.jpg";
import img3 from "@/assets/services/enchimento/enchimento3.jpg";

const EnchimentoDutos = () => {
  return (
    <ServicePageLayout
      title="Enchimento de Dutos"
      subtitle="Preparação para Testes"
      heroImage={img1}
      description={[
        "O enchimento controlado de dutos é a etapa fundamental que antecede testes hidrostáticos e operações de lavagem interna. Um procedimento executado com precisão garante resultados confiáveis e seguros.",
        "A Teclog dispõe de pessoal qualificado e equipamentos especializados para a realização do bombeio e acompanhamento completo da operação, sempre dentro das regulamentações técnicas, de segurança e preservação do meio ambiente.",
        "Nosso diferencial está na garantia de completa retirada do ar durante o enchimento com água bombeada, eliminando bolsões de ar que poderiam comprometer a precisão dos testes subsequentes.",
      ]}
      features={[
        "Bombeio controlado com vazão monitorada",
        "Eliminação completa de bolsões de ar",
        "Conformidade com regulamentações ambientais",
        "Preparação para testes hidrostáticos",
      ]}
      images={[img2, img1, img3]}
    />
  );
};

export default EnchimentoDutos;
