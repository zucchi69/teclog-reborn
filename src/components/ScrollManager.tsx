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

    // Pequeno delay para garantir que o DOM está renderizado
    const timeoutId = setTimeout(() => {
      if (hash) {
        // Remove o # do hash
        const elementId = hash.slice(1);
        const element = document.getElementById(elementId);

        if (element) {
          // Desativa smooth scroll temporariamente para scroll instantâneo
          const htmlElement = document.documentElement;
          const originalScrollBehavior = htmlElement.style.scrollBehavior;
          htmlElement.style.scrollBehavior = "auto";

          // Calcula offset do header (aproximadamente 80px)
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "auto",
          });

          // Restaura o scroll-behavior original
          requestAnimationFrame(() => {
            htmlElement.style.scrollBehavior = originalScrollBehavior;
          });
        }
      } else {
        // Sem hash: vai para o topo instantaneamente
        window.scrollTo(0, 0);
      }
    }, 10);

    return () => clearTimeout(timeoutId);
  }, [pathname, hash]);

  return null;
};
