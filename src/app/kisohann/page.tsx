import Image from "next/image";
export default function Home() {
  const messege = [
    " プログラミングに興味がある…面白そう…というあなた、私たちと一緒に最初の一歩を踏み出しましょう！",
    " 先輩たちだって右も左もわからない初心者の頃がありました。だからこそ、難しいところもわかりにくいところもよく知っています。",
    " そんな経験を生かして、皆さんがこの道をよりスムーズに進めるように全力でサポートします！",
  ];
  const months = [
    {
      name: "4月",
      events: ["新歓イベント", "発表, 説明会", "体験会:Scratch, HTML, CSS"],
    },

    {
      name: "5月",
      events: ["Python基礎文法学習", "Flet概要"],
    },
    {
      name: "6月",
      events: ["Flet学習", "GUI App作成"],
    },
    {
      name: "7月",
      events: [
        "GUI App作成",
        "チーム開発概要",
        "Git, Githubのセットアップと学習",
      ],
    },
    {
      name: "8月",
      events: ["夏合宿", "チーム開発", "GUI App応用"],
    },
    {
      name: "9月",
      events: ["HTML", "CSS"],
    },
    {
      name: "10月",
      events: [
        "Webページ作成",
        "龍谷祭-瀬田",
        "学術文化祭",
        "JPHack(自由参加)",
      ],
    },
    {
      name: "11月",
      events: [
        "龍谷祭-深草",
        "学術文化祭",
        "第一回チーム開発",
        "第二回チーム開発",
      ],
    },
    {
      name: "12月",
      events: ["第三回チーム開発", "部内ハッカソン"],
    },
    {
      name: "1月",
      events: ["部内ハッカソン-審査", "部内ハッカソン-コンペティション"],
    },

    // 他の月のデータも同様に定義...
  ];

  return (
    <div>
      <div className="py-5 flex flex-col justify-center items-center">
        <div className="block text-3xl font-bold text-gray-800 dark:text-white py-10">
          基礎班について
        </div>

        <Image src="/kisohan.jpg" height={242} width={300} alt="tosi"></Image>
        <div className="mx-5 mt-10 text-lg">
          <span className="text-3lx font-bold text-shadow text-center">
            基礎を固め自力で学習していく力をつける
          </span>
          <br />
          <br />
          {
            // メッセージの表示
            messege.map((m, index) => (
              <div key={index}>
                {m}
                <br />
                <br />
              </div>
            ))
          }
        </div>
        <span className="font-bold text-shadow text-2lx">
          2024年度基礎班の活動予定
        </span>
        <br />
        <div className="text-left">
          {months.map((month, index) => (
            <div key={index} className="text-left">
              <strong className="block  h-2 ">{month.name}</strong>

              <br />

              <ul className="pl-4">
                {month.events.map((event, i) => (
                  <li key={i}>{event}</li>
                ))}
              </ul>

              <br />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
