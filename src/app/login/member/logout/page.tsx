"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

import Logout from "@/components/auth/Logout";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  const { status } = useSession();

  return (
    <>
      <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg dark:bg-gray-800">
        <div className="px-6 py-4">
          <div className="flex justify-center mx-auto">
            <Image src="/home.png" height={100} width={100} alt="horizon" />
          </div>
          <h3 className="mt-3 text-xl font-medium text-center text-gray-600 dark:text-gray-200">
            Horizonメンバー専用ページ
          </h3>
          <p className="mt-1 text-center text-gray-500 dark:text-gray-400">
            ※Horizonメンバー以外の方はログインできません
          </p>{" "}
          <p className="mt-1 text-center text-gray-500 dark:text-gray-400">
            あなたはメンバーではないので{" "}
            <Link href="/" className="text-red-500">
              ホーム
            </Link>
            に戻ってください
          </p>
          <p className="mt-5 font-bold text-gray-500 dark:text-gray-400 text-center">
            ログインするアカウントを間違えた場合は下記からログアウトしてください
          </p>
          <div className="flex justify-center  mt-4">
            <div>
              {status === "authenticated" ? (
                <Button>
                  <Logout />
                </Button>
              ) : (
                redirect("/login")
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
