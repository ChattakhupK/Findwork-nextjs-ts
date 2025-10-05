import { WorkCardProps } from "@/utils/types";
import React from "react";

const HeroInfo = ({ work }: { work: WorkCardProps }) => {
  return (
    <div className="flex flex-col">
      <h3 className="font-bold text-2xl md:text-4xl">{work.name}</h3>
      <div className="">
        {/* <p>{work.price} บาท</p> */}
        <p className=" md:text-xl">{work.province}</p>
      </div>
    </div>
  );
};

export default HeroInfo;
