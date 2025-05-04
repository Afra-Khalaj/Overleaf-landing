import React from "react";

const LandingAbout = () => {
  return (
    <div className="flex justify-center">
      <div
        className="h-[80vh] mt-60 w-[100%] p-24 bg-cover bg-center shadow-inner"
        style={{ backgroundImage: `url('/background-green-grey.png')` }}
      >
        <h1 className="text-neutral text-4xl font-bold">چرا پلتفرم ما؟</h1>
      </div>
    </div>
  );
};

export default LandingAbout;
