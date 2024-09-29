"use client";

import { getRandomDecimal, getRandomMultipleOf50 } from "@/lib/utils";
import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
} from "react";

const GlobalContext = createContext({
  userName: "",
  setUserName: (): string => "",
});

export const GlobalContextProvider = ({ children }) => {
  const [gameStarted, setGameStarted] = useState(false);
  const [resultValue, setResultValue] = useState(0.0);
  const [speed, setSpeed] = useState(null);
  const [user, setUser] = useState({
    userName: null,
    total: null,
    point: null,
    multiplier: null,
  });

  const [userList, setUserList] = useState([
    {
      userName: "CPU 1",
      total: 1000,
      point: null,
      multiplier: null,
    },
    {
      userName: "CPU 2",
      total: 1000,
      point: null,
      multiplier: null,
    },
    {
      userName: "CPU 3",
      total: 1000,
      point: null,
      multiplier: null,
    },
    {
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
      setResultValue(getRandomDecimal());
    }
  }, [user.point]);

  return (
    <GlobalContext.Provider
      value={{
        user,
        setUser,
        gameStarted,
        setGameStarted,
        resultValue,
        setResultValue,
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

export const useGlobalContext = () => useContext(GlobalContext);
