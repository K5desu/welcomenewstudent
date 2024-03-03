import "@/app/globals.css"; // import "@/app/ui/global.css"
import { Button } from "@/components/ui/button";
import { getDatabase, ref, set, get, update, remove } from "firebase/database";
import { app } from "@/lib/firebase/firebase";

import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import NextAuthProvider from "@/providers/NextAuth";

export const metadata: Metadata = {
  title: "Horizon",
  description: "Horizonへの入部を考えているひとに向けて",
  keywords:
    "Horizon,horizon,ホライズン,龍谷大学,プログラミング,サークル,部活,新入生,瀬田,一回生,龍大,大学,学生",
  metadataBase: new URL("https://Horizon.welcome.newstudent"),
};
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const db = getDatabase(app);
  return (
    <>
      <body className={`${inter.className} antialiased`}>
        <div className="h-28"></div>
        <div className="fixed left-0 right-0 top-0 h-28 bg-white border-b-2 border-#ABABAB flex flex-row justify-between items-center">
          <div className="flex flex-row items-center">
            <Link href="/">
              <Image
                src="/Horizon.jpg"
                alt="tosi"
                width={70}
                height={70}
                className="pl-1"
              />
            </Link>
            <Link
              href="/"
              className="text-black  text-[30px]  font-black font-black  block text-shadow mb-2 pl-2"
            >
              Horizon
            </Link>
          </div>
          <div className="flex flex-col justify-between w-32 h-24 items-center pr-2">
            <Link
              href="/"
              className="text-black text-base font-black  block mt-2"
            >
              ホーム
            </Link>
            <Link
              href="/kisohann"
              className="text-black text-base font-black color-blue-500"
            >
              基礎班について
            </Link>
            <Link
              href="/Q&A"
              className="text-black text-base font-black  block mb-2 "
            >
              Q&A一覧
            </Link>
          </div>
        </div>
        <NextAuthProvider>{children}</NextAuthProvider>

        <div className="h-44 border-#ABABAB border-t-2 relative">
          <div className="text-black text-xl ml-6 pt-3 font-extrabold text-shadow flex flex-row justify-between">
            <span>各種連絡先</span>
            <Button asChild size={"sm"} className="mr-[26px]">
              <Link href="/login">関係者の方</Link>
            </Button>
          </div>

          <div className="mt-5 flex flex-row justify-between items-center w-screen">
            <div className="w-[90px] h-[110px] ml-7 flex justify-center">
              <Link
                href="https://line.me/R/ti/p/@777uabzr?oat_content=url"
                className="h-[110px] flex flex-col items-center text-blue-500 hover:text-purple-900 active:text-purple-900 visited:text-purple-900 "
              >
                <h3>[公式LINE]</h3>

                <Image src="/line.png" alt="Line" width={80} height={80} />
              </Link>
            </div>
            <div className="w-[90px] h-[110px] ">
              {" "}
              <Link
                href="https://twitter.com/ryukokuhorizon"
                className="h-[110px] flex flex-col items-center text-blue-500 hover:text-purple-900 active:text-purple-900 visited:text-purple-900 "
              >
                <h3>[公式X]</h3>

                <Image src="/x.png" alt="Line" width={90} height={90} />
              </Link>
            </div>
            <div className="w-[90px] h-[110px]  mr-7 ">
              {" "}
              <Link
                href="https://www.instagram.com/horizon_ryu/"
                className="h-[110px] flex flex-col items-center text-blue-500 hover:text-purple-900 active:text-purple-900 visited:text-purple-900 "
              >
                <h3>[公式Insta]</h3>

                <Image src="/insta.png" alt="Line" width={90} height={90} />
              </Link>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}
