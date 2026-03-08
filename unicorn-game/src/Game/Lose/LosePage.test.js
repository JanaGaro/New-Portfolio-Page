import React from "react";
import { fireEvent, render } from "@testing-library/react";
import LosePage from "./LosePage";
import GameContextProvider from "../../Context/GameContextProvider";
import { MemoryRouter } from "react-router-dom";

test("renders without crashing", () => {
  render(
    <GameContextProvider>
      <LosePage />
    </GameContextProvider>
  );
});

test("matches snapshot", () => {
  const { asFragment } = render(
    <GameContextProvider>
      <LosePage />
    </GameContextProvider>
  );
  expect(asFragment()).toMatchSnapshot();
});
