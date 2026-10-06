"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// === REUSABLE ANIMATION VARIANTS ===
const snapEasing: [number, number, number, number] = [0.25, 1, 0.5, 1];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: snapEasing } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

export default function PackagingSolutionPage() {
  return (
    <main className="bg-[#ffffff] min-h-screen relative overflow-hidden font-barlow text-[#1a1a1a]">
      
      {/* SECTION 1: HERO (Content Left, Image Right) */}
      <section id="packaging-solution" className="pt-32 pb-16 px-6 lg:px-12 max-w-[1400px] mx-auto relative">
        {/* Download Brochure Button */}
        <div className="absolute top-32 right-6 lg:right-12 z-20 hidden md:block">
          <a
            href="/docs/mech-space-brochure.pdf"
            download
            className="flex items-center gap-2 px-5 py-2.5 bg-[#ED611C] hover:bg-[#111] text-white font-rajdhani font-bold uppercase tracking-widest text-sm rounded shadow-lg transition-colors duration-300"
          >
            <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Brochure
          </a>
        </div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left: Content (Order 1 on Desktop) */}
          <motion.div variants={fadeInUp} className="space-y-6 order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-barlow-condensed font-bold text-[#111] leading-[1.1] tracking-wide">
              Packaging Solution
            </h1>
            
            <h2 className="text-xl md:text-2xl font-rajdhani font-bold text-[#ED611C] leading-snug">
              Streamlining End-of-Line Logistics with High-Speed Case Packaging, Smart Layer Patterning, and Heavy-Duty Multi-Axis Automation
            </h2>
            
            <div className="space-y-4 text-[1.05rem] md:text-[1.1rem] leading-[1.8] text-[#333]">
              <p>
                An essential requirement for modern high-volume manufacturing lines around the globe, Mechspace Automation’s Palletizing & Secondary Packaging Solutions are engineered to completely automate your final production stages. Whether your facility handles individual products requiring case packing into secondary corrugated boxes, heavy bags up to 50Kg, or intermediate liquid containers, our systems utilize next-generation structural design and advanced logic control to keep your secondary packaging lines moving flawlessly.
              </p>
              <p>
                Mechspace Automation builds custom end-of-line systems alongside leading global robotic platforms and high-precision Cartesian gantries. Our smart packaging and palletizing installations deliver consistent, high-capacity throughput completely eliminating end-of-line floor bottlenecks, reducing operator fatigue, and optimizing your warehouse logistics.
              </p>
            </div>

            <div className="pt-4">
              <Link href="/contact" className="inline-block px-8 py-3.5 border-2 border-[#111] text-[#111] font-rajdhani font-bold text-sm uppercase tracking-widest hover:bg-[#111] hover:text-white transition-colors duration-300">
                Enquiry Now
              </Link>
            </div>
          </motion.div>

          {/* Right: Image (Order 2 on Desktop) */}
          <motion.div variants={fadeInUp} className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center order-1 lg:order-2">
            <Image
              src="/img/solutions/packaging-solution-new.jpeg"
              alt="Packaging Solution"
              fill
              className="object-contain"
              priority
            />
          </motion.div>

        </motion.div>
      </section>

      {/* SECTION 2: DETAILED CONTENT */}
      <section className="pb-24 px-6 lg:px-12 max-w-[1400px] mx-auto w-full">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="w-full">
          
          {/* Main Heading & Intro */}
          <motion.div variants={fadeInUp} className="mb-12">
            <h2 className="text-2xl md:text-[1.75rem] font-barlow-condensed font-bold text-[#111] leading-[1.3] mb-6">
              Mechspace Automation Delivers Rigid Mechanical Engineering and Reliable Floor Throughput Through Turnkey End-of-Line Ecosystems
            </h2>
            <div className="space-y-4 text-base md:text-[1.05rem] leading-[1.8] text-[#333]">
              <p>
                Operating directly out of the industrial engineering hub of Vadodara, Gujarat, we manufacture robust secondary packaging and palletizing systems designed to handle demanding physical workloads in continuous, 24/7 production environments.
              </p>
              <p>
                From upstream case erectors and product collators to low-payload collaborative robot cells and high-speed multi-axis gantry networks, every system we deliver undergoes precise physical and mechanical simulation before deployment. This ensures smooth acceleration curves, zero deflection in structural pillars, and absolute precision during high-speed secondary handling and pick-and-place cycles.
              </p>
            </div>
          </motion.div>

          {/* Features Section */}
          <motion.div variants={fadeInUp} className="mb-12">
            <h3 className="text-xl md:text-[1.65rem] font-barlow-condensed font-bold text-[#111] mb-4">
              Key Features of Our End-of-Line Automation Systems:
            </h3>
            <p className="text-base md:text-[1.05rem] leading-[1.8] text-[#333] mb-6">
              Being focused on delivering true Industry 5.0 efficiency, Mechspace Automation designs systems with unmatched operational flexibility:
            </p>
            <ul className="space-y-4 text-base md:text-[1.05rem] leading-[1.8] text-[#333] list-disc pl-5 marker:text-[#ED611C]">
              <li>
                <strong className="text-[#111] font-semibold">Turnkey Secondary Packaging Integration:</strong> Seamless flow from individual product grouping and case loading to box sealing and sorting.
              </li>
              <li>
                <strong className="text-[#111] font-semibold">Intuitive HMI Pattern Selection:</strong> Change your box stacking arrays, layer counts, and interlocking patterns instantly with a touch on the control panel—no programming knowledge required.
              </li>
              <li>
                <strong className="text-[#111] font-semibold">Precision End-of-Arm Tooling (EOAT):</strong> Custom-engineered vacuum pads, mechanical side-clamps, or heavy-duty bottom-support forks built to grip single or multiple products simultaneously without packaging damage.
              </li>
              <li>
                <strong className="text-[#111] font-semibold">Complete Material Handling Synchronization:</strong> Flawless communication between product infeed lines, case packing stations, automatic pallet dispensers, and heavy-duty motorized pallet discharge conveyors.
              </li>
            </ul>
          </motion.div>

          {/* Why Trust Us Section */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-xl md:text-[1.65rem] font-barlow-condensed font-bold text-[#111] mb-4">
              Why Factory Operations Managers Choose Mechspace Automation:
            </h3>
            <ul className="space-y-4 text-base md:text-[1.05rem] leading-[1.8] text-[#333] list-disc pl-5 marker:text-[#ED611C]">
              <li>
                <strong className="text-[#111] font-semibold">Complete Plant Safety Compliance:</strong> Full integration of structural safety enclosures, muting light curtains, and zero-speed safety monitoring to allow safe forklift access for loaded pallet removal.
              </li>
              <li>
                <strong className="text-[#111] font-semibold">Reduction in Labor Overhead:</strong> Eradicates repetitive manual packing and lifting injuries, ensuring consistent end-of-line output regardless of shift times or workforce availability.
              </li>
              <li>
                <strong className="text-[#111] font-semibold">Compact Floor Configurations:</strong> Custom mechanical space planning that maximizes vertical space, allowing high-density secondary packaging and stacking within minimal square footage.
              </li>
            </ul>
          </motion.div>

          {/* Additional Items Grid */}
          <motion.div variants={fadeInUp} className="mt-16 w-full">
            <div className="grid gap-8 w-full" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
              {[
                { title: "4 Axis Palletizer", src: "/img/solutions/packaging-solution/4-axis-palletizer.png", href: "/product/packaging-solution/4-axis-palletizer" },
                { title: "Robotic Palletizer", src: "/img/solutions/packaging-solution/robotic-palletizer.jpg", href: "/product/packaging-solution/robotic-palletizer" },
                { title: "Flow Wrap Machine", src: "/img/solutions/packaging-solution/flow-wrap-machine.png", href: "/product/packaging-solution/flow-wrap-machine" },
                { title: "Vertical Conveyor (Lifter)", src: "/img/solutions/packaging-solution/vertical-conveyor.jpg", href: "/product/packaging-solution/vertical-conveyor" },
                { title: "High-Speed Spiral Conveyor for Box Stacking", src: "/img/solutions/packaging-solution/high-speed-spiral-conveyor.png", href: "/product/packaging-solution/high-speed-spiral-conveyor" },
                { title: "Bagging Machine (Up to 50 Kg)", src: "/img/solutions/packaging-solution/bagging-machine.png", href: "/product/packaging-solution/bagging-machine" },
                { title: "Industrial Metal Detector", src: "/img/solutions/packaging-solution/industrial-metal-detector.png", href: "/product/packaging-solution/industrial-metal-detector" },
              ].map((item, index) => (
                <div key={index} className="bg-white flex flex-col p-8 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-slate-100 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-all duration-300">
                  <h4 className="font-rajdhani font-bold text-2xl text-[#111] w-full text-left mb-8">{item.title}</h4>
                  
                  <div className="relative w-full h-48 sm:h-56 mb-10 flex items-center justify-center overflow-hidden">
                    <Image 
                      src={item.src} 
                      alt={item.title} 
                      fill 
                      className="object-contain hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                  
                  <div className="mt-auto">
                    <div className="w-full h-[1px] bg-slate-100 mb-8"></div>
                    <div className="flex gap-4 w-full">
                      <Link href={item.href} className="flex-1 py-[12px] px-2 text-center border border-[#111] text-[#111] font-rajdhani font-bold text-[0.85rem] tracking-wider hover:bg-[#111] hover:text-white transition-colors duration-300">
                        VIEW MORE
                      </Link>
                      <Link href="/contact" className="flex-1 py-[12px] px-2 text-center border border-[#111] text-[#111] font-rajdhani font-bold text-[0.85rem] tracking-wider hover:bg-[#111] hover:text-white transition-colors duration-300">
                        ENQUIRY NOW
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </section>

    </main>
  );
}
