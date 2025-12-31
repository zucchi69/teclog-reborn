import { ServicePageLayout } from "@/components/ServicePageLayout";
import img1 from "@/assets/services/secagem/secagem1.jpg";
import img2 from "@/assets/services/secagem/secagem2.jpg";
import img3 from "@/assets/services/secagem/secagem3.jpg";

const EsvaziamentoSecagem = () => {
  return (
    <ServicePageLayout
      title="Esvaziamento e Secagem"
      subtitle="Preparação Completa"
      heroImage={img3}
      description={[
        "O esvaziamento e secagem de dutos são etapas críticas na preparação de sistemas para manutenção, comissionamento ou retorno à operação. A Teclog disponibiliza pessoal especializado e equipamentos de alta performance para garantir resultados precisos.",
        "Para esvaziamento, utilizamos ar comprimido em baixas pressões ou nitrogênio quando são necessárias pressões maiores. O nitrogênio também é essencial para o esvaziamento de linhas existentes que necessitam de corte a quente para manutenção.",
        "Na secagem, oferecemos duas técnicas avançadas: a injeção de ar seco a -40°C, que transporta a umidade de uma extremidade à outra, e a injeção de nitrogênio, cuja elevada capacidade de absorção de água garante resultados superiores.",
      ]}
      features={[
        "Esvaziamento com ar comprimido ou nitrogênio",
        "Desalagamento controlado",
        "Secagem por ar seco a -40°C",
        "Secagem por injeção de nitrogênio",
        "Preparação para corte a quente",
      ]}
      images={[img1, img2, img3]}
    />
  );
};

export default EsvaziamentoSecagem;
