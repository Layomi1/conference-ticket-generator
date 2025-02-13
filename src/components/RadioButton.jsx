import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const RadioButton = ({ ...props }) => {
  const { value, onChange } = useContext(GlobalContext);
  return (
    <label
      className={`w-full md:w-1/3 border-text-teal p-3 flex flex-col gap-3 rounded-[12px] border-[1px] transition-all cursor-pointer ${
        value === props.value ? "bg-light-teal" : "bg-transparent"
      }`}
    >
      <input
        type="radio"
        className="hidden"
        checked={value === props.value}
        onChange={onChange}
      />

      <h6 className="font-bold font-roboto text-2xl">{props.title}</h6>
      <p className="uppercase text-gray text-nowrap font-roboto">
        {props.access}
        <span className="block font-light text-sm ">{props.seat}</span>
      </p>
    </label>
  );
};

export default RadioButton;
