"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Logout from "@/components/auth/Logout";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import DatabaseOperations from "@/lib/firebase/realtimedatabase/crud";
import Image from "next/image";
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
      session.user.email !== "dekinousyonn@gmail.com" &&
      session.user.email !== "ibukishimizuuu@gmail.com"
    ) {
      // ログインしていないか、メールアドレスが一致しない場合はリダイレクトする
      router.push("/login/member/logout");
    }
    setLoading(true);
  }, [router, session, loading]);

  if (session?.user) {
    if (!loading) return <div>Loading...</div>;
    else if (
      loading &&
      session.user &&
      session.user.email !== "dekinousyonn@gmail.com" &&
      session.user.email !== "ibukishimizuuu@gmail.com"
    ) {
      return (
        <div className="flex flex-col justify-center items-center">
          <h1>安田のホームページ</h1>
          <Image src="/densetu.jpg" width={200} height={240} alt="伝説の一枚" />
          <Button>
            <Logout />
          </Button>
          {/* ここにメンバーページのコンテンツを追加 */}
        </div>
      );
    }
  }
  return <>loading</>;
}
