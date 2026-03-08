import { HotKeys } from "react-hotkeys";
import React, { useContext } from "react";
import MoveContext from "../../Context/MoveContext";

const Keys = ({ children }) => {
  const { handleMove } = useContext(MoveContext);
  const keyMap = {
    MOVE_UP: ["up", "w"],
    MOVE_DOWN: ["down", "s"],
    MOVE_LEFT: ["left", "a"],
    MOVE_RIGHT: ["right", "d"],
  };

  const handlers = {
    MOVE_UP: (event) => {
      handleMove("north");
    },
    MOVE_DOWN: (event) => {
      handleMove("south");
    },
    MOVE_LEFT: (event) => {
      handleMove("west");
    },
    MOVE_RIGHT: (event) => {
      handleMove("east");
    },
  };

  return (
    <HotKeys className="outline-none" keyMap={keyMap} handlers={handlers}>
      {children}
    </HotKeys>
  );
};

export default Keys;
