"use client";

import Button from "@/components/atoms/Button";
import {
  EnvelopeIcon,
  PhoneIcon,
  UserCircleIcon,
  UserPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

export default function LegacySection() {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showCreate, setShowCreate] = useState(false);

  return (
    <div className="mt-6 bg-[#ebf2f1]pb-10 w-full">
      <div className="flex flex-col md:flex-row items-center justify-center w-full px-6 md:px-20 gap-4 py-6 bg-[#ded6bb]">
        <div className="bg-white h-64 w-full max-w-125 rounded-3xl p-6 shadow-md flex flex-col justify-between">
          <div>
            <UserCircleIcon className="w-14 h-14 text-[#bda56e] mb-2" />
            <h2 className="text-xl font-semibold">
              Sign in to continue writing where you left off
            </h2>
          </div>
          <Button
            onClick={() => setShowSignIn(true)}
            className="bg-[#a08449] max-w-fit text-white px-4 py-2 rounded"
          >
            Sign In
          </Button>
        </div>
        {/* create acct */}
        <div className="bg-white h-64 w-full max-w-125 rounded-3xl p-6 shadow-md flex flex-col justify-between">
          <div>
            <UserPlusIcon className="w-14 h-14 text-[#bda56e] mb-2" />
            <h2 className="text-xl font-semibold">
              Create an account to stay connected to your loved one's story
            </h2>
          </div>
          <Button
            onClick={() => setShowCreate(true)}
            className="bg-[#a08449] max-w-fit text-white px-4 py-2 rounded"
          >
            Create Account
          </Button>
        </div>
      </div>

      {/* help center */}
      <div className="mx-auto max-w-265 p-6">
        <h3 className="text-2xl font-bold mb-2">Legacy Help Center</h3>
        <p className="text-gray-700 mb-4">
          Need additional help? The Legacy Support Team is available Monday
          through Friday, 7am—7pm CT
        </p>

        <div className="flex flex-wrap py-8 gap-6 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#cbddcc] flex items-center justify-center">
              <PhoneIcon className="w-5 h-5 text-[#165C58]" />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-800 uppercase tracking-wide">
                CALL US
              </p>
              <p className="font-bold">888-780-2304</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#cbddcc] flex items-center justify-center">
              <EnvelopeIcon className="w-5 h-5 text-[#165C58]" />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-800 uppercase tracking-wide">
                EMAIL US
              </p>
              <p className="font-bold">obitquestions@legacy.com</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {[
            "How can ObitWriter help me write an Obituary?",
            "How can I upload a photo?",
            "Where can I publish an Obituary?",
          ].map((item, idx) => (
            <div
              key={idx}
              className="border rounded-lg p-4 cursor-pointer hover:bg-gray-50"
            >
              <div className="font-medium text-gray-900">{item}</div>
            </div>
          ))}
        </div>
      </div>

      {/* side panels, todo: turn into component */}
      {showSignIn && (
        <div className="fixed inset-0 bg-black/30 z-50 flex justify-end">
          <div className="bg-white w-80 h-full relative p-6 shadow-lg animate-slide-in">
            <Button
              onClick={() => setShowSignIn(false)}
              icon={XMarkIcon}
              variant="clear"
              className="absolute top-0 text-sm right-0 mb-4"
            />
            <h2 className="text-xl font-bold mb-2">Sign In</h2>
            <input
              placeholder="Email"
              className="w-full mb-3 p-2 border rounded"
            />
            <input
              placeholder="Password"
              type="password"
              className="w-full mb-3 p-2 border rounded"
            />
            <Button className="w-full bg-[#a08449] text-white py-2">
              Submit
            </Button>
          </div>
        </div>
      )}

      {showCreate && (
        <div className="fixed inset-0 bg-black/30 z-50 flex justify-end">
          <div className="bg-white w-80 h-full relative p-6 shadow-lg animate-slide-in">
            <Button
              onClick={() => setShowCreate(false)}
              icon={XMarkIcon}
              variant="clear"
              className="absolute top-0 right-0 text-sm mb-4"
            />
            <h2 className="text-xl font-bold mb-2">Create Account</h2>
            <input
              placeholder="Full Name"
              className="w-full mb-3 p-2 border rounded"
            />
            <input
              placeholder="Email"
              className="w-full mb-3 p-2 border rounded"
            />
            <input
              placeholder="Password"
              type="password"
              className="w-full mb-3 p-2 border rounded"
            />
            <Button className="w-full bg-[#a08449] text-white py-2 ">
              Register
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
