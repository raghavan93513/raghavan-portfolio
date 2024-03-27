import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Data Scientist 💻📈",
          "Foodie 🍕🍽️",
          "Data Analyst 📊🕵",
          "Finds a reason to Dance🕺🎶",
          "Software Developer 🛠️🌐",
          "Waiting for a reason to Travel ✈️🧳",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
