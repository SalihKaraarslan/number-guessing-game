import { useState } from "react";
import { useGlobalContext } from "@/app/Context/store";

export default function Welcome() {
  const { setUser } = useGlobalContext();
  const [inputValue, setInputValue] = useState("");

  const isInputValid = inputValue.length >= 3;

  const handleAccept = () => {
    if (isInputValid) {
      setUser({
        id: 0,
        userName: inputValue,
        total: 1000,
        point: null,
        multiplier: null,
      });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && isInputValid) {
      handleAccept();
    }
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center bg-gray-800 rounded-xl shadow-xl">
      <h1 className="absolute top-1/4 text-2xl font-semibold text-center text-gray-400">
        Welcome
      </h1>
      <div className="w-full h-full max-w-md px-8 flex flex-col justify-center">
        <div className="space-y-3">
          <p className="text-center text-xs font-small text-gray-400">
            Please Insert Your Name
          </p>
          <input
            className={`w-full px-3 py-3 bg-[#151A21] border rounded-md text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent ${
              !isInputValid && inputValue.length > 0
                ? "border-red-500"
                : "border-gray-800"
            }`}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            aria-label="Username input"
            required
          />
          {!isInputValid && inputValue.length > 0 && (
            <p className="text-red-500 text-xs text-center">
              Name must be at least 3 characters long
            </p>
          )}
          <button
            onClick={handleAccept}
            className={`w-full py-3 text-white font-semibold rounded-md transition duration-300 ${
              isInputValid
                ? "bg-gradient-to-r from-[#E74189] to-[#FC6953]"
                : "bg-gray-500 cursor-not-allowed"
            }`}
            disabled={!isInputValid}
            aria-label="Accept username"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
