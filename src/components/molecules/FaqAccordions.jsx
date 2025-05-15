import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const faqs = [
  {
    question: "How can ObitWriter help me write an Obituary?",
    answer: `Whether you've already written an Obituary that needs refining or you're beginning with a handful of thoughts and memories, our ObitWriter ensures your loved one is honored with care.

Our tool takes what you have and helps to craft a finished Obituary in the tone and length that feel right to you, sharing the key details that will keep your loved one's memory alive for years to come.`,
  },
  {
    question: "How can I upload a photo?",
    answer:
      "You will have the option to upload a photo for the obituary once you have selected a publication to publish with. This will occur after the writing phase of the process.",
  },
  {
    question: "Where can I publish an Obituary?",
    answer: `We offer a variety of publishing options so you can choose the right fit. Choose from over 2,600 newspapers — from local papers to international ones — or opt for our online-only option on Legacy.com.

All print Obituaries also include placement on Legacy.com.`,
  },
  {
    question: "How much will it cost to publish an Obituary?",
    answer:
      "For a print Obituary, each publication has its own pricing model, and costs can vary based on the amount of text or photos included. You can publish a permanent, online-only Obituary on Legacy.com for an affordable price.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, idx) => (
        <div
          key={idx}
          className="border border-gray-300 p-3 flex justify-center flex-col rounded-2xl min-h-20 bg-white"
        >
          <button
            onClick={() => toggle(idx)}
            className="w-full text-left p-4 flex justify-between items-center hover:bg-gray-50"
          >
            <span className="font-semibold text-gray-900">{faq.question}</span>
            {openIndex === idx ? (
              <MinusIcon className="w-5 h-5 text-gray-600" />
            ) : (
              <PlusIcon className="w-5 h-5 text-gray-600" />
            )}
          </button>
          {openIndex === idx && (
            <div className="px-4 pb-4 text-gray-700 whitespace-pre-line">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
