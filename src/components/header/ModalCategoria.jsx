"use client";
import { useEffect, useRef, useState } from "react";
import CategoriaHeader from "./Categoria";
import SubCategoria from "./SubCategoria";
import { IoMdArrowDropright } from "react-icons/io";
import { NavLink } from '@mantine/core';
const data = [
  { rightSection: <IoMdArrowDropright />, label: "Dashboard" },
  {
    label: "Security",
    rightSection: <IoMdArrowDropright />,
  },
  { rightSection: <IoMdArrowDropright />, label: "Activity" },
  { rightSection: <IoMdArrowDropright />, label: "Lavadero" },
  { rightSection: <IoMdArrowDropright />, label: "Fierros" },
  { rightSection: <IoMdArrowDropright />, label: "Pescados" },
  { rightSection: <IoMdArrowDropright />, label: "Almuhadas" },
  { rightSection: <IoMdArrowDropright />, label: "Zapatillas" },
  { rightSection: <IoMdArrowDropright />, label: "Roperos" },
  { rightSection: <IoMdArrowDropright />, label: "Mercados" },
];
const groceries = [
  {
    emoji: "🍎",
    value: "Apples",
    subca:"0",
    description:
      "Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits. They come in a variety of flavors and are great for snacking, baking, or adding to salads.",
  },
  {
    emoji: "🍌",
    value: "Bananas",
    subca:"1",
    description:
      "Naturally sweet and potassium-rich fruit. Bananas are a popular choice for their energy-boosting properties and can be enjoyed as a quick snack, added to smoothies, or used in baking.",
  },
  {
    emoji: "🥦",
    value: "Broccoli",
    subca:"2",
    description:
      "Nutrient-packed green vegetable. Broccoli is packed with vitamins, minerals, and fiber. It has a distinct flavor and can be enjoyed steamed, roasted, or added to stir-fries.",
  },
];

function ModalCategoria({ setView, view }) {
  const [openSub, setOpenSub] = useState(false);
  const contenedorRef = useRef();



  useEffect(() => {
    function manejarClicFuera(evento) {
      if (
        contenedorRef.current &&
        !contenedorRef.current.contains(evento.target)
      ) {
        if (!evento.target.matches(".modal-bg")) {
          setView(false);
        }
      }
    }

    // Agregar el listener de eventos cuando el componente se monta
    document.addEventListener("mousedown", manejarClicFuera);

    // Limpiar el listener de eventos cuando el componente se desmonta
    return () => {
      document.removeEventListener("mousedown", manejarClicFuera);
    };
  }, [setView]);

  return (
    <>
      <div className={view ? "absolute modal-header z-10" : "hidden"}>
        <div ref={contenedorRef} className="modal-bg flex gap-2 relative">
          {false && (
            <>
              {" "}
              <div>
                <CategoriaHeader icon={true} setOpenSub={setOpenSub} />
              </div>
              <div>
                <SubCategoria openSub={openSub} data={data} text="Panaderia" />
                <SubCategoria openSub={openSub} data={data} text="Bebidas" />
              </div>
            </>
          )}
          <div>

         
       <NavLink
        href="#required-for-focus"
        label="First parent link"
        leftSection={<IoMdArrowDropright size="1rem" stroke={1.5} />}
        childrenOffset={28}
      >
        <NavLink href="#required-for-focus" label="First child link" />
        <NavLink label="Second child link" href="#required-for-focus" />
        <NavLink label="Nested parent link" childrenOffset={28} href="#required-for-focus">
          <NavLink label="First child link" href="#required-for-focus" />
          <NavLink label="Second child link" href="#required-for-focus" />
          <NavLink label="Third child link" href="#required-for-focus" />
        </NavLink>
      </NavLink>

      <NavLink
        href="#required-for-focus"
        label="Second parent link"
        leftSection={<IoMdArrowDropright size="1rem" stroke={1.5} />}
        childrenOffset={28}
        defaultOpened
      >
        <NavLink label="First child link" href="#required-for-focus" >
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        </ul>
        </NavLink>
        <NavLink label="Second child link" href="#required-for-focus" />
        <NavLink label="Third child link" href="#required-for-focus" />
      </NavLink> </div>
        </div>
      </div>
    </>
  );
}

export default ModalCategoria;
