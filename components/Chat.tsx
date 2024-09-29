import { IoMdChatbubbles } from "react-icons/io";
export default function Chat() {
  return (
    <div className="rounded-lg">
      <div className="flex items-center mb-2">
        <IoMdChatbubbles style={{ height: 20, width: 20, color: "#F2566D" }} />
        <h2 className="text-xl font-bold ml-3 text-white">Chat</h2>
      </div>
      <div className="bg-[#1A232C] border border-gray-800 rounded-xl overflow-hidden">
        <div className="space-y-2 p-4 h-40 overflow-y-auto">
          <div className="flex items-start">
            <span className="bg-purple-700 text-xs px-1 rounded mr-2">
              CPU 1:
            </span>
            <span className="bg-gray-700 text-sm px-2 py-1 rounded-md">
              hi guys
            </span>
          </div>
          <div className="flex items-start">
            <span className="bg-purple-700 text-xs px-1 rounded mr-2">
              CPU 2:
            </span>
            <span className="bg-gray-700 text-sm px-2 py-1 rounded-md">
              Hiiiiiii men
            </span>
          </div>
          <div className="flex items-start">
            <span className="bg-purple-700 text-xs px-1 rounded mr-2">
              CPU 1:
            </span>
            <span className="bg-gray-700 text-sm px-2 py-1 rounded-md">
              I could play this game for hours!
            </span>
          </div>
          <div className="flex items-start">
            <span className="bg-purple-700 text-xs px-1 rounded mr-2">
              CPU 1:
            </span>
            <span className="bg-gray-700 text-sm px-2 py-1 rounded-md">
              hi guys
            </span>
          </div>
          <div className="flex items-start">
            <span className="bg-purple-700 text-xs px-1 rounded mr-2">
              CPU 2:
            </span>
            <span className="bg-gray-700 text-sm px-2 py-1 rounded-md">
              Hiiiiiii men
            </span>
          </div>
          <div className="flex items-start">
            <span className="bg-purple-700 text-xs px-1 rounded mr-2">
              CPU 1:
            </span>
            <span className="bg-gray-700 text-sm px-2 py-1 rounded-md">
              I could play this game for hours!
            </span>
          </div>
        </div>
        <div className="bg-[#37404E] p-3 flex items-center">
          <input
            type="text"
            className="flex-grow bg-[#1A232C] text-white border-none rounded-md px-3 h-10 mr-2 focus:outline-none focus:ring-2 "
          />
          <button className="w-24  h-10 bg-gradient-to-r from-[#E74189] to-[#FC6953] text-white font-semibold text-md rounded-md hover:opacity-70 transition-opacity duration-300">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
