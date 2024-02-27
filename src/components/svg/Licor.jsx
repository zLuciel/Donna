import React from 'react'

const Licor = (props) => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path fill="url(#u)" d="M0 0h24v24H0z" />
    <defs>
      <pattern
        id="u"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#g" transform="scale(.04167)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3/OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAANiSURBVEiJrZZPaBxlGMZ/387Mzu5kZkM2bdrMrg210STW1tIKWij1ICi0xOC/HKxGxHrt2ZMWPPQgxYsXW1F6MCUeBEW8KEgIRMEUo7WkYFOaTZpms0m6bjab2fn3eUizpp2NZKPPbV4e3t+88z3f942QUvKghBDp5nTzhGEZaUA4FefnpfmlYxHjFqRuUm/zHD8dxmIqgOu43dtp/m8A2u2M07XnkAkwOv69838DZmbzOVythO+FiHgws11AbJP6jo6jbct9Hz/JCx8dpmm3lhFCiO0AxMZFFkIYLR3Gh+V89R37iVbN2pXEW/WYvXoXKaUTN7QzizdLF7cFEEIkUnZyZueBRGvcUu4zhY4kdELK8x6hr/wxd614YKuA2hqYbfqb6a5Eq5XVo65m8O/66JbC7G8r+4UQppSy3BBAN7TjmhmjMBLQarVFjLFQYTW+gKpXBJAFrjcEIIYM3ZDufQcZvPQlAGNjv9C+u51MNstCcZH+/heB4lb6RgH7ezu+W5gvnKK4FpaBV1+BqSlKQtD39ml6+18GGg9SLaYzY4UufzUEIJfLUc7lOKSqHFcUvh4aarhxBPDX7UqnXwkAsG2biqJQ9n2mHYe9j3T+d8BGqarK+QsXme7qIn3yJO+dO7dtQG0f7NhrfdH8qPbayhXJkc6HI8ZgucSc53JHXWB+otIjpWwwRff0zC6Lwfbo2VZKBvROroLZ2AQRwPBcib5kS8QYLEtW9ASwAoAQwsw8lPlA07RmgEQioRtNhhmG0h2/8uu7UsrJuoDHnzrCZ5eiqVnbBy9BdXG9dPi5EydOn3prwAQIPB/fdbk6/juu690BztQFrOvs2fe5PjEBwOtvDPD0saMR5jeXh5JGbpoWs4mvhkfwqlWWPY/AarpR9xMJRZDPz3Hh00+wszZ21gZgdu42Q4OX0XQFqjV7fk/K8s0/byge8Gw8jheLcQ0YyRcm6wJiqiDYV+Dz4fORicJKiNGmQqlWWnKCIFh/WE/jvXjM1wUA6CkFPaU8WCYoBUj/n7tDSim7MxlvE0A+AgiQjgyifxiRSdbe2QNwBcqPibXjPYzHAZi6deu+CTZeOD0pO/mTZsTi9RoHXqgTSiFUZXHpZnknwMHHer7VE4nnkVKEQaAAtJhW8YfR0VrO/waCvFQanWe5MgAAAABJRU5ErkJggg=="
        id="g"
        width={24}
        height={24}
      />
    </defs>
  </svg>
  )
}

export default Licor
