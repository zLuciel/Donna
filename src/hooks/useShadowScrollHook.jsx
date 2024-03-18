import { useState, useEffect } from 'react';


function useShadowScrollHook(initialValue) {

  const [isShadow, setIsShadow] = useState(initialValue);

  useEffect(() => {
    const handleScroll = () => {
      const showShadow = window.scrollY > 0;
      if (showShadow !== isShadow) {
        setIsShadow(showShadow);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isShadow]);

  
  return {
    isShadow,
  };
}

export default useShadowScrollHook;
