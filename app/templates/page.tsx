import React from "react";
import TemplateCard from "../_components/TemplateCard/TemplateCard";
import Header from "../_components/Header/Header";
import Footer from "../_components/Footer/Footer";

const Templates = () => {

  function handleTemplateClick(templateName: string) {
    console.log(`Clicked on template: ${templateName}`);
  };

  return (
    <>
      <Header />
      <div className="flex flex-col items-center">
        <h1 className="font-title font-medium text-4xl text-primary my-10 mb-20">
          Templates
        </h1>
        <div className="flex flex-row space-x-10 mb-10">
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
            templateName="Academic Journal"
            templateImg="/icons/mortarboard.svg"
            templateDesc="This is a test description!"
          />
          <TemplateCard
            templateName="Conference"
            templateImg="/icons/poster.svg"
            templateDesc="This is a test description!"
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
