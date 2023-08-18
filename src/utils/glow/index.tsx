"use Client";

import { useEffect, useState } from "react";
export const useGlow = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mousePosition]);

  return mousePosition;
};

export const MouseGlow = () => {
  const mousePosition = useGlow();

  return (
    <div
      className="glow"
      style={{
        position: "fixed",
        top: mousePosition.y - 10,
        left: mousePosition.x - 10,
        pointerEvents: "none",
        mixBlendMode: "screen",
      }}
    >
      <div
        className="rounded-full border-4 border-[#FFB02B]"
        style={{
          width: "750px",
          height: "750px",
        }}
      />
    </div>
  );
};
