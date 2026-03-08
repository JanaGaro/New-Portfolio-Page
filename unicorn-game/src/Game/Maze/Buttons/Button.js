import React, { useContext } from "react";
import MoveContext from "../../../Context/MoveContext";

const Button = ({ children, direction }) => {
  const { handleMove } = useContext(MoveContext);
  return (
    <button
      className="mx-4 gradient-pink border-2 shadow-xl border-purple-600 text-white px-3 py-2 rounded bg-blue-400 p-1"
      onClick={() => handleMove(direction)}
    >
      {children}
    </button>
  );
};

export default Button;
