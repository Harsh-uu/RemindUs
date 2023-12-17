import { CgCalendarToday } from "react-icons/cg";

export default function Chunks() {
    return(
        <div className="grid grid-cols-2 mt-6 gap-6 ">
            <div className="bg-[#252a40] py-2 px-2 flex justify-between rounded-md">
                <div><CgCalendarToday className="bg-blue-500 rounded-full text-3xl px-1" /> <span className="text-[12px]">Today</span></div>
                <h1>0</h1>
            </div>
            <div className="bg-[#252a40] py-2 px-2 flex justify-between rounded-md">
                 <div><CgCalendarToday className="bg-red-500 rounded-full text-3xl px-1" /> <span className="text-[12px]">Scheduled</span></div>
                <h1>0</h1>
            </div>
            <div className="bg-[#252a40] py-2 px-2 flex justify-between rounded-md">
                 <div><CgCalendarToday className="bg-gray-500 rounded-full text-3xl px-1" /> <span className="text-[12px] pl-2">All</span></div>
                <h1>0</h1>
            </div>
            <div className="bg-[#252a40] py-2 px-2 flex justify-between rounded-md">
                 <div><CgCalendarToday className="bg-yellow-500 rounded-full text-3xl px-1" /> <span className="text-[12px]">Flagged</span></div>    
                <h1>0</h1>
            </div>
            <div className="bg-[#252a40] py-2 px-2 flex justify-between rounded-md">
                 <div><CgCalendarToday className="bg-black rounded-full text-3xl px-1" /> <span className="text-[12px]">Completed</span></div>
                <h1>0</h1>
            </div>

        </div>
    )
}