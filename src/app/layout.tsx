import "@/app/globals.css"; // import "@/app/ui/global.css"
import { Inter } from "next/font/google";

import Link from "next/link";
import { Metadata } from "next";
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
  return (
    <>
      <body className={`${inter.className} antialiased`}>
        <div className="fixed left-0 right-0 top-0 h-28 bg-white border-b-2 border-#ABABAB flex flex-row justify-between items-center">
          <div className="text-shadow mb-2 ml-[26px] text-black text-[33.54px]  font-black">
            Horizon
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
              href="/event"
              className="text-black text-base font-black  block mb-2 "
            >
              楽しいイベント
            </Link>
          </div>
        </div>
        {children}
        <div className="h-[164px] border-#ABABAB border-t-2 relative">
          <div className="text-black text-xl ml-6 pt-3 font-extrabold text-shadow">
            各種連絡先
          </div>

          <div className="absolute top-1/2 flex flex-row justify-between items-center w-screen">
            <div className="w-[70px] h-[70px]  ml-7 bg-gray-300"></div>
            <div className="w-[70px] h-[70px]   bg-gray-300"></div>
            <div className="w-[70px] h-[70px]  mr-7 bg-gray-300"></div>
          </div>
        </div>
      </body>
    </>
  );
}
