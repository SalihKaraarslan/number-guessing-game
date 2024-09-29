/* eslint-disable padding-line-between-statements */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useRef, useState } from "react";
import { IoMdChatbubbles } from "react-icons/io";
import { io } from "socket.io-client";

const socket = io("http://localhost:3001");

export default function Chat() {
  const user1 = useRef(null);

  useEffect(() => {
    socket.on("recieve_message", (msg) => {
      console.log("recieve_message");
    });

    socket.on("user_typing", (data) => {});

    socket.on("new_user", (newUser) => {});

    return () => {
      socket.off("recieve_message");
      socket.off("user_typing");
      socket.off("new_user");
    };
  });
  return (
    <div className="rounded-lg">
      <div className="flex items-center mb-2">
        <IoMdChatbubbles style={{ height: 20, width: 20, color: "#F2566D" }} />
        <h2 className="text-xl font-bold ml-3 text-white">Chat</h2>
      </div>
      <div className="bg-[#1A232C] border border-gray-800 rounded-xl overflow-hidden">
        <div className="space-y-2 p-4 h-40 overflow-y-auto">
          <div className="flex items-start">
            <span className="text-transparent bg-gradient-to-r from-[#E74189] to-[#FC6953] bg-clip-text text-xs px-1 rounded mr-2">
              CPU 1:
            </span>
            <span className="bg-gray-700 text-xs px-2 py-1 rounded-md">
              hi guys
            </span>
          </div>
          <div className="flex items-start">
            <span className="text-transparent bg-gradient-to-r from-[#E74189] to-[#FC6953] bg-clip-text text-xs px-1 rounded mr-2">
              CPU 2:
            </span>
            <span className="bg-gray-700 text-xs px-2 py-1 rounded-md">
              Hiiiiiii men
            </span>
          </div>
          <div className="flex items-start">
            <span className="text-transparent bg-gradient-to-r from-[#E74189] to-[#FC6953] bg-clip-text text-xs px-1 rounded mr-2">
              CPU 1:
            </span>
            <span className="bg-gray-700 text-xs px-2 py-1 rounded-md">
              I could play this game for hours!
            </span>
          </div>
          <div className="flex items-start">
            <span className="text-transparent bg-gradient-to-r from-[#E74189] to-[#FC6953] bg-clip-text text-xs px-1 rounded mr-2">
              CPU 1:
            </span>
            <span className="bg-gray-700 text-xs px-2 py-1 rounded-md">
              hi guys
            </span>
          </div>
          <div className="flex items-start">
            <span className="text-transparent bg-gradient-to-r from-[#E74189] to-[#FC6953] bg-clip-text text-xs px-1 rounded mr-2">
              CPU 2:
            </span>
            <span className="bg-gray-700 text-xs px-2 py-1 rounded-md">
              Hiiiiiii men
            </span>
          </div>
          <div className="flex items-start">
            <span className="text-transparent bg-gradient-to-r from-[#E74189] to-[#FC6953] bg-clip-text text-xs px-1 rounded mr-2">
              CPU 1:
            </span>
            <span className="bg-gray-700 text-xs px-2 py-1 rounded-md">
              I could play this game for hours!
            </span>
          </div>
        </div>
        <div className="bg-[#37404E] p-3 flex items-center">
          <input
            className="flex-grow bg-[#1A232C] text-white border-none rounded-md px-3 h-10 mr-2 focus:outline-none focus:ring-2 "
            type="text"
          />
          <button className="w-24  h-10 bg-gradient-to-r from-[#E74189] to-[#FC6953] text-white font-semibold text-md rounded-md hover:opacity-70 transition-opacity duration-300">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
