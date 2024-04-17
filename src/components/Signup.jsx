import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { IoIosBatteryCharging } from "react-icons/io";
import { FaWifi } from "react-icons/fa";
import { GiNetworkBars } from "react-icons/gi";
import { Link } from "react-router-dom";

const Signup = () => {
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
        <h1 className=" mt-8 text-xl font-semibold ">Create an account</h1>
        <form action="">
          <div className="inputBox mt-5 ">
            <input
              className="w-full h-11 mb-5 bg-gray-200 rounded-xl px-5"
              type="text"
              placeholder="Firs Name"
            />
            <input
              className="w-full h-11 mb-5 bg-gray-200 rounded-xl px-5"
              type="text"
              placeholder="Last Name"
            />
            <input
              className="w-full h-11 mb-5 bg-gray-200 rounded-xl px-5"
              type="email"
              placeholder="Email"
            />
            <input
              className="w-full h-11 bg-gray-200 rounded-xl px-5"
              type="password"
              placeholder="Password"
            />
            <div className=" flex item-center justify-center gap-3 mt-7">
              <input className="w-5 h-5 " type="checkbox" />
              <p className=" text-xs text-gray-700">
                By proceeding, i agree to all{" "}
                <span className="text-blue-400 underline">T&C</span> and{" "}
                <span className="text-blue-400 underline">Privacy Policy</span>
              </p>
            </div>
            <Link to={"/goal"}>
            <button className="w-full h-11 bg-gradient-to-r from-blue-300 to-blue-400 rounded-xl text-white mt-10">
                Create an Account
              </button>
            </Link>
              
              <div className="flex  justify-center items-center mt-5 gap-2">
                <h6 className="w-full h-1 border-t-2 border-gray-400"></h6>
                <p className="-mt-2">or</p>
                <h6 className="w-full h-1 border-t-2 border-gray-400"></h6>
              </div>

              <div className="flex items-center justify-center gap-4 mt-5 ">
                <p className=" flex items-center justify-center h-9 w-9 border-2 border-gray-400 rounded-lg">
                  <FcGoogle />
                </p>
                <p className=" flex items-center justify-center h-9 w-9 border-2 text-blue-500 border-gray-400 rounded-lg">
                  <FaFacebookF />
                </p>
              </div>

              <h6 className=" text-xs flex items-center justify-center mt-5 gap-1">
                Already have an account? 
                <Link to={"/signin"}>
                <span className="text-blue-300 ">Login</span>
                </Link>
                
              </h6>
            
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
