import React from "react";

const Divider = ({ isProgressbar = true, progress = "0" }) => {
  return (
    <div className="w-full bg-[#0E464F] h-1 rounded-[5px]">
      {isProgressbar && (
        <div
          className={"bg-[#24A0B5] h-1 rounded-[5px] "}
          style={{ width: `${progress}` }}
        >
          {" "}
        </div>
      )}
    </div>
  );
};

export default Divider;
