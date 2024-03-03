"use client";

import { useRouter } from "next/navigation";
import Logout from "@/components/auth/Logout";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();
  if (status === "loading") {
    return <div>Loading...</div>;
  }
  if (!session) {
    router.push("/login");
  } else if (session.user && session.user.email !== "dekinousyonn@gmail.com") {
    // ログインしていないか、メールアドレスが一致しない場合はリダイレクトする
    router.push("/login/member/logout");
  }

  // ログインしていてメールアドレスが一致する場合はページのコンテンツを表示する
  return (
    <div>
      <h1>Welcome to the members page!</h1>
      <Button>
        <Logout />
      </Button>
      {/* ここにメンバーページのコンテンツを追加 */}
    </div>
  );
}
