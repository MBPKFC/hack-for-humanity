import React, { useContext, useEffect, useState } from "react";
import { StepContext } from "@/context/StepContext";
import questions from "../data/questions.json";

const correctOptions = ["Correct!", "You're a genius!"];
const incorrectOptions = ["Practice makes perfect.", "That was a tough one."];


const Answer = ({ setShowAnswer }) => {

    const [randomCorrectText, setRandomCorrectText] = useState();
    const [randomIncorrectText, setRandomIncorrectText] = useState();

    const { currentStep, setCurrentStep, isAnswerCorrect } = useContext(StepContext);
    // console.log(currentStep);
    const isFinalQuestion = currentStep === questions.length - 1;

    function incrementStep() {
        if (isFinalQuestion) {
            console.log('There are no more questions!');
            return
        } else {
            setCurrentStep(currentStep + 1);
            setShowAnswer(false);
        };
    };

    // useEffect(() => {
    //     setRandomCorrectText(correctOptions[Math.floor(Math.random() * correctOptions.length)]);
    //     setRandomIncorrectText(incorrectOptions[Math.floor(Math.random() * incorrectOptions.length)]);
    // }, []);

    return (
        <div>
            <div>
                <p>{isAnswerCorrect ? `Correct` : `Incorrect`}</p>
                <p>{questions[currentStep].additionalInfo}</p>
            </div>
            <div>
                {isFinalQuestion
                    ? (<button>Game Summary</button>)
                    : (<button onClick={incrementStep}>Next Question</button>)}
                <p>Learn more!</p>
            </div>
        </div>
    )
};

export default Answer;