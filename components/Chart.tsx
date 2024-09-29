"use client";
import React, { useEffect, useRef } from "react";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Legend,
} from "recharts";
import InfoBox from "./InfoBox";
import Medal from "@/public/Medal";
import Person from "@/public/Person";
import Clock from "@/public/Clock";
import { generateData } from "@/lib/utils";
import { useGlobalContext } from "@/app/Context/store";

interface Data {
  name: string;
  value: number;
}

export default function Charts() {
  const {
    user,
    userList,
    setUserList,
    resultValue,
    gameStarted,
    setGameStarted,
    setShowRanking,
    speed,
    setResultValue,
  } = useGlobalContext();

  const data: Data[] = generateData(Number(resultValue).toFixed(0));

  const total = userList.find(
    (player) => player.userName === user.userName
  )?.total;

  const animationDuration = (): number => {
    switch (speed) {
      case 1:
        return 6000;
      case 2:
        return 4000;
      case 3:
        return 3000;
      case 4:
        return 2000;
      case 5:
        return 1500;
      default:
        return 2000;
    }
  };

  const counterRef = useRef<HTMLHeadingElement | null>(null);
  const startCount = useRef<number>(0);
  const target = resultValue;

  useEffect(() => {
    const startTime = performance.now();
    const duration = animationDuration();

    const incrementCount = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);

      startCount.current = progress * target;

      if (counterRef.current) {
        counterRef.current.innerText = startCount.current.toFixed(2) + "x";
      }

      requestAnimationFrame(incrementCount);
    };

    requestAnimationFrame(incrementCount);
    return () => {
      startCount.current = target;
    };
  }, [target]);

  useEffect(() => {
    if (!gameStarted) {
      return;
    }
    const timeout = setTimeout(() => {
      const updateTotals = (thresholdMultiplier: number) => {
        const updatedList = userList.map((user) => {
          if (user.point !== null && user.multiplier !== null) {
            let newTotal;

            if (user.multiplier > thresholdMultiplier) {
              newTotal = user.total - user.point;
            } else {
              newTotal = user.total - user.point + user.point * user.multiplier;
            }
            newTotal = Math.max(newTotal, 0);

            return {
              ...user,
              total: newTotal,
            };
          }
          return user;
        });

        setUserList(updatedList);
      };
      updateTotals(Number(resultValue));
      setShowRanking(true);
      setGameStarted(false);
      const replay = confirm("Try Again?");
      if (replay) {
        setResultValue(0.0);
      }
    }, animationDuration() + 100);

    return () => clearTimeout(timeout);
  }, [
    resultValue,
    gameStarted,
    userList,
    setUserList,
    setShowRanking,
    setGameStarted,
  ]);

  return (
    <>
      <div className="flex justify-between mb-4 gap-4">
        <InfoBox icon={<Medal />} value={total?.toFixed(0)} />
        <InfoBox icon={<Person />} value={user?.userName} />
        <InfoBox icon={<Clock />} value={user.userName && "21:30"} />
      </div>
      <div className="bg-[#242A39] rounded-lg p-8 border border-gray-700">
        <ResponsiveContainer width={"100%"} height={450}>
          <LineChart
            width={800}
            height={450}
            data={data}
            margin={{ top: 5, right: 10, bottom: 5, left: 10 }}
          >
            {resultValue !== 0 && (
              <Line
                dataKey="value"
                dot={<CustomizedDot last={resultValue} />}
                stroke="#F46161"
                strokeWidth={4}
                type="monotone"
                animationDuration={animationDuration()}
                animationEasing="ease-in-out"
              />
            )}
            <Legend
              verticalAlign="top"
              height={36}
              content={() => (
                <div className="flex items-center justify-center">
                  <h2
                    ref={counterRef}
                    className="text-[#F3586A] font-bold text-7xl text-center pt-8"
                  >
                    0x
                  </h2>
                </div>
              )}
            />
            <XAxis
              dataKey="name"
              ticks={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
              tickCount={12}
              type="category"
              allowDecimals={true}
              padding={{ left: -50, right: 20 }}
              tick={{ fill: "#A0AEC0" }}
              tickLine={false}
              tickMargin={10}
            />
            <YAxis domain={[0, 10]} hide={true} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}

interface CustomizedDotProps {
  cx?: number;
  cy?: number;
  value?: number | null;
  last?: number;
}

const CustomizedDot: React.FC<CustomizedDotProps> = ({
  cx,
  cy,
  value,
  last,
}) => {
  if (value === null || value === 0 || value !== Math.round(Number(last))) {
    return null;
  }

  return (
    <svg
      x={cx - 10}
      y={cy - 10}
      width={20}
      height={20}
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="8" cy="8" r="8" fill="#FEBF28" />
    </svg>
  );
};
