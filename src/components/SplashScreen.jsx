import { useEffect, useState } from "react";
import "../styles/splash.css";

export default function SplashScreen({ onFinish }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      onFinish();
    }, 3000); // show splash for 3 seconds
    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!show) return null;

  return (
    <div className="splash-screen">
      <div className="crt-effect">
        <h1 className="splash-title">Loading Portfolio...</h1>
        <p className="splash-sub">⌛ Please Wait ⌛</p>
      </div>
    </div>
  );
}
