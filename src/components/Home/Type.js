import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer 💻",
          "Solutions Engineer 🧑‍💻",
          "Foodie 🍽️",
          "AI Enthusiast 🤖",
          "Finds a reason to Dance 🕺",
          "Problem Solver 🛠️",
          "Waiting for a reason to Travel ✈️",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
