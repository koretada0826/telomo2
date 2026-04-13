import { useState, useEffect, useRef } from 'react';

function CountUp({ target, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1500;
          const steps = 40;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  const formatted = count.toLocaleString();
  return <span ref={ref}>{formatted}{suffix}</span>;
}

const painPoints = [
  {
    num: '01',
    label: '成果ゼロなのに、\nお金だけ取られた',
    detail: '月額30万円以上を払い続けたのに、\nアポは1件もなし。\n「もう少し続ければ成果が出ます」\nと言われ続けた。',
    solution: 'テレモは月間4,700コールを保証。何件かけて、何件つながって、何件アポが取れたか。すべての数字が見えるから、「続ける価値があるか」を自分で判断できます。',
    conclusion: 'だから、続けるかどうかを"感覚"ではなく判断できます',
    extras: [
      'コール数→接続数→商談数まで全て可視化',
      '無駄なコストがどこで発生しているか明確',
      '続けるべきか、やめるべきか即判断できる',
    ],
    checks: [
      'コール数・接続数・アポ数を毎日共有',
      '実行量が見えるから、成果の判断が可能',
      '「本当にやっているのか」の不安がゼロに',
    ],
    img: '/img/pain-01.jpg',
    gradient: 'linear-gradient(135deg, #1a1208 0%, #2d1a08 50%, #1a1208 100%)',
  },
  {
    num: '02',
    label: '何をしてるか、\nまったくわからない',
    detail: 'レポートは月1回の簡単なPDFだけ。\nどこに何件かけたのか、\n何を話したのか、\nすべてがブラックボックス。',
    solution: 'テレモは全コールのログと録音を100%開示。いつ・誰に・何を話したか、リアルタイムで確認できます。「何やってるかわからない」は、もう起きません。',
    conclusion: 'だから、「何をしているか」が手に取るようにわかります',
    extras: [
      'いつ・誰に・何を話したかがすべて残る',
      '営業の質を自分の目で確認できる',
      '外注先の動きが100%透明になる',
    ],
    checks: [
      '全コールの録音データをそのまま共有',
      'コール先・通話時間・結果を一覧で確認',
      'ブラックボックスを完全に排除',
    ],
    img: '/img/pain-02.jpg',
    gradient: 'linear-gradient(135deg, #0a0a1a 0%, #0d1528 50%, #0a0a1a 100%)',
  },
  {
    num: '03',
    label: '報告がざっくりすぎて\n信用できない',
    detail: '「今月は〇件コールしました」\nだけの報告。\n接続率も通話内容も不明で、\n本当にやっているのか疑問だった。',
    solution: 'テレモはコール時刻・相手先・通話時間・結果をすべて記録。接続率・アポ率もリアルタイムで共有。数字で語るから、信頼できます。',
    conclusion: 'だから、報告を"信じる"必要がなくなります',
    extras: [
      '数字がすべてを語るから、信頼の根拠がある',
      '感覚ではなくデータで判断できる',
      '報告の曖昧さに悩むことがなくなる',
    ],
    checks: [
      '時刻・相手先・通話時間・結果を全記録',
      '接続率・アポ率を自動集計して共有',
      '曖昧な報告が一切なくなる仕組み',
    ],
    img: '/img/pain-03.jpg',
    gradient: 'linear-gradient(135deg, #1a1410 0%, #281c10 50%, #1a1410 100%)',
  },
  {
    num: '04',
    label: '辞めたいのに、\n辞められない',
    detail: '最低契約期間6ヶ月。\n成果が出なくても解約できず、\n無駄なコストを\n払い続けるしかなかった。',
    solution: 'テレモは最低契約期間なし。初期費用もなし。合わなければいつでも解約OK。リスクゼロで始められます。',
    conclusion: 'だから、始めるリスクがゼロになります',
    extras: [
      '初期費用なしで明日から始められる',
      '成果が出なければすぐ止められる',
      '「試す」ことにリスクがない構造',
    ],
    checks: [
      '初期費用0円で導入のハードルなし',
      '最低契約期間なし、いつでも解約可能',
      '成果が出なければ止められる安心感',
    ],
    img: '/img/pain-04.jpg',
    gradient: 'linear-gradient(135deg, #1a0a0a 0%, #280d0d 50%, #1a0a0a 100%)',
  },
];

const comparisons = [
  { item: '月額費用', others: '30〜80万円', telemo: '14万円' },
  { item: 'コール数', others: '非公開が多い', telemo: '4,700コール保証' },
  { item: 'ログ開示', others: '一部 or なし', telemo: '全コール100%開示' },
  { item: '初期費用', others: '10〜30万円', telemo: '0円' },
  { item: '契約期間', others: '3〜6ヶ月縛り', telemo: '縛りなし' },
  { item: 'レポート', others: '月1回の概要のみ', telemo: 'リアルタイム共有' },
];

// SVG laurel wreath - rich golden
const Laurel = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Left branch */}
    <path d="M50 170 C42 150,38 130,40 110 C41 100,44 92,50 86 C47 96,46 108,48 120 C50 132,54 150,50 170Z" fill="#c9a84c" opacity="0.35"/>
    <path d="M42 160 C36 142,30 120,34 98 C36 88,40 80,46 74 C42 84,40 96,42 108 C44 122,48 142,42 160Z" fill="#c9a84c" opacity="0.25"/>
    <path d="M56 165 C50 148,46 128,48 108 C50 98,54 90,60 84 C56 94,54 106,56 118 C58 130,60 148,56 165Z" fill="#c9a84c" opacity="0.4"/>
    <path d="M36 148 C32 132,26 112,30 90 C32 80,36 72,42 66 C38 78,36 92,38 104 C40 118,38 136,36 148Z" fill="#c9a84c" opacity="0.2"/>
    <path d="M62 158 C58 144,54 126,56 108 C58 98,62 90,68 86 C64 94,62 106,64 116 C66 128,64 144,62 158Z" fill="#c9a84c" opacity="0.3"/>
    {/* Right branch */}
    <path d="M150 170 C158 150,162 130,160 110 C159 100,156 92,150 86 C153 96,154 108,152 120 C150 132,146 150,150 170Z" fill="#c9a84c" opacity="0.35"/>
    <path d="M158 160 C164 142,170 120,166 98 C164 88,160 80,154 74 C158 84,160 96,158 108 C156 122,152 142,158 160Z" fill="#c9a84c" opacity="0.25"/>
    <path d="M144 165 C150 148,154 128,152 108 C150 98,146 90,140 84 C144 94,146 106,144 118 C142 130,140 148,144 165Z" fill="#c9a84c" opacity="0.4"/>
    <path d="M164 148 C168 132,174 112,170 90 C168 80,164 72,158 66 C162 78,164 92,162 104 C160 118,162 136,164 148Z" fill="#c9a84c" opacity="0.2"/>
    <path d="M138 158 C142 144,146 126,144 108 C142 98,138 90,132 86 C136 94,138 106,136 116 C134 128,136 144,138 158Z" fill="#c9a84c" opacity="0.3"/>
    {/* Bottom tie */}
    <circle cx="100" cy="175" r="4" fill="#c9a84c" opacity="0.3"/>
  </svg>
);

const stats = [
  { label: 'コール保証数', numberVal: 4700, numberSuffix: '', unit: 'コール/月', note: '※業界平均の約2〜5倍の実行量' },
  { label: 'ログ開示率', numberVal: 100, numberSuffix: '', unit: '%', note: '※全コール録音をリアルタイム共有' },
  { label: '月額費用', numberVal: 14, numberSuffix: '', unit: '万円〜', note: '※営業1人雇用の約1/4のコスト' },
];

export default function Experienced() {
  return (
    <section id="experienced" className="pt-8 sm:pt-12 pb-[80px] sm:pb-[120px] px-5 sm:px-10 bg-white">
      <div className="max-w-[1240px] mx-auto">

        {/* ===== Hero-style intro block (like reference) ===== */}
        <div className="fade-in text-center mb-16 sm:mb-20">
          <p className="text-[22px] sm:text-[28px] lg:text-[32px] font-black text-[#f55f00] leading-[1.3] mb-3">
            テレモは
          </p>
          <p className="text-[18px] sm:text-[22px] lg:text-[26px] font-bold text-black leading-[1.6]">
            <span className="inline-block bg-[#f55f00] text-white px-3 py-1 rounded-[6px] text-[16px] sm:text-[20px] font-bold mr-1">スクリプト設計</span>
            から
            <span className="inline-block bg-[#f55f00] text-white px-3 py-1 rounded-[6px] text-[16px] sm:text-[20px] font-bold mx-1">4,700コール実行</span>
            まで行う
          </p>
          <p className="text-[26px] sm:text-[34px] lg:text-[40px] font-black text-black leading-[1.3] mt-2">
            「営業代行サービス」
          </p>
        </div>

        {/* ===== Stats - 3 clean cards ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 mb-20 sm:mb-24">
          {stats.map((s, i) => (
            <div
              key={i}
              className="fade-in text-center relative bg-white rounded-[16px] py-9 px-6 border border-[#eee] shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-6 right-6 h-[3px] rounded-b-full bg-[#f55f00]" />

              <div className="relative z-10">
                <p className="text-[13px] font-bold text-[#f55f00] tracking-[0.08em] mb-3">
                  {s.label}
                </p>

                <p className="text-[44px] sm:text-[50px] font-black leading-none tracking-tight text-[#b8962e]" style={{ fontFamily: '"M PLUS 1p", sans-serif' }}>
                  <CountUp target={s.numberVal} suffix={s.numberSuffix} />
                  <span className="text-[15px] sm:text-[17px] font-bold text-[#999] ml-1">{s.unit}</span>
                </p>

                <p className="text-[11px] text-[#bbb] mt-3 leading-[1.5]">{s.note}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ===== Pain points - reference style ===== */}
        <div className="mb-16 sm:mb-20">
          {/* Big centered heading */}
          <div className="fade-in text-center mb-6">
            <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-black text-black leading-[1.3] tracking-[0.02em]">
              こんな経験、<span className="text-[#f55f00]">ありませんか？</span>
            </h2>
          </div>
          <p className="fade-in text-center text-[16px] sm:text-[18px] text-[#4d4d4d] leading-[2] max-w-[700px] mx-auto mb-12 sm:mb-16">
            営業代行を使ったことがある方なら、一度は感じたことがあるはず。
            <br />
            テレモは、これらすべてを解決するために設計されました。
          </p>

          {/* Feature cards - 画像全面+白カードオーバーレイ */}
          <div className="space-y-16 sm:space-y-20">
            {painPoints.map((p, i) => (
              <div
                key={i}
                className="fade-in relative rounded-[16px] overflow-hidden"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                {/* 背景画像（全面） */}
                <div className="absolute inset-0" style={{ background: p.gradient }} />
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${p.img})`, opacity: 0.75 }} />
                <div className="absolute inset-0 bg-black/15" />

                {/* 左端オレンジバー */}
                <div className="absolute top-0 left-0 w-[4px] h-full bg-[#f55f00] z-20" />

                {/* コンテンツ */}
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[5fr_6fr]">

                  {/* 左: 番号+課題テキスト */}
                  <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10 min-h-[220px] lg:min-h-[400px]">
                    <span className="text-[64px] sm:text-[80px] font-black text-white leading-none" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.5)' }}>
                      {p.num}
                    </span>
                    <p className="text-[17px] sm:text-[20px] text-white leading-[1.8] font-bold" style={{ whiteSpace: 'pre-line' }}>
                      {p.detail}
                    </p>
                  </div>

                  {/* 右: 白カード */}
                  <div className="bg-white/[0.97] backdrop-blur-sm p-6 sm:p-8">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-3 h-3 rounded-full bg-[#f55f00] shrink-0" />
                      <span className="text-[15px] font-bold text-[#f55f00] tracking-[0.05em]">課題 {p.num}</span>
                    </div>

                    <h3 className="text-[24px] sm:text-[28px] font-black text-black mb-5" style={{ whiteSpace: 'pre-line', lineHeight: 1.35 }}>
                      {p.label}
                    </h3>

                    <p className="text-[15px] sm:text-[16px] text-[#4d4d4d] mb-5" style={{ lineHeight: 1.8 }}>
                      {p.solution}
                    </p>

                    <div className="space-y-2.5 mb-5">
                      {p.checks.map((check, j) => (
                        <div key={j} className="flex items-start gap-2.5">
                          <span className="w-[18px] h-[18px] rounded-full bg-[#f55f00] text-white text-[9px] flex items-center justify-center shrink-0 mt-0.5">✓</span>
                          <span className="text-[14px] sm:text-[15px] text-[#333]" style={{ lineHeight: 1.7 }}>{check}</span>
                        </div>
                      ))}
                    </div>

                    <div className="bg-[#f7f7f7] border border-[#eee] rounded-[8px] p-4">
                      <p className="text-[15px] sm:text-[16px] text-black font-bold mb-2" style={{ lineHeight: 1.5 }}>
                        {p.conclusion}
                      </p>
                      <div className="space-y-1.5">
                        {p.extras.map((ex, j) => (
                          <div key={j} className="flex items-start gap-2">
                            <span className="text-[#f55f00] text-[11px] mt-1 shrink-0">●</span>
                            <span className="text-[14px] text-[#4d4d4d]" style={{ lineHeight: 1.6 }}>{ex}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Punchline */}
        <div className="fade-in text-center mb-14 pt-8 sm:pt-12">
          <h3 className="text-[24px] sm:text-[32px] font-bold text-black leading-[1.4] tracking-[0.04em]">
            全部、よくある話です。
          </h3>
          <p className="text-[14px] text-[#4d4d4d] mt-3">だから私たちは、すべてを逆に設計しました。</p>
        </div>

        {/* ===== Comparison table ===== */}
        <div className="fade-in mb-14">
          <p className="text-[12px] text-[#f55f00] tracking-[0.15em] font-bold mb-4 text-center">他社比較</p>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-black">
                  <th className="py-3 pr-4 text-[12px] text-[#999] font-medium w-[30%]"></th>
                  <th className="py-3 px-4 text-[13px] text-[#999] font-medium w-[35%]">他社</th>
                  <th className="py-3 pl-4 text-[13px] text-[#f55f00] font-bold w-[35%]">テレモ</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((c, i) => (
                  <tr key={i} className="border-b border-[#e5e5e5]">
                    <td className="py-3 pr-4 text-[13px] font-bold text-black">{c.item}</td>
                    <td className="py-3 px-4 text-[13px] text-[#999]">{c.others}</td>
                    <td className="py-3 pl-4 text-[13px] text-black font-bold">{c.telemo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ===== Trust ===== */}
        <div
          className="fade-in rounded-[16px] p-7 sm:p-10 mb-10 relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #2d1a0a 100%)' }}
        >
          <div className="absolute top-0 right-0 w-[50%] h-full opacity-15" style={{ background: 'radial-gradient(ellipse at 90% 20%, #f55f00 0%, transparent 70%)' }} />
          <div className="relative z-10">
            <p className="text-[11px] text-[#f55f00] tracking-[0.15em] font-bold mb-2">サービス設計</p>
            <p className="text-[20px] sm:text-[24px] font-bold text-white leading-[1.4]">
              営業経験15年以上のメンバーが設計
            </p>
            <p className="text-[13px] text-white/60 mt-2">
              大手営業代行会社・コールセンター出身のメンバーが、現場の課題をもとにサービスを構築。
              コールスクリプト設計から進捗管理まで、すべてプロが監修しています。
            </p>
          </div>
        </div>

        <div className="fade-in text-center">
          <a href="#contact-form" className="btn-accent text-center text-[14px]">
            現状を教えてください
          </a>
        </div>
      </div>
    </section>
  );
}
