import React from "react";
import { DATAITEM } from "@/utils/data";

interface VNavItemProps {
  title: string;
  id: string;
  active: boolean;
  handleNavigate: (id: string) => void;
}

interface VNavProps {
  data: DATAITEM[];
  handleNavigate: (id: string) => void;
  containerClasses: string;
}

export const VNav = ({ data, handleNavigate, containerClasses }: VNavProps) => {
  return (
    <div className={`max-h-[400px] bg-[#1A283C] w-full ${containerClasses}`}>
      {data.map((item: { name: string; active: boolean }, key: React.Key) => (
        <VNavItem
          title={item.name}
          key={key}
          id={key.toString()}
          active={item.active}
          handleNavigate={handleNavigate}
        />
      ))}
    </div>
  );
};

const VNavItem = ({ title, active, id, handleNavigate }: VNavItemProps) => {
  return (
    <p
      onClick={() => handleNavigate(id)}
      className={`cursor-pointer py-4 px-6 min-w-[150px] w-full border-b-[1px] border-black text-center font-medium text-[20px] ${
        active
          ? "border-l-[3px] border-l-[#FFB02B] text-[#FFB02B]"
          : "border-l-[3px] border-l-[#8892B0] text-[#8892B0]"
      }`}
    >
      {title.length > 20 ? `${title.slice(0, 20)}...` : title}
    </p>
  );
};
