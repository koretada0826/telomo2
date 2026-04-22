import { useState, useEffect, useRef } from 'react';

function CountUp({ target, decimal = false }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1200;
          const steps = 30;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(decimal ? Math.round(current * 10) / 10 : Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, decimal]);

  return <span ref={ref}>{count}</span>;
}

const cases = [
  {
    industry: '法人回線',
    tag: 'BtoB',
    metrics: [
      { label: '受注率', value: 0.6, unit: '%', decimal: true },
      { label: '日次成約', value: 0.96, unit: '件', decimal: true },
      { label: '売上見込', value: 7, unit: '万円/日', decimal: false },
    ],
  },
  {
    industry: '法人でんき',
    tag: 'BtoB',
    metrics: [
      { label: '受注率', value: 0.5, unit: '%', decimal: true },
      { label: '日次成約', value: 0.72, unit: '件', decimal: true },
      { label: '売上見込', value: 6, unit: '万円/日', decimal: false },
    ],
  },
  {
    industry: '個人中古車',
    tag: 'BtoC',
    metrics: [
      { label: '月間審査', value: 5, unit: '件', decimal: false },
      { label: '月間通過', value: 1, unit: '件', decimal: false },
      { label: '粗利', value: 75, unit: '万円/件', decimal: false },
    ],
  },
];

export default function PerformanceData() {
  return (
    <section className="py-16 sm:py-24 px-5 sm:px-10 bg-white">
      <div className="max-w-[1240px] mx-auto">
        <div className="fade-in text-center mb-10 sm:mb-14">
          <p className="inline-flex items-center gap-3 text-[11px] sm:text-[13px] text-[#41ac86] tracking-[0.3em] font-black mb-3">
            <span className="w-8 h-[2px] bg-[#41ac86]" />
            PERFORMANCE DATA
            <span className="w-8 h-[2px] bg-[#41ac86]" />
          </p>
          <h2 className="text-[28px] sm:text-[40px] lg:text-[44px] font-black text-black leading-[1.3] tracking-[0.02em] mb-4">
            机上の空論では<span className="text-[#41ac86]">ありません</span>
          </h2>
          <p className="text-[15px] sm:text-[17px] text-[#555] leading-[1.8] max-w-[680px] mx-auto">
            実際の稼働データを公開します。
            <br className="hidden sm:inline" />
            誇張なし。日次実績に基づく数値のみ。
          </p>
        </div>

        {/* 実績カード */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 mb-10">
          {cases.map((c, i) => (
            <div
              key={i}
              className="fade-in relative bg-white border-2 border-black overflow-hidden"
              style={{ boxShadow: '6px 6px 0 0 #41ac86', transitionDelay: `${i * 0.1}s` }}
            >
              {/* ヘッダー */}
              <div className="bg-black px-5 py-4 flex items-center justify-between">
                <span className="text-[18px] sm:text-[20px] font-black text-white">{c.industry}</span>
                <span className="text-[10px] font-black text-[#41ac86] tracking-[0.2em] bg-[#41ac86]/15 px-2.5 py-1 rounded-full">
                  {c.tag}
                </span>
              </div>

              {/* 数値 */}
              <div className="p-5 sm:p-6 space-y-4">
                {c.metrics.map((m, j) => (
                  <div key={j} className="flex items-end justify-between gap-3 border-b border-[#eee] pb-3 last:border-0 last:pb-0">
                    <span className="text-[15px] sm:text-[17px] font-black text-[#333]">{m.label}</span>
                    <div className="text-right">
                      <span className="text-[36px] sm:text-[44px] font-black text-[#41ac86] leading-none" style={{ fontFamily: '"M PLUS 1p", sans-serif' }}>
                        <CountUp target={m.value} decimal={m.decimal} />
                      </span>
                      <span className="text-[14px] sm:text-[15px] font-black text-[#555] ml-1">{m.unit}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 再現性メッセージ */}
        <div className="fade-in text-center bg-[#f0f9f5] border-l-[6px] border-[#41ac86] py-6 sm:py-8 px-6 sm:px-10">
          <p className="text-[22px] sm:text-[30px] lg:text-[36px] font-black text-black leading-[1.4]">
            業種を選ばない<span className="text-[#41ac86]">再現性</span>。
            <br className="hidden sm:inline" />
            営業は<span className="text-[#41ac86]">「確率」</span>で作れる。
          </p>
          <p className="mt-4 text-[16px] sm:text-[19px] text-[#555] font-bold">
            コール数（母数）× 有効率（接触）× 受注率（可能性）＝ 売上
          </p>
        </div>

        <p className="text-[12px] text-[#999] mt-4 text-center">
          ※ 特定企業情報は非開示。日次実績に基づく数値のみ提示。
        </p>
      </div>
    </section>
  );
}
