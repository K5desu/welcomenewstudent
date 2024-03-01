export default function Home() {
  return (
    <div>
      <div className="py-5 flex flex-col justify-center items-center">
        <div className="block text-3xl font-bold text-gray-800 dark:text-white py-10"></div>
        基礎班について
      </div>

      <Image src="/kisohan.jpg" height={242} width={300} alt="tosi"></Image>
      <div className="mx-5 mt-10 text-lg">
        <span className="font-bold text-shadow text-2lx">
          基礎を固め自力で学習していく力をつける
        </span>
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
          2023年度基礎班の活動
        </span>
        <br />
        <br />
        ◎5月<br />
        　・自己紹介サイトの作成
        <br />
        <br />
        ◎6月<br />
        　・アニメーションやギミック導入の勉強
        <br />
        <br />
        ◎7月<br />
        　・チーム開発準備
        <br />
        <br />
        ※2024年度の活動内容とは一部変更となる部分があります。
      </div>
      <span className="text-sm text-gray-700 dark:text-gray-200">Horizon</span>
    </div>
  );
}
