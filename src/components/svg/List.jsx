import React from 'react'

const List = () => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={24}
    height={24}
    fill="none"
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
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAACxAAAAsQHGLUmNAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAABGBJREFUSImVlW1sU2UUx3/3duvburXd1pd1E8peEAIxgw8ibyoQUQYEJi8aNKIIKhAhMSHGmJCAcZqgjkTRKCgBFQUFCYhi/IBChiJmYHAibqxMtrF2W+ml7d1Ye5/6AVooawee5Eme53/POf/zP/fkeST+v1XMGDtypdNmnWm15JV1h66E9/7aOA4IZnLOuRXweqsmuDzO9bk5ubokZtHrC4rM+rvOt/3rDASDeqtnGM4SN0IkMOgt9nurxcmE3tDc0x1Y7/P5fhuSoPLuivqdX+6bKMvyHUsK+P3lmqaVr121wu7z+SZkJJhTPWa1u7jwVc1mdSWTa5pGdyCAy+1GkqQhSWRZxm6z6wbhyc2wEvfrb695rsRRXCQD/HHiOHW1Nfz8/FNsqK3B1/zPHSvKqEDt7xu4+cOh+reos+Vxqb+faUKw/Y2NrN2ylW0fbhmcJEdP7cLFQxM0nb9w9usjxxxJyBQb4Peoyu6LHbw2djS5V/vRGww8MG0GiUQCAEt+AeUVlQT8/hR2q6VadEkJ72w905QI+P0A6CpHkmcwsOmeMZyOqBRWjycei9F2wZdalzo7SCQSWZOnKWhXwvvjWnyjI9/iAVhdt4k9H7zL3r+aKJ82i6VPL0eSJObMezQtQTwev3GQGDR6N49p77lAb3uVFw+ATqejesZD9NksjJsyPesUCU1L7U2yZMnaIoCOUKRVCAHAts8/4olP1lAX+opF9cs58P1+ABQlhBK6nFqBbj+qGr1WrdAKhlLARUX5puVi+2OAtO+XQ0QmWhCtIS5XGtlxeBczH3yYz7Z/TIIbPY9GotjsduYvWEyXv8sGWAElI0FXpO+HuBBXASOA5o8iOiPkjCqClsE/0uFwsujxmamzTpL0HqvlkU4lsjsjAaB4SssuAyULJ83lvcYvuDKmGOsxhaWzXsRoMvHkM8/C9amJhCNpwV6PR+r2tdQORUAMWQFKli1ZzuTxk2k42cD0l6bj9ZYDYLXaAFDVKDm5uWmxsizjsuRVpGG3EvSJRASu3UONRw4SPHWExqOH02Y9FosNqj5plcW2UsCRVYEgIQDe37CWBbofGV0pc+JcIzs2B1iy6hW++/YA0UgEcc0NAIsln0lT7gdgqrfMfeBs87y2YHhbRoIUUdcZzMMF9UfD1Iw2E2o+gRACu70Qq82W5msymVP7Kkeh5Myz1NyWoA8z5lyJKSOMVBTloHYZCPj9HG84mvJxuUuYPXd+WpwEuPJNI7K2KGmzX1jPps3rGGmJ8GlbHvPWrMNgNLJsxcpsISmTJdmYlUDTNElRQniGVbHszT309nQz1eG87YMDEAiFrr586uSfneEr72QlCPb0CDWqIssysizjcLpumxhACEHvgDj907nW+27GB5Xl9VZNcDgLNwyo6vCqItuoArMJgM7eIE0X2oS1oCBaVlrW0S/oGRBaXzIuFouJTI/+ULqLpnpLDxaaTdYetb+9V1Ub/g4EdwEtdyTpuv0HNBXFSpj2REYAAAAASUVORK5CYII="
        id="bs"
        width={24}
        height={24}
      />
    </defs>
  </svg>
  )
}

export default List