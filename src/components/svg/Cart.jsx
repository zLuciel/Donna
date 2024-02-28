import React from "react";

const Cart = (props) => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path fill="url(#a)" d="M0 0h24v24H0z" />
    <defs>
      <pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#b" transform="scale(.04167)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAQeSURBVEiJrZV/aFVlGMc/zzn3nHvvls7pNm1YllYLTYbbLFQCy6QsjKYYWEoE2vZHilGioH+sojREQvtrkwxzpuyGQsZy/ZKyObMZlttyOEVx6tx00+3e3XZ2z3n643rn9N5rYL1w4Jz3eb7f7/t9nuflCP/D2npqhT8r4/rkrrDzWJYl3y6fuPtyIib/hbhGF5n9HfY6VN4GRp7uiOKqkmmbTXYwMGf1Qzs771pAFdlxackuYHFi73RHlJinAPgt6SMjMF7KGnVNMpoTldOl9k4COy6+WqrI3sR3vvUIwf5x1HYdGMoZGfTV+hQ2JvELR4E7CiiyNPFuio9JdhH5jOVH8yCOO4iHR3TQnZNUorJGXaGwOdMh6+OZEk3vYMlxhUJTfCwZ9WF8M9wB6rGnez9/hk8ggJGENGgArIhN8Z0d0APgqUd9pIbO2FliKI3Rv2gfuBB3ZojrSwJ6/IHSi7Bo2TFN6cDrI+9K3+aOnBHHUTzanEYyjVGoez97u/YN5fn9xumUU7T8Nz0qwvR0px/oBjf8NzML15ER7BzaHz5FYqCjA77ZySWKBw8C1zyhJPGg7AdaPKHEtHneuCew9PfWNV5f/31JeNMwyc70lb0zuebnlA7eaNSXgH2uwQOfFsk5gLJG3aSwoKpEJiXyXvlS1Zfp1k7I+6Y3YF15csBtyY5GCjKu9i38fvu87LkAST0AMCwOe4NguMwAzgGo0oWQl8hZdkTHRs4DmOffL55fDvBana50etniz+LzoWqkErjh4gzwYKrYQDc419MADTTmEgi9LE5aBwAKRwQCIlTccDAFWImy3rQY4ctkdizCE2YGh0wj7nIwymLDonP3/Dh5XC/tQWgAclSpriyWKkPZBeAZHNj+lKw1fNQBWLB6xzxZ6gR4Sz1Mw0f9bTxpFRrieIoAYh5dACbkAqjHeADD5BSA7VCOAkL1cJqkHixqVjs7ynqFuSI8jnJJoEPj5SwEzjg9WE6YfI1hGjb9NwT9KPJFKRYiXoIvqQfZ/axCWCsQwuMs0Ks3w78CqDDRsAlj33pS06BpOHlKARWmCLT1BHk9NOVms+52JZVo+TF9VpSvAR9XL8D+T+B6F0x/AWYuAGCgB5yz7URr38XraceethB71jLEpnfXi5I1nC+pyduKpQ4oUlhFzcZTubEeZhQVwMFqaDm8VWCtYVIZrXvv8hinnWdmFTDwSxVcbKg3bHbezpdyiqpK5MS2Etki3Rd6x+SMpmDyw3G7ezd9VVkiH332tJS754635eRmU1j4KADh6lUbdj4nb97OlfaiAXgiH5xsbt19srnVD/xw77VrPw3VVmRDS3NbqKW5LShwyB+JfJeK419/+uWlpXkxwxg3furUpoqKilsmZN60abmmZeUHJ0xoCoVCbir8P1S4k+qyYRvnAAAAAElFTkSuQmCC"
        id="b"
        width={24}
        height={24}
      />
    </defs>
  </svg>
  );
};

export default Cart;
