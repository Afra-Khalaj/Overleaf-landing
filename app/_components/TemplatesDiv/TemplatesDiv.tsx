import React from "react";
import TemplateCard from "../TemplateCard/TemplateCard";
import SecondaryButton from "../SecondaryButton/SecondaryButton";

const TemplatesDiv = () => {
  return (
    <div className="flex flex-col items-center" dir="ltr">
      <h1 className="mt-20 mb-10 font-body text-2xl">قالب‌های ما:</h1>
      <div className="flex flex-row space-x-7 mb-10">
        <TemplateCard
          templateName="Presentation"
          templateImg="/icons/presentation.svg"
          templateDesc="This is a test description!"
        />
        <TemplateCard
          templateName="Thesis"
          templateImg="/icons/thesis.svg"
          templateDesc="This is a test description!"
        />
        <TemplateCard
          templateName="Resume"
          templateImg="/icons/CV.svg"
          templateDesc="This is a test description!"
        />
        <TemplateCard
          templateName="Poster"
          templateImg="/icons/poster.svg"
          templateDesc="This is a test description!"
        />
      </div>
      <SecondaryButton href="/templates">See more</SecondaryButton>
    </div>
  );
};

export default TemplatesDiv;
