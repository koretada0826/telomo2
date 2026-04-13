export default function FinalCTA() {
  return (
    <section
      className="py-16 sm:py-24 px-5 sm:px-10 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2d1a0a 50%, #3d1f00 100%)',
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full opacity-15" style={{ background: 'radial-gradient(ellipse at 30% 50%, #f55f00 0%, transparent 60%)' }} />
      <div className="relative z-10 max-w-[800px] mx-auto text-center">
        <p className="fade-in text-[12px] text-[#f55f00] tracking-[0.15em] font-bold mb-3">テレモ</p>
        <h2 className="fade-in text-[24px] sm:text-[32px] lg:text-[38px] font-bold text-white leading-[1.4] tracking-[0.04em] mb-3">
          営業のプロが作った、
          <br />
          日本一正直な営業代行
        </h2>
        <p className="fade-in text-[14px] text-white/60 mb-4">
          かけた分だけ、全部見える。それがテレモです。
        </p>
        <div className="fade-in grid grid-cols-3 gap-4 max-w-[400px] mx-auto mb-8">
          <div className="text-center">
            <p className="text-[24px] font-bold text-white">4,700</p>
            <p className="text-[10px] text-white/40">コール/月</p>
          </div>
          <div className="text-center">
            <p className="text-[24px] font-bold text-white">14<span className="text-[14px]">万</span></p>
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
          <a href="#contact-form" className="btn-secondary text-center text-[14px] border-white/40 text-white/90 hover:bg-white hover:text-black hover:border-white">
            資料請求
          </a>
        </div>
      </div>
    </section>
  );
}
