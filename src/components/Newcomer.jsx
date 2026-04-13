const steps = [
  {
    num: '01',
    tag: '事実',
    heading: '営業しないと、\n売れない',
    body: 'どんなに良い商品でも、届けなければ存在しないのと同じです。',
    highlight: { label: '機会損失', value: '100%', note: '営業なしでは顧客に届かない' },
  },
  {
    num: '02',
    tag: 'コスト',
    heading: 'でも、\n人を雇うと高い',
    body: '営業1人あたり月50〜80万円。採用・教育コストも含めると回収まで半年以上。',
    highlight: { label: '営業1人あたり', value: '月50〜80万', note: '採用+教育コストは別途' },
  },
  {
    num: '03',
    tag: '時間',
    heading: '教育にも\n時間がかかる',
    body: '即戦力は見つからない。育てるにも半年〜1年。その間も固定費は発生し続けます。',
    highlight: { label: '戦力化まで', value: '半年〜1年', note: 'その間も固定費が発生' },
  },
];

const failures = [
  '月額が高いのに成果が出ない',
  '何をしているか報告がない',
  'コール数が少なすぎる',
  '長期契約で辞められない',
];

const advantages = [
  { no: '01', tag: 'COST',     label: '月額14万円',      detail: '営業1人の人件費の1/4以下。固定費を最小限に。' },
  { no: '02', tag: 'TRANSPARENCY', label: '全ログ開示',  detail: 'いつ・誰に・何を話したか、全コール確認可能。' },
  { no: '03', tag: 'VOLUME',   label: '4,700コール/月', detail: '他社の2〜5倍のコール量。圧倒的な実行力。' },
];

export default function Newcomer() {
  return (
    <section id="newcomer" className="py-16 sm:py-24 px-5 sm:px-10 bg-[#f7f7f7]">
      <div className="max-w-[1240px] mx-auto">
        <p className="fade-in text-[12px] text-[#f55f00] tracking-[0.15em] font-bold mb-3">
          営業代行を使ったことがない方へ
        </p>
        <h2 className="fade-in text-[28px] sm:text-[40px] lg:text-[44px] font-black text-black leading-[1.3] tracking-[0.02em] mb-10">
          営業の課題、<span className="text-[#f55f00]">こう解決</span>します
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
                  <span className="text-[96px] sm:text-[120px] font-black leading-[0.85] text-[#f55f00]">
                    {s.num}
                  </span>
                  {/* 斜めアクセントバー */}
                  <span className="block w-[10px] h-[60px] sm:h-[72px] bg-black -skew-x-[20deg] mb-3" />
                  <span className="block w-[4px] h-[60px] sm:h-[72px] bg-[#f55f00] -skew-x-[20deg] mb-3" />
                </div>
                {/* アンダーライン */}
                <div className="flex items-center gap-2 mt-2">
                  <span className="h-[3px] flex-1 bg-black" />
                  <span className="h-[3px] w-[20%] bg-[#f55f00]" />
                </div>
              </div>

              {/* 見出し - 大きめ */}
              <h3
                className="relative text-[22px] sm:text-[26px] lg:text-[28px] font-black text-black leading-[1.3] mb-4"
                style={{ whiteSpace: 'pre-line' }}
              >
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
                  className="text-[26px] sm:text-[30px] font-black text-[#f55f00] leading-none mb-1"
                  style={{ fontFamily: '"M PLUS 1p", sans-serif' }}
                >
                  {s.highlight.value}
                </p>
                <p className="text-[11px] text-[#888] leading-[1.6]">{s.highlight.note}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Transition */}
        <div className="fade-in text-center mb-10">
          <p className="text-[15px] text-[#4d4d4d] mb-3">だから、営業代行という選択肢。</p>
          <h3 className="text-[24px] sm:text-[32px] font-bold text-black leading-[1.4] tracking-[0.04em]">
            でも、ほとんどの営業代行は失敗します。
          </h3>
        </div>

        {/* Failure reasons - 注意報カード */}
        <div className="fade-in relative bg-white border-2 border-[#1a1a1a] mb-14 overflow-hidden">
          {/* 警告ストライプ(上下) */}
          <div className="h-3 caution-stripes" />

          <div className="p-5 sm:p-6 relative">
            {/* 背景の巨大な WARNING SVG */}
            <svg
              className="absolute -right-6 top-6 w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] opacity-[0.06] pointer-events-none"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M100 20 L185 170 H15 Z" stroke="#1a1a1a" strokeWidth="8" strokeLinejoin="round" />
              <rect x="94" y="78" width="12" height="50" fill="#1a1a1a" />
              <circle cx="100" cy="145" r="7" fill="#1a1a1a" />
            </svg>

            {/* ヘッダー (中央) */}
            <div className="relative flex flex-col items-center text-center mb-6">
              <svg className="caution-pulse w-12 h-12 sm:w-14 sm:h-14 mb-2" viewBox="0 0 40 40" fill="none">
                <path d="M20 4 L38 34 H2 Z" fill="#d94848" stroke="#1a1a1a" strokeWidth="2.5" strokeLinejoin="round" />
                <rect x="18" y="15" width="4" height="11" fill="#fff" />
                <circle cx="20" cy="29" r="2" fill="#fff" />
              </svg>
              <p className="text-[12px] sm:text-[13px] font-black text-[#d94848] tracking-[0.35em] mb-1">CAUTION</p>
              <p className="text-[22px] sm:text-[30px] lg:text-[34px] font-black text-black leading-tight">
                よくある失敗パターン
              </p>
            </div>

            {/* リスト (md以上で2x2グリッド) */}
            <ul className="relative grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2.5">
              {failures.map((f, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 py-2.5 border-b border-dashed border-[#e0e0e0] md:[&:nth-last-child(-n+2)]:border-b-0"
                >
                  {/* カスタムSVGマーク */}
                  <svg className="w-10 h-10 sm:w-11 sm:h-11 shrink-0" viewBox="0 0 40 40" fill="none">
                    <circle cx="20" cy="20" r="17" fill="#fff" stroke="#d94848" strokeWidth="2.5" />
                    <path d="M13 13 L27 27 M27 13 L13 27" stroke="#d94848" strokeWidth="3.5" strokeLinecap="round" />
                  </svg>

                  {/* 番号 */}
                  <span
                    className="text-[26px] sm:text-[30px] font-black text-[#d94848] leading-none shrink-0 w-[40px]"
                    style={{ fontFamily: '"M PLUS 1p", sans-serif' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  {/* テキスト */}
                  <span className="text-[17px] sm:text-[22px] font-bold text-black leading-[1.4]">
                    {f}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* 警告ストライプ(下) */}
          <div className="h-3 caution-stripes" />
        </div>

        {/* Telemo solution */}
        <div className="fade-in text-center mb-8">
          <p className="text-[12px] text-[#f55f00] tracking-[0.15em] font-bold mb-2">だからこそ</p>
          <h3 className="text-[24px] sm:text-[32px] font-bold text-black leading-[1.4] tracking-[0.04em]">
            テレモは、すべてを変えました。
          </h3>
        </div>

        <div className="fade-in grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12">
          {advantages.map((a, i) => (
            <div
              key={i}
              className="group relative bg-white p-7 sm:p-8 overflow-hidden border border-[#e8e8e8] shadow-[0_2px_10px_rgba(0,0,0,0.04)]"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              {/* SALES POINT ラベル (1本化) */}
              <div className="relative flex items-center gap-3 mb-4">
                <span className="text-[11px] font-black text-[#f55f00] tracking-[0.3em] leading-none">
                  SALES POINT
                </span>
                <span className="flex-1 h-[1px] bg-gradient-to-r from-[#f55f00]/40 to-transparent" />
                <span
                  className="text-[26px] sm:text-[30px] font-black leading-none text-[#f55f00]"
                  style={{ fontFamily: '"M PLUS 1p", sans-serif' }}
                >
                  {a.no}
                </span>
              </div>

              {/* タグ */}
              <p className="relative text-[10px] font-bold text-[#999] tracking-[0.25em] mb-2">#{a.tag}</p>

              {/* メインラベル - 大きく */}
              <p className="relative text-[22px] sm:text-[26px] font-black text-black leading-[1.3] mb-3">
                {a.label}
              </p>

              {/* 本文 */}
              <p className="relative text-[13px] sm:text-[14px] text-[#555] leading-[1.8]">
                {a.detail}
              </p>

              {/* 下部アクセント */}
              <div className="relative mt-5 h-[2px] bg-gradient-to-r from-[#f55f00] via-[#f55f00]/40 to-transparent" />
            </div>
          ))}
        </div>

        <div className="fade-in text-center">
          <a href="#contact-form" className="btn-accent text-center text-[14px]">
            まずは10〜15分だけ話しましょう
          </a>
        </div>
      </div>
    </section>
  );
}
