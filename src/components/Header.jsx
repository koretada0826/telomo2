import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-[0_1px_12px_rgba(0,0,0,0.08)]' : 'bg-white'
      }`}
    >
      {/* Orange accent bar on scroll */}
      <div
        className={`h-[3px] bg-[#f55f00] transition-opacity duration-300 ${
          scrolled ? 'opacity-100' : 'opacity-0'
        }`}
      />
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-10 flex items-center justify-between h-[70px] sm:h-[80px]">
        {/* Logo */}
        <a href="#" className="text-[22px] sm:text-[28px] font-black tracking-[0.02em] text-black no-underline flex items-center gap-1.5 relative z-10">
          テレモ
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {['経験者の方', '初めての方', '料金', 'ご利用の流れ'].map((label, i) => (
            <a
              key={i}
              href={['#experienced', '#newcomer', '#pricing', '#flow'][i]}
              className="text-[14px] text-[#333] font-bold no-underline px-5 py-2.5 rounded-full bg-[#f8f8f8] hover:bg-[#f0f0f0] hover:text-[#f55f00] transition-all relative group cursor-pointer"
            >
              {label}
              <span className="text-[10px] text-[#999] ml-1 group-hover:text-[#f55f00] transition-colors">∨</span>
              {/* Bottom accent line on hover */}
              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#f55f00] rounded-full transition-all duration-300 group-hover:w-[60%]" />
            </a>
          ))}
        </nav>

        {/* CTA buttons - matching reference exactly */}
        <div className="flex items-center gap-2.5">
          <a
            href="#document-request"
            className="header-pulse-black hidden sm:inline-flex items-center justify-center bg-black text-white text-[13px] font-bold h-[42px] px-7 rounded-[96px] no-underline hover:bg-[#222] transition-colors tracking-[0.03em]"
          >
            資料請求
          </a>
          <a
            href="#contact-form"
            className="header-pulse-orange inline-flex items-center justify-center bg-[#f55f00] text-white text-[13px] font-bold h-[42px] px-7 rounded-[96px] no-underline hover:bg-[#ca4700] transition-colors tracking-[0.03em]"
          >
            お問い合わせ
          </a>
        </div>
      </div>
    </header>
  );
}
