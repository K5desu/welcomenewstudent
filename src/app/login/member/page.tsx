"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Logout from "@/components/auth/Logout";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import Check from "@/lib/Check";
import { Component } from "@/components/component/component";
export default function Home() {
  const [loading, setLoading] = useState(false);

  const { data: session } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (!session) {
      router.push("/login");
    } else if (session.user && Check(session.user.email)) {
      console.log(session);
      console.log(session.user);
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
