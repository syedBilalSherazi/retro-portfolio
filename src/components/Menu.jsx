import "../styles/menu.css";

export default function Menu({ currentPage, setCurrentPage }) {
  const items = ["Home", "Projects", "About Me", "Skills", "Contact"];

  return (
    <nav className="menu-bar">
      {items.map((item) => (
        <span
          key={item}
          className={`menu-item ${currentPage === item ? "active" : ""}`}
          onClick={() => setCurrentPage(item)}
        >
          {item}
        </span>
      ))}
    </nav>
  );
}
