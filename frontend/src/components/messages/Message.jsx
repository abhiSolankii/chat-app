import React from "react";

const Message = () => {
  return (
    <div className="chat chat-start">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt="chat bubble" src="/bg.png" />
        </div>
      </div>
      <div className="chat-bubble text-white  bg-blue-500 pb-2">
        Hello, are you there?
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        11:42
      </div>
    </div>
  );
};

export default Message;
