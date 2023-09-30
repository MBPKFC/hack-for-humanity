import React, { useContext } from "react";
import AnswerChoice from "./AnswerChoice";
import { StepContext } from "../context/StepContext";

const questions = [
  {
    questionText:
      "What is the recommended age at which individuals should start getting regular colon cancer screenings?",
    answerOptions: [
      { answerText: "Blah", isCorrect: false },
      { answerText: "Bloop", isCorrect: false },
      { answerText: "Bleep", isCorrect: false },
      { answerText: "Blah Blah", isCorrect: true },
    ],
    hint: "Hint 1",
    additionalInfo: "Additional Info 1",
  },
];

const Question = ({ setShowAnswer }) => {
  const { currentStep } = useContext(StepContext);

  return (
    <div className="max-w-md flex flex-col gap-2 mx-auto pt-4">
      <div className="bg-white p-4 rounded-md shadow-sm mb-4">
        {questions[currentStep].questionText}
      </div>
      <div className="flex flex-col gap-4">
        {questions[currentStep].answerOptions.map((answerOption, index) => (
          <AnswerChoice
            key={index}
            setShowAnswer={setShowAnswer}
            text={answerOption.answerText}
            isCorrect={answerOption.isCorrect}
          />
        ))}
      </div>
    </div>
  );
};

export default Question;
