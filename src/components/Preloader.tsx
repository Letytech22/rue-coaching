
import { useEffect, useState } from "react";

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const fadeTimer = window.setTimeout(() => {
      setLeaving(true);
    }, 1200);

    const removeTimer = window.setTimeout(() => {
      setVisible(false);
    }, 1800);

    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`rue-preloader ${leaving ? "rue-preloader-hide" : ""}`}
      role="status"
      aria-label="Loading RueCoaching"
    >
     <div className="rue-preloader-content">
  <h2 className="rue-preloader-title">
    RueCoaching
  </h2>

  <div className="rue-preloader-dots" aria-hidden="true">
    <span />
    <span />
    <span />
    <span />
  </div>
</div>
    </div>
  );
}
