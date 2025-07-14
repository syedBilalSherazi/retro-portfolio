import "../styles/GameNavbar.css";
import useClickSound from "../hooks/useclicksound";

const GameNavbar = ({ currentPage, setCurrentPage }) => {
  const playClick = useClickSound();

  const handleNavClick = (label) => {
    playClick();
    setCurrentPage(label);
  };

  return (
    <nav className="game-navbar">
      <div className="game-title">
        SYED BILAL Sherazi
      </div>
      <ul className="game-menu">
        <li
          className={currentPage === "About" ? "active" : ""}
          onClick={() => handleNavClick("About")}
        >
          PLAYER
        </li>
        <li
          className={currentPage === "Levels" ? "active" : ""}
          onClick={() => handleNavClick("Levels")}
        >
          LEVELS
        </li>
        <li
          className={currentPage === "Items" ? "active" : ""}
          onClick={() => handleNavClick("Items")}
        >
          ITEMS
        </li>
        <li
          className={currentPage === "Maps" ? "active" : ""}
          onClick={() => handleNavClick("Maps")}
        >
          MAP
        </li>
        <li
          className={currentPage === "Portal" ? "active" : ""}
          onClick={() => handleNavClick("Portal")}
        >
          PORTAL
        </li>
      </ul>
     
    </nav>
  );
};

export default GameNavbar;
