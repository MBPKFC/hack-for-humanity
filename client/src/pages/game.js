import React, { useContext, useState } from "react";
import Answer from "@/components/Answer";
import Question from "@/components/Question";
import { StepContext } from "@/context/StepContext";
import { Container } from "@/library/Container";
import Progress from "../components/Progress";

export default function Game() {
  const [showAnswer, setShowAnswer] = useState(false);
  const { isAnswerCorrect, setIsAnswerCorrect } = useContext(StepContext);

  console.log(isAnswerCorrect);

  return (
    <Container className="h-screen">
      <Progress />
      {!showAnswer ? (
        <Question setIsAnswerCorrect={setIsAnswerCorrect} setShowAnswer={setShowAnswer} />
      ) : (
        <Answer setShowAnswer={setShowAnswer} />
      )}
    </Container>
  );
}
