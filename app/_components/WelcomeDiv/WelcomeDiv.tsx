import React from "react";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import TypewriterText from "../TypewriterText/TypewriterText";

const WelcomeDiv = () => {
  return (
    <div className="bg-secondary items-center">
      <div className="flex flex-row items-center justify-between py-10 px-12 h-[550px]">
        <div className="flex flex-col content-between w-[54%] ms-8">
          <h1 className="text-4xl font-bold mb-10">
            {/* Start Writing with <span className="text-primary">LaTeX</span>:
            Powerful and Simple */}
            یک جایگزین ساده و قدرتمند برای{" "}
            <span className="text-primary font-title">Overleaf</span>
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
            امتحان کنید!
          </PrimaryButton>
        </div>
        <TypewriterText />
      </div>
    </div>
  );
};

export default WelcomeDiv;
