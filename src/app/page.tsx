import Image from "next/image";
export default function Home() {
  return (
    <div>
      <div className="py-5 text-center">
        <div className="block text-xl font-bold text-gray-800 dark:text-white"></div>
        私たちについて
        <Image src="/chara.png" height={400} width={300} alt="tosi"></Image>
      </div>
      <span className="text-sm text-gray-700 dark:text-gray-200">Horizon</span>
    </div>
  );
}
