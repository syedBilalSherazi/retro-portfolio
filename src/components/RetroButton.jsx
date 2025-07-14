import useClickSound from "../hooks/useclicksound";

const RetroButton = ({ children, onClick, className = "", ...props }) => {
  const playClick = useClickSound();

  const handleClick = (e) => {
    playClick();
    onClick?.(e);
  };

  return (
    <button onClick={handleClick} className={`retro-btn ${className}`} {...props}>
      {children}
    </button>
  );
};

export default RetroButton;
