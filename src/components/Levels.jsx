import "../styles/levels.css";

const projects = [
  {
    title: "Microwaves Forbidden",
    desc: "🎲 High-Stakes Risk Game Simulator",
    tags: ["React", "Framer Motion", "Howler.js"],
  },
  {
    title: "Intelligent Symptomate",
    desc: "🧠 AI-Based Disease Prediction Engine",
    tags: ["React", "Node.js", "AI API"],
  },
  {
    title: "OpsDeck",
    desc: "⚙️ DevOps Dashboard for Automated Test Pipelines",
    tags: ["Node.js", "Jenkins", "Docker", "Selenium"],
  },
  {
    title: "KnowVault",
    desc: "📚 Educational PDF Library with Firebase Auth",
    tags: ["Firebase", "HTML", "JS"],
  },
  {
    title: "TaskTrek",
    desc: "✅ Retro Kanban Board for Productivity Warriors",
    tags: ["React", "Firebase"],
  },
];

const Levels = () => {
  return (
    <div className="levels-container">
      <h2 className="levels-heading">🕹️ SELECT LEVEL</h2>
      <div className="levels-grid">
        {projects.map((proj, i) => (
          <div key={i} className="level-card">
            <h3 className="level-title">{proj.title}</h3>
            <p className="level-desc">{proj.desc}</p>
            <div className="tags">
              {proj.tags.map((tag, idx) => (
                <span key={idx} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Levels;
