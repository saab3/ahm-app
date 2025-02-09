import { useState } from "react";
import { goalsData, sideData } from "@/constants/home-vision";

const VisionGoals = () => {
  const [active, setActive] = useState(0);
  return (
    <div className="grid grid-cols-1 gap-4 lg:gap-8 lg:grid-cols-2">
      <div className="flex flex-col gap-3.5">
        {goalsData.map((item, info) => (
          <div
            key={info}
            onClick={() => setActive(info)}
            className="p-2.5 lg:p-5 bg-white border rounded-sm cursor-pointer"
          >
            <div className="flex gap-2 lg:gap-3.5">
              <span className="size-6 lg:size-9 lg:mt-3 bg-[#01AB9D] max-lg:*:size-3 *:size-4 text-white rounded-full grid place-items-center">
                {item.icon}
              </span>
              <div className="flex flex-col flex-1 max-lg:gap-1">
                <h3 className="font-bold text-xs lg:text-lg lg:leading-[48px]">
                  {item.title}
                </h3>
                {info === active && (
                  <p className="text-xs font-normal lg:text-lg">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <ul className="flex flex-col">
        {sideData.map((item, info) => (
          <li
            key={info}
            className="text-xs lg:text-lg text-[#393838] font-normal leading-7 lg:leading-[48px]"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VisionGoals;
