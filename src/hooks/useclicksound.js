import { useCallback } from "react";
import clickSound from "../assets/start-sound.mp3";

const useClickSound = () => {
  const playClick = useCallback(() => {
    const audio = new Audio(clickSound);
    audio.volume = 0.3;
    audio.play();
  }, []);

  return playClick;
};

export default useClickSound;
