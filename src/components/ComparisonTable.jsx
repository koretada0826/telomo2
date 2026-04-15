const columns = [
  {
    rank: 1,
    name: 'テレモ',
    isUs: true,
    badge: 'RECOMMEND',
  },
  {
    rank: 2,
    name: 'A社',
    isUs: false,
  },
  {
    rank: 3,
    name: 'B社',
    isUs: false,
  },
];

// 値の並びは columns と同じ順（テレモ→A社→B社）
const rows = [
  { item: '月額費用',   values: ['14万円',            '30〜50万円',      '50〜80万円'] },
  { item: 'コール数',   values: ['4,700コール保証',    '非公開',          '月2,000コール〜'] },
  { item: 'ログ開示',   values: ['全コール100%開示',   'サマリーのみ',     '一部のみ'] },
  { item: '初期費用',   values: ['0円',               '10〜20万円',      '20〜30万円'] },
  { item: '契約期間',   values: ['縛りなし',          '3ヶ月縛り',       '6ヶ月縛り'] },
  { item: 'レポート',   values: ['リアルタイム共有',   '月1回PDFのみ',    '月1回+面談'] },
  { item: 'スクリプト', values: ['無料で設計込み',     '別途10万円〜',    '別途20万円〜'] },
];

export default function ComparisonTable() {
  return (
    <section className="py-16 sm:py-24 px-5 sm:px-10 bg-[#f7f7f7]">
      <div className="max-w-[1240px] mx-auto">
        <p className="fade-in text-[13px] sm:text-[14px] text-[#f55f00] tracking-[0.2em] font-bold mb-3 text-center">
          RANKING
        </p>
        <h2 className="fade-in text-[28px] sm:text-[40px] lg:text-[44px] font-black text-black leading-[1.3] tracking-[0.02em] mb-4 text-center">
          営業代行<span className="text-[#f55f00]">コスパ</span>ランキング
        </h2>
        <p className="fade-in text-[18px] sm:text-[22px] text-[#4d4d4d] text-center mb-12 leading-[1.7]">
          費用・コール数・透明性・契約条件の4指標で総合評価しました。
        </p>

        <div className="fade-in overflow-x-auto">
          <table className="w-full border-collapse min-w-[720px]">
            {/* ヘッダー: ランク + 社名 */}
            <thead>
              <tr>
                <th className="bg-[#fafafa] border border-[#e5e5e5] p-4 sm:p-5 text-center w-[16%]">
                  <p className="text-[11px] text-[#bbb] tracking-[0.2em] font-bold">RANK</p>
                </th>
                {columns.map((c, i) => (
                  <th
                    key={i}
                    className={`border p-4 sm:p-5 text-center ${
                      c.isUs
                        ? 'bg-[#f55f00] border-[#f55f00] w-[36%]'
                        : 'bg-white border-[#e5e5e5] w-[24%]'
                    }`}
                  >
                    {c.isUs && (
                      <p className="bg-black text-white text-[10px] font-black tracking-[0.2em] px-4 py-1.5 inline-block mb-2">
                        {c.badge}
                      </p>
                    )}
                    <div className="flex items-center justify-center mb-1">
                      <span
                        className={`text-[22px] sm:text-[28px] font-black leading-none ${
                          c.isUs ? 'text-white' : 'text-[#666]'
                        }`}
                      >
                        {c.rank}<span className="text-[12px] sm:text-[14px] ml-0.5">位</span>
                      </span>
                    </div>
                    <p
                      className={`text-[11px] tracking-[0.15em] font-bold ${
                        c.isUs ? 'text-white/70' : 'text-[#bbb]'
                      }`}
                    >
                      {c.isUs ? 'OUR SERVICE' : 'COMPANY'}
                    </p>
                    <p
                      className={`text-[20px] sm:text-[24px] font-black ${
                        c.isUs ? 'text-white' : 'text-[#666]'
                      }`}
                    >
                      {c.name}
                    </p>
                  </th>
                ))}
              </tr>
            </thead>

            {/* ボディ */}
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
