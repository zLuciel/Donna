"use client"
import React from 'react'
import { IoIosArrowUp } from "react-icons/io";
import { useWindowScroll } from '@mantine/hooks';

const TopScroll = () => {
    const [scroll, scrollTo] = useWindowScroll();
  return (
    <div onClick={() => scrollTo({ y: 0 })} className='fixed text-2xl topScroll text-white bg-red-600 p-2 rounded-2xl hover:scale-105'>
      <IoIosArrowUp />
    </div>
  )
}

export default TopScroll