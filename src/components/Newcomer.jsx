const steps = [
  {
    num: '01',
    tag: 'コスト',
    heading: '人件費の実態を\n知っていますか',
    body: '給与だけじゃない。社会保険（約15%）・交通費（約1万円/月）・残業/有給（約10%増）・教育コスト・管理コスト。そして最大のリスクは離職。採用→教育→戦力化→離職→再採用のループ。',
    highlight: { label: '隠れコスト合計', value: '月50万〜', note: '給与+社保+交通費+教育+管理+離職リスク' },
  },
  {
    num: '02',
    tag: '��レモ',
    heading: '離職なし\n感情ブレなし',
    body: '離職なし・教育不要・感情ブレなし・パフォーマンス一定。止まらず、忠実に、∞に稼働し続けます。月間22,000コール、人で換算すると約5人分。',
    highlight: { label: 'テレモの稼働量', value: '22,000コール/月', note: '※人の場合：200コール/日 × 22日 = 約4,400コール' },
  },
  {
    num: '03',
    tag: '集中',
    heading: '本業に\n集中できる',
    body: '新��開拓をプロに任せれば、自社は商品開発や顧客フォローな���コア業務に専念できます。',
    highlight: { label: '営業工数', value: '実質 0', note: '自社の強みに時間を使える' },
  },
];


export default function Newcomer() {
  return (
    <section id="newcomer" className="py-16 sm:py-24 px-5 sm:px-10 bg-[#f7f7f7]">
      <div className="max-w-[1240px] mx-auto">
        <p className="fade-in text-[12px] text-[#41ac86] tracking-[0.15em] font-bold mb-3">
          営業代行を使ったことがない方へ
        </p>
        <h2 className="fade-in text-[28px] sm:text-[40px] lg:text-[44px] font-black text-black leading-[1.3] tracking-[0.02em] mb-10">
          営業の課題、<span className="text-[#41ac86]">こう解決</span>します
        </h2>

        {/* Steps - impact cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 mb-14">
          {steps.map((s, i) => (
            <div
              key={i}
              className="fade-in relative bg-white rounded-[16px] border border-[#e8e8e8] p-6 sm:p-7 overflow-hidden flex flex-col"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* 右上タグ */}
              <span className="absolute top-5 right-5 z-10 text-[10px] font-black text-white bg-black tracking-[0.25em] px-2.5 py-[4px]">
                {s.tag}
              </span>

              {/* ゴリゴリSTEP表示 */}
              <div className="relative mb-5 leading-none" style={{ fontFamily: '"M PLUS 1p", sans-serif' }}>
                {/* STEP (アウトライン) */}
                <span
                  className="block text-[32px] sm:text-[38px] font-black tracking-[0.02em] text-transparent"
                  style={{ WebkitTextStroke: '1.5px #111' }}
                >
                  STEP
                </span>
                {/* 巨大番号 */}
                <div className="flex items-end gap-2 -mt-1">
                  <span className="text-[96px] sm:text-[120px] font-black leading-[0.85] text-[#41ac86]">
                    {s.num}
                  </span>
                  {/* 斜めアクセントバー */}
                  <span className="block w-[10px] h-[60px] sm:h-[72px] bg-black -skew-x-[20deg] mb-3" />
                  <span className="block w-[4px] h-[60px] sm:h-[72px] bg-[#41ac86] -skew-x-[20deg] mb-3" />
                </div>
                {/* アンダーライン */}
                <div className="flex items-center gap-2 mt-2">
                  <span className="h-[3px] flex-1 bg-black" />
                  <span className="h-[3px] w-[20%] bg-[#41ac86]" />
                </div>
              </div>

              {/* 見出し - 大きめ */}
              <h3 className="relative text-[22px] sm:text-[26px] lg:text-[28px] font-black text-black leading-[1.3] mb-4 whitespace-normal sm:whitespace-pre-line">
                {s.heading}
              </h3>

              {/* 本文 */}
              <p className="relative text-[14px] sm:text-[15px] text-[#4d4d4d] leading-[1.9] mb-5 flex-1">
                {s.body}
              </p>

              {/* ハイライト値 */}
              <div className="relative border-t border-[#eee] pt-4">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-[11px] text-[#999] font-bold tracking-[0.1em]">{s.highlight.label}</span>
                </div>
                <p
                  className="text-[26px] sm:text-[30px] font-black text-[#41ac86] leading-none mb-1"
                  style={{ fontFamily: '"M PLUS 1p", sans-serif' }}
                >
                  {s.highlight.value}
                </p>
                <p className="text-[11px] text-[#888] leading-[1.6]">{s.highlight.note}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="fade-in text-center mt-4">
          <a href="#contact-form" className="btn-accent text-center text-[14px]">
            まずは10〜15分だけ話しましょう
          </a>
        </div>
      </div>
    </section>
  );
}
