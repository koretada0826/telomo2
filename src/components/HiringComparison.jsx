const humanCosts = [
  { label: '給与', value: '28万円/月' },
  { label: '社会保険', value: '約4.2万円（15%）' },
  { label: '交通費', value: '約1万円/月' },
  { label: '残業・有給', value: '約2.8万円（10%）' },
  { label: '離職リスク', value: 'あり', isRisk: true },
];

const telemoCosts = [
  { label: '月額費用', value: '28万円/月' },
  { label: '通信費', value: '込み', included: true },
  { label: '録音・ログ', value: '込み', included: true },
  { label: '文字起こし', value: '込み', included: true },
  { label: '離職リスク', value: 'なし', isSafe: true },
];

const emotionalIssues = [
  { icon: '01', title: '残業したくない', desc: '定時後の稼働を嫌がる\nワークライフバランス重視' },
  { icon: '02', title: '電話がしんどい', desc: '電話営業のストレス\n断られることへの恐怖心' },
  { icon: '03', title: '人間関係の摩擦', desc: 'チーム内の衝突\n上司とのコミュ不全' },
  { icon: '04', title: 'モチベの波', desc: 'やる気の浮き沈みが激しく\n安定した成果が出ない' },
  { icon: '05', title: '突然の離職', desc: '予告なしの退職\n採用・教育コストが無駄に' },
];

export default function HiringComparison() {
  return (
    <section className="py-16 sm:py-24 px-5 sm:px-10 bg-[#f7f7f7]">
      <div className="max-w-[1240px] mx-auto">

        {/* ヘッダー */}
        <div className="fade-in text-center mb-10 sm:mb-14">
          <p className="inline-flex items-center gap-3 text-[11px] sm:text-[13px] text-[#41ac86] tracking-[0.3em] font-black mb-3">
            <span className="w-8 h-[2px] bg-[#41ac86]" />
            COST COMPARISON
            <span className="w-8 h-[2px] bg-[#41ac86]" />
          </p>
          <h2 className="text-[28px] sm:text-[40px] lg:text-[44px] font-black text-black leading-[1.3] tracking-[0.02em] mb-4">
            採用<span className="text-[#41ac86]">1人分</span>の予算で
            <br className="hidden sm:inline" />
            リスクゼロの営業力を。
          </h2>
        </div>

        {/* コスト比較カード */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-16">

          {/* 人の採用 */}
          <div className="fade-in bg-white border border-[#e5e5e5] overflow-hidden">
            <div className="bg-[#fafafa] px-6 py-5 border-b border-[#e5e5e5] text-center">
              <p className="text-[10px] tracking-[0.2em] font-bold text-[#bbb] mb-1">HUMAN</p>
              <p className="text-[20px] sm:text-[24px] font-black text-[#555]">人の採用（新卒）</p>
            </div>
            <div className="p-5 sm:p-6 space-y-3">
              {humanCosts.map((c, i) => (
                <div key={i} className="grid grid-cols-2 gap-20 sm:gap-32 items-center py-3 border-b border-[#f0f0f0] last:border-0">
                  <span className="text-[20px] sm:text-[24px] font-bold text-[#888] text-right">{c.label}</span>
                  <span className={`text-[21px] sm:text-[25px] font-black text-left ${c.isRisk ? 'text-red-500' : 'text-[#333]'}`}>
                    {c.isRisk && '⚠ '}{c.value}
                  </span>
                </div>
              ))}
            </div>
            <div className="bg-[#fafafa] px-6 py-4 border-t border-[#e5e5e5] text-center">
              <span className="text-[14px] font-bold text-[#888]">月額総コスト：</span>
              <span className="text-[28px] sm:text-[32px] font-black text-[#333] ml-2" style={{ fontFamily: '"M PLUS 1p", sans-serif' }}>
                約35万円
              </span>
            </div>
          </div>

          {/* テレモ */}
          <div className="fade-in bg-white border-2 border-[#41ac86] overflow-hidden shadow-[0_12px_30px_rgba(65,172,134,0.15)]" style={{ transitionDelay: '0.1s' }}>
            <div className="bg-[#41ac86] px-6 py-5 text-center">
              <p className="text-[10px] tracking-[0.2em] font-bold text-white/70 mb-1">TELEMO</p>
              <p className="text-[20px] sm:text-[24px] font-black text-white">テレモ</p>
            </div>
            <div className="p-5 sm:p-6 space-y-3">
              {telemoCosts.map((c, i) => (
                <div key={i} className="grid grid-cols-2 gap-20 sm:gap-32 items-center py-3 border-b border-[#f0f0f0] last:border-0">
                  <span className="text-[20px] sm:text-[24px] font-bold text-[#888] text-right">{c.label}</span>
                  <span className={`text-[21px] sm:text-[25px] font-black text-left ${c.isSafe ? 'text-[#41ac86]' : c.included ? 'text-[#41ac86]' : 'text-[#333]'}`}>
                    {c.isSafe && '✓ '}{c.value}
                  </span>
                </div>
              ))}
            </div>
            <div className="bg-[#f0f9f5] px-6 py-4 border-t border-[#c8e8dc] text-center">
              <span className="text-[14px] font-bold text-[#888]">月額総コスト：</span>
              <span className="text-[28px] sm:text-[32px] font-black text-[#41ac86] ml-2" style={{ fontFamily: '"M PLUS 1p", sans-serif' }}>
                28万円
              </span>
              <span className="text-[13px] text-[#888] ml-1">（税別・全部込み）</span>
            </div>
          </div>
        </div>

        {/* 結論 */}
        <div className="fade-in text-center bg-white border-2 border-black px-4 py-6 sm:p-8 mb-6 sm:mb-10" style={{ boxShadow: '6px 6px 0 0 #41ac86' }}>
          <p className="font-black text-black leading-[1.4] whitespace-nowrap" style={{ fontSize: 'clamp(15px, 4.4vw, 32px)' }}>
            同じコストで、<span className="text-[#41ac86]">リスクがゼロ</span>になる。
          </p>
          <p className="mt-2 text-[14px] sm:text-[16px] text-[#555] font-bold">
            しかもコール数は人の2倍。教育不要。離職なし。
          </p>
        </div>

        {/* 感情リスク */}
        <div className="fade-in mb-10 sm:mb-14">
          <div className="text-center mb-8 sm:mb-10">
            <p className="inline-flex items-center gap-3 text-[11px] sm:text-[13px] text-[#41ac86] tracking-[0.3em] font-black mb-3">
              <span className="w-8 h-[2px] bg-[#41ac86]" />
              EMOTIONAL RISK
              <span className="w-8 h-[2px] bg-[#41ac86]" />
            </p>
            <h3 className="text-[24px] sm:text-[34px] lg:text-[40px] font-black text-black leading-[1.3]">
              人の営業には<span className="text-[#41ac86]">「感情」</span>がある
            </h3>
            <p className="mt-3 text-[15px] sm:text-[17px] text-[#555] font-bold">
              どんなに優秀でも、人間には感情がある。それが最大のリスクです。
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-3 sm:gap-4 mb-8">
            {emotionalIssues.map((item, i) => (
              <div
                key={i}
                className="fade-in bg-white border-2 border-black p-5 sm:p-6 text-center"
                style={{ boxShadow: '4px 4px 0 0 rgba(0,0,0,0.1)', transitionDelay: `${i * 0.06}s` }}
              >
                <span className="inline-flex w-[44px] h-[44px] sm:w-[48px] sm:h-[48px] rounded-full bg-black items-center justify-center text-[#41ac86] text-[14px] sm:text-[15px] font-black mb-3">
                  {item.icon}
                </span>
                <p className="text-[26px] sm:text-[20px] font-black text-black mb-3">{item.title}</p>
                <p className="text-[18px] sm:text-[15px] text-[#888] leading-[1.7] whitespace-pre-line font-medium">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* テレモの答え */}
          <div className="fade-in bg-[#f0f9f5] p-8 sm:p-12 text-center">
            <p className="font-black text-black leading-[1.5]" style={{ fontSize: 'clamp(18px, 5.2vw, 40px)' }}>
              <span className="sm:hidden">
                テレモは
                <br />
                <span className="text-[#41ac86] whitespace-nowrap">辞めない。飽きない。ブレない。</span>
              </span>
              <span className="hidden sm:inline">
                テレモは、<span className="text-[#41ac86]">辞めない。飽きない。ブレない。</span>
              </span>
            </p>
            <p className="mt-4 text-[16px] sm:text-[20px] text-[#555] leading-[1.8]">
              感情に左右されない。24時間365日、
              <br className="sm:hidden" />
              同じ品質で稼働し続けます。
            </p>
          </div>
        </div>

        <div className="fade-in text-center">
          <a href="#contact-form" className="btn-accent text-center">
            まずは10〜15分だけ話しましょう
          </a>
        </div>
      </div>
    </section>
  );
}
