import React from "react";

const Rewards = ({ ecoPoints, badges }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Congratulations!</h2>
      <p>Total Eco Points: {ecoPoints}</p>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        {badges.map((badge, idx) => (
          <img key={idx} src={badge} alt={`Badge ${idx}`} width="80" />
        ))}
      </div>
      <h3>Leaderboard (Dummy)</h3>
      <table style={{ margin: "0 auto" }}>
        <thead>
          <tr><th>Player</th><th>Points</th></tr>
        </thead>
        <tbody>
          <tr><td>Player1</td><td>60</td></tr>
          <tr><td>Player2</td><td>40</td></tr>
        </tbody>
      </table>
    </div>
  );
};

export default Rewards;
