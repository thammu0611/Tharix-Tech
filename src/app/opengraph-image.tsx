import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site";

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Generated social card. Matches the site's charcoal / electric-blue system. */
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
          background: "#0b0d10",
          color: "#eef0f2",
          padding: 72,
          fontFamily: "sans-serif",
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.055) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 11,
              background: "#eef0f2",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#0b0d10",
              fontSize: 26,
              fontWeight: 800,
            }}
          >
            T
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 24, fontWeight: 800, letterSpacing: 6 }}>THARIX</span>
            <span style={{ fontSize: 12, letterSpacing: 8, color: "#6f7883", marginTop: 4 }}>
              TECHNOLOGIES
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              fontSize: 66,
              fontWeight: 800,
              letterSpacing: -2.4,
              lineHeight: 1.06,
              maxWidth: 940,
            }}
          >
            We build digital products that move businesses forward.
          </span>
          <span style={{ fontSize: 25, color: "#99a1ab", marginTop: 28 }}>
            {siteConfig.tagline}
          </span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            borderTop: "1px solid rgba(255,255,255,0.12)",
            paddingTop: 26,
          }}
        >
          <span style={{ width: 8, height: 8, borderRadius: 8, background: "#5c93ff" }} />
          <span style={{ fontSize: 19, letterSpacing: 3, color: "#99a1ab" }}>
            ENGINEERING · DESIGN · AI · CLOUD
          </span>
        </div>
      </div>
    ),
    size,
  );
}
