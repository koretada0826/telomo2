import React from 'react';

const achievements = [
  {
    year: 'AWARDS 2023',
    number: '97',
    unit: '%',
    label: 'リピート率',
  },
  {
    year: 'AWARDS 2023',
    number: '15',
    unit: '%',
    label: '最高アポイント率',
  },
  {
    year: 'AWARDS 2023',
    number: '88',
    unit: '%',
    label: '決裁者商談率',
  }
];

export default function AchievementsAwards() {
  return (
    <section className="bg-white pt-4 pb-10 px-4 overflow-hidden relative">
      {/* 黒→透明 の SVGフィルタ */}
      <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
        <defs>
          <filter id="knockout-black" colorInterpolationFilters="sRGB">
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      1 1 1 0 0"
            />
          </filter>
        </defs>
      </svg>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-0 lg:gap-4">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="fade-in fade-up relative w-full max-w-[360px] flex flex-col items-center justify-center"
              style={{ transitionDelay: `${index * 0.15}s` }}
            >

              <div className="relative w-full aspect-square md:aspect-auto md:h-[360px] pointer-events-none">
                <img
                  src="/images/golden_laurel_award.png"
                  alt="Award Wreath"
                  className="w-full h-full object-contain"
                  style={{ filter: 'url(#knockout-black)' }}
                />

                {/* 数字エリアの柔らかいクリーム色ハロー（読みやすさのための"台" ） */}
                <div
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none rounded-full"
                  style={{
                    top: '46%',
                    width: '62%',
                    height: '58%',
                    background: 'radial-gradient(circle, rgba(255,251,238,0.95) 0%, rgba(255,248,228,0.7) 50%, rgba(255,248,228,0) 78%)',
                  }}
                />

                {/* 数字 (月桂冠の中央) */}
                <div className="absolute inset-0 flex items-center justify-center pb-[18%]">
                  <div
                    className="flex items-baseline justify-center leading-none"
                    style={{ fontFamily: '"Noto Serif JP", "Times New Roman", serif' }}
                  >
                    <span
                      className="text-[96px] lg:text-[124px] font-bold tracking-tight text-black"
                      style={{
                        textShadow: '0 1px 0 rgba(255,255,255,0.95), 0 2px 10px rgba(255,250,235,0.85), 0 0 3px rgba(255,255,255,1)',
                      }}
                    >
                      {item.number}
                    </span>
                    <span
                      className="text-[38px] lg:text-[48px] font-bold ml-1 text-[#41ac86]"
                      style={{ textShadow: '0 1px 0 rgba(255,255,255,0.95), 0 0 6px rgba(255,250,235,0.9)' }}
                    >
                      {item.unit}
                    </span>
                  </div>
                </div>

                {/* ラベル背景の暗部（リボン上を読みやすくする） */}
                <div
                  className="absolute left-1/2 -translate-x-1/2 pointer-events-none rounded-full"
                  style={{
                    bottom: '27%',
                    width: '62%',
                    height: '40px',
                    background: 'radial-gradient(ellipse at center, rgba(30,18,4,0.55) 0%, rgba(30,18,4,0.25) 55%, transparent 82%)',
                  }}
                />

                {/* ラベル (金色リボン上に重ねる) */}
                <div className="absolute left-0 right-0 flex justify-center" style={{ bottom: '29%' }}>
                  <span
                    className="text-[18px] lg:text-[24px] font-black tracking-[0.1em] text-white"
                    style={{
                      fontFamily: '"Noto Serif JP", "Times New Roman", serif',
                      textShadow: '0 1px 2px rgba(0,0,0,0.9), 0 0 8px rgba(0,0,0,0.7), 0 0 1px rgba(0,0,0,1)',
                      WebkitTextStroke: '0.4px rgba(0,0,0,0.85)',
                    }}
                  >
                    {item.label}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        <div className="text-center mt-6 text-[#999] text-xs tracking-widest">
          ※2023年度実績（自社調べに基づく）
        </div>
      </div>
    </section>
  );
}
