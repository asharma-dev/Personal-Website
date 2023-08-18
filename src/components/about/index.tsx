import React from "react";
import { DBorder } from "@/components/double-border";

export const About = React.forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <section className="ml-12 py-12 min-h-screen" ref={ref} {...props}>
      <p className="mb-2">
        <span className="text-[#FFB02B] font-bold text-[24px]">01.</span>
        <span className="ml-8 font-bold text-[32px] text-[#CCD6F6]">
          About Me
        </span>
      </p>
      <DBorder />
      <div>
        <p className="text-[#FFB02B] text-[24px] text-center mb-8">
          “I am open to work right now and looking for any new opportunities.”
        </p>
        <div className="flex gap-16 justify-center items-center max-w-[1000px] m-auto">
          <div className="w-[316px] h-[316px] box-content p-4 border-2 border-[#FFB02B] rounded-lg flex justify-center items-center basis-3/10 grow">
            <p className="w-[300px] h-[300px] bg-[#FFB02B] rounded-lg"></p>
          </div>
          <div className="basis-7/10 grow">
            <p className="text-[20px] text-[#CCD6F6] p-2">
              Greetings! I&#39;m Abhishek, and the world of web applications is
              my canvas for creativity. Holding the title of a Full-Stack
              Developer, I have mastered the art of navigating both the
              Front-end and Back-end.
            </p>{" "}
            <p className="text-[20px] text-[#CCD6F6] p-2">
              My fascination with web development ignited back in 2018,
              immediately after achieving my bachelor&#39;s degree in Computer
              Science. Eager to deepen my expertise, I embarked on a journey by
              enrolling in a{" "}
              <span className="text-[#FFB02B]">
                Post Degree Diploma program in Web and mobile application
                development
              </span>
              . Throughout this enriching journey, my dedication and prowess
              were acknowledged as I consistently earned a place on the{" "}
              <span className="text-[#FFB02B]">Dean’s Honor Role</span> during
              every semester.
            </p>
            <p className="text-[20px] text-[#CCD6F6] p-2">
              Currently I am preparing for{" "}
              <span className="text-[#FFB02B]">AWS Cloud certifications </span>
              and soon appearing for AWS Solutions Architect exam.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});

About.displayName = "About";
