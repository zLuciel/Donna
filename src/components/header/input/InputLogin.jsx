import React, { useState } from "react";
import { IoEyeSharp } from "react-icons/io5";

const InputLogin = ({
  errors,
  type,
  addClass,
  label,
  name,
  value,
  handleChange,
}) => {
  // const verifyError = errors[name]
  const [viewPass, setViewPass] = useState(type);

   const verifyView = viewPass === "password" ? "text" : "password"
  return (
    <>
      {type === "password" && (
        <IoEyeSharp
          onClick={() =>
            setViewPass(verifyView)
          }
          className="absolute icon-password text-slate-600"
        />
      )}
      <input
        name={name}
        className={`input-cal input-base setInput ${addClass} `}
        id="input"
        placeholder=""
        type={viewPass}
        value={value}
        onChange={handleChange}
      />
      <label id="label-input" className="setLabel">
        {label}
      </label>
    </>
  );
};

export default InputLogin;
