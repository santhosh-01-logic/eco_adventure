import React, { useState } from "react";
import basicQuest from "../assets/Quest/basic_quest.png";
import epicQuest from "../assets/Quest/epic_quest.png";
import legendaryQuest from "../assets/Quest/legendary_quest.png";
import badgeBasic from "../assets/Badges/badge_basic.png";
import badgeEpic from "../assets/Badges/badge_epic.png";
import badgeLegendary from "../assets/Badges/badge_legendary.png";

const quests = [
  { name: "Basic Quest", points: 10, img: basicQuest, badge: badgeBasic, description: "Pick up one piece of plastic" },
  { name: "Epic Quest", points: 20, img: epicQuest, badge: badgeEpic, description: "Turn off unused lights/fans" },
  { name: "Legendary Quest", points: 30, img: legendaryQuest, badge: badgeLegendary, description: "Plant a sapling or water a tree" },
];

const SideQuest = ({ nextStep, ecoPoints, setEcoPoints, badges, setBadges }) => {
  const [selectedQuest, setSelectedQuest] = useState(null);
  const [completed, setCompleted] = useState(false);

  const handleQuestSelect = (quest) => {
    setSelectedQuest(quest);
  };

  const handleUpload = (e) => {
    e.preventDefault();
    if (!selectedQuest) return;
    // Award points and badge
    setEcoPoints(ecoPoints + selectedQuest.points);
    if (!badges.includes(selectedQuest.badge)) setBadges([...badges, selectedQuest.badge]);
    setCompleted(true);
    alert(`Quest Completed: ${selectedQuest.name} +${selectedQuest.points} points`);

    // Proceed to Villain Fight after a short delay
    setTimeout(() => nextStep(), 800);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Choose a Side Quest</h2>

      {!selectedQuest ? (
        <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
          {quests.map((quest) => (
            <div key={quest.name} style={{ cursor: "pointer", textAlign: "center" }}>
              <img src={quest.img} alt={quest.name} width="120" />
              <p>{quest.description}</p>
              <button onClick={() => handleQuestSelect(quest)}>Select Quest</button>
            </div>
          ))}
        </div>
      ) : (
        <div style={{ marginTop: "20px" }}>
          <h3>{selectedQuest.name}</h3>
          <img src={selectedQuest.img} alt={selectedQuest.name} width="150" />
          <p>Upload proof of your action (dummy upload for prototype)</p>
          {!completed ? (
            <form onSubmit={handleUpload}>
              <input type="file" onChange={handleUpload} />
              <br />
              <button type="submit" style={{ marginTop: "10px" }}>Submit</button>
            </form>
          ) : (
            <p>Quest Completed! 🌿</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SideQuest;

