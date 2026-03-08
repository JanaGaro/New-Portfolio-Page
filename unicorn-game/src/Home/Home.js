import React from "react";
import { Link } from "react-router-dom";
import UnicornImage from "./UnicornImage";

const Home = () => {
  return (
    <div className="p-5 h-screen ">
      <h1 className="font-black text-pink-600 text-4xl py-5 sm:py-10">
        Hi. I am a Unicorn.{" "}
      </h1>
      <div className="flex flex-col font-mono justify-evenly h-5/6">
        <UnicornImage />
        <p>
          No, I'm not a privately held startup company valued at over $1
          billion.
        </p>
        <p>
          I'm the real deal, a mystical creature of magic as well as Scotland's{" "}
          <a
            className="underline"
            href="https://www.visitscotland.com/about/uniquely-scottish/national-animal-unicorn/"
          >
            {" "}
            national animal
          </a>
          .
        </p>
        <p>
          I'm being hunted by a Monster. Can I{" "}
          <span className="text-pink-600 font-semibold">TRUST</span> you to{" "}
          <span className="text-pink-600 font-semibold">PILOT</span> me safely
          to the rainbow?
        </p>
        {/*//* changed order of Link and Button here to ma button fully clickable */}
        <Link to="/game">
          <button className="gradient-pink border-2 border-purple-600 text-white px-3 py-3 shadow-xl rounded mr-auto">
            Yes! Let's go!
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
