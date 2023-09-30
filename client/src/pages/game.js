import Question from "@/components/Question";
import Answer from "@/components/Answer";
import { StepContext } from "@/context/StepContext";
import React, { useContext, useState } from "react";
import Progress from "../components/Progress";
import { Container } from "@/library/Container";

export default function Game() {
  const [showAnswer, setShowAnswer] = useState(false);
  const { isAnswerCorrect, setIsAnswerCorrect } = useContext(StepContext);

  console.log(isAnswerCorrect);

  return (
    <Container>
      <Progress />
      {!showAnswer ? (
        <Question
          setIsAnswerCorrect={setIsAnswerCorrect}
          setShowAnswer={setShowAnswer}
        />
      ) : (
        // <div>Your answer is {isAnswerCorrect? 'correct! 😁' : 'incorrect! 😢'}</div>
        <Answer setShowAnswer={setShowAnswer}/>
      )}
    </Container>
  );
}
