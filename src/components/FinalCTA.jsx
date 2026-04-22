export default function FinalCTA() {
  return (
    <section
      className="py-16 sm:py-24 px-5 sm:px-10 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1a1a1a 0%, #1a2d25 50%, #1a3d2e 100%)',
      }}
    >
      {/* 背景画像 */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/img/final-cta-bg.jpg)', opacity: 0.9 }}
      />
      {/* 全体を暗めにしつつ、上下を更に暗くするオーバーレイ */}
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60" />
      {/* オレンジ光芒 */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20" style={{ background: 'radial-gradient(ellipse at 30% 50%, #41ac86 0%, transparent 60%)' }} />
      <div className="relative z-10 max-w-[800px] mx-auto text-center">
        <p className="fade-in text-[18px] sm:text-[22px] text-[#41ac86] tracking-[0.15em] font-black mb-5">TELEMO</p>
        <h2
          className="fade-in text-[32px] sm:text-[44px] lg:text-[52px] font-black text-white leading-[1.3] tracking-[0.04em] mb-6"
          style={{ textShadow: '0 2px 12px rgba(0,0,0,0.9), 0 0 24px rgba(0,0,0,0.6)' }}
        >
          営業のプロが作った
          <br />
          日本一正直な営業代行
        </h2>
        <p
          className="fade-in text-[20px] sm:text-[24px] text-white font-bold mb-4"
          style={{ textShadow: '0 1px 8px rgba(0,0,0,0.9)' }}
        >
          かけた分だけ、全部見える。
          <br className="sm:hidden" />
          それがTELEMOです。
        </p>
        <p
          className="fade-in text-[#41ac86] font-black mb-10"
          style={{ textShadow: '0 1px 8px rgba(0,0,0,0.9)', fontSize: 'clamp(13px, 4vw, 20px)' }}
        >
          <span className="whitespace-nowrap">現状の営業コストと比較した</span>
          <br className="sm:hidden" />
          <span className="whitespace-nowrap">"削減インパクト"をその場で算出します</span>
        </p>
        <div className="fade-in flex flex-col sm:flex-row gap-3 justify-center">
          <a href="#contact-form" className="btn-accent text-center">
            まずは10〜15分だけ話しましょう
          </a>
          <a
            href="#document-request"
            className="btn-primary text-center !text-white"
            style={{ boxShadow: '0 4px 18px rgba(0,0,0,0.55), 0 0 0 2px rgba(255,255,255,0.18)' }}
          >
            資料請求
          </a>
        </div>
      </div>
    </section>
  );
}
