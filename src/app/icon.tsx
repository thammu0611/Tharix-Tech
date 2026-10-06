import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/** Favicon: the Tharix beam-and-aperture mark. */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0b0d10",
          borderRadius: 7,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <div style={{ position: "absolute", top: 9, left: 7, width: 18, height: 3, background: "#f6f6f5" }} />
        <div style={{ position: "absolute", top: 9, left: 14.5, width: 3, height: 15, background: "#f6f6f5" }} />
        <div
          style={{
            position: "absolute",
            top: 15,
            left: 13,
            width: 6,
            height: 6,
            borderRadius: 6,
            background: "#5c93ff",
          }}
        />
      </div>
    ),
    size,
  );
}
