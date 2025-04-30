import Header from "@/app/_components/Header/Header";
import React from "react";

const page = () => {
  return (
    <>
      <Header />
      <h1 className="font-body font-medium text-2xl text-neutral mt-10 ml-20">
        You can view and use our Conference projects here!
      </h1>
      <p className="font-body font-medium text-xl text-base-400 mt-5 mb-14 ml-20">
        Choose the template that best suits your project, click on it to view
        the project's preview.
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1.2fr", // Two equal columns
            gridTemplateRows: "0fr 0fr", // Two rows (can be adjusted if needed)
            gap: "50px",
            justifyItems: "center", // Center items within their grid cells
          }}
        >
          <div style={{ marginBottom: "10px" }}>
            <img
              src="/templates/Topology-Proceedings-Template.png"
              alt="Thesis"
              width="200px"
              style={{
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
                borderRadius: "2px",
              }}
            />
            <h1
              className="font-body font-medium text-l mt-5 text-neutral"
              style={{ width: "200px" }}
            >
              Topology proceedings 3 example
            </h1>
          </div>
          <div>
            <img
              src="/templates/Topology-Proceedings-Template.png"
              alt="Thesis"
              width="200px"
              style={{
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
                borderRadius: "2px",
              }}
            />
            <h1
              className="font-body font-medium text-l mt-5 text-neutral"
              style={{ width: "200px" }}
            >
              Manuscript Template for Solar Physics
            </h1>
          </div>
          <div>
            <img
              src="/templates/Topology-Proceedings-Template.png"
              alt="Thesis"
              width="200px"
              style={{
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
                borderRadius: "2px",
              }}
            />
            <h1
              className="font-body font-medium text-l mt-5 text-neutral"
              style={{ width: "200px" }}
            >
              Cambridge Medium Template Class File
            </h1>
          </div>
          <div>
            <img
              src="/templates/Topology-Proceedings-Template.png"
              alt="Thesis"
              width="200px"
              style={{
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
                borderRadius: "2px",
              }}
            />
            <h1
              className="font-body font-medium text-l mt-5 text-neutral"
              style={{ width: "200px" }}
            >
              Nordic Machine Intelligence Template
            </h1>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <div>
            <img
              src="/templates/Topology-Proceedings-Template.png"
              alt="Thesis"
              width="470px"
              style={{
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
                borderRadius: "2px",
              }}
            />
            <h1 className="font-title font-medium text-4xl text-neutral my-10 mb-20">
              Conference
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
