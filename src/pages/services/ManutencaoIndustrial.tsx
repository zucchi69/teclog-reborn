import { ServicePageLayout } from "@/components/ServicePageLayout";
import img1 from "@/assets/services/manutencao/manutencao1.jpg";
import img2 from "@/assets/services/manutencao/manutencao2.jpg";
import img3 from "@/assets/services/manutencao/manutencao3.jpg";
import img4 from "@/assets/services/manutencao/manutencao4.jpg";
import img5 from "@/assets/services/manutencao/manutencao5.jpg";

const ManutencaoIndustrial = () => {
  return (
    <ServicePageLayout
      title="Manutenção Industrial"
      subtitle="Expertise em Campo"
      heroImage={img1}
      description={[
        "Manutenção industrial de excelência é o que mantém operações complexas funcionando sem interrupções. Nossa equipe atua em manutenção e caldeiraria com a precisão que a indústria de óleo e gás demanda.",
        "Oferecemos serviços completos que incluem montagem, substituição e lubrificação de válvulas, isolamento de sistemas por raquetes ou insertos, e cortes para abandono de dutos. Cada intervenção é planejada e executada com foco em segurança e eficiência.",
        "Além dos serviços especializados, fornecemos mão-de-obra qualificada para serviços gerais, sempre com profissionais treinados e comprometidos com os mais altos padrões de qualidade do setor.",
      ]}
      features={[
        "Montagem e substituição de válvulas",
        "Isolamento de sistemas por raquetes ou insertos",
        "Cortes para abandono de dutos",
        "Lubrificação e manutenção preventiva",
        "Fornecimento de mão-de-obra especializada",
      ]}
      images={[img2, img3, img4, img5]}
    />
  );
};

export default ManutencaoIndustrial;
