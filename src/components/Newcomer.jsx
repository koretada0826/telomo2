const steps = [
  { num: '01', heading: '営業しないと、売れない', body: 'どんなに良い商品でも、届けなければ存在しないのと同じです。' },
  { num: '02', heading: 'でも、人を雇うと高い', body: '営業1人あたり月50〜80万円。採用・教育コストも含めると回収まで半年以上。' },
  { num: '03', heading: '教育にも時間がかかる', body: '即戦力は見つからない。育てるにも半年〜1年。その間も固定費は発生し続けます。' },
];

const failures = [
  '月額が高いのに成果が出ない',
  '何をしているか報告がない',
  'コール数が少なすぎる',
  '長期契約で辞められない',
];

const advantages = [
  { icon: '￥', label: '月額14万円', detail: '営業1人の人件費の1/4以下。固定費を最小限に。' },
  { icon: '◎', label: '全ログ開示', detail: 'いつ・誰に・何を話したか、全コール確認可能。' },
  { icon: '▶', label: '4,700コール/月', detail: '他社の2〜5倍のコール量。圧倒的な実行力。' },
];

export default function Newcomer() {
  return (
    <section id="newcomer" className="py-16 sm:py-24 px-5 sm:px-10 bg-[#f7f7f7]">
      <div className="max-w-[900px] mx-auto">
        <p className="fade-in text-[12px] text-[#f55f00] tracking-[0.15em] font-bold mb-3">
          営業代行を使ったことがない方へ
        </p>
        <h2 className="fade-in text-[24px] sm:text-[32px] font-bold text-black leading-[1.4] tracking-[0.04em] mb-10">
          営業の課題、こう解決します
        </h2>

        {/* Steps */}
        <div className="mb-14">
          {steps.map((s, i) => (
            <div key={i} className="fade-in border-b border-[#e5e5e5] py-6 flex gap-4 items-start">
              <span className="text-[12px] font-bold text-[#f55f00] tracking-[0.05em] mt-1 shrink-0">{s.num}</span>
              <div>
                <p className="text-[18px] sm:text-[22px] font-bold text-black leading-[1.4]">{s.heading}</p>
                <p className="text-[13px] text-[#4d4d4d] mt-2">{s.body}</p>
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

        {/* Failure reasons */}
        <div className="fade-in grid grid-cols-1 sm:grid-cols-2 gap-3 mb-14">
          {failures.map((f, i) => (
            <div key={i} className="flex items-center gap-3 bg-white rounded-[12px] px-5 py-4">
              <span className="text-[16px] text-red-500">✕</span>
              <span className="text-[14px] text-[#4d4d4d]">{f}</span>
            </div>
          ))}
        </div>

        {/* Telemo solution */}
        <div className="fade-in text-center mb-8">
          <p className="text-[12px] text-[#f55f00] tracking-[0.15em] font-bold mb-2">だからこそ</p>
          <h3 className="text-[24px] sm:text-[32px] font-bold text-black leading-[1.4] tracking-[0.04em]">
            テレモは、すべてを変えました。
          </h3>
        </div>

        <div className="fade-in grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {advantages.map((a, i) => (
            <div key={i} className="bg-white rounded-[16px] p-6 text-center">
              <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-[#fef1e7] text-[#f55f00] text-[16px] font-bold mb-3">
                {a.icon}
              </span>
              <p className="text-[17px] font-bold text-black mb-1">{a.label}</p>
              <p className="text-[12px] text-[#999] leading-[1.6]">{a.detail}</p>
            </div>
          ))}
        </div>

        <div className="fade-in text-center">
          <a href="#contact-form" className="btn-primary text-center text-[14px]">
            まずは10〜15分だけ話しましょう
          </a>
        </div>
      </div>
    </section>
  );
}
