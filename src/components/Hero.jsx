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
    tagJa: '初めての方',
    title: 'そもそも営業代行って何？',
    desc: '人を雇うより安く・多く・全部見える営業代行です。',
    bullets: ['8,800コール保証', '営業約2人分', 'スクリプト込み'],
    href: '#service-intro',
    cta: '初めての方向けに見る',
    isDark: false,
  },
  {
    tag: 'EXPERIENCED',
    tagJa: '利用経験がある方',
    title: '「成果ゼロ」で悩んでいませんか',
    desc: '高額・不透明・長期縛り。全部逆に設計しました。',
    bullets: ['全ログ開示', '月28万円', '8,800コール'],
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
          background: `radial-gradient(700px circle at ${mousePos.x}px ${mousePos.y}px, rgba(65,172,134,0.08), transparent 60%)`,
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
        style={{ background: 'radial-gradient(circle, rgba(65,172,134,0.08) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-10 w-full">

        {/* === 上部: ヘッドライン === */}
        <div className="text-center mb-6 sm:mb-8 lg:mb-10">
          <p className="fade-in inline-flex items-center gap-3 text-[14px] sm:text-[16px] lg:text-[18px] text-[#41ac86] tracking-[0.12em] font-black mb-4 sm:mb-6">
            <span className="w-10 sm:w-12 h-[2px] bg-[#41ac86]" />
            営業経験15年以上のプロが設計
            <span className="w-10 sm:w-12 h-[2px] bg-[#41ac86]" />
          </p>

          <h1
            className="fade-in mx-auto text-black"
            style={{ ...headingStyle, fontSize: 'clamp(26px, 4.5vw, 52px)', lineHeight: 1.25 }}
          >
            結果が出ない営業代行に
            <br />
            <span className="text-[#41ac86]">もう払わなくていい。</span>
          </h1>

          <p
            className="fade-in mt-5 sm:mt-7 text-black leading-[1.5]"
            style={{ ...headingStyle, fontSize: 'clamp(18px, 3vw, 30px)' }}
          >
            月<span className="text-[#41ac86]">8,800コール</span>を仕組みで回す。
          </p>

          <p className="fade-in mt-3 sm:mt-4 text-[14px] sm:text-[22px] lg:text-[26px] font-bold text-[#555] leading-[1.6] whitespace-nowrap">
            営業代行で失敗した人ほど違いが分かります。
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
                  : 'bg-white text-black border-2 border-black hover:border-[#41ac86]'
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
                    ? 'radial-gradient(circle at 80% 10%, #41ac86 0%, transparent 50%)'
                    : 'radial-gradient(circle at 80% 10%, #41ac86 0%, transparent 50%)',
                }}
              />

              {/* ホバーアクセント */}
              <div
                className="absolute top-0 left-0 w-full h-[4px] bg-[#41ac86] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                aria-hidden="true"
              />

              <div className="relative h-full flex flex-col p-5 sm:p-7 lg:p-8">
                {/* タグ */}
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <span
                    className={`text-[11px] sm:text-[12px] font-black tracking-[0.25em] ${
                      b.isDark ? 'text-[#41ac86]' : 'text-[#41ac86]'
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
                <ul className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-x-3 gap-y-2 mb-4 sm:mb-5">
                  {b.bullets.map((item, j) => (
                    <li
                      key={j}
                      className={`flex items-center gap-2 text-[15px] sm:text-[13px] font-bold ${
                        b.isDark ? 'text-white/90' : 'text-black'
                      }`}
                    >
                      <span className="inline-block w-[4px] h-[4px] rounded-full bg-[#41ac86] shrink-0" />
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
                        ? 'bg-[#41ac86] text-white group-hover:scale-110'
                        : 'bg-black text-white group-hover:bg-[#41ac86] group-hover:scale-110'
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
