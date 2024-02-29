import React from 'react'

const Limpieza = (props) => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path fill="url(#add)" d="M0 0h24v24H0z" />
    <defs>
      <pattern
        id="add"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#bdd" transform="scale(.04167)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAARLSURBVEiJjZVfbFN1FMc/t/ey27Vr1z8XWQdlumEADSMZQgj/TByMFxdi5EHhAUx08mCCQDT4osH4oAkSQDQgicQwjEyiqHtjGQn4YDTZAGVzbGMbdOtCu7Vdt/Z2vb0/H7qxruuWneQm93f+fL/nnF/O+UGeaKp60WdTIz6bGtFU9WKuzQq1y6BjOQyvgJAb4m6IqxDLx5kWJV+hyhbPpe01LoC3brd5csGroOk8eLQp3Q/AXeAWjKcWSwDwYGx8jq4Uzl0Aj3fq3CKR+U6REoNp8SEwNl8F+aJpkhTYoxZF9qhFEU2SAoAGUAzhlVbraKXHE3/O7Y57Jf5a5ZYTx7ZYKxYLrrih7TBkroG4BuIwZDRon67U6/X2NzU1iYaGBgE0vLG66HJ9lXpzQdCc/+pSqA6CpWlGZymBdWGodjgcfofD4bh69WrUNE00TTvaGQ7Xbi63rV9sBRv2QroTRO63F9LABq/XO9Ld3S1CoZAIhULiypUraU3T/gNcC4FaFstut9tNl2sGq66uTjl06NAq4PWF4iRg6VL4yoSlJbBjI0gZZymmLEsA7YkJYdhL2mO6vq5ud92kLERmOri3r6+o++7dLgf0BeEzsvc1h2DDVmg5MlVqL/DTpi3sOvZxnqOg8cjbnBoanJNlC3Ae3gW+zbcpQPg+hPeDcxVYdKDC6WLlC9WzHF2pMVRV5ZM8gEcgFAgCfYVapAADUXi+AmLXwHkf+KaAoyuV3QaXAEeOfj+k2uBFIFqI4Okl61migmI3ktgMnX0HD/BmxbOc9nqZmLINZffQfKEzBBboCRRwkBCUTYQA8LhcnDp7BtuBg7xX5sMAMpCYDxxyBi0J/wbgNX+eg1uPoWayq+zc2bOIpM7qmhqEEASzAIXymksQhY5HoPvBCnD965Ns27mbSxdO8/KOHVknU/DL0CB3hgZZC/wDmNC1EEHuoPX38LS1RIMB7JEgQwP9RKIxItHY04xeygLzN4goPMjBKANqyJnu3F3UNwAGgCTBkoyBNDNTs6TRKvNbqcq6Sqe0JjD+6WjcOA7gcSi2tf4S5U7fmDGZND9/GNVP5BI8CYFUBvR3d2J9xsfjgX4mUzrhJ8PEYzFMPckY8LtL5cbJbQSHEzS3Bqy123zWcp+dyIhOc2uAD45WKfu+bD8OnMklEGlIuYGPAgGaLTK9jZfZVKRi/nELT8bk/WCQAFDuLZ4G59VXVrC83M7g0MSss99rlbuGE5WzXjQFhkPg32qk2fqwp2B77gM3OkbY2RmhdpeftkdxTvyYvYb67eUkZYnvWx7T2jGqANIsAgEPArBxWUHorMjAeiRuNnbxq1XGmTQoNwQAP98bYaxYwalnqEIa7UYYswjG4d4pqPfB5HwEKZD6hXDtTJtycdrEBB5P2WoMgSWeJgHcFsIAuqS8eDuwZoECpquossEXMpRMgrEE/gRIw+YiUDIwnoR3DGj5H0hDoAgKn/VEAAAAAElFTkSuQmCC"
        id="bdd"
        width={24}
        height={24}
      />
    </defs>
  </svg>
  )
}

export default Limpieza