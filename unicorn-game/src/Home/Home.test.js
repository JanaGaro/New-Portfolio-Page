import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Home from "./Home";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { createMemoryHistory } from "history";
import GameContextProvider from "../Context/GameContextProvider";
import MoveContextProvider from "../Context/MoveContextProvider";
import AudioContextProvider from "../Context/AudioContextProvider";

test("renders without crashing", () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );
});

test("matches snapshot", () => {
  const { asFragment } = render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
