"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Logout from "@/components/auth/Logout";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import Check from "@/components/auth/Check";
import { Component } from "@/components/component/component";
export default function Home() {
  const [loading, setLoading] = useState(false);

  const { data: session, status } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (!session) {
      router.push("/login");
    } else if (Check()) {
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
