# teremo プロジェクト

テレモ（営業代行サービス）のランディングページ。ポジショニングは **「営業のプロ × AIの実行力 ＝ 最強のAI営業代行」**。

## 技術スタック
- Vite + React 19 + Tailwind CSS v4
- `npm run dev` で起動（http://localhost:5173/）
- `npm run build` / `npm run lint`

## 主要コンポーネント
- `src/components/Header.jsx` — 固定ヘッダー + モバイル用ハンバーガー。ナビ（経験者の方/初めての方/ご利用の流れ/料金）
- `src/components/Hero.jsx` — ファーストビュー。見出し「結果ゼロの営業代行に、もう払わなくていい／AI × 営業のプロで、最高の営業代行を。」＋ 2分岐カード（NEWCOMER=左/EXPERIENCED=右）
- `src/components/Experienced.jsx` — 経験者向けセクション。以下のサブブロックを持つ：
  - `#service-intro`: テレモは… + Laurels (97%/15%/88%)
  - WHAT IS SALES OUTSOURCING: 「そもそも、営業代行サービスって？」説明ブロック（白カード＋黒枠＋オレンジ影）
  - `#pain-points`: 口コミ風ジグザグ吹き出し4つ（01契約の縛り/02ブラックボックス/03ブランド毀損/04営業知見ゼロ）
  - TELEMO ANSWER: 「私たちはこうします」横長リスト4枚
  - HUMAN × AI: 人間の営業 vs テレモ の比較テーブル（白背景）
  - VS OTHER AI SALES: 他AI営業代行との差別化 narrative（3ブロック段落構成＋TELEMO仕切り線＋締め）
- `src/components/Newcomer.jsx` — 初めての方向け。STEPカード3枚（コスト/スピード/集中）＋ CTAボタンのみ
- `src/components/ComparisonTable.jsx` — 人間の営業 vs テレモ（プロ×AI）比較表（単独セクションは削除済み、Experienced内に統合）
- `src/components/Pricing.jsx` / `Flow.jsx` / `FAQ.jsx` / `Footer.jsx` 他

## 訴求ポイント（整合性に注意）
- 月間 4,700コール保証
- 全コール100%ログ開示
- 契約縛りなし
- **営業歴15年、上場企業で営業統括を務めた経験者が設計したAI営業代行**
- 他のAI営業代行とは「設計の起点が違う」（向こうは営業知見ゼロのエンジニア製）
- ※ 月額14万円・初期費用0円 はHero/Experienced/Newcomerからは削除済み（Pricingセクションに集約）

## デザインルール
- アクセントカラー: `#f55f00`（オレンジ）
- 基調: 黒＋白＋オレンジ。タイポグラフィ中心の "editorial" 寄り
- 強調パターン: サブ文（小・グレー） → メイン文（大・黒＋強調語だけオレンジ）
- 装飾は控えめ。絵文字・pulse系アニメは避ける
- 句読点（、。）を省略して改行で区切ることが多い
- `<br />` は `<br className="hidden sm:inline" />` でレスポンシブ化。`pre-line` は `whitespace-normal sm:whitespace-pre-line` で
- 文字サイズは `src/index.css` の `body { font-size }` を breakpoint 別（16/17/18px）で調整
- "emerge from nothing" エフェクト: `.fade-in` に scale + blur + slide を設定済み（index.css）

## レイアウトの鉄則
- ジグザグ・非対称配置はOK。ただし吹き出しや要素が被らないこと
- 左右2カラムの zigzag では col-span-6 + col-start-1 / col-start-7 で列を完全分離し、小さい gap-x を足す
- モバイル（md未満）では縦積みに自動フォールバック

## Anchor ID とナビ
- Hero 2分岐ボタン
  - はじめての方 → `#service-intro`
  - 経験者向け → `#pain-points`
- Header nav: `#experienced` / `#newcomer` / `#flow` / `#pricing`
- `scroll-mt-[80px]` をジャンプ先に付与してヘッダー分オフセット

## Git remote
- `origin` = https://github.com/koretada0826/teremo.git（現在のghデフォルトアカウントでは403）
- `kazujp` = https://github.com/kazujp225/telomo.git（"telomo"、eなし）
- `koretada2` = https://github.com/koretada0826/telomo2.git（PATトークン必要、kazujp225では403）
- push時は `git push kazujp main` と `git push koretada2 main`（koretada2はPATトークンでURL直push）
- 公開リンク: https://github.com/kazujp225/telomo / https://github.com/koretada0826/telomo2
