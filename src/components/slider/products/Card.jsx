import { useProduct } from "@/app/provider/ProviderContext";
import Image from "next/image";
import {useContext, useState } from 'react';
import { FaClipboardCheck } from "react-icons/fa6";

import { notifications } from '@mantine/notifications';
const Card = ({ image,name,price,regular_price,id }) => {
  let { setDataProduct } = useProduct();
  const [addedProducts, setAddedProducts] = useState([]);
  function formatoPrice(price){
    const formatPrice = new Intl.NumberFormat("de-DE", {currency: "PEN" }).format(price);
    const formatDecimal = formatPrice.replace(".", ",");
    return formatDecimal;
  }
  


    const addToCart = (name,id) => {

      const newProduct = {
        quantity: 1,
        id,
        name,
        price,
        regular_price,
        image: image.src,
      };
      
      notifications.show({
        id: `addCart${id}`,
        withCloseButton: true,
        autoClose: 20000,
        radius:"lg",
        title: name ,
        message: 'Su producto a sido agregado',
        color: 'white',
       // icon:<FaClipboardCheck style={{color:"#ff4d00"}} />,
        className: 'bg-notifi-addcart',
        style: { color: 'white' },
        loading: false,
      })

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
        <span className="mb-5 title-card">
          <h3 className="text-sm roboto_bold text-[#565656] ">
            {name}
          </h3>
        </span>

        <div className="mb-1">
          <span className="text-orange text-sm/[22px]  roboto_Extrabold flex justify-between  mb-2">
           <p>Precio online</p>  <p>S/{formatoPrice(price)}.00</p>
          </span>
          <span className="text-xs flex roboto_regular text-[#898888] justify-between">
            <p>Precio regular</p> <u className="line-through">S/{formatoPrice(regular_price)}.00 </u>
          </span>
        </div>
        <button onClick={()=> addToCart(name,id)} className="mt-4 font-bold p-1  w-full btn-agre text-white rounded-2xl">
          AGREGAR
        </button>
      </div>
    </div>
  );
};

export default Card;
