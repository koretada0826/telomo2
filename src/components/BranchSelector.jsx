export default function BranchSelector() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 sm:py-20 px-5 sm:px-10 bg-white">
      <div className="max-w-[800px] mx-auto text-center">
        <p className="fade-in text-[12px] text-[#41ac86] tracking-[0.15em] font-bold mb-3">
          あなたに合った情報をお届けします
        </p>
        <h2 className="fade-in text-[24px] sm:text-[32px] font-bold text-black leading-[1.4] tracking-[0.04em] mb-10">
          営業代行の利用経験はありますか？
        </h2>
        <div className="fade-in flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollTo('experienced')}
            className="btn-primary cursor-pointer text-[14px] px-8 py-4"
          >
            使ったことがある
          </button>
          <button
            onClick={() => scrollTo('newcomer')}
            className="btn-secondary cursor-pointer text-[14px] px-8 py-4"
          >
            使ったことがない
          </button>
        </div>
      </div>
    </section>
  );
}
