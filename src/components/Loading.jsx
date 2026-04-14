import { useState, useEffect } from 'react';

export default function Loading({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const duration = 2000;
    const interval = 30;
    const step = 100 / (duration / interval);
    let current = 0;

    const timer = setInterval(() => {
      current += step + Math.random() * step * 0.5;
      if (current >= 100) {
        current = 100;
        clearInterval(timer);
        setTimeout(() => {
          setFadeOut(true);
          setTimeout(() => onComplete(), 600);
        }, 300);
      }
      setProgress(Math.min(Math.floor(current), 100));
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center transition-opacity duration-600 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
      style={{ background: '#1a1a1a' }}
    >
      {/* 電話SVG 3つ */}
      <div className="flex items-center gap-6 sm:gap-8 mb-5">
        {[0, 0.3, 0.6].map((delay, i) => (
          <div key={i} style={{ animation: 'phone-ring 1.5s ease-in-out infinite', animationDelay: `${delay}s` }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#f55f00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </div>
        ))}
      </div>

      {/* プログレスバー */}
      <div className="w-[240px] sm:w-[300px]">
        <div className="flex items-baseline justify-between mb-3">
          <span className="text-[11px] text-white/40 tracking-[0.2em] font-bold">LOADING</span>
          <span className="text-[28px] sm:text-[32px] font-black text-white tabular-nums">
            {progress}<span className="text-[14px] text-white/50 ml-0.5">%</span>
          </span>
        </div>
        <div className="w-full h-[3px] bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-100"
            style={{
              width: `${progress}%`,
              background: 'linear-gradient(90deg, #f55f00, #e67e22)',
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes phone-ring {
          0%, 100% { transform: rotate(0deg); }
          10% { transform: rotate(15deg); }
          20% { transform: rotate(-15deg); }
          30% { transform: rotate(10deg); }
          40% { transform: rotate(-10deg); }
          50% { transform: rotate(0deg); }
        }
      `}</style>
    </div>
  );
}
