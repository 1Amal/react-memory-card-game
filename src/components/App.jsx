import { useState } from "react";
import reactLogo from "../assets/react.svg";

import ScoreBoard from "./ScoreBoard.jsx";
import Introduction from "./Introduction.jsx";
import CardsContainer from "./CardsContainer.jsx";
import GameLogic from "./GameLogic.jsx";

import "../styles/main-style-sheet.css";

function App({ currentScore }) {
  return (
    <div>
      <GameLogic />
    </div>
  );
}

export default App;
