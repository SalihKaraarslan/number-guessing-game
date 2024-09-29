import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getRandomMultipleOf50(min = 50, max = 1000) {
  const multiplesOf50 = [];
  for (let i = min; i <= max; i += 50) {
    multiplesOf50.push(i);
  }
  const randomIndex = Math.floor(Math.random() * multiplesOf50.length);
  return multiplesOf50[randomIndex];
}

export function getRandomDecimal(min = 1, max = 9.99) {
  const randomDecimal = (Math.random() * (max - min) + min).toFixed(2);
  return randomDecimal;
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
