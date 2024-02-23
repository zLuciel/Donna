import Link from "next/link";
import React from "react";
import SliderCard from "../products/SliderCard";
import Image from "next/image";

const SectionSlider = ({ renderjson, image }) => {
  return (
    <section className="lg:container lg:mx-auto py-5  px-20">
      <div className="flex justify-between pr-8">
        <h2 className="mb-5 text-xl font-extrabold text-red-600">
          LO MEJOR DE LA BEBIDAS
        </h2>
        <p>
          <Link className="text-sm border-b border-black" href="/productos">
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
      <SliderCard renderjson={renderjson} />
    </section>
  );
};

export default SectionSlider;
