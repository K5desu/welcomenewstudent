"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Logout from "@/components/auth/Logout";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import DatabaseOperations from "@/lib/firebase/realtimedatabase/crud";
import { Component } from "@/components/component/component";
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
      session.user.email !== "ibukishimizuuu@gmail.com" &&
      session.user.email !== "karupisu1123@gmail.com"
    ) {
      // ログインしていないか、メールアドレスが一致しない場合はリダイレクトする
      router.push("/login/member/logout");
    } else {
      setLoading(true);
    }
  }, [router, session]);

  return (
    <div>
      {loading ? (
        <div className="flex flex-col justify-center items-center">
          <Component />
          <Button>
            <Logout />
          </Button>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
