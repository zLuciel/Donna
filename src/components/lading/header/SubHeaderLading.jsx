"use client"
import React from 'react'
import CountdownTimer from '../counter/CountdownTimer'

const SubHeaderLading = () => {
  return (
    <div className='flex gap-3 justify-center items-center des-gradient text-white py-2'>
        <p className='text-xs'>¡Proximanete inauguración Doona!</p>
        <CountdownTimer/>
    </div>
  )
}

export default SubHeaderLading