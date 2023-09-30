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
            <div className="flex justify-center items-center rounded-full font-bold h-6 w-6 text-xs bg-white text-brand-blue border border-brand-blue">
              {index + 1}
            </div>
            {index !== questions.length - 1 && (
              <span className="self-center h-[2px] w-4 bg-brand-blue"></span>
            )}
          </>
        ) : (
          <>
            <div className="flex justify-center items-center rounded-full font-bold h-6 w-6 text-xs bg-brand-blue text-white ">
              {index + 1}
            </div>
            <span className="self-center h-[2px] w-4 bg-brand-blue"></span>
          </>
        );
      })}
    </div>
  );
};

export default Progress;
