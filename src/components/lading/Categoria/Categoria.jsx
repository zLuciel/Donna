import React from 'react'
import CategoriaSlider from '../slider/CategoriaSlider'

const CategoriaLanding = ({section}) => {
  return (
    <section
    ref={section}
    className="py-5 bg-[#ff4d0038] relative"
  >
    <div className="title-div bg-[#FF4D00]"></div>
    <div className="lg:container py-4 lg:px-20 px-6 title-categoria mx-auto">
      <h2 className="h2-formate-white  lg:text-5xl sm:text-3xl text-3xl xs:text-3xl md:text-4xl title-nunito ">
        Nuestras categorías
      </h2>
    </div>
    <CategoriaSlider />
  </section>
  )
}

export default CategoriaLanding
