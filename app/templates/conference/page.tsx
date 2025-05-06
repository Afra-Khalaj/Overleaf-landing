"use client";

import Footer from "@/app/_components/Footer/Footer";
import Header from "@/app/_components/Header/Header";
import React, { useState } from "react";
import Image from "next/image";

const Page = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const openOverlay = (imageSrc: any) => {
    setSelectedImage(imageSrc);
    setIsOverlayOpen(true);
    document.body.classList.add("overflow-hidden"); // Prevent scrolling on the background
  };

  const closeOverlay = () => {
    setIsOverlayOpen(false);
    setSelectedImage("");
    document.body.classList.remove("overflow-hidden"); // Re-enable scrolling
  };

  const templates = [
    { src: "/templates/Topology-Proceedings-Template.png", alt: "Topology proceedings 3 example", title: "Topology proceedings 3 example" },
    { src: "/templates/Topology-Proceedings-Template.png", alt: "Manuscript Template for Solar Physics", title: "Manuscript Template for Solar Physics" },
    { src: "/templates/Topology-Proceedings-Template.png", alt: "Cambridge Medium Template Class File", title: "Cambridge Medium Template Class File" },
    { src: "/templates/Topology-Proceedings-Template.png", alt: "Nordic Machine Intelligence Template", title: "Nordic Machine Intelligence Template" },
    { src: "/templates/Topology-Proceedings-Template.png", alt: "Nordic Machine Intelligence Template", title: "Nordic Machine Intelligence Template" },
    { src: "/templates/Topology-Proceedings-Template.png", alt: "Nordic Machine Intelligence Template", title: "Nordic Machine Intelligence Template" },
    { src: "/templates/Topology-Proceedings-Template.png", alt: "Nordic Machine Intelligence Template", title: "Nordic Machine Intelligence Template" },
    { src: "/templates/Topology-Proceedings-Template.png", alt: "Nordic Machine Intelligence Template", title: "Nordic Machine Intelligence Template" },
  ];

  return (
    <div className={isOverlayOpen ? "blur-md" : ""}>
      <Header />
      <div
        style={{
          marginTop: "10px",
          backgroundColor: "#F4F5F6",
          height: "120px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
          marginBottom: "50px",
          boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)",
          borderRadius: "10px",
        }}
      >
        <h1 className="font-medium text-2xl text-neutral mt-14 ms-20">
          {/* You can view and use our Academic journal projects here! */}
          می‌تونید پروژه‌ها در قالب کنفرانس رو اینجا ببینید و استفاده کنید!
        </h1>
        <p className="font-medium text-l text-base-400 mt-3 mb-14 ms-20">
          {/* Choose the template that best suits your project, click on it to view
          the project&apos;s preview. */}
          پروژه‌ای که برات مناسب‌تره رو انتخاب کن و با کلیک کردن روش پیش‌نمایش
          پروژه رو ببین.
        </p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          padding: "80px",
          paddingTop: "30px",
        }}
        dir="ltr"
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "100px",
            justifyItems: "center",
          }}
        >
          {templates.map((template, index) => (
            <div key={index} style={{ marginBottom: "10px", cursor: "pointer" }} onClick={() => openOverlay(template.src)}>
              <Image
                src={template.src}
                alt={template.alt}
                width={300}
                height={200} // Added height for Image component
                style={{
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
                  borderRadius: "2px",
                }}
              />
              <h1
                className="font-body font-medium text-l mt-5 text-neutral"
                style={{ width: "200px", textAlign: "center" }}
              >
                {template.title}
              </h1>
            </div>
          ))}
        </div>
      </div>
      <Footer />

      {/* Overlay */}
      {isOverlayOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/50 z-50"
          onClick={closeOverlay}
        >
          <div className="bg-white rounded-md shadow-lg p-8" onClick={(e) => e.stopPropagation()}>
            <Image src={selectedImage} alt="Overlay Image" width={600} height={400} className="rounded-md" />
            <button className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 cursor-pointer" onClick={closeOverlay}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            {/* You can add more content to the overlay here if needed */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;