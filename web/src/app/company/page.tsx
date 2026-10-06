"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { SpecialitySection } from "@/components/HomeShowcase";

// ─── PILLAR DATA ──────────────────────────────────────────────────────────────

const pillars = [
  {
    id: "core-competency",
    number: "01",
    tag: "Core Competency",
    headline: "Innovation",
    color: "#ED611C",
    bg: "rgba(237,97,28,0.08)",
    border: "rgba(237,97,28,0.22)",
    glowColor: "rgba(237,97,28,0.18)",
    description:
      "Specialized in custom-designing, prototyping, and manufacturing advanced automated systems for complex industrial applications. We engineer precision-driven solutions that push the limits of what modern machinery can achieve.",
    highlights: [
      "Custom Automated System Design",
      "3D CAD Prototyping",
      "Complex Industrial Applications",
      "End-to-End Engineering",
    ],
    icon: (
      <svg viewBox="0 0 80 80" fill="none" style={{ width: 56, height: 56 }}>
        <circle cx="40" cy="34" r="18" stroke="#ED611C" strokeWidth="2.5" fill="rgba(237,97,28,0.12)" />
        <path d="M32 52h16M36 58h8" stroke="#ED611C" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M40 22v4M40 48v4M28 34h-4M56 34h-4" stroke="#ED611C" strokeWidth="2" strokeLinecap="round" />
        <path d="M30 26.5l2.5 2.5M47.5 43l2.5 2.5M30 41.5l2.5-2.5M47.5 25l2.5-2.5" stroke="#ED611C" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="40" cy="34" r="6" fill="#ED611C" opacity="0.9" />
        <path d="M34 34a6 6 0 0 1 6-6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
      </svg>
    ),
  },
  {
    id: "our-promise",
    number: "02",
    tag: "Our Promise",
    headline: "Precision",
    color: "#1A2A6C",
    bg: "rgba(26,42,108,0.07)",
    border: "rgba(26,42,108,0.20)",
    glowColor: "rgba(26,42,108,0.14)",
    description:
      "Every system we deliver is built to exact engineering tolerances, ensuring flawless integration into your production environment. Our commitment to zero-defect execution means your operations run without disruption.",
    highlights: [
      "Zero-Defect Execution",
      "Engineering Tolerances",
      "Quality Assurance",
      "Flawless Integration",
    ],
    icon: (
      <svg viewBox="0 0 80 80" fill="none" style={{ width: 56, height: 56 }}>
        <circle cx="40" cy="40" r="20" stroke="#1A2A6C" strokeWidth="2.5" fill="rgba(26,42,108,0.1)" />
        <circle cx="40" cy="40" r="13" stroke="#1A2A6C" strokeWidth="2" fill="none" />
        <circle cx="40" cy="40" r="5" stroke="#1A2A6C" strokeWidth="2" fill="none" />
        <path d="M56 24l-10 10" stroke="#ED611C" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M56 20h4v4" stroke="#ED611C" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="40" cy="40" r="2.5" fill="#1A2A6C" />
        <path d="M40 20v4M40 56v4M20 40h4M56 40h4" stroke="#1A2A6C" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      </svg>
    ),
  },
  {
    id: "industry-5-0",
    number: "03",
    tag: "Industry 5.0",
    headline: "Co-Creation",
    color: "#18C37E",
    bg: "rgba(24,195,126,0.07)",
    border: "rgba(24,195,126,0.22)",
    glowColor: "rgba(24,195,126,0.14)",
    description:
      "We believe automation's future belongs to human-machine collaboration. By partnering directly with your team, we co-develop solutions that keep people at the center of technology — intelligent, adaptive, and empowering.",
    highlights: [
      "Human-Machine Collaboration",
      "Industry 5.0 Integration",
      "Co-Development Partnership",
      "Adaptive Intelligence",
    ],
    icon: (
      <svg viewBox="0 0 80 80" fill="none" style={{ width: 56, height: 56 }}>
        <path d="M28 36c0-4.4 3.6-8 8-8h8c4.4 0 8 3.6 8 8v8H28v-8z" stroke="#18C37E" strokeWidth="2.5" fill="rgba(24,195,126,0.1)" />
        <path d="M36 44v8M44 44v8M32 52h16" stroke="#18C37E" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="40" cy="22" r="7" stroke="#18C37E" strokeWidth="2.5" fill="none" />
        <path d="M20 44c0-3.3 2.7-6 6-6" stroke="#18C37E" strokeWidth="2" strokeLinecap="round" />
        <path d="M60 44c0-3.3-2.7-6-6-6" stroke="#18C37E" strokeWidth="2" strokeLinecap="round" />
        <path d="M26 36c0-2.2.9-4.2 2.3-5.7" stroke="#ED611C" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
        <path d="M54 36c0-2.2-.9-4.2-2.3-5.7" stroke="#ED611C" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
      </svg>
    ),
  },
];

// ─── FOUNDER DATA ──────────────────────────────────────────────────────────────

const founders = [
  {
    id: "parth",
    pillarNumber: "01",
    pillarLabel: "The Vision & Strategy",
    name: "Parth Prajapati",
    title: "Co-Founder & Director",
    subtitle: "Concept, Strategy & Finance",
    background: "Bachelor of Mechanical Engineering + MBA in Sales & Marketing",
    initials: "PP",
    photo: "/img/leadership/parth-new.jpeg",
    accentColor: "#ED611C",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" style={{ width: 32, height: 32 }}>
        <circle cx="32" cy="28" r="14" stroke="#ED611C" strokeWidth="2.5" fill="rgba(237,97,28,0.12)" />
        <path d="M26 42h12M29 46h6" stroke="#ED611C" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M32 18v3M32 37v3M22 28h-3M45 28h-3" stroke="#ED611C" strokeWidth="2" strokeLinecap="round" />
        <circle cx="32" cy="28" r="5" fill="#ED611C" opacity="0.9" />
        <path d="M8 54l8-12 6 8 8-10 10 14" stroke="#1E2A5E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    description:
      "Parth is the front-end driving force of Mechspace. Bridging deep technical engineering with sharp business strategy, he translates client needs into viable, commercially successful automation roadmaps. With an engineering core and an MBA mindset, Parth leads concept development, client acquisition, and the financial architecture that keeps Mechspace lean and scalable.",
    expertise: [
      "Client Relationship Management",
      "Automation Concept Development",
      "Business Strategy & Revenue Growth",
      "Financial Planning & Investment",
      "Sales Leadership & Market Expansion",
    ],
  },
  {
    id: "het",
    pillarNumber: "02",
    pillarLabel: "The Engineering Core",
    name: "Het Prajapati",
    title: "Co-Founder & Director",
    subtitle: "Mechanical Design & Project Execution",
    background: "Bachelor of Mechanical Engineering",
    initials: "HP",
    photo: "/img/leadership/het.jpg",
    accentColor: "#1E2A5E",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" style={{ width: 32, height: 32 }}>
        <circle cx="32" cy="20" r="8" stroke="#1E2A5E" strokeWidth="2.5" fill="rgba(30,42,94,0.12)" />
        <circle cx="16" cy="46" r="7" stroke="#1E2A5E" strokeWidth="2.5" fill="rgba(30,42,94,0.12)" />
        <circle cx="48" cy="46" r="7" stroke="#1E2A5E" strokeWidth="2.5" fill="rgba(30,42,94,0.12)" />
        <path d="M25 26l-6 14M39 26l6 14M24 46h16" stroke="#ED611C" strokeWidth="2" strokeLinecap="round" />
        <circle cx="32" cy="20" r="3" fill="#1E2A5E" />
      </svg>
    ),
    description:
      "Het is the backbone of Mechspace's technical excellence. As lead mechanical designer and project execution head, he translates complex automation requirements into precise, manufacturable engineering solutions. His expertise spans custom machine design, structural analysis, component integration, and on-site commissioning — ensuring every system not only performs, but performs reliably.",
    expertise: [
      "Custom Machine Design (Autodesk Inventor)",
      "Structural & Mechanical Analysis",
      "Project Execution & Commissioning",
      "Pneumatic & Electrical Integration",
      "Production Floor Optimization",
    ],
  },
];

// ─── HEADER COMPONENT ─────────────────────────────────────────────────────────

function PillarsHeader() {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const importGsap = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      if (!el) return;
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 80%", once: true },
        }
      );
    };
    importGsap();
  }, []);

  return (
    <div ref={headerRef} style={{ textAlign: "center", marginBottom: "clamp(48px, 7vw, 80px)" }}>
      <span
        style={{
          display: "inline-block",
          marginBottom: 16,
          padding: "6px 18px",
          borderRadius: 999,
          fontFamily: "var(--font-rajdhani), sans-serif",
          fontWeight: 700,
          fontSize: 11,
          textTransform: "uppercase",
          letterSpacing: "0.25em",
          background: "rgba(237,97,28,0.12)",
          color: "#ED611C",
          border: "1px solid rgba(237,97,28,0.3)",
        }}
      >
        What We Stand For
      </span>
      <h2
        style={{
          fontFamily: "var(--font-barlow-condensed), sans-serif",
          fontWeight: 800,
          fontSize: "clamp(2.2rem, 5vw, 4rem)",
          textTransform: "uppercase",
          lineHeight: 1.05,
          letterSpacing: "0.04em",
          color: "#0B1530",
          marginBottom: 20,
        }}
      >
        Our Core Pillars
      </h2>
      <p
        style={{
          fontFamily: "var(--font-barlow), sans-serif",
          fontSize: "clamp(1rem, 1.5vw, 1.15rem)",
          color: "#64748B",
          maxWidth: 600,
          margin: "0 auto",
          lineHeight: 1.75,
        }}
      >
        Three principles that guide every project, every partnership, and every machine we build.
      </p>
    </div>
  );
}

// ─── PILLAR CARD ──────────────────────────────────────────────────────────────

function PillarCard({ pillar, index }: { pillar: typeof pillars[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const importGsap = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      if (!el) return;
      gsap.fromTo(
        el,
        { opacity: 0, y: 80, scale: 0.92 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          delay: index * 0.15,
          ease: "back.out(1.3)",
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
        }
      );
    };
    importGsap();
  }, [index]);

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        background: hovered ? pillar.bg : "#fff",
        border: `1.5px solid ${hovered ? pillar.border : "rgba(226,232,240,0.8)"}`,
        borderRadius: 24,
        padding: "clamp(32px, 4vw, 52px) clamp(24px, 3vw, 40px)",
        overflow: "hidden",
        transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
        transform: hovered ? "translateY(-8px)" : "translateY(0)",
        boxShadow: hovered
          ? `0 24px 60px ${pillar.glowColor}, 0 4px 16px rgba(0,0,0,0.06)`
          : "0 2px 12px rgba(0,0,0,0.04)",
        cursor: "default",
        display: "flex",
        flexDirection: "column",
        gap: 0,
      }}
    >
      {/* Large background number */}
      <span
        aria-hidden
        style={{
          position: "absolute",
          top: -10,
          right: 20,
          fontFamily: "var(--font-barlow-condensed), sans-serif",
          fontWeight: 800,
          fontSize: "clamp(80px, 10vw, 140px)",
          lineHeight: 1,
          color: pillar.color,
          opacity: hovered ? 0.12 : 0.06,
          transition: "opacity 0.35s ease",
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        {pillar.number}
      </span>

      {/* Tag badge */}
      <span
        style={{
          display: "inline-block",
          marginBottom: 20,
          padding: "5px 14px",
          borderRadius: 999,
          fontFamily: "var(--font-rajdhani), sans-serif",
          fontWeight: 700,
          fontSize: 10,
          textTransform: "uppercase",
          letterSpacing: "0.22em",
          background: pillar.bg,
          color: pillar.color,
          border: `1px solid ${pillar.border}`,
          alignSelf: "flex-start",
        }}
      >
        {pillar.tag}
      </span>

      {/* Icon */}
      <div
        style={{
          marginBottom: 20,
          padding: 14,
          borderRadius: 16,
          background: pillar.bg,
          display: "inline-flex",
          alignSelf: "flex-start",
          transition: "transform 0.3s ease",
          transform: hovered ? "scale(1.08)" : "scale(1)",
        }}
      >
        {pillar.icon}
      </div>

      {/* Headline */}
      <h3
        style={{
          fontFamily: "var(--font-barlow-condensed), sans-serif",
          fontWeight: 800,
          fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
          textTransform: "uppercase",
          letterSpacing: "0.06em",
          color: "#0B1530",
          marginBottom: 16,
          lineHeight: 1.1,
        }}
      >
        {pillar.headline}
      </h3>

      {/* Accent divider */}
      <div
        style={{
          width: hovered ? 64 : 36,
          height: 3,
          borderRadius: 99,
          background: `linear-gradient(90deg, ${pillar.color}, ${pillar.color}50)`,
          marginBottom: 20,
          transition: "width 0.35s ease",
        }}
      />

      {/* Description */}
      <p
        style={{
          fontFamily: "var(--font-barlow), sans-serif",
          fontSize: "clamp(0.9rem, 1.2vw, 1rem)",
          color: "#64748B",
          lineHeight: 1.75,
          marginBottom: 24,
        }}
      >
        {pillar.description}
      </p>

      {/* Highlights list */}
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
        {pillar.highlights.map((h) => (
          <li
            key={h}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              fontFamily: "var(--font-barlow), sans-serif",
              fontSize: "clamp(0.85rem, 1.1vw, 0.95rem)",
              color: "#475569",
              fontWeight: 500,
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: pillar.color,
                flexShrink: 0,
              }}
            />
            {h}
          </li>
        ))}
      </ul>

      {/* Corner glow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: 100,
          height: 100,
          background: `radial-gradient(circle at bottom right, ${pillar.glowColor}, transparent 70%)`,
          pointerEvents: "none",
          borderRadius: "0 0 24px 0",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.35s ease",
        }}
      />
    </div>
  );
}

// ─── LEADERSHIP SECTION ───────────────────────────────────────────────────────

function LeadershipSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const run = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      if (!el) return;
      gsap.context(() => {
        gsap.fromTo(
          ".founder-card",
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.2,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 75%", once: true },
          }
        );
      }, el);
    };
    run();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        padding: "clamp(60px, 8vw, 120px) clamp(20px, 5vw, 80px)",
        background: "linear-gradient(135deg, #0B1530 0%, #1E2A5E 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background dots */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.06) 1.5px, transparent 1.5px)",
          backgroundSize: "32px 32px",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "clamp(48px, 7vw, 80px)" }}>
          <span
            style={{
              display: "inline-block",
              marginBottom: 16,
              padding: "6px 18px",
              borderRadius: 999,
              fontFamily: "var(--font-rajdhani), sans-serif",
              fontWeight: 700,
              fontSize: 11,
              textTransform: "uppercase",
              letterSpacing: "0.25em",
              background: "rgba(237,97,28,0.2)",
              color: "#ED611C",
              border: "1px solid rgba(237,97,28,0.4)",
            }}
          >
            Our Leadership
          </span>
          <h2
            style={{
              fontFamily: "var(--font-barlow-condensed), sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
              textTransform: "uppercase",
              lineHeight: 1.05,
              letterSpacing: "0.04em",
              color: "#ffffff",
              marginBottom: 20,
            }}
          >
            The Founders
          </h2>
          <p
            style={{
              fontFamily: "var(--font-barlow), sans-serif",
              fontSize: "clamp(1rem, 1.5vw, 1.1rem)",
              color: "rgba(255,255,255,0.65)",
              maxWidth: 560,
              margin: "0 auto",
              lineHeight: 1.75,
            }}
          >
            Two engineers. One mission. Building the automation company they always wished existed.
          </p>
        </div>

        {/* Founder Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 480px), 1fr))",
            gap: "clamp(24px, 4vw, 48px)",
          }}
        >
          {founders.map((f) => (
            <div
              key={f.id}
              className="founder-card"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 24,
                padding: "clamp(28px, 4vw, 48px)",
                backdropFilter: "blur(12px)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Pillar number */}
              <span
                aria-hidden
                style={{
                  position: "absolute",
                  top: -10,
                  right: 16,
                  fontFamily: "var(--font-barlow-condensed), sans-serif",
                  fontWeight: 800,
                  fontSize: 100,
                  lineHeight: 1,
                  color: f.accentColor,
                  opacity: 0.08,
                  userSelect: "none",
                  pointerEvents: "none",
                }}
              >
                {f.pillarNumber}
              </span>

              {/* Top section */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: 20, marginBottom: 28 }}>
                {/* Avatar */}
                <div
                  style={{
                    width: 72,
                    height: 72,
                    borderRadius: "50%",
                    background: `linear-gradient(135deg, ${f.accentColor}30, ${f.accentColor}10)`,
                    border: `2px solid ${f.accentColor}40`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    overflow: "hidden",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-barlow-condensed), sans-serif",
                      fontWeight: 800,
                      fontSize: 22,
                      color: f.accentColor,
                    }}
                  >
                    {f.initials}
                  </span>
                </div>

                {/* Name & role */}
                <div>
                  <div
                    style={{
                      display: "inline-block",
                      marginBottom: 8,
                      padding: "3px 12px",
                      borderRadius: 999,
                      background: `${f.accentColor}20`,
                      color: f.accentColor,
                      fontFamily: "var(--font-rajdhani), sans-serif",
                      fontWeight: 700,
                      fontSize: 10,
                      textTransform: "uppercase",
                      letterSpacing: "0.2em",
                      border: `1px solid ${f.accentColor}40`,
                    }}
                  >
                    {f.pillarLabel}
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-barlow-condensed), sans-serif",
                      fontWeight: 800,
                      fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      color: "#ffffff",
                      lineHeight: 1.1,
                      marginBottom: 4,
                    }}
                  >
                    {f.name}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-rajdhani), sans-serif",
                      fontSize: 14,
                      fontWeight: 600,
                      color: f.accentColor,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {f.title}
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div
                style={{
                  width: "100%",
                  height: 1,
                  background: "rgba(255,255,255,0.1)",
                  marginBottom: 24,
                }}
              />

              {/* Description */}
              <p
                style={{
                  fontFamily: "var(--font-barlow), sans-serif",
                  fontSize: "clamp(0.9rem, 1.2vw, 1rem)",
                  color: "rgba(255,255,255,0.7)",
                  lineHeight: 1.8,
                  marginBottom: 24,
                }}
              >
                {f.description}
              </p>

              {/* Expertise */}
              <div style={{ marginBottom: 0 }}>
                <p
                  style={{
                    fontFamily: "var(--font-rajdhani), sans-serif",
                    fontWeight: 700,
                    fontSize: 11,
                    textTransform: "uppercase",
                    letterSpacing: "0.18em",
                    color: "rgba(255,255,255,0.4)",
                    marginBottom: 12,
                  }}
                >
                  Areas of Expertise
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {f.expertise.map((skill) => (
                    <span
                      key={skill}
                      style={{
                        padding: "5px 12px",
                        borderRadius: 999,
                        background: "rgba(255,255,255,0.07)",
                        border: "1px solid rgba(255,255,255,0.12)",
                        color: "rgba(255,255,255,0.75)",
                        fontFamily: "var(--font-barlow), sans-serif",
                        fontSize: 12,
                        fontWeight: 500,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA SECTION ──────────────────────────────────────────────────────────────

function CtaSection() {
  return (
    <section
      style={{
        padding: "clamp(60px, 8vw, 100px) clamp(20px, 5vw, 60px)",
        background: "linear-gradient(160deg, #0B1530 0%, #1E2A5E 60%, #0B1530 100%)",
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div
        style={{ position: "relative", zIndex: 10, maxWidth: "800px", margin: "0 auto" }}
      >
        <span
          style={{
            display: "inline-block",
            marginBottom: 20,
            padding: "7px 20px",
            borderRadius: 999,
            fontFamily: "var(--font-rajdhani), sans-serif",
            fontWeight: 700,
            fontSize: 11,
            textTransform: "uppercase",
            letterSpacing: "0.25em",
            background: "rgba(237,97,28,0.2)",
            color: "#ED611C",
            border: "1px solid rgba(237,97,28,0.4)",
          }}
        >
          Why Choose Us
        </span>

        <h2
          style={{
            fontFamily: "var(--font-barlow-condensed), sans-serif",
            fontWeight: 700,
            fontSize: "clamp(1.9rem, 5vw, 3.4rem)",
            textTransform: "uppercase",
            lineHeight: 1.1,
            letterSpacing: "0.05em",
            color: "#ffffff",
            marginBottom: 24,
          }}
        >
          From Concept to Commissioning —{" "}
          <span style={{ color: "#ED611C" }}>Completely In-House</span>
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20, marginBottom: 40, marginTop: 32 }}>
          {[
            { icon: "💡", label: "Absolute Accountability", desc: "Deal directly with the owners at every stage of your project." },
            { icon: "⚙️", label: "Zero Handoffs", desc: "Sales, Design, Procurement & Assembly all under one roof." },
            { icon: "🏭", label: "Industrial Expertise", desc: "25+ years of combined hands-on engineering experience." },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 16,
                padding: "clamp(20px, 3vw, 28px) 20px",
                backdropFilter: "blur(10px)",
              }}
            >
              <div style={{ fontSize: 28, marginBottom: 10 }}>{item.icon}</div>
              <div style={{ fontFamily: "var(--font-barlow-condensed), sans-serif", fontWeight: 700, fontSize: "clamp(14px, 1.5vw, 17px)", textTransform: "uppercase", letterSpacing: "0.08em", color: "#ffffff", marginBottom: 8 }}>{item.label}</div>
              <div style={{ fontFamily: "var(--font-barlow), sans-serif", fontSize: 13, color: "rgba(255,255,255,0.6)", lineHeight: 1.6 }}>{item.desc}</div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <Link
            href="/contact"
            style={{
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              padding: "14px 36px", borderRadius: 999,
              background: "#ED611C", color: "#ffffff",
              fontFamily: "var(--font-rajdhani), sans-serif",
              fontWeight: 700, fontSize: 14, textTransform: "uppercase",
              letterSpacing: "0.14em", textDecoration: "none",
              transition: "all 0.25s", whiteSpace: "nowrap", minHeight: 52,
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#c94d0f"; (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#ED611C"; (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)"; }}
          >
            Start a Project
          </Link>
          <a
            href="tel:+918200181382"
            style={{
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              padding: "14px 36px", borderRadius: 999,
              background: "transparent", color: "#ffffff",
              fontFamily: "var(--font-rajdhani), sans-serif",
              fontWeight: 700, fontSize: 14, textTransform: "uppercase",
              letterSpacing: "0.14em", textDecoration: "none",
              border: "1.5px solid rgba(255,255,255,0.35)",
              transition: "all 0.25s", whiteSpace: "nowrap", minHeight: 52,
            }}
          >
            Call Us Now
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── VISION & MISSION SECTION ──────────────────────────────────────────────────

function VisionMissionSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const importGsap = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      gsap.fromTo(
        el.querySelectorAll(".vm-card"),
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 80%", once: true },
        }
      );
    };
    importGsap();
  }, []);

  return (
    <div ref={containerRef} style={{ marginTop: "clamp(80px, 10vw, 120px)", display: "flex", flexDirection: "column", gap: "clamp(32px, 4vw, 48px)" }}>
      {/* Container for both cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 450px), 1fr))", gap: "clamp(24px, 3vw, 40px)" }}>
        
        {/* VISION CARD */}
        <div className="vm-card" style={{
          background: "#FFFFFF",
          padding: "clamp(32px, 5vw, 48px)",
          borderRadius: 24,
          border: "1px solid rgba(26,42,108,0.08)",
          boxShadow: "0 20px 40px rgba(0,0,0,0.04)",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center"
        }}>
          {/* Subtle glow */}
          <div style={{ position: "absolute", top: -50, right: -50, width: 250, height: 250, background: "rgba(237,97,28,0.05)", filter: "blur(50px)", borderRadius: "50%" }} />
          
          <span style={{
            display: "inline-block",
            marginBottom: 20,
            padding: "6px 16px",
            borderRadius: 999,
            fontFamily: "var(--font-rajdhani), sans-serif",
            fontWeight: 700,
            fontSize: 12,
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            background: "rgba(237,97,28,0.1)",
            color: "#ED611C",
            border: "1px solid rgba(237,97,28,0.2)",
            width: "fit-content"
          }}>
            Our Vision
          </span>
          <p style={{
            fontFamily: "var(--font-barlow), sans-serif",
            fontSize: "clamp(1.2rem, 2vw, 1.45rem)",
            color: "#0B1530",
            lineHeight: 1.6,
            fontWeight: 500,
            position: "relative",
            zIndex: 1
          }}>
            To eliminate repetitive, exhausting, and unsafe manual handling tasks across the manufacturing floor by replacing them with high-efficiency robotic infrastructure that guarantees predictable throughput and maximum equipment uptime.
          </p>
        </div>

        {/* MISSION CARD */}
        <div className="vm-card" style={{
          background: "#FFFFFF",
          padding: "clamp(32px, 5vw, 48px)",
          borderRadius: 24,
          border: "1px solid rgba(26,42,108,0.08)",
          boxShadow: "0 20px 40px rgba(0,0,0,0.04)",
          position: "relative",
        }}>
          <span style={{
            display: "inline-block",
            marginBottom: 32,
            padding: "6px 16px",
            borderRadius: 999,
            fontFamily: "var(--font-rajdhani), sans-serif",
            fontWeight: 700,
            fontSize: 12,
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            background: "rgba(26,42,108,0.05)",
            color: "#1A2A6C",
            border: "1px solid rgba(26,42,108,0.1)",
            width: "fit-content"
          }}>
            Our Mission
          </span>

          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {[
              {
                title: "Targeted Automation",
                text: "To identify and replace high-frequency, repetitive human activities such as manual stacking, machine loading, and heavy lifting with robust robotic arms and automated cells that do not tire or vary in precision."
              },
              {
                title: "Practical Engineering",
                text: "To design and build durable, mathematically precise special-purpose machinery and material handling systems that optimize factory floor space and maximize operational ROI."
              },
              {
                title: "Turnkey Integration",
                text: "To deliver completely synchronized, crash-free mechanical and logic systems that allow factory owners to transition seamlessly into smooth, automated \"lights-out\" manufacturing."
              }
            ].map((mission, idx) => (
              <div key={idx} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <div style={{
                  minWidth: 24,
                  height: 24,
                  borderRadius: "50%",
                  background: "rgba(237,97,28,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 2
                }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#ED611C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <h4 style={{
                    fontFamily: "var(--font-rajdhani), sans-serif",
                    fontWeight: 700,
                    fontSize: "1.15rem",
                    color: "#0B1530",
                    marginBottom: 4
                  }}>
                    {mission.title}
                  </h4>
                  <p style={{
                    fontFamily: "var(--font-barlow), sans-serif",
                    fontSize: "1rem",
                    color: "#64748B",
                    lineHeight: 1.6
                  }}>
                    {mission.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

// ─── MAIN EXPORT ──────────────────────────────────────────────────────────────

export default function CompanyPage() {
  return (
    <main>
      {/* Core Pillars Section */}
      <section
        style={{
          padding: "clamp(80px, 10vw, 140px) clamp(20px, 5vw, 80px)",
          background: "linear-gradient(160deg, #f8faff 0%, #ffffff 50%, #fff8f3 100%)",
          position: "relative",
          overflow: "hidden",
          minHeight: "100svh",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Subtle grid bg */}
        <div
          aria-hidden
          style={{
            position: "absolute", inset: 0,
            backgroundImage: "radial-gradient(rgba(26,42,108,0.04) 1.5px, transparent 1.5px)",
            backgroundSize: "36px 36px", pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1, width: "100%" }}>
          <PillarsHeader />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
              gap: "clamp(20px, 3vw, 36px)",
            }}
          >
            {pillars.map((pillar, i) => (
              <PillarCard key={pillar.id} pillar={pillar} index={i} />
            ))}
          </div>
          <VisionMissionSection />
        </div>
      </section>

      {/* Our Speciality — moved from Home page */}
      <SpecialitySection />
    </main>
  );
}

