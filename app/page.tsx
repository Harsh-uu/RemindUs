'use client'
import Chunks from "@/components/chunks";
import Search from "@/components/search";
import useSWR from "swr";
import { getReminders,updateReminder,createReminder,deleteReminder,productUrlEndPoint as cachekey } from "./api/reminders";

export default function Page() {
 const {
  isLoading,
  data: reminders,
  isValidating,
  mutate,
  error,
} = useSWR(cachekey, getReminders,{
  revalidateOnFocus: true,
  onSuccess: (data) =>{
    console.log(data)
    data.sort((a,b) => a.id - b.id)
  }
});

if (error) return <div>failed to load</div>;
if (isLoading || isValidating) return <div>loading...</div>;

 

  return (
    <div className="bg-gray-700 w-full  ">
        {
          reminders?.map((reminder)=>(
            <div key={reminder.id} className="bg- [#0f111a] m-2 p-4 rounded shadow-lg text-white  ">
          <h2 className="text-xl font-bold mb-2">{reminder.task}</h2>
          <p className="">{reminder.description}</p>
          <div className="mt-4">
            <span className="text-sm text-gray-500">{reminder.date}</span>
            <span className="text-sm text-gray-500 ml-4">{reminder.time}</span>
          </div>
        </div>
          ))
        }
    </div>
  );
}
