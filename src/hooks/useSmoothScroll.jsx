import { useEffect, useRef } from 'react';

const useSmoothScroll = () => {
  const sectionRefs = {
    categorias: useRef(null),
    tiendas: useRef(null),
    beneficio: useRef(null),
    // Agrega más referencias según sea necesario para cada sección
  };

  const scrollToSection = (sectionName) => {
    if (sectionRefs[sectionName]?.current) {
      sectionRefs[sectionName].current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return { sectionRefs, scrollToSection };
};

export default useSmoothScroll;
