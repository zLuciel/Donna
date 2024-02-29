import React from 'react'

const Verdura = (props) => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path fill="url(#as)" d="M0 0h24v24H0z" />
    <defs>
      <pattern
        id="as"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#bs" transform="scale(.04167)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAARhSURBVEiJtZVpbFRVGIafO3eZ25m5M9PZu0BLK1TLZkgb1CBgUKkLAomBEq1a4xY1IWokBhNcfigCMUhAEWMCJMQEE6JAoqiJRgIoJSwWaEsLbYe2tjPtDNPOtLPcmesPBEsgbhneXyfnfOd98r35Tg7cZInj1tWABYjlnSK5tVXqrIqkUlWcEu1qwziwJqryc4AKlPy5VypP9DTJ5d4TQPFVD6dtjezSnr0xwOtoKvr0BcP91qOG5f4ZulxU2AoIstu+UautShZo8qDDZ+4HFMnnOOBf32C43lhsyOW+IwCI4gOuutqIudQTdJeYt9ic6vwr3iJQJPnsr8nFLm1087fYnphryvRFNVcoPrnCEBdPz0kOl4A6EEuqGYtart4+aa454LQKOQN9ZDQgjKWn2A19YcGkQJU4Niw2vDlxTsvhIfvocHY3gAT4pFKPKLptlJYHSPzchlJdYq7rST22zVt5OSoD4YQlalo+0F6fe/oes2nrDyCAPu9Wydfbu2znygolODiYXdsRV3e/H78YC6XWXOnABJxKtfXG5WIXSSOH0hPBdDKIPyeKkWzmcpUAleYC7lE1SQ/HsMgSSg60vUeY4hCUiR6ZJbUOcdNDXjmQMprSac5cjR9AVBU188lXzKjJETwOG995novn+1n+2TdMzmVxphR+y6VoTo+IxtZ94AtARqeuTKBxto8Vm7pZW1+ElDOQx8/llWkxm7l3SaO7ct4yv9C0P0qwI8SCh+9EcCqEy/voMll5ffMrVEwrxzd1iKGeIWLdI2x/0stPLQneqy8iYDJY9XVI/zWSCaYS2V3jI+LBp/xn59cHTEqByIJnnPSEOwh29rHvyx9Z+nI10ViEDW/vwKyaGRuwsnx1GWUlCiUuGZ9dYun6C7y4s4/vWsdEU8q4GwhcA+jtSHgAPl91jtmLfDSuq2DLhzv4YM8SJEkgGhmmN9zOR2u3s+ylGiShgKyYZeX2XqoCCrvq/bT/nuVYeY2wTau0zVStzUABgOjRtEf6zo/Wx/qy7p62hDjclyPcnqarZZjkpSx7Pm4mHtWpWeCn7USY9LDBFxtOkYhkWLeikrNtKV7dE2JCykFIhH5y9GbSBTis052aXRcmFQX61zQ+7rdZLDd8hH+nsoCPWDzBpXjiurO2rovsOPD9mOByONLVt1TIi+6oZdFds/8z5Ebae+gX9h45yrnO7pxJkURDs1rJ6HpezAH0bBab1YokSUiKJA3XzZrpKfa4OdPZnRdA1YRS4okkHRc604LdYnnX63SsLvK4xH+++u8kCAL9Q9FcNBHfIEmiOC2t60IsPnpN0ZzpUwmGwgQHQv8LktZ1wSzLswR/YWGkYeF9hTMqK7Coaj4aYDSZ5NDZM+w/eDhtsjvsVkOzcbD5dF7MAQ42n8bm8WC12SRTaHCIYydPUer15g1Q4vFw9PhJwpEIkirLA8V2u6e1q4vWrq68AAzAa7Oabao6InD5r70tL87Xq+Um+f6lPwABQ5arRdb5TAAAAABJRU5ErkJggg=="
        id="bs"
        width={24}
        height={24}
      />
    </defs>
  </svg>
  )
}

export default Verdura