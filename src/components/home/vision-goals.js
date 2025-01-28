import { visionData } from "@/constants/home-vision";
import AskIcon from "../icons/ask-icon";
import FolderIcon from "../icons/folder-icon";
import SettingIcon from "../icons/setting-icon";
import SettingsIcon from "../icons/settings-icon";
import TargetIcon from "../icons/target-icon";

const VisionGoals = () => {
  return (
    <div className="grid grid-cols-1 max-lg:gap-5 lg:grid-cols-2">
      <div className="flex items-center justify-between">
        <div className="relative flex items-center justify-center rounded-full size-28 lg:size-40">
          <TargetIcon
            style={{ transform: "rotate(250deg)" }}
            className="text-orange-700 size-28 lg:size-36"
          />
          <div className="absolute top-0 left-0 z-10 -rotate-45 border-2 border-transparent rounded-full size-full max-lg:border-none border-t-zinc-300 border-l-zinc-300">
            <div className="relative before:size-5 max-lg:after:hidden max-lg:before:hidden after:size-5 before:bg-zinc-300 after:bg-zinc-300 before:rounded-full after:rounded-full before:absolute after:absolute before:top-full after:top-0 after:mt-2 after:ms-3 before:-mt-7 before:-ms-8 after:rotate-0 before:rotate-0 before:start-full after:start-0 size-full"></div>
          </div>
          <div className="max-lg:hidden absolute top-0 w-10 h-0.5 end-4 bg-zinc-300">
            <div className="relative">
              <div className="absolute end-0 bottom-0 bg-zinc-300 w-0.5 h-[118px] lg:h-20">
                <div className="relative">
                  <div className="absolute top-0 start-0 w-screen h-0.5 bg-zinc-300"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute max-lg:hidden w-[84px] h-0.5 top-[20%] -end-[68px] bg-zinc-300">
            <div className="relative">
              <div className="absolute end-0 bottom-0 bg-zinc-300 w-0.5 h-[72px] lg:h-12">
                <div className="relative">
                  <div className="absolute top-0 start-0 w-screen h-0.5 bg-zinc-300"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute max-lg:hidden w-[120px] h-0.5 top-[40%] -end-[120px] bg-zinc-300">
            <div className="relative">
              <div className="absolute end-0 bottom-0 bg-zinc-300 w-0.5 h-6 lg:h-4">
                <div className="relative">
                  <div className="absolute top-0 start-0 w-screen h-0.5 bg-zinc-300"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute max-lg:hidden w-[120px] h-0.5 top-[60%] -end-[120px] bg-zinc-300">
            <div className="relative">
              <div className="absolute end-0 top-full bg-zinc-300 w-0.5 h-7 lg:h-4">
                <div className="relative">
                  <div className="absolute -bottom-7 lg:-bottom-4 start-0 w-screen h-0.5 bg-zinc-300"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute max-lg:hidden w-[84px] h-0.5 top-[80%] -end-[68px] bg-zinc-300">
            <div className="relative">
              <div className="absolute end-0 top-full bg-zinc-300 w-0.5 h-[72px] lg:h-12">
                <div className="relative">
                  <div className="absolute -bottom-[72px] lg:-bottom-12 start-0 w-screen h-0.5 bg-zinc-300 z-10"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute max-lg:hidden w-10 h-0.5 top-full end-4 bg-zinc-300">
            <div className="relative">
              <div className="absolute end-0 top-full bg-zinc-300 w-0.5 h-[118px] lg:h-20">
                <div className="relative">
                  <div className="absolute -bottom-[118px] lg:-bottom-20 start-0 w-screen h-0.5 bg-zinc-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex flex-col justify-between gap-2 max-lg:flex-1 lg:gap-5">
          <div className="flex">
            <div className="relative z-20 flex items-center w-3/4 gap-2 px-4 py-1 bg-blue-800 rounded-full lg:py-2 max-lg:ms-auto">
              <span className="flex items-center justify-center bg-white rounded-full size-6">
                <SettingsIcon className="size-4" />
              </span>
              <span className="block text-[9px] text-white flex-1">
                تعزيز التنمية الاجتماعية عبر دعم المبادرات المجتمعية
              </span>
            </div>
            <div className="max-lg:hidden relative z-50 flex-1 h-full py-3 bg-[#EDF1F5]"></div>
          </div>
          <div className="flex">
            <div className="relative flex items-center max-lg:ms-auto w-3/4 gap-2 px-4 py-1 z-20 lg:py-2 bg-orange-600 rounded-full ms-[12.5%]">
              <span className="flex items-center justify-center bg-white rounded-full size-6">
                <SettingIcon className="size-4" />
              </span>
              <span className="block text-[9px] text-white flex-1">
                دعم المشاريع المستدامة للمساهمة في الحد من الفقر
              </span>
            </div>
            <div className="max-lg:hidden relative z-50 flex-1 h-full py-3 bg-[#EDF1F5]"></div>
          </div>
          <div className="relative z-20 flex items-center w-3/4 gap-2 px-4 py-1 bg-pink-800 rounded-full lg:py-2 ms-auto">
            <span className="flex items-center justify-center bg-white rounded-full size-6">
              <AskIcon className="size-4" />
            </span>
            <span className="block text-[9px] text-white flex-1">
              توفير الدعم المالي والعيني للأسر والأفراد الأكثر احتياجاً
            </span>
          </div>
          <div className="relative z-20 flex items-center w-3/4 gap-2 px-4 py-1 rounded-full lg:py-2 ms-auto bg-emerald-700">
            <span className="flex items-center justify-center bg-white rounded-full size-6">
              <FolderIcon className="size-4" />
            </span>
            <span className="block text-[9px] text-white flex-1">
              تعزيز الرعاية الصحية للفئات الضعيفة والمحتاجة
            </span>
          </div>
          <div className="flex">
            <div className="relative flex items-center w-3/4 max-lg:ms-auto ms-[12.5%] z-20 gap-2 px-4 py-1 lg:py-2 bg-sky-700 rounded-full">
              <span className="flex items-center justify-center bg-white rounded-full size-6">
                <TargetIcon className="size-4" />
              </span>
              <span className="block text-[9px] text-white flex-1">
                دعم التعليم والتدريب المهني للشباب والعاطلين عن العمل
              </span>
            </div>
            <div className="max-lg:hidden relative z-50 flex-1 h-full py-3 bg-[#EDF1F5]"></div>
          </div>
          <div className="flex">
            <div className="relative z-20 flex items-center w-3/4 gap-2 px-4 py-1 bg-blue-900 rounded-full lg:py-2 max-lg:ms-auto">
              <span className="flex items-center justify-center bg-white rounded-full size-6">
                <SettingIcon className="size-4" />
              </span>
              <span className="block text-[9px] text-white flex-1">
                تعزيز الابتكار الاجتماعي والتكنولوجي لحل القضايا المجتمعية
              </span>
            </div>
            <div className="max-lg:hidden relative z-50 flex-1 h-full py-3 bg-[#EDF1F5]"></div>
          </div>
        </div>
      </div>
      <ul className="flex lg:ps-7 flex-col gap-3 relative bg-[#EDF1F5] z-[9999999]">
        {visionData.map(({ color, info }, index) => (
          <li className="flex items-center gap-3" key={index}>
            <span className={`${color} rounded-full size-2`} />
            <span className="text-xs max-lg:flex-1 lg:text-sm text-zinc-600">
              {info}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VisionGoals;
