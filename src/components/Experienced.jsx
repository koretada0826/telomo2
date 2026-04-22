import { useState, useEffect, useRef } from 'react';
import AchievementsAwards from './AchievementsAwards';

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

const painVoices = [
  {
    tag: '契約の縛り',
    quote: '半年払ってもアポは片手で数えるほど。解約しても請求書だけ届き続けた。',
    author: '製造業 / 取締役',
    answer: '初期契約6ヶ月、以降6ヶ月自動更新。PDCA期間を確保した合理的な設計。',
    answerPoints: ['6ヶ月契約', '自動更新', '解約料ゼロ'],
  },
  {
    tag: 'ブラックボックス',
    quote: '月1回のサマリーPDFだけ。\n何を話したか全く見えない。',
    author: 'IT / マーケ責任者',
    answer: '全コール録音を100%開示。いつ・誰に・何を話したか即確認可能。',
    answerPoints: ['全録音開示', 'コール一覧', 'ダッシュボード'],
  },
  {
    tag: 'ブランド毀損',
    quote: '後から録音を聞いて愕然。\n粘る強引トークを、うちの名前で。',
    author: 'SaaS / 事業責任者',
    answer: '営業経験15年のプロがスクリプト設計。毎日の録音で品質管理。',
    answerPoints: ['プロ設計', '毎日レビュー', 'ブランド保全'],
  },
  {
    tag: '営業知見ゼロ',
    quote: 'AI営業を使ってみたら、\n作ったのは営業素人のエンジニア。',
    author: 'スタートアップ / 代表',
    answer: '営業経験15年以上のプロが設計から実行まで。現場を知る人間が動かす。',
    answerPoints: ['プロが運営', '15年の現場経験', '人による実行'],
  },
];


// CASE別の装飾SVG (左パネルの背景に表示) - 編集デザイン風アイコン
const painIcons = {
  // 01: 下落グラフ + 流れ落ちるお金
  '01': (
    <svg viewBox="0 0 240 240" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="pi1-orange" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5cc9a3" />
          <stop offset="100%" stopColor="#359471" />
        </linearGradient>
      </defs>
      {/* 紙幣 */}
      <g transform="rotate(-12 60 70)">
        <rect x="30" y="40" width="80" height="44" rx="3" stroke="rgba(255,255,255,0.22)" strokeWidth="2" fill="rgba(255,255,255,0.04)" />
        <circle cx="70" cy="62" r="11" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" fill="none" />
        <text x="70" y="66" textAnchor="middle" fontSize="14" fill="rgba(255,255,255,0.55)" fontWeight="800">¥</text>
        <line x1="38" y1="48" x2="50" y2="48" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
        <line x1="38" y1="76" x2="50" y2="76" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
        <line x1="92" y1="48" x2="104" y2="48" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
        <line x1="92" y1="76" x2="104" y2="76" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
      </g>
      {/* 飛んでいくコイン */}
      <g>
        <circle cx="155" cy="55" r="11" fill="url(#pi1-orange)" opacity="0.95" />
        <text x="155" y="60" textAnchor="middle" fontSize="14" fill="#fff" fontWeight="900">¥</text>
        <path d="M165 50 Q175 35 188 35" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" strokeDasharray="3 3" fill="none" />
      </g>
      <g opacity="0.7">
        <circle cx="195" cy="38" r="7" fill="#41ac86" />
        <text x="195" y="42" textAnchor="middle" fontSize="9" fill="#fff" fontWeight="900">¥</text>
      </g>
      <g opacity="0.5">
        <circle cx="218" cy="22" r="5" fill="#41ac86" />
      </g>

      {/* 下落グラフ */}
      <g transform="translate(20 130)">
        {/* 軸 */}
        <line x1="0" y1="0" x2="0" y2="80" stroke="rgba(255,255,255,0.25)" strokeWidth="2" strokeLinecap="round" />
        <line x1="0" y1="80" x2="200" y2="80" stroke="rgba(255,255,255,0.25)" strokeWidth="2" strokeLinecap="round" />
        {/* 棒グラフ (右に行くほど低い = 成果減少) */}
        <rect x="14" y="14" width="20" height="66" fill="rgba(255,255,255,0.2)" />
        <rect x="50" y="32" width="20" height="48" fill="rgba(255,255,255,0.18)" />
        <rect x="86" y="46" width="20" height="34" fill="rgba(255,255,255,0.16)" />
        <rect x="122" y="58" width="20" height="22" fill="rgba(255,255,255,0.14)" />
        <rect x="158" y="70" width="20" height="10" fill="url(#pi1-orange)" />
        {/* 下向き矢印（オレンジ） */}
        <path d="M14 4 L172 70" stroke="url(#pi1-orange)" strokeWidth="3" strokeLinecap="round" />
        <path d="M165 60 L172 70 L160 70" fill="url(#pi1-orange)" />
      </g>
    </svg>
  ),

  // 02: ブラックボックス (鍵付き) + 中身が見えない目
  '02': (
    <svg viewBox="0 0 240 240" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="pi2-orange" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5cc9a3" />
          <stop offset="100%" stopColor="#359471" />
        </linearGradient>
      </defs>
      {/* 大きな箱 */}
      <g>
        <path d="M55 80 L185 80 L185 200 L55 200 Z"
          stroke="rgba(255,255,255,0.22)" strokeWidth="2.5" fill="rgba(255,255,255,0.04)" strokeLinejoin="round" />
        {/* 箱の蓋 */}
        <path d="M40 65 L200 65 L185 80 L55 80 Z"
          stroke="rgba(255,255,255,0.22)" strokeWidth="2.5" fill="rgba(255,255,255,0.06)" strokeLinejoin="round" />
        {/* 蓋の南京錠 */}
        <g transform="translate(108 50)">
          <rect x="0" y="6" width="24" height="20" rx="3" fill="url(#pi2-orange)" />
          <path d="M5 6 L5 0 Q5 -8 12 -8 Q19 -8 19 0 L19 6"
            stroke="url(#pi2-orange)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <circle cx="12" cy="14" r="2" fill="#fff" />
        </g>
      </g>

      {/* 中央に閉じた目 (見えない) */}
      <g transform="translate(120 140)">
        <path d="M-32 0 Q0 -18 32 0 Q0 18 -32 0 Z" stroke="rgba(255,255,255,0.4)" strokeWidth="2.5" fill="none" />
        {/* 斜線で閉じた目を表現 */}
        <line x1="-32" y1="0" x2="32" y2="0" stroke="rgba(255,255,255,0.4)" strokeWidth="2.5" strokeLinecap="round" />
        {/* 斜め禁止線 */}
        <line x1="-40" y1="-12" x2="40" y2="12" stroke="url(#pi2-orange)" strokeWidth="3" strokeLinecap="round" />
      </g>

      {/* ?マーク (箱の右下) */}
      <g transform="translate(160 175)">
        <circle cx="0" cy="0" r="14" fill="url(#pi2-orange)" />
        <text x="0" y="5" textAnchor="middle" fontSize="18" fill="#fff" fontWeight="900">?</text>
      </g>

      {/* 散らばる小さな?（ノイズ感） */}
      <text x="38" y="115" fontSize="14" fill="rgba(255,255,255,0.18)" fontWeight="900">?</text>
      <text x="200" y="105" fontSize="11" fill="rgba(255,255,255,0.18)" fontWeight="900">?</text>
      <text x="32" y="195" fontSize="10" fill="rgba(255,255,255,0.18)" fontWeight="900">?</text>
    </svg>
  ),

  // 03: ざっくりレポート（数字ぼやけ・グラフ簡素）
  '03': (
    <svg viewBox="0 0 240 240" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="pi3-orange" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5cc9a3" />
          <stop offset="100%" stopColor="#359471" />
        </linearGradient>
        <filter id="pi3-blur">
          <feGaussianBlur stdDeviation="2" />
        </filter>
      </defs>
      {/* 後ろの書類 (ずらして重ね) */}
      <g transform="rotate(-4 120 120)">
        <path d="M50 30 L155 30 L185 60 L185 200 L50 200 Z"
          stroke="rgba(255,255,255,0.12)" strokeWidth="2" fill="rgba(255,255,255,0.03)" strokeLinejoin="round" />
      </g>
      {/* メイン書類 */}
      <g>
        <path d="M58 38 L160 38 L190 68 L190 210 L58 210 Z"
          stroke="rgba(255,255,255,0.25)" strokeWidth="2.5" fill="rgba(255,255,255,0.05)" strokeLinejoin="round" />
        <path d="M160 38 L160 68 L190 68" stroke="rgba(255,255,255,0.25)" strokeWidth="2.5" fill="none" />

        {/* タイトル "REPORT" */}
        <text x="74" y="65" fontSize="11" fill="rgba(255,255,255,0.4)" fontWeight="900" letterSpacing="2">REPORT</text>

        {/* ぼやけた数字 */}
        <g filter="url(#pi3-blur)" opacity="0.6">
          <text x="74" y="100" fontSize="32" fill="#fff" fontWeight="900">12,●●●</text>
        </g>
        <text x="74" y="120" fontSize="9" fill="rgba(255,255,255,0.35)">月間コール数</text>

        {/* 簡素な棒グラフ (3本のみ) */}
        <g transform="translate(74 140)">
          <rect x="0" y="20" width="22" height="40" fill="rgba(255,255,255,0.2)" />
          <rect x="32" y="10" width="22" height="50" fill="rgba(255,255,255,0.2)" />
          <rect x="64" y="28" width="22" height="32" fill="url(#pi3-orange)" />
          <line x1="-4" y1="60" x2="100" y2="60" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
        </g>

        {/* 末尾のチェックなし（不完全感） */}
        <line x1="74" y1="190" x2="160" y2="190" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeDasharray="4 3" />
      </g>

      {/* 虫眼鏡 (右下) */}
      <g transform="translate(165 165)">
        <circle cx="0" cy="0" r="22" fill="rgba(17,17,17,1)" />
        <circle cx="0" cy="0" r="22" stroke="url(#pi3-orange)" strokeWidth="3" fill="none" />
        <text x="0" y="6" textAnchor="middle" fontSize="20" fill="url(#pi3-orange)" fontWeight="900">?</text>
        <line x1="16" y1="16" x2="32" y2="32" stroke="url(#pi3-orange)" strokeWidth="4" strokeLinecap="round" />
      </g>
    </svg>
  ),

  // 04: 鎖と契約書 (縛り)
  '04': (
    <svg viewBox="0 0 240 240" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="pi4-orange" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5cc9a3" />
          <stop offset="100%" stopColor="#359471" />
        </linearGradient>
        <linearGradient id="pi4-chain" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.15)" />
        </linearGradient>
      </defs>
      {/* 契約書 (背景) */}
      <g transform="rotate(-6 120 130)">
        <rect x="55" y="55" width="130" height="160" rx="3"
          stroke="rgba(255,255,255,0.22)" strokeWidth="2.5" fill="rgba(255,255,255,0.05)" />
        <text x="120" y="85" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.5)" fontWeight="900" letterSpacing="2">CONTRACT</text>
        {/* 罫線 */}
        <line x1="70" y1="100" x2="170" y2="100" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
        <line x1="70" y1="113" x2="160" y2="113" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
        <line x1="70" y1="126" x2="155" y2="126" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
        <line x1="70" y1="139" x2="170" y2="139" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
        <line x1="70" y1="152" x2="140" y2="152" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
        {/* "6ヶ月" 印 */}
        <g transform="translate(150 185)">
          <circle r="20" stroke="url(#pi4-orange)" strokeWidth="2.5" fill="none" />
          <text x="0" y="-2" textAnchor="middle" fontSize="9" fill="url(#pi4-orange)" fontWeight="900">最低</text>
          <text x="0" y="10" textAnchor="middle" fontSize="11" fill="url(#pi4-orange)" fontWeight="900">6ヶ月</text>
        </g>
      </g>

      {/* 鎖 (左上から右下にかけて巻き付く) */}
      <g>
        {/* チェーンリンク */}
        {[0, 1, 2, 3, 4, 5].map((i) => {
          const angle = -25 + i * 8;
          const cx = 30 + i * 32;
          const cy = 25 + i * 18;
          return (
            <ellipse
              key={i}
              cx={cx}
              cy={cy}
              rx="11"
              ry="7"
              stroke={i === 5 ? 'url(#pi4-orange)' : 'url(#pi4-chain)'}
              strokeWidth="3"
              fill="none"
              transform={`rotate(${angle} ${cx} ${cy})`}
            />
          );
        })}
      </g>

      {/* 大きな南京錠 (右下) */}
      <g transform="translate(178 168)">
        <rect x="-22" y="-12" width="44" height="36" rx="5" fill="url(#pi4-orange)" />
        <path d="M-15 -12 L-15 -25 Q-15 -38 0 -38 Q15 -38 15 -25 L15 -12"
          stroke="url(#pi4-orange)" strokeWidth="4" fill="none" strokeLinecap="round" />
        <circle cx="0" cy="3" r="3.5" fill="#fff" />
        <line x1="0" y1="6" x2="0" y2="14" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
      </g>
    </svg>
  ),
};

// SVG laurel wreath - premium realistic leaves
const Laurel = () => {
  // 左側の枝: 下から上に向かって葉を配置 (root x,y: 枝の起点)
  const leftLeaves = [
    { cx: 55, cy: 172, rx: 7, ry: 14, rot: -30 },
    { cx: 50, cy: 156, rx: 7.5, ry: 15, rot: -38 },
    { cx: 46, cy: 140, rx: 8, ry: 16, rot: -46 },
    { cx: 44, cy: 122, rx: 8, ry: 16, rot: -56 },
    { cx: 44, cy: 104, rx: 8, ry: 15, rot: -66 },
    { cx: 47, cy: 88,  rx: 7.5, ry: 14, rot: -76 },
    { cx: 53, cy: 74,  rx: 7, ry: 13, rot: -88 },
    { cx: 62, cy: 64,  rx: 6.5, ry: 12, rot: -100 },
  ];
  const rightLeaves = leftLeaves.map((l) => ({ ...l, cx: 200 - l.cx, rot: -l.rot }));

  return (
    <svg viewBox="0 0 200 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f2d97a" />
          <stop offset="50%" stopColor="#c9a84c" />
          <stop offset="100%" stopColor="#8a6f2b" />
        </linearGradient>
        <linearGradient id="goldGradDark" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#c9a84c" />
          <stop offset="100%" stopColor="#6b5320" />
        </linearGradient>
      </defs>

      {/* 左の枝(茎) */}
      <path
        d="M62 170 Q45 130, 55 75"
        stroke="url(#goldGradDark)"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* 右の枝(茎) */}
      <path
        d="M138 170 Q155 130, 145 75"
        stroke="url(#goldGradDark)"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* 左の葉 */}
      {leftLeaves.map((l, i) => (
        <g key={`l${i}`} transform={`rotate(${l.rot} ${l.cx} ${l.cy})`}>
          <ellipse cx={l.cx} cy={l.cy} rx={l.rx} ry={l.ry} fill="url(#goldGrad)" />
          <ellipse
            cx={l.cx}
            cy={l.cy}
            rx={l.rx * 0.45}
            ry={l.ry * 0.8}
            fill="rgba(255,240,180,0.35)"
            transform={`translate(-${l.rx * 0.25} 0)`}
          />
        </g>
      ))}

      {/* 右の葉 */}
      {rightLeaves.map((l, i) => (
        <g key={`r${i}`} transform={`rotate(${l.rot} ${l.cx} ${l.cy})`}>
          <ellipse cx={l.cx} cy={l.cy} rx={l.rx} ry={l.ry} fill="url(#goldGrad)" />
          <ellipse
            cx={l.cx}
            cy={l.cy}
            rx={l.rx * 0.45}
            ry={l.ry * 0.8}
            fill="rgba(255,240,180,0.35)"
            transform={`translate(${l.rx * 0.25} 0)`}
          />
        </g>
      ))}

      {/* 下部リボン結び */}
      <path
        d="M88 175 Q100 168, 112 175"
        stroke="url(#goldGrad)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="100" cy="172" r="3" fill="url(#goldGrad)" />
    </svg>
  );
};

const stats = [
  { label: 'リピート率',     numberVal: 97, numberSuffix: '', unit: '%', note: '※継続ご契約いただいた企業の割合' },
  { label: '最高アポイント率', numberVal: 15, numberSuffix: '', unit: '%', note: '※業界平均の約3倍の獲得率' },
  { label: '決裁者商談率',   numberVal: 88, numberSuffix: '', unit: '%', note: '※創出商談のうち決裁者同席の割合' },
];

export default function Experienced() {
  return (
    <section id="experienced" className="pt-2 sm:pt-4 pb-10 sm:pb-14 px-5 sm:px-10 bg-white">
      <div className="max-w-[1240px] mx-auto">

        {/* ===== Hero-style intro block (like reference) ===== */}
        <div id="service-intro" className="fade-in text-center mb-2 scroll-mt-[80px]">
          <p className="text-[22px] sm:text-[28px] lg:text-[32px] font-black text-[#41ac86] leading-[1.3] mb-3">
            テレモは
          </p>
          <p className="text-[18px] sm:text-[22px] lg:text-[26px] font-bold text-black leading-[1.6]">
            <span className="inline-block bg-[#41ac86] text-white px-3 py-1 rounded-[6px] text-[16px] sm:text-[20px] font-bold mr-1">トークツリー設計</span>
            から
            <span className="inline-block bg-[#41ac86] text-white px-3 py-1 rounded-[6px] text-[16px] sm:text-[20px] font-bold mx-1">8,800コール実行</span>
            まで行う
          </p>
          <p className="text-[26px] sm:text-[34px] lg:text-[40px] font-black text-black leading-[1.3] mt-2">
            「営業代行サービス」
          </p>
          <p className="text-[14px] sm:text-[16px] text-[#888] mt-2">
            ※人で換算すると約2人分
            <br />
            （人の場合：200コール/日 × 22日 = 約4,400コール）
          </p>
        </div>

        {/* ===== Achievements (gold laurel) ===== */}
        <AchievementsAwards />

        {/* ===== 営業代行サービスって何？ 説明ブロック ===== */}
        <div className="fade-in max-w-[960px] mx-auto my-14 sm:my-20 bg-white border-2 border-black p-6 sm:p-10 lg:p-12" style={{ boxShadow: '8px 8px 0 0 #41ac86' }}>
          <p className="inline-flex items-center gap-3 text-[11px] sm:text-[13px] text-[#41ac86] tracking-[0.3em] font-black mb-4">
            <span className="w-8 h-[2px] bg-[#41ac86]" />
            WHAT IS SALES OUTSOURCING
          </p>
          <h3 className="text-[24px] sm:text-[34px] lg:text-[40px] font-black text-black leading-[1.3] mb-6 sm:mb-8">
            そもそも、<span className="text-[#41ac86]">営業代行サービス</span>って？
          </h3>

          <p className="text-[15px] sm:text-[18px] lg:text-[20px] text-[#333] leading-[1.95] font-medium mb-5">
            営業代行とは、
            <span className="font-black text-black">貴社の代わりに新規開拓の営業活動を行うサービス</span>
            のことです。
          </p>
          <p className="text-[14px] sm:text-[17px] text-[#333] leading-[1.95] font-medium mb-6 sm:mb-8">
            ターゲットリストの作成、トークスクリプトの設計、テレアポ・商談打診までを一気通貫で代行。
            <br className="hidden sm:inline" />
            「営業人員を雇う余裕はないが、売上は伸ばしたい」企業の <span className="font-black text-[#41ac86]">最短の解</span> として、多くの会社が導入しています。
          </p>

          {/* 締め */}
          <div className="pt-5 sm:pt-6 border-t border-[#eee]">
            <p className="text-[14px] sm:text-[17px] lg:text-[18px] font-bold text-[#333] leading-[1.8]">
              ただし、営業代行なら何でも良いわけではありません。
              <br className="hidden sm:inline" />
              <span className="font-black text-black">選び方を間違えると、高額な費用だけ取られて成果が出ないことも。</span>
            </p>
            <p className="mt-3 text-[14px] sm:text-[17px] lg:text-[18px] font-bold text-[#333] leading-[1.8]">
              次のセクションでは、そんな「失敗する営業代行」の典型例をお見せします。
            </p>
          </div>
        </div>

        {/* ===== Pain points - reference style ===== */}
        <div id="pain-points" className="mb-16 sm:mb-20 scroll-mt-[80px]">
          {/* Big centered heading */}
          <div className="fade-in text-center mb-6">
            <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-black text-black leading-[1.3] tracking-[0.02em]">
              こんな経験<span className="text-[#41ac86]">ありませんか？</span>
            </h2>
          </div>
          <p className="fade-in text-center text-[16px] sm:text-[18px] text-[#4d4d4d] leading-[2] max-w-[760px] mx-auto mb-10">
            営業代行を使ったことがある方なら、どれか1つは心当たりがあるはず。
            <br className="hidden sm:inline" />
            テレモは、これらすべてを起きないように設計されました。
          </p>


          {/* ===== 吹き出しで口コミ風に表示（ジグザグ配置） ===== */}
          <div className="relative grid grid-cols-1 md:grid-cols-12 gap-x-4 gap-y-0 mb-8 sm:mb-10">
            {painVoices.map((v, i) => {
              // 左右で列を分離 (col1-6 / col7-12)、小さなgapだけ
              // 縦方向は mt でジグザグにオフセット
              const layouts = [
                { col: 'md:col-span-6 md:col-start-1',  offset: 'md:mt-0' },
                { col: 'md:col-span-6 md:col-start-7',  offset: 'md:mt-14' },
                { col: 'md:col-span-6 md:col-start-1',  offset: 'md:-mt-4' },
                { col: 'md:col-span-6 md:col-start-7',  offset: 'md:mt-10' },
              ];
              const L = layouts[i];
              const tailSide = i % 2 === 0 ? 'left' : 'right';
              return (
                <div
                  key={i}
                  className={`fade-in ${L.col} ${L.offset}`}
                  style={{ transitionDelay: `${i * 0.08}s` }}
                >
                  {/* 吹き出し */}
                  <div className="relative bg-white border-2 border-black rounded-[16px] p-4 sm:p-5 pt-8 sm:pt-9 shadow-[4px_4px_0_0_#41ac86]">
                    {/* 右上タグ（吹き出し内に収める） */}
                    <span className="absolute top-2 right-3 bg-[#41ac86] text-white text-[10px] sm:text-[11px] font-black tracking-[0.2em] px-3 py-1 rounded-full">
                      {v.tag}
                    </span>

                    {/* クォート */}
                    <span
                      className="absolute top-2 left-3 text-[46px] sm:text-[56px] leading-none text-[#41ac86]/20 select-none pointer-events-none"
                      style={{ fontFamily: '"Noto Serif JP", serif' }}
                    >
                      “
                    </span>

                    <p
                      className="relative pl-5 sm:pl-6 pt-1 text-[15px] sm:text-[20px] lg:text-[22px] text-black leading-[1.75] font-bold whitespace-pre-line tracking-[0.01em] text-balance"
                      style={{ fontFamily: '"Noto Serif JP", serif' }}
                    >
                      {v.quote}
                    </p>

                    {/* 吹き出しのしっぽ（発言者の向きに応じて） */}
                    {tailSide === 'left' ? (
                      <>
                        <span className="absolute -bottom-[14px] left-9 w-0 h-0" style={{
                          borderLeft: '12px solid transparent',
                          borderRight: '12px solid transparent',
                          borderTop: '14px solid #000',
                        }} />
                        <span className="absolute -bottom-[10px] left-[42px] w-0 h-0" style={{
                          borderLeft: '8px solid transparent',
                          borderRight: '8px solid transparent',
                          borderTop: '10px solid #fff',
                        }} />
                      </>
                    ) : (
                      <>
                        <span className="absolute -bottom-[14px] right-9 w-0 h-0" style={{
                          borderLeft: '12px solid transparent',
                          borderRight: '12px solid transparent',
                          borderTop: '14px solid #000',
                        }} />
                        <span className="absolute -bottom-[10px] right-[42px] w-0 h-0" style={{
                          borderLeft: '8px solid transparent',
                          borderRight: '8px solid transparent',
                          borderTop: '10px solid #fff',
                        }} />
                      </>
                    )}
                  </div>

                  {/* 発言者 */}
                  <div className={`flex items-center mt-3 ${tailSide === 'left' ? 'pl-6 justify-start' : 'pr-6 justify-end'}`}>
                    <span className="text-[16px] sm:text-[18px] lg:text-[19px] font-black text-[#222]">
                      {v.author} 様
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ===== 仕切り：だから、私たちはこうします ===== */}
          <div className="fade-in relative text-center mt-12 sm:mt-16 mb-10 sm:mb-14 pt-10 sm:pt-14 pb-4 sm:pb-6">
            {/* 背景の巨大 ANSWER 文字 */}
            <span
              className="pointer-events-none absolute inset-0 flex items-center justify-center text-[80px] sm:text-[140px] lg:text-[180px] font-black leading-none tracking-[-0.02em] text-[#41ac86]/5 select-none overflow-hidden"
              style={{ fontFamily: '"M PLUS 1p", sans-serif' }}
              aria-hidden="true"
            >
              ANSWER
            </span>

            <div className="relative">
              <p className="inline-flex items-center gap-3 text-[12px] sm:text-[14px] text-[#41ac86] tracking-[0.3em] font-black mb-4">
                <span className="w-8 h-[2px] bg-[#41ac86]" />
                TELEMO ANSWER
                <span className="w-8 h-[2px] bg-[#41ac86]" />
              </p>
              <h3 className="text-[30px] sm:text-[44px] lg:text-[56px] font-black leading-[1.2] tracking-[-0.01em]">
                <span className="text-[#41ac86]">私たちはこうします</span>
              </h3>
              <p className="mt-4 sm:mt-5 text-[14px] sm:text-[18px] text-[#555] font-bold">
                「よくある話」を、テレモは
                <br className="sm:hidden" />
                <span className="text-[#41ac86] font-black">起きない仕組みにした</span>のです。
              </p>
            </div>
          </div>

          {/* ===== 解答リスト（縦並び・端的） ===== */}
          <div className="flex flex-col gap-3 sm:gap-4">
            {painVoices.map((v, i) => (
              <div
                key={i}
                className="fade-in flex items-center gap-4 sm:gap-6 bg-white border-2 border-black p-4 sm:p-6"
                style={{
                  transitionDelay: `${i * 0.06}s`,
                  boxShadow: '6px 6px 0 0 #41ac86',
                }}
              >
                {/* 番号 */}
                <span className="shrink-0 inline-flex w-[48px] h-[48px] sm:w-[60px] sm:h-[60px] rounded-full bg-[#41ac86] items-center justify-center text-white text-[16px] sm:text-[20px] font-black">
                  {String(i + 1).padStart(2, '0')}
                </span>

                {/* 中央：タグ + 答え */}
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] sm:text-[12px] font-black text-[#41ac86] tracking-[0.2em] mb-1">
                    {v.tag}
                  </p>
                  <p className="text-[15px] sm:text-[19px] lg:text-[22px] font-black text-black leading-[1.45]">
                    {v.answer.split('。').filter(Boolean).map((s, j, arr) => (
                      <span key={j}>
                        {s}。
                        {j < arr.length - 1 && <br className="sm:hidden" />}
                      </span>
                    ))}
                  </p>
                </div>

                {/* 右：証拠ポイント（md以上で表示） */}
                <div className="hidden md:flex shrink-0 flex-col gap-1 pl-6 border-l border-[#eee] min-w-[180px]">
                  {v.answerPoints.map((pt, j) => (
                    <span key={j} className="inline-flex items-center gap-1.5 text-[12px] lg:text-[13px] text-[#333] font-bold">
                      <svg className="w-3 h-3 text-[#41ac86]" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <path d="M2 6 L5 9 L10 3" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {pt}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* ===== プロ × AI 融合ブロック ===== */}
          <div className="fade-in mt-14 sm:mt-20 bg-white text-black overflow-hidden relative border border-[#eee]">
            {/* 背景装飾 */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.06]"
              style={{ background: 'radial-gradient(circle at 85% 20%, #41ac86 0%, transparent 50%)' }}
            />
            <div className="relative p-6 sm:p-10 lg:p-14">
              {/* ヘッダー */}
              <div className="text-center mb-8 sm:mb-10">
                <p className="inline-flex items-center gap-3 text-[11px] sm:text-[13px] text-[#41ac86] tracking-[0.3em] font-black mb-3">
                  <span className="w-8 h-[2px] bg-[#41ac86]" />
                  HUMAN × AI
                  <span className="w-8 h-[2px] bg-[#41ac86]" />
                </p>
                <h3 className="text-[24px] sm:text-[36px] lg:text-[46px] font-black leading-[1.25] tracking-[-0.01em] text-black">
                  営業歴<span className="text-[#41ac86]">15年</span>のプロが、
                  <br className="hidden sm:inline" />
                  <span className="text-[#41ac86]">AI</span>と融合したらどうなるか。
                </h3>
                <p className="mt-4 sm:mt-5 text-[14px] sm:text-[17px] text-[#555] leading-[1.8] max-w-[720px] mx-auto">
                  プロの現場知見で設計し、AIで実行量・データ・品質を底上げ。
                  <br className="hidden sm:inline" />
                  「人がやる営業」の限界を、テレモはひとつずつ外しました。
                </p>
              </div>

              {/* 人 vs テレモ 比較表 */}
              <div className="overflow-hidden border border-[#e5e5e5]">
                {/* ヘッダー行 */}
                <div className="grid grid-cols-[1.1fr_1fr_1.3fr] items-stretch bg-[#fafafa] border-b border-[#e5e5e5]">
                  <div className="px-4 sm:px-6 py-4 sm:py-5 text-[#999] text-[10px] sm:text-[11px] font-black tracking-[0.2em] uppercase flex items-center justify-center">
                    Item
                  </div>
                  <div className="px-4 sm:px-6 py-4 sm:py-5 text-center border-l border-[#e5e5e5] bg-white">
                    <p className="text-[10px] sm:text-[11px] tracking-[0.2em] font-bold text-[#bbb] mb-1">HUMAN</p>
                    <p className="text-[15px] sm:text-[18px] lg:text-[20px] font-black text-[#555]">人間の営業</p>
                  </div>
                  <div className="px-4 sm:px-6 py-4 sm:py-5 text-center bg-[#41ac86] border-l border-[#41ac86]">
                    <p className="text-[10px] sm:text-[11px] tracking-[0.2em] font-bold text-white/80 mb-1">TELEMO</p>
                    <p className="text-[16px] sm:text-[20px] lg:text-[22px] font-black text-white">プロ × AI</p>
                  </div>
                </div>

                {/* 比較行 */}
                {[
                  { item: '稼働時間',       human: '平日8時間',         telemo: '24時間365日稼働' },
                  { item: 'コール量',       human: '月500〜1,000件',    telemo: '月8,800コール（約2人分）' },
                  { item: '通話ログ',       human: '担当メモのみ',       telemo: '全通話を100%記録' },
                  { item: '会話分析',       human: '担当の感覚',         telemo: 'AIが数値で検出' },
                  { item: '改善サイクル',   human: '個人の経験則',       telemo: '全データから自動学習' },
                  { item: '品質のムラ',     human: '体調・気分で変動',   telemo: '常に一定・再現性あり' },
                ].map((r, i, arr) => (
                  <div
                    key={i}
                    className={`grid grid-cols-[1.1fr_1fr_1.3fr] items-stretch ${
                      i < arr.length - 1 ? 'border-b border-[#eee]' : ''
                    }`}
                  >
                    {/* 項目名 */}
                    <div className="px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-center text-center bg-[#fafafa]">
                      <span className="text-[13px] sm:text-[15px] lg:text-[16px] font-black text-black">
                        {r.item}
                      </span>
                    </div>

                    {/* 人 */}
                    <div className="px-4 sm:px-6 py-4 sm:py-5 border-l border-[#eee] flex items-center justify-center text-center bg-white">
                      <span className="text-[13px] sm:text-[15px] text-[#888] leading-[1.5]">
                        {r.human}
                      </span>
                    </div>

                    {/* テレモ */}
                    <div className="px-4 sm:px-6 py-4 sm:py-5 border-l border-[#c8e8dc] bg-[#f0f9f5] flex items-center justify-center text-center gap-2">
                      <svg className="shrink-0 w-4 h-4 text-[#41ac86]" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M3 8 L7 12 L13 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="text-[13px] sm:text-[15px] lg:text-[17px] font-black text-[#41ac86] leading-[1.4]">
                        {r.telemo}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* フッター強調文 */}
              <p className="mt-10 sm:mt-14 text-center text-[22px] sm:text-[32px] lg:text-[40px] font-black leading-[1.4] tracking-[-0.01em]">
                <span className="text-black">営業のプロ</span>
                <span className="inline-block mx-2 sm:mx-3 text-[#41ac86]">×</span>
                <span className="text-black">AIの実行力</span>
                <br className="sm:hidden" />
                <span className="inline-block mx-2 sm:mx-3 text-[#41ac86]">＝</span>
                <span className="text-[#41ac86]">テレモ</span>
              </p>
            </div>
          </div>

          {/* ===== 他のAI営業代行との違い ===== */}
          <div className="fade-in mt-12 sm:mt-16 bg-[#f0f9f5] border-l-[6px] border-[#41ac86] p-6 sm:p-10 lg:p-12">
            <p className="inline-flex items-center gap-2 text-[11px] sm:text-[13px] text-[#41ac86] tracking-[0.3em] font-black mb-4">
              <span className="w-6 h-[2px] bg-[#41ac86]" />
              VS. OTHER AI SALES
            </p>
            <h4 className="text-[22px] sm:text-[30px] lg:text-[38px] font-black text-black leading-[1.3] mb-8">
              他のAI営業代行と<span className="text-[#41ac86]">一緒にしないでください</span>
            </h4>

            {/* ブロック1: 他社批判 */}
            <div className="mb-7 sm:mb-9">
              <p className="text-[14px] sm:text-[17px] lg:text-[18px] text-[#333] leading-[1.95] font-medium">
                一般的なAI営業は、
                <span className="font-black text-black">エンジニアが作っている</span>。
                <br className="sm:hidden" />
                技術は優れていても、<span className="font-black text-black">営業を知らない</span>。
              </p>
              <p className="mt-3 text-[14px] sm:text-[17px] lg:text-[18px] text-[#333] leading-[1.95] font-medium">
                どれだけ精度が高くても、「何を話すか」「どこで引くか」「どう刺すか」——
                この判断こそが<span className="font-black text-[#41ac86]">営業の急所</span>。
              </p>
              <p className="mt-3 text-[14px] sm:text-[17px] lg:text-[18px] text-[#333] leading-[1.95] font-medium">
                営業を知らない人間が設計した仕組みでは、結局<span className="font-black">成果に繋がらない</span>のです。
              </p>
            </div>

            {/* 仕切り */}
            <div className="flex items-center gap-3 my-6 sm:my-8">
              <span className="h-[2px] flex-1 bg-[#41ac86]/30" />
              <span className="text-[11px] sm:text-[12px] font-black text-[#41ac86] tracking-[0.3em]">TELEMO</span>
              <span className="h-[2px] flex-1 bg-[#41ac86]/30" />
            </div>

            {/* ブロック2: テレモは違う */}
            <div className="mb-7 sm:mb-9">
              <p className="text-[15px] sm:text-[18px] lg:text-[20px] font-black text-black leading-[1.7] mb-3">
                テレモは、違います。
              </p>
              <p className="text-[14px] sm:text-[17px] lg:text-[18px] text-[#333] leading-[1.95] font-medium">
                <span className="font-black text-black">15年以上の営業実績を持つチームが、現場ベースでトーク設計</span>
                しています。
              </p>
              <p className="mt-3 text-[14px] sm:text-[17px] lg:text-[18px] text-[#333] leading-[1.95] font-medium">
                現場で鍛え上げたトークツリー・KPI・改善ロジックに、AIの実行力と分析力を乗せる。
                <br />
                月間8,800コール——人で換算すると約2人分。
              </p>
              <p className="mt-3 text-[14px] sm:text-[17px] lg:text-[18px] text-[#333] leading-[1.95] font-medium">
                「人が設計し、AIが動かし、人が磨く」——
                この順番でしか、売れる営業は再現できません。
              </p>
            </div>

            {/* 締め */}
            <div className="pt-5 sm:pt-6 border-t-2 border-[#41ac86]/30">
              <p className="text-[15px] sm:text-[19px] lg:text-[22px] font-black text-black leading-[1.6]">
                他のAI営業代行と、<span className="text-[#41ac86]">テレモを同じ土俵で比べないでください。</span>
              </p>
              <p className="mt-2 text-[13px] sm:text-[16px] text-[#555] font-bold">
                設計の起点が、そもそも違います。
              </p>
            </div>
          </div>

          {/* ===== トークツリー設計の本質 ===== */}
          <div className="fade-in mt-12 sm:mt-16 bg-white border-2 border-black p-6 sm:p-10 lg:p-12" style={{ boxShadow: '8px 8px 0 0 #41ac86' }}>
            <p className="inline-flex items-center gap-3 text-[11px] sm:text-[13px] text-[#41ac86] tracking-[0.3em] font-black mb-4">
              <span className="w-8 h-[2px] bg-[#41ac86]" />
              TALK TREE DESIGN
            </p>
            <h4 className="text-[22px] sm:text-[30px] lg:text-[38px] font-black text-black leading-[1.3] mb-6 sm:mb-8">
              この仕組みの肝は「<span className="text-[#41ac86]">トークツリーの設計</span>」にすべてある
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-8">
              <div className="flex gap-4 items-start">
                <span className="shrink-0 inline-flex w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] rounded-full bg-[#41ac86] items-center justify-center text-white text-[14px] sm:text-[16px] font-black">01</span>
                <div>
                  <p className="text-[16px] sm:text-[20px] font-black text-black mb-1">設計思想</p>
                  <p className="text-[14px] sm:text-[17px] text-[#333] leading-[1.9] font-medium">
                    営業のプロレベルの<span className="font-black text-black">"無駄のない会話構成"</span>を再現。
                    <br />
                    余計な前置き・曖昧な質問は一切排除しています。
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="shrink-0 inline-flex w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] rounded-full bg-[#41ac86] items-center justify-center text-white text-[14px] sm:text-[16px] font-black">02</span>
                <div>
                  <p className="text-[16px] sm:text-[20px] font-black text-black mb-1">話し方</p>
                  <p className="text-[14px] sm:text-[17px] text-[#333] leading-[1.9] font-medium">
                    トップ営業マンの<span className="font-black text-black">"間・語尾・テンション"</span>を徹底研究。
                    <br />
                    機械的ではない、自然で説得力のある会話を実現します。
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-5 sm:pt-6 border-t border-[#eee]">
              <p className="text-[18px] sm:text-[24px] lg:text-[30px] font-black text-black leading-[1.6]">
                誰でも成果に近づく会話を<span className="text-[#41ac86]">仕組み化</span>しました。
              </p>
            </div>
          </div>

          {/* ===== 成果が出る理由 ===== */}
          <div className="fade-in mt-12 sm:mt-16">
            <div className="text-center mb-8 sm:mb-10">
              <p className="inline-flex items-center gap-3 text-[11px] sm:text-[13px] text-[#41ac86] tracking-[0.3em] font-black mb-3">
                <span className="w-8 h-[2px] bg-[#41ac86]" />
                WHY IT WORKS
                <span className="w-8 h-[2px] bg-[#41ac86]" />
              </p>
              <h4 className="text-[24px] sm:text-[36px] lg:text-[42px] font-black text-black leading-[1.3]">
                営業の本質だけを<span className="text-[#41ac86]">抽出した設計</span>
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: '01', title: '余計な会話は一切しない',
                  mobileLines: ['無駄な雑談・説明はゼロ', '必要な話だけを最短で'],
                  lines: ['目的のない雑談・回りくどい説明はゼロ。', '必要な情報だけを、必要な順番で。'],
                },
                {
                  icon: '02', title: 'YESを取るための流れ',
                  mobileLines: ['YESを取る質問設計', '小さなYESを積み重ねる'],
                  lines: ['相手が「はい」と言いやすい質問設計。', '小さなYESを積み重ねて商談へ導きます。'],
                },
                {
                  icon: '03', title: '温度感の見極め',
                  mobileLines: ['反応から興味度を即判定', '見込み先にだけ集中'],
                  lines: ['相手の反応から興味度を即座に判定。', '見込みのある先だけにリソースを集中。'],
                },
                {
                  icon: '04', title: 'トスまでの最短導線',
                  mobileLines: ['無駄な工程は排除', '最短で商談の場へ'],
                  lines: ['アポイント獲得までの無駄なステップを排除。', '最短ルートで商談の場を作ります。'],
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-center bg-white border-2 border-black py-5 pr-5 pl-5 sm:py-6 sm:pr-6 sm:pl-20" style={{ boxShadow: '4px 4px 0 0 #41ac86', transitionDelay: `${i * 0.06}s` }}>
                  <span className="shrink-0 inline-flex w-[44px] h-[44px] sm:w-[52px] sm:h-[52px] rounded-full bg-black items-center justify-center text-[#41ac86] text-[15px] sm:text-[17px] font-black">{item.icon}</span>
                  <div className="flex-1 text-center">
                    <p className="text-[19px] sm:text-[24px] font-black text-black mb-2">{item.title}</p>
                    <p className="sm:hidden text-[15px] text-[#4d4d4d] leading-[1.8]">
                      {item.mobileLines.map((line, j) => (
                        <span key={j}>
                          {line}
                          {j < item.mobileLines.length - 1 && <br />}
                        </span>
                      ))}
                    </p>
                    <p className="hidden sm:block text-[18px] text-[#4d4d4d] leading-[1.8]">
                      {item.lines.map((line, j) => (
                        <span key={j}>
                          {line}
                          {j < item.lines.length - 1 && <br />}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ===== 下部: セールスブースト文 ===== */}
          <div className="fade-in mt-10 sm:mt-14 text-center">
            <p className="text-[18px] sm:text-[26px] lg:text-[32px] font-black text-black leading-[1.4]">
              「<span className="text-[#41ac86]">払ったのに成果ゼロ</span>」も、
              <br />
              「<span className="text-[#41ac86]">何してるかわからない</span>」も、
              <br />
              テレモでは、<span className="text-[#41ac86]">起きません。</span>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
