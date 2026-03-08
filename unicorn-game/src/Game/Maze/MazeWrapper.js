import React, { useContext } from "react";
import GameContext from "../../Context/GameContext";
import MazeGrid from "./MazeGrid";
import classNames from "classnames";
import { ArrowBendUpLeft } from "phosphor-react";

const MazeWrapper = () => {
  const { gameData, playAgain } = useContext(GameContext);

  const mazeWidthClasses = classNames({
    "mx-auto p-3": true,
    "sm:w-9/12 md:w-7/12 lg:w-5/12 xl:w-4/12": gameData.size <= 17,
    "md:w-8/12 lg:w-6/12 xl:w-5/12": gameData.size > 17 && gameData.size <= 20,
    "md:w-10/12 lg:w-7/12 xl:w-6/12": gameData.size > 20 && gameData.size <= 23,
    "md-w-11/12 lg:w-10/12 small-cell": gameData.size > 23,
  });

  const cloudDivHeightClasses = classNames({
    "bg-clouds font-mono text-center": true,
    "sm:h-screen": gameData.size < 16,
    "h-full": gameData.size >= 20,
  });

  return (
    <div className={cloudDivHeightClasses}>
      <h2 className="pt-10 ">
        Help <span className="text-pink-600">{gameData.name}</span> reach the
        rainbow! Move using arrow keys, WASD or buttons.
      </h2>
      <p className="text-sm  pb-10">
        <ArrowBendUpLeft className="inline " size={24} />
         Back to{" "}
        <button onClick={playAgain} className="underline text-pink-600">
          setup
        </button>
         
      </p>
      <div className={mazeWidthClasses}>
        <MazeGrid />
        <div className="flex justify-between">
          <span>Difficulty: {gameData.difficulty}</span>
          <span>Size: {gameData.size}</span>
        </div>
      </div>
    </div>
  );
};

export default MazeWrapper;
