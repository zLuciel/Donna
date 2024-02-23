"use client"
import { useState } from 'react'
import { IoMdArrowDropdown } from "react-icons/io";

const CategoriasOptions = ({name}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="filter-border">
      <button
        className="p-2 rounded w-full flex items-center justify-between   border-b-indigo-500"
        onClick={() => setIsOpen(!isOpen)}
      >
       {name}  <IoMdArrowDropdown />
      </button>
      <div
        className={`custom-scrollbar transition-all duration-500 ease-out ${isOpen ? 'max-h-96' : 'max-h-0'} overflow-hidden overflow-y-auto h-32`}
      >
        <div className="flex text-sm items-center p-2">
          <input type="checkbox" id="option1" name="filter" value="Opción 1" className="accent-blue-500" />
          <label htmlFor="option1" className="ml-2">Opción 1</label>
        </div>
        <div className="flex text-sm items-center p-2">
          <input type="checkbox" id="option2" name="filter" value="Opción 2" className="accent-blue-500" />
          <label htmlFor="option2" className="ml-2">Opción 2</label>
        </div>
        <div className="flex text-sm items-center p-2">
          <input type="checkbox" id="option2" name="filter" value="Opción 2" className="accent-blue-500" />
          <label htmlFor="option2" className="ml-2">Opción 2</label>
        </div>
        <div className="flex text-sm items-center p-2">
          <input type="checkbox" id="option2" name="filter" value="Opción 2" className="accent-blue-500" />
          <label htmlFor="option2" className="ml-2">Opción 2</label>
        </div>
        <div className="flex text-sm items-center p-2">
          <input type="checkbox" id="option2" name="filter" value="Opción 2" className="accent-blue-500" />
          <label htmlFor="option2" className="ml-2">Opción 2</label>
        </div>
        <div className="flex text-sm items-center p-2">
          <input type="checkbox" id="option2" name="filter" value="Opción 2" className="accent-blue-500" />
          <label htmlFor="option2" className="ml-2">Opción 2</label>
        </div>
        <div className="flex text-sm items-center p-2">
          <input type="checkbox" id="option2" name="filter" value="Opción 2" className="accent-blue-500" />
          <label htmlFor="option2" className="ml-2">Opción 2</label>
        </div>
        {/* Agrega más opciones según necesites */}
      </div>
    </div>
  );
};

export default CategoriasOptions