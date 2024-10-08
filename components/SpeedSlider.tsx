"use client";

import { useGlobalContext } from "@/app/Context/store";
import { useRef, useEffect } from "react";
import { IoMdSpeedometer } from "react-icons/io";

export default function SpeedSlider() {
  const { speed, setSpeed, gameStarted } = useGlobalContext();
  const sliderRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updateSpeed = (clientX: number) => {
    if (sliderRef.current) {
      const rect = sliderRef.current.getBoundingClientRect();
      const percentage = (clientX - rect.left) / rect.width;
      const newSpeed = Math.min(Math.max(Math.round(percentage * 4) + 1, 1), 5);
      setSpeed(newSpeed);
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!gameStarted) {
      isDragging.current = true;
      updateSpeed(e.clientX);
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging.current && !gameStarted) {
      updateSpeed(e.clientX);
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div
      className=" w-full mt-5"
      role="slider"
      aria-valuemin={1}
      aria-valuemax={5}
      aria-valuenow={speed}
      tabIndex={0}
    >
      <div className="flex items-center mb-2">
        <IoMdSpeedometer style={{ height: 20, width: 20, color: "#F2566D" }} />
        <h2 className="text-xl font-bold ml-3 text-white">Speed</h2>
      </div>
      <div className="bg-gray-800 rounded-lg pt-6 pb-1 px-4 border border-gray-700">
        <div
          ref={sliderRef}
          className="relative h-1 bg-gray-700 rounded-full cursor-pointer"
          onMouseDown={handleMouseDown}
          role="presentation"
        >
          <div
            className="absolute h-1 bg-gradient-to-r from-[#E74189] to-[#FC6953] rounded-full"
            style={{ width: `${((speed - 1) / 4) * 100}%` }}
          ></div>
          <div
            className="absolute w-4 h-4 bg-gradient-to-r from-[#E74189] to-[#FC6953] rounded-full -mt-1.5 -ml-2"
            style={{ left: `${((speed - 1) / 4) * 100}%` }}
            aria-label={`Speed is set to ${speed}x`}
            role="presentation"
          ></div>
        </div>
        <div className="flex justify-between mt-2">
          {[1, 2, 3, 4, 5].map((s) => (
            <span
              key={s}
              onClick={() => !gameStarted && setSpeed(s)} // Prevent changing speed if gameStarted
              className={`text-xs font-semibold cursor-pointer mx-1 mt-1 ${
                speed >= s
                  ? "text-transparent bg-gradient-to-r from-[#E74189] to-[#FC6953] bg-clip-text"
                  : "text-gray-400"
              }`}
              role="button"
              aria-label={`Set speed to ${s}x`}
              tabIndex={0}
            >
              {s}x
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
