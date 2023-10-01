import { StepContext } from "@/context/StepContext";
import { Container } from "@/library/Container";
import { cn } from "@/utils/cn";
import { MagnifyingGlass } from "@phosphor-icons/react";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";

export default function Summary() {
  const { score } = useContext(StepContext);

  let message

  if (score >= 0 && score <= 4) {
    message = "You might want to review the information and try again."
  } else if (score >= 5 && score <= 7) {
    message = "You're on the right track. Keep going!"
  } else {
    message = "Phenomenal work!"
  }

  return (
    <Container className="bg-brand-tan h-screen">
      <div className="max-w-md flex flex-col gap-2 mx-auto pt-4">
        <div className={cn(['p-2 font-medium rounded-md shadow-md text-sm',
          { 'bg-red-50  text-red-500': score <= 4 },
          { 'bg-amber-50  text-amber-600': score >= 5 && score <= 7 },
          { 'bg-green-50  text-green-600': score >= 8 }
        ])}>Your score: {score} / 10</div>
        <h2 className="text-3xl font-bold mb-4">{message}</h2>
        <div className="bg-white p-4 rounded-md shadow-md mb-4 flex flex-col gap-4">
          <p>
            You're making strides in your health journey! Discovering the significance of early health screenings could be the difference-maker in catching cancer early and getting the right treatment.
          </p>
          <hr />
          <div className="flex items-center">
            <MagnifyingGlass className="mr-4" color="#0E25F2" weight="duotone" size={48} />
            <p><span className="font-bold">Next steps:</span> Find a primary care
              doctor near you and schedule an appointment.</p>
          </div>
        </div>
        <Link
          href="/screening"
          className="w-full border-2 border-brand-blue hover:border-brand-blue-dark bg-brand-blue  hover:bg-brand-blue-dark text-white font-bold rounded-full py-2 text-center"
        >
          Find a Provider
        </Link>
      </div>
    </Container>
  );
}
