import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = "404 — tanev.design";
  }, [location.pathname]);

  return (
    <main
      style={{
        minHeight: "100svh",
        display: "grid",
        placeItems: "center",
        padding: "clamp(40px, 8vw, 120px)",
      }}
    >
      <div style={{ maxWidth: 720, textAlign: "center", display: "grid", gap: 24 }}>
        <div className="eyebrow" style={{ justifySelf: "center" }}>
          <span className="eyebrow-num">[404]</span> &nbsp; Not found
        </div>
        <h1
          className="display"
          style={{ fontSize: "clamp(72px, 14vw, 200px)", lineHeight: 0.9, margin: 0, letterSpacing: "-0.02em" }}
        >
          A door that does not open.
        </h1>
        <p style={{ color: "var(--td-fg-2)", fontSize: 18, maxWidth: 480, margin: "0 auto" }}>
          The page you tried to reach is not part of this site. It happens. The way back is below.
        </p>
        <div style={{ justifySelf: "center", marginTop: 16 }}>
          <a href="/" className="btn">
            Return home
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
