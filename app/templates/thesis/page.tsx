import Footer from "@/app/_components/Footer/Footer";
import Header from "@/app/_components/Header/Header";
import React from "react";

const page = () => {
  return (
    <>
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
          می‌تونید پروژه‌ها در قالب پایان‌نامه رو اینجا ببینید و استفاده کنید!
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
          // backgroundColor: "#F4F5F6",
          // boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.2)",
          // borderRadius: "10px",
          padding: "80px",
          paddingTop: "30px",
        }}
        dir="ltr"
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1.2fr 1.2fr 1.2fr", // Two equal columns
            gridTemplateRows: "0fr 0fr", // Two rows (can be adjusted if needed)
            gap: "100px",
            justifyItems: "center", // Center items within their grid cells
          }}
        >
          <div style={{ marginBottom: "10px" }}>
            <img
              src="/templates/Topology-Proceedings-Template.png"
              alt="Thesis"
              width="300px"
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
              width="300px"
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
              width="300px"
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
              width="300px"
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
          <div>
            <img
              src="/templates/Topology-Proceedings-Template.png"
              alt="Thesis"
              width="300px"
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
          <div>
            <img
              src="/templates/Topology-Proceedings-Template.png"
              alt="Thesis"
              width="300px"
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
          <div>
            <img
              src="/templates/Topology-Proceedings-Template.png"
              alt="Thesis"
              width="300px"
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
          <div>
            <img
              src="/templates/Topology-Proceedings-Template.png"
              alt="Thesis"
              width="300px"
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
        {/* <div style={{ display: "flex", justifyContent: "flex-end" }}>
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
              Academic Journal
            </h1>
          </div>
        </div> */}
      </div>
      <Footer />
    </>
  );
};

export default page;
