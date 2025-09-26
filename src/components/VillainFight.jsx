import React, { useState } from "react";
import villainIdle from "../assets/Villain/villain_idle.png";

const fightQuestions = [
  {
    text: "Which bottle will fill the oceans with waste if you keep using it?",
    options: [
      { label: "Plastic", correct: true },
      { label: "Steel", correct: false },
    ],
  },
  {
    text: "Which action gives the villain strength?",
    options: [
      { label: "Littering", correct: true },
      { label: "Recycling", correct: false },
    ],
  },
];

const VillainFight = ({ nextStep, villainHP, setVillainHP, wrongCount, setWrongCount }) => {
  const [currentQ, setCurrentQ] = useState(0);
  const [localWrong, setLocalWrong] = useState(0);

  const handleAnswer = (correct) => {
    if (correct) {
      setVillainHP(villainHP - 1);
      alert("Correct! Villain weakens!");
    } else {
      setLocalWrong(localWrong + 1);
      alert("Wrong! Villain mocks you!");
      if (localWrong + 1 >= 3) {
        alert("You made too many mistakes! Retry the fight.");
        setVillainHP(3);
        setLocalWrong(0);
        setCurrentQ(0);
        return;
      }
    }

    if (villainHP - 1 <= 0) {
      alert("Villain defeated!");
      nextStep();
    } else {
      setCurrentQ((currentQ + 1) % fightQuestions.length);
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <img src={villainIdle} alt="Villain" width="200" />
      <h2>{fightQuestions[currentQ].text}</h2>
      {fightQuestions[currentQ].options.map((opt, idx) => (
        <button key={idx} onClick={() => handleAnswer(opt.correct)} style={{ margin: "5px" }}>
          {opt.label}
        </button>
      ))}
      <p>Villain HP: {villainHP}</p>
    </div>
  );
};

export default VillainFight;
