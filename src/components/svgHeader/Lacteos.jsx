import React from 'react'

const Lacteos = (props) => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path fill="url(#ass)" d="M0 0h24v24H0z" />
    <defs>
      <pattern
        id="ass"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#bss" transform="scale(.04167)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,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"
        id="bss"
        width={24}
        height={24}
      />
    </defs>
  </svg>
  )
}

export default Lacteos