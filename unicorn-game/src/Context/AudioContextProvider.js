import React from "react";
import AudioContext from "./AudioContext";
import useSound from "use-sound";
import Bump from "../Assets/Audio/bump.wav";
import Move from "../Assets/Audio/move.wav";
import Lose from "../Assets/Audio/lose.wav";
import Win from "../Assets/Audio/win.wav";

const AudioContextProvider = ({ children }) => {
  //plays on illegal move
  const [playIllegal] = useSound(Bump, { volume: 0.25 });

  //plays on legal move
  const [playLegal] = useSound(Move, { volume: 0.25 });

  //plays on game over
  const [playGameOver] = useSound(Lose, { volume: 0.25 });

  //plays on game won
  const [playGameWon] = useSound(Win, { volume: 0.25 });

  return (
    <AudioContext.Provider
      value={{ playIllegal, playLegal, playGameOver, playGameWon }}
    >
      {children}
    </AudioContext.Provider>
  );
};

export default AudioContextProvider;
