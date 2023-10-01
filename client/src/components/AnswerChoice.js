import React, { useContext } from "react";
import { StepContext } from "@/context/StepContext";

const AnswerChoice = ({ text, setShowAnswer, isCorrect }) => {
  const { setIsAnswerCorrect } = useContext(StepContext);

  const handleClick = () => {
    setShowAnswer(true);
    setIsAnswerCorrect(isCorrect);
    console.log("clicked");
  };
  return (
    <button
      onClick={handleClick}
      className="block w-full rounded-full border-2 border-brand-blue bg-white py-2 font-medium transition-colors duration-200 hover:bg-brand-blue hover:text-white">
      {text}
    </button>
  );
};

export default AnswerChoice;
