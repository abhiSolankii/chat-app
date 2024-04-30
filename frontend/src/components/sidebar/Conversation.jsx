import React from "react";

const Conversation = () => {
  return (
    <>
      <div className="flex fap-2 items-center hover:bg-sky-500 p-2 py-1  cursor-pointer">
        <div className="avatar online ">
          <div className="w-12 rounded-full">
            <img src="/bg.png" alt="user avatar" />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex justify-between gap-3">
            <p className="font-bold text-gray-300 ">John Doe</p>
            <span className="text-xl ">☠️</span>
          </div>
        </div>
      </div>
      <div className="divider py-0 my-0 h-1"></div>
    </>
  );
};

export default Conversation;
