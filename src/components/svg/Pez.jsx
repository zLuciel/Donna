import React from 'react'

const Pez = (props) => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path fill="url(#y)" d="M0 0h24v24H0z" />
    <defs>
      <pattern
        id="y"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#v" transform="scale(.04167)" />
      </pattern>
      <image
        href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAASgSURBVEiJ1VVdbFNlGH6+7/z0tGdd1/VnP91sN2FSmGFIBAdjsKGYiVMSTQZLFJJxgRfECzMMBvVCEqORG/yJKImJLMaAzskGDKOEGJMpAylhwwaQdYyf9b/raU9/zmmPF5WSIbjd8l5+eZ/neZ8n7/d9wMNeZB49DM/zvYRluwkhDDQtQnLK4VRG+RJAek7wXA08z79Z4XTtqVvkruHkmG1lBWvfsrjsmVtSdiuIFk0p2oX/w9O5BCjLNhhNJjF86Zy2a5lBa6kVhduyJjS7yuvkrPZVldl4CEAzAPZ++PlEtIKhdMRVZcubLHa0VnPa1pYGzmoU0D96TRtjXSC8EPu272te4GhfYEZ+C0BkXg5MIruh1lo69HTLU+oZzzhbYzGy725azi1xlKOi1IDTkxLZtXsPqa2wmQ/2tAufb1vX01BlvmA26DrucNzXFgDUlotvNDntuzqa6q36li3E6/XCIeQg6rhiT3dXF6xWK4aHBtC7s5WhhKDN7ajp+Giw76o/vi0kyYMUQKMgimN6g35U5LAUACpMhu2tixy7v9vZYR+9LZPVLWvw84lBbFxsK5KPXJ0GyqoxMTEBZ5kOlBTSFnUcTva+UF5l0n8KwEIFUfy48cmVS5xl+ia3TRzWc3TnwgrTewd71lsIAa5HkrBZbRjznEPrY467Ar4o+JJSeDzn0bbAMsu9nmfx4ZbVjkcsJW9TAjgZjoOJBzn0Un1lqcB90LdjQyVDCxMRphCJ3++HwN3d6slYGi6nCxOXvagp0/8n4nZ3DRU45llKKcupShZ2kYU/oeDFJ+potVksNjJsQYBnZi9cPK3AaDRCmonCZhSK579cuoFjHh8IAUr1Oj0FgQYN0DQQAgItn5/FRP7NVuA53FuKqgIAOKbgLJLM4LjHB5ah0DRAAwjN51SV5XkEZVWzl7AY8kxqU6GZuyz5XMGBTjeL3KjjEAwEYCwzI5IsvBjlog77ulvQ5q7B5s+GMRWWVKoBkzlFQTid1175/tp0LK309hw4Kd2Z7uV1ywvTgkVMzhQFXGYBgWAQ9Q1uXLwZmyXOsxSvrmpQeYb2M6qinI0EA2ultDoVTshdsqIdFRgqnb08ub5zWR075k+gsrEZ0UgI+cAEHrWbAACSnMJ4jGDN2jb8OPADOh+vLgpIcgbbvvgpciUgdVEA4+lksjGVSq1IKrgAAN5g4pOL/sTezfsHM6EJr3Zy+Dg2bNyEU39HiySrF1bhj99Ow+Vy4XIwiayaBwBEozFs3n9UDsVT2wFEHniTL96M7/Un5DOXgun+2usHDM8930n+vJVAKqtCz7OFG52KIxaLoaNzE46M/Jo3ZCXy/qlrielEpmtayp4A5vvYMcxIdaUdJpOJrDIm0LXUTmylIobGb2vekkbClVpyA4e/yVeKXP/4dPw1AEWrD3RwpwSDYUf94iU0c8unvdPuQlhKk2O+EBLpBPp+92kO20z/lZvBfQBGw1JKvRc/54dDCXFzgr7Z4lrAnxj9iyRS6VST054bOO+bUnK516dC8T0AbgDI3w8/n4goz/O9hGG7CSUM8giTvHoklckcxDy+zIe//gGdIcLLRNWnmQAAAABJRU5ErkJggg=="
        id="v"
        width={24}
        height={24}
      />
    </defs>
  </svg>
  )
}

export default Pez
