import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site-config";
import { localTitle } from "@/lib/seo";

export const alt = `${siteConfig.brand.name} — ${siteConfig.brand.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Default social share image, generated from site config (applies to all pages). */
export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "linear-gradient(135deg, #101C2C 0%, #172A40 100%)",
        color: "#F7F6F2",
        padding: "72px 80px",
        fontFamily: "serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <div
          style={{
            width: 64,
            height: 64,
            border: "2px solid #C6A66B",
            color: "#C6A66B",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 28,
          }}
        >
          {siteConfig.brand.monogram}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 30 }}>{siteConfig.brand.name}</div>
          <div
            style={{
              fontSize: 16,
              letterSpacing: 4,
              color: "#9AA3B2",
              textTransform: "uppercase",
              fontFamily: "sans-serif",
            }}
          >
            {siteConfig.brand.tagline}
          </div>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: 76, lineHeight: 1.05 }}>Strategic Tax Solutions.</div>
        <div style={{ fontSize: 76, lineHeight: 1.05, color: "#C6A66B", fontStyle: "italic" }}>
          Trusted Professional Guidance.
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 20,
          fontSize: 22,
          color: "#9AA3B2",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ width: 60, height: 2, background: "#C6A66B" }} />
        {localTitle()}
      </div>
    </div>,
    size,
  );
}
