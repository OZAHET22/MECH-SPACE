"use client";

import Link from "next/link";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden"
      style={{
        height: "100svh",
        minHeight: 640,
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* ═══════════════════════════════════════════════════════
          BACKGROUND VIDEO — primary visual, maximum visibility
      ═══════════════════════════════════════════════════════ */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            filter: "brightness(1.06) contrast(1.04) saturate(1.03)",
          }}
        >
          <source src="/video/Website_video.mp4" type="video/mp4" />
        </video>

        {/* ── Dark directional gradient: dense-left → transparent-right
              Left side is dark enough for crisp white text contrast;
              right half lets the video detail breathe.               ── */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.42) 0%, rgba(0,0,0,0.28) 40%, rgba(0,0,0,0.12) 65%, rgba(0,0,0,0.02) 100%)",
          }}
        />

        {/* Bottom edge vignette — softens cut to next section */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{
            height: 96,
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.30) 100%)",
          }}
        />
      </div>

      {/* ═══════════════════════════════════════════════════════
          CONTENT — left-aligned, 40% width, 8vw left padding
      ═══════════════════════════════════════════════════════ */}
      <div
        className="relative z-10 w-full h-full flex items-center"
        style={{ paddingLeft: "8vw", paddingRight: "4vw" }}
      >
        <div style={{ maxWidth: 520, width: "100%" }}>

          {/* ── Badge ── */}
          <div
            className="inline-flex items-center gap-2 mb-7 px-4 py-2 rounded-full"
            style={{
              background: "rgba(237,97,28,0.15)",
              border: "1px solid rgba(237,97,28,0.50)",
              backdropFilter: "blur(6px)",
              WebkitBackdropFilter: "blur(6px)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full shrink-0"
              style={{ background: "#ED611C" }}
            />
            <span
              className="font-barlow-condensed font-bold uppercase"
              style={{
                color: "#ED611C",
                fontSize: 10.5,
                letterSpacing: "0.18em",
              }}
            >
              Industrial Automation &amp; Food Machinery
            </span>
          </div>

          {/* ── Heading ──
                "Automation" + "with" → white (#F5F5F5)
                "Industry 5.0"       → orange (unchanged)            ── */}
          <h1
            className="font-barlow-condensed font-black uppercase text-left"
            style={{
              fontSize: "clamp(2.6rem, 5.8vw, 4.8rem)",
              lineHeight: 1.04,
              letterSpacing: "0.01em",
              marginBottom: "clamp(18px, 2vw, 26px)",
              textShadow: "0 3px 14px rgba(0,0,0,0.45)",
            }}
          >
            {/* "AUTOMATION WITH" → white */}
            <span style={{ color: "#F5F5F5" }}>
              <span className="italic">Automation</span> with
            </span>
            <br />
            {/* "INDUSTRY 5.0" → existing orange, unchanged */}
            <span style={{ color: "#ED611C" }}>Industry 5.0</span>
          </h1>

          {/* ── Description ──
                Base text → off-white #E0E0E0 with subtle shadow;
                orange italic portion unchanged.                       ── */}
          <p
            className="font-barlow text-left"
            style={{
              color: "#E0E0E0",
              fontSize: "clamp(0.95rem, 1.25vw, 1.08rem)",
              lineHeight: 1.8,
              maxWidth: 500,
              marginBottom: "clamp(26px, 3vw, 36px)",
              textShadow: "0 2px 8px rgba(0,0,0,0.50)",
            }}
          >
            Mold your solution{" "}
            <span
              className="italic"
              style={{ color: "#ED611C", fontWeight: 600 }}
            >
              with Next-gen Automation &amp; Food Processing Machinery.
            </span>
          </p>

          {/* ── CTA Buttons ── */}
          <div
            className="flex flex-col sm:flex-row items-start gap-4"
            style={{ marginBottom: "clamp(32px, 4vw, 48px)" }}
          >
            {/* Primary — orange, fine as-is */}
            <a
              href="tel:+918200181382"
              aria-label="Call us at +91 820 018 1382"
              className="inline-flex items-center justify-center font-rajdhani font-bold uppercase rounded-full transition-all duration-300"
              style={{
                padding: "14px 38px",
                background: "#ED611C",
                color: "#FFFFFF",
                fontSize: 13,
                letterSpacing: "0.13em",
                boxShadow:
                  "0 6px 20px rgba(237,97,28,0.45), 0 2px 8px rgba(237,97,28,0.28)",
                whiteSpace: "nowrap",
                willChange: "transform",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = "#c94b0a";
                el.style.boxShadow =
                  "0 12px 32px rgba(237,97,28,0.55), 0 4px 12px rgba(237,97,28,0.35)";
                el.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = "#ED611C";
                el.style.boxShadow =
                  "0 6px 20px rgba(237,97,28,0.45), 0 2px 8px rgba(237,97,28,0.28)";
                el.style.transform = "translateY(0)";
              }}
            >
              Get on call
            </a>

            {/* Secondary — white glass + 2px white border so it stays
                visible even when the video frame behind it brightens   */}
            <Link
              href="/services"
              className="inline-flex items-center justify-center font-rajdhani font-bold uppercase rounded-full transition-all duration-300"
              style={{
                padding: "13px 36px",
                background: "rgba(255,255,255,0.12)",
                border: "2px solid rgba(255,255,255,0.85)",
                color: "#FFFFFF",
                fontSize: 13,
                letterSpacing: "0.13em",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                whiteSpace: "nowrap",
                willChange: "transform",
                textShadow: "0 1px 4px rgba(0,0,0,0.35)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = "rgba(255,255,255,0.28)";
                el.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = "rgba(255,255,255,0.12)";
                el.style.transform = "translateY(0)";
              }}
            >
              Learn more
            </Link>
          </div>



        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div
        className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 animate-bounce"
        style={{ opacity: 0.55 }}
      >
        <span
          className="font-barlow text-xs uppercase tracking-widest"
          style={{ color: "#FFFFFF", textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}
        >
          Scroll
        </span>
        <svg viewBox="0 0 16 24" fill="none" style={{ width: 11, height: 17 }}>
          <rect
            x="1" y="1" width="14" height="22" rx="7"
            stroke="#FFFFFF" strokeWidth="1.5"
          />
          <rect
            x="6.5" y="5" width="3" height="6" rx="1.5"
            fill="#FFFFFF"
          />
        </svg>
      </div>
    </section>
  );
}
