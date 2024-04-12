import React from "react";
import Image from "next/image";
import Verdura from "@/assets/VERDURAS.png";
import Wave from "@/assets/wave.png";
const Main = () => {
  return (
    <main className="portada-main py-20 w-screen relative">
      <div className="absolute bottom-0 w-full" style={{height:"300px"}}>
      <Image src={Wave} sizes="100vw" fill alt="wave"/>
      </div>
      <div className="xl:container  lg:px-20 mx-auto  grid main-grid place-self-center items-center h-portada ">
        {/* col 1 */}
        <div className="flex flex-col gap-8 z-[1] ">
          <h1 className="text-8xl title-nunito text-[#ff4d00] ">
          ! TODO LO QUE NECESITAS ¡
          </h1>
          <p className="nunito-sub-title sub-title-main text-2xl">Delivery gratis a tu casa</p>
         <div className="flex gap-7">
          <button type="button" className="text-md btn-default text-white bg-[#ff4d00] ">Quiero conocer màs</button>
          <button type="button" style={{border:"1px solid #696969"}} className="text-md btn-default">Quiero conocer màs</button>
         </div>
        </div>
        {/* col 2 */}
        <div style={{ position: 'relative', height: '100%', width:"100%"}}>
          <Image
            src={Verdura}
            className="portada"
            alt="Doona Portada"
            fill
            sizes="(min-width: 808px) 50vw, 100vw"
            style={{
              objectFit: "contain", // cover, contain, none
            }}
          />
        </div>
      </div>
    </main>
  );
};

export default Main;
