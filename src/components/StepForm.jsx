import { useState } from 'react';

const hearingQuestions = [
  { key: 'hasCallCenter', question: 'コールセンターはありますか？', options: ['はい', 'いいえ'] },
  { key: 'monthlyCallCount', question: '月間のコール数を教えてください', options: ['1,000件未満', '1,000〜3,000件', '3,000〜5,000件', '5,000件以上', 'わからない'] },
  { key: 'connectionRate', question: '現在の接続率はどのくらいですか？', options: ['10%未満', '10〜20%', '20〜30%', '30%以上', 'わからない'] },
  { key: 'phoneType', question: '発信先は携帯・固定のどちらが多いですか？', options: ['携帯が多い', '固定が多い', '半々くらい', 'わからない'] },
  { key: 'teamSize', question: '営業チームの人数を教えてください', options: ['1〜3名', '4〜10名', '11〜30名', '31名以上', 'まだいない'] },
];

export default function StepForm() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [contactInfo, setContactInfo] = useState({ name: '', company: '', phone: '', email: '' });
  const [submitted, setSubmitted] = useState(false);

  const totalSteps = hearingQuestions.length;
  const isHearing = step < totalSteps;
  const isContact = step === totalSteps;

  const selectAnswer = (value) => {
    const q = hearingQuestions[step];
    setAnswers((prev) => ({ ...prev, [q.key]: value }));
    setTimeout(() => setStep((s) => s + 1), 250);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { ...answers, ...contactInfo });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="contact-form" className="py-16 sm:py-24 px-5 sm:px-10 bg-white">
        <div className="max-w-[500px] mx-auto text-center">
          <div className="w-14 h-14 rounded-full bg-[#f55f00] text-white text-[20px] flex items-center justify-center mx-auto mb-5">✓</div>
          <p className="text-[24px] sm:text-[28px] font-bold text-black mb-3">ありがとうございます</p>
          <p className="text-[14px] text-[#4d4d4d]">担当者より24時間以内にご連絡いたします。</p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact-form" className="py-16 sm:py-24 px-5 sm:px-10 bg-white">
      <div className="max-w-[520px] mx-auto">
        <div className="fade-in text-center mb-8">
          <p className="text-[12px] text-[#f55f00] tracking-[0.15em] font-bold mb-2">お問い合わせ</p>
          <h2 className="text-[24px] sm:text-[28px] font-bold text-black leading-[1.4] tracking-[0.04em]">
            まずは状況を教えてください
          </h2>
        </div>

        {/* Progress */}
        <div className="fade-in mb-8">
          <div className="flex items-center justify-between mb-1.5">
            <p className="text-[11px] text-[#999]">{isHearing ? `STEP ${step + 1}` : '最終STEP'} / {totalSteps + 1}</p>
          </div>
          <div className="w-full h-[3px] bg-[#e5e5e5] rounded-full overflow-hidden">
            <div className="h-full bg-[#f55f00] rounded-full transition-all duration-500" style={{ width: `${((isHearing ? step + 1 : totalSteps + 1) / (totalSteps + 1)) * 100}%` }} />
          </div>
        </div>

        {isHearing && (
          <div key={step} className="step-enter step-active">
            <p className="text-[20px] sm:text-[24px] font-bold text-black leading-[1.4] mb-6">{hearingQuestions[step].question}</p>
            <div className="space-y-2.5">
              {hearingQuestions[step].options.map((opt) => (
                <button
                  key={opt}
                  onClick={() => selectAnswer(opt)}
                  className={`w-full text-left px-5 py-4 rounded-[12px] border-2 text-[14px] font-medium transition-all cursor-pointer ${
                    answers[hearingQuestions[step].key] === opt
                      ? 'border-[#f55f00] bg-[#f55f00] text-white'
                      : 'border-[#e5e5e5] bg-[#f7f7f7] text-black hover:border-[#f55f00]'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
            {step > 0 && (
              <button onClick={() => setStep((s) => s - 1)} className="mt-5 text-[12px] text-[#999] hover:text-black transition-colors cursor-pointer bg-transparent border-none">
                ← 前の質問に戻る
              </button>
            )}
          </div>
        )}

        {isContact && (
          <div key="contact" className="step-enter step-active">
            <p className="text-[20px] sm:text-[24px] font-bold text-black leading-[1.4] mb-2">ご状況ありがとうございます。</p>
            <p className="text-[14px] text-[#4d4d4d] mb-8">最適なご提案をさせていただきますので、お時間のご都合を教えてください。</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                { label: 'お名前', key: 'name', type: 'text', placeholder: '例：山田太郎' },
                { label: '会社名', key: 'company', type: 'text', placeholder: '例：株式会社○○○○' },
                { label: '電話番号', key: 'phone', type: 'tel', placeholder: '例：09012345678' },
                { label: 'メールアドレス', key: 'email', type: 'email', placeholder: '例：sample@example.com' },
              ].map((field) => (
                <div key={field.key}>
                  <label className="block text-[12px] font-bold text-black mb-1.5">{field.label}</label>
                  <input
                    type={field.type}
                    required
                    value={contactInfo[field.key]}
                    onChange={(e) => setContactInfo((prev) => ({ ...prev, [field.key]: e.target.value }))}
                    placeholder={field.placeholder}
                    className="w-full px-4 py-3.5 rounded-[10px] border-2 border-[#e5e5e5] text-[14px] text-black bg-[#f7f7f7] focus:outline-none focus:border-[#f55f00] transition-colors placeholder:text-[#ccc]"
                  />
                </div>
              ))}
              <button type="submit" className="btn-accent w-full text-center cursor-pointer mt-4 text-[14px]">日程を調整する</button>
            </form>
            <button onClick={() => setStep((s) => s - 1)} className="mt-4 text-[12px] text-[#999] hover:text-black transition-colors cursor-pointer bg-transparent border-none">
              ← 前の質問に戻る
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
