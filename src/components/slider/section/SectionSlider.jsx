import Link from "next/link";
import React from "react";
import SliderCard from "../products/SliderCard";
//import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
const SectionSlider = ({ renderjson, title, icon, pretIcoID, nextIcoID }) => {
  return (
    <section className="lg:container  mx-auto py-5  sm:px-20 md:px-20 lg:px-20 px-2">
      <div className="container flex items-center gap-5">
        <div className="flex gap-3 items-center">
          <span className="text-xl font-extrabold flex items-center gap-3">
            {false && (
              <p className="icon-shadow shadow shadow-2xl text-white p-2 text-sm sm:text-sm md:text-lg lg:text-3xl rounded-2xl">
                {icon}
              </p>
            )}
            <h2 className="text-nowrap  text-sm  sm:text-base md:text-lg lg:text-1xl">
              {title}
            </h2>
          </span>
          <p className="text-/[80px] roboto_regular">
            <Link
              className="text-nowrap lg:text-xs text-orange"
              href="/productos"
            >
              VER TODOS
            </Link>
          </p>
        </div>
        <span className="barra mx-auto flex items-center justify-center bg-[#EFE8E8]"></span>
        {/* botones de slider */}
        <div className="flex gap-3 ">
          <button
            id={pretIcoID}
            className="cateBtnSwiper bg-[#F7F7F7] text-[#ABABAB] flex justify-center items-center"
          >
            <FaChevronLeft className="text-sm  " />
          </button>
          <button
            id={nextIcoID}
            className="cateBtnSwiper flex  text-[#ABABAB] bg-[#F7F7F7] justify-center items-center"
          >
            <FaChevronRight className="text-sm" />
          </button>
        </div>
      </div>

      <div className="relative">
        <SliderCard
          renderjson={renderjson}
          idBtnNex={nextIcoID}
          idBtnPre={pretIcoID}
        />
      </div>
    </section>
  );
};

export default SectionSlider;
