"use client";
import React from 'react'
import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";
import { FaChevronRight,FaChevronLeft } from "react-icons/fa";
import Card from './Card';
const SliderCard = ({renderjson}) => {
  return (
    <Carousel
    className="py-2"
    withIndicators
    slideSize={{ base: '100%', sm: '50%', md: "33%"  ,lg:"20%"}}
    slideGap="md"
    loop
    height="100%"
    slidesToScroll={5}
    nextControlIcon={<FaChevronRight  className="text-3xl"/>}
    previousControlIcon={<FaChevronLeft className="text-3xl"/>}
  >
    {renderjson?.map((cate, i) => (
      <Carousel.Slide key={i}>
        <Card image={cate.image} />
      </Carousel.Slide>
    ))}
  </Carousel>
  )
}

export default SliderCard