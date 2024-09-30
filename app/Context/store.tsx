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

interface User {
  id: number | null;
  userName: string | null;
  total: number | null;
  point: number | null;
  multiplier: number | null;
}

interface GlobalContextType {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
  gameStarted: boolean;
  setGameStarted: Dispatch<SetStateAction<boolean>>;
  round: number;
  setRound: Dispatch<SetStateAction<number>>;
  showRanking: boolean;
  setShowRanking: Dispatch<SetStateAction<boolean>>;
  resultValue: number;
  setResultValue: Dispatch<SetStateAction<number>>;
  chartValue: number;
  setChartValue: Dispatch<SetStateAction<number>>;
  speed: number;
  setSpeed: Dispatch<SetStateAction<number>>;
  userList: User[];
  setUserList: Dispatch<SetStateAction<User[]>>;
}

const GlobalContext = createContext<GlobalContextType>({
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

interface GlobalContextProviderProps {
  children: ReactNode;
}

export const GlobalContextProvider = ({
  children,
}: GlobalContextProviderProps) => {
  const [round, setRound] = useState<number>(0);
  const [gameStarted, setGameStarted] = useState<boolean>(false);
  const [showRanking, setShowRanking] = useState<boolean>(false);
  const [resultValue, setResultValue] = useState<number>(0.0);
  const [chartValue, setChartValue] = useState<number>(0.0);
  const [speed, setSpeed] = useState<number>(2);
  const [user, setUser] = useState<User>({
    id: null,
    userName: null,
    total: null,
    point: null,
    multiplier: null,
  });

  const [userList, setUserList] = useState<User[]>([
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

export const useGlobalContext = () => useContext(GlobalContext);
