"use client";
import { RiArrowDropRightLine } from "react-icons/ri";
import { useState } from 'react';

import { Box, NavLink } from '@mantine/core';
import Pez from "../svgHeader/Pez";
import Verdura from "../svgHeader/Verdura";
import MiIconoSVG from "../svgHeader/MiIconoSVG";
import Licor from "../svgHeader/Licor";
import Desayuno from "../svgHeader/Desayuno";
import Panaderia from "../svgHeader/Panaderia";
import Belleza from "../svgHeader/Belleza";
import Limpieza from "../svgHeader/Limpieza";
import Carne from "../svgHeader/Carne";
import Lacteos from "../svgHeader/Lacteos";

const data = [
  { rightSection: <RiArrowDropRightLine />, label: 'Limpieza',icon: Limpieza },
  { rightSection: <RiArrowDropRightLine />, label: 'Verduras' ,icon: Verdura},
  { rightSection: <RiArrowDropRightLine />, label: 'Bebidas',icon: MiIconoSVG },
  { rightSection: <RiArrowDropRightLine />, label: 'Licor',icon: Licor },
  { rightSection: <RiArrowDropRightLine />, label: 'Belleza',icon: Belleza },
  { rightSection: <RiArrowDropRightLine />, label: 'Desayuno',icon: Desayuno },
  { rightSection: <RiArrowDropRightLine />, label: 'Lacteos',icon: Lacteos },
];

function CategoriaHeader({icon,setOpenSub}) {
  const [active, setActive] = useState(0);
  const [opened, setOpened] = useState(false);
  const handleActive = (i,view,label)=>{
    setActive(i)
    setOpened(view)
    setOpenSub(label)
  }

  const items = data.map((item, index) => (
    <NavLink
      key={item.label}
      href="#required-for-focus"
      active={index === active}
      label={item.label}
      rightSection={icon && item.rightSection}
      leftSection={<item.icon size="1rem" stroke={1.5} />}
      onMouseEnter={() => handleActive(index,true,item.label)}
      color="red"
      variant="filled"
    />

  ));

  return <Box  w={220}>{items}</Box>;
}

export default CategoriaHeader;