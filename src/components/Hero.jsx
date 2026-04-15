import { useState, useRef } from 'react';

const headingStyle = {
  fontFamily: '"M PLUS 1p", "Noto Sans JP", sans-serif',
  fontWeight: 900,
  lineHeight: 1.25,
  letterSpacing: '-0.02em',
};

const branches = [
  {
    tag: 'NEWCOMER',
    tagJa: 'はじめての方',
    title: 'そもそも営業代行って何？',
    desc: '人を雇うより安く・多く・全部見える営業代行です。',
    bullets: ['初期費用0円', '4,700コール保証', 'スクリプト込み'],
    href: '#service-intro',
    cta: 'はじめての方向けに見る',
    isDark: false,
  },
  {
    tag: 'EXPERIENCED',
    tagJa: '利用経験がある方',
    title: '「成果ゼロ」で悩んでいませんか',
    desc: '高額・不透明・長期縛り。全部逆に設計しました。',
    bullets: ['全ログ開示', '月額14万円', '縛りなし'],
    href: '#pain-points',
    cta: '経験者向けに見る',
    isDark: true,
  },
];

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <section
      ref={sectionRef}
      className="relative bg-white pt-[70px] sm:pt-[76px] lg:pt-[84px] pb-4 sm:pb-6 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Mouse-following glow - desktop only */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none hidden lg:block"
        style={{
          background: `radial-gradient(700px circle at ${mousePos.x}px ${mousePos.y}px, rgba(245,95,0,0.08), transparent 60%)`,
        }}
      />

      {/* Dot pattern */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Top-right orange glow */}
      <div
        className="absolute -top-[200px] -right-[200px] w-[600px] h-[600px] rounded-full z-0"
        style={{ background: 'radial-gradient(circle, rgba(245,95,0,0.08) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-10 w-full">

        {/* === 上部: ヘッドライン === */}
        <div className="text-center mb-6 sm:mb-8 lg:mb-10">
          <p className="fade-in inline-flex items-center gap-3 text-[18px] sm:text-[22px] lg:text-[24px] text-[#f55f00] tracking-[0.12em] font-black mb-6 sm:mb-8">
            <span className="w-10 sm:w-12 h-[2px] bg-[#f55f00]" />
            営業経験15年以上のプロが設計
            <span className="w-10 sm:w-12 h-[2px] bg-[#f55f00]" />
          </p>

          <h1
            className="fade-in mx-auto text-black"
            style={{ ...headingStyle, fontSize: 'clamp(22px, 3.6vw, 40px)', lineHeight: 1.3 }}
          >
            結果ゼロの営業代行に、もう払わなくていい。
            <br className="hidden sm:inline" />
            <span className="text-[#f55f00]">AI × 営業のプロで、最高の営業代行を。</span>
          </h1>

          {/* 補足コピー - 強調バッジ */}
          <div className="fade-in mt-5 sm:mt-6 flex flex-wrap justify-center items-stretch gap-2.5 sm:gap-3">
            {['月額14万円', '全ログ開示', '契約縛りなし'].map((item, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-white border-2 border-black text-[13px] sm:text-[16px] font-black text-black tracking-[0.03em] shadow-[3px_3px_0_0_#f55f00] transition-transform duration-300 hover:-translate-y-[2px]"
              >
                <span className="inline-block w-[6px] h-[6px] rounded-full bg-[#f55f00]" />
                {item}
              </span>
            ))}
          </div>

          <p className="fade-in mt-5 sm:mt-6 text-[15px] sm:text-[18px] lg:text-[20px] font-bold text-[#333] leading-[1.5]">
            まずは<span className="text-[#f55f00]">あなたに合うほう</span>からご覧ください。
          </p>
        </div>

        {/* === 二分岐: 経験者 / 未経験 === */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 mb-10 sm:mb-12">
          {branches.map((b, i) => (
            <a
              key={i}
              href={b.href}
              className={`fade-in group relative block overflow-hidden transition-all duration-500 ${
                b.isDark
                  ? 'bg-black text-white hover:bg-[#111]'
                  : 'bg-white text-black border-2 border-black hover:border-[#f55f00]'
              }`}
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              {/* 背景装飾 */}
              <div
                className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${
                  b.isDark ? 'opacity-[0.08]' : 'opacity-[0.04]'
                }`}
                style={{
                  backgroundImage: b.isDark
                    ? 'radial-gradient(circle at 80% 10%, #f55f00 0%, transparent 50%)'
                    : 'radial-gradient(circle at 80% 10%, #f55f00 0%, transparent 50%)',
                }}
              />

              {/* ホバーアクセント */}
              <div
                className="absolute top-0 left-0 w-full h-[4px] bg-[#f55f00] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                aria-hidden="true"
              />

              <div className="relative h-full flex flex-col p-5 sm:p-7 lg:p-8">
                {/* タグ */}
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <span
                    className={`text-[11px] sm:text-[12px] font-black tracking-[0.25em] ${
                      b.isDark ? 'text-[#f55f00]' : 'text-[#f55f00]'
                    }`}
                  >
                    {b.tag}
                  </span>
                  <span
                    className={`flex-1 h-[1px] ${b.isDark ? 'bg-white/20' : 'bg-black/15'}`}
                  />
                  <span
                    className={`text-[11px] font-black ${
                      b.isDark ? 'text-white/50' : 'text-black/50'
                    }`}
                  >
                    0{i + 1}
                  </span>
                </div>

                {/* サブタグ */}
                <p
                  className={`text-[12px] sm:text-[13px] font-bold tracking-[0.05em] mb-2 ${
                    b.isDark ? 'text-white/70' : 'text-[#666]'
                  }`}
                >
                  {b.tagJa}
                </p>

                {/* タイトル */}
                <h2
                  className="text-[18px] sm:text-[22px] lg:text-[24px] font-black leading-[1.3] mb-3 whitespace-nowrap"
                  style={{ fontFamily: '"M PLUS 1p", "Noto Sans JP", sans-serif' }}
                >
                  {b.title}
                </h2>

                {/* 説明 */}
                <p
                  className={`text-[13px] sm:text-[14px] leading-[1.8] mb-4 ${
                    b.isDark ? 'text-white/75' : 'text-[#4d4d4d]'
                  }`}
                >
                  {b.desc}
                </p>

                {/* 箇条書き */}
                <ul className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-x-3 gap-y-1.5 mb-4 sm:mb-5">
                  {b.bullets.map((item, j) => (
                    <li
                      key={j}
                      className={`flex items-center gap-2 text-[12px] sm:text-[13px] font-bold ${
                        b.isDark ? 'text-white/90' : 'text-black'
                      }`}
                    >
                      <span className="inline-block w-[4px] h-[4px] rounded-full bg-[#f55f00] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div
                  className={`flex items-center justify-between pt-3 border-t ${
                    b.isDark ? 'border-white/15' : 'border-black/15'
                  }`}
                >
                  <span className="text-[13px] sm:text-[15px] font-black">{b.cta}</span>
                  <span
                    className={`inline-flex items-center justify-center w-[38px] h-[38px] rounded-full transition-all duration-300 ${
                      b.isDark
                        ? 'bg-[#f55f00] text-white group-hover:scale-110'
                        : 'bg-black text-white group-hover:bg-[#f55f00] group-hover:scale-110'
                    }`}
                  >
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                      <path d="M3 9 H14 M10 5 L14 9 L10 13" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
