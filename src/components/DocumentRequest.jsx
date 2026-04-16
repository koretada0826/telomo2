import { useState } from 'react';

export default function DocumentRequest() {
  const [info, setInfo] = useState({ name: '', company: '', department: '', phone: '', email: '', note: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Document request submitted:', info);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="document-request" className="py-16 sm:py-24 px-5 sm:px-10 bg-white">
        <div className="max-w-[560px] mx-auto text-center">
          <div className="w-14 h-14 rounded-full bg-[#41ac86] text-white text-[20px] flex items-center justify-center mx-auto mb-5">✓</div>
          <p className="text-[24px] sm:text-[28px] font-black text-black mb-3">資料請求を受け付けました</p>
          <p className="text-[14px] text-[#4d4d4d]">ご登録のメールアドレス宛に資料をお送りします。</p>
        </div>
      </section>
    );
  }

  const fields = [
    { label: 'お名前', key: 'name', type: 'text', placeholder: '例：山田 太郎', required: true },
    { label: '会社名', key: 'company', type: 'text', placeholder: '例：株式会社○○○○', required: true },
    { label: '部署・役職', key: 'department', type: 'text', placeholder: '例：営業部 部長', required: false },
    { label: '電話番号', key: 'phone', type: 'tel', placeholder: '例：09012345678', required: true },
    { label: 'メールアドレス', key: 'email', type: 'email', placeholder: '例：sample@example.com', required: true },
  ];

  return (
    <section id="document-request" className="py-16 sm:py-24 px-5 sm:px-10 bg-[#f7f7f7]">
      <div className="max-w-[720px] mx-auto">
        <div className="fade-in text-center mb-8">
          <p className="text-[12px] text-[#41ac86] tracking-[0.25em] font-bold mb-3">DOCUMENT REQUEST</p>
          <h2 className="text-[28px] sm:text-[36px] lg:text-[40px] font-black text-black leading-[1.3] tracking-[0.02em] mb-3">
            資料請求
          </h2>
          <p className="text-[14px] sm:text-[15px] text-[#4d4d4d] leading-[1.9]">
            サービス概要・料金・導入事例をまとめた資料をお送りします。
            <br className="hidden sm:block" />
            下記フォームにご入力ください（所要1分）。
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="fade-in bg-white border border-[#e5e5e5] rounded-[16px] p-6 sm:p-10 shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
        >
          <div className="space-y-4 sm:space-y-5 mb-5">
            {fields.map((f) => (
              <div key={f.key}>
                <label className="flex items-center gap-2 text-[12px] font-bold text-black mb-1.5">
                  {f.label}
                  {f.required ? (
                    <span className="text-[10px] font-bold text-white bg-[#41ac86] px-1.5 py-[1px] rounded-[3px]">必須</span>
                  ) : (
                    <span className="text-[10px] font-bold text-[#999] bg-[#eee] px-1.5 py-[1px] rounded-[3px]">任意</span>
                  )}
                </label>
                <input
                  type={f.type}
                  required={f.required}
                  value={info[f.key]}
                  onChange={(e) => setInfo((prev) => ({ ...prev, [f.key]: e.target.value }))}
                  placeholder={f.placeholder}
                  className="w-full px-4 py-3.5 rounded-[10px] border-2 border-[#e5e5e5] text-[14px] text-black bg-[#fafafa] focus:outline-none focus:border-[#41ac86] focus:bg-white transition-colors placeholder:text-[#ccc]"
                />
              </div>
            ))}
          </div>

          <div className="mb-6">
            <label className="flex items-center gap-2 text-[12px] font-bold text-black mb-1.5">
              ご質問・ご要望
              <span className="text-[10px] font-bold text-[#999] bg-[#eee] px-1.5 py-[1px] rounded-[3px]">任意</span>
            </label>
            <textarea
              rows={4}
              value={info.note}
              onChange={(e) => setInfo((prev) => ({ ...prev, note: e.target.value }))}
              placeholder="導入時期・想定コール数・課題など、お気軽にご記入ください"
              className="w-full px-4 py-3 rounded-[10px] border-2 border-[#e5e5e5] text-[14px] text-black bg-[#fafafa] focus:outline-none focus:border-[#41ac86] focus:bg-white transition-colors placeholder:text-[#ccc] resize-none"
            />
          </div>

          <button type="submit" className="btn-accent w-full text-center cursor-pointer text-[14px]">
            資料を受け取る
          </button>

          <p className="text-[11px] text-[#999] mt-4 text-center leading-[1.7]">
            入力情報は資料送付・サービスのご案内にのみ使用し、第三者に提供することはありません。
          </p>
        </form>
      </div>
    </section>
  );
}
