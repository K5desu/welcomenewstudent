"use client";
import Qa from "@/components/my/Qa";
import { useSession } from "next-auth/react";
import Coming from "@/components/ui/comingsoon";
import { Button } from "@/components/ui/button";
import { use, useState, useEffect } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import DatabaseOperations from "@/lib/firebase/realtimedatabase/crud";
export default function Home() {
  type FetchDataType = {
    [key: string]: {
      question: string;
      answer: string;
    };
  };
  const router = useRouter();
  // ここでデータを格納するための変数を宣言します
  const [fetchData, setFetchData] = useState<FetchDataType>();
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
  useEffect(() => {
    async function fetchData() {
      const dbOps = new DatabaseOperations();
      const data = await dbOps.readData("Q&A");
      setFetchData(data);
      console.log(data); // { name: 'John', age: 30 }
    }
    fetchData();
  }, []);

  return (
    <div>
      <div className="py-5 text-center">
        <div className="block text-xl font-bold text-gray-800 dark:text-white"></div>
        {question.length > 0 ? (
          <section className="bg-white dark:bg-gray-900">
            <div className="flex justify-end pr-5">
              <Button
                variant="destructive"
                onClick={async () => await wheterlogin()}
              >
                削除ページへ
              </Button>
            </div>
            <div className="container max-w-4xl px-6 py-10 mx-auto">
              <h1 className="text-2xl font-semibold text-center text-gray-800 lg:text-3xl dark:text-white mb-5">
                最新の質問
              </h1>
              {fetchData ? (
                Object.keys(fetchData).map((key: string) => (
                  <Qa
                    key={key}
                    question={fetchData[key].question}
                    answer={fetchData[key].answer}
                  />
                ))
              ) : (
                <Coming />
              )}

              {/* ... その他のコード ... */}
            </div>
          </section>
        ) : (
          <Coming />
        )}
      </div>
    </div>
  );
}
