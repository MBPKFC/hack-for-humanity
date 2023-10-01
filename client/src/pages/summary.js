import { Container } from "@/library/Container";
import Link from "next/link";
import React from "react";

export default function Summary() {
  return (
    <Container className="bg-brand-tan h-screen">
      <div className="max-w-md flex flex-col gap-2 mx-auto pt-4">
        <h2 className="text-3xl font-bold mb-4">Congratulations! 🎉</h2>
        <div className="bg-white p-4 rounded-md shadow-md mb-4 flex flex-col gap-4">
          <p>
            You've taken a huge step in caring for yourself by learning about
            health screenings that could save your life when cancer is detected
            early.
          </p>

          <p>
            <span className="font-bold">Next steps:</span> Find a primary care
            doctor near you and schedule an appointment.
          </p>
        </div>
        <Link
          href="/screening"
          className="w-full border-2 border-brand-blue hover:border-brand-blue-dark bg-brand-blue  hover:bg-brand-blue-dark text-white font-bold rounded-full py-2 text-center"
        >
          Get Screened
        </Link>
      </div>
    </Container>
  );
}
