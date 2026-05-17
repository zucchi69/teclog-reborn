import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Gerenciador central de scroll para navegação SPA
 * - Desativa restauração automática do browser
 * - Se tem hash: rola para o elemento com offset do header
 * - Se não tem hash: vai para o topo instantaneamente
 */
export const ScrollManager = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Desativa restauração automática de scroll do browser
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Scroll imediato para o topo antes de qualquer renderização (sem hash)
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    // Com hash: pequeno delay para garantir que o DOM está renderizado
    const timeoutId = setTimeout(() => {
      const elementId = hash.slice(1);
      const element = document.getElementById(elementId);

      if (element) {
        // Calcula offset do header (aproximadamente 80px)
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 10);

    return () => clearTimeout(timeoutId);
  }, [pathname, hash]);

  return null;
};
