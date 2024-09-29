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

export default function Charts({}) {
  const { user, resultValue, gameStarted, setGameStarted, speed } =
    useGlobalContext();

  const data = generateData(Number(resultValue).toFixed(0));

  const animationDuration = () => {
    switch (speed) {
      case 1:
        return 10000;
      case 2:
        return 5000;
      case 3:
        return 3000;
      case 4:
        return 2000;
      case 5:
        return 1000;
      default:
        return 2000; // veya başka bir varsayılan değer
    }
  };

  const counterRef = useRef(null);
  const startCount = useRef(0);
  const target = resultValue;

  useEffect(() => {
    const incrementCount = () => {
      if (startCount.current < target) {
        startCount.current += 0.005; // Hızı ayarlamak için
        if (counterRef.current) {
          counterRef.current.innerText =
            Math.min(startCount.current.toFixed(2), target).toFixed(2) + "x";
        }
        requestAnimationFrame(incrementCount);
      }
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
      setGameStarted(false);
    }, animationDuration()); // Animasyon süresiyle aynı olmalı

    return () => clearTimeout(timeout); // Temizleme fonksiyonu
  }, [resultValue, gameStarted]);

  return (
    <>
      <div className="flex justify-between mb-4 gap-4">
        <InfoBox icon={<Medal />} value={user?.total} />
        <InfoBox icon={<Person />} value={user?.userName} />
        <InfoBox icon={<Clock />} value={user.userName && "21:30"} />
      </div>
      <div className="bg-[#242A39] rounded-lg p-8 border border-gray-700  ">
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
                // type="bump"
                type="monotone"
                animationDuration={animationDuration()}
                animationEasing="ease-in-out"
              />
            )}
            <Legend
              verticalAlign="top"
              height={36}
              content={(props) => {
                return (
                  <div className="flex items-center justify-center">
                    <h2
                      ref={counterRef}
                      className="text-[#F3586A] font-bold text-7xl text-center pt-8 "
                    >
                      0x
                    </h2>
                  </div>
                );
              }}
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

const CustomizedDot = (props) => {
  const { cx, cy, value, last } = props;

  if (value === null || value == 0 || value != Math.round(Number(last))) {
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
