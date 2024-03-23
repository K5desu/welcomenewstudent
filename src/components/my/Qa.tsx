"use client";
import DatabaseOperations from "@/lib/firebase/realtimedatabase/crud";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface CardProps {
  question: string;
  answer: string;
  bool: boolean;
  id: string;
}
export default function Qa({ question, answer, bool, id }: CardProps) {
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  async function deletes() {
    const dbOps = new DatabaseOperations();
    await dbOps.deleteData("Q&A", id);
    window.location.reload();
  }

  return (
    <div className="border-2 border-gray-100 rounded-lg dark:border-gray-700 flex justify-between">
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
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="destructive">削除</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>本当に削除しますか？</AlertDialogTitle>
            <AlertDialogDescription>
              削除したら元に戻せません
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>

            <Button
              variant="destructive"
              onClick={async () => await deletes()}
              className="w-full"
            >
              削除
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
