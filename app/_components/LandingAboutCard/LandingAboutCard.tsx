import React from "react";

const LandingAboutCard = ({ title, desc }: {title: string, desc: string}) => {
  return (
    <div className="flex flex-col justify-center backdrop-blur-md bg-white/10 rounded-xl p-6 border w-[80%] h-[170px]">
      <h2 className="text-neutral text-xl font-semibold mb-3">
        {title}
      </h2>
      <p className="text-neutral">
        {desc}
      </p>
    </div>
  );
};

export default LandingAboutCard;
