import { useState, useEffect, useRef } from 'react';

function PriceCountUp() {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const target = 14;
          let current = 0;
          const timer = setInterval(() => {
            current++;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(current);
            }
          }, 1200 / 28);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return <span ref={ref}>{count}</span>;
}

const checks = [
  '月間22,000コール保証',
  '全コールログ開示',
  '初期費用なし',
  '最低契約期間なし',
  '専任担当者配置',
  'スクリプト設計込み',
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 sm:py-24 px-5 sm:px-10 bg-[#f5f5f5]">
      <div className="max-w-[1240px] mx-auto" style={{ fontFamily: '"Noto Sans JP", sans-serif' }}>

        {/* カード */}
        <div
          className="fade-in max-w-[900px] mx-auto overflow-hidden text-center"
          style={{
            background: '#fdfcf8',
            borderRadius: '8px',
            boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
            paddingBottom: '60px',
          }}
        >
          {/* ヘッダー */}
          <div
            className="px-5 py-14 sm:py-16"
            style={{
              background: '#1a1a1a',
              backgroundImage: 'radial-gradient(circle at 50% 50%, #333 0%, #1a1a1a 100%)',
              color: '#fff',
            }}
          >
            <p className="text-[14px] font-bold tracking-[0.3em]" style={{ color: '#d4af37' }}>
              PRICING
            </p>
            <h2
              className="text-[36px] sm:text-[46px] lg:text-[54px] font-bold my-5"
              style={{
                fontFamily: '"Noto Sans JP", sans-serif',
                background: 'linear-gradient(135deg, #d4af37 0%, #f9f295 45%, #e6be8a 50%, #b8860b 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              シンプルに、1プランだけ。
            </h2>
            <p className="text-[14px] sm:text-[15px]" style={{ opacity: 0.7 }}>
              余計なオプションはありません。必要なものは全部入っています。
            </p>
          </div>

          {/* 価格エリア */}
          <div className="flex justify-center pt-14 sm:pt-16 pb-2">
            <div className="relative inline-flex items-end mx-auto">
              {/* 14 - メタリック加工 + 高級フォント */}
              <span
                className="leading-none inline-block"
                style={{
                  fontFamily: '"Noto Serif JP", serif',
                  fontSize: 'clamp(120px, 20vw, 180px)',
                  fontWeight: 900,
                  background: 'linear-gradient(180deg, #666 0%, #444 20%, #1a1a1a 40%, #000 50%, #1a1a1a 60%, #333 80%, #555 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  letterSpacing: '-4px',
                  filter: 'drop-shadow(2px 2px 0px rgba(100,100,100,0.5)) drop-shadow(4px 6px 8px rgba(0,0,0,0.35))',
                }}
              >
                <PriceCountUp />
              </span>

              {/* 万円 - 右下 */}
              <div className="self-end pb-2 sm:pb-3 ml-2">
                <span
                  className="inline-block"
                  style={{
                    fontFamily: '"Noto Serif JP", serif',
                    fontSize: 'clamp(30px, 5vw, 46px)',
                    fontWeight: 700,
                    background: 'linear-gradient(160deg, #c9a84c 0%, #e8d48b 40%, #b8962e 55%, #dfc56a 70%, #a07b28 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    filter: 'drop-shadow(1px 2px 3px rgba(0,0,0,0.15))',
                  }}
                >
                  万円
                </span>
                <span className="text-[13px] sm:text-[14px] text-[#999] block mt-0.5">（税別）</span>
              </div>
            </div>
          </div>

          {/* 比較フレーム */}
          <div className="relative max-w-[600px] mx-auto mt-10 mb-10 px-6 py-5" style={{ border: '1px solid #d4af37', background: 'rgba(255,255,255,0.8)', boxShadow: 'inset 0 0 15px rgba(212, 175, 55, 0.1)' }}>
            {/* 四隅の装飾 */}
            <div className="absolute -top-[5px] -left-[5px] w-5 h-5 border-t-2 border-l-2 border-[#d4af37]" />
            <div className="absolute -top-[5px] -right-[5px] w-5 h-5 border-t-2 border-r-2 border-[#d4af37]" />
            <div className="absolute -bottom-[5px] -left-[5px] w-5 h-5 border-b-2 border-l-2 border-[#d4af37]" />
            <div className="absolute -bottom-[5px] -right-[5px] w-5 h-5 border-b-2 border-r-2 border-[#d4af37]" />
            <p className="text-[16px] sm:text-[18px] text-[#555] m-0">
              他社平均30〜80万円 → <span className="font-bold text-[1.2em]" style={{ color: '#b38728' }}>約1/4のコスト</span>
            </p>
          </div>

          {/* 区切り線 */}
          <div className="relative w-[80%] h-[1px] mx-auto mb-10" style={{ background: 'linear-gradient(90deg, transparent, #d4af37, transparent)' }}>
            <span
              className="absolute top-[-10px] left-1/2 -translate-x-1/2 px-5 text-[12px] font-bold tracking-[0.2em]"
              style={{ background: '#fdfcf8', color: '#b8860b' }}
            >
              INCLUDED
            </span>
          </div>

          {/* チェックリスト */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-6 sm:px-10">
            {checks.map((item, i) => (
              <div
                key={i}
                className="fade-in flex items-center bg-white px-6 py-6 transition-all duration-300 hover:-translate-y-1"
                style={{
                  borderRadius: '4px',
                  boxShadow: 'inset 0 2px 5px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.06)',
                  border: '1px solid #e6be8a',
                  transitionDelay: `${0.1 + i * 0.08}s`,
                }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 10px 25px rgba(212, 175, 55, 0.2)'; e.currentTarget.style.borderColor = '#d4af37'; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'inset 0 2px 5px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.06)'; e.currentTarget.style.borderColor = '#e6be8a'; }}
              >
                <div className="w-[3px] h-7 rounded-full shrink-0 mr-5" style={{ background: '#d4af37' }} />
                <span className="text-[18px] sm:text-[20px] font-bold text-[#333]">{item}</span>
              </div>
            ))}
          </div>

          {/* CTAボタン */}
          <div className="mt-14">
            <a
              href="#contact-form"
              className="inline-block px-14 sm:px-20 py-6 text-white font-bold text-[18px] sm:text-[20px] rounded-full no-underline transition-all duration-300 hover:brightness-110 hover:scale-[1.02]"
              style={{
                background: 'linear-gradient(180deg, #41ac86 0%, #2d8a6b 100%)',
                boxShadow: '0 15px 35px rgba(53, 148, 113, 0.4), inset 0 2px 2px rgba(255,255,255,0.3)',
                border: '1px solid #359471',
                animation: 'pricing-cta-pulse 2s ease-in-out infinite',
              }}
            >
              まずは10〜15分だけ話しましょう
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pricing-cta-pulse {
          0%, 100% { transform: scale(1); box-shadow: 0 15px 35px rgba(53, 148, 113, 0.4), inset 0 2px 2px rgba(255,255,255,0.3); }
          50% { transform: scale(1.03); box-shadow: 0 20px 45px rgba(53, 148, 113, 0.5), inset 0 2px 2px rgba(255,255,255,0.3); }
        }
      `}</style>
    </section>
  );
}
