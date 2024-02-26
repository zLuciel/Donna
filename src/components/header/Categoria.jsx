"use client";
import { RiArrowDropRightLine } from "react-icons/ri";
import { useState } from 'react';

import { Box, NavLink } from '@mantine/core';
const data = [
  { rightSection: <RiArrowDropRightLine />, label: 'Dashboard' },
  {
    label: 'Security',
    rightSection: <RiArrowDropRightLine />,
  },
  { rightSection: <RiArrowDropRightLine />, label: 'Activity' },
  { rightSection: <RiArrowDropRightLine />, label: 'Lavadero' },
  { rightSection: <RiArrowDropRightLine />, label: 'Fierros' },
  { rightSection: <RiArrowDropRightLine />, label: 'Pescados' },
  { rightSection: <RiArrowDropRightLine />, label: 'Almuhadas' },
  { rightSection: <RiArrowDropRightLine />, label: 'Zapatillas' },
  { rightSection: <RiArrowDropRightLine />, label: 'Roperos' },
  { rightSection: <RiArrowDropRightLine />, label: 'Mercados' },
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
      onMouseEnter={() => handleActive(index,true,item.label)}
      color="red"
      variant="filled"
    />

  ));

  return <Box  w={220}>{items}</Box>;
}

export default CategoriaHeader;