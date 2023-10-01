import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { StepContext } from "@/context/StepContext";
import questions from "../data/questions.json";

const correctAnswerHeadline = ["That's correct! Great job!",
  "You got it! Well done!",
  "Absolutely right! Impressive!",
  "You're on fire! That's the correct answer!",
  "Bingo! You nailed it!"];

const incorrectAnswerHeadline = ["Nope, that's not it!", "Hmmm, not quite.", "Uh-oh, that's not right.", "Sorry, that's not the correct answer.", "Sorry, better luck next question."];

// const gameOverText =
//   "You've taken a huge step in caring your yourself by learning about health screenings that could save your life when cancer is detected early. If you're ready, find a PCP doctor near you.";

const Answer = ({ setShowAnswer }) => {

  const { currentStep, setCurrentStep, isAnswerCorrect } =
    useContext(StepContext);
  const [headline, setHeadline] = useState('');

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
  }, [isAnswerCorrect, currentStep])

  // useEffect(() => {
  //     setRandomCorrectText(correctOptions[Math.floor(Math.random() * correctOptions.length)]);
  //     setRandomIncorrectText(incorrectOptions[Math.floor(Math.random() * incorrectOptions.length)]);
  // }, []);

  return (
    <div className="max-w-md flex flex-col gap-2 mx-auto pt-4">
      <div>
        <p className="font-bold text-2xl text-center mb-4">
          {headline}
        </p>
        <p className="bg-white p-4 rounded-md shadow-md mb-4">
          {questions[currentStep].additionalInfo}
        </p>
      </div>
      <div className="flex justify-center">
        {isFinalQuestion ? (
          <Link
            href="/summary"
            className="w-full bg-brand-blue hover:bg-brand-blue-dark text-white font-bold rounded-full py-2 text-center"
          >
            Go To Summary
          </Link>
        ) : (
          <button
            className="w-full border-2 border-brand-blue hover:border-brand-blue-dark bg-brand-blue  hover:bg-brand-blue-dark text-white font-bold rounded-full py-2"
            onClick={incrementStep}
          >
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
