import React from "react";
import { render, act } from "@testing-library/react";
import SetupPage from "./SetupPage";
import GameContextProvider from "../../Context/GameContextProvider";

test("renders without crashing", () => {
  render(
    <GameContextProvider>
      <SetupPage />
    </GameContextProvider>
  );
});

test("matches snapshot", () => {
  const { asFragment } = render(
    <GameContextProvider>
      <SetupPage />
    </GameContextProvider>
  );
  expect(asFragment()).toMatchSnapshot();
});
