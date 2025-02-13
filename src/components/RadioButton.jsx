import React from "react";
// import { GlobalContext } from "../context/GlobalContext";

const RadioButton = ({
  value,
  access,
  title,
  seat,
  isDefaultValue = false,
}) => {
  return (
    <label
      className={`w-full md:w-1/3 border-text-teal p-3 flex flex-col gap-3 rounded-[12px] border-[1px] transition-all cursor-pointer 
      }`}
      style={{
        background: isDefaultValue ? "bg-transparent" : "bg-light-teal",
      }}
    >
      <input type="radio" className="hidden" value={value} />

      <h6 className="font-bold font-roboto text-2xl">{title}</h6>
      <p className="uppercase text-gray text-nowrap font-roboto">
        {access}
        <span className="block font-light text-sm ">{seat}</span>
      </p>
    </label>
  );
};

export default RadioButton;
