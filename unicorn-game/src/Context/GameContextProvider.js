import React, { useState } from "react";
import GameContext from "./GameContext";

const GameContextProvider = ({ children }) => {
  const initialState = {
    status: "setup",
    difficulty: 0,
    size: 15,
    name: "",
  };
  const [gameData, setGameData] = useState(initialState);

  //restarts game by setting gameData.status back to "setup"
  const playAgain = () => {
    setGameData({ ...gameData, status: "setup" });
  };

  return (
    <GameContext.Provider value={{ gameData, setGameData, playAgain }}>
      {children}
    </GameContext.Provider>
  );
};

export default GameContextProvider;
