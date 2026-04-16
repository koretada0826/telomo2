import { useState, useEffect } from 'react';

export default function FixedCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-50 sm:hidden transition-transform duration-300 ${show ? 'translate-y-0' : 'translate-y-full'}`}>
      <div className="bg-white/95 backdrop-blur-sm border-t border-[#e5e5e5] px-4 py-2.5 flex gap-2.5">
        <a href="#document-request" className="flex-1 inline-flex items-center justify-center bg-black text-white text-[12px] font-bold py-3 rounded-[96px] no-underline">
          資料請求
        </a>
        <a href="#contact-form" className="flex-1 inline-flex items-center justify-center bg-[#41ac86] text-white text-[12px] font-bold py-3 rounded-[96px] no-underline">
          お問い合わせ
        </a>
      </div>
    </div>
  );
}
