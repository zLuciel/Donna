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
      <path fill="url(#awd)" d="M0 0h24v24H0z" />
      <defs>
        <pattern
          id="awd"
          width={1}
          height={1}
          patternContentUnits="objectBoundingBox"
        >
          <use xlinkHref="#bwd" transform="scale(.00195)" />
        </pattern>
        <image
          xlinkHref="data:image/png;base64,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"
          id="bwd"
          width={512}
          height={512}
        />
      </defs>
    </svg>
  );
};

export default Cart;
