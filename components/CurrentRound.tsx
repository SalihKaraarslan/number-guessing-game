"use client";
import { useState } from "react";
import Input from "./Input";
import { FaTrophy } from "react-icons/fa6";

export default function CurrentRound() {
  const [points, setPoints] = useState(100);
  const [multiplier, setMultiplier] = useState(2.15);

  return (
    <>
      <div className="flex justify-between mb-4 gap-4">
        <Input label="Points" value={points} setValue={setPoints} />
        <Input
          label="Multiplier"
          value={multiplier}
          setValue={setMultiplier}
          step={0.01}
        />
      </div>
      <button className="w-full py-3 mb-5 px-4 bg-gradient-to-r from-[#E74189] to-[#FC6953] text-white font-semibold text-lg rounded-md hover:opacity-70 transition-opacity duration-300">
        Start
      </button>
      <div className="rounded-lg">
        <div className="flex items-center mb-2">
          <FaTrophy style={{ height: 20, width: 20, color: "#F2566D" }} />
          <h2 className="text-xl font-bold ml-3 text-white">Current Round</h2>
        </div>
        <div className="bg-[#151A21]  border border-gray-800 rounded-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="text-xs font-medium  text-gray-400 ">
                <th className="py-1 px-12 text-left">Name</th>
                <th className="py-1 pl-24 text-center">Point</th>
                <th className="py-1 px-8 text-right">Multiplier</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map((num) => (
                <tr
                  key={num}
                  className={`text-xs text-gray-300 ${num % 2 === 0 ? "bg-[#1A232C]" : "bg-[#262E39]"} hover:bg-[#475062]`}
                >
                  <td className="py-3 px-16 text-left">-</td>
                  <td className="py-3 pl-24 text-center">-</td>
                  <td className="py-3 px-16 text-right">-</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
