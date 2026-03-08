import React from "react";
import { render, fireEvent, act } from "@testing-library/react";
import Game from "../Game";
import SetupPage from "./SetupPage";
import GameContextProvider from "../../Context/GameContextProvider";
import MoveContextProvider from "../../Context/MoveContextProvider";
import AudioContextProvider from "../../Context/AudioContextProvider";

describe("form submission works", () => {
  test("submits form", () => {
    //components won't render w/o access to context
    const { getByLabelText, getByText } = render(
      <GameContextProvider>
        <AudioContextProvider>
          <MoveContextProvider>
            <Game>
              <SetupPage />
            </Game>
          </MoveContextProvider>
        </AudioContextProvider>
      </GameContextProvider>
    );

    //select inputs & button

    const difficultyInput = getByLabelText("Difficulty");
    const nameInput = getByLabelText("Name");
    const sizeInput = getByLabelText("Maze Size");
    const submitButton = getByText("Start Game!", { exact: false });

    //change difficulty, name & size

    act(() => {
      fireEvent.change(difficultyInput, { target: { value: 10 } });
      fireEvent.change(nameInput, { target: { value: "Fluttershy" } });
      fireEvent.change(sizeInput, { target: { value: 20 } });
    });

    //submit

    act(() => {
      fireEvent.click(submitButton);
    });

    //test if maze component rendered after form submission
    //maze component will call API on render and error out, unfortunately, I don't know how to stop this

    expect(submitButton).not.toBeInTheDocument();

    //test if name has changed

    const nameSpan = getByText("Fluttershy", { exact: false });
    expect(nameSpan).toBeInTheDocument();

    //test if difficulty has changed

    const difficultySpan = getByText("Difficulty: 10");
    expect(difficultySpan).toBeInTheDocument();

    //test if size has changed

    const sizeSpan = getByText("Size: 20");
    expect(sizeSpan).toBeInTheDocument();
  });
});
