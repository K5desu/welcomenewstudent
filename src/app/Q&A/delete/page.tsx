"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Check from "@/components/auth/Check";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";

import Link from "next/link";
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
          <Button>
            <Link href="https://console.firebase.google.com/u/0/project/welcome-416001/database/welcome-416001-default-rtdb/data?hl=ja">
              消しますリンク
            </Link>
          </Button>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
