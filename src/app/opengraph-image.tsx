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
        background: "linear-gradient(120deg, #1C1C1C 0%, #1B2922 50%, #435146 100%)",
        color: "#EEF2EE",
        padding: "72px 80px",
        fontFamily: "sans-serif",
        fontWeight: 600,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <div
          style={{
            width: 64,
            height: 64,
            background: "linear-gradient(135deg, #D3EADB, #A8CDB0 45%, #6E8B6A)",
            borderRadius: 14,
            color: "#13201A",
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
              color: "#B8C6BC",
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
        <div style={{ fontSize: 76, lineHeight: 1.05, color: "#A8CDB0", fontStyle: "italic" }}>
          Trusted Professional Guidance.
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 20,
          fontSize: 22,
          color: "#B8C6BC",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ width: 60, height: 2, background: "linear-gradient(90deg, #D3EADB, #6E8B6A)" }} />
        {localTitle()}
      </div>
    </div>,
    size,
  );
}
