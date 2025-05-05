import React from "react";
import TemplateCard from "../TemplateCard/TemplateCard";
import SecondaryButton from "../SecondaryButton/SecondaryButton";

const TemplatesDiv = () => {
  return (
    <div className="flex flex-col items-center mt-28">
      <h1 className="mt-20 mb-10 font-body text-2xl">Explore our Templates!</h1>
      <div className="flex flex-row items-center space-x-7 mb-10 h-[300px]" dir="ltr">
        <TemplateCard
          templateName="Academic Journal"
          templateImg="/icons/journal.svg"
          templateDesc="This is a test description!"
        />
        <TemplateCard
          templateName="Thesis"
          templateImg="/icons/thesis.svg"
          templateDesc="This is a test description!"
        />
        <TemplateCard
          templateName="Conference"
          templateImg="/icons/conference.svg"
          templateDesc="This is a test description!"
        />
        <TemplateCard
          templateName="Resume"
          templateImg="/icons/resume.svg"
          templateDesc="This is a test description!"
        />
      </div>
      <SecondaryButton href="/templates">See more</SecondaryButton>
    </div>
  );
};

export default TemplatesDiv;
