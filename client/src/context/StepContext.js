import { createContext, useState } from "react";

export const StepContext = createContext();

export const StepContextProvider = (props) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
  const value = {
    currentStep,
    setCurrentStep,
    isAnswerCorrect,
    setIsAnswerCorrect,
  };
  const { Provider } = StepContext;

  return <Provider value={value}>{props.children}</Provider>;
};
