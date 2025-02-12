import React, { useState } from "react";

const useMultistep = (steps) => {
  const [currentStepIndex, setaCurrentStepIndex] = useState(0);
  function next() {
    setCurrentStepIndex((i) => {
      if (i >= steps.length - 1) return 1;
      return i + 1;
    });
  }

  return {
    next,
    currentStepIndex,
    step: steps[currentStepIndex],
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    steps,
  };
};

export default useMultistep;
