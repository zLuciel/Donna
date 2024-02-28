import React from 'react'

const List = (props) => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path fill="url(#a3)" d="M0 0h24v24H0z" />
    <defs>
      <pattern
        id="a3"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#b3" transform="scale(.04167)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3/OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAASmSURBVEiJjZZdbBRVGIafc/bMLNvtrku7YK1FK2mLLrQWU22NgqSlEFCqEgmYEI3hwgvRANGoTaQUTYNggRhuSLgh3hBIMPLTCyyViE0EaiFQ29IaQIFqW/tDf2h3d2aOF9uWbbs1fMlk5nw/7/vOd86ZOUJrzUw2WFYZNLzqG8NtFNsv9Kfp4hEDB2SNN8w139922KqNONan/qMVvTNhiHiCgoL3H9Gmp2ihS8xdN9u3NSs0nD+vLCxUqoE0JcfOxHLXrRDoiEY7mn8vSH3leNLlo31D+3+3dZeIjPza0HDw3jSCgiVbCoWtzyLwjgcPbLzH4lXBCQEDQ7G7P/mBwuG+KCs2x0nWDGuXKGk4v/8CgJwIOM6meHAAlxiridjoUQufil161EJH7JhCMbUneHGcTeNDNf6QJuSCzkTzoTXRm31gOZP9SmLmpE7PH8OaRNC7utKfo4yizmgEl0vydE4GynBhu9rB0ZgLggmBAKJRybN5T2JFbVrb7mDbDjnKKOpdXelPqakYUABSW1tNQ5pE4eMtb1Bakh+rDvcT6alHyP7E6ELifmIJ1bsyAPjx7BW+rj6OaUhTamsrUKkGl5enYqhtUsWmIyMjTq07gJ3+6ozqp9p4bQxLbBtcXn5AWcq1QQrhj0+8eneEi7eGYyIFrMkNkJokGQ1HYwBC4PGYMzMJEAi/pVwblJRikTQkRB/EL94aJpisyEw1qb8xRGvnCEN/tPPDiUsxAin5csd6gkH/DAwQw9SLlHZESLrEJAKAzFST/Iwk2rpGAShelkt+XuZEPBKx6OiIbWDTbRBM9U0mcAnssAgphA45U5agEFB/Y4i2rlHau8I85jc5X99Cbe3VhGq9Xjfln62d5HMsB4QOKQA76kDchlmTG6C1cwSAJ5TDc54oZkkepSV5M7ZkqtnRmGiJFs0A2nmwyaQAQwoMKcg6XY+89udDA0/C0qJZCambtWZpfJvuHKxjxONlMCeD3LY7XHz9FUZ/aqLu3LWYACn5aPPqaX0fN8dywAAhdbNyHN0khCCe4Hooh7XHa1DD3TQVhLBMF0WF2cyf/+jYG4oZweMJHEc3KWXZR2xDVQETa27Qn0zrS4sJnWvg0sbnyQJ+Pt/CqZrfEgL6fR527lg/1T2gLPuI8tVW9fSv+mIvsGM8snheEr84WVxOSyfiNsmeM4s5mbkUFWYnJDAMF0q5pnj1Xl9tVY8CcITaZ2vKAXOcIHuuG0hBAL5ZseJAwMvDmK2JOELtg7GvaUpNxUCg+JNqafE5wLHGXi7cGkZJwWjU4b0Xg3ju99HU9BcQm+SVK/PxJrmngUsg4BLVKTUVA+NjALbX7SkvNY1DAhgcdXinMJXdb2bwclYyg2H7oZQLoNQ0Dm2v21M+4Zv60z/17fcnm59a+FrhfB/5GUkcbewlzW+QPNhN4+WbCYE9HpPipSHddqbxu7Itb707iTTRqeLgrpNvd6Q/frj9vjIAPlg2l4B9n5brd6flWpZNR8vtrnnh/kXrqj7snvZW/3dsOfHV4TJ3+pydKdnpz/iDfiMw2yfC4Shdt7ujA//09oV7hlqjncO7y7ZvOD0Txn+KR8cj4V0B6wAAAABJRU5ErkJggg=="
        id="b3"
        width={24}
        height={24}
      />
    </defs>
  </svg>
  )
}

export default List