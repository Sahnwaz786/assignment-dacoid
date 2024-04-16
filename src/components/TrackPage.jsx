import React from "react";
import { IoIosBatteryCharging } from "react-icons/io";
import { FaWifi } from "react-icons/fa";
import { GiNetworkBars } from "react-icons/gi";
import { FaChevronRight } from "react-icons/fa6";

const TrackPage = () => {
  return (
    <div className="w-screen h-screen flex items-center bg-slate-300 justify-center   ">
      <div className=" w-[22rem] h-[40rem]  bg-slate-50 rounded-md ">
        <div className=" flex items-center justify-between  w-[375px] h-[44px] px-4 ">
          <p className="">9:41</p>
          <div className="flex items-center justify-center gap-2 px-6 ">
            <GiNetworkBars />
            <FaWifi />
            <IoIosBatteryCharging />
          </div>
        </div>
        <h6 className="float-end mr-4 text-blue-400 underline">Skip</h6>
        <div className=" w-[282px] h-[282px] mt-132px ml-[36px]">
          <img
            src="https://s3-alpha-sig.figma.com/img/bd9b/3108/cb36b0b2aebaab8d7bad4ecbedf2a369?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qgMLdOYCQTuZ-QJIWGT295wBqho-UvV934oK9g~E2op42Rk01muUlODgI~E34co3UL3HO0mcEo2FQWswdhVcZWPt8LrVNZxtXq7nBLui86dhW6U-QBWfFWfRdJER5qe--MGPQ9JviJNiqVPf0vUcHi3zOenB84~cMhcl6LFAlHkoP0zvBo7v7V42ruPyQpn5siBtBSoSEZS~6QsTLGml8zVd90tgaXda3TkAXXuwFu6slbBTX4gfPu0XprLcRs-1WtFnw2A5UoewO~RNP9gqmGpzKCfnKqG7ois80TmC5CB0Sn5omz929Cmfv5CcepQzb8lt1D2R~fMWboQLahKZ3g__"
            alt=""
          />
        </div>

        <div className="p-5">
          <h3 className="text-xl font-medium">Track Your Goal</h3>
          <p className="text-sm text-gray-500 mt-2">
            Don’t worry if you have trouble determining your goals, We can help
            you determine your goals and track your goals
          </p>
        </div>
        <p className="flex items-center justify-center float-end mr-5 mt-20 w-12 h-12 text-white  bg-blue-300 rounded-full">
          <FaChevronRight />
        </p>
      </div>
    </div>
  );
};

export default TrackPage;
