import { StepContext } from "@/context/StepContext";
import React, { useContext } from "react";

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
      className="bg-white border-2 border-brand-blue hover:bg-brand-blue hover:text-white transition-colors duration-200 rounded-full py-2 block font-bold w-full"
    >
      {text}
    </button>
  );
};

export default AnswerChoice;
