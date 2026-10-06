"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Lightbulb, Target, Users, ShieldCheck, Handshake, Globe, UserPlus } from "lucide-react";

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   GSAP is loaded via dynamic import so SSR is safe
â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */

// â”€â”€ DATA â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

const specialities = [
  "End to end automation solutions",
  "In-House design Excellence",
  "Intelligent manufacturing ecosystem",
  "Seamless System Integration",
];

const solutions = [
  {
    label: "MACHINE TENDING APPLICATION",
    src: "/img/solutions/machine-tending.png",
  },
  {
    label: "PACKAGING SOLUTION",
    src: "/img/solutions/packaging-solution-new2.jpg",
  },
  {
    label: "SPIRAL IQF FREEZER",
    src: "/img/solutions/spiral-iqf-freezer-new2.jpeg",
  },
  {
    label: "ASSEMBLY LINE SPM",
    src: "/img/solutions/assembly-spm-new.jpg",
  },
];

const whyChooseUs = [
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16">
        {/* Factory */}
        <path d="M12 48V28l12-8v8l12-8v8l12-8v28" stroke="#1A2A6C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        {/* Chimney */}
        <path d="M16 25V14h6v7" stroke="#1A2A6C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 14h10" stroke="#1A2A6C" strokeWidth="2" strokeLinecap="round"/>
        {/* Smoke */}
        <path d="M18 10c-2-2 2-4 0-6M22 10c-2-2 2-4 0-6" stroke="#ED611C" strokeWidth="1.5" strokeLinecap="round"/>
        {/* Conveyor System */}
        <rect x="8" y="48" width="48" height="6" rx="3" stroke="#1A2A6C" strokeWidth="2"/>
        <circle cx="14" cy="51" r="1.5" fill="#ED611C"/>
        <circle cx="26" cy="51" r="1.5" fill="#ED611C"/>
        <circle cx="38" cy="51" r="1.5" fill="#ED611C"/>
        <circle cx="50" cy="51" r="1.5" fill="#ED611C"/>
        {/* Gear Accent */}
        <path d="M46 18a6 6 0 1 0 0 12 6 6 0 1 0 0-12z" stroke="#ED611C" strokeWidth="2"/>
        <path d="M46 16v-2M46 32v-2M38 24h-2M54 24h-2M40.5 18.5l-1.5-1.5M51.5 29.5l-1.5-1.5M40.5 29.5l-1.5 1.5M51.5 18.5l-1.5 1.5" stroke="#ED611C" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "COMPREHENSIVE TURNKEY SOLUTIONS",
    desc: "We offer end-to-end services, from initial consultation and design to fabrication, installation, and after-sales support, meaning you only need one partner for your entire automation project.",
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16">
        {/* Sliders */}
        <path d="M18 20v34M32 10v44M46 20v34" stroke="#1A2A6C" strokeWidth="2" strokeLinecap="round"/>
        {/* Slider Knobs */}
        <rect x="12" y="32" width="12" height="8" rx="2" stroke="#1A2A6C" strokeWidth="2" fill="#fff"/>
        <rect x="26" y="22" width="12" height="8" rx="2" stroke="#1A2A6C" strokeWidth="2" fill="#fff"/>
        <rect x="40" y="38" width="12" height="8" rx="2" stroke="#1A2A6C" strokeWidth="2" fill="#fff"/>
        {/* Gear accent top right */}
        <path d="M50 14a5 5 0 1 0 0 10 5 5 0 1 0 0-10z" stroke="#ED611C" strokeWidth="2"/>
        <path d="M50 12v-2M50 26v-2M43 19h-2M57 19h-2M45 14l-1.5-1.5M55 24l-1.5-1.5M45 24l-1.5 1.5M55 14l-1.5 1.5" stroke="#ED611C" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "CUSTOMIZATION AND FLEXIBILITY",
    desc: "We don't just sell standard equipment, we specialize in creating bespoke solutions perfectly tailored to your unique production environment, space constraints, and output requirements.",
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16">
        <path d="M32 8L12 16v16c0 16 14 22 20 26 6-4 20-10 20-26V16L32 8z" stroke="#1A2A6C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        {/* Inner offset line for premium look */}
        <path d="M32 14l-14 6v12c0 12.5 10 17.5 14 20 4-2.5 14-7.5 14-20V20l-14-6z" stroke="#ED611C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M24 34l6 6 14-14" stroke="#1A2A6C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "RELIABILITY AND QUALITY",
    desc: "We utilize only high-grade components and adhere to stringent quality standards, delivering robust, durable, and reliable machinery.",
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16">
        {/* Headset band */}
        <path d="M16 36v-8c0-8.837 7.163-16 16-16s16 7.163 16 16v8" stroke="#1A2A6C" strokeWidth="2" strokeLinecap="round"/>
        {/* Earpieces */}
        <rect x="12" y="32" width="8" height="16" rx="4" stroke="#1A2A6C" strokeWidth="2" fill="#fff"/>
        <rect x="44" y="32" width="8" height="16" rx="4" stroke="#1A2A6C" strokeWidth="2" fill="#fff"/>
        {/* Microphone */}
        <path d="M16 48v2c0 3.314 2.686 6 6 6h6" stroke="#ED611C" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="30" cy="56" r="2" fill="#ED611C"/>
        {/* Gear inside the empty space */}
        <path d="M32 26a5 5 0 1 0 0 10 5 5 0 1 0 0-10z" stroke="#ED611C" strokeWidth="2"/>
        <path d="M32 24v-2M32 38v-2M25 31h-2M39 31h-2M27 26l-1.5-1.5M37 36l-1.5-1.5M27 36l-1.5 1.5M37 26l-1.5 1.5" stroke="#ED611C" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "AFTER SALES SUPPORT",
    desc: "Our robust After-Sales Support delivers the expertise, speed, and resources you need to maintain peak efficiency, reduce risk, and maximize the return on your automation investment.",
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16">
        {/* Chart axes */}
        <path d="M12 10v42h42" stroke="#1A2A6C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        {/* Bars */}
        <rect x="20" y="36" width="8" height="16" rx="1" stroke="#1A2A6C" strokeWidth="2"/>
        <rect x="34" y="24" width="8" height="28" rx="1" stroke="#1A2A6C" strokeWidth="2"/>
        <rect x="48" y="12" width="8" height="40" rx="1" stroke="#1A2A6C" strokeWidth="2"/>
        {/* Upward arrow line overlapping */}
        <path d="M12 36l12-12 14 4 16-16" stroke="#ED611C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M46 12h8v8" stroke="#ED611C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        {/* Currency Coin */}
        <circle cx="20" cy="14" r="6" stroke="#1A2A6C" strokeWidth="2" fill="#fff"/>
        <path d="M20 11v6M18 13h3a1 1 0 0 1 0 2h-2a1 1 0 0 0 0 2h3" stroke="#ED611C" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "FOCUS ON ROI (RETURN ON INVESTMENT)",
    desc: "Our systems are designed for maximum efficiency, reduced labor costs, minimized waste, and increased throughput, ensuring a fast and significant return on your automation investment.",
  },
];

// â”€â”€ HOOK: GSAP scroll-triggered animations â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

function useGsapSection(
  containerRef: React.RefObject<HTMLElement | null>,
  animateFn: (gsap: typeof import("gsap").gsap, ScrollTrigger: typeof import("gsap/ScrollTrigger").ScrollTrigger) => void
) {
  useEffect(() => {
    let ctx: ReturnType<typeof import("gsap").gsap.context> | null = null;

    const run = async () => {
      try {
        const { gsap } = await import("gsap");
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");
        gsap.registerPlugin(ScrollTrigger);
        if (!containerRef.current) return;

        ctx = gsap.context(() => {
          animateFn(gsap, ScrollTrigger);
        }, containerRef.current);
      } catch (err) {
        console.error("GSAP Initialization Error:", err);
      }
    };

    run();

    return () => {
      ctx?.revert();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

// â”€â”€ AUTOMATION INTRO SECTION â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

function AutomationIntroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGsapSection(sectionRef, (gsap, ScrollTrigger) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 78%",
        once: true,
      },
    });

    tl.fromTo(".ai-headline",
      { opacity: 0, y: 36 },
      { opacity: 1, y: 0, duration: 0.75, ease: "power3.out" }
    )
    .fromTo(".ai-tagline",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, "-=0.4"
    )
    .fromTo(".ai-body",
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: "power2.out" }, "-=0.3"
    )
    .fromTo(".ai-image",
      { opacity: 0, x: 48, scale: 0.96 },
      { opacity: 1, x: 0, scale: 1, duration: 0.85, ease: "power3.out" }, "-=0.5"
    );
  });

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28 overflow-hidden"
      style={{ background: "#ffffff" }}
    >
      {/* Subtle top border accent */}
      <div className="absolute top-0 left-0 right-0 h-1" style={{ background: "linear-gradient(90deg, #1E2A5E 0%, #ED611C 50%, #1E2A5E 100%)" }} />

      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* â”€â”€ LEFT: TEXT COLUMN â”€â”€ */}
          <div className="flex flex-col gap-5">



            {/* Main headline */}
            <div className="ai-headline">
              <h2
                className="font-barlow-condensed font-bold uppercase leading-none"
                style={{ fontSize: "clamp(2.4rem, 5.5vw, 3.8rem)", color: "#1E2A5E", marginBottom: 4 }}
              >
                We are Mechspace
              </h2>
              <h2
                className="font-barlow-condensed font-bold uppercase leading-none"
                style={{ fontSize: "clamp(2.4rem, 5.5vw, 3.8rem)", color: "#ED611C" }}
              >
                Automation.
              </h2>
            </div>

            {/* Tagline */}
            <p className="ai-tagline font-barlow text-base md:text-lg italic" style={{ color: "#475569", borderLeft: "3px solid #ED611C", paddingLeft: 14 }}>
              &ldquo;We Automate Every Process.&rdquo;
            </p>

            {/* Sectors */}
            <div className="ai-body">
              <p className="font-barlow font-bold text-xs uppercase tracking-widest mb-2.5" style={{ color: "#1E2A5E", letterSpacing: "0.12em" }}>
                Covering Critical Sectors Across the Region:
              </p>
              <ul className="flex flex-col gap-2">
                {[
                  { bold: "Precision Engineering & Manufacturing:", text: " Optimizing high-volume production for the Bearing Industry and automotive component manufacturers." },
                  { bold: "Logistics & End-of-Line Packaging:", text: " Streamlining secondary lines with heavy-duty robotic and gantry palletizing solutions." },
                  { bold: "Food Processing & Cold Chain Logistics:", text: " Revolutionizing throughput with high-efficiency Spiral IQF Systems and hygienic processing lines." },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 font-barlow text-sm" style={{ color: "#475569" }}>
                    <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: "#ED611C" }} />
                    <span><strong style={{ color: "#1E2A5E" }}>{item.bold}</strong>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>



          </div>

          {/* â”€â”€ RIGHT: IMAGE + PILLARS COLUMN â”€â”€ */}
          <div className="ai-image flex flex-col gap-5">

            {/* Image */}
            <div
              className="relative w-full rounded-3xl overflow-hidden"
              style={{
                boxShadow: "0 24px 60px rgba(30,42,94,0.16), 0 6px 24px rgba(237,97,28,0.09)",
                border: "2px solid rgba(30,42,94,0.08)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/automation-hero.png"
                alt="Mechspace Automation â€” industrial robot machine tending"
                style={{ width: "100%", height: "auto", objectFit: "cover", display: "block", maxHeight: 400 }}
              />
              {/* Overlay badge */}
              <div
                className="absolute bottom-0 left-0 right-0 px-5 py-4"
                style={{ background: "linear-gradient(to top, rgba(30,42,94,0.88) 0%, transparent 100%)" }}
              >
                <p className="font-barlow-condensed font-bold uppercase tracking-widest text-white" style={{ fontSize: 12, letterSpacing: "0.16em" }}>
                  Industrial Automation &amp; Food Machinery
                </p>
                <p className="font-barlow text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.65)" }}>
                  Trusted Manufacturer Â· Custom Engineering Â· Industry 5.0 Ready
                </p>
              </div>


            </div>



          </div>

        </div>
      </div>

      {/* Bottom border accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(30,42,94,0.12), transparent)" }} />
    </section>
  );
}

// â”€â”€ SECTION 1: OUR SPECIALITY â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

export function SpecialitySection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGsapSection(sectionRef, (gsap, ScrollTrigger) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        once: true,
      },
    });

    // Title line sweep
    tl.fromTo(
      ".spec-line",
      { scaleX: 0, transformOrigin: "left center" },
      { scaleX: 1, duration: 0.7, ease: "power3.inOut" }
    )
      .fromTo(
        ".spec-heading",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.4"
      )
      // Outer card
      .fromTo(
        ".spec-card-outer",
        { opacity: 0, scale: 0.92 },
        { opacity: 1, scale: 1, duration: 0.7, ease: "back.out(1.4)" },
        "-=0.4"
      )
      // Tag chips staggered
      .fromTo(
        ".spec-tag",
        { opacity: 0, y: 30, scale: 0.85 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.12,
          ease: "back.out(1.7)",
        },
        "-=0.3"
      );

    // Floating pulse on each tag
    gsap.utils.toArray<HTMLElement>(".spec-tag").forEach((el, i) => {
      gsap.to(el, {
        y: -6,
        duration: 1.8 + i * 0.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.3,
      });
    });
  });

  return (
    <section
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #f8f9ff 0%, #eef2ff 50%, #fff8f3 100%)",
      }}
    >
      {/* Background decorative circles */}
      <div
        className="absolute top-0 right-0 w-72 h-72 rounded-full opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #ED611C 0%, transparent 70%)",
          transform: "translate(30%, -30%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-8 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #1E2A5E 0%, transparent 70%)",
          transform: "translate(-40%, 40%)",
        }}
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="spec-line h-0.5 w-16 bg-orange-500" />
            <h2
              className="spec-heading font-barlow-condensed font-bold text-4xl md:text-5xl uppercase tracking-widest"
              style={{ color: "#1E2A5E" }}
            >
              Our Speciality
            </h2>
            <div className="spec-line h-0.5 w-16 bg-orange-500" />
          </div>
          <p className="font-barlow text-base text-gray-500 mt-2">
            What sets Mech Space Automation apart from the rest
          </p>
        </div>

        {/* Card */}
        <div
          className="spec-card-outer rounded-3xl p-8 md:p-12 shadow-2xl border border-white/60"
          style={{
            background:
              "linear-gradient(160deg, rgba(255,255,255,0.9) 0%, rgba(238,242,255,0.8) 100%)",
            backdropFilter: "blur(20px)",
            boxShadow:
              "0 25px 60px rgba(30,42,94,0.12), 0 8px 20px rgba(237,97,28,0.08), inset 0 1px 0 rgba(255,255,255,0.8)",
            border: "1.5px solid rgba(237,97,28,0.3)",
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {specialities.map((text, i) => (
              <div
                key={i}
                className="spec-tag group relative flex items-center gap-4 rounded-2xl px-6 py-5 cursor-default select-none transition-all duration-300"
                style={{
                  background: "rgba(237,97,28,0.07)",
                  border: "1.5px solid rgba(237,97,28,0.2)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background =
                    "rgba(237,97,28,0.15)";
                  (e.currentTarget as HTMLDivElement).style.border =
                    "1.5px solid rgba(237,97,28,0.5)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    "0 8px 24px rgba(237,97,28,0.2)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background =
                    "rgba(237,97,28,0.07)";
                  (e.currentTarget as HTMLDivElement).style.border =
                    "1.5px solid rgba(237,97,28,0.2)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                }}
              >
                {/* Icon dot */}
                <div
                  className="shrink-0 w-3 h-3 rounded-full"
                  style={{
                    background: "linear-gradient(135deg, #ED611C, #f39c12)",
                    boxShadow: "0 0 8px rgba(237,97,28,0.6)",
                  }}
                />
                <span
                  className="font-rajdhani font-semibold text-base leading-snug"
                  style={{ color: "#1E2A5E" }}
                >
                  {text}
                </span>
                {/* Shine accent */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 60%)" }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── SECTION 2: SOLUTIONS WE PROVIDE ──────────────────────────────────────────

function SolutionsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGsapSection(sectionRef, (gsap, ScrollTrigger) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
        once: true,
      },
    });

    tl.fromTo(
      ".sol-heading",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" }
    ).fromTo(
      ".sol-card",
      { opacity: 0, y: 60, scale: 0.9, rotateX: 8 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotateX: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
      },
      "-=0.4"
    );

    // Hover parallax handled via CSS
    gsap.utils.toArray<HTMLElement>(".sol-card").forEach((card) => {
      const img = card.querySelector(".sol-img") as HTMLElement;
      card.addEventListener("mouseenter", () => {
        gsap.to(img, { scale: 1.08, duration: 0.5, ease: "power2.out" });
      });
      card.addEventListener("mouseleave", () => {
        gsap.to(img, { scale: 1, duration: 0.5, ease: "power2.out" });
      });
    });
  });

  return (
    <section
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
      style={{ background: "#ffffff" }}
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{ background: "linear-gradient(90deg, #1E2A5E, #ED611C, #1E2A5E)" }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className="sol-heading font-barlow-condensed font-bold text-4xl md:text-5xl uppercase tracking-widest mb-4"
            style={{ color: "#1E2A5E" }}
          >
            Solution We Provide
          </h2>
          <div
            className="mx-auto w-24 h-1 rounded-full"
            style={{ background: "linear-gradient(90deg, #ED611C, #f39c12)" }}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {solutions.map((s, i) => (
            <div
              key={i}
              className="sol-card group relative rounded-2xl overflow-hidden cursor-pointer"
              style={{
                boxShadow: "0 4px 24px rgba(30,42,94,0.12)",
                border: "2px solid rgba(30,42,94,0.14)",
                transition: "box-shadow 0.3s, border-color 0.3s, transform 0.3s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 20px 56px rgba(30,42,94,0.22), 0 4px 20px rgba(237,97,28,0.18)";
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  "rgba(237,97,28,0.55)";
                (e.currentTarget as HTMLDivElement).style.transform =
                  "translateY(-6px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 4px 24px rgba(30,42,94,0.12)";
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  "rgba(30,42,94,0.14)";
                (e.currentTarget as HTMLDivElement).style.transform =
                  "translateY(0)";
              }}
            >
              {/* Product image */}
              <div className="relative overflow-hidden" style={{ height: 280 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="sol-img w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src={s.src}
                  alt={s.label}
                  loading="lazy"
                />
                {/* Gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(30,42,94,0.72) 0%, rgba(30,42,94,0.1) 55%, transparent 100%)",
                  }}
                />
                {/* Orange accent line top */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "linear-gradient(90deg, #ED611C, #f59e0b, #ED611C)" }}
                />
              </div>

              {/* Label bar */}
              <div
                className="px-6 py-5 flex items-center justify-between"
                style={{
                  background: "#ffffff",
                  borderTop: "2px solid rgba(237,97,28,0.18)",
                }}
              >
                <span
                  className="font-barlow-condensed font-bold text-sm uppercase tracking-widest leading-tight"
                  style={{ color: "#1E2A5E", letterSpacing: "0.14em" }}
                >
                  {s.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// â”€â”€ SECTION 3: WHY CHOOSE US â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

function WhyChooseUsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGsapSection(sectionRef, (gsap, ScrollTrigger) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
        once: true,
      },
    });

    tl.fromTo(
      ".why-badge",
      { opacity: 0, scale: 0.6 },
      { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(2)" }
    )
      .fromTo(
        ".why-heading",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.2"
      )
      .fromTo(
        ".why-card",
        { opacity: 0, y: 70, scale: 0.88 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.13,
          ease: "back.out(1.3)",
        },
        "-=0.4"
      )
      .fromTo(
        ".why-icon",
        { rotate: -10, scale: 0.7 },
        {
          rotate: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.13,
          ease: "elastic.out(1, 0.5)",
        },
        "-=0.4"
      );
  });

  // Split into two rows: 3 + 2
  const row1 = whyChooseUs.slice(0, 3);
  const row2 = whyChooseUs.slice(3);

  return (
    <section
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
      style={{
        background: "#ffffff",
      }}
    >

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <div
            className="why-badge inline-block px-4 py-1 rounded-full text-xs font-rajdhani font-bold uppercase tracking-widest mb-5"
            style={{
              background: "rgba(237,97,28,0.12)",
              color: "#ED611C",
              border: "1px solid rgba(237,97,28,0.3)",
            }}
          >
            Our Advantages
          </div>
          <h2
            className="why-heading font-barlow-condensed font-bold text-4xl md:text-5xl uppercase tracking-widest"
            style={{ color: "#1E2A5E" }}
          >
            Why Choose Us
          </h2>
          <div
            className="mx-auto mt-5 w-28 h-1 rounded-full"
            style={{ background: "linear-gradient(90deg, #1E2A5E, #ED611C)" }}
          />
        </div>

        {/* Row 1 â€“ 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {row1.map((item, i) => (
            <WhyCard key={i} item={item} />
          ))}
        </div>

        {/* Row 2 â€“ 2 cards centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {row2.map((item, i) => (
            <WhyCard key={i + 3} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface WhyItem {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

function WhyCard({ item }: { item: WhyItem }) {
  return (
    <div
      className="why-card group relative rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-400 cursor-default"
      style={{
        background: "rgba(255,255,255,0.8)",
        backdropFilter: "blur(16px)",
        border: "1.5px solid rgba(30,42,94,0.1)",
        boxShadow: "0 4px 24px rgba(30,42,94,0.06)",
        transition: "all 0.35s cubic-bezier(0.25,0.46,0.45,0.94)",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.boxShadow =
          "0 20px 48px rgba(30,42,94,0.16), 0 4px 16px rgba(237,97,28,0.12)";
        el.style.borderColor = "rgba(237,97,28,0.4)";
        el.style.transform = "translateY(-8px)";
        el.style.background = "rgba(255,255,255,0.95)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.boxShadow = "0 4px 24px rgba(30,42,94,0.06)";
        el.style.borderColor = "rgba(30,42,94,0.1)";
        el.style.transform = "translateY(0)";
        el.style.background = "rgba(255,255,255,0.8)";
      }}
    >
      {/* Top accent bar */}
      <div
        className="absolute top-0 left-8 right-8 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: "linear-gradient(90deg, transparent, #ED611C, transparent)" }}
      />

      {/* Icon */}
      <div
        className="why-icon mb-6 p-4 rounded-2xl"
        style={{
          background: "linear-gradient(135deg, #fff8f3, #fff3ec)",
          boxShadow: "0 4px 16px rgba(237,97,28,0.15)",
        }}
      >
        {item.icon}
      </div>

      {/* Title */}
      <h3
        className="font-rajdhani font-bold text-lg uppercase tracking-wide mb-4 leading-snug"
        style={{ color: "#1B2E76" }}
      >
        {item.title}
      </h3>

      {/* Divider */}
      <div
        className="w-12 h-0.5 rounded-full mb-4 group-hover:w-20 transition-all duration-300"
        style={{ background: "linear-gradient(90deg, #1E2A5E, #ED611C)" }}
      />

      {/* Desc */}
      <p className="font-barlow text-sm leading-relaxed" style={{ color: "#64748B" }}>
        {item.desc}
      </p>

      {/* Corner accent */}
      <div
        className="absolute bottom-4 right-4 w-8 h-8 rounded-full opacity-10 group-hover:opacity-30 transition-opacity duration-300"
        style={{ background: "#ED611C" }}
      />
    </div>
  );
}

// ─── SECTION 2b: SEVEN CORE VALUES ───────────────────────────────────────────

const sevenCoreValues = [
  {
    title: "Innovation",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" style={{ width: "100%", height: "100%" }}>
        <path d="M32 12C23.1634 12 16 19.1634 16 28C16 33.4816 18.758 38.3225 22.9327 41.1263C24.5488 42.2116 25.6 44.0033 25.6 45.946V48.8C25.6 49.6836 26.3163 50.4 27.2 50.4H36.8C37.6836 50.4 38.4 49.6836 38.4 48.8V45.946C38.4 44.0033 39.4512 42.2116 41.0673 41.1263C45.242 38.3225 48 33.4816 48 28C48 19.1634 40.8366 12 32 12Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M27.2 55.2H36.8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M28.8 60H35.2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="32" cy="28" r="4" stroke="currentColor" strokeWidth="2.5" />
        <path d="M32 20V22M32 34V36M24 28H26M38 28H40M26.34 22.34L27.75 23.75M36.25 32.25L37.66 33.66M26.34 33.66L27.75 32.25M36.25 23.75L37.66 22.34" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Goals",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" style={{ width: "100%", height: "100%" }}>
        <circle cx="32" cy="32" r="22" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="32" cy="32" r="12" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="32" cy="32" r="4" stroke="currentColor" strokeWidth="2.5" />
        <path d="M44 20L32 32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M44 20L38 18L46 18L46 26Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Team Work",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" style={{ width: "100%", height: "100%" }}>
        <circle cx="32" cy="18" r="6" stroke="currentColor" strokeWidth="2.5" />
        <path d="M22 34C22 28.477 26.477 24 32 24C37.523 24 42 28.477 42 34" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="18" cy="38" r="6" stroke="currentColor" strokeWidth="2.5" />
        <path d="M8 54C8 48.477 12.477 44 18 44C23.523 44 28 48.477 28 54" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="46" cy="38" r="6" stroke="currentColor" strokeWidth="2.5" />
        <path d="M36 54C36 48.477 40.477 44 46 44C51.523 44 56 48.477 56 54" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Commitment",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" style={{ width: "100%", height: "100%" }}>
        <path d="M32 10L14 18V32C14 46 24 56 32 60C40 56 50 46 50 32V18L32 10Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="32" cy="26" r="6" stroke="currentColor" strokeWidth="2.5" />
        <path d="M22 44C22 38.477 26.477 34 32 34C37.523 34 42 38.477 42 44" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Integrity",
    icon: (
      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" style={{ width: "100%", height: "100%", padding: "4px" }}>
        {/* Outer connecting lines */}
        <polygon points="50 15 80 32 80 68 50 85 20 68 20 32" strokeWidth="6" />
        {/* Inner hexagon */}
        <polygon points="50 32 66 41 66 59 50 68 34 59 34 41" strokeWidth="5" />
        {/* Checkmark */}
        <polyline points="42 52 48 58 60 45" strokeWidth="7" />
        {/* Circles on vertices */}
        <circle cx="50" cy="15" r="7" fill="white" strokeWidth="6" />
        <circle cx="80" cy="32" r="7" fill="white" strokeWidth="6" />
        <circle cx="80" cy="68" r="7" fill="white" strokeWidth="6" />
        <circle cx="50" cy="85" r="7" fill="white" strokeWidth="6" />
        <circle cx="20" cy="68" r="7" fill="white" strokeWidth="6" />
        <circle cx="20" cy="32" r="7" fill="white" strokeWidth="6" />
      </svg>
    ),
  },
  {
    title: "Customers",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" style={{ width: "100%", height: "100%" }}>
        <circle cx="32" cy="24" r="8" stroke="currentColor" strokeWidth="2.5" />
        <path d="M16 48C16 39.1634 23.1634 32 32 32C40.8366 32 48 39.1634 48 48" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M48 20L50 24H54L51 27L52 31L48 28.5L44 31L45 27L42 24H46L48 20Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Responsibility",
    icon: (
      <svg viewBox="0 0 100 100" fill="currentColor" style={{ width: "100%", height: "100%", padding: "4px" }}>
        {/* Gear */}
        <path d="M46 10 L54 10 L55 15 A 20 20 0 0 1 63 18 L68 14 L73 19 L69 24 A 20 20 0 0 1 72 32 L77 33 L77 41 L72 42 A 20 20 0 0 1 69 50 L73 55 L68 60 L63 56 A 20 20 0 0 1 55 59 L54 64 L46 64 L45 59 A 20 20 0 0 1 37 56 L32 60 L27 55 L31 50 A 20 20 0 0 1 28 42 L23 41 L23 33 L28 32 A 20 20 0 0 1 31 24 L27 19 L32 14 L37 18 A 20 20 0 0 1 45 15 Z M50 27 A 10 10 0 1 0 50 47 A 10 10 0 1 0 50 27 Z" />
        {/* Left Hand */}
        <path d="M 25 95 L 48 95 L 48 80 C 48 70 40 68 40 62 C 40 58 43 56 46 59 L 51 64 C 54 67 58 63 54 59 C 48 51 41 43 35 43 L 26 20 C 23 15 15 15 15 20 L 20 50 L 25 80 L 25 95 Z" />
        {/* Right Hand */}
        <path d="M 75 95 L 52 95 L 52 80 C 52 70 60 68 60 62 C 60 58 57 56 54 59 L 49 64 C 46 67 42 63 46 59 C 52 51 59 43 65 43 L 74 20 C 77 15 85 15 85 20 L 80 50 L 75 80 L 75 95 Z" />
      </svg>
    ),
  },
];

function SevenCoreValuesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGsapSection(sectionRef, (gsap, ScrollTrigger) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
        once: true,
      },
    });

    tl.fromTo(
      ".scv-heading-small",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
    )
    .fromTo(
      ".scv-heading-main",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
      "-=0.4"
    )
    .fromTo(
      ".scv-item",
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "back.out(1.2)" },
      "-=0.4"
    );
  });

  return (
    <section
      ref={sectionRef}
      className="py-[80px] lg:py-[100px]"
      style={{ background: "#FFFFFF", width: "100%" }}
    >
      <div className="mx-auto px-5 w-full" style={{ maxWidth: 1400 }}>
        {/* Header */}
        <div className="text-center mb-16">
          <h4
            className="scv-heading-small uppercase font-semibold mb-3"
            style={{
              color: "#1A2A6C",
              fontSize: 16,
              letterSpacing: 2,
            }}
          >
            MECHSPACE'S DIFFERENT
          </h4>
          <h2
            className="scv-heading-main font-extrabold"
            style={{
              color: "#000000",
              fontSize: "clamp(30px, 4vw, 56px)",
              lineHeight: 1.1,
            }}
          >
            Core Values
          </h2>
        </div>

        {/* 7-column Grid Container */}
        <div className="scv-grid">
          {sevenCoreValues.map((val, idx) => (
            <div key={idx} className="scv-item group flex flex-col items-center justify-center cursor-pointer">
              {/* Icon */}
              <div
                className="transition-all duration-300 ease-in-out group-hover:-translate-y-2 flex items-center justify-center"
                style={{
                  width: "clamp(55px, 6vw, 80px)",
                  height: "clamp(55px, 6vw, 80px)",
                  color: "#2B2B2B",
                  marginBottom: 20,
                }}
              >
                <div className="w-full h-full text-[#2B2B2B] group-hover:text-[#ED611C] transition-colors duration-300">
                  {val.icon}
                </div>
              </div>

              {/* Title */}
              <h3
                className="font-bold text-center transition-colors duration-300 group-hover:text-[#ED611C]"
                style={{
                  color: "#111111",
                  fontSize: "clamp(18px, 1.8vw, 20px)",
                }}
              >
                {val.title}
              </h3>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        /* Responsive Grid for 7 items */
        .scv-grid {
          display: grid;
          gap: 40px 20px;
          justify-content: center;
          align-items: start;
        }
        
        /* Desktop: 7 columns */
        @media (min-width: 1200px) {
          .scv-grid {
            grid-template-columns: repeat(7, 1fr);
          }
        }
        
        /* Tablet: 3 columns */
        @media (min-width: 768px) and (max-width: 1199px) {
          .scv-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 50px 30px;
          }
        }
        
        /* Mobile: 2 columns, last item spans full width if uneven, or just centered */
        @media (max-width: 767px) {
          .scv-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 40px 16px;
          }
          /* Center the 7th item in a 2 column grid */
          .scv-item:last-child {
            grid-column: 1 / -1;
            max-width: 50%;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
}

// ─── MAIN EXPORT ──────────────────────────────────────────────────────────────

export function HomeShowcase() {
  return (
    <>
      <AutomationIntroSection />
      <SolutionsSection />
      <SevenCoreValuesSection />
      <WhyChooseUsSection />
    </>
  );
}


