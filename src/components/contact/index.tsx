import { DBorder } from "@/components/double-border";
import React from "react";

export const Contact = React.forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <section className="ml-12 py-12 min-h-screen" ref={ref} {...props}>
      <p className="mb-2">
        <span className="text-[#FFB02B] font-bold text-[24px]">04.</span>
        <span className="ml-8 font-bold text-[32px] text-[#CCD6F6]">
          Get In Touch
        </span>
      </p>
      <DBorder />
      <div className="mt-12 py-12 flex gap-24 justify-center items-center">
        <div className="text-right">
          <p className="text-[48px] font-medium text-[#CCD6F6] leading-none tracking-[0.7rem] mb-12">
            Abhishek <br />
            Sharma
          </p>

          <p className="text-[24px] text-[#FFB02B] font-medium italic">
            Software Developer
          </p>
        </div>
        <div className="w-1 h-[435px] bg-[#FFB02B]"></div>
        <div>
          <div className="pb-4">
            <p className="text-[#FFB02B] text-[24px] font-bold pb-2">Phone</p>
            <p className="text-[#CCD6F6] text-[24px] font-semiboldbold">
              +1 778-682-0804
            </p>
          </div>
          <div className="pb-4">
            <p className="text-[#FFB02B] text-[24px] font-bold pb-2">
              Linkedin
            </p>
            <a
              className="text-[#CCD6F6] text-[24px] font-semiboldbold"
              target="_blank"
              href="https://linkedin.com/in/asharma-dev"
            >
              https://linkedin.com/in/asharma-dev
            </a>
          </div>
          <div className="pb-4">
            <p className="text-[#FFB02B] text-[24px] font-bold pb-2">Email</p>
            <a
              className="text-[#CCD6F6] text-[24px] font-semiboldbold"
              href="mailto: abhisheksharma1123@gmail.com"
            >
              abhisheksharma1123@gmail.com
            </a>
          </div>
          <div className="pb-4">
            <p className="text-[#FFB02B] text-[24px] font-bold pb-2">Github</p>
            <a
              className="text-[#CCD6F6] text-[24px] font-semiboldbold"
              target="_blank"
              href="https://github.com/asharma-dev"
            >
              https://github.com/asharma-dev
            </a>
          </div>
        </div>
      </div>
    </section>
  );
});

Contact.displayName = "Contact";
