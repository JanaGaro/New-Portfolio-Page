import React from "react";

const Form = ({ handleSubmit, handleChange, formData }) => {
  return (
    <div className="col-start-2 col-span-6 md:col-start-5 md:col-span-3 mx-auto">
      <form
        className="gradient-orchid font-mono flex flex-col border-2 border-black rounded p-5"
        onSubmit={handleSubmit}
      >
        <h3 className="font-mono text-pink-600 py-5">Game Settings</h3>
        <div className="flex items-center justify-between mb-2">
          <label className="text-xs mr-5" htmlFor="name">
            Name
          </label>
          <select
            id="name"
            name="name"
            className="px-3 py-2 rounded-xl bg-pink-50"
            onChange={handleChange}
          >
            <option value="Pinkie Pie">Pinkie Pie</option>
            <option value="Twilight Sparkle">Twilight Sparkle</option>
            <option value="Fluttershy">Fluttershy</option>
            <option value="Applejack">Applejack</option>
            <option value="Rainbow Dash">Rainbow Dash</option>
            <option value="Rarity">Rarity</option>
          </select>
        </div>
        <div className="flex items-center justify-between mb-2">
          <label className="justify-self-start text-xs" htmlFor="difficulty">
            Difficulty
          </label>
          <input
            type="range"
            id="difficulty"
            name="difficulty"
            min={0}
            max={10}
            onChange={handleChange}
            value={formData.difficulty}
          ></input>
        </div>
        <div className="flex items-center justify-between mb-2">
          <label className="justify-self-start text-xs" htmlFor="size">
            Maze Size
          </label>
          <input
            className="self-end"
            type="range"
            id="size"
            name="size"
            min={15}
            max={25}
            onChange={handleChange}
            value={formData.size}
          ></input>
        </div>
        <button className="mx-auto gradient-pink px-3 py-2 text-white font-mono rounded shadow-xl border-2 border-purple-600">
          Start Game!{" "}
        </button>
      </form>
    </div>
  );
};
export default Form;
