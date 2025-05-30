"use client";

import React from "react";
import { useRouter } from "next/navigation";

interface TemplateCardProps {
  templateName: string;
  templateImg: string;
  templateDesc: string;
  templateSlug: string;
}

const TemplateCard = ({
  templateName,
  templateImg,
  templateDesc,
  templateSlug,
}: TemplateCardProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/templates/${templateSlug}`);
  };

  return (
    <div
      onClick={handleClick}
      className="w-60 h-64 bg-base-300 hover:bg-[#898F9B] hover:w-64 hover:h-72 transition-all duration-300 flex flex-col items-center justify-center text-center rounded-lg rounded-b-xl cursor-pointer"
      style={{
        boxShadow: "0px 2px 6px 2px rgba(0, 0, 0, 0.3)",
      }}
    >
      <img src={templateImg} alt={templateName} className="h-auto p-6" />
      <h1 className="text-xl my-2 text-base-100 font-medium">{templateName}</h1>
      <p className="text-base text-base-100">{templateDesc}</p>
    </div>
  );
};

export default TemplateCard;