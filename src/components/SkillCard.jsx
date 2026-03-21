import React from 'react';

const SkillCard = ({ name, type = "found" }) => {
  const bgColor = type === "found" ? "bg-hack-green" : "bg-red-500 text-white";
  return (
    <div className={`border-2 border-black px-3 py-1 font-bold text-sm shadow-[3px_3px_0px_black] uppercase ${bgColor}`}>
      {name}
    </div>
  );
};

export default SkillCard;