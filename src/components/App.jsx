import { useState } from "react";
import reactLogo from "../assets/react.svg";
// import viteLogo from '/vite.svg'
// import './App.css'
import "../styles/main-style-sheet.css";

function App() {
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Memory Card Game</h1>
      <div className="card"></div>
    </>
  );
}

export default App;
