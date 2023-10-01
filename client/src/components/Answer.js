import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { StepContext } from "@/context/StepContext";
import questions from "../data/questions.json";

const correctOptions = ["Correct!", "You're a genius!"];
const incorrectOptions = ["Practice makes perfect.", "That was a tough one."];

const gameOverText =
  "You've taken a huge step in caring your yourself by learning about health screenings that could save your life when cancer is detected early. If you're ready, find a PCP doctor near you.";

const Answer = ({ setShowAnswer }) => {
  const [randomCorrectText, setRandomCorrectText] = useState();
  const [randomIncorrectText, setRandomIncorrectText] = useState();

  const { currentStep, setCurrentStep, isAnswerCorrect } = useContext(StepContext);
  // console.log(currentStep);
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

  // useEffect(() => {
  //     setRandomCorrectText(correctOptions[Math.floor(Math.random() * correctOptions.length)]);
  //     setRandomIncorrectText(incorrectOptions[Math.floor(Math.random() * incorrectOptions.length)]);
  // }, []);

  return (
    <div className="mx-auto flex max-w-md flex-col gap-2 pt-4">
      <div>
        <p className="mb-4 text-center text-2xl font-bold">
          {isAnswerCorrect ? `Correct!` : `Not Quite.`}
        </p>
        <p className="mb-4 rounded-md bg-white p-4 shadow-sm">
          {questions[currentStep].additionalInfo}
        </p>
      </div>
      <div className="flex justify-center">
        {isFinalQuestion ? (
          <Link
            href="/summary"
            className="rounded-full bg-brand-blue px-6 py-2 font-bold text-white">
            Go To Summary
          </Link>
        ) : (
          <button
            className="rounded-full bg-brand-blue px-6 py-2 font-bold text-white"
            onClick={incrementStep}>
            Next Question
          </button>
        )}
      </div>
      {/* {isFinalQuestion 
            ? (<div>
                <p>Congratulations</p>
                <p>{gameOverText}</p>
                <div>
                    <button></button>
                </div>
            </div>) 
            : (<div>
                <p className="font-bold text-2xl text-center">{isAnswerCorrect ? `Correct!` : `Not Quite.`}</p>
                <p>{questions[currentStep].additionalInfo}</p>
                <div>
                    <button className="bg-brand-blue text-white font-bold rounded-full py-2 px-6" onClick={incrementStep}>Next Question</button>
                </div>
            </div>)} */}
    </div>
  );
};

export default Answer;
