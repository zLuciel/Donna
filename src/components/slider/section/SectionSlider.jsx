import Link from "next/link";
import React from "react";
import SliderCard from "../products/SliderCard";
import Image from "next/image";
const SectionSlider = ({ renderjson, title,icon,pretIcoID,nextIcoID}) => {
  return (
    <section className="lg:container  mx-auto py-5  sm:px-20 md:px-20 lg:px-20 px-2" >
      <div className="flex justify-between items-center pr-8">
        <span className="text-xl font-extrabold flex items-center gap-3">
          <p className="icon-shadow shadow shadow-2xl text-white p-2 text-sm sm:text-sm md:text-lg lg:text-3xl rounded-2xl">{icon}</p>
          <h2 style={{color:"#0B0B0B"}} className=" text-sm  sm:text-base md:text-lg lg:text-1xl">
          {title}
        </h2>
        </span>
        <p>
          <Link className="text-xss  lg:text-sm border-b border-[#FF4D00] text-orange" href="/productos">
            VER TODOS
          </Link>
        </p>
      </div>
   
      <div className="relative">
        <SliderCard renderjson={renderjson} idBtnNex={nextIcoID} idBtnPre={pretIcoID}/>
      </div>
    </section>
  );
};

export default SectionSlider;
