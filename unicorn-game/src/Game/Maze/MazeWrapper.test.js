import React from "react";
import { render } from "@testing-library/react";
import MazeWrapper from "./MazeWrapper";
import GameContextProvider from "../../Context/GameContextProvider";
import AudioContextProvider from "../../Context/AudioContextProvider";
import MoveContextProvider from "../../Context/MoveContextProvider";

test("renders without crashing", () => {
  render(
    <GameContextProvider>
      <AudioContextProvider>
        <MoveContextProvider>
          <MazeWrapper />
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
          <MazeWrapper />
        </MoveContextProvider>
      </AudioContextProvider>
    </GameContextProvider>
  );
  expect(asFragment()).toMatchSnapshot();
});
