import React from 'react';

const Docs = () => {
  return (
    <div className="mt-10 max-w-4xl space-y-8 pb-20">
      <h1 className="text-6xl font-black uppercase text-hack-blue underline decoration-4">System_Manual_v1</h1>
      <div className="neo-brutal p-8 bg-zinc-900 text-white leading-loose">
        <h2 className="text-2xl font-bold mb-4 text-hack-green tracking-widest">01. THE_PARSER</h2>
        <p className="opacity-80">SkillSync uses <span className="text-hack-yellow">pdf.js</span> to deconstruct local binary data into text strings. No data ever leaves your machine—total privacy.</p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4 text-hack-green tracking-widest">02. THE_BRAIN</h2>
        <p className="opacity-80">Our Regex engine filters noise and compares text against industry role-mappings for Frontend, Backend, and AI/ML Engineering.</p>
      </div>
    </div>
  );
};

export default Docs;