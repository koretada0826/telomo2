const flowSteps = [
  {
    num: 'STEP 01',
    title: '無料相談（10〜15分）',
    desc: '現状の営業体制や課題をヒアリング。テレモが合うかどうか正直にお伝えします。',
  },
  {
    num: 'STEP 02',
    title: 'ご提案・お見積り',
    desc: 'ターゲットリスト・スクリプト・KPIを設計。ご納得いただけた場合のみ契約へ。',
  },
  {
    num: 'STEP 03',
    title: 'コール開始',
    desc: '契約後最短5営業日でコール開始。専任チームが月間4,700コールを実行します。',
  },
  {
    num: 'STEP 04',
    title: 'レポート・改善',
    desc: '全コールログをリアルタイム共有。データをもとにスクリプトやリストを継続改善。',
  },
];

export default function Flow() {
  return (
    <section id="flow" className="py-16 sm:py-24 px-5 sm:px-10 bg-white">
      <div className="max-w-[1240px] mx-auto">
        <p className="fade-in text-[12px] text-[#f55f00] tracking-[0.15em] font-bold mb-3 text-center">
          ご利用の流れ
        </p>
        <h2 className="fade-in text-[24px] sm:text-[32px] font-bold text-black leading-[1.4] tracking-[0.04em] mb-10 text-center">
          最短5営業日でコール開始
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {flowSteps.map((s, i) => (
            <div
              key={i}
              className="fade-in relative bg-[#f7f7f7] rounded-[16px] p-6"
              style={{ transitionDelay: `${i * 0.18}s` }}
            >
              <p className="text-[11px] text-[#f55f00] font-bold tracking-[0.1em] mb-3">{s.num}</p>
              <p className="text-[16px] font-bold text-black mb-2 leading-[1.4]">{s.title}</p>
              <p className="text-[12px] text-[#4d4d4d] leading-[1.7]">{s.desc}</p>
              {i < flowSteps.length - 1 && (
                <span className="hidden lg:block absolute top-1/2 -right-3 text-[#f55f00] text-[18px] -translate-y-1/2">→</span>
              )}
            </div>
          ))}
        </div>

        <div className="fade-in text-center mt-10">
          <a href="#contact-form" className="btn-accent text-center text-[14px]">
            まずは10〜15分だけ話しましょう
          </a>
        </div>
      </div>
    </section>
  );
}
