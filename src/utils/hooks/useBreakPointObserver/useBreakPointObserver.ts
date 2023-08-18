import { useEffect, useState } from "react";
export interface BreakPoints {
  [key: string]: string;
}

export const breakpoints: BreakPoints = {
  mobile: "(max-width: 600px)",
  tablet: "(min-width: 600px) and (max-width: 1023px)",
  desktop: "(min-width: 1024px)",
};

export const useBreakPointObserver = () => {
  const [breakpoint, setBreakpoint] = useState<string | null>(null);

  useEffect(() => {
    const handleResize = () => {
      for (const key of Object.keys(breakpoints)) {
        const mediaQuery = window.matchMedia(`${breakpoints[key]}`);
        if (mediaQuery.matches) {
          setBreakpoint(key);
          break;
        }
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [breakpoint]);
  return breakpoint;
};
