"use client";
import Button from "@/components/atoms/Button";
import { useObitWriter } from "@/components/contexts/ObitWriter";
import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import Container from "@/components/atoms/Container";

const ObitWriterForm = () => {
  const { formData, updateFormData } = useObitWriter();
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    router.push("/obitwriter/result");
  };

  return (
    <Container>
      <h1 className="text-2xl font-semibold mb-6">Write an Obituary</h1>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* NAME FIELDS */}
        <div>
          <h2 className="text-lg font-medium mb-2">
            What's your loved one's name?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First name *"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>
            <div>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last name *"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>
          </div>
        </div>

        {/* DATE OF DEATH */}
        <div>
          <label
            htmlFor="dateOfDeath"
            className="block text-lg font-medium mb-2"
          >
            Date of death:
          </label>
          <input
            type="date"
            id="dateOfDeath"
            name="dateOfDeath"
            value={formData.dateOfDeath}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-md px-3 py-2"
          />
        </div>

        {/* OBITUARY */}
        <div>
          <label htmlFor="obituary" className="block text-lg font-medium mb-2">
            Obituary:
          </label>
          <textarea
            id="obituary"
            name="obituary"
            rows={10}
            value={formData.obituary}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            placeholder="Write something memorable..."
          />
        </div>

        {/* FOOTER ACTION */}
        <div className="flex justify-between items-center pt-4">
          <div className="text-sm text-gray-500 italic">* Required fields</div>
          <Button type="submit" icon={ArrowRightIcon} iconPosition="right">
            Next
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default ObitWriterForm;
