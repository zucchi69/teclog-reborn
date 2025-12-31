// Mapa centralizado de imagens por serviço para preload

// Inertização
import inertizacao1 from "@/assets/services/inertizacao/inertizacao1.jpg";
import inertizacao2 from "@/assets/services/inertizacao/inertizacao2.jpg";
import inertizacao3 from "@/assets/services/inertizacao/inertizacao3.jpg";
import inertizacao4 from "@/assets/services/inertizacao/inertizacao4.jpg";
import inertizacao5 from "@/assets/services/inertizacao/inertizacao5.jpg";
import inertizacao6 from "@/assets/services/inertizacao/inertizacao6.jpg";

// Limpeza
import limpeza1 from "@/assets/services/limpeza/limpeza1.jpg";
import limpeza2 from "@/assets/services/limpeza/limpeza2.jpg";
import limpeza3 from "@/assets/services/limpeza/limpeza3.jpg";

// Hidrostático
import hidrostatico1 from "@/assets/services/hidrostatico/hidrostatico1.jpg";
import hidrostatico2 from "@/assets/services/hidrostatico/hidrostatico2.jpg";
import hidrostatico3 from "@/assets/services/hidrostatico/hidrostatico3.jpg";

// Enchimento
import enchimento1 from "@/assets/services/enchimento/enchimento1.jpg";
import enchimento2 from "@/assets/services/enchimento/enchimento2.jpg";
import enchimento3 from "@/assets/services/enchimento/enchimento3.jpg";

// Manutenção
import manutencao1 from "@/assets/services/manutencao/manutencao1.jpg";
import manutencao2 from "@/assets/services/manutencao/manutencao2.jpg";
import manutencao3 from "@/assets/services/manutencao/manutencao3.jpg";
import manutencao4 from "@/assets/services/manutencao/manutencao4.jpg";
import manutencao5 from "@/assets/services/manutencao/manutencao5.jpg";

// Secagem
import secagem1 from "@/assets/services/secagem/secagem1.jpg";
import secagem2 from "@/assets/services/secagem/secagem2.jpg";
import secagem3 from "@/assets/services/secagem/secagem3.jpg";

export const serviceImagesMap: Record<string, string[]> = {
  "/servicos/inertizacao": [
    inertizacao1,
    inertizacao2,
    inertizacao3,
    inertizacao4,
    inertizacao5,
    inertizacao6,
  ],
  "/servicos/limpeza-de-dutos": [
    limpeza1,
    limpeza2,
    limpeza3,
  ],
  "/servicos/teste-hidrostatico": [
    hidrostatico1,
    hidrostatico2,
    hidrostatico3,
  ],
  "/servicos/enchimento-de-dutos": [
    enchimento1,
    enchimento2,
    enchimento3,
  ],
  "/servicos/manutencao-industrial": [
    manutencao1,
    manutencao2,
    manutencao3,
    manutencao4,
    manutencao5,
  ],
  "/servicos/esvaziamento-e-secagem": [
    secagem1,
    secagem2,
    secagem3,
  ],
};
