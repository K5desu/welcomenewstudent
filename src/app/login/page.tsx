"use client";
import { useSession } from "next-auth/react";
import { signIn } from "next-auth/react";
import Logout from "@/components/auth/Logout";
import Image from "next/image";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function Home() {
  const router = useRouter();
  const { status } = useSession();
  useEffect(() => {
    if (status === "authenticated") {
      router.push("/login/member");
    }
  }, [status, router]);
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
            ※外部の方はログインできません
          </p>{" "}
          <p className="mt-1 text-center text-gray-500 dark:text-gray-400">
            メンバー以外の方は{" "}
            <Link href="/" className="text-red-500">
              ホーム
            </Link>
            に戻ってください
          </p>
          <p className="mt-5 font-bold text-gray-500 dark:text-gray-400 text-center">
            メンバーの方はこちらからメンバーアカウントloginしてください
          </p>
          <div className="flex justify-center  mt-4">
            <div>
              {status === "authenticated" ? (
                <Button>
                  <Logout />
                </Button>
              ) : (
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="outline">Login</Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        あなたはHorizonメンバーですか？
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        このページはHorizonメンバーのみ入ることができます
                        Horizonメンバーの方はログインを押してください
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction
                        onClick={() =>
                          signIn("google", {}, { prompt: "login" })
                        }
                      >
                        ログイン
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
