"use client";

import React from "react";

const LandingAbout = () => {
  const isRTL = document?.documentElement?.lang === "fa";

  return (
    <div className="flex justify-center">
      <div
        className="h-[80vh] mt-60 w-full p-24 bg-cover bg-center shadow-inner"
        style={{
          backgroundImage: `url('/background-green-grey.png')`,
          transform: isRTL ? "scaleX(-1)" : "none",
        }}
      >
        <div style={{ transform: isRTL ? "scaleX(-1)" : "none" }}>
          <h1 className="text-neutral text-4xl font-bold">چرا پلتفرم ما؟</h1>
        </div>
      </div>
    </div>
  );
};

export default LandingAbout;
