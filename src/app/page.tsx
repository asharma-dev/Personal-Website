"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Home } from "@/components/home";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Contact } from "@/components/contact";
import { MouseGlow } from "@/utils/glow";
import useBreakPointObserver from "@/utils/hooks/useBreakPointObserver";

// read guide.png in public dir

export default function Index() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const executeAboutScroll = () =>
    aboutRef.current && aboutRef.current.scrollIntoView({ behavior: "smooth" });
  const executeContactScroll = () =>
    contactRef.current &&
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  const executeExperienceScroll = () =>
    experienceRef.current &&
    experienceRef.current.scrollIntoView({ behavior: "smooth" });
  const executeProjectsScroll = () =>
    projectsRef.current &&
    projectsRef.current.scrollIntoView({ behavior: "smooth" });

  const screenSize = useBreakPointObserver();
  // pass screenSize as props down the component;

  return (
    <>
      <div className="content">
        <header>
          <nav className="flex justify-between items-center my-8">
            <Image
              src="/logo.svg"
              width={70}
              height={70}
              alt="Picture of the author"
              className="cursor-pointer"
            />
            <ul className="flex gap-12 items-center">
              <li className="hover:text-[#FFB02B]" onClick={executeAboutScroll}>
                About Me
              </li>
              <li
                className="hover:text-[#FFB02B]"
                onClick={executeExperienceScroll}
              >
                Experience
              </li>
              <li
                className="hover:text-[#FFB02B]"
                onClick={executeProjectsScroll}
              >
                Projects
              </li>
              <li
                className="hover:text-[#FFB02B]"
                onClick={executeContactScroll}
              >
                Contact
              </li>

              <button
                type="button"
                className="text-[#FFB02B] hover:text-white border border-[#FFB02B] hover:[#FFB02B] focus:ring-4 focus:outline-none focus:ring-[#FFB02B] font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-[#FFB02B] dark:text-[#FFB02B] dark:hover:text-white dark:hover:bg-[#FFB02B] dark:focus:ring-[#FFB02B]"
              >
                Resume
              </button>
            </ul>
          </nav>
        </header>
        <main className="min-h-screen">
          <Home />
          <About ref={aboutRef} />
          <Experience ref={experienceRef} />
          <Contact ref={contactRef} />
        </main>
      </div>
      <MouseGlow />
    </>
  );
}
