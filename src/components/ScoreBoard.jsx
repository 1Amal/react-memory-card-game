import { useState } from "react";
import "../styles/main-style-sheet.css";

export default function ScoreBoard({scoreBoardObject}) {

  
  return (
    <div className="gameScore">
      <h1>
        Current Score: {scoreBoardObject.currentScore} | Best Score: {scoreBoardObject.bestScore}
      </h1>
    </div>
  );
}
