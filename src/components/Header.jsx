import { useState, useEffect } from 'react';

const navItems = [
  { label: '経験者の方',     href: '#experienced' },
  { label: '初めての方',     href: '#newcomer' },
  { label: 'ご利用の流れ',   href: '#flow' },
  { label: '料金',           href: '#pricing' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-[0_1px_12px_rgba(0,0,0,0.08)]' : 'bg-white'
      }`}
    >
      {/* Orange accent bar on scroll */}
      <div
        className={`h-[3px] bg-[#41ac86] transition-opacity duration-300 ${
          scrolled ? 'opacity-100' : 'opacity-0'
        }`}
      />
      <div className="max-w-[1240px] mx-auto px-4 sm:px-8 lg:px-10 flex items-center justify-between h-[64px] sm:h-[72px] lg:h-[80px]">
        {/* Logo */}
        <a href="#" className="relative z-10 shrink-0">
          <img src="/img/logo.png" alt="テレモ" className="h-[34px] sm:h-[42px] lg:h-[50px] w-auto" style={{ mixBlendMode: 'multiply' }} />
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((n, i) => (
            <a
              key={i}
              href={n.href}
              className="group inline-flex items-center gap-1.5 text-[14px] text-[#333] font-bold no-underline hover:text-[#41ac86] transition-colors cursor-pointer"
            >
              {n.label}
              <svg
                className="w-[8px] h-[8px] text-[#999] group-hover:text-[#41ac86] transition-colors"
                viewBox="0 0 10 10"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M1 3 L5 7 L9 3 Z" />
              </svg>
            </a>
          ))}
        </nav>

        {/* CTA + mobile menu toggle */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          <a
            href="#document-request"
            className="header-pulse-black hidden sm:inline-flex items-center justify-center bg-black text-white text-[12px] lg:text-[13px] font-bold h-[38px] sm:h-[42px] px-5 sm:px-7 rounded-[96px] no-underline hover:bg-[#222] transition-colors tracking-[0.03em]"
          >
            資料請求
          </a>
          <a
            href="#contact-form"
            className="header-pulse-orange inline-flex items-center justify-center bg-[#41ac86] text-white text-[12px] lg:text-[13px] font-bold h-[38px] sm:h-[42px] px-5 sm:px-7 rounded-[96px] no-underline hover:bg-[#359471] transition-colors tracking-[0.03em]"
          >
            お問い合わせ
          </a>

          {/* Hamburger (mobile/tablet) */}
          <button
            type="button"
            aria-label="メニューを開く"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden inline-flex items-center justify-center w-[40px] h-[40px] text-black hover:text-[#41ac86] transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              {menuOpen ? (
                <path d="M6 6 L18 18 M18 6 L6 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
              ) : (
                <>
                  <path d="M3 7 H21" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                  <path d="M3 12 H21" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                  <path d="M3 17 H21" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu drawer */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[64px] sm:top-[72px] bg-white border-t border-[#eee] transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
        style={{ boxShadow: menuOpen ? '0 10px 24px rgba(0,0,0,0.08)' : 'none' }}
      >
        <nav className="flex flex-col py-2">
          {navItems.map((n, i) => (
            <a
              key={i}
              href={n.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-between px-5 py-4 border-b border-[#f0f0f0] text-[15px] font-bold text-[#333] no-underline hover:bg-[#fafafa] hover:text-[#41ac86] transition-colors"
            >
              <span>{n.label}</span>
              <svg className="w-[14px] h-[14px] text-[#bbb]" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M5 3 L10 7 L5 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          ))}
          <a
            href="#document-request"
            onClick={() => setMenuOpen(false)}
            className="sm:hidden flex items-center justify-center mx-5 mt-4 mb-2 h-[48px] bg-black text-white text-[14px] font-bold rounded-full no-underline"
          >
            資料請求
          </a>
        </nav>
      </div>

      {/* Backdrop */}
      {menuOpen && (
        <div
          className="lg:hidden fixed inset-0 top-[64px] sm:top-[72px] bg-black/20 -z-10"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </header>
  );
}
