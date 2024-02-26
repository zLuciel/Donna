"use client";
import { useEffect, useRef, useState } from "react";
import CategoriaHeader from "./Categoria";
import SubCategoria from "./SubCategoria";
import { IoMdArrowDropright } from "react-icons/io";
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

function ModalCategoria({setView,view}) {
  const [openSub, setOpenSub] = useState(false);
  const contenedorRef = useRef();
  useEffect(() => {

    function manejarClicFuera(evento) {
      if (contenedorRef.current && !contenedorRef.current.contains(evento.target)) {
        if (!evento.target.matches('.modal-bg')) {
            setView(false)
          }
      }
    }

    // Agregar el listener de eventos cuando el componente se monta
    document.addEventListener('mousedown', manejarClicFuera);

    // Limpiar el listener de eventos cuando el componente se desmonta
    return () => {
      document.removeEventListener('mousedown', manejarClicFuera);
    };
  }, [setView]);

  return (
    <>
      <div
        className={view ? "absolute modal-header" : "hidden"}
      >
        <div ref={contenedorRef} className="modal-bg flex gap-2 relative">
           
          <div>
            <CategoriaHeader icon={true} setOpenSub={setOpenSub} />
          </div>
          <div>
            <SubCategoria openSub={openSub} data={data} text="Activity" />
            <SubCategoria openSub={openSub} data={data} text="Lavadero" />
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalCategoria;
