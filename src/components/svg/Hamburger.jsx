import React from 'react'

const Hamburger = (props) => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path fill="url(#atr)" d="M0 0h24v24H0z" />
    <defs>
      <pattern
        id="atr"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#btr" transform="scale(.00195)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,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"
        id="btr"
        width={512}
        height={512}
      />
    </defs>
  </svg>
  )
}

export default Hamburger