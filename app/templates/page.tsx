import React from "react";
import TemplateCard from "../_components/TemplateCard/TemplateCard";
import Header from "../_components/Header/Header";
import Footer from "../_components/Footer/Footer";

const Templates = () => {
  function handleTemplateClick(templateName: string) {
    console.log(`Clicked on template: ${templateName}`);
  }

  return (
    <>
      <Header />
      <div className="flex flex-col items-center">
        <h1 className=" font-medium text-4xl text-primary my-10 mb-20">
          قالب‌ها
        </h1>
        <div
          className="flex flex-row items-center space-x-10 mb-10 h-[300px]"
          dir="ltr"
        >
          <TemplateCard
            templateName="ژرنال آکادمیک"
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
          {/* <TemplateCard
            templateName="Presentation"
            templateImg="/icons/presentation.svg"
            templateDesc="This is a test description!"
          /> */}
          {/* <TemplateCard
            templateName="Poster"
            templateImg="/icons/poster.svg"
            templateDesc="This is a test description!"
          /> */}
          {/* </div>
        <div className="flex flex-row space-x-10 mb-10">
          <TemplateCard
            templateName="Book"
            templateImg="/icons/book.svg"
            templateDesc="This is a test description!"
          /> */}
          {/* <TemplateCard
            templateName="Cover Letter"
            templateImg="/icons/mail.svg"
            templateDesc="This is a test description!"
          /> */}
          {/* <TemplateCard
            templateName="Title Page"
            templateImg="/icons/title.svg"
            templateDesc="This is a test description!"
          /> */}
          {/* <TemplateCard
            templateName="Formal Letter"
            templateImg="/icons/letter.svg"
            templateDesc="This is a test description!"
          /> */}
          {/* </div>
        <div className="flex flex-row space-x-10 mb-10">
          <TemplateCard
            templateName="Charts"
            templateImg="/icons/chart.svg"
            templateDesc="This is a test description!"
          /> */}

          {/* <TemplateCard
            templateName="Assignment"
            templateImg="/icons/assignment.svg"
            templateDesc="This is a test description!"
          /> */}
          {/* <TemplateCard
            templateName="Business Card"
            templateImg="/icons/businessCard.svg"
            templateDesc="This is a test description!"
          /> */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Templates;
