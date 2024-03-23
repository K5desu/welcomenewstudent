"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
interface CardProps {
  question: string;
  answer: string;
  bool: boolean;
}
export default function Qa({ question, answer, bool }: CardProps) {
  const [showAnswer, setShowAnswer] = useState<boolean>(false);

  return (
    <div className="border-2 border-gray-100 rounded-lg dark:border-gray-700">
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
        {!showAnswer ? (
          <span className="text-white bg-blue-500 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
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
      {showAnswer && (
        <div>
          <hr className="border-gray-200 dark:border-gray-700 animate-pulldown" />

          <p className="p-8 text-sm text-gray-500 dark:text-gray-1000  animate-pulldown">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}
