"use client";
import { useState } from "react";
import { Box, NavLink } from "@mantine/core";

function SubCategoria({ icon, openSub, text, data }) {
  const [active, setActive] = useState(0);
  const [opened, setOpened] = useState(false);
  const handleActive = (i, view) => {
    setActive(i);
    setOpened(view);
  };

  const items = data.map((item, index) => (
    <NavLink
      key={item.label}
      href="#required-for-focus"
      active={index === active}
      label={item.label}
      rightSection={icon && item.rightSection}
      onClick={() => handleActive(index, true)}
      color="red"
      variant="subtle"
    />
  ));

  return (
    <Box className={openSub !== text && "hidden"} w={220}>
      {items}
    </Box>
  );
}

export default SubCategoria;
