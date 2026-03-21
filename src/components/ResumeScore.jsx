import React, { useState, useEffect } from 'react';

const ResumeScore = ({ score = 0 }) => {
  const [displayScore, setDisplayScore] = useState(0);
  const [isGlitching, setIsGlitching] = useState(true);

  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayScore(Math.floor(Math.random() * 100));
      iteration++;
      if (iteration > 20) {
        clearInterval(interval);
        setDisplayScore(score);
        setIsGlitching(false);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [score]);

  return (
    <div className={`neo-brutal p-6 bg-zinc-900 border-black relative overflow-hidden ${isGlitching ? 'animate-pulse' : ''}`}>
      <div className="relative z-10">
        <h3 className="text-[10px] font-black mb-2 tracking-[0.4em] uppercase text-hack-green">
          {isGlitching ? "RUNNING_MATCH_ALGO..." : "RESUME_WORTH_FINALIZED"}
        </h3>

        <div className={`text-7xl font-black ${isGlitching ? 'text-hack-blue' : 'text-hack-green'} transition-all duration-300 flex items-baseline gap-1`}>
          <span className="tabular-nums">{displayScore}</span>
          <span className="text-2xl opacity-50">%</span>
        </div>

        <div className="w-full bg-black h-6 mt-4 border-4 border-black relative overflow-hidden">
          <div 
            className="h-full bg-hack-green transition-all duration-1000 ease-out" 
            style={{ width: `${isGlitching ? 100 : score}%` }}
          />
        </div>

        <div className="mt-4 flex justify-between items-center font-mono">
          <span className="text-[9px] font-bold text-hack-green opacity-60 uppercase tracking-tighter">
            {isGlitching ? ">> COMPILING_SKILL_NODES..." : `>> READINESS_LOCKED: ${score}%`}
          </span>
          {!isGlitching && <div className="w-2 h-2 bg-hack-green rounded-full animate-ping" />}
        </div>
      </div>
    </div>
  );
};

export default ResumeScore;