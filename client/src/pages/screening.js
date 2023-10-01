import React, { useEffect, useState } from "react";
import { Container } from "@/library/Container";
import { NavigationArrow, Stethoscope } from "@phosphor-icons/react";
import insurances from "@/data/insurances.json";
import { useRouter } from "next/router";

export default function screening() {
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState({
    zipCode: 33426,
    insurancePlan: "AARP",
    insuranceType: "PPO",
  });
  const [providerCount, setProviderCount] = useState(0);

  const handleInsuranceChange = (value) => {
    setUserData({ ...userData, insurancePlan: value }); // Fixed: Changed insuranceType to insurancePlan
  };

  const handleNextClick = () => {
    setStep(step + 1);
  };

  const handleBackClick = () => {
    setStep(step - 1);
  };

  const router = useRouter();

  const handleSubmitClick = async () => {
    if (userData.insurancePlan === "No Insurance") {
      setUserData({ ...userData, insuranceType: "None" });
    }
    //Make API call here

    //Redirect to results page
    await router.push("/providers");
  };

  useEffect(() => {

    setProviderCount(Math.floor(Math.random() * 100))
  }, [userData])

  return (
    <Container className="">
      <div className="max-w-md flex flex-col gap-2 mx-auto pt-4">
        <div className="flex gap-3 items-center text-3xl font-bold mb-4 ">
          <span className="bg-white p-2 rounded-full">
            <Stethoscope size={32} />
          </span>
          <span>Find a Provider Near You</span>
        </div>
        {step === 2 && (
          <div className="flex items-center text-sm font-medium shadow-md bg-green-50 text-green-900 p-2 rounded-md">
            <NavigationArrow size={20} weight="bold" className="mr-2" />
            Great! We found {providerCount} providers near your.</div>
        )}
        <div className="bg-white p-4 rounded-md shadow-md mb-4 flex flex-col gap-4">
          {step === 1 && (
            <>
              <p className="font-bold">What is your ZIP Code?</p>
              <input
                value={userData.zipCode}
                placeholder="Enter your ZIP Code"
                onChange={(e) =>
                  setUserData({ ...userData, zipCode: e.target.value })
                }
                type="tel"
                className="border border-gray-300 rounded-md p-2"
              />
            </>
          )}
          {step === 2 && (
            <>
              <p className="font-bold">Which insurance plan do you have?</p>
              <select
                value={userData.insurancePlan}
                onChange={(e) => handleInsuranceChange(e.target.value)}
                className="border border-gray-300 rounded-md p-2"
              >
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
                onChange={(e) =>
                  setUserData({ ...userData, insuranceType: e.target.value })
                }
                className="border border-gray-300 rounded-md p-2 pr-3"
              >
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
                className="w-full border-2 border-brand-blue hover:border-black bg-white  hover:bg-black hover:text-white font-bold rounded-full py-2"
              >
                Back
              </button>
            )}

            {step === 1 ? (
              <button
                onClick={handleNextClick}
                className="w-full border-2 border-brand-blue hover:border-brand-blue-dark bg-brand-blue  hover:bg-brand-blue-dark text-white font-bold rounded-full py-2"
              >
                Next
              </button>
            ) : null}

            {step === 2 && userData?.insurancePlan !== "No Insurance" ? (
              <button
                onClick={handleNextClick}
                className="w-full border-2 border-brand-blue hover:border-brand-blue-dark bg-brand-blue  hover:bg-brand-blue-dark text-white font-bold rounded-full py-2"
              >
                Next
              </button>
            ) : null}

            {(step === 2 && userData?.insurancePlan === "No Insurance") ||
              step === 3 ? (
              <button
                className="w-full border-2 border-brand-blue hover:border-brand-blue-dark bg-brand-blue  hover:bg-brand-blue-dark text-white font-bold rounded-full py-2"
                onClick={handleSubmitClick}
              >
                Submit
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </Container >
  );
}
