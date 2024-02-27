"use client";
import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { Checkbox } from "@mantine/core";

const CategoriasOptions = ({ name }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="filter-border">
      <button
        className="p-2 rounded w-full flex items-center justify-between   border-b-indigo-500"
        onClick={() => setIsOpen(!isOpen)}
      >
        {name} <IoMdArrowDropdown />
      </button> 
      <div
        className={`custom-scrollbar transition-all duration-500 ease-out ${
          isOpen ? "max-h-96" : "max-h-0"
        } overflow-hidden overflow-y-auto h-32`}
      >
        <div className="flex text-sm items-center p-2">
          <Checkbox
            label="I agree to sell my"
            color="red"
            radius="xl"
            size="xs"
          />
        </div>
        <div className="flex text-sm items-center p-2">
          <Checkbox
            label="I agree to sell my"
            color="red"
            radius="xl"
            size="xs"
          />
        </div>
        <div className="flex text-sm items-center p-2">
          <Checkbox
            label="I agree to sell my"
            color="red"
            radius="xl"
            size="xs"
          />
        </div>
        <div className="flex text-sm items-center p-2">
          <Checkbox
            label="I agree to sell my"
            color="red"
            radius="xl"
            size="xs"
          />
        </div>
        <div className="flex text-sm items-center p-2">
          <Checkbox
            label="I agree to sell my"
            color="red"
            radius="xl"
            size="xs"
          />
        </div>
      

       
        {/* Agrega más opciones según necesites */}
      </div>
    </div>
  );
};

export default CategoriasOptions;
