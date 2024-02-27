import React from "react";

const User = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={24}
      height={24}
      fill="none"
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
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAZTAAAGUwGWtCviAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAwJJREFUSIm1lVtIFFEYx39nHHW3MtZd85LbvaBSC6KbFKmoiRUURUJCdHkouljRQ1EPJUTQgxD0UkRpNyzCkIKtrMTwoQztZSlNkkyw1jLdttVWrd3pYWa3MXdtovq/nMM35/x/33fOzHzwnyV+mduBaIN7fYDLKCAR2Au8BAIGATIwGzgJDP1u8S4gJtwDpaQwVinNliPsmwMUjGYcrGAfcGaY8fbVOQQ4hWAR4AceIPwHRfn9Vt2yZGA1YNWqcAE3wwFWAPUh862r8hHiLiBXd3QRFy2TNzEBoBfBIlHueKMDrNCZpgNLgQtBL0kbQ+YqVpwG5FrXJ1LHmOjyDdLZP4CaqSgd5UTGAHnaOAywJpT95pWJQBpAQmwMj7t6cLq/EBetXYOi5EQwn4V6J7XACbTTCQKmh5aZA4PBqdPtJSN+PAttFhq63cGwPwLgq5aYHbgFLNMDQhLnH3mAJoBp48wU2idQNC2FsXJUcMXDCIB3wCHgONAIzAsL0LQfGFieZA0FtPl7hHQ8wh69FGAwIkBUOJ6gKJkg7gF9wGfgGn4pU5TfeW8AsABo1gf2GdgUTslAUZj4huBk2BdaXaFYEMww4izF0Lm2WIB6sVtRq6wFvKiXPBIgpMBuRf23/FZv25tvAK2AA3CiVrMHaAFuhwUoCpLb48Lb30uUFIUpdhw97ndMSp1L25sm0udk4WyuI312FpeuHxxb2ZB41pbsLwNyQLwVwn945RT3VGAJ8GxkBUJ5FW9JeR5vSQnFbFY7ABlz1e9rflouD+srpJa2xhJbUtRVIF9LL1VRpHs1bda0gpm9xWEB67bIVUCVgRPaXddu8QwJ8rpdAWJNAkflAJv2mOOETAFqrwB+vqavgcUGjIOK9n1P8AHf+jwKdy4PsHGHWTsGPOgamb6jrUdtPEYazmSgrqbDlovCEV38xbljQ9nVV7zbgLJfAX+qo0Dl/Q7rYhEgF0T70wdDF0p3eg+g9paPfwuQUDuhDHwALEAScBHo/AvfsEoATP/a1JB+AB7e1UStCGSEAAAAAElFTkSuQmCC"
          id="bww"
          width={24}
          height={24}
        />
      </defs>
    </svg>
  );
};

export default User;
