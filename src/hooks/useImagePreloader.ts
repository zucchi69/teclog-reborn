/**
 * Hook para pré-carregar imagens em background
 * Usa a API nativa Image() para cachear imagens antes de serem renderizadas
 */
export const preloadImages = (imageSources: string[]): Promise<void[]> => {
  const promises = imageSources.map((src) => {
    return new Promise<void>((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve();
      img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
      img.src = src;
    });
  });
  
  return Promise.all(promises);
};

/**
 * Pré-carrega imagens de forma silenciosa (não bloqueia, não lança erro)
 */
export const preloadImagesSilent = (imageSources: string[]): void => {
  imageSources.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
};
