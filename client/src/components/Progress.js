import React, { useContext } from "react";
import { StepContext } from "@/context/StepContext";
import questions from "@/data/questions.json";

const Progress = () => {
  const { currentStep } = useContext(StepContext);
  return (
    <div className="flex justify-center py-2">
      {questions.map((question, index) => {
        return index > currentStep ? (
          <>
            <div className="flex h-6 w-6 items-center justify-center rounded-full border border-brand-blue bg-white text-xs font-bold text-brand-blue">
              {index + 1}
            </div>
            {index !== questions.length - 1 && (
              <span className="h-[2px] w-4 self-center bg-brand-blue"></span>
            )}
          </>
        ) : (
          <>
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-blue text-xs font-bold text-white ">
              {index + 1}
            </div>
            {index !== questions.length - 1 && (
              <span className="h-[2px] w-4 self-center bg-brand-blue"></span>
            )}
          </>
        );
      })}
    </div>
  );
};

export default Progress;
