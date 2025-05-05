import React from "react";

interface LandingAboutCardProps {
  title: string;
  desc: string;
  icon?: React.ReactNode; // Optional icon prop
}

const LandingAboutCard = ({ title, desc, icon }: LandingAboutCardProps) => {
  return (
    <div className="flex flex-col justify-center backdrop-blur-md bg-white/10 rounded-xl p-6 border w-[80%] h-[170px]">
      <div className="flex items-center mb-3 gap-2">
        {icon && <span className="text-2xl text-neutral">{icon}</span>}
        <h2 className="text-neutral text-xl font-semibold">{title}</h2>
      </div>
      <p className="text-neutral">{desc}</p>
    </div>
  );
};

export default LandingAboutCard;
