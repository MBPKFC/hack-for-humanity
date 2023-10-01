import React, { useContext } from "react";
import { StepContext } from "@/context/StepContext";

const AnswerChoice = ({ text, setShowAnswer, isCorrect }) => {
  const { setIsAnswerCorrect, setScore } = useContext(StepContext);

  const handleClick = () => {
    setShowAnswer(true);
    setIsAnswerCorrect(isCorrect);

    if (isCorrect) {
      setScore(prevScore => prevScore + 1);
    }

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
