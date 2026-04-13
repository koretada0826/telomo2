export default function FinalCTA() {
  return (
    <section
      className="py-16 sm:py-24 px-5 sm:px-10 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2d1a0a 50%, #3d1f00 100%)',
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
      <div className="absolute top-0 left-0 w-full h-full opacity-20" style={{ background: 'radial-gradient(ellipse at 30% 50%, #f55f00 0%, transparent 60%)' }} />
      <div className="relative z-10 max-w-[800px] mx-auto text-center">
        <p className="fade-in text-[12px] text-[#f55f00] tracking-[0.15em] font-bold mb-3">テレモ</p>
        <h2
          className="fade-in text-[24px] sm:text-[32px] lg:text-[38px] font-black text-white leading-[1.4] tracking-[0.04em] mb-3"
          style={{ textShadow: '0 2px 12px rgba(0,0,0,0.9), 0 0 24px rgba(0,0,0,0.6)' }}
        >
          営業のプロが作った
          <br />
          日本一正直な営業代行
        </h2>
        <p
          className="fade-in text-[14px] text-white/85 mb-4"
          style={{ textShadow: '0 1px 8px rgba(0,0,0,0.9)' }}
        >
          かけた分だけ、全部見える。それがテレモです。
        </p>
        <div className="fade-in grid grid-cols-3 gap-4 max-w-[400px] mx-auto mb-8">
          <div className="text-center">
            <p className="text-[24px] font-bold text-[#f55f00]">4,700</p>
            <p className="text-[10px] text-white/40">コール/月</p>
          </div>
          <div className="text-center">
            <p className="text-[24px] font-bold text-[#f55f00]">14<span className="text-[14px]">万</span></p>
            <p className="text-[10px] text-white/40">月額</p>
          </div>
          <div className="text-center">
            <p className="text-[24px] font-bold text-[#f55f00]">100<span className="text-[14px]">%</span></p>
            <p className="text-[10px] text-white/40">開示</p>
          </div>
        </div>
        <div className="fade-in flex flex-col sm:flex-row gap-3 justify-center">
          <a href="#contact-form" className="btn-accent text-center text-[14px]">
            まずは10〜15分だけ話しましょう
          </a>
          <a
            href="#document-request"
            className="btn-primary text-center text-[14px] !text-white"
            style={{ boxShadow: '0 4px 18px rgba(0,0,0,0.55), 0 0 0 2px rgba(255,255,255,0.18)' }}
          >
            資料請求
          </a>
        </div>
      </div>
    </section>
  );
}
