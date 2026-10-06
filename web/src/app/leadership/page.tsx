"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Lightbulb, Settings, Wrench, BarChart, ClipboardList, Cpu, ShieldCheck } from "lucide-react";

const leaders = [
  {
    id: "parth",
    pillar: "Pillar 1: The Vision & Strategy",
    name: "Parth Prajapati",
    title: "Co-Founder & Director – Concept, Strategy & Finance",
    background: "Bachelor of Mechanical Engineering + MBA in Sales & Marketing",
    role: "Parth is the front-end driving force of Mechspace. Bridging deep technical engineering with commercial acumen, he takes the lead on client engagement, feasibility analysis, and initial 3D CAD conceptualization. By managing both the design blueprint and the company's financial health, Parth ensures that every automated solution we propose is both technologically superior and commercially viable for our clients.",
    image: "/img/leadership/parth-new.jpeg",
    icon1: <Lightbulb size={24} />,
    icon2: <BarChart size={24} />,
    alignment: "left", // Image left, text right
  },
  {
    id: "ankit",
    pillar: "Pillar 2: The Operational Engine",
    name: "Ankit Patel",
    title: "Co-Founder & Director – Project Planning & Procurement",
    background: "Mechanical Engineer (8+ Years of Experience)",
    role: "Ankit transforms engineering blueprints into structured reality. Specializing in advanced project planning, precise material selection, and strategic procurement, he optimizes every step of the supply chain. Through meticulous raw material nesting, waste minimization, and process optimization, Ankit ensures that all components are fabricated exactly to drawing specifications, keeping projects strictly on time and within budget.",
    image: "/img/leadership/ankit.jpg",
    icon1: <Settings size={24} />,
    icon2: <ClipboardList size={24} />,
    alignment: "right", // Image right, text left
  },
  {
    id: "sandeep",
    pillar: "Pillar 3: The Engineering Craftsman",
    name: "Sandeep Thakor",
    title: "Co-Founder & Director – Machine Design & Commissioning",
    background: "Mechanical Engineer (9+ Years of Experience)",
    role: "Sandeep is the backbone of our manufacturing quality and execution. With nearly a decade of hands-on expertise in detailed machine drafting, sub-assembly, precision welding fitment, and in-house testing, he bridges the gap between software and the shop floor. Sandeep personally oversees the physical build and final site commissioning, ensuring that our robotics and food machinery perform flawlessly under heavy industrial conditions.",
    image: "/img/leadership/sandeep.jpg",
    icon1: <Wrench size={24} />,
    icon2: <Cpu size={24} />,
    alignment: "left", // Image left, text right
  },
];

export default function LeadershipPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: any;
    
    import("gsap").then(({ gsap }) => {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);

        ctx = gsap.context(() => {
          // Animate header
          gsap.fromTo(
            ".hero-anim",
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power3.out" }
          );

          // Animate sections on scroll
          const sections = gsap.utils.toArray(".reveal-section");
          sections.forEach((sec: any) => {
            gsap.fromTo(
              sec,
              { opacity: 0, y: 60 },
              {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: sec,
                  start: "top 80%",
                  once: true,
                },
              }
            );
          });
        }, containerRef);
      });
    });

    return () => {
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <main
      ref={containerRef}
      className="overflow-hidden"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(160deg, #f8f9ff 0%, #ffffff 40%, #fff8f3 100%)",
      }}
    >
      {/* ── HERO SECTION ── */}
      <section className="pt-32 md:pt-40 pb-16 px-6 max-w-5xl mx-auto text-center">
        <div className="hero-anim inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-orange-200 bg-orange-50">
          <span className="w-2 h-2 rounded-full bg-orange-500" />
          <span className="font-rajdhani font-bold text-xs uppercase tracking-[0.2em] text-orange-600">
            Our Strength Lies in Synergy
          </span>
        </div>
        <h1
          className="hero-anim font-barlow-condensed font-black uppercase tracking-wide leading-tight mb-8"
          style={{ fontSize: "clamp(3rem, 6vw, 5rem)", color: "#1E2A5E" }}
        >
          The <span style={{ color: "#ED611C" }}>3 Pillars</span> of Mechspace
        </h1>
        <p
          className="hero-anim font-barlow text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto"
        >
          At Mechspace Automation, our strength lies in our synergy. Founded by three mechanical engineers with over 25 years of combined industrial experience, our leadership bridges the gap between innovative concept design, razor-sharp operational efficiency, and flawless on-site execution. We don't just build machines; we engineer end-to-end industrial reliability.
        </p>
      </section>

      {/* ── LEADERS PROFILES ── */}
      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto flex flex-col gap-24 md:gap-32">
        {leaders.map((leader, idx) => (
          <div
            key={leader.id}
            className={`reveal-section flex flex-col ${
              leader.alignment === "left" ? "lg:flex-row" : "lg:flex-row-reverse"
            } items-center gap-12 lg:gap-20`}
          >
            {/* Image Container */}
            <div className="w-full lg:w-1/2 relative group">
              <div
                className="absolute inset-0 bg-orange-500 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10"
                style={{ transform: "translate(15px, 15px)" }}
              />
              <div
                className="absolute inset-0 border-2 rounded-3xl transition-transform duration-500 -z-10"
                style={{ borderColor: "rgba(30,42,94,0.1)", transform: "translate(-15px, -15px)" }}
              />
              <div className="relative aspect-[4/5] max-w-md mx-auto w-full rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient overlay at bottom of image */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E2A5E]/80 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="font-barlow-condensed font-bold text-3xl uppercase tracking-wider mb-1">
                    {leader.name}
                  </h3>
                  <p className="font-rajdhani font-medium tracking-widest text-orange-400 uppercase text-xs">
                    {leader.title.split("–")[0].trim()}
                  </p>
                </div>
              </div>
            </div>

            {/* Content Container */}
            <div className="w-full lg:w-1/2 flex flex-col">
              <span
                className="inline-block font-rajdhani font-bold text-sm uppercase tracking-[0.2em] mb-4"
                style={{ color: "#ED611C" }}
              >
                {leader.pillar}
              </span>
              <h2
                className="font-barlow-condensed font-bold uppercase tracking-wide leading-tight mb-6"
                style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", color: "#1E2A5E" }}
              >
                {leader.title.split("–")[1]?.trim() || leader.title}
              </h2>

              <div
                className="flex items-start gap-4 p-5 rounded-2xl mb-8"
                style={{ background: "rgba(30,42,94,0.03)", border: "1px solid rgba(30,42,94,0.08)" }}
              >
                <div className="w-10 h-10 shrink-0 rounded-full flex items-center justify-center bg-white shadow-sm" style={{ color: "#ED611C" }}>
                  {leader.icon1}
                </div>
                <div>
                  <h4 className="font-rajdhani font-bold text-sm uppercase tracking-wider text-slate-800 mb-1">
                    Background
                  </h4>
                  <p className="font-barlow text-sm text-slate-600 leading-relaxed">
                    {leader.background}
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-4 top-0 bottom-0 w-1 rounded-full bg-gradient-to-b from-orange-400 to-transparent opacity-50" />
                <div className="flex gap-4">
                  <div className="mt-1 shrink-0" style={{ color: "#1E2A5E" }}>
                    {leader.icon2}
                  </div>
                  <div>
                    <h4 className="font-rajdhani font-bold text-sm uppercase tracking-wider text-slate-800 mb-3">
                      The Role
                    </h4>
                    <p className="font-barlow text-lg text-slate-600 leading-relaxed">
                      {leader.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* ── CLOSING STATEMENT ── */}
      <section className="reveal-section relative py-20 px-6 mt-12 mb-24 max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl">
        <div
          className="absolute inset-0 z-0"
          style={{ background: "linear-gradient(135deg, #1E2A5E 0%, #0B1230 100%)" }}
        />
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500 rounded-full blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2 z-0" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-20 transform -translate-x-1/2 translate-y-1/2 z-0" />
        
        <div className="relative z-10 text-center text-white p-8 md:p-12">
          <div className="w-16 h-16 mx-auto bg-orange-500 rounded-2xl flex items-center justify-center shadow-lg mb-8 transform rotate-3">
            <ShieldCheck size={32} className="text-white transform -rotate-3" />
          </div>
          
          <h2 className="font-rajdhani font-bold uppercase tracking-[0.2em] text-orange-400 text-sm mb-4">
            Why Choose Us?
          </h2>
          <h3 className="font-barlow-condensed font-bold uppercase tracking-wide leading-tight mb-8" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
            From Concept to Commissioning<br />
            <span className="text-orange-500">—</span> Completely In-House <span className="text-orange-500">—</span>
          </h3>
          
          <p className="font-barlow text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10">
            Because our founders directly head Sales, Design, Procurement, and Assembly, Mechspace Automation offers an unparalleled advantage: <span className="text-white font-semibold border-b border-orange-500 pb-1">absolute accountability</span>. When you partner with us, you are dealing directly with the owners at every stage of your project's lifecycle.
          </p>

          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-rajdhani font-bold text-sm uppercase tracking-widest text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_30px_rgba(237,97,28,0.4)]"
            style={{ background: "linear-gradient(135deg, #ED611C, #d85618)" }}
          >
            Work With Our Team
            <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </section>
    </main>
  );
}
