"use client";

import { getRandomDecimal, getRandomMultipleOf50 } from "@/lib/utils";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

const GlobalContext = createContext({
  user: {
    id: null,
    userName: null,
    total: null,
    point: null,
    multiplier: null,
  },
  setUser: () => {},
  gameStarted: false,
  setGameStarted: () => {},
  round: 0,
  setRound: () => {},
  showRanking: false,
  setShowRanking: () => {},
  resultValue: 0.0,
  setResultValue: () => {},
  chartValue: 0.0,
  setChartValue: () => {},
  speed: 1,
  setSpeed: () => {},
  userList: [],
  setUserList: () => {},
});

const GlobalContextProvider = ({ children }) => {
  const [round, setRound] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [showRanking, setShowRanking] = useState(false);
  const [resultValue, setResultValue] = useState(0.0);
  const [chartValue, setChartValue] = useState(0.0);
  const [speed, setSpeed] = useState(2);
  const [user, setUser] = useState({
    id: null,
    userName: null,
    total: null,
    point: null,
    multiplier: null,
  });

  const [userList, setUserList] = useState([
    {
      id: 1,
      userName: "CPU 1",
      total: 1000,
      point: null,
      multiplier: null,
    },
    {
      id: 2,
      userName: "CPU 2",
      total: 1000,
      point: null,
      multiplier: null,
    },
    {
      id: 3,
      userName: "CPU 3",
      total: 1000,
      point: null,
      multiplier: null,
    },
    {
      id: 4,
      userName: "CPU 4",
      total: 1000,
      point: null,
      multiplier: null,
    },
  ]);

  useEffect(() => {
    if (user.userName) {
      setUserList((prev) => [user, ...prev]);
    }
  }, [user.userName]);

  useEffect(() => {
    if (user.point && gameStarted) {
      setUserList((prevUserList) =>
        prevUserList.map((player) =>
          player.userName === user.userName
            ? {
                ...player,
                point: user.point,
                multiplier: user.multiplier,
              }
            : {
                ...player,
                point: getRandomMultipleOf50(),
                multiplier: getRandomDecimal(),
              }
        )
      );
      const random = getRandomDecimal();
      setResultValue(random);
      setChartValue(random);
    }
  }, [round, gameStarted, user]);

  return (
    <GlobalContext.Provider
      value={{
        user,
        setUser,
        gameStarted,
        setGameStarted,
        round,
        setRound,
        showRanking,
        setShowRanking,
        resultValue,
        setResultValue,
        chartValue,
        setChartValue,
        speed,
        setSpeed,
        userList,
        setUserList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

const useGlobalContext = () => useContext(GlobalContext);

export { GlobalContextProvider, useGlobalContext };
