import React, { useState } from "react";
import IntroScreen from "./components/IntroScreen";
import WorldMap from "./components/WorldMap";
import LearningPhase from "./components/LearningPhase";
import SideQuest from "./components/SideQuest";
import VillainFight from "./components/VillainFight";
import Rewards from "./components/Rewards";

function App() {
  const [gameState, setGameState] = useState("intro");
  const [ecoPoints, setEcoPoints] = useState(0);
  const [badges, setBadges] = useState([]);
  const [villainHP, setVillainHP] = useState(3);
  const [wrongCount, setWrongCount] = useState(0); // track repeated wrong answers

  const nextStep = () => {
    switch (gameState) {
      case "intro":
        setGameState("map");
        break;
      case "map":
        setGameState("learning");
        break;
      case "learning":
        setGameState("sideQuest");
        break;
      case "sideQuest":
        setGameState("villain");
        break;
      case "villain":
        setGameState("rewards");
        break;
      default:
        setGameState("intro");
    }
  };

  return (
    <div>
      {gameState === "intro" && <IntroScreen nextStep={nextStep} />}
      {gameState === "map" && <WorldMap nextStep={nextStep} />}
      {gameState === "learning" && (
        <LearningPhase
          nextStep={nextStep}
          ecoPoints={ecoPoints}
          setEcoPoints={setEcoPoints}
          wrongCount={wrongCount}
          setWrongCount={setWrongCount}
        />
      )}
      {gameState === "sideQuest" && (
        <SideQuest
          nextStep={nextStep}
          ecoPoints={ecoPoints}
          setEcoPoints={setEcoPoints}
          badges={badges}
          setBadges={setBadges}
        />
      )}
      {gameState === "villain" && (
        <VillainFight
          nextStep={nextStep}
          villainHP={villainHP}
          setVillainHP={setVillainHP}
          setWrongCount={setWrongCount}
          wrongCount={wrongCount}
        />
      )}
      {gameState === "rewards" && <Rewards ecoPoints={ecoPoints} badges={badges} />}
    </div>
  );
}

export default App;
