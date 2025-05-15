"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useObitWriter } from "@/components/contexts/ObitWriter";
import Button from "@/components/atoms/Button";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";

const ObitWriterForm = () => {
  const { formData, updateFormData } = useObitWriter();
  const [step, setStep] = useState(1);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData(name, value);
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Final form data:", formData);
    router.push("/obitwriter/result");
  };

  return (
    <div className="px-4 sm:px-6 py-8 w-full max-w-250 space-y-3">
      <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
        Obit Writer
      </div>
      <h1 className="text-2xl font-semibold mb-6">
        Tell us about your loved one
      </h1>

      <div className="bg-[#ECF1EF] rounded-lg rounded-tl-xs px-4 py-3 mb-4 text-gray-700">
        {step === 1
          ? "You can paste your pre-written Obituary below."
          : "You're doing a great job. We need a few additional details to create the obituary."}
      </div>

      <form onSubmit={handleSubmit}>
        <div className="border-3 border-[#B49B5D] rounded-lg p-4 mb-6 bg-white space-y-6">
          {step === 1 ? (
            <>
              <textarea
                id="obituary"
                name="obituary"
                rows={10}
                value={formData.obituary}
                onChange={handleChange}
                required
                className="w-full  rounded-md px-4 py-3 text-gray-800"
                placeholder="Paste the obituary here, as well as any additional memories or thoughts you want to include."
              />
            </>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  name="firstName"
                  placeholder="First Name *"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 rounded-md px-4 py-2"
                />
                <input
                  name="lastName"
                  placeholder="Last Name *"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 rounded-md px-4 py-2"
                />
              </div>

              <input
                name="dateOfDeath"
                type="date"
                value={formData.dateOfDeath}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-md px-4 py-2 w-full"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  name="cityOfDeath"
                  placeholder="City of death *"
                  value={formData.cityOfDeath}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 rounded-md px-4 py-2"
                />
                <input
                  name="stateOfDeath"
                  placeholder="State of death *"
                  value={formData.stateOfDeath}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 rounded-md px-4 py-2"
                />
              </div>

              <input
                name="countryOfDeath"
                placeholder="Country of death *"
                value={formData.countryOfDeath}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-md px-4 py-2 w-full"
              />

              <div>
                <p className="mb-2">
                  Will you be holding a Funeral or Memorial service?
                </p>
                <div className="flex gap-4">
                  {["Yes", "No", "I don't know yet"].map((val) => (
                    <label key={val} className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="hasService"
                        value={val}
                        checked={formData.hasService === val}
                        onChange={handleChange}
                      />
                      {val}
                    </label>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>

        <div className="flex justify-between items-center">
          {step > 1 ? (
            <Button type="button" onClick={prevStep} icon={ArrowLeftIcon}>
              Back
            </Button>
          ) : (
            <div />
          )}

          {step === 1 ? (
            <Button
              type="button"
              icon={ArrowRightIcon}
              iconPosition="right"
              onClick={nextStep}
            >
              Continue
            </Button>
          ) : (
            <Button type="submit" icon={ArrowRightIcon} iconPosition="right">
              Continue
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ObitWriterForm;
