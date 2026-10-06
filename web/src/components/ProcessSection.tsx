"use client";

import { useEffect, useRef, useState, useCallback } from "react";

// ─── DATA ─────────────────────────────────────────────────────────────────────

const STEPS = [
  {
    number: "01",
    title: "Consultation & Needs Assessment",
    description:
      "We begin with a detailed discussion to understand your current challenges, production goals, budget, and facility constraints to craft the perfect automation roadmap tailored exclusively to you.",
    accent: "#ED611C",
    icon: (
      <svg viewBox="0 0 80 80" fill="none">
        <circle cx="40" cy="32" r="18" stroke="#ED611C" strokeWidth="2.5" fill="rgba(237,97,28,0.1)" />
        <path d="M32 32c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8" stroke="#ED611C" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="40" cy="44" r="2" fill="#ED611C" />
        <path d="M20 66c0-11 9-20 20-20s20 9 20 20" stroke="#1E2A5E" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M10 30h7M63 30h7M40 10v7" stroke="#ED611C" strokeWidth="2.2" strokeLinecap="round" />
        <circle cx="10" cy="30" r="2.5" fill="#ED611C" />
        <circle cx="70" cy="30" r="2.5" fill="#ED611C" />
        <circle cx="40" cy="10" r="2.5" fill="#ED611C" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Conceptual Design & Proposal",
    description:
      "Our engineering team develops a full 3D concept model and a detailed technical proposal complete with estimated ROI, project timeline, and phased implementation plan for your approval.",
    accent: "#3B82F6",
    icon: (
      <svg viewBox="0 0 80 80" fill="none">
        <rect x="10" y="16" width="44" height="38" rx="4" stroke="#3B82F6" strokeWidth="2.5" fill="rgba(59,130,246,0.08)" />
        <path d="M18 28h28M18 36h22M18 44h16" stroke="#3B82F6" strokeWidth="2.2" strokeLinecap="round" />
        <circle cx="62" cy="56" r="12" fill="rgba(237,97,28,0.12)" stroke="#ED611C" strokeWidth="2.5" />
        <path d="M57 56l4 4 7-7" stroke="#ED611C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M44 12l6 6-6 6" stroke="#ED611C" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Detailed Engineering & Fabrication",
    description:
      "Comprehensive mechanical, electrical, and control system design followed by in-house precision fabrication, assembly, and rigorous quality assurance at every stage of production.",
    accent: "#10B981",
    icon: (
      <svg viewBox="0 0 80 80" fill="none">
        <circle cx="40" cy="40" r="18" stroke="#10B981" strokeWidth="2.5" fill="rgba(16,185,129,0.08)" />
        <circle cx="40" cy="40" r="7" fill="#10B981" />
        <path d="M40 14v8M40 58v8M14 40h8M58 40h8" stroke="#1E2A5E" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M21 21l5 5M54 54l5 5M59 21l-5 5M21 59l5-5" stroke="#1E2A5E" strokeWidth="2.2" strokeLinecap="round" />
        <circle cx="40" cy="40" r="26" stroke="rgba(16,185,129,0.2)" strokeWidth="1" strokeDasharray="4 4" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Installation & Commissioning",
    description:
      "We manage complete on-site installation, seamless integration with your existing equipment, and Site Acceptance Testing (SAT) to certify flawless, production-ready performance.",
    accent: "#F59E0B",
    icon: (
      <svg viewBox="0 0 80 80" fill="none">
        <rect x="12" y="46" width="56" height="22" rx="3" stroke="#F59E0B" strokeWidth="2.5" fill="rgba(245,158,11,0.08)" />
        <path d="M26 46V34a14 14 0 0 1 28 0v12" stroke="#1E2A5E" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M34 60h12" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="62" cy="20" r="10" fill="rgba(237,97,28,0.12)" stroke="#ED611C" strokeWidth="2.2" />
        <path d="M58 20l3 3 5-5" stroke="#ED611C" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Training & Ongoing Support",
    description:
      "Comprehensive operator and maintenance training followed by responsive 24/7 technical support, preventive maintenance programs, and service to guarantee long-term peak efficiency.",
    accent: "#8B5CF6",
    icon: (
      <svg viewBox="0 0 80 80" fill="none">
        <path d="M14 66V26a3 3 0 0 1 3-3h46a3 3 0 0 1 3 3v40" stroke="#8B5CF6" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M8 66h64" stroke="#8B5CF6" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M28 42h24M28 52h16" stroke="#ED611C" strokeWidth="2.2" strokeLinecap="round" />
        <circle cx="40" cy="32" r="6" fill="rgba(139,92,246,0.15)" stroke="#8B5CF6" strokeWidth="2.2" />
        <path d="M52 70l3 6M28 70l-3 6" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

const TOTAL = STEPS.length;

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────

export function ProcessSection() {
  const sectionRef   = useRef<HTMLElement>(null);
  const scrollRef    = useRef<HTMLDivElement>(null);
  const slideRefs    = useRef<(HTMLDivElement | null)[]>(Array(TOTAL).fill(null));
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible,  setIsVisible]    = useState(false);

  const step = STEPS[activeIndex];

  // ── Track active slide via IntersectionObserver ─────────────────────────
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    const observers: IntersectionObserver[] = [];

    slideRefs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveIndex(i); },
        { root: container, threshold: 0.55 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // ── Scroll programmatically ──────────────────────────────────────────────
  const scrollToStep = useCallback((idx: number) => {
    const container = scrollRef.current;
    if (!container) return;
    const clamped = Math.min(Math.max(idx, 0), TOTAL - 1);
    container.scrollTo({ top: clamped * container.clientHeight, behavior: "smooth" });
  }, []);

  // ── Keyboard navigation (when scroll container is focused) ───────────────
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "PageDown") {
        e.preventDefault();
        scrollToStep(activeIndex + 1);
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        scrollToStep(activeIndex - 1);
      }
    },
    [activeIndex, scrollToStep]
  );

  // ── Section entrance via IntersectionObserver ────────────────────────────
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    obs.observe(section);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Our Process"
      style={{
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.8s ease",
      }}
    >
      {/* ── BACKGROUND: Pure white ── */}
      <div
        className="absolute inset-0"
        style={{ background: "#ffffff" }}
      />

      {/* ══════════════════════════════════════════════════════════════════════
          SCROLLABLE SLIDES — scroll-snap-type: y mandatory
          Each slide is exactly 100vh so one wheel/swipe = one step
      ══════════════════════════════════════════════════════════════════════ */}
      <div
        ref={scrollRef}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        aria-label="Process steps — use arrow keys to navigate"
        className="proc-scroll"
        style={{
          height: "100%",
          overflowY: "scroll",
          scrollSnapType: "y mandatory",
          position: "relative",
          zIndex: 1,
          // Firefox scrollbar hide
          scrollbarWidth: "none",
          outline: "none",
        }}
      >
        {STEPS.map((s, i) => (
          <div
            key={i}
            ref={(el) => { slideRefs.current[i] = el; }}
            role="group"
            aria-roledescription="slide"
            aria-label={`Step ${i + 1} of ${TOTAL}: ${s.title}`}
            style={{
              height: "100vh",
              scrollSnapAlign: "start",
              scrollSnapStop: "always",    // force stop on every slide
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              // Reserve space for top header overlay (~148px) and bottom hint (~72px)
              paddingTop: 148,
              paddingBottom: 72,
              paddingLeft: 20,
              paddingRight: 20,
              boxSizing: "border-box",
            }}
          >
            <StepCard step={s} isActive={activeIndex === i} index={i} />
          </div>
        ))}
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          HEADER OVERLAY — always visible on top, not part of scroll
      ══════════════════════════════════════════════════════════════════════ */}
      <header
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 10,
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            maxWidth: 1152,
            margin: "0 auto",
            padding: "36px 32px 0",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: 16,
          }}
        >
          {/* Left: badge + title + underline */}
          <div>
            <span
              style={{
                display: "inline-block",
                marginBottom: 10,
                padding: "5px 14px",
                borderRadius: 999,
                fontWeight: 700,
                fontSize: 11,
                textTransform: "uppercase",
                letterSpacing: "0.22em",
                background: "rgba(237,97,28,0.13)",
                color: "#ED611C",
                border: "1px solid rgba(237,97,28,0.3)",
              }}
            >
              How We Work
            </span>
            <h2
              className="font-barlow-condensed"
              style={{
                fontSize: "clamp(1.9rem,4.5vw,3.2rem)",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.09em",
                lineHeight: 1.08,
                color: "#1E2A5E",
                margin: 0,
              }}
            >
              Our Process
            </h2>
            <div
              style={{
                marginTop: 10,
                height: 4,
                width: 72,
                borderRadius: 999,
                background: "linear-gradient(90deg,#ED611C,#f59e0b)",
              }}
            />
          </div>

          {/* Right: counter + navigation arrows */}
          <div
            style={{ display: "flex", alignItems: "center", gap: 12, pointerEvents: "all" }}
          >
            <span
              className="font-barlow-condensed"
              style={{
                fontWeight: 700,
                fontSize: 22,
                color: "rgba(30,42,94,0.28)",
                userSelect: "none",
                whiteSpace: "nowrap",
              }}
            >
              <span
                style={{ color: step.accent, transition: "color 0.4s" }}
              >
                {String(activeIndex + 1).padStart(2, "0")}
              </span>
              {" / "}
              {String(TOTAL).padStart(2, "0")}
            </span>

            <NavBtn
              direction="prev"
              onClick={() => scrollToStep(activeIndex - 1)}
              color={step.accent}
              disabled={activeIndex === 0}
            />
            <NavBtn
              direction="next"
              onClick={() => scrollToStep(activeIndex + 1)}
              color={step.accent}
              disabled={activeIndex === TOTAL - 1}
            />
          </div>
        </div>
      </header>

      {/* ══════════════════════════════════════════════════════════════════════
          RIGHT-SIDE VERTICAL DOTS — clickable step navigation
      ══════════════════════════════════════════════════════════════════════ */}
      <nav
        aria-label="Step navigation"
        style={{
          position: "absolute",
          right: 24,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
        }}
      >
        {STEPS.map((s, i) => (
          <button
            key={i}
            onClick={() => scrollToStep(i)}
            aria-label={`Step ${i + 1}: ${s.title}`}
            aria-current={i === activeIndex ? "step" : undefined}
            title={`Step ${i + 1}: ${s.title}`}
            style={{
              width: 4,
              height: i === activeIndex ? 32 : 8,
              borderRadius: 999,
              background:
                i === activeIndex
                  ? s.accent
                  : i < activeIndex
                  ? `${s.accent}55`
                  : "rgba(30,42,94,0.18)",
              border: "none",
              cursor: "pointer",
              padding: 0,
              transition: "height 0.35s cubic-bezier(0.4,0,0.2,1), background 0.35s",
              boxShadow: i === activeIndex ? `0 0 12px ${s.accent}70` : "none",
            }}
          />
        ))}
      </nav>

      {/* ══════════════════════════════════════════════════════════════════════
          BOTTOM SCROLL HINT — hidden on last step
      ══════════════════════════════════════════════════════════════════════ */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 28,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 5,
          opacity: activeIndex === TOTAL - 1 ? 0 : 1,
          transition: "opacity 0.5s ease",
          pointerEvents: "none",
        }}
      >
        <span
          style={{
            fontWeight: 600,
            fontSize: 10,
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            color: "rgba(30,42,94,0.32)",
          }}
        >
          Scroll to continue
        </span>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="proc-bounce"
          style={{ width: 16, height: 16, color: step.accent, transition: "color 0.4s" }}
        >
          <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* ── Keyframes + scrollbar hide ── */}
      <style>{`
        .proc-scroll::-webkit-scrollbar { display: none; }

        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes expandLine {
          from { width: 0; opacity: 0; }
          to   { width: 100%; opacity: 1; }
        }
        @keyframes proc-bounce {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(5px); }
        }
        .proc-bounce { animation: proc-bounce 1.4s ease-in-out infinite; }

        @keyframes arrowPulse {
          0%, 100% { transform: translateX(0); opacity: 0.55; }
          50%       { transform: translateX(3px); opacity: 1; }
        }
        @keyframes arrowPulseLeft {
          0%, 100% { transform: translateX(0); opacity: 0.55; }
          50%       { transform: translateX(-3px); opacity: 1; }
        }
      `}</style>
    </section>
  );
}

// ─── STEP CARD ────────────────────────────────────────────────────────────────

function StepCard({
  step,
  isActive,
  index,
}: {
  step: (typeof STEPS)[0];
  isActive: boolean;
  index: number;
}) {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: 1100,
        position: "relative",
        borderRadius: 28,
        overflow: "hidden",
        background: "rgba(255,255,255,0.94)",
        backdropFilter: "blur(28px)",
        border: `1.5px solid ${step.accent}30`,
        boxShadow: isActive
          ? `0 24px 72px rgba(30,42,94,0.13), 0 0 0 1px ${step.accent}18, 0 6px 28px ${step.accent}16`
          : "0 8px 32px rgba(30,42,94,0.08)",
        transition: "box-shadow 0.5s ease, border-color 0.5s ease",
      }}
    >
      {/* Top accent bar */}
      <div
        style={{
          position: "absolute",
          top: 0, left: 0, right: 0,
          height: 4,
          background: `linear-gradient(90deg, transparent 0%, ${step.accent} 25%, ${step.accent}dd 75%, transparent 100%)`,
        }}
      />

      {/* Card body — horizontal layout */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 56,
          padding: "clamp(32px, 5vw, 56px) clamp(28px, 5vw, 56px)",
          flexWrap: "wrap",
        }}
      >
        {/* ── LEFT: Ghost number + Icon ── */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 20,
            flexShrink: 0,
          }}
        >
          {/* Ghost outline number */}
          <div
            className="font-barlow-condensed"
            style={{
              fontSize: "clamp(72px,10vw,128px)",
              fontWeight: 700,
              lineHeight: 1,
              WebkitTextStroke: `3px ${step.accent}55`,
              color: "transparent",
              userSelect: "none",
              animationName: isActive ? "fadeSlideUp" : "none",
              animationDuration: "0.5s",
              animationTimingFunction: "cubic-bezier(0.2,0,0,1)",
              animationFillMode: "both",
            }}
          >
            {step.number}
          </div>

          {/* Icon bubble */}
          <div
            style={{
              width: 96, height: 96,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 20,
              background: `linear-gradient(135deg, ${step.accent}22, ${step.accent}08)`,
              border: `2px solid ${step.accent}40`,
              boxShadow: isActive
                ? `0 12px 40px ${step.accent}35, 0 0 0 10px ${step.accent}0a`
                : `0 6px 20px ${step.accent}18`,
              transition: "box-shadow 0.5s",
              animationName: isActive ? "fadeSlideUp" : "none",
              animationDuration: "0.55s",
              animationTimingFunction: "cubic-bezier(0.2,0,0,1)",
              animationFillMode: "both",
              animationDelay: "0.05s",
            }}
          >
            <div style={{ width: 58, height: 58 }}>{step.icon}</div>
          </div>
        </div>

        {/* ── RIGHT: Text content ── */}
        <div style={{ flex: 1, minWidth: 0 }}>
          {/* Step badge */}
          <span
            style={{
              display: "inline-block",
              marginBottom: 18,
              padding: "5px 14px",
              borderRadius: 999,
              fontWeight: 700,
              fontSize: 11,
              textTransform: "uppercase",
              letterSpacing: "0.22em",
              background: `${step.accent}18`,
              color: step.accent,
              border: `1px solid ${step.accent}35`,
              animationName: isActive ? "fadeSlideUp" : "none",
              animationDuration: "0.4s",
              animationTimingFunction: "cubic-bezier(0.2,0,0,1)",
              animationFillMode: "both",
              animationDelay: "0.08s",
            }}
          >
            Step {step.number}
          </span>

          {/* Title */}
          <h3
            className="font-barlow-condensed"
            style={{
              fontSize: "clamp(22px,3.2vw,38px)",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              lineHeight: 1.15,
              color: "#1E2A5E",
              margin: "0 0 14px",
              animationName: isActive ? "fadeSlideUp" : "none",
              animationDuration: "0.5s",
              animationTimingFunction: "cubic-bezier(0.2,0,0,1)",
              animationFillMode: "both",
              animationDelay: "0.13s",
            }}
          >
            {step.title}
          </h3>

          {/* Animated accent underline */}
          <div
            style={{
              height: 3,
              borderRadius: 999,
              marginBottom: 20,
              background: `linear-gradient(90deg, ${step.accent}, ${step.accent}28)`,
              animationName: isActive ? "expandLine" : "none",
              animationDuration: "0.6s",
              animationTimingFunction: "cubic-bezier(0.2,0,0,1)",
              animationFillMode: "both",
              animationDelay: "0.18s",
            }}
          />

          {/* Description */}
          <p
            className="font-barlow"
            style={{
              fontSize: "clamp(14px,1.6vw,17px)",
              lineHeight: 1.75,
              color: "#64748B",
              maxWidth: 580,
              margin: 0,
              animationName: isActive ? "fadeSlideUp" : "none",
              animationDuration: "0.6s",
              animationTimingFunction: "cubic-bezier(0.2,0,0,1)",
              animationFillMode: "both",
              animationDelay: "0.22s",
            }}
          >
            {step.description}
          </p>

          {/* Step progress mini pills */}
          <div style={{ display: "flex", alignItems: "center", gap: 7, marginTop: 28 }}>
            {STEPS.map((_, j) => (
              <div
                key={j}
                style={{
                  height: 5,
                  width: j === index ? 30 : 7,
                  borderRadius: 999,
                  background:
                    j === index
                      ? step.accent
                      : j < index
                      ? `${step.accent}45`
                      : "rgba(30,42,94,0.12)",
                  transition: "width 0.4s cubic-bezier(0.4,0,0.2,1), background 0.4s",
                }}
              />
            ))}
            <span
              className="font-barlow-condensed"
              style={{
                marginLeft: 6,
                fontSize: 14,
                fontWeight: 700,
                color: "rgba(30,42,94,0.28)",
              }}
            >
              <span style={{ color: step.accent }}>{String(index + 1).padStart(2, "0")}</span>
              {" / "}
              {String(TOTAL).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>

      {/* Corner glow decoration */}
      <div
        aria-hidden
        style={{
          position: "absolute", bottom: 0, right: 0,
          width: 200, height: 200,
          background: `radial-gradient(circle at bottom right, ${step.accent}18, transparent 65%)`,
          pointerEvents: "none",
        }}
      />
    </div>
  );
}

// ─── NAV BUTTON ───────────────────────────────────────────────────────────────

function NavBtn({
  direction,
  onClick,
  color,
  disabled,
}: {
  direction: "prev" | "next";
  onClick: () => void;
  color: string;
  disabled: boolean;
}) {
  const [hov, setHov] = useState(false);
  const isPrev = direction === "prev";

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={isPrev ? "Previous step" : "Next step"}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        width: 46, height: 46,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        border: `1.5px solid ${hov && !disabled ? color + "60" : "rgba(30,42,94,0.14)"}`,
        background: hov && !disabled ? `${color}18` : "rgba(30,42,94,0.06)",
        boxShadow: hov && !disabled ? `0 0 18px ${color}30` : "none",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.35 : 1,
        transition: "all 0.25s",
      }}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        style={{
          width: 20, height: 20,
          color: hov && !disabled ? color : "rgba(30,42,94,0.5)",
          transition: "color 0.25s",
          animation: hov && !disabled
            ? `${isPrev ? "arrowPulseLeft" : "arrowPulse"} 0.75s ease-in-out infinite`
            : "none",
        }}
      >
        {isPrev
          ? <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
          : <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
        }
      </svg>
    </button>
  );
}
