import React from "react";

export const metadata = {
  title: "Solutions | Mech Space Automation",
  description: "Explore industry-specific automation solutions provided by Mech Space Automation.",
};

export default function SolutionPage() {
  return (
    <main
      className="flex-1 flex items-center justify-center pt-32 pb-20"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(160deg, #f8f9ff 0%, #eef2ff 40%, #fff8f3 100%)",
      }}
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-[#10B981]/30 bg-[#10B981]/5">
          <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
          <span className="font-rajdhani font-bold text-xs uppercase tracking-[0.2em] text-[#10B981]">
            Industry Solutions
          </span>
        </div>
        <h1
          className="font-barlow-condensed font-bold uppercase tracking-widest mb-6 leading-tight"
          style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", color: "#1E2A5E" }}
        >
          Tailored <span style={{ color: "#ED611C" }}>Solutions</span>
        </h1>
        <p className="font-barlow text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
          Our Solutions catalog is currently being updated. Check back soon to discover our complete range of Standard Automation Systems, Food & Beverage Solutions, and advanced Filling & Packaging setups.
        </p>
        <div className="w-24 h-1 mx-auto rounded-full" style={{ background: "linear-gradient(90deg, #1E2A5E, #ED611C)" }} />
      </div>
    </main>
  );
}
