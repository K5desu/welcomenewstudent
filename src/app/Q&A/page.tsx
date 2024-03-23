"use client";
import Qa from "@/components/my/Qa";
import { useSession } from "next-auth/react";
import Coming from "@/components/ui/comingsoon";
import { Button } from "@/components/ui/button";
import { useRef, useState, useEffect } from "react";
import { signIn } from "next-auth/react";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import DatabaseOperations from "@/lib/firebase/realtimedatabase/crud";
import Check from "@/components/auth/Check";
import { set } from "firebase/database";

export default function Home() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showSearch, setShowSearch] = useState(true);

  type FetchDataType = {
    [key: string]: {
      question: string;
      answer: string;
    };
  };
  const router = useRouter();
  const Alldata = useRef<FetchDataType>();
  // ここでデータを格納するための変数を宣言します
  const [fetchData, setFetchData] = useState<FetchDataType>();
  const { data: session } = useSession();
  const [search, setSearch] = useState("");
  const question: string | never[] = "What is your favorite color?";

  async function wheterlogin() {
    if (!session) {
      await signIn("google", {}, { prompt: "login" });
      router.push("/Q&A/delete");
    } else if (session.user && Check(session.user.email)) {
      // ログインしていないか、メールアドレスが一致しない場合はリダイレクトする
      await signIn("google", {}, { prompt: "login" });
      router.push("/Q&A/delete");
    } else {
      router.push("/Q&A/delete");
    }
  }
  function Push() {
    {
      const newFetchData = { ...Alldata.current };
      if (newFetchData) {
        Object.keys(newFetchData).map((key: string) => {
          if (!newFetchData[key].question.includes(search)) {
            delete newFetchData[key];
          }
        });
        setFetchData(newFetchData);
        if (inputRef && inputRef.current) {
          inputRef.current.blur();
        }
        setSearch("");
        setShowSearch(false);
      }
    }
  }
  useEffect(() => {
    async function fetchData() {
      const dbOps = new DatabaseOperations();
      const data = await dbOps.readData("Q&A");
      setFetchData(data);
      Alldata.current = data; // { name: 'John', age: 30 }
    }
    fetchData();
  }, []);

  return (
    <div>
      <div className="py-5 text-center">
        <div className="block text-xl font-bold text-gray-800 dark:text-white"></div>
        {question.length > 0 ? (
          <section className="bg-white dark:bg-gray-900">
            <div className="flex justify-between pr-5">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  Push();
                }}
              >
                <Input
                  placeholder="気になるquestion入力"
                  className="ml-5"
                  value={search}
                  ref={inputRef}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setShowSearch(true);
                  }}
                />
              </form>
              {showSearch ? (
                <Button onClick={() => Push()}>検索</Button>
              ) : (
                <Button onClick={() => setFetchData(Alldata.current)}>
                  元に戻す
                </Button>
              )}
            </div>
            <div className="container max-w-4xl px-6 py-10 mx-auto">
              <h1 className="text-2xl font-semibold text-center text-gray-800 lg:text-3xl dark:text-white mb-5">
                最新の質問
              </h1>
              {fetchData && Object.keys(fetchData).length !== 0 ? (
                Object.keys(fetchData).map((key: string) => (
                  <Qa
                    key={key}
                    question={fetchData[key].question}
                    answer={fetchData[key].answer}
                    bool={showAnswer}
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
      <div className="flex justify-end">
        <Button
          variant="destructive"
          onClick={async () => await wheterlogin()}
          className="w-1/5 mr-5 mb-5"
        >
          Q&A削除
        </Button>
      </div>
    </div>
  );
}
