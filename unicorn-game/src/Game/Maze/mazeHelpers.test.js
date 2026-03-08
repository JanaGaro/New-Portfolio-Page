import { addProps, getSpritePositions } from "./mazeHelpers";

describe("mazeHelper functions work", () => {
  test("addProps works", () => {
    const apiResponse = [
      ["west", "north"],
      ["west", "north"],
      ["north"],
      ["west"],
      ["west"],
      ["west"],
      ["west"],
      ["north"],
      [],
    ];
    const expectedResult = [
      ["west", "north", 0],
      ["west", "north", 1],
      ["north", "east", 2],
      ["west", 3],
      ["west", 4],
      ["west", "east", 5],
      ["west", "south", 6],
      ["north", "south", 7],
      ["east", "south", 8],
    ];
    expect(addProps(apiResponse, 3)).toEqual(expectedResult);
    expect(addProps(apiResponse, 3)).toHaveLength(9);
  });

  test("getSpritePositions works", () => {
    const apiResponse = {
      pony: [62],
      domokun: [110],
      "end-point": [130],
    };
    const expectedResult = {
      end: 130,
      monster: 110,
      unicorn: 62,
    };
    expect(getSpritePositions(apiResponse)).toEqual(expectedResult);
    expect(getSpritePositions(apiResponse)).toBeInstanceOf(Object);
  });
});
