import { useEffect } from "react";
import "../styles/about.css";
import avatar from "../assets/avatar.png";
import gameClickSound from "../assets/start-sound.mp3";
import RetroButton from "./RetroButton";
import useClickSound from "../hooks/useclicksound";

const AboutMe = () => {
  const playClickSound = useClickSound();

  useEffect(() => {
    const sound = new Audio(gameClickSound);
    sound.play();
  }, []);

  return (
    <div className="retro-about-container">
      {/* 🔹 Moving Dots Background Layer */}
      <div className="moving-dot-bg"></div>

      <h1 className="profile-header" style={{ fontSize: "1.6rem" }}>
        PLAYER.PROFILE
      </h1>

      <div className="profile-grid">
        {/* Left Side */}
        <div className="player-card">
          <img src={avatar} alt="Pixel Avatar" className="avatar-pixel" />
          <h2 className="player-name" style={{ fontSize: "1rem" }}>
            SYED BILAL SHERAZI
          </h2>
          <p className="player-role" style={{ fontSize: "0.75rem" }}>
            FULL STACK • DEVOPS • UI/UX
          </p>
          <div className="player-stats">
            <p className="exp" style={{ fontSize: "0.7rem" }}>
              EXPERIENCE: 6+ YEARS
            </p>
            <p className="lvl" style={{ fontSize: "0.7rem" }}>
              LEVEL: ADVANCED
            </p>
            <p className="power" style={{ fontSize: "0.7rem" }}>
              POWER: MAXIMUM
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="player-brief">
          <h3 className="brief-title" style={{ fontSize: "0.9rem" }}>
            MISSION BRIEFING
          </h3>
          <p className="brief-text" style={{ fontSize: "0.7rem" }}>
            UI/UX Designer & DevOps Enthusiast. Proficient in React, Node.js,
            Express, MongoDB, Jenkins, Docker, and AWS. Builds scalable apps
            with Firebase, CI/CD, and cloud integrations. Always exploring new
            tech, crafting solutions, and delivering results.
          </p>

          <h3 className="abilities-title" style={{ fontSize: "0.9rem" }}>
            SPECIAL ABILITIES
          </h3>
          <div className="abilities-list">
            <span>ANGULAR</span>
            <span>.NET Core</span>
            <span>Problem Solving</span>
            <span>Creative Thinking</span>
            <span>CI/CD</span>
            <span>Docker</span>
            <span>MongoDB</span>
            <span>AWS</span>
            <span>Figma</span>
          </div>

          {/* 🔊 Click Sound Trigger */}
          <div style={{ marginTop: "2rem" }}>
            <RetroButton onClick={playClickSound}> </RetroButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
