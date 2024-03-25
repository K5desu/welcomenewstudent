import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div>
      <div className="h-28"></div>
      <div className="fixed left-0 right-0 top-0 h-28 bg-white border-b-2 border-#ABABAB flex flex-row justify-between items-center z-50">
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
        <div className="flex flex-row justify-between w-50 h-24 items-center pr-2">
          <Link
            href="/kisohann"
            className="text-black text-base text-center font-black color-blue-500 pr-4"
          >
            基礎班に
            <br />
            ついて
          </Link>
          <Link
            href="/Q&A"
            className="text-black text-base font-black  block mb-2 "
          >
            Q&A一覧
          </Link>
        </div>
      </div>
    </div>
  );
}
