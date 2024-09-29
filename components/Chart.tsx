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

const CustomizedDot = (props) => {
  const { cx, cy, value, last } = props;

  if (value === null || value == 0 || value != last) {
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

export default function Charts({}) {
  const [value, setValue] = React.useState(0.0);
  const data = generateData(value);

  const counterRef = useRef(null);
  const startCount = useRef(0);
  const target = value;

  useEffect(() => {
    const incrementCount = () => {
      if (startCount.current < target) {
        startCount.current += 0.025;
        if (counterRef.current) {
          counterRef.current.innerText =
            Math.min(startCount.current.toFixed(2), target).toFixed(2) + " x";
        }
        requestAnimationFrame(incrementCount);
      }
    };

    requestAnimationFrame(incrementCount);
    return () => {
      startCount.current = target;
    };
  }, [target]);

  return (
    <>
      <div className="flex justify-between mb-4 gap-4">
        <InfoBox icon={<Medal />} />
        <InfoBox icon={<Person />} />
        <InfoBox icon={<Clock />} />
      </div>
      <div className="bg-[#242A39] rounded-lg p-8 border border-gray-700  ">
        <ResponsiveContainer width={"100%"} height={500}>
          <LineChart
            width={800}
            height={500}
            data={data}
            margin={{ top: 50, right: 10, bottom: 5, left: 10 }}
          >
            {value !== 0 && (
              <Line
                dataKey="value"
                dot={<CustomizedDot last={value} />}
                stroke="#F46161"
                strokeWidth={4}
                // type="bump"
                type="monotone"
                animationDuration={1000}
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
                      onClick={() => setValue(9)}
                      className="text-[#F3586A] font-bold text-7xl text-center pt-8 "
                    >
                      0 x
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
              includeHidden={true}
            />
            <YAxis domain={[0, 10]} hide={true} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}
