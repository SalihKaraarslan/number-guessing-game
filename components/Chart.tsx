"use client";
import React, { useEffect, useRef } from "react";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const generateData = (maxValue) => {
  const data = [
    { name: 0 },
    { name: 1 },
    { name: 2 },
    { name: 3 },
    { name: 4 },
    { name: 5 },
    { name: 6 },
    { name: 7 },
    { name: 8 },
    { name: 9 },
    { name: 10 },
  ];

  // Her bir elemanın value'sunu maxValue ile karşılaştırarak güncelle
  for (let i = 0; i < data.length; i++) {
    data[i].value =
      i < maxValue ? (i * i) / maxValue : i == maxValue ? i : null;
  }

  return data;
};
// const data = [
//   { name: 0, value: 0 },
//   { name: 2, value: 0.5 },
//   { name: 4, value: 2 },
//   { name: 6, value: 3 },
//   { name: 8, value: 4 },

//   { name: 10, value: 8 },
// ];
const CustomizedDot = (props) => {
  const { cx, cy, stroke, payload, value, last } = props;

  if (value === null || value == 0 || value !== last) {
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
  const [value, setValue] = React.useState(0);
  const data = generateData(value);

  const counterRef = useRef(null);
  const startCount = useRef(0);
  const target = value;

  useEffect(() => {
    const incrementCount = () => {
      if (startCount.current < target) {
        // Değeri artır
        startCount.current += 0.025; // Hızı burada ayarlayabilirsin
        // DOM elemanını güncelle
        if (counterRef.current) {
          counterRef.current.innerText =
            Math.min(startCount.current.toFixed(1), target) + " x";
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
    <div className="bg-[#242A39] rounded-lg p-8 border border-gray-700  ">
      <ResponsiveContainer width={"100%"} height={400}>
        <LineChart
          width={800}
          height={500}
          data={data}
          margin={{ top: 50, right: 20, bottom: 5, left: 20 }}
        >
          {value !== 0 && (
            <Line
              dataKey="value"
              dot={<CustomizedDot last={value} />}
              stroke="#F46161"
              strokeWidth={4}
              // type="bump"
              type="monotone"
              animationDuration={2000}
              animationEasing="ease-in-out"
            />
          )}
          <Legend
            verticalAlign="top"
            height={36}
            content={(props) => {
              return (
                <div className="flex items-center justify-center">
                  {/* <div
                    className="w-3 h-3 rounded-full bg-[#F46161] mr-2"
                    style={{ boxShadow: "0px 0px 10px #F46161" }}
                  ></div> */}
                  <h2
                    ref={counterRef}
                    onClick={() => setValue(7)}
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
            tickCount={11}
            type="number"
            allowDecimals={true}
            padding={{ left: 1, right: 0 }}
            tick={{ fill: "#A0AEC0" }}
            tickLine={false}
            tickMargin={10}
          />
          <YAxis domain={[0, 10]} hide={true} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
