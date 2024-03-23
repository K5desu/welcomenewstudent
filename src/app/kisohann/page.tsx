import Image from "next/image";
export default function Home() {
  return (
    <div>
      <div className="py-5 flex flex-col justify-center items-center">
        <div className="block text-3xl font-bold text-gray-800 dark:text-white py-10">
          基礎班について
        </div>

        <Image src="/kisohan.jpg" height={242} width={300} alt="tosi"></Image>
        <div className="mx-5 mt-10 text-lg">
          <span className="text-3lx font-bold text-shadow">
            基礎を固め自力で学習していく力をつける
          </span>
          <br />
          <br />
          プログラミングに興味がある…面白そう…というあなた、私たちと一緒に最初の一歩を踏み出しましょう！
          <br />
          <br />
          先輩たちだって右も左もわからない初心者の頃がありました。だからこそ、難しいところもわかりにくいところもよく知っています。
          <br />
          <br />
          そんな経験を生かして、皆さんがこの道をよりスムーズに進めるように全力でサポートします！
          <br />
          <br />
          <span className="font-bold text-shadow text-2lx">
            2024年度基礎班の活動
          </span>
          <br />
          <br />
          ◎4月
          <br />
          &nbsp;体験会及び交流会
          <br />
          <br />
          ◎5月
          <br />
          &nbsp;pythonの基礎文法の学習
          <br />
          <br />
          ◎6月
          <br />
          &nbsp;pythonのフレームワークであるFletを学習
          <br />
          <br />
          ◎7月
          <br />
          &nbsp;Fletでの電卓作成
          <br />
          <br />
          ◎8月
          <br />
          &nbsp;夏合宿
          <br />
          <br />
          ◎9月
          <br />
          &nbsp;Html,cssの学習
          <br />
          <br />
          ◎10月
          <br />
          &nbsp;webページの作成
          <br />
          龍祭
          <br />
          <br />
          ◎11月
          <br />
          &nbsp;龍祭
          <br />
          チーム開発
          <br />
          <br />
          ◎12月
          <br />
          &nbsp;外部ハッカソンに出場
          <br />
          <br />
          ※一部変更されるバイがあります
        </div>
      </div>
    </div>
  );
}
