import React, { useContext } from "react";
import Link from "next/link";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { StepContext } from "@/context/StepContext";
import { Container } from "@/library/Container";
import { cn } from "@/utils/cn";

export default function Summary() {
  const { score, questions } = useContext(StepContext);
  const numOfQuestions = questions.length;
  let message;

  if (score >= 0 && score <= numOfQuestions * 0.4) {
    message = "You might want to review the information and try again.";
  } else if (score >= numOfQuestions * 0.5 && score <= numOfQuestions * 0.7) {
    message = "You're on the right track. Keep going!";
  } else {
    message = "Phenomenal work!";
  }

  return (
    <Container className="h-screen bg-brand-tan">
      <div className="mx-auto flex max-w-md flex-col gap-2 pt-4">
        <div
          className={cn([
            "rounded-md p-2 text-sm font-medium shadow-md",
            { "bg-red-50  text-red-500": score <= numOfQuestions * 0.4 },
            {
              "bg-amber-50  text-amber-600":
                score >= numOfQuestions * 0.5 && score <= numOfQuestions * 0.7,
            },
            { "bg-green-50  text-green-600": score >= numOfQuestions * 0.8 },
          ])}>
          Your score: {score} / {numOfQuestions}
        </div>
        <h2 className="mb-4 text-3xl font-bold">{message}</h2>
        <div className="mb-4 flex flex-col gap-4 rounded-md bg-white p-4 shadow-md">
          <p>
            You're making strides in your health journey! Discovering the significance of early
            health screenings could be the difference-maker in catching cancer early and getting the
            right treatment.
          </p>
          <hr />
          <div className="flex items-center">
            <MagnifyingGlass className="mr-4" color="#0E25F2" weight="duotone" size={48} />
            <p>
              <span className="font-bold">Next steps:</span> Find a primary care doctor near you and
              schedule an appointment.
            </p>
          </div>
        </div>
        <Link
          href="/screening"
          className="hover:border-brand-blue-dark hover:bg-brand-blue-dark w-full rounded-full border-2  border-brand-blue bg-brand-blue py-2 text-center font-bold text-white">
          Find a Provider
        </Link>
      </div>
    </Container>
  );
}
