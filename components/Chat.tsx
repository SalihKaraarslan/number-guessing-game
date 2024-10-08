import { useGlobalContext } from "@/app/Context/store";
import { useEffect, useState, useRef } from "react";
import { IoMdChatbubbles } from "react-icons/io";
import { io } from "socket.io-client";

interface Message {
  user: string;
  text: string;
}

const socket = io("http://localhost:3001");

export default function Chat() {
  const { user } = useGlobalContext();
  const [messages, setMessages] = useState<Message[]>([
    {
      user: "CPU 1",
      text: "hi guys",
    },
    {
      user: "CPU 2",
      text: "Hiiiiiiii men",
    },
    {
      user: "CPU 1",
      text: "I could play this game for hours!",
    },
    {
      user: "CPU 3",
      text: "I'm the best!",
    },
    {
      user: "CPU 4",
      text: "Let's team up and dominate!",
    },
    {
      user: "CPU 3",
      text: "I hope you're ready to lose!",
    },
  ]);
  const [inputMessage, setInputMessage] = useState<string>("");
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    socket.on("recieve_message", (msg: Message) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    return () => {
      socket.off("recieve_message");
    };
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      const msg: Message = {
        user: user?.userName || "anonymous user",
        text: inputMessage,
      };
      setMessages((prevMessages) => [...prevMessages, msg]);
      socket.emit("send_message", msg);
      setInputMessage("");
    }
  };

  return (
    <div className="rounded-lg">
      <div className="flex items-center mb-2">
        <IoMdChatbubbles style={{ height: 20, width: 20, color: "#F2566D" }} />
        <h2 className="text-xl font-bold ml-3 text-white">Chat</h2>
      </div>
      <div className="bg-[#1A232C] border border-gray-800 rounded-xl overflow-hidden">
        <div className="space-y-2 p-4 h-40 overflow-y-auto">
          {messages.map((msg, index) => (
            <div className="flex items-center" key={index}>
              <span className="text-transparent bg-gradient-to-r from-[#E74189] to-[#FC6953] bg-clip-text text-xs px-1 rounded mr-2">
                {msg.user}:
              </span>
              <span className="bg-gray-700 text-xs px-2 py-1 rounded-md">
                {msg.text}
              </span>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <div className="bg-[#37404E] p-3 flex items-center">
          <input
            className="flex-grow bg-[#1A232C] text-white border-none rounded-md px-3 h-10 mr-2 focus:outline-none focus:ring-2"
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
          />
          <button
            className="w-24 h-10 bg-gradient-to-r from-[#E74189] to-[#FC6953] text-white font-semibold text-md rounded-md hover:opacity-70 transition-opacity duration-300"
            onClick={handleSendMessage}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
