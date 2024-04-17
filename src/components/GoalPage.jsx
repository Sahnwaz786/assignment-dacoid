import React from "react";
import { IoIosBatteryCharging } from "react-icons/io";
import { FaWifi } from "react-icons/fa";
import { GiNetworkBars } from "react-icons/gi";
import { Link } from "react-router-dom";


const GoalPage = () => {
  return (
    <div className="w-screen  h-screen flex items-center justify-center">
      <div className=" w-[22rem] h-[42rem]  bg-slate-50 rounded-md p-4">
        <div className=" flex items-center justify-between  w-[375px] h-[44px] px-0 -mt-4">
          <p className="">9:41</p>
          <div className="flex items-center justify-center gap-2 px-14">
            <GiNetworkBars />
            <FaWifi />
            <IoIosBatteryCharging />
          </div>
        </div>
        <h1 className=" mt-5 mb-5 text-xl text-center font-semibold ">
          What are you goals?
        </h1>
        <div className=" flex items-center justify-between w-full h-11 rounded-xl bg-gray-200 p-5 mb-5">
          <h4>Weight Loss</h4>
          <input
            className="w-5 h-5 border  focus:ring-indigo-500 focus:border-indigo-500"
            type="checkbox"
            placeholder="Weight Loss"
          />
        </div>
        <div className=" flex items-center justify-between w-full h-11 rounded-xl bg-gray-200 p-5 mb-5">
          <h4>Muscle Gain</h4>
          <input
            className="w-5 h-5 border  focus:ring-indigo-500 focus:border-indigo-500"
            type="checkbox"
            placeholder="Weight Loss"
          />
        </div>
        <div className=" flex items-center justify-between w-full h-11 rounded-xl bg-gray-200 p-5 mb-5">
          <h4>Flexibility and Mobility</h4>
          <input
            className="w-5 h-5 border  focus:ring-indigo-500 focus:border-indigo-500"
            type="checkbox"
            placeholder="Weight Loss"
          />
        </div>
        <div className=" flex items-center justify-between w-full h-11 rounded-xl bg-gray-200 p-5 mb-5">
          <h4>General Fitness</h4>
          <input
            className="w-5 h-5 border  focus:ring-indigo-500 focus:border-indigo-500"
            type="checkbox"
            placeholder="Weight Loss"
          />
        </div>
        <div className=" flex items-center justify-between w-full h-11 rounded-xl bg-gray-200 p-5 mb-5">
          <h4>Event - specific training</h4>
          <input
            className="w-5 h-5 border  focus:ring-indigo-500 focus:border-indigo-500"
            type="checkbox"
            placeholder="Weight Loss"
          />
        </div>
        <div className=" flex items-center justify-between w-full h-11 rounded-xl bg-gray-200 p-5 mb-5">
          <h4>Mindfulness and Mental Health</h4>
          <input
            className="w-5 h-5 border  focus:ring-indigo-500 focus:border-indigo-500"
            type="checkbox"
            placeholder="Weight Loss"
          />
        </div>
         <Link to="/workout-tracker">
         <button className="w-full h-11  rounded-xl text-white mt-11 bg-gradient-to-r from-blue-300 to-blue-400">
          Confirm
        </button>
         </Link>
        
      </div>
    </div>
  );
};

export default GoalPage;
