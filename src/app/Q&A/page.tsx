"use client";
import Qa from "@/components/my/Qa";
import { useSession } from "next-auth/react";
import Coming from "@/components/ui/comingsoon";
import { Button } from "@/components/ui/button";
import { useRef, useState, useEffect } from "react";
import Check from "@/components/auth/Check";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import DatabaseOperations from "@/lib/firebase/realtimedatabase/crud";

export default function Home() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showSearch, setShowSearch] = useState(true);
  const { data: session } = useSession();
  type FetchDataType = {
    question: string;
    answer: string;
  };

  const Alldata = useRef<FetchDataType[]>();
  // ここでデータを格納するための変数を宣言します
  const [fetchData, setFetchData] = useState<FetchDataType[]>();

  const [search, setSearch] = useState("");
  const question: string | never[] = "What is your favorite color?";

  function Push() {
    if (Alldata.current) {
      let newFetchData = [...Alldata.current];
      newFetchData = newFetchData.filter((data: FetchDataType) =>
        data.question.toLowerCase().includes(search.toLowerCase())
      );

      setFetchData(newFetchData);
      if (inputRef && inputRef.current) {
        inputRef.current.blur();
      }
      setSearch("");
      setShowSearch(false);
    }
  }
  useEffect(() => {
    if (!session) {
      setShowAnswer(false);
    } else if (session.user && Check(session.user.email)) {
      setShowAnswer(false);
      // ログインしていないか、メールアドレスが一致しない場合はリダイレクトする
    } else {
      setShowAnswer(true);
    }

    async function fetchData() {
      const dbOps = new DatabaseOperations();

      const data: FetchDataType[] = (await dbOps.readData(
        "Q&A"
      )) as FetchDataType[];
      setFetchData(data);
      Alldata.current = data;
      console.log(data);
    }

    fetchData();
  }, [session]);

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
              {fetchData && fetchData.length !== 0 ? (
                fetchData.map((fetchdata, index) => (
                  <Qa
                    key={index}
                    question={fetchdata.question}
                    answer={fetchdata.answer}
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
      <div className="flex justify-end"></div>
    </div>
  );
}
