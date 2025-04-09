import React from "react";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

const WelcomeDiv = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <h1 className="text-4xl font-bold font-title mb-10">
        Start Writing with <span className="text-primary">LaTeX</span>: Powerful
        and Simple
      </h1>

      <p className="w-9/12 text-center font-body text-xl font-medium leading-loose">
        Create professional-grade LaTeX documents with ease. Whether you're
        writing a thesis, academic paper, or technical report, HPC LaTeX editor
        offers a clean, intuitive environment to help you write, edit, and
        compile your LaTeX code with confidence.
      </p>

      <video className="w-full max-w-4xl my-10 rounded-md" autoPlay loop muted>
        <source src="/gifs/editor-pdf-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <PrimaryButton
        className="text-[23px] px-10 w-48 mt-7"
        href="https://dev.latex.hpc.ipm.ac.ir"
      >
        Try it Now!
      </PrimaryButton>
    </div>
  );
};

export default WelcomeDiv;
