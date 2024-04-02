import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
export default function Fotter() {
  return (
    <div className="h-44 border-#ABABAB border-t-2 relative">
      <div className="text-black text-xl ml-6 pt-3 font-extrabold text-shadow flex flex-row justify-between">
        <span>各種連絡先</span>
        <Button asChild size={"sm"} className="mr-[26px]">
          <Link href="/login">関係者の方</Link>
        </Button>
      </div>

      <div className="mt-5 flex flex-row justify-around items-center w-screen">
        <div className="w-[90px] h-[110px] ml-7 flex justify-center">
          <Link
            href="
            https://line.me/ti/g2/QmzbCcmTmWfob0jnvs3HgZIyvKlSxcMyz8Cv1Q?utm_source=invitation&utm_medium=link_copy&utm_campaign=default"
            className="h-[110px] flex flex-col items-center text-blue-500 hover:text-purple-900 active:text-purple-900 visited:text-purple-900 "
          >
            <h3>[openchat]</h3>

            <Image src="/line.jpg" alt="Line" width={80} height={80} />
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
  );
}
