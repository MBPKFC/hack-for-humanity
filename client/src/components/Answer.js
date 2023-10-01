import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { StepContext } from "@/context/StepContext";
import { cn } from "@/utils/cn";
import questions from "../data/questions.json";

const correctAnswerHeadline = [
  "That's correct! Great job!",
  "You got it! Well done!",
  "Absolutely right! Impressive!",
  "You're on fire! That's the correct answer!",
  "Bingo! You nailed it!",
];

const incorrectAnswerHeadline = [
  "Nope, that's not it!",
  "Hmmm, not quite.",
  "Uh-oh, that's not right.",
  "Sorry, that's not the correct answer.",
  "Sorry, better luck next question.",
];

const Answer = ({ setShowAnswer }) => {
  const { currentStep, setCurrentStep, isAnswerCorrect } = useContext(StepContext);
  const [headline, setHeadline] = useState("");

  const isFinalQuestion = currentStep === questions.length - 1;

  function incrementStep() {
    if (isFinalQuestion) {
      console.log("There are no more questions!");
      return;
    } else {
      setCurrentStep(currentStep + 1);
      setShowAnswer(false);
    }
  }

  const getRandomResponseHeadline = () => {
    const randomIndex = Math.floor(Math.random() * 5);
    if (isAnswerCorrect) {
      return correctAnswerHeadline[randomIndex];
    } else return incorrectAnswerHeadline[randomIndex];
  };

  useEffect(() => {
    setHeadline(getRandomResponseHeadline());
  }, [isAnswerCorrect, currentStep]);

  return (
    <div className="mx-auto flex max-w-md flex-col gap-2 pt-4">
      <div>
        <p className="mb-6 text-center text-2xl font-bold">{headline}</p>

        <p className="mb-4 mt-8 rounded-md bg-white p-4 shadow-md text-lg">
          {questions[currentStep].additionalInfo}
        </p>
      </div>
      <div className="flex justify-center">
        {isFinalQuestion ? (
          <Link
            href="/summary"
            className="hover:bg-brand-blue-dark w-full rounded-full bg-brand-blue py-2 text-center font-bold text-white">
            Go To Summary
          </Link>
        ) : (
          <button
            className="hover:border-brand-blue-dark hover:bg-brand-blue-dark w-full rounded-full border-2  border-brand-blue bg-brand-blue py-2 font-bold text-white"
            onClick={incrementStep}>
            Next Question
          </button>
        )}
      </div>
    </div>
  );
};

export default Answer;
