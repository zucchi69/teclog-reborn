import { ServicePageLayout } from "@/components/ServicePageLayout";
import img1 from "@/assets/services/hidrostatico/hidrostatico1.jpg";
import img2 from "@/assets/services/hidrostatico/hidrostatico2.jpg";
import img3 from "@/assets/services/hidrostatico/hidrostatico3.jpg";

const TesteHidrostatico = () => {
  return (
    <ServicePageLayout
      title="Teste Hidrostático"
      subtitle="Integridade Comprovada"
      heroImage={img1}
      description={[
        "A confiança na integridade dos seus dutos e equipamentos começa com um teste hidrostático bem executado. Este ensaio de pressão é fundamental para verificar a resistência estrutural e a estanqueidade de sistemas pressurizados.",
        "A Teclog dispõe de pessoal altamente qualificado e equipamentos de ponta para executar testes hidrostáticos em dutos e vasos de pressão, sempre em total conformidade com os procedimentos executivos mais rigorosos do setor.",
        "Nossos testes são monitorados e registrados através de equipamentos eletrônicos de controle de pressão, temperatura e vazão, permanentemente calibrados e certificados. Cada resultado é documentado com precisão, garantindo rastreabilidade e conformidade normativa.",
      ]}
      features={[
        "Monitoramento eletrônico em tempo real",
        "Equipamentos calibrados e certificados",
        "Documentação completa e rastreável",
        "Conformidade com normas técnicas nacionais e internacionais",
      ]}
      images={[img2, img1, img3]}
    />
  );
};

export default TesteHidrostatico;
