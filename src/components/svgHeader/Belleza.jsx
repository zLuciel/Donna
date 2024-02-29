import React from 'react'

const Belleza = (props) => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path fill="url(#a12)" d="M0 0h24v24H0z" />
    <defs>
      <pattern
        id="a12"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#b12" transform="scale(.04167)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAOZSURBVEiJpZVdaFtlGMd/56SNaZombZqmbZKm20qHbmPagXMMdSoi6FBQccNVLN6INwXvHCKOytyqAxmiIKggmwXLcG7TulXn3IVaHGXTOumG2q5Lu3T9yNfJ13mTnONF27RJT1s0/5tzeJ//eX7n/z7nQ2JRdmA7q+svYGwNT4HKlpzvfvj+ez+/e+tdhsbZUJTB34d+HB4effT/AiIjgXFJaEIyMiYSKbLZzNR/aV4MCG/Z5g7vab/POTY6U2Cqddm4PRnjgyPf/VMKIKJEUpnzfddIhSto8jTkC6d7f+Ghx1pIJDKTJSWIxtIawCsd7ezauTjvHbufIqaoQlUz0yUBlGha8vmreb37UIHpzs31RCNJFQiXAhBCZLUdD24AWWNiPAKA2WziyWfa+OjohZIBaDktC+DzO6mwmgG4w1IOQCSazAGRkgC5nJ4H+PzOAmNcUTUDgFRXW9uJxP6sKl4OK8o3xQC5EKBldN34TpRYWgJ22m22znq3670mT8OZdc3ekZdeeLbrz5/PNra1bTnmctXsWzWBJEtKKiWwzm/PggYHxnBYq+1d+5/vXd/stzR5GnC7amlZ78dkMgHw5Wcf1mx94IkjQC+QMwTIshROxNVlgJ5Pf+XowQNWs3luHqoQBG4FCdwKFvh8Ho8tMDG5GRgyBIA+E1fS1LmrClbTiQjnT76j6pomlm/eolLhkAwUDK8AkM1qU4m4WnDR1SsB4skMl4ancrmsrq0GmJxVyx2V8uPRhHbRECBE9nZ8CUCoWd7v7qNrXz11jjLras0BUqrO4RPBzmhCnAIGlgGS8Uxw/nGUASLhJM5KicC0IDC96u7k1dpoqRgJio2GgFwuF4pFkypQsbDW1mLl7Q5P3tM3GOf0oMbEjKDGVsauTTIdj1RhLpv7yh+/EKL/ciz/yS8aMsrZU8P61UuhCEBaFfI9jZJtIdHFoTg9gw10d71Jc5OX6dkwnxzr4d2T/byxx26YqBigv7j3afHWa69Wf3z8C24Expm63pcvbvJbmP1qlK5DB/F6fESjYX4b+oPD7SuPpxgAwJlzP/DtT1/j9TtgyZvtri6j/0AdN6dnCIaCOCpNbHzOhWz4D5xTcWm702kfaG31ypmsQNd1/r52k7YNlpU7FGlkUujjM2IvcMIowRWH3RrwrXP4HNVzsW+MBE1ed2XGbdeVtZrHEjn9+rgaA75fKQFAObANqDKoraUUcHn+CMC/mh183d/XejIAAAAASUVORK5CYII="
        id="b12"
        width={24}
        height={24}
      />
    </defs>
  </svg>
  )
}

export default Belleza