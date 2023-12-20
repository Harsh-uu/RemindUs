"use client";
import React, { useState, useRef } from "react";
import { IoMdAdd } from "react-icons/io";
import { createReminder } from "@/app/api/reminders";
import Reminder from "@/app/type";


function AddReminders() {
  const Tags = {
    TODAY: "Today",
    SCHEDULED: "Scheduled",
    ALL: "All",
    FLAGGED: "Flagged",
    COMPLETED: "Completed",
  };

  const [showModal, setShowModal] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);
  const timeRef = useRef<HTMLInputElement>(null);
  const selectRef = useRef<HTMLSelectElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    const task = inputRef.current?.value;
    const description = textareaRef.current?.value;
    const date = dateRef.current?.value;
    const time = timeRef.current?.value;
    const Tags = selectRef.current?.value;
    const id = Math.random().toString(36).substring(2, length+2);

    const newReminder = {
      id,
      task,
      description,
      date,
      time,
      Tags,
    };

    setShowModal(false);
    createReminder(newReminder);
    

    console.log(newReminder);
  };

  const handleclick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div className=" text-white">
      <IoMdAdd onClick={() => setShowModal(true)} className="text-3xl" />

      <div
        onClick={() => setShowModal(false)}
        className={`${
          showModal ? "block" : "hidden"
        } absolute top-0 left-0 h-screen w-screen bg-black/25 flex justify-center items-center`}
      >
        <div onClick={handleclick} className="w-1/3   ">
          <form
            onSubmit={handleSubmit}
            className="bg-[#0f111a] rounded-lg py-5 px-7 flex flex-col justify-center items-start gap-3  border border-white/20 "
          >
            <h1 className="text-2xl text-white">Add Tasks</h1>
            <input
              ref={inputRef}
              type="text"
              placeholder="Task"
              className="bg-gray-700 outline-none py-1 px-3 rounded w-full"
            />
            <textarea
              ref={textareaRef}
              placeholder="description"
              className="bg-gray-700 resize-none w-full outline-none py-1 px-3 rounded"
            />
            <div className="w-full flex justify-between">
              <input
                ref={dateRef}
                type="date"
                className="w-fit py-1 px-2 outline-none bg-gray-700 rounded"
              />
              <input
                ref={timeRef}
                type="time"
                className="w-fit py-1 px-4 outline-none bg-gray-700 rounded"
              />
              <select
                ref={selectRef}
                
                className=" py-2 px-4  bg-gray-700 outline-none rounded"
              >
                {Object.values(Tags).map((tag) => (
                  <option key={tag} value={tag} className="">
                    {tag}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex justify-center items-center w-full gap-5">
              <button
                className="bg-green-700 py-2 px-4 rounded-xl border  w-full border-green-900"
                type="submit"
              >
                Submit
              </button>
              <button
                className="bg-red-500/40 py-2 px-4 rounded-xl border-2  w-full border-white"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddReminders;
