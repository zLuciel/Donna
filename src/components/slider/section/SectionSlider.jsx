import Link from "next/link";
import React from "react";
import SliderCard from "../products/SliderCard";
import Image from "next/image";
const SectionSlider = ({ renderjson, image , title,icon,pretIcoID,nextIcoID}) => {
  return (
    <section className="lg:container  mx-auto py-5  sm:px-20 md:px-20 lg:px-20 px-20" >
      <div className="flex justify-between pr-8">
        <span className="mb-5 text-xl font-extrabold flex items-center gap-3">
          <p className="bg-red-600 text-white px-4 py-1 text-lg rounded-2xl">{icon}</p>
          <h2 >
          {title}
        </h2>
        </span>
        <p>
          <Link className="text-sm border-b border-black text-red-600" href="/productos">
            VER TODOS
          </Link>
        </p>
      </div>
      {image && (
        <Image
          className="w-full"
          src={image}
          alt="Picture of the author"
          sizes="(min-width: 808px) 50vw, 100vw"
        />
      )}
      <div className="relative">
        <SliderCard renderjson={renderjson} idBtnNex={nextIcoID} idBtnPre={pretIcoID}/>
      </div>
    </section>
  );
};

export default SectionSlider;
