import React from "react";

const InputCart = ({errors,addClass,label,name,value,handleChange}) => {
    const verifyError = errors[name]
  return (
    <>
    <input
      name={name}
      className={verifyError?.length > 0 ? `input-cal input-base ${addClass} errorBorder`  : `input-cal input-base ${addClass} `    }
      id="input"
      placeholder=""
      type="text"
      value={value}
      onChange={handleChange}
    />
     <label id="label-input">{label}</label>
    </>
  );
};

export default InputCart;
