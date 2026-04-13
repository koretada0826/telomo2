export default function Pricing() {
  return (
    <section id="pricing" className="py-16 sm:py-24 px-5 sm:px-10 bg-[#f7f7f7]">
      <div className="max-w-[800px] mx-auto text-center">
        <p className="fade-in text-[12px] text-[#f55f00] tracking-[0.15em] font-bold mb-3">料金プラン</p>
        <h2 className="fade-in text-[24px] sm:text-[32px] font-bold text-black leading-[1.4] tracking-[0.04em] mb-10">
          シンプルに、1プランだけ。
        </h2>

        <div className="fade-in bg-white border-2 border-[#e5e5e5] rounded-[20px] p-7 sm:p-10">
          <p className="text-[12px] text-[#999] tracking-[0.1em] mb-5">月額固定</p>
          <p className="text-[56px] sm:text-[72px] font-bold text-black leading-none tracking-tight">
            14<span className="text-[24px] sm:text-[28px] font-medium text-[#4d4d4d] ml-1">万円</span>
          </p>
          <p className="text-[12px] text-[#999] mt-1 mb-8">（税別）</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-[400px] mx-auto text-left mb-8">
            {[
              '月間4,700コール保証',
              '全コールログ開示',
              '初期費用なし',
              '最低契約期間なし',
              '専任担当者配置',
              'スクリプト設計込み',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-[#f55f00] text-white text-[10px] flex items-center justify-center shrink-0">✓</span>
                <span className="text-[13px] text-black font-medium">{item}</span>
              </div>
            ))}
          </div>

          <div className="bg-[#fef1e7] rounded-[12px] px-5 py-4 mb-8">
            <p className="text-[13px] text-[#f55f00] font-bold">
              営業1人を雇う費用（月50〜80万円）の約1/4。
            </p>
            <p className="text-[12px] text-[#4d4d4d] mt-1">
              採用・教育・管理コストも一切不要です。
            </p>
          </div>

          <a href="#contact-form" className="btn-accent text-center text-[14px]">
            まずは10〜15分だけ話しましょう
          </a>
        </div>
      </div>
    </section>
  );
}
