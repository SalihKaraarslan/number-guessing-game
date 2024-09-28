"use client";

import { useState, useRef, useEffect } from "react";

export default function SpeedSlider() {
  const [speed, setSpeed] = useState(1);
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
    isDragging.current = true;
    updateSpeed(e.clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging.current) {
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
    <div className="bg-gray-900 rounded-lg w-full mt-6">
      <div className="flex items-center mb-4">
        <svg
          className="w-6 h-6 mr-2 text-red-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
        <h2 className="text-xl font-bold text-white">Speed</h2>
      </div>
      <div className="bg-gray-800 rounded-md  pt-6 pb-4 px-4  border border-gray-700">
        <div
          ref={sliderRef}
          className="relative h-1 bg-gray-700 rounded-full "
          onMouseDown={handleMouseDown}
        >
          <div
            className="absolute h-1 bg-pink-500 rounded-full"
            style={{ width: `${((speed - 1) / 4) * 100}%` }}
          ></div>
          <div
            className="absolute w-4 h-4 bg-red rounded-full -mt-1.5 -ml-2 cursor-pointer"
            style={{ left: `${((speed - 1) / 4) * 100}%` }}
          ></div>
        </div>
        <div className="flex justify-between mt-2">
          {[1, 2, 3, 4, 5].map((s) => (
            <span
              key={s}
              onClick={() => setSpeed(s)}
              className={`text-xs font-semibold cursor-pointer mt-1 ${
                speed >= s ? "text-pink-500" : "text-gray-400"
              }`}
            >
              {s}x
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
