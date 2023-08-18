import { DBorder } from "@/components/double-border";
import React, { useEffect, useState } from "react";
import { VNav } from "@/components/vnav";
import { DATAITEM, data } from "@/utils/data";

export const Experience = React.forwardRef<HTMLDivElement, {}>((props, ref) => {
  const [activeItem, setActiveItem] = useState<DATAITEM | null>(null);
  const [experience, setExperience] = useState<DATAITEM[]>([]);

  useEffect(() => {
    const mockActive = data.map((val, i) =>
      i === 0 ? { ...val, active: true } : val
    );
    setExperience(mockActive);
    setActiveItem(mockActive[0]);
  }, []);

  const handleNavigate = (id: string) => {
    const updatedItems =
      experience &&
      experience.map((item, key) =>
        key.toString() === id
          ? { ...item, active: true }
          : { ...item, active: false }
      );
    setExperience(updatedItems);
    setActiveItem(updatedItems[parseInt(id)]);
  };

  return (
    <section className="ml-12 py-12 min-h-screen" ref={ref} {...props}>
      <p className="mb-2">
        <span className="text-[#FFB02B] font-bold text-[24px]">02.</span>
        <span className="ml-8 font-bold text-[32px] text-[#CCD6F6]">
          Experience
        </span>
      </p>
      <DBorder />

      <div className="py-[100px] flex gap-[100px] max-w-[900px] m-auto">
        {/* calling toString method decreasing the performance as website first calculate parameters and then render accordingly */}
        {experience.length ? (
          <>
            <VNav
              data={experience}
              handleNavigate={handleNavigate}
              containerClasses="self-start"
            />

            <div className="text-[#CCD6F6] text-[20px]">
              <p className="font-semibold mb-1">
                {activeItem?.position}
                <span className="text-[#FFB02B]"> @ {activeItem?.name}</span>
              </p>
              <p className="text-white text-[14px] mb-6">
                {activeItem?.duration}
              </p>
              <ul>
                {activeItem?.responsibilities.map((item, key) => (
                  <li className="text-[#CCD6F6] text-[16px] mb-1" key={key}>
                    &bull; {item}
                  </li>
                ))}
              </ul>
            </div>
          </>
        ) : (
          <p className="text-white">Loading...</p>
        )}
      </div>
    </section>
  );
});

Experience.displayName = "Experience";
