"use client";
import { useState } from "react";
import Input from "./Input";
import { FaTrophy } from "react-icons/fa6";
import { useGlobalContext } from "@/app/Context/store";
import { getRandomDecimal } from "@/lib/utils";

export default function CurrentRound() {
  const { user, setUser, userList, setGameStarted, showRanking, resultValue } =
    useGlobalContext();

  const [points, setPoints] = useState(100);
  const [multiplier, setMultiplier] = useState(2.15);

  const sortedUserList = userList.sort((a, b) => a.id - b.id);

  const handleClickStart = () => {
    setUser({
      ...user,
      point: points,
      multiplier: multiplier,
    });
    setGameStarted(true);
  };

  return (
    <>
      <div className="flex justify-between mb-4 gap-4">
        <Input label="Points" value={points} setValue={setPoints} step={50} />
        <Input
          label="Multiplier"
          value={multiplier}
          setValue={setMultiplier}
          step={0.25}
        />
      </div>
      <button
        onClick={handleClickStart}
        className="w-full py-3 mb-5 px-4 bg-gradient-to-r from-[#E74189] to-[#FC6953] text-white font-semibold text-lg rounded-md hover:opacity-70 transition-opacity duration-300"
      >
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
                <th className="py-1 px-2 text-center">Name</th>
                <th className="py-1 pl-24 text-center">Point</th>
                <th className="py-1  text-center">Multiplier</th>
              </tr>
            </thead>
            <tbody>
              {showRanking
                ? sortedUserList.map((item, index) => (
                    <tr
                      key={item}
                      className={`text-xs font-bold  ${
                        Number(resultValue) > item.multiplier &&
                        (item.multiplier * item.point).toFixed(0) > 0
                          ? "text-[#52A67D]"
                          : "text-[#B07678]"
                      } ${index % 2 === 0 ? "bg-[#1A232C]" : "bg-[#262E39]"} hover:bg-[#475062]`}
                    >
                      <td className="py-3 px-2 text-center truncate">
                        {item.userName === user.userName
                          ? "You"
                          : item.userName || "-"}
                      </td>
                      <td className="py-3 pl-24 text-center truncate  ">
                        {Number(resultValue) > item.multiplier
                          ? (item.multiplier * item.point).toFixed(0)
                          : showRanking
                            ? 0
                            : "-"}
                      </td>
                      <td className="py-3  text-center truncate">
                        {item.multiplier || "-"}
                      </td>
                    </tr>
                  ))
                : sortedUserList.map((item, index) => (
                    <tr
                      key={item}
                      className={`text-xs text-gray-300 ${index % 2 === 0 ? "bg-[#1A232C]" : "bg-[#262E39]"} hover:bg-[#475062]`}
                    >
                      <td className="py-3 px-2 text-center truncate">
                        {item.userName || "-"}
                      </td>
                      <td className="py-3 pl-24 text-center truncate">
                        {item.point || "-"}
                      </td>
                      <td className="py-3  text-center truncate">
                        {item.multiplier || "-"}
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
