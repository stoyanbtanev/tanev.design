import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#050607",
          borderRadius: 40,
          position: "relative"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "#f7f4ed",
            fontSize: 130,
            fontWeight: 700,
            letterSpacing: -6,
            lineHeight: 1,
            fontFamily: "Inter, system-ui, sans-serif"
          }}
        >
          T
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 32,
            right: 32,
            width: 18,
            height: 18,
            borderRadius: 999,
            background: "#e8241a"
          }}
        />
      </div>
    ),
    { ...size }
  );
}
