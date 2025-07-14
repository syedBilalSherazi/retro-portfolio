import "../styles/items.css";

const powerUps = [
  
  { skill: "DevOps", level: 90 },
  { skill: "UI/UX", level: 88 },
  { skill: "MERN", level: 89 },
];

const inventory = [
  "Mern", "Jenkins", "AWS", "Firebase", "Docker", "HTML5",
  "CSS3", "JavaScript", "TypeScript", "React", "Jenkins", "Node.js",
  "MongoDB", "Git", "Figma", "Tailwind"
];

export default function Items() {
  return (
    <div className="items-container">
      <h2 className="items-heading">⚡ POWER-UPS & ITEMS</h2>

      <div className="powerups-grid">
        {powerUps.map((item, index) => (
          <div className="power-card" key={index}>
            <h3 className="power-title">{item.skill}</h3>
            <p className="power-level">LEVEL {item.level}</p>
            <div className="power-bar">
              <div className="power-fill" style={{ width: `${item.level}%` }}></div>
            </div>
            <span className="power-percent">{item.level}%</span>
          </div>
        ))}
      </div>

      <h3 className="inventory-heading">🎒 INVENTORY</h3>
      <div className="inventory-grid">
        {inventory.map((skill, idx) => (
          <div className="inventory-item" key={idx}>
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}
