import React from "react";

interface TemplateCardProps {
  templateName: string;
  templateImg: string;
  templateDesc: string;
}

const TemplateCard = ({
  templateName,
  templateImg,
  templateDesc,
}: TemplateCardProps) => {
  return (
    <div className="w-60 h-72 bg-base-300 hover:bg-[#2F3A4C] transition-colors duration-300 flex flex-col items-center text-center rounded-lg rounded-b-xl cursor-pointer">
      <img src={templateImg} alt={templateName} className="h-auto p-6"/>
      <div className="w-full h-full rounded-b-lg p-2">
        <h1 className="text-xl font-body my-2 text-base-100 font-semibold">
          {templateName}
        </h1>
        <p className="text-base text-base-100">{templateDesc}</p>
      </div>
    </div>
  );
};

export default TemplateCard;
