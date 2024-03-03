"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Logout from "@/components/auth/Logout";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import DatabaseOperations from "@/lib/firebase/realtimedatabase/crud";

export default function Home() {
  const [loading, setLoading] = useState(false);
  function createData(path: string, data: object) {
    const databaseOperations = new DatabaseOperations();
    databaseOperations
      .createData(path, data)
      .then(() => console.log("Data created successfully"))
      .catch((error) => console.error("Failed to create data:", error));
  }
  const { data: session, status } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (!session) {
      router.push("/login");
    } else if (
      session.user &&
      session.user.email !== "dekinousyonn@gmail.com"
    ) {
      // ログインしていないか、メールアドレスが一致しない場合はリダイレクトする
      router.push("/login/member/logout");
    }
    setLoading(true);
  }, [router, session, loading]);

  if (loading)
    return (
      <div>
        <h1>Welcome to the members page!</h1>
        <form>
          <input
            type="text"
            name="question"
            placeholder="Enter your question"
          />
          <input type="text" name="answer" placeholder="Enter your answer" />
          <button>Submit</button>
        </form>
        <Button>
          <Logout />
        </Button>
        {/* ここにメンバーページのコンテンツを追加 */}
      </div>
    );
  return <div>Loading...</div>;
}
