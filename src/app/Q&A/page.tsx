"use client";
import Qa from "@/components/my/Qa";
import { useSession } from "next-auth/react";
import Coming from "@/components/ui/comingsoon";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  const { data: session } = useSession();
  const question: string | never[] = "What is your favorite color?";

  async function wheterlogin() {
    if (!session) {
      await signIn("google", {}, { prompt: "login" });
      router.push("/Q&A/delete");
    } else if (
      session.user &&
      session.user.email !== "dekinousyonn@gmail.com" &&
      session.user.email !== "ibukishimizuuu@gmail.com" &&
      session.user.email !== "karupisu1123@gmail.com" &&
      session.user.email !== "y230190@mail.ryukoku.ac.jp"
    ) {
      // ログインしていないか、メールアドレスが一致しない場合はリダイレクトする
      await signIn("google", {}, { prompt: "login" });
      router.push("/Q&A/delete");
    } else {
      router.push("/Q&A/delete");
    }
  }
  return (
    <div>
      <div className="py-5 text-center">
        <div className="block text-xl font-bold text-gray-800 dark:text-white"></div>
        {question.length > 0 ? (
          <section className="bg-white dark:bg-gray-900">
            <div className="flex justify-end">
              <Button
                onClick={async () => await wheterlogin()}
                className="pr-5"
              >
                削除ページへ
              </Button>
            </div>
            <div className="container max-w-4xl px-6 py-10 mx-auto">
              <h1 className="text-2xl font-semibold text-center text-gray-800 lg:text-3xl dark:text-white mb-5">
                最新の質問
              </h1>

              <Qa
                question="Horizonに入るべきですか？"
                answer="Horizonはとても良いです。"
              />

              <div className="border-2 border-gray-100 rounded-lg dark:border-gray-700">
                <button className="flex items-center justify-between w-full p-8">
                  <h1 className="font-semibold text-gray-700 dark:text-white">
                    <Coming />
                  </h1>

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
                </button>
              </div>

              <div className="border-2 border-gray-100 rounded-lg dark:border-gray-700">
                <button className="flex items-center justify-between w-full p-8">
                  <h1 className="font-semibold text-gray-700 dark:text-white">
                    <Coming />
                  </h1>

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
                </button>
              </div>

              <div className="border-2 border-gray-100 rounded-lg dark:border-gray-700">
                <button className="flex items-center justify-between w-full p-8">
                  <h1 className="font-semibold text-gray-700 dark:text-white">
                    {" "}
                    <Coming />
                  </h1>

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
                </button>
              </div>

              <div className="border-2 border-gray-100 rounded-lg dark:border-gray-700">
                <button className="flex items-center justify-between w-full p-8">
                  <h1 className="font-semibold text-gray-700 dark:text-white">
                    {" "}
                    <Coming />
                  </h1>

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
                </button>
              </div>
            </div>
          </section>
        ) : (
          <Coming />
        )}
      </div>
    </div>
  );
}
