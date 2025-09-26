import React, { useState } from "react";
import positiveImg from "../assets/Development/positive_bottle.png";
import negativeImg from "../assets/Development/negative_bottle.png";

const questions = [
  {
    text: "Which bottle is better for the environment?",
    options: [
      { label: "Plastic", correct: false },
      { label: "Steel", correct: true },
    ],
  },
  {
    text: "What should you do with a plastic bag after use?",
    options: [
      { label: "Throw in street", correct: false },
      { label: "Reuse or recycle", correct: true },
    ],
  },
  {
    text: "What’s better for travel?",
    options: [
      { label: "Car for short distance", correct: false },
      { label: "Bike/Walking", correct: true },
    ],
  },
];

const mockMessages = [
  "Haha! Foolish human, your greed feeds me!",
  "Again?! Didn’t you learn last time?",
  "Wrong! Pay attention, human!"
];

const LearningPhase = ({ nextStep, ecoPoints, setEcoPoints, wrongCount, setWrongCount }) => {
  const [currentQ, setCurrentQ] = useState(0);
  const [feedbackImg, setFeedbackImg] = useState(null);

  const handleAnswer = (correct) => {
    if (correct) {
      setEcoPoints(ecoPoints + 10);
      setFeedbackImg(positiveImg);
    } else {
      setWrongCount(wrongCount + 1);
      setFeedbackImg(negativeImg);
      const msg = mockMessages[wrongCount % mockMessages.length];
      alert(msg);
    }

    setTimeout(() => {
      if (currentQ < questions.length - 1) {
        setCurrentQ(currentQ + 1);
        setFeedbackImg(null);
      } else {
        nextStep();
      }
    }, 1000);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>{questions[currentQ].text}</h2>
      <div>
        {questions[currentQ].options.map((opt, idx) => (
          <button key={idx} onClick={() => handleAnswer(opt.correct)} style={{ margin: "5px" }}>
            {opt.label}
          </button>
        ))}
      </div>
      {feedbackImg && <img src={feedbackImg} alt="Feedback" width="200" />}
    </div>
  );
};

export default LearningPhase;
