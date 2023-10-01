import Question from "@/components/Question";
import Answer from "@/components/Answer";
import { StepContext } from "@/context/StepContext";
import { Container } from "@/library/Container";
import React, { useContext, useState } from "react";
import Progress from "../components/Progress";

export default function Game() {
   const [showAnswer, setShowAnswer] = useState(false);
   const { isAnswerCorrect, setIsAnswerCorrect } = useContext(StepContext);

   console.log(isAnswerCorrect);

   return (
      <Container className="bg-brand-tan h-screen">
         <Progress />
         {!showAnswer ? (
            <Question
               setIsAnswerCorrect={setIsAnswerCorrect}
               setShowAnswer={setShowAnswer}
            />
         ) : (
            <Answer setShowAnswer={setShowAnswer} />
         )}
      </Container>
   );
}
