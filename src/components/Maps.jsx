import "../styles/maps.css";

const roadmap = [
  {
    title: "🎓 BS Computer Science",
    description: "2019, COMSATS University Islamabad. Strong academic foundation in Software Engineering, DevOps, and Cloud Computing.",
    type: "Education",
  },
  {
    title: "📢 CS Adventure Society",
    description: "Led tech events, coding challenges & managed event logistics. Developed leadership & team collaboration skills.",
    type: "Leadership",
  },
  {
    title: "🥾 COMSATS Hiking Club",
    description: "Co-Lead of the club — planned and executed hiking trips, enhanced organizational and leadership capabilities.",
    type: "Leadership",
  },
  {
    title: "🛒 Neon Lights E-Commerce",
    description: "A blazing fast React store with Firebase backend, cart, auth, and admin panel.",
    type: "MERN",
  },
  {
    title: "📦 DevOps OpsDeck",
    description: "CI/CD pipelines, Docker builds, Jenkins jobs & AWS EC2 magic. Automated everything.",
    type: "DevOps",
  },
  {
    title: "📚 KnowVault",
    description: "A Firebase-powered book vault with Google Sheets and Admin Dashboard — for education warriors.",
    type: "Firebase",
  },
  {
    title: "🧠 Intelligent Symptomate",
    description: "React + AI-powered disease prediction engine, predicts based on symptoms.",
    type: "AI + React",
  },
  {
    title: "📈 CRM Backend",
    description: "RESTful CRM backend with Node, MongoDB and secure JWT auth. Built for business.",
    type: "Backend",
  },
  {
    title: "🌐 WordPress Showroom",
    description: "Client-based modern WordPress websites. Custom themes, SEO, fast & responsive.",
    type: "WordPress",
  },
  {
    title: "🎮 Microwaves Forbidden",
    description: "A crazy betting game UI inspired by Beavis & Butt-head. Boom or Win.",
    type: "Game UI",
  },
  {
    title: "🏨 Hostel Manager",
    description: "OOP Java-based hostel management desktop app with room tracking.",
    type: "OOP (Java)",
  },
  {
    title: "🎨 UI/UX Projects",
    description: "Custom dashboards and web UIs crafted with pixel-perfect design and user-first approach.",
    type: "Design",
  },
];

const Maps = () => {
  return (
    <div className="map-container">
      <h2 className="map-heading">🗺️ CAREER ROADMAP</h2>
      <div className="map-grid">
        {roadmap.map((item, index) => (
          <div className="map-card" key={index}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <span className="quest-type">{item.type}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Maps;
