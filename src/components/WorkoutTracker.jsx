import React from "react";
import { IoIosBatteryCharging } from "react-icons/io";
import { FaWifi } from "react-icons/fa";
import { GiNetworkBars } from "react-icons/gi";
import { FaChevronLeft } from "react-icons/fa";
import { GoAlert } from "react-icons/go";
import { RiHome2Line } from "react-icons/ri";
import { RiMessengerLine } from "react-icons/ri";
import { MdOutlineCameraAlt } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import { Link } from "react-router-dom";

const WorkoutTracker = () => {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);

  const handleToggle1 = () => {
    setIsChecked1(!isChecked1);
  };
  const handleToggle2 = () => {
    setIsChecked2(!isChecked2);
  };
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
        <div className=" flex  items-center">
          <Link to="/goal">
            {" "}
            <p className=" flex items-center justify-center mt-6 text-left h-6 w-6 rounded-md bg-slate-200 text-sm">
              <FaChevronLeft />
            </p>
          </Link>
          <h1 className=" mt-5  text-xl ml-16 font-semibold ">
            Workout Tracker
          </h1>
        </div>

        <div className=" mt-6">
          <div className="flex  justify-start ">
            <div className=" flex flex-col  items-center text-gray-500 ml-[114px]  ">
              <h6 className=" text-sm">Good Job</h6>
              <p className="font-medium">i</p>
            </div>

            <div className="flex flex-col items-center text-gray-500 ml-[27px]  ">
              <h6 className=" text-sm">less then 320cal</h6>
              <p className="font-medium">i</p>
            </div>
          </div>
          <img
            src="https://github.com/Sahnwaz786/assignment-dacoid/blob/main/public/Chart%20Full%20(2).png"
            alt=""
          />
        </div>

        <div className="alert flex items-center justify-start p-4 w-full h-14 mt-5 gap-3 rounded-lg  bg-gradient-to-r from-blue-200 to-transparent">
          <GoAlert className="text-blue-600 text-xl font-bold" />
          <h6 className="text-sm text-gray-700">
            You've burned fewer calories than <br /> yesterday. Time to get
            moving!
          </h6>
        </div>

        <div className="flex items-center justify-between mt-3 ">
          <h1 className="text-lg font-medium">Upcoming Workout</h1>
          <h6 className="text-zinc-600 font-normal">See more</h6>
        </div>

        <div className="flex items-center justify-between w-full h-16 bg-white shadow-md rounded-xl p-3 mt-3">
          <div className="flex items-center justify-center">
            <img
              className="h-10 w-10 rounded-full bg-blue-100"
              src="https://s3-alpha-sig.figma.com/img/4aee/a404/269733701b8604f00f8ab3dbc8874dc4?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Jn2957WOw3Q5OiVh0DNJ1fAGmxdBtGK5~4unUQlH6qrq90aLJPW1DCrE~ZmCOcAWds8SXIu7Fp~adlv9sa-WryKmHNw0X8jdrOQVN3-6covoBJkx34L3plirDGT820l2EYKkWOpqEc30JkU3KV~dHP3-4OYr~AEcPrYRza4iG78N5vMKdDnA1rGL0sZxV5~3V5RVGd9mvzV7zBJCbUINhlTYMhCHTtqWUSisdT910dafzal~Me56wI7kKnJK2gMFoQIRT1a1fjreu0SkwZhrMGgBtXqGGe~B18WfM3WC-BJUwXv1yOjwKuR5S1aaDo2z9HtVvVQuglEDHfkMOeHfBA__"
              alt=""
            />
            <div className="ml-2">
              <h3 className="text-sm ">Full Body Workout</h3>
              <p className="text-xs text-zinc-600 ">Today 3pm</p>
            </div>
          </div>

          <label htmlFor="toggle1" className="flex items-center cursor-pointer">
            <div className="relative">
              <input
                id="toggle1"
                type="checkbox"
                className="hidden"
                checked={isChecked1}
                onChange={handleToggle1}
              />
              <div
                className={`toggle-line w-12 h-6 bg-blue-400 rounded-full shadow-inner ${
                  isChecked1 ? "bg-green-600" : ""
                }`}
              >
                <div
                  className={`toggle-dot absolute text-center w-5 h-5 bg-white rounded-full shadow inset-y-0 left-1 top-[1.5px] ${
                    isChecked1 ? "transform translate-x-[19px]" : ""
                  }`}
                ></div>
              </div>
            </div>
            <div className="ml-3 text-blue-400 font-medium"></div>
          </label>
        </div>
        <div className="flex items-center justify-between w-full h-16 bg-white shadow-md rounded-xl p-3 mt-4">
          <div className="flex items-center justify-center">
            <img
              className="h-10 w-10 rounded-full bg-blue-100"
              src="https://s3-alpha-sig.figma.com/img/4aee/a404/269733701b8604f00f8ab3dbc8874dc4?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Jn2957WOw3Q5OiVh0DNJ1fAGmxdBtGK5~4unUQlH6qrq90aLJPW1DCrE~ZmCOcAWds8SXIu7Fp~adlv9sa-WryKmHNw0X8jdrOQVN3-6covoBJkx34L3plirDGT820l2EYKkWOpqEc30JkU3KV~dHP3-4OYr~AEcPrYRza4iG78N5vMKdDnA1rGL0sZxV5~3V5RVGd9mvzV7zBJCbUINhlTYMhCHTtqWUSisdT910dafzal~Me56wI7kKnJK2gMFoQIRT1a1fjreu0SkwZhrMGgBtXqGGe~B18WfM3WC-BJUwXv1yOjwKuR5S1aaDo2z9HtVvVQuglEDHfkMOeHfBA__"
              alt=""
            />
            <div className="ml-2">
              <h3 className="text-sm ">Full Body Workout</h3>
              <p className="text-xs text-zinc-600 ">Today 3pm</p>
            </div>
          </div>

          <label htmlFor="toggle2" className="flex items-center cursor-pointer">
            <div className="relative">
              <input
                id="toggle2"
                type="checkbox"
                className="hidden"
                checked={isChecked2}
                onChange={handleToggle2}
              />
              <div
                className={`toggle-line w-12 h-6 bg-blue-400 rounded-full shadow-inner ${
                  isChecked2 ? "bg-green-600" : ""
                }`}
              >
                <div
                  className={`toggle-dot absolute text-center w-5 h-5 bg-white rounded-full shadow inset-y-0 left-1 top-[1.5px] ${
                    isChecked2 ? "transform translate-x-[19px]" : ""
                  }`}
                ></div>
              </div>
            </div>
            <div className="ml-3 text-blue-400 font-medium"></div>
          </label>
        </div>

        <h1 className="text-medium text-lg mt-3">What Do You Want to Train</h1>
        <div className="w-full h-16 bg-blue-600 bg-opacity-40 rounded-xl px-2">
          <div className="flex items-center justify-between">
            <div className="-mt-7">
              <h2 className="text-sm font-medium">Full Body Workout</h2>
              <h5 className="text-xs font-normal">Arms</h5>
              <h5 className="text-xs font-normal">Chest</h5>
            </div>
            <img
              className="h-24 w-24 rounded-full"
              src="https://s3-alpha-sig.figma.com/img/23ae/977c/32610d884493905711642300c8cc67c0?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DUnfWDBxBCh7EVxPNbDubqeRWNZ8WdDo8WW-dQlcer3wqvJ2dewWt5m2pvdrgLloWQxv8Ekm6PirETG-2KQs-Zxikr7OPSuy2w1TVU79mOWjRt2OQgnrvftYrDhTSb1-Z2XPufgpvvIjrsKv17pmeo3kb0q1-OVWJP3cwF27K9I0g5w6XwAz2olHowedMI3DJhX9oQyYs5wHzlvZypYgIOwFC0EGdRuDgcUSVFheupFT6vEK4KayiGgCN2TDfH0ZuoDBdCidY9fJuJSAcdoTPhFsMeBSseUsrtgk15HSXnWrS~pwhe6LmxHnkgcK-uAp8f~rYiowr23l24yn-lynHA__"
              alt=""
            />
          </div>
          <div className=" flex justify-between h-10 w-full bg-white -mt-8 relative z-10">
            <div className="flex items-center gap-6  text-zinc-500 text-2xl">
              <RiHome2Line />
              <RiMessengerLine />
            </div>
            <Link to="/workout-schedule">
              <p className=" absolute left-32 -top-5 flex items-center justify-center h-14 w-14 rounded-full shadow-md bg-gradient-to-r from-blue-100 to-blue-500 text-white">
                <CiSearch className=" text-2xl" />
              </p>
            </Link>

            <div className="flex items-center gap-6 text-zinc-500 text-2xl">
              <MdOutlineCameraAlt />
              <FaRegUser />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutTracker;
