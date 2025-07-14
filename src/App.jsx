import { useState } from "react";
import StartScreen from "./components/StartScreen";
import Navbar from "./components/GameNavbar";
import About from "./components/About";
import Levels from "./components/Levels";
import Items from "./components/Items";
import Maps from "./components/Maps";
import Portal from "./components/portal"; // ✅ NEW: Contact Page

function App() {
  const [started, setStarted] = useState(false);
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    switch (currentPage) {
      case "About":
        return <About />;
      case "Levels":
        return <Levels />;
      case "Items":
        return <Items />;
      case "Maps":
        return <Maps />;
      case "Portal":
        return <Portal />;
      case "Home":
        return (
          <div className="text-center pt-20 text-green-400">
            <h1 className="text-4xl">👾 Welcome to My Retro Portfolio 👾</h1>
          </div>
        );
      default:
        return (
          <div className="text-center pt-20 text-green-400">
            🚧 Page coming soon...
          </div>
        );
    }
  };

  return (
    <>
      {!started ? (
        <StartScreen onStart={() => setStarted(true)} />
      ) : (
        <main className="bg-black min-h-screen text-green-400 font-mono overflow-x-hidden">
          <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
          {renderPage()}
        </main>
      )}
    </>
  );
}

export default App;
