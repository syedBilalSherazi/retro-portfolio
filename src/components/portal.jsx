import "../styles/portal.css";

const Portal = () => {
  return (
    <div className="portal-container">
      <h2 className="portal-heading">📡 CONTACT PORTAL</h2>
      <p className="portal-intro">

Welcome, traveler! You've reached the final gateway.

Whether you're a recruiter, collaborator, client, or curious explorer — this is where our paths can cross. Use any of the links below to open communication channels, summon digital scrolls, or simply say hi.

Let's team up, share quests, or build the next big thing together.

🕹️ Tap a channel to initiate the transmission:
</p>
      
      <div className="contact-grid">
        <div className="contact-card">
          <h3>📸 Instagram</h3>
          <a href="https://www.instagram.com/sherazi.ss?igsh=aDVhbWs3eWdsbm1l&utm_source=qr" target="_blank" rel="noreferrer">
            sherazi.ss
          </a>
        </div>

        <div className="contact-card">
          <h3>💼 LinkedIn</h3>
          <a href="https://www.linkedin.com/in/syed-bilal-sherazi-7b302a242?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noreferrer">
            Syed Bilal Sherazi
          </a>
        </div>

        <div className="contact-card">
          <h3> Fiverr</h3>
          <a href="https://www.fiverr.com/s/ljyZ8mR?utm_source=CopyLink_Mobile" target="_blank" rel="noreferrer">
            Fiverr
          </a>
        </div>

        <div className="contact-card">
          <h3>📧 Email</h3>
          <a href="syedbilalsherazi1004@gmail.com">syedbilalsherazi1004@gmail.com</a>
        </div>

        <div className="contact-card">
          <h3>📱 WhatsApp</h3>
          <a href="https://wa.me/923002244653" target="_blank" rel="noreferrer">
            +923002244653
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portal;
