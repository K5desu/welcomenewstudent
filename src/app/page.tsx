import Image from "next/image";
export default function Home() {
  return (
    <div>
      <div className="py-5 flex  flex-col justify-center items-center">
        <div className="block text-3xl font-bold text-gray-800 dark:text-white py-10">
          私たちについて
        </div>

        <Image src="/home.png" height={242} width={300} alt="tosi"></Image>
        <div className="mx-5 mt-10 text-lg">
          こんにちは！新入生の皆さん！ まずはご入学おめでとうございます🌸🌸
          <br />
          <br />
          龍谷大学プログラミング部{" "}
          <span className="font-bold text-2xl">Horizon</span>
          です。
          <br />
          <br />
          Horizonに入れば優れた学習環境と豊富な教材で効率的なスキルアップが可能です!
          <span className="text-red-500 text-3xl font-bold">📈</span>
          <br />
          <br />
          またほとんどの人が初心者からのスタートなので、プログラミングって難しそうという不安もいりません！
          <br />
          <br />
          そして楽しいイベントも豊富なので後悔のない大学生活になること間違えなし！！
          <br />
          <br />
          <span className="font-bold text-shadow">
            ぜひ体験会にきてください!👨💛👩
          </span>
        </div>
      </div>
    </div>
  );
}
