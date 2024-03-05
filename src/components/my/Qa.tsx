"use client";
import { useState } from "react";
import clsx from "clsx";

interface CardProps {
  question: string;
  answer: string;
}
export default function Qa({ question, answer }: CardProps) {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <div className="mt-12 space-y-8">
      <button
        className="flex items-center justify-between w-full p-8"
        onClick={() => {
          setShowAnswer(!showAnswer);
          console.log("showAnswer", showAnswer);
        }}
      >
        <h1 className="font-semibold text-gray-700 dark:text-white text-center">
          {question}
        </h1>
        {showAnswer ? (
          <span className="text-gray-400 bg-gray-200 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M18 12H6"
              />
            </svg>
          </span>
        ) : (
          <span className="text-gray-400 bg-gray-200 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M18 12H6"
              />
            </svg>
          </span>
        )}
      </button>

      <hr
        className={clsx(
          "border-gray-200 dark:border-gray-700 transition-transform duration-300 ease-out transform translate-y-[-100%] opacity-0",
          { "translate-y-[0%] opacity-100": showAnswer }
        )}
      />

      <p
        className={clsx(
          "p-8 text-sm text-gray-500 dark:text-gray-300  transition-transform duration-300 ease-out transform translate-y-[-100%] opacity-0",
          { "translate-y-[0%] opacity-100": showAnswer }
        )}
      >
        {answer}
      </p>
    </div>
  );
}
