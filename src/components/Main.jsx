import React, { useState } from "react";
import Step1 from "../pages/Step1";
import Step2 from "../pages/Step2";
import Step3 from "../pages/Step3";
import useMultistep from "../hooks/useMultistep";
import Heading from "./Heading";

const Main = () => {
  const [data, setData] = useState("");

  const { next, currentStepIndex, step, steps, isFirstStep } = useMultistep([
    <Step1 />,
    <Step2 />,
    <Step3 />,
  ]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!IsLastStep) return next();
    alert("Successful Account creation!");
  }
  return (
    <section className="flex flex-col bg-[#05252C]  w-full md:max-w-[700px] h-auto p-6 md:p-12 rounded-[40px] border-[#0E464F] border-[1px] mx-auto relative">
      <form onSubmit={handleSubmit}>
        <p className="absolute top-14 right-12 font-roboto">
          Step {currentStepIndex + 1}/{steps.length}
        </p>

        <p>{step}</p>
      </form>
    </section>
  );
};

export default Main;
