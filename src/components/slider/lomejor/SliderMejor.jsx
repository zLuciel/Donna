"use client";
import React from 'react'
import LoMejor from './Lomejor'
import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";
import { FaChevronRight,FaChevronLeft } from "react-icons/fa";
const SliderMejor = ({renderjson}) => {
  return (
    <Carousel
    className="py-2"
     withIndicators
    
     slideSize={{base:"100%", sm: '50%', md: '25%' }}
     slideGap="md"
     loop
     height="100%"
     slidesToScroll={4}
     nextControlIcon={<FaChevronRight className="text-3xl"/>}
     previousControlIcon={<FaChevronLeft className="text-3xl"/>}
   >
     {renderjson?.map((cate, i) => (
       <Carousel.Slide key={i}>
         <LoMejor image={cate.image} />
       </Carousel.Slide>
     ))}
   </Carousel>
  )
}

export default SliderMejor