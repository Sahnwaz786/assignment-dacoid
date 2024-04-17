import React from "react";
import { IoIosBatteryCharging } from "react-icons/io";
import { FaWifi } from "react-icons/fa";
import { GiNetworkBars } from "react-icons/gi";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";
import { RiHome2Line } from "react-icons/ri";
import { RiMessengerLine } from "react-icons/ri";
import { MdOutlineCameraAlt } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

const WorkoutSchedule = () => {
  return (
    <div className="w-screen  h-screen flex items-center justify-center mt-10
    ">
      <div className=" w-[22rem] h-[42rem]  bg-slate-50 rounded-md ">
        <div className="  flex items-center justify-between  w-[375px] h-[44px] px-4 ">
          <p className="">9:41</p>
          <div className="flex items-center justify-center gap-2 px-8">
            <GiNetworkBars />
            <FaWifi />
            <IoIosBatteryCharging />
          </div>
        </div>
        <div className=" flex  items-center px-4">
         <Link to="/workout-tracker"> <p className=" flex items-center justify-center mt-6 text-left h-6 w-6 rounded-md bg-slate-200 text-sm">
            <FaChevronLeft />
          </p>
          </Link>
          <h1 className=" mt-5 text-xl ml-14 font-semibold ">
            Workout Schedule
          </h1>
        </div>
        <p className=" flex items-center justify-center mt-4 gap-3 text-center ">
          {" "}
          <FaChevronLeft />
          Feb 2024 <FaChevronRight />
        </p>

        <div className=" flex justify-center items-center gap-8 px-4 mt-4">
            <div className="text-center">
            <h6 className="text-xs">Sun</h6>
            <p className="text-3xl">5</p>
            </div>
            <div className=" flex flex-col items-center justify-center text-center h-14 w-12 rounded-lg shadow-md bg-gradient-to-r from-blue-100 to-blue-500 text-white">
            <h6 className="text-xs">Mon</h6>
            <p className="text-3xl">6</p>
            </div>
            <div className="text-center">
            <h6 className="text-xs">Tue</h6>
            <p className="text-3xl">7</p>
            </div>
            <div className="text-center">
            <h6 className="text-xs">Wed</h6>
            <p className="text-3xl">8</p>
            </div>
            <div className="text-center">
            <h6 className="text-xs">Thu</h6>
            <p className="text-3xl">9</p>
            </div>
            
        </div>
        {/* <div className=" w-full border-zinc-400 border-b-2">
          <p className="">06:00 AM</p>
        </div> */}
        <div className="grid grid-cols-1 divide-y border-black mt-5">
          <div className="font-medium text-sm px-4 py-1">06:00 AM</div>
          <div className="font-medium text-sm px-4 py-1">07:00 AM</div>
          <div className="font-medium text-sm px-4 py-1">08:00 AM</div>
          <div className="font-medium text-sm px-4 py-1">09:00 AM</div>
          <div className="font-medium text-sm px-4 py-1">10:00 AM</div>
          <div className="font-medium text-sm px-4 py-1">11:00 AM</div>
          <div className="font-medium text-sm px-4 py-1">12:00 AM</div>
          <div className="font-medium text-sm px-4 py-1">01:00 AM</div>
          <div className="font-medium text-sm px-4 py-1">02:00 AM</div>
          <div className="font-medium text-sm px-4 py-1">03:00 AM</div>
          <div className="font-medium text-sm px-4 py-1">04:00 AM</div>
          <div className="font-medium text-sm px-4 py-1">05:00 AM</div>


          
        </div>

        <div className=" flex justify-between h-10 white mt-8 relative z-10 px-4">
          <div className="flex items-center gap-6  text-zinc-500 text-2xl">
            <RiHome2Line />
            <RiMessengerLine />
          </div>
          <p className=" absolute left-32 -top-5 flex items-center justify-center h-14 w-14 rounded-full shadow-md bg-gradient-to-r from-blue-100 to-blue-500 text-white">
            <CiSearch className=" text-2xl" />
          </p>

          <div className="flex items-center gap-6 text-zinc-500 text-2xl">
            <MdOutlineCameraAlt />
            <FaRegUser />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutSchedule;
