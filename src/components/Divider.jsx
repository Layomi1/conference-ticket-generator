import React from "react";

const Divider = ({ isProgressbar = true, progressWidth }) => {
  return (
    <div className="w-full bg-[#0E464F] h-1 rounded-[5px]">
      {isProgressbar && (
        <div
          className={`bg-[#24A0B5] h-1 rounded-[5px] w-[${progressWidth}] md:w-${progressWidth}`}
        ></div>
      )}
    </div>
  );
};

export default Divider;
