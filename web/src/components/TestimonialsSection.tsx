"use client";

import { useEffect, useRef, useState, useCallback } from "react";

// ─── DATA ─────────────────────────────────────────────────────────────────────

const TESTIMONIALS = [
  {
    name: "Shreedhar K.",
    role: "Chief Manager",
    initials: "SK",
    photo: "/img/testimonials/sk.jpeg",
    color: "#ED611C",
    rating: 5,
    quote:
      "Mechspace Automation is Providing Unique Solution that we can get from our Concept to commissioning. They have Automation expertise to run any robotic Operation within economic budget.",
  },
  {
    name: "Mithul O.",
    role: "Managing Director",
    initials: "MO",
    photo: "/img/testimonials/mo.jpg",
    color: "#1E2A5E",
    rating: 5,
    quote:
      "Provide Robotic Solution with Optimum Design and Economic Solution. The team's dedication to quality and efficiency is truly commendable.",
  },
  {
    name: "Vishal Makadia",
    role: "Operational Director",
    initials: "VM",
    photo: "/img/testimonials/vm.jpg",
    color: "#10B981",
    rating: 5,
    quote:
      "Mechspace is Customized Solution Partner for Food Machinery, Design and Development are the Core Expertise of Mechspace Automation.",
  },
  {
    name: "Minesh Bhai P.",
    role: "Managing Director",
    initials: "MP",
    photo: "/img/testimonials/mp.jpg",
    color: "#3B82F6",
    rating: 5,
    quote:
      "Having dedicated team to provide rugged mechanical with Automation solution for any Robotics Manual operation. Outstanding engineering at every step.",
  },
  {
    name: "Ghanshyam Bhai M.",
    role: "Sr. Manager",
    initials: "GM",
    photo: "/img/testimonials/gm.jpg",
    color: "#8B5CF6",
    rating: 5,
    quote:
      "Excellent work and provide on-time delivery of machinery, timely service support for end-user. A truly reliable and professional automation partner.",
  },
];

const STATS = [
  {
    value: "120+",
    label: "Projects Completed",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" style={{ width: 56, height: 56 }}>
        <path d="M18 6H14C11.7909 6 10 7.79086 10 10V40C10 42.2091 11.7909 44 14 44H34C36.2091 44 38 42.2091 38 40V10C38 7.79086 36.2091 6 34 6H30" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18 8C18 5.79086 19.7909 4 22 4H26C28.2091 4 30 5.79086 30 8V10H18V8Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19 25L23 29L31 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    dark: true,
  },
  {
    value: "30+",
    label: "Experienced Engineers",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" style={{ width: 56, height: 56 }}>
        <path d="M24 12C15.1634 12 8 19.1634 8 28H40C40 19.1634 32.8366 12 24 12Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4 28H44" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M24 12V28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 14.5V28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M32 14.5V28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    dark: false,
  },
  {
    value: "80+",
    label: "Turnkey Solutions",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" style={{ width: 56, height: 56 }}>
        <path d="M8 40H40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 40V22L18 16V24L26 18V26L34 20V40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M34 20V12H42V40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M36 12V6H40V12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="22" cy="31" r="4" stroke="currentColor" strokeWidth="2.5"/>
        <path d="M22 24V25M22 37V38M15 31H16M28 31H29M17.05 26.05L17.76 26.76M26.24 35.24L26.95 35.95M17.05 35.95L17.76 35.24M26.24 26.76L26.95 26.05" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
    dark: false,
  },
  {
    value: "100+",
    label: "Satisfaction Provided",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" style={{ width: 56, height: 56 }}>
        <path d="M24 6L10 12V22C10 32 16 40 24 44C32 40 38 32 38 22V12L24 6Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M24 16L25.8 21.6H31.7L26.9 25.1L28.7 30.7L24 27.2L19.3 30.7L21.1 25.1L16.3 21.6H22.2L24 16Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    dark: true,
  },
];

// ─── CLIENT AVATAR ───────────────────────────────────────────────────────────

function ClientAvatar({
  photo,
  initials,
  name,
  color,
}: {
  photo: string;
  initials: string;
  name: string;
  color: string;
}) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <div className="tst-avatar shrink-0" style={{ position: "relative" }}>
      {!imgFailed ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={photo}
          alt={`${name} – client profile photo`}
          onError={() => setImgFailed(true)}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            objectFit: "cover",
            objectPosition: "center top",
            display: "block",
          }}
        />
      ) : (
        // Fallback: initials avatar
        <div
          className="flex items-center justify-center w-full h-full rounded-full font-barlow-condensed font-bold text-white"
          style={{
            background: `linear-gradient(135deg, ${color}, ${color}bb)`,
            fontSize: 18,
            letterSpacing: "0.05em",
          }}
        >
          {initials}
        </div>
      )}
    </div>
  );
}

// ─── STAR RATING ─────────────────────────────────────────────────────────────

function Stars({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          fill={i < count ? "#ED611C" : "none"}
          className="w-4 h-4"
          style={{ stroke: "#ED611C", strokeWidth: i < count ? 0 : 1.5 }}
        >
          <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.49L10 14.27 5.06 16.7 6 11.21l-4-3.9 5.53-.8z" />
        </svg>
      ))}
    </div>
  );
}

// ─── COMPONENT ────────────────────────────────────────────────────────────────

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const TOTAL = TESTIMONIALS.length;
  const slides = [TESTIMONIALS[TOTAL - 1], ...TESTIMONIALS, TESTIMONIALS[0]];

  const [currentIndex, setCurrentIndex] = useState(1);
  const [transitioning, setTransitioning] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const [contentKey, setContentKey] = useState(0);
  const autoTimer = useRef<ReturnType<typeof setInterval> | null>(null);

  const realIndex = (currentIndex - 1 + TOTAL) % TOTAL;

  const goTo = useCallback(
    (next: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setTransitioning(true);
      setCurrentIndex(next);
      setContentKey((k) => k + 1);
    },
    [isAnimating]
  );

  const goNext = useCallback(() => goTo(currentIndex + 1), [currentIndex, goTo]);
  const goPrev = useCallback(() => goTo(currentIndex - 1), [currentIndex, goTo]);

  const handleTransitionEnd = useCallback(() => {
    setIsAnimating(false);
    if (currentIndex === 0) {
      setTransitioning(false);
      setCurrentIndex(TOTAL);
    } else if (currentIndex === TOTAL + 1) {
      setTransitioning(false);
      setCurrentIndex(1);
    }
  }, [currentIndex, TOTAL]);

  useEffect(() => {
    if (!transitioning) {
      const t = setTimeout(() => setTransitioning(true), 20);
      return () => clearTimeout(t);
    }
  }, [transitioning]);

  const startAuto = useCallback(() => {
    if (autoTimer.current) clearInterval(autoTimer.current);
    autoTimer.current = setInterval(() => goNext(), 4500);
  }, [goNext]);

  const stopAuto = () => {
    if (autoTimer.current) clearInterval(autoTimer.current);
  };

  useEffect(() => {
    startAuto();
    return () => stopAuto();
  }, [startAuto]);

  const touchStart = useRef(0);
  const onTouchStart = (e: React.TouchEvent) => { touchStart.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchStart.current;
    if (Math.abs(dx) < 40) return;
    dx < 0 ? goNext() : goPrev();
    startAuto();
  };

  // GSAP entrance
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    import("gsap").then(({ gsap }) => {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);
        const tl = gsap.timeline({
          scrollTrigger: { trigger: section, start: "top 80%", once: true },
        });
        tl.fromTo(section.querySelector(".tst-badge"),
          { opacity: 0, scale: 0.7 },
          { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(2)" }
        )
        .fromTo(section.querySelector(".tst-heading"),
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.65, ease: "power3.out" }, "-=0.2"
        )
        .fromTo(section.querySelector(".tst-left"),
          { opacity: 0, x: -40 },
          { opacity: 1, x: 0, duration: 0.75, ease: "power3.out" }, "-=0.3"
        )
        .fromTo(section.querySelectorAll(".tst-stat-card"),
          { opacity: 0, scale: 0.85 },
          { opacity: 1, scale: 1, duration: 0.45, stagger: 0.1, ease: "back.out(1.4)" }, "-=0.5"
        );
      });
    });
  }, []);

  const active = TESTIMONIALS[realIndex];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28 overflow-hidden"
      style={{
        background: "#ffffff",
      }}
    >

      <div className="max-w-7xl mx-auto px-5 md:px-10 relative z-10">

        {/* ── HEADER ── */}
        <div className="text-center mb-14">
          <span
            className="tst-badge inline-block mb-4 px-5 py-1.5 rounded-full font-rajdhani font-bold text-xs uppercase tracking-[0.22em]"
            style={{
              background: "rgba(237,97,28,0.12)",
              color: "#ED611C",
              border: "1px solid rgba(237,97,28,0.28)",
            }}
          >
            Client Testimonials
          </span>
          <h2
            className="tst-heading font-barlow-condensed font-bold uppercase tracking-widest"
            style={{ fontSize: "clamp(2rem,5vw,3.25rem)", color: "#1E2A5E", lineHeight: 1.1 }}
          >
            What Our Clients Say
          </h2>
          <div
            className="mx-auto mt-4 h-1 w-24 rounded-full"
            style={{ background: "linear-gradient(90deg, #1E2A5E, #ED611C)" }}
          />
          <p className="mt-4 font-barlow text-sm" style={{ color: "#64748B" }}>
            Trusted by industry leaders across manufacturing &amp; automation
          </p>
        </div>

        {/* ── SPLIT LAYOUT: LEFT testimonial + RIGHT stats ── */}
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">

          {/* ─── LEFT: Testimonials carousel ─── */}
          <div
            className="tst-left flex-1 min-w-0"
            style={{ opacity: 0 }}
            onMouseEnter={stopAuto}
            onMouseLeave={startAuto}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            {/* Slide card */}
            <div className="overflow-hidden" style={{ borderRadius: 20 }}>
              <div
                onTransitionEnd={handleTransitionEnd}
                style={{
                  display: "flex",
                  width: `${slides.length * 100}%`,
                  transform: `translateX(calc(-${currentIndex} * ${100 / slides.length}%))`,
                  transition: transitioning
                    ? "transform 480ms cubic-bezier(0.4,0,0.2,1)"
                    : "none",
                  willChange: "transform",
                }}
              >
                {slides.map((t, i) => {
                  const isActive = i === currentIndex;
                  return (
                    <div
                      key={i}
                      aria-hidden={!isActive}
                      style={{ width: `${100 / slides.length}%`, flexShrink: 0 }}
                    >
                      <div
                        style={{
                          background: "rgba(255,255,255,0.95)",
                          backdropFilter: "blur(20px)",
                          borderRadius: 20,
                          border: "1.5px solid rgba(237,97,28,0.15)",
                          boxShadow: "0 20px 60px rgba(30,42,94,0.1), 0 4px 16px rgba(237,97,28,0.07)",
                          padding: "36px 40px 32px",
                          minHeight: 290,
                          position: "relative",
                          overflow: "hidden",
                        }}
                      >
                        {/* top accent */}
                        <div
                          style={{
                            position: "absolute", top: 0, left: 0, right: 0, height: 4,
                            background: `linear-gradient(90deg, transparent, ${t.color}, transparent)`,
                          }}
                        />

                        {/* Avatar row */}
                        <div className="flex items-center gap-4 mb-5">
                          <ClientAvatar
                            photo={t.photo}
                            initials={t.initials}
                            name={t.name}
                            color={t.color}
                          />
                          <div>
                            <div
                              className="font-barlow-condensed font-bold uppercase tracking-wide"
                              style={{ fontSize: 16, color: "#1E2A5E" }}
                            >
                              {t.name}
                            </div>
                            <div
                              className="font-rajdhani font-semibold text-xs uppercase tracking-widest mt-0.5"
                              style={{ color: t.color }}
                            >
                              {t.role}
                            </div>
                            <div className="mt-2">
                              <Stars count={t.rating} />
                            </div>
                          </div>
                          {/* Large quote icon */}
                          <div
                            className="ml-auto font-barlow-condensed font-bold select-none"
                            style={{
                              fontSize: 72,
                              color: `${t.color}18`,
                              lineHeight: 0.8,
                              alignSelf: "flex-start",
                              paddingTop: 6,
                            }}
                          >
                            "
                          </div>
                        </div>

                        {/* Divider */}
                        <div style={{ height: 1, background: "rgba(30,42,94,0.07)", marginBottom: 20 }} />

                        {/* Quote */}
                        <blockquote
                          key={isActive ? contentKey : i}
                          className="font-barlow leading-relaxed"
                          style={{
                            color: "#334155",
                            fontStyle: "italic",
                            fontSize: 15,
                            animationName: isActive ? "fadeSlideUp" : "none",
                            animationDuration: "0.55s",
                            animationTimingFunction: "cubic-bezier(0.2,0,0,1)",
                            animationFillMode: "both",
                          }}
                        >
                          {t.quote}
                        </blockquote>

                        {/* Footer verified line */}
                        <div
                          className="flex items-center gap-3 mt-6"
                          style={{
                            animationName: isActive ? "fadeSlideUp" : "none",
                            animationDuration: "0.6s",
                            animationFillMode: "both",
                            animationDelay: "0.15s",
                          }}
                        >
                          <div
                            className="flex-1 h-px rounded-full"
                            style={{ background: `linear-gradient(90deg, ${t.color}50, transparent)` }}
                          />
                          <span
                            className="font-rajdhani font-bold text-xs uppercase tracking-widest"
                            style={{ color: `${t.color}90` }}
                          >
                            Verified Client
                          </span>
                        </div>

                        {/* corner glow */}
                        <div
                          style={{
                            position: "absolute", bottom: 0, right: 0,
                            width: 130, height: 130,
                            background: `radial-gradient(circle at bottom right, ${t.color}12, transparent 70%)`,
                            pointerEvents: "none",
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Dots + arrows row */}
            <div className="flex items-center justify-between mt-6 px-1">
              {/* Prev arrow */}
              <button
                onClick={() => { goPrev(); startAuto(); }}
                aria-label="Previous testimonial"
                className="flex items-center justify-center rounded-full transition-all duration-200"
                style={{
                  width: 40, height: 40,
                  background: "rgba(255,255,255,0.9)",
                  border: "1.5px solid rgba(30,42,94,0.12)",
                  boxShadow: "0 4px 12px rgba(30,42,94,0.1)",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = active.color;
                  (e.currentTarget as HTMLButtonElement).style.borderColor = active.color;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.9)";
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(30,42,94,0.12)";
                }}
              >
                <svg viewBox="0 0 20 20" fill="none" style={{ width: 16, height: 16, color: "#1E2A5E" }}>
                  <path d="M13 15l-5-5 5-5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {/* Dots */}
              <div className="flex items-center gap-2">
                {TESTIMONIALS.map((t, i) => (
                  <button
                    key={i}
                    onClick={() => { goTo(i + 1); startAuto(); }}
                    aria-label={`Go to testimonial ${i + 1}`}
                    className="rounded-full transition-all duration-300 focus:outline-none"
                    style={{
                      width: i === realIndex ? 28 : 8,
                      height: 8,
                      background: i === realIndex
                        ? `linear-gradient(90deg, ${t.color}, ${t.color}aa)`
                        : "rgba(30,42,94,0.18)",
                      boxShadow: i === realIndex ? `0 0 10px ${t.color}55` : "none",
                      cursor: "pointer",
                      border: "none",
                    }}
                  />
                ))}
              </div>

              {/* Next arrow */}
              <button
                onClick={() => { goNext(); startAuto(); }}
                aria-label="Next testimonial"
                className="flex items-center justify-center rounded-full transition-all duration-200"
                style={{
                  width: 40, height: 40,
                  background: "rgba(255,255,255,0.9)",
                  border: "1.5px solid rgba(30,42,94,0.12)",
                  boxShadow: "0 4px 12px rgba(30,42,94,0.1)",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = active.color;
                  (e.currentTarget as HTMLButtonElement).style.borderColor = active.color;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.9)";
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(30,42,94,0.12)";
                }}
              >
                <svg viewBox="0 0 20 20" fill="none" style={{ width: 16, height: 16, color: "#1E2A5E" }}>
                  <path d="M7 5l5 5-5 5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>

          {/* ─── RIGHT: 2×2 Stats grid ─── */}
          <div className="lg:w-[480px] shrink-0 grid grid-cols-2 gap-4">
            {STATS.map((stat, i) => (
              <div
                key={i}
                className="tst-stat-card flex flex-col items-center justify-center gap-3 rounded-2xl transition-transform duration-300 hover:-translate-y-1"
                style={{
                  opacity: 0,
                  padding: "36px 20px",
                  background: stat.dark ? "#1B2A6B" : "#ED611C",
                  color: "#ffffff",
                  minHeight: 190,
                  boxShadow: stat.dark
                    ? "0 12px 40px rgba(30,42,94,0.35)"
                    : "0 12px 40px rgba(237,97,28,0.35)",
                  cursor: "default",
                }}
              >
                {/* Icon */}
                <div style={{ color: "rgba(255,255,255,0.85)" }}>
                  {stat.icon}
                </div>

                {/* Value */}
                <div
                  className="font-barlow-condensed font-bold"
                  style={{ fontSize: "clamp(2rem,4vw,2.75rem)", color: "#fff", lineHeight: 1 }}
                >
                  {stat.value}
                </div>

                {/* Label */}
                <div
                  className="font-rajdhani font-semibold text-xs uppercase tracking-widest text-center"
                  style={{ color: "rgba(255,255,255,0.65)" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Keyframes + Avatar responsive sizing ── */}
      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* Avatar sizing */
        .tst-avatar {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          overflow: hidden;
          flex-shrink: 0;
          box-shadow: 0 6px 20px rgba(0,0,0,0.18), 0 0 0 2.5px rgba(255,255,255,0.9), 0 0 0 4px rgba(30,42,94,0.12);
          border: 2px solid rgba(255,255,255,0.95);
          background: #f0f2f8;
        }

        /* Tablet */
        @media (max-width: 1024px) and (min-width: 641px) {
          .tst-avatar { width: 72px; height: 72px; }
        }

        /* Mobile */
        @media (max-width: 640px) {
          .tst-avatar { width: 60px; height: 60px; }
        }
      `}</style>
    </section>
  );
}
