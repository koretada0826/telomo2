import { useState, useEffect, useRef } from 'react';

const flowSteps = [
  {
    num: '01',
    title: '無料相談 (10~15分)',
    desc: '現状の営業体制や課題をヒアリング。テレモが合うかどうか正直にお伝えします。',
  },
  {
    num: '02',
    title: 'ご提案・お見積り',
    desc: 'ターゲットリスト・スクリプト・KPIを設計。ご納得いただけた場合のみ契約へ。',
  },
  {
    num: '03',
    title: 'コール開始',
    desc: '契約後最短5営業日でコール開始。専任チームが月間22,000コールを実行します。',
  },
  {
    num: '04',
    title: 'レポート・改善',
    desc: '全コールログをリアルタイム共有。データをもとにスクリプトやリストを継続改善。',
  },
];

export default function Flow() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [started, setStarted] = useState(false);
  const sectionRef = useRef(null);

  // スクロールで画面に入ったらスタート
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [started]);

  // 01→02→03→04→01... をループ
  useEffect(() => {
    if (!started) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % flowSteps.length);
    }, 1200);
    return () => clearInterval(interval);
  }, [started]);

  return (
    <section ref={sectionRef} id="flow" className="py-16 sm:py-24 px-5 sm:px-10 bg-white" style={{ fontFamily: '"Noto Sans JP", sans-serif' }}>
      <div className="max-w-[1240px] mx-auto text-center">
        <p className="fade-in text-[15px] sm:text-[16px] text-[#41ac86] tracking-[0.1em] font-bold mb-3">
          ご利用の流れ
        </p>
        <h2 className="fade-in text-[32px] sm:text-[40px] lg:text-[44px] font-bold text-[#333] tracking-[0.05em] mb-16 sm:mb-20">
          最短5営業日でコール開始
        </h2>

        {/* カード + 矢印 */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] gap-4 lg:gap-0 items-stretch">
          {flowSteps.map((s, i) => (
            <>
              {/* カード */}
              <div
                key={`card-${i}`}
                className="fade-in text-left flex flex-col transition-all duration-300"
                style={{
                  transitionDelay: `${i * 0.15}s`,
                  transform: activeIndex === i ? 'scale(1.05)' : 'scale(1)',
                  boxShadow: activeIndex === i ? '0 8px 30px rgba(65, 172, 134, 0.25)' : '0 2px 8px rgba(0,0,0,0.03)',
                  zIndex: activeIndex === i ? 10 : 1,
                  position: 'relative',
                }}
              >
                {/* 番号 */}
                <div
                  className="px-6 py-4 flex items-center gap-3 transition-all duration-300"
                  style={{
                    background: activeIndex === i ? '#2d8a6b' : '#41ac86',
                  }}
                >
                  <span className="text-[36px] sm:text-[42px] font-bold text-white leading-none">
                    {s.num}
                  </span>
                  <span className="text-[14px] sm:text-[15px] font-bold text-white/80 tracking-[0.1em]">
                    STEP
                  </span>
                </div>

                {/* 本体 */}
                <div className="bg-[#f8fcfa] border border-[#e5e0d8] border-t-0 px-6 py-6 sm:py-8 flex-1">
                  <h3 className="text-[19px] sm:text-[22px] font-bold text-[#333] mb-4 leading-[1.4]">
                    {s.title}
                  </h3>
                  <p className="text-[14px] sm:text-[16px] text-[#666] leading-[1.8] m-0">
                    {s.desc}
                  </p>
                </div>
              </div>

              {/* 矢印（最後以外） */}
              {i < flowSteps.length - 1 && (
                <div
                  key={`arrow-${i}`}
                  className="hidden lg:flex items-center justify-center px-2"
                >
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M8 16H24M24 16L18 10M24 16L18 22" stroke="#41ac86" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}

              {/* スマホ用の下矢印 */}
              {i < flowSteps.length - 1 && (
                <div
                  key={`arrow-m-${i}`}
                  className="flex lg:hidden items-center justify-center py-2"
                >
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M14 6V22M14 22L8 16M14 22L20 16" stroke="#41ac86" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
            </>
          ))}
        </div>

        {/* CTA */}
        <div className="fade-in mt-14 sm:mt-16">
          <a
            href="#contact-form"
            className="inline-block px-14 py-5 text-white font-bold text-[18px] sm:text-[20px] rounded-full no-underline hover:scale-[1.05]"
            style={{
              background: '#41ac86',
              boxShadow: '0 8px 20px rgba(65, 172, 134, 0.3)',
              animation: 'flow-cta-pulse 2s ease-in-out infinite',
            }}
          >
            まずは10〜15分だけ話しましょう
          </a>
        </div>
      </div>

      <style>{`
        @keyframes flow-cta-pulse {
          0%, 100% { transform: scale(1); box-shadow: 0 8px 20px rgba(65, 172, 134, 0.3); }
          50% { transform: scale(1.05); box-shadow: 0 12px 32px rgba(65, 172, 134, 0.5); }
        }
      `}</style>
    </section>
  );
}
