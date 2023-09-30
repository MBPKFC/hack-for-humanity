import { useEffect, useState } from "react";
const correctOptions = ["Correct!", "You're a genius!"];
const incorrectOptions = ["Practice makes perfect.", "That was a tough one."];

export default function Answer (props){
    const [randomCorrectText, setRandomCorrectText] = useState();
    const [randomIncorrectText, setRandomIncorrectText] = useState();

    useEffect(() => {
        setRandomCorrectText(correctOptions[Math.floor(Math.random() * correctOptions.length)]);
        setRandomIncorrectText(incorrectOptions[Math.floor(Math.random() * incorrectOptions.length)]);
    });

    return (
        <div>
            <div>
                <p>{ props.isCorrect?  `${randomCorrectText}` : `${randomIncorrectText}` }</p>
                <p>{ props.additionalInformation }</p>
            </div>
            <div>
                <button>Next Question</button>
                <button>Game Summary</button>
                <p>Learn more!</p>
            </div>
        </div>
    )
};