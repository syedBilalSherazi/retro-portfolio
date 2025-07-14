import { useState } from "react";
import "../styles/startscreen.css";
import startSound from "../assets/start-sound.mp3";

export default function StartScreen({ onStart }) {
  const [audio] = useState(new Audio(startSound));

  const handleStart = () => {
    audio.volume = 0.5;
    audio.play();
    setTimeout(() => onStart(), 500);
  };

  return (
    <div className="retro-screen">
      <div className="stars" />
      <div className="content-box">
        <h1 className="retro-title">SYED BILAL SHERAZI</h1>
        <p className="subtitle">SOFTWARE DEVELOPER PORTFOLIO</p>
        <div className="hud">
          <span>SCORE: <b>000</b></span>
          <span>LIVES: <b>∞</b></span>
        </div>
        <button className="start-btn" onClick={handleStart}>🎮 PRESS START</button>
        <div className="footer-ui">
          <span className="tip">Press <kbd>CTRL</kbd> to skip intro</span>
        </div>
      </div>
    </div>
  );
}
