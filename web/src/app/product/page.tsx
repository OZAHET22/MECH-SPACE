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

export default function ProductPage() {
  return (
    <main className="bg-[#ffffff] min-h-screen relative overflow-hidden font-barlow text-[#1a1a1a]">
      
      {/* SECTION 1: HERO (Image Left, Content Right) */}
      <section id="machine-tending" className="pt-32 pb-16 px-6 lg:px-12 max-w-[1400px] mx-auto relative">
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
              Machine Tending Application
            </h1>
            
            <div className="space-y-4 text-[1.05rem] md:text-[1.1rem] leading-[1.8] text-[#333]">
              <p>
                A wide demand across manufacturing industries around the world, Mechspace Automation’s CNC Machine Tending Cells are engineered to work seamlessly with an array of complex machining processes. Whether your operations require automated raw material loading, finished part extraction, component washing, or secondary post-process integration, our machine tending technology leverages the limitless possibilities of Industry 5.0.
              </p>
              <p>
                Mechspace Automation acts as an expert mechanical design and logic integrator, working alongside leading global robotic OEMs—including Mitsubishi, Fanuc, Yaskawa, and Omron to build customized material handling cells of any footprint. Our smart automation solutions deliver robust, state-of-the-art performance to optimize cycle times, eliminate spindle idle periods, and skyrocket your factory's production throughput.
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
              src="/img/solutions/machine-tending-new.jpeg"
              alt="Machine Tending Application"
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
              Mechspace Automation Ensures Superior Shop-Floor OEE and Repeatable Efficiency Through Advanced Robotic Tending Solutions
            </h2>
            <div className="space-y-4 text-base md:text-[1.05rem] leading-[1.8] text-[#333]">
              <p>
                With years of combined industrial design expertise based right in the engineering hub of Vadodara, Gujarat, we manufacture robotic machine tending solutions engineered to survive harsh, high-volume production environments.
              </p>
              <p>
                Every automated cell we build undergoes rigorous in-house mechanical and logic simulation before final site commissioning. This ensures that your system functions flawlessly under harsh factory conditions, matching the tightest structural and cycle-time demands of your upstream and downstream production processes.
              </p>
            </div>
          </motion.div>

          {/* Features Section */}
          <motion.div variants={fadeInUp} className="mb-12">
            <h3 className="text-xl md:text-[1.65rem] font-barlow-condensed font-bold text-[#111] mb-4">
              Features You Can Expect From Our Machine Tending Applications:
            </h3>
            <p className="text-base md:text-[1.05rem] leading-[1.8] text-[#333] mb-6">
              Being an emerging leader in robotic automation, Mechspace Automation focuses on delivering turnkey systems that combine exceptional reliability with long-term cost efficiency:
            </p>
            <ul className="space-y-4 text-base md:text-[1.05rem] leading-[1.8] text-[#333] list-disc pl-5 marker:text-[#ED611C]">
              <li>
                <strong className="text-[#111] font-semibold">Heavy-Duty Structural Fabrication:</strong> Rigidly engineered robot pedestals and bases designed with zero-deflection tolerances to handle high-speed robotic accelerations.
              </li>
              <li>
                <strong className="text-[#111] font-semibold">Advanced Control Systems:</strong> Intelligent PLC and HMI programming creating seamless, crash-free data communication between the robotic arm, pneumatic chucks, auto-doors, and your CNC controller.
              </li>
              <li>
                <strong className="text-[#111] font-semibold">Next-Gen Component Interfacing:</strong> Precision-crafted End-of-Arm Tooling (EOAT) engineered to grip delicate, raw, or finished components perfectly without causing surface damage or micro-scratches.
              </li>
            </ul>
          </motion.div>

          {/* Why Trust Us Section */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-xl md:text-[1.65rem] font-barlow-condensed font-bold text-[#111] mb-4">
              Why Should the Manufacturing Industry Trust Us?
            </h3>
            <p className="text-base md:text-[1.05rem] leading-[1.8] text-[#333] mb-6">
              When you collaborate with Mechspace Automation, you get access to unmatched operational optimization:
            </p>
            <ul className="space-y-4 text-base md:text-[1.05rem] leading-[1.8] text-[#333] list-disc pl-5 marker:text-[#ED611C]">
              <li>
                <strong className="text-[#111] font-semibold">Lights-Out Production Capabilities:</strong> Maintain consistent, 24/7 manufacturing operations through lunch breaks, operator shift changeovers, and overnight runs.
              </li>
              <li>
                <strong className="text-[#111] font-semibold">Multi-Level Industrial Safety Compliance:</strong> Full integration of high-visibility perimeter safety barricades, safety light curtains, and dual-channel interlocked access doors.
              </li>
              <li>
                <strong className="text-[#111] font-semibold">Compact & Scalable Layout Design:</strong> Space-saving layout engineering designed to fit tightly around existing VMCs, HMCs, Turning Centers, and Injection Molding Machines without cluttering your floor.
              </li>
            </ul>
          </motion.div>

          {/* Additional Items Grid */}
          <motion.div variants={fadeInUp} className="mt-16 w-full">
            <div className="grid gap-8 w-full" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
              {[
                { title: "CNC Machine Part Loader", src: "/img/solutions/machine-tending/cnc-machine-part-loader.jpg", link: "/product/machine-tending/cnc-machine-part-loader" },
                { title: "Injection Molding Machines", src: "/img/solutions/machine-tending/injection-molding.jpg", link: "/product/machine-tending/injection-molding-machines" },
                { title: "Press Machine Tending", src: "/img/solutions/machine-tending/press-machine-tending.jpg", link: "/product/machine-tending/press-machine-tending" },
                { title: "Input Indexing Conveyor", src: "/img/solutions/machine-tending/input-indexing-conveyor.jpg", link: "/product/machine-tending/input-indexing-conveyor" },
                { title: "Flip-Over Unit", src: "/img/solutions/machine-tending/flip-over-unit.jpg", link: "#" },
                { title: "Heavy-Duty Robot Pedestal", src: "/img/solutions/machine-tending/heavy-duty-robot-pedestal.jpg", link: "/product/machine-tending/heavy-duty-robot-pedestal" },
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
                      <a href={item.link} className="flex-1 py-[12px] px-2 text-center border border-[#111] text-[#111] font-rajdhani font-bold text-[0.85rem] tracking-wider hover:bg-[#111] hover:text-white transition-colors duration-300">
                        VIEW MORE
                      </a>
                      <a href="/contact" className="flex-1 py-[12px] px-2 text-center border border-[#111] text-[#111] font-rajdhani font-bold text-[0.85rem] tracking-wider hover:bg-[#111] hover:text-white transition-colors duration-300">
                        ENQUIRY NOW
                      </a>
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
