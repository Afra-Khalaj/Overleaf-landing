import React from "react";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import TypewriterText from "../TypewriterText/TypewriterText";

const WelcomeDiv = () => {
  return (
    <div className=" bg-secondary items-center">
      <div className="flex flex-row items-center justify-between py-10 px-12 h-[600px]">
        <div className="flex flex-col content-between w-[52%]">
          <h1 className="text-4xl font-bold mb-10">
            {/* Start Writing with <span className="text-primary">LaTeX</span>:
            Powerful and Simple */}
            یک جایگزین ساده و قدرتمند برای{" "}
            <span className="text-primary">Overleaf</span>
          </h1>

          <p className="w-9/12 text-start text-xl font-medium leading-loose">
            {/* <!--             Create professional-grade LaTeX documents with ease. Whether you're
            writing a thesis, academic paper, or technical report, HPC LaTeX
            editor offers a clean, intuitive environment to help you write,
            edit, and compile your LaTeX code with confidence. --> */}
            پلتفرم ما برای نگارش و همکاری در پروژه‌های LaTeX طراحی شده تا ساده،
            روان، و بدون دردسر باشه، مخصوصا برای کاربران فارسی‌زبان.
          </p>

          <PrimaryButton
            className="text-[23px] px-10 mt-7"
            href="https://dev.latex.hpc.ipm.ac.ir"
          >
            Try it Now!
          </PrimaryButton>
        </div>

        {/* <video
          className="w-full max-w-2xl mb-10 mt-2 rounded-md"
          autoPlay
          loop
          muted
        >
          <source src="/gifs/editor-pdf-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
        <TypewriterText />
      </div>
    </div>
  );
};

export default WelcomeDiv;
