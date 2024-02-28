import React from "react";

const User = (props) => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path fill="url(#aww)" d="M0 0h24v24H0z" />
    <defs>
      <pattern
        id="aww"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#bww" transform="scale(.04167)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAQkSURBVEiJnZR7TFtlGMaf77SHc3p6oxdaKAibTia0AUdZhAm4onPocHExbO5ilESzmcxojEFnMq3zEmcyk8Vkm8ZbQkIkJG6KMwyHI8AGxW0BBsguia5Uyr2UshbannP8x24VynHy/He+531/7/e+7zkHWKFqhkT1awPzb6w0/67kHBCTACg1emYzzdEFAMjimCUH/0erHjA+krM+9Xj5MznZ/ulQ+Odv+zovt7krAYRiMbK7Aek45gmdkn03Tafcw9LyssB8uBtAML8ko2HfBxvzTelq6o+eIF267d7V7mtT6omRQFMsV54I6BSdFNvbtemtB5vOZBrVn9tXm7ffl6pNJoQgwgs423fTQSgSybzfkPb9EQ/EKI2CvFJMus8jJV2Vg9/usCRHZNIo92y0ZRzLMqrVifxB9by7qMKWOdqjAdGOo3y3BYeeb6zr6RjeHYuhFifd6nrqnWDn1ocBgKWpqsXw66MzcwsRHgCQNBJhx/4an3LslaH46RR8VvPr0NXByTfj45eMSBSFCzxNXQUAJUsrFiI8FqI8gvPR6I2JudED+6uNJ5vbPFduunkjJ9e0nOj1tDQM1kcjou9639gRAL54nuSIclZZLum1mtTtFWVshsXEPb6hkE2i79yp4qUDHu/YpH/I7bUtx1gyojjlO195YW3ROmt4386telomvw1v6rgIACiwZkedr1ZnAchbSQFv+6WBSZ4XCABwCva2oeIUAACeF0j7xf5JAN7lIAlf0380/kNLW6VRrz8mimJWqd2Gc65eqFUcrGuyIIoiznX3uX1+38sAJlbSAYbHfP2BueCHja2uAAAoORZTPj90GhV+bHXNzoYC77tHpwekGFJfMrFkZj7GKJTK7itDBv+tkEmrUkcJJQufau0KftFwpp0nTD+rVKYH/P4/l4VIFMj76JNPu4qKSxRSN+zq7Ai9XfN6EYC+RL7UDpi1OVZ5/roCKT58Mz45ACb2HN7rLKTTcJk4nQKwzA44Q+p6s9V+WJIcJ7PVfpgzphWKVVUymSCc4IeFLTEvUQGSbi/+2nHwqGOxUV9Xi/q62iUJjoNHHZaCom9IQ4NAycOb5F8daox5iUakMtsKdYRaup4du55L2AGhCMw2u+5G80klOf7xv34ViTrQsjojk+BcUopkA7NtS9o9QVdlcfx5fAdJAHIBrJnt/iU58rsL2Lnjv8miSEZOfYmFUFB79rSX4k7/1Blvx8/BCcAFgHmxeletQW9gmtu652SEEqX4vCiQzWUPqcpzLfST+98riYZC5xcXYEzZG74LzXhzASICgClFo8/MsCSNjIwJFCWTLCAIAizpJplRn0w6ej39MkbjB4Dw3PTC+LULz8oBcJRMnptqezR+H35PBECKBYL0gAAAnjDgGQVU5mwTABMAREOzAgDub4lVcq05DxpbAAAAAElFTkSuQmCC"
        id="bww"
        width={24}
        height={24}
      />
    </defs>
  </svg>
  );
};

export default User;
