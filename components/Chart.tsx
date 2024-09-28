"use client";
import React from "react";
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis } from "recharts";

const data = [
  { name: 0, value: 0 },
  { name: 1, value: 0 },
  { name: 2, value: 0 },
  { name: 3, value: 0 },
  { name: 4, value: 0 },
  { name: 5, value: 0 },
  { name: 6, value: 0 },
  { name: 7, value: 0 },
  { name: 8, value: 0 },
  { name: 9, value: 9 },
  { name: 10, value: 4 },
];

export default function Charts() {
  return (
    <ResponsiveContainer width={"100%"} height={"100%"}>
      <LineChart width={800} height={400} data={data}>
        <Line
          dot={{ stroke: "red", strokeWidth: 2 }}
          type="monotone"
          dataKey="value"
          stroke="#F46161"
          strokeWidth={4}
        />
        <XAxis dataKey="name" />
      </LineChart>
    </ResponsiveContainer>
  );
}
