export default function Footer() {
  return (
    <footer className="py-10 px-5 sm:px-10 bg-white text-black">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-8">
          <div>
            <img src="/img/logo.png" alt="TELEMO" className="h-[34px] sm:h-[40px] w-auto mb-1" />
            <p className="text-[12px] text-[#666]">GIGUUU株式会社</p>
          </div>
          <nav className="flex flex-wrap gap-5">
            <a href="#experienced" className="text-[12px] text-[#666] no-underline hover:text-black transition-colors">経験者の方</a>
            <a href="#newcomer" className="text-[12px] text-[#666] no-underline hover:text-black transition-colors">初めての方</a>
            <a href="#pricing" className="text-[12px] text-[#666] no-underline hover:text-black transition-colors">料金</a>
            <a href="#flow" className="text-[12px] text-[#666] no-underline hover:text-black transition-colors">ご利用の流れ</a>
            <a href="#contact-form" className="text-[12px] text-[#666] no-underline hover:text-black transition-colors">お問い合わせ</a>
          </nav>
        </div>
        <div className="border-t border-[#e5e5e5] pt-6">
          <p className="text-[10px] text-[#999]">© GIGUUU Inc. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
