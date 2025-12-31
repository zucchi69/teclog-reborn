import { ServicePageLayout } from "@/components/ServicePageLayout";
import img1 from "@/assets/services/limpeza/limpeza1.jpg";
import img2 from "@/assets/services/limpeza/limpeza2.jpg";
import img3 from "@/assets/services/limpeza/limpeza3.jpg";

const LimpezaDutos = () => {
  return (
    <ServicePageLayout
      title="Limpeza de Dutos"
      subtitle="Eficiência e Precisão"
      heroImage={img2}
      description={[
        "Dutos limpos significam operações eficientes e seguras. Nossa especialidade em limpeza de dutos garante a remoção completa de detritos, incrustações e resíduos que comprometem a performance e a integridade dos seus sistemas.",
        "Utilizamos técnicas avançadas de passagem de pigs (dispositivos de limpeza interna) que percorrem toda a extensão dos dutos, removendo impurezas e preparando a superfície interna para inspeção ou operação.",
        "Cada projeto recebe uma abordagem personalizada, considerando o tipo de material transportado, o diâmetro do duto e as condições operacionais específicas. O resultado: dutos preparados para máxima performance.",
      ]}
      features={[
        "Passagem de pigs de limpeza mecânica",
        "Remoção de incrustações e resíduos sólidos",
        "Limpeza para comissionamento e manutenção",
        "Preparação para inspeção interna",
      ]}
      images={[img1, img2, img3]}
    />
  );
};

export default LimpezaDutos;
