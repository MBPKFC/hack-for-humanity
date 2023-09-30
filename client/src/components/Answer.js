
const correctOptions = ["Correct!", "You're a genius!"];
const incorrectOptions = ["Not Quite.", "That was a tough one."];

export default function Answer (props){
    return (
        <div>
            <div>
                <p>{ props.isCorrect?  correctOptions[0] : incorrectOptions[0] }</p>
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