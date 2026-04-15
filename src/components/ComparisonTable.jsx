const columns = [
  {
    rank: null,
    name: '人間の営業担当',
    subLabel: '雇用 / 他社の営業代行',
    isUs: false,
  },
  {
    rank: null,
    name: 'テレモ',
    subLabel: '営業プロ × AI',
    isUs: true,
  },
];

// 値の並びは columns と同じ順（人 → テレモ）
const rows = [
  { item: '稼働時間',     values: ['平日8時間',            '24時間365日稼働'] },
  { item: '月間コール数', values: ['500〜1,000件',         '4,700コール保証'] },
  { item: '品質のムラ',   values: ['体調・気分で変動',      '常に一定・再現性あり'] },
  { item: '通話ログ',     values: ['担当メモのみ',          '全通話を100%記録・文字起こし'] },
  { item: '会話分析',     values: ['担当の感覚',            'AIが接続率・刺さるトークを数値化'] },
  { item: 'トーク改善',   values: ['個人の経験則',          '全データから学習・最適化'] },
  { item: '戦力化までの期間', values: ['採用+教育で3〜6ヶ月',  '翌月から即稼働'] },
  { item: 'コスト',       values: ['月50〜80万円／人',     '月14万円'] },
];

export default function ComparisonTable() {
  return (
    <section className="py-16 sm:py-24 px-5 sm:px-10 bg-[#f7f7f7]">
      <div className="max-w-[1240px] mx-auto">
        <p className="fade-in text-[13px] sm:text-[14px] text-[#f55f00] tracking-[0.2em] font-bold mb-3 text-center">
          HUMAN vs TELEMO
        </p>
        <h2 className="fade-in text-[28px] sm:text-[40px] lg:text-[44px] font-black text-black leading-[1.3] tracking-[0.02em] mb-4 text-center">
          人の営業と、<span className="text-[#f55f00]">AI営業</span>はここが違う
        </h2>
        <p className="fade-in text-[18px] sm:text-[22px] text-[#4d4d4d] text-center mb-12 leading-[1.7]">
          稼働量・品質・データ活用、どの切り口でもAIが勝る理由を一覧化しました。
        </p>

        {/* Desktop: テーブル表示 (md以上) */}
        <div className="fade-in hidden md:block">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="bg-[#fafafa] border border-[#e5e5e5] p-4 sm:p-5 text-center w-[20%]">
                  <p className="text-[11px] text-[#bbb] tracking-[0.2em] font-bold">ITEM</p>
                </th>
                {columns.map((c, i) => (
                  <th
                    key={i}
                    className={`border p-4 sm:p-5 text-center ${
                      c.isUs
                        ? 'bg-[#f55f00] border-[#f55f00] w-[44%]'
                        : 'bg-white border-[#e5e5e5] w-[36%]'
                    }`}
                  >
                    <p
                      className={`text-[10px] sm:text-[11px] tracking-[0.2em] font-bold mb-1 ${
                        c.isUs ? 'text-white/70' : 'text-[#bbb]'
                      }`}
                    >
                      {c.subLabel}
                    </p>
                    <p
                      className={`text-[20px] sm:text-[26px] font-black ${
                        c.isUs ? 'text-white' : 'text-[#666]'
                      }`}
                    >
                      {c.name}
                    </p>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {rows.map((r, i) => (
                <tr key={i}>
                  <td className="bg-[#fafafa] border border-[#e5e5e5] p-5 sm:p-6 text-center">
                    <span className="text-[18px] sm:text-[22px] font-black text-black">{r.item}</span>
                  </td>
                  {r.values.map((v, j) => {
                    const col = columns[j];
                    return (
                      <td
                        key={j}
                        className={`border p-5 sm:p-6 text-center ${
                          col.isUs
                            ? 'bg-[#fff8f2] border-[#ffd9bd]'
                            : 'bg-white border-[#e5e5e5]'
                        }`}
                      >
                        <span
                          className={`${
                            col.isUs
                              ? 'text-[20px] sm:text-[24px] text-[#f55f00] font-black'
                              : 'text-[17px] sm:text-[20px] text-[#888]'
                          }`}
                        >
                          {v}
                        </span>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile: 会社ごとのカード表示 (md未満) */}
        <div className="fade-in md:hidden space-y-5">
          {columns.map((c, ci) => (
            <div
              key={ci}
              className={`bg-white border overflow-hidden ${
                c.isUs ? 'border-[#f55f00] shadow-[0_12px_30px_rgba(245,95,0,0.15)]' : 'border-[#e5e5e5]'
              }`}
            >
              {/* カードヘッダー */}
              <div className={`px-5 py-5 ${c.isUs ? 'bg-[#f55f00]' : 'bg-[#fafafa]'}`}>
                <p
                  className={`text-[10px] tracking-[0.2em] font-bold mb-1 ${
                    c.isUs ? 'text-white/70' : 'text-[#bbb]'
                  }`}
                >
                  {c.subLabel}
                </p>
                <p
                  className={`text-[22px] font-black leading-none ${
                    c.isUs ? 'text-white' : 'text-[#333]'
                  }`}
                >
                  {c.name}
                </p>
              </div>

              {/* スペック */}
              <dl className="divide-y divide-[#eee]">
                {rows.map((r, ri) => (
                  <div
                    key={ri}
                    className={`flex items-center justify-between gap-3 px-5 py-3.5 ${
                      c.isUs ? 'bg-[#fff8f2]' : 'bg-white'
                    }`}
                  >
                    <dt className="text-[13px] font-bold text-[#888] tracking-[0.02em] shrink-0">
                      {r.item}
                    </dt>
                    <dd
                      className={`text-right text-[15px] font-black leading-tight ${
                        c.isUs ? 'text-[#f55f00]' : 'text-[#555]'
                      }`}
                    >
                      {r.values[ci]}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>

        <p className="text-[14px] sm:text-[16px] text-[#999] mt-4 text-center">
          ※ 他社の数値は公開情報および業界平均から算出
        </p>

        <div className="fade-in text-center mt-10">
          <a href="#contact-form" className="btn-accent text-center text-[14px]">
            まずは10〜15分だけ話しましょう
          </a>
        </div>
      </div>
    </section>
  );
}
