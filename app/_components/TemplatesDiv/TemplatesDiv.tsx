import React from "react";
import TemplateCard from "../TemplateCard/TemplateCard";
import SecondaryButton from "../SecondaryButton/SecondaryButton";

const TemplatesDiv = () => {
  return (
    <div className="flex flex-col items-center mt-28">
      <h1 className="mt-20 mb-10 text-2xl">قالب‌های ما</h1>
      <div className="flex flex-row items-center space-x-7 mb-10 h-[300px]" dir="ltr">
        <TemplateCard
          templateName="ژورنال آکادمیک"
          // templateName="Academic Journal"
          templateImg="/icons/journal.svg"
          templateDesc="This is a test description!"
          templateSlug="academic-journal"
        />
        <TemplateCard
          // templateName="Thesis"
          templateName="پایان‌نامه"
          templateImg="/icons/thesis.svg"
          templateDesc="This is a test description!"
          templateSlug="thesis"
        />
        <TemplateCard
          // templateName="Conference"
          templateName="کنفرانس"
          templateImg="/icons/conference.svg"
          templateDesc="This is a test description!"
          templateSlug="conference"
        />
        <TemplateCard
          // templateName="Resume"
          templateName="رزومه"
          templateImg="/icons/resume.svg"
          templateDesc="This is a test description!"
          templateSlug="resume"
        />
      </div>
      <SecondaryButton href="/templates">بیشتر</SecondaryButton>
    </div>
  );
};

export default TemplatesDiv;
