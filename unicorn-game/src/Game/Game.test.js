import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Game from "./Game";
import GameContextProvider from "../Context/GameContextProvider";
import AudioContextProvider from "../Context/AudioContextProvider";
import MoveContextProvider from "../Context/MoveContextProvider";

test("renders without crashing", () => {
  render(
    <GameContextProvider>
      <AudioContextProvider>
        <MoveContextProvider>
          <Game />
        </MoveContextProvider>
      </AudioContextProvider>
    </GameContextProvider>
  );
});

test("matches snapshot", () => {
  const { asFragment } = render(
    <GameContextProvider>
      <AudioContextProvider>
        <MoveContextProvider>
          <Game />
        </MoveContextProvider>
      </AudioContextProvider>
    </GameContextProvider>
  );
  expect(asFragment()).toMatchSnapshot();
});
