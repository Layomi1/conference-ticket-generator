import React, { useState } from "react";
import Step1 from "../pages/Step1";
import Step2 from "../pages/Step2";
import Step3 from "../pages/Step3";
import useMultistep from "../hooks/useMultistep";

const Main = () => {
  const { currentStepIndex, step, steps } = useMultistep([
    <Step1 />,
    <Step2 />,
    <Step3 />,
  ]);

  return (
    <section className="flex flex-col bg-[#05252C]  w-full md:max-w-[700px] h-auto p-6 md:p-12 rounded-[40px] border-[#0E464F] border-[1px] mx-auto relative">
      <p className="absolute top-7 md:top-14 right-12 font-roboto">
        Step {currentStepIndex + 1}/{steps.length}
      </p>

      {/* <div>{step}</div> */}
      <div>
        <Step1 />
      </div>
    </section>
  );
};

export default Main;
