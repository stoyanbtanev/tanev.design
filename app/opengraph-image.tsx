import { ImageResponse } from "next/og";

export const alt = "Stoyan Tanev — Independent Web Designer in Plovdiv, Bulgaria";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#050607",
          color: "#f7f4ed",
          padding: 72,
          fontFamily: "Inter, system-ui, sans-serif",
          position: "relative"
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 80% 0%, rgba(232,36,26,0.22) 0%, rgba(232,36,26,0) 55%)",
            display: "flex"
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontSize: 22,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "rgba(247,244,237,0.62)"
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: 999,
              background: "#e8241a",
              display: "flex"
            }}
          />
          tanev.design
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 18,
            maxWidth: 980
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontSize: 88,
              fontWeight: 700,
              lineHeight: 1.02,
              letterSpacing: -3,
              color: "#f7f4ed"
            }}
          >
            <span style={{ display: "flex" }}>Independent&nbsp;</span>
            <span style={{ display: "flex", color: "#e8241a" }}>Web Designer</span>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 32,
              lineHeight: 1.3,
              color: "rgba(247,244,237,0.74)",
              maxWidth: 880
            }}
          >
            Plovdiv, Bulgaria → Worldwide. One person, end-to-end. Custom builds, SEO, performance.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 22,
            color: "rgba(247,244,237,0.55)",
            letterSpacing: 1
          }}
        >
          <div style={{ display: "flex" }}>STOYAN TANEV</div>
          <div style={{ display: "flex" }}>WWW.TANEV.DESIGN</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
