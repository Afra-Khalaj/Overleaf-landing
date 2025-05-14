"use client";

import Footer from "@/app/_components/Footer/Footer";
import Header from "@/app/_components/Header/Header";
import PrimaryButton from "@/app/_components/PrimaryButton/PrimaryButton";
import SecondaryButton from "@/app/_components/SecondaryButton/SecondaryButton";
import React, { useState } from "react";

type Template = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const templates: Template[] = [
  {
    id: 1,
    title: "Topology proceedings 3 example",
    description:
      "This is a Topology Proceedings journal LaTeX template with proper margins and headers.",
    image: "/templates/Topology-Proceedings-Template.png",
  },
  {
    id: 2,
    title: "Manuscript Template for Solar Physics",
    description:
      "Standard manuscript template for journals related to Solar Physics.",
    image: "/templates/Topology-Proceedings-Template.png",
  },
  {
    id: 3,
    title: "Cambridge Medium Template Class File",
    description:
      "Cambridge University Press medium template class with formatted sections.",
    image: "/templates/Topology-Proceedings-Template.png",
  },
  {
    id: 4,
    title: "Nordic Machine Intelligence Template",
    description:
      "Template for submissions to the Nordic Machine Intelligence journal.",
    image: "/templates/Topology-Proceedings-Template.png",
  },
  {
    id: 5,
    title: "Advanced Template Example",
    description:
      "An advanced academic template with citation styling and abstract section.",
    image: "/templates/Topology-Proceedings-Template.png",
  },
  {
    id: 6,
    title: "IEEE Paper Format Template",
    description:
      "Official IEEE format template for journal and conference submissions.",
    image: "/templates/Topology-Proceedings-Template.png",
  },
  {
    id: 7,
    title: "Nature Journal Format",
    description: "Structured to match the requirements of Nature submissions.",
    image: "/templates/Topology-Proceedings-Template.png",
  },
  {
    id: 8,
    title: "Elsevier Journal Template",
    description: "Compatible with Elsevier's journal paper formatting.",
    image: "/templates/Topology-Proceedings-Template.png",
  },
];

const Page = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(
    null
  );

  const handleOverlayClose = () => {
    setSelectedTemplate(null);
  };

  return (
    <>
      <Header />
      <div className="mt-2 mb-12 bg-gray-100 h-32 flex flex-col justify-center w-full shadow-sm rounded-lg">
        <h1 className="font-medium text-2xl text-neutral mt-14 ms-20">
          می‌توانید قالب رزومه را در این صفحه مشاهده کنید.
        </h1>
        <p className="font-medium text-base text-base-400 mt-3 mb-14 ms-20">
          با کلیک کردن روی هر پروژه پیش‌نمایش آن را ببینید.
        </p>
      </div>

      <div className="flex justify-evenly px-20 pt-8">
        <div className="grid grid-cols-4 gap-24 justify-items-center">
          {templates.map((template) => (
            <div
              key={template.id}
              className="cursor-pointer"
              onClick={() => setSelectedTemplate(template)}
            >
              <img
                src={template.image}
                alt={template.title}
                width={300}
                className="shadow-lg rounded-sm"
              />
              <h1
                className="font-body font-medium text-lg mt-5 text-neutral w-48"
                dir="ltr"
              >
                {template.title}
              </h1>
            </div>
          ))}
        </div>
      </div>

      {selectedTemplate && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center"
          dir="ltr"
          onClick={handleOverlayClose}
        >
          <div
            className="bg-white rounded-xl shadow-xl py-[4%] w-[80%] flex gap-8 justify-around h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleOverlayClose}
              className="absolute top-4 left-4 text-gray-500 hover:text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center"
              aria-label="Close"
            >
              &times;
            </button>
            <div className="flex justify-center">
              <img
                src={selectedTemplate.image}
                alt={selectedTemplate.title}
                className="w-auto h-auto rounded shadow-lg"
              />
            </div>
            <div className="flex flex-col justify-between" dir="rtl">
              <h2 className="text-2xl font-semibold mb-4">
                {/* {selectedTemplate.title} */}
                اسم پروژه
              </h2>
              <p className="text-gray-600 text-lg">
                {/* {selectedTemplate.description} */}
                توضیحاتی درمورد پروژه
              </p>
              <div className="flex mt-7 gap-4">
                <PrimaryButton
                  className="text-[23px] px-10"
                  href="https://dev.latex.hpc.ipm.ac.ir"
                >
                  ادیتور
                </PrimaryButton>
                <SecondaryButton
                  className="text-[23px] px-10 mt-7"
                  href="https://dev.latex.hpc.ipm.ac.ir"
                >
                  مشاهده pdf
                </SecondaryButton>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Page;
