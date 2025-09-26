import React, { useState } from "react";
import village from "../assets/Map/village_unlocked.png";
import forestLocked from "../assets/Map/forest_locked.png";
import lockIcon from "../assets/Map/lock_icon.png";
import infoButton from "../assets/Map/info_button.png";

const WorldMap = ({ nextStep }) => {
  const [code, setCode] = useState("");

  const handleStart = () => {
    if (code.trim() !== "") {
      nextStep();
    } else {
      alert("Please enter a Classroom Code to continue.");
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Select Your World</h2>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        <div style={{ cursor: "pointer" }}>
          <img src={village} alt="Village" width="150" />
          <p>Village (Unlocked)</p>
        </div>
        <div style={{ position: "relative" }}>
          <img src={forestLocked} alt="Forest Locked" width="150" />
          <img src={lockIcon} alt="Lock" style={{ position: "absolute", top: 10, left: 10, width: 30 }} />
          <img src={infoButton} alt="Info" style={{ position: "absolute", top: 10, right: 10, width: 30 }} />
          <p>Forest (Locked)</p>
        </div>
      </div>
      <div style={{ marginTop: "20px" }}>
        <input
          type="text"
          placeholder="Enter Classroom Code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <button onClick={handleStart}>Start Learning Phase</button>
      </div>
    </div>
  );
};

export default WorldMap;
