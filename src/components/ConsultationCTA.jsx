const points = [
  { title: '採用コストの可視化', desc: '現状の営業人件費とテレモのコスト差を算出します。' },
  { title: '離職リスクの試算', desc: '離職で発生する再採用・再教育コストを試算します。' },
  { title: '削減インパクトの提示', desc: '削減コストと稼働量を具体的な数字でお伝えします。' },
];

export default function ConsultationCTA() {
  return (
    <section className="py-16 sm:py-24 px-5 sm:px-10 bg-[#1a1a1a] relative overflow-hidden">
      {/* オレンジグロー */}
      <div className="absolute top-0 right-0 w-[50%] h-full opacity-10" style={{ background: 'radial-gradient(ellipse at 80% 30%, #41ac86 0%, transparent 60%)' }} />

      <div className="relative z-10 max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* 左: コピー */}
          <div>
            <p className="fade-in text-[13px] text-[#41ac86] tracking-[0.2em] font-bold mb-4">
              無料相談
            </p>
            <h2 className="fade-in font-black text-white leading-[1.3] mb-5" style={{ fontSize: 'clamp(18px, 5.2vw, 42px)' }}>
              <span className="whitespace-nowrap">現状の営業コストと比較した</span>
              <br />
              <span className="whitespace-nowrap"><span className="text-[#41ac86]">"削減インパクト"</span>をその場で算出</span>
            </h2>
            <p className="fade-in text-[15px] sm:text-[17px] text-white/70 leading-[1.8] mb-8">
              採用コスト・離職リスク・教育コスト——
              <br className="hidden sm:inline" />
              これらを数字で可視化し、テレモ導入の効果を正直にお伝えします。
              <br className="hidden sm:inline" />
              合わなければ、それでOKです。
            </p>
            <div className="fade-in flex flex-col sm:flex-row gap-4">
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center bg-[#41ac86] text-white text-[16px] sm:text-[18px] font-bold h-[60px] sm:h-[68px] px-10 sm:px-14 rounded-[96px] no-underline hover:bg-[#359471] transition-colors"
              >
                無料相談を予約する
              </a>
              <a
                href="#document-request"
                className="inline-flex items-center justify-center border-2 border-white/30 text-white text-[14px] sm:text-[16px] font-bold h-[60px] sm:h-[68px] px-8 sm:px-12 rounded-[96px] no-underline hover:bg-white/10 transition-colors"
              >
                まずは資料だけ見る
              </a>
            </div>
          </div>

          {/* 右: 無料相談で聞けること */}
          <div className="fade-in">
            <div className="bg-white/[0.06] border border-white/10 rounded-none p-6 sm:p-8">
              <p className="text-[18px] sm:text-[20px] text-white font-black mb-8">
                無料相談でわかること
              </p>
              <div className="space-y-0">
                {points.map((p, i) => (
                  <div key={i} className={`flex gap-5 items-start py-5 sm:py-6 ${i < points.length - 1 ? 'border-b border-white/10' : ''}`}>
                    <span className="text-[18px] sm:text-[20px] font-black text-[#41ac86] mt-0.5 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                    <div>
                      <p className="text-[18px] sm:text-[20px] text-white font-bold mb-2">{p.title}</p>
                      <p className="text-[15px] sm:text-[16px] text-white/50 leading-[1.8]">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-5 border-t border-white/10">
                <div className="flex flex-wrap gap-5 text-[15px] sm:text-[16px] text-white/50">
                  <span>所要時間：10〜15分</span>
                  <span>費用：無料</span>
                  <span>売り込み：なし</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
