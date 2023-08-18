import React from "react";
import { DBorder } from "@/components/double-border";

export const Home = React.forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <section
      className="text-white min-h-[80vh] h-[80vh] ml-12 mt-8 py-12 flex flex-col gap-16"
      ref={ref}
      {...props}
    >
      <div>
        <p className="text-[#FFB02B] font-semibold text-[28px] mb-2">
          Hi my name is,
        </p>
        <h1>
          <span className="text-[64px] font-semibold">Abhishek </span>
          <span className="text-[64px] text-[#8892B0] font-semibold">
            Sharma
          </span>
        </h1>
        <h2 className="font-medium text-[36px]">
          {" "}
          &lt; Full Stack Developer &#47;&gt;
        </h2>
        <DBorder />

        <p className="max-w-[50%] text-[#CCD6F6] mb-3">
          I build robust and responsive web applications from the ground
          up,seamlessly integrating both front-end and back-end technologies.
        </p>
        <p className="max-w-[50%] text-[#CCD6F6]">
          I am open to learning, mentoring juniors, and collaborating on diverse
          projects with teams and contributing effectively to project success.
        </p>
      </div>
      <div>
        <a
          href="https://linkedin.com/in/asharma-dev"
          target="_blank"
          className="focus:outline-none text-[#0F172A] bg-[#FFB02B] hover:bg-[#FFB02B] focus:ring-4 focus:ring-[#FFB02B] font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-[#FFB02B]"
        >
          Connect with me
        </a>
      </div>
    </section>
  );
});

Home.displayName = "Home";
