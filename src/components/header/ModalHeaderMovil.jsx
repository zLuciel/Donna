import { NavLink } from '@mantine/core'
import React from 'react'
import { IoMdArrowDropright } from 'react-icons/io'

const ModalHeaderMovil = () => {
  return (
    <div>
      <NavLink
        href="#required-for-focus"
        label="Refresco"
        leftSection={<IoMdArrowDropright size="1rem" stroke={1.5} />}
        childrenOffset={28}
        defaultOpened
      >
        <NavLink label="Vino" href="#required-for-focus" >
        <span className='text-xs'>
        <ul className='flex flex-col gap-2'>
          <li>Vino</li>
          <li>Ron Cartavio</li>
          <li>Limonada</li>
          <li>Tampico</li>
          <li>Suko</li>
        </ul>
       </span>
        
        </NavLink>
        <NavLink label="Second child link" href="#required-for-focus" />
        <NavLink label="Third child link" href="#required-for-focus" />
      </NavLink>
    </div>
  )
}

export default ModalHeaderMovil