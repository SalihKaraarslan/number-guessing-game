import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const generateData = (maxValue) => {
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

  for (let i = 0; i < data.length; i++) {
    data[i].value =
      i < maxValue ? (i * i) / maxValue : i == maxValue ? i : null;
  }

  return data;
};
