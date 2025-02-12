import React from "react";

const Button = ({
  children,
  variant = ghosted,
  px,
  py,
  style,
  justify,
  type,
  width,
}) => {
  const variants = {
    primary:
      "bg-text-teal text-white border-none hover:border-text-teal hover:border-[1px] active:bg-transparent active:border-text-teal active:border-[1px] active:text-teal ",

    outlined:
      "bg-transparent text-text-teal border-text-teal focus:text-white focus:bg-text-teal focus:border-none active:bg-text-teal active:text-white",

    ghosted:
      "bg-white text-[#B3B3B3] border-[#D5EA00] focus:bg-[#D5EA00] focus:text-white border-none active:bg-[#D5EA00] active:text-white",
  };

  return (
    <button
      type={type}
      className={`flex justify-${justify} text-nowrap backdrop:items-center font-light border-[1px] rounded-[12px] ${variants[variant]} py-${py} px-${px} w-full md:w-${width}
        `}
      style={style}
    >
      {children}
    </button>
  );
};

export default Button;
