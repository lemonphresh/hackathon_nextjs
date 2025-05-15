"use client";

import Container from "@/components/atoms/Container";
import { useObitWriter } from "@/components/contexts/ObitWriter";
import LeadIn from "@/components/molecules/LeadIn";
import LegacySection from "@/components/organisms/LegacySection/LegacySection";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function IndexPage() {
  const { formData } = useObitWriter();
  const {
    age,
    firstName,
    lastName,
    dateOfDeath,
    obituary,
    countryOfDeath,
    stateOfDeath,
    cityOfDeath,
  } = formData;
  const router = useRouter();

  useEffect(() => {
    if (!firstName || !lastName || !dateOfDeath || !obituary) {
      router.push("/obitwriter/obituary");
    }
  }, [firstName, lastName, dateOfDeath, obituary, router]);

  if (!firstName || !lastName || !dateOfDeath || !obituary) return null;

  return (
    <main className="flex items-center bg-white min-h-screen flex-col pb-12 gap-12">
      <LeadIn
        bgImage="https://www.legacy.com/static/globalassets/obit-writer/legacy-hug-hero.jpg"
        title="ObitWriter"
        enableShare={false}
      />
      <section className="px-4 sm:px-6 py-8 max-w-200 space-y-6">
        <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
          Obit Writer
        </div>

        <h1 className="text-2xl font-bold text-gray-900">
          {firstName}'s Story
        </h1>

        <div className="rounded-tr-xl rounded-br-xl rounded-bl-xl rounded-tl-md bg-[#EDF3F2] px-6 py-4 text-md text-gray-700 leading-relaxed">
          Take a moment to review the obituary one more time. Once you're ready,
          you can choose how you want to publish it.
        </div>

        <div className="relative rounded-xl border-3 border-[#B59C52] bg-[#FAF6EF] px-6 py-5">
          <button className="absolute top-4 right-4 rounded-full bg-white p-2 shadow hover:bg-gray-100">
            <svg
              className="w-4 h-4 text-[#2C2310]"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.232 5.232l3.536 3.536M9 11l6 6M3 21h6l11-11a2.828 2.828 0 00-4-4L3 17v4z"
              />
            </svg>
          </button>

          <h2 className="text-xl font-bold text-[#2C2310]">
            {firstName} {lastName}'s Story
          </h2>

          <p className="text-md text-[#2C2310] mt-1">
            Died {dateOfDeath.split("-")[0]}
          </p>

          <hr className="my-4 border-[#B59C52]" />

          <div className="text-sm text-[#2C2310] flex gap-6">
            {age && <span>Age {age}</span>}
            {(cityOfDeath || stateOfDeath || countryOfDeath) && (
              <span>
                {cityOfDeath && `${cityOfDeath}, `}
                {stateOfDeath && `${stateOfDeath}, `}
                {countryOfDeath}
              </span>
            )}
          </div>
        </div>

        <div className="relative rounded-xl border-3 border-[#B59C52] bg-white px-6 py-5">
          {obituary}
        </div>
      </section>

      <Link href="/obitwriter/obituary">← Back to form</Link>

      <LegacySection />
    </main>
  );
}
