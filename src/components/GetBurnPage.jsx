import React from 'react'
import { IoIosBatteryCharging } from "react-icons/io";
import { FaWifi } from "react-icons/fa";
import { GiNetworkBars } from "react-icons/gi";
import { FaChevronRight } from "react-icons/fa6";

const GetBurnPage = () => {
  return (
    <div className='w-screen h-screen flex items-center bg-slate-300 justify-center   '>

    
    <div className=' w-[22rem] h-[40rem]  bg-slate-50 rounded-md '>

        <div className=' flex items-center justify-between  w-[375px] h-[44px] px-4 '>
             <p className=''>9:41</p>
             <div className='flex items-center justify-center gap-2 px-6 '>
                <GiNetworkBars/>
                <FaWifi/>
                <IoIosBatteryCharging/>
             </div>

        </div>
        <h6 className='float-end mr-4 text-blue-400 underline'>Skip</h6>
        <div className=' w-[282px] h-[282px] mt-132px ml-[36px]'>
            <img src="https://s3-alpha-sig.figma.com/img/9958/8bb7/dbf14a6d26ec54e2ba9e71eaef184f6b?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cnmn~0avDabAjLQzILRCgY476IXHYzTCaJek7sVEoQEXUiOEECHWx02whbjzL2JcRcZknHbcXi2lYImSkgVdDOBSwpLlxmfxtSO-saxF3Sb9h34KGzVPSzt89jv2Vaz--TgaKMq~eCP1TQVisv4z5CkjPBHFYvLzQSuVa4f5oKBtbtq3xEtY-Qk6XZfJseesz57V2jtSQ86t~YEVBHP~nXAxK22Own8PVopROFBlEW2dVjXgfiVkOgzEQtfzQh9svHni-JHl~v969mXaQrXCLPPaLC3Oz4vHgfYLaMYrO54IK3dWTIgxEw76tVhX7CY87RjN0L2bnoHt6YjmmAB55w__" alt="" />
        </div>

        <div className='p-5'>
            <h3 className='text-xl'>Get Burn</h3>
            <p className='text-sm text-gray-500 mt-2'>Let’s keep burning to achieve your goals, it hurts only temporarily, if you give up now you will be in pain forever</p>
        </div>
        <p className='flex items-center justify-center float-end mr-5 mt-20 w-12 h-12 text-white  bg-blue-300 rounded-full'>
            < FaChevronRight/>
        </p>
    </div>
    </div>
  )
}

export default GetBurnPage