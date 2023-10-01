import React, { useState } from "react";
import { useRouter } from "next/router";
import { Stethoscope } from "@phosphor-icons/react";
import insurances from "@/data/insurances.json";
import { Container } from "@/library/Container";
// fetch request
import { updateSingleUser } from "../utils/API";

export default function screening() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState({
    zipCode: 33426,
    insurancePlan: "AARP",
    insuranceType: "PPO",
  });

  const handleInsuranceChange = (value) => {
    setUserData({ ...userData, insurancePlan: value }); // Fixed: Changed insuranceType to insurancePlan
  };

  const handleNextClick = () => {
    setStep(step + 1);
  };

  const handleBackClick = () => {
    setStep(step - 1);
  };

  const handleSubmitClick = async (e) => {
    e.preventDefault();

    if (userData.insurancePlan === "No Insurance") {
      setUserData({ ...userData, insuranceType: "None" });
    }

    //Make API call here
    const userId = localStorage.getItem("userId");

    if (!userId) return router.push("/providers");

    try {
      const res = await updateSingleUser({
        id: userId,
        zip: userData.zipCode,
        insurance: {
          provider: userData.insurancePlan,
          type: userData.insuranceType,
        },
      });
      if (!res.ok) {
        throw new Error("something went wrong!");
      }

      const user = await res.json();
      console.log(user);
    } catch (err) {
      console.error(err);
    }
    //Redirect to results page
    router.push("/providers");
  };

  return (
    <Container className="">
      <div className="mx-auto flex max-w-md flex-col gap-2 pt-4">
        <div className="mb-4 flex items-center gap-3 text-3xl font-bold ">
          <span className="rounded-full bg-white p-2">
            <Stethoscope size={32} />
          </span>
          <span>Find a Provider Near You</span>
        </div>
        <div className="mb-4 flex flex-col gap-4 rounded-md bg-white p-4 shadow-md">
          {step === 1 && (
            <>
              <p className="font-bold">What is your ZIP Code?</p>
              <input
                value={userData.zipCode}
                placeholder="Enter your ZIP Code"
                onChange={(e) => setUserData({ ...userData, zipCode: e.target.value })}
                type="tel"
                className="rounded-md border border-gray-300 p-2"
              />
            </>
          )}
          {step === 2 && (
            <>
              <p className="font-bold">Which insurance plan do you have?</p>
              <select
                value={userData.insurancePlan}
                onChange={(e) => handleInsuranceChange(e.target.value)}
                className="rounded-md border border-gray-300 p-2">
                {insurances.map((insurance) => (
                  <option key={insurance} value={insurance}>
                    {insurance}
                  </option>
                ))}
              </select>
            </>
          )}
          {step === 3 && userData.insurancePlan !== "No Insurance" && (
            <>
              <p className="font-bold">Which plan type do you have?</p>
              <select
                onChange={(e) => setUserData({ ...userData, insuranceType: e.target.value })}
                className="rounded-md border border-gray-300 p-2 pr-3">
                <option value="EPO">EPO</option>
                <option value="HMO">HMO</option>
                <option value="PPO">PPO</option>
                <option value="POS">POS</option>
              </select>
            </>
          )}

          <div className="flex gap-2">
            {step > 1 && (
              <button
                onClick={handleBackClick}
                className="w-full rounded-full border-2 border-brand-blue bg-white  py-2 font-bold hover:border-black hover:bg-black hover:text-white">
                Back
              </button>
            )}

            {step === 1 ? (
              <button
                onClick={handleNextClick}
                className="w-full rounded-full border-2 border-brand-blue bg-brand-blue  py-2 font-bold text-white hover:border-brand-blue-dark hover:bg-brand-blue-dark">
                Next
              </button>
            ) : null}

            {step === 2 && userData?.insurancePlan !== "No Insurance" ? (
              <button
                onClick={handleNextClick}
                className="w-full rounded-full border-2 border-brand-blue bg-brand-blue  py-2 font-bold text-white hover:border-brand-blue-dark hover:bg-brand-blue-dark">
                Next
              </button>
            ) : null}

            {(step === 2 && userData?.insurancePlan === "No Insurance") || step === 3 ? (
              <button
                className="w-full rounded-full border-2 border-brand-blue bg-brand-blue  py-2 font-bold text-white hover:border-brand-blue-dark hover:bg-brand-blue-dark"
                onClick={handleSubmitClick}>
                Submit
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </Container>
  );
}
