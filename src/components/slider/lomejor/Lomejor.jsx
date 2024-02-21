import React from "react";
import Image from "next/image";
import "@mantine/carousel/styles.css";

const LoMejor = ({image}) => {
  return (   
        <div className="relative image-product-Mejor">
            <Image src={image}  sizes="(min-width: 808px) 50vw, 100vw"
           alt="Donna" />
        </div>
  );
};

export default LoMejor;
