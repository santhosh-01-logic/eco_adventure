import React from "react";
import introGreen from "../assets/Intro/intro_green_world.png";
import introPolluted from "../assets/Intro/intro_polluted_world.png";

const IntroScreen = ({ nextStep }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <img src={introGreen} alt="Green World" width="400" />
      <img src={introPolluted} alt="Polluted World" width="400" />
      <p>
        Long ago, the world was full of green. Humans were blessed with the choice
        to be guardians greater than angels. But greed almost destroyed the planet.
        Now, you are given one last chance… Save the Universe.
      </p>
      <button onClick={nextStep}>Start Adventure</button>
    </div>
  );
};

export default IntroScreen;
