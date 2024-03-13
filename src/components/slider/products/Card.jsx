import { useProduct } from "@/app/provider/ProviderContext";
import Image from "next/image";
import {useContext, useState } from 'react';

const Card = ({ image,name,price,regular_price,id }) => {
  let { setDataProduct } = useProduct();
  const [addedProducts, setAddedProducts] = useState([]);
  

    const addToCart = () => {

      const newProduct = {
        quantity: 1,
        id,
        name,
        price,
        regular_price,
        image: image.src,
      };
    
      const existingProducts = JSON.parse(localStorage.getItem('addedProducts')) || [];
    
      const existingProductIndex = existingProducts.findIndex(
        (product) => product.name === newProduct.name
      );
    
      if (existingProductIndex !== -1) {
        existingProducts[existingProductIndex].quantity += 1;
      } else {
        existingProducts.push(newProduct);
      }
    
      localStorage.setItem('addedProducts', JSON.stringify(existingProducts));
      setDataProduct(existingProducts)
      setAddedProducts(existingProducts);
    };

  return (
    <div className="relative card-product flex flex-col justify-start ">
      <div className="image-product mb-4 relative">
        <span className=" rounded-tr-xl left-0 text-xs py-1 rounded-br-xl absolute des-gradient text-white font-semibold px-3 left-0"> - 8%</span>
       <div className="container-img-card">
       <Image fill src={image.src}  sizes="(min-width: 808px) 50vw, 100vw" alt="Donna" />
       </div>
      </div>

      <div className="px-3">
        <span className="mb-5">
          <h3 className="mb-6 leading-5  text-sm text-semibold">
            {name}
          </h3>
        </span>

        <div className="mb-1">
          <p className="text-orange text-sm/[22px] font-extrabold mb-2">
            Precio online S/{price}
          </p>
          <p className="text-xs">
            Precio regular <u className="line-through">S/{regular_price} </u>
          </p>
        </div>
        <button onClick={addToCart} className="mt-4 font-bold p-1  w-full btn-agre text-white rounded-2xl">
          AGREGAR
        </button>
      </div>
    </div>
  );
};

export default Card;
