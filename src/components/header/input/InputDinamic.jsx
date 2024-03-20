import React, { useState } from "react";
import { IoEyeSharp } from "react-icons/io5";

const InputDinamic = ({ type, label, children }) => {
  const [viewPass, setViewPass] = useState(type);

  const verifyView = viewPass === "password" ? "text" : "password";

  return (
    <>
      {type === "password" && (
        <IoEyeSharp
          onClick={() => setViewPass(verifyView)}
          className="absolute icon-password text-slate-600"
        />
      )}
      {children}
      <label id="label-input" className="setLabel">
        {label}
      </label>
    </>
  );
};

export default InputDinamic;

