"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const snapEasing: [number, number, number, number] = [0.25, 1, 0.5, 1];
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: snapEasing } }
};
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } }
};
const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: snapEasing } }
};

export default function SpmPage() {
  return (
    <main className="bg-[#ffffff] min-h-screen font-barlow text-[#1a1a1a]">
      
      {/* 1. HERO SECTION */}
      <section className="pt-40 pb-20 px-6 lg:px-12 bg-white relative overflow-hidden">
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
        <div className="max-w-[1400px] mx-auto">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Hero Content */}
            <div className="space-y-8">
              <motion.span variants={fadeInUp} className="inline-block py-2 px-6 rounded-full bg-[#ED611C]/10 text-[#ED611C] font-rajdhani font-bold tracking-widest uppercase text-sm border border-[#ED611C]/20">
                Customized Solutions
              </motion.span>
              
              <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-barlow-condensed font-extrabold text-[#0B1530] uppercase tracking-tight leading-[1.05]">
                Special Purpose Machines (SPMs)
              </motion.h1>
              
              <motion.div variants={fadeInUp} className="space-y-6 text-lg md:text-xl text-[#64748B] leading-relaxed">
                <p>
                  Standard catalogue machinery often fails to meet the unique structural tolerances, tight cycle times, or complex multi-station processes required by modern manufacturing. <strong className="text-[#1A2A6C] font-semibold">Mechspace Automation’s Customized Solutions & Special Purpose Machines (SPMs)</strong> are engineered from the ground up to solve your exact production bottlenecks.
                </p>
                <p>
                  Operating out of the engineering hub of Vadodara, Gujarat, we function as a specialized mechanical design and logic integration expert. We build custom multi-station lines that combine next-generation technologies—such as high-speed Vision Inspection Systems, heavy-duty Hydraulic/Pneumatic Press Lines, automated Rotary Indexing Platforms, and inline Check Weighers.
                </p>
                <p>
                  By blending robust structural fabrication with smart PLC and HMI programming, we deliver high-yield, turnkey systems that fit perfectly into your factory layout and accelerate your operational ROI.
                </p>
              </motion.div>
            </div>

            {/* Hero Image */}
            <motion.div variants={scaleIn} className="relative w-full h-[400px] lg:h-[700px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 bg-[#f8faff]">
              <Image 
                src="/img/solutions/spm/special-purpose-machines-range-complementary-techniques.jpg" 
                alt="Special Purpose Machines (SPMs)" 
                fill 
                className="object-cover" 
                priority
              />
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* 2. SPM PRODUCT CATALOGUE */}
      <section className="py-24 px-6 lg:px-12 bg-[#f8faff]">
        <div className="max-w-[1400px] mx-auto space-y-32">
          
          {/* 1. Vision System Integration */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="bg-white rounded-3xl p-8 lg:p-16 shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#ED611C]/5 rounded-full blur-3xl" />
            <div className="max-w-4xl space-y-8 relative z-10 mx-auto text-center">
              <motion.span variants={fadeInUp} className="text-[#ED611C] font-rajdhani font-bold text-2xl tracking-widest block">01</motion.span>
              <motion.h3 variants={fadeInUp} className="text-4xl md:text-5xl font-barlow-condensed font-bold uppercase tracking-wide text-[#0B1530]">
                Vision System Integration
              </motion.h3>
              
              <motion.div variants={fadeInUp} className="space-y-6 text-[#475569] text-xl leading-relaxed text-left max-w-3xl mx-auto">
                <div>
                  <strong className="text-[#0B1530] font-rajdhani font-bold block mb-2 text-2xl">Description:</strong>
                  <p>High-speed inline optical inspection and guidance cells engineered to perform 100% automated quality checks at maximum line velocity. Utilizing advanced industrial cameras, smart lenses, and custom-programmed lighting arrays, the system instantly identifies surface defects, measures micro-tolerances, verifies orientation for robotic picking, and decodes barcodes or multi-station text.</p>
                </div>
                <div>
                  <strong className="text-[#0B1530] font-rajdhani font-bold block mb-2 text-2xl">Best For:</strong>
                  <p>Automated sorting, defect rejection, assembly verification, and precision robotic pick-and-place tracking.</p>
                </div>
                <div className="bg-[#ED611C]/5 p-6 rounded-2xl border border-[#ED611C]/20 mt-8">
                  <strong className="text-[#ED611C] font-rajdhani font-bold block mb-2 text-2xl">Key Feature:</strong>
                  <p>Seamless interface with downstream pneumatic rejection gates to automatically isolate non-compliant parts without stopping production.</p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="pt-6">
                <Link href="/contact" className="inline-flex items-center justify-center px-10 py-4 bg-[#0B1530] text-white font-rajdhani font-bold text-lg uppercase tracking-widest hover:bg-[#ED611C] transition-all duration-300 shadow-xl hover:-translate-y-1 rounded-xl">
                  Enquiry Now
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* 2. Special Purpose Press Machine */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div variants={scaleIn} className="relative w-full h-[400px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-slate-100 bg-white order-2 lg:order-1">
              <Image src="/img/solutions/spm/special-purpose-press-machine.jpg" alt="Special Purpose Press Machine" fill className="object-contain p-8 mix-blend-multiply" />
            </motion.div>
            <div className="space-y-8 order-1 lg:order-2">
              <motion.span variants={fadeInUp} className="text-[#ED611C] font-rajdhani font-bold text-2xl tracking-widest block">02</motion.span>
              <motion.h3 variants={fadeInUp} className="text-4xl md:text-5xl font-barlow-condensed font-bold uppercase tracking-wide text-[#0B1530]">
                Special Purpose Press Machine
              </motion.h3>
              <motion.div variants={fadeInUp} className="space-y-6 text-[#475569] text-xl leading-relaxed">
                <div>
                  <strong className="text-[#0B1530] font-rajdhani font-bold block mb-2 text-2xl">Description:</strong>
                  <p>Heavy-duty, custom-engineered hydraulic, pneumatic, or servo-driven pressing stations built for precise component assembly, sheet metal forming, or multi-axis punching operations. Features rigid, zero-deflection structural H-frame or C-frame fabrication, integrated load cells for force-monitoring, and linear transducers to track exact stroke depths.</p>
                </div>
                <div>
                  <strong className="text-[#0B1530] font-rajdhani font-bold block mb-2 text-2xl">Best For:</strong>
                  <p>Bearing/bushing pressing, part crimping, component riveting, stamping, and automated assembly cells.</p>
                </div>
                <div className="bg-[#ED611C]/5 p-6 rounded-2xl border border-[#ED611C]/20">
                  <strong className="text-[#ED611C] font-rajdhani font-bold block mb-2 text-2xl">Key Feature:</strong>
                  <p>Built-in dual-hand safety start buttons, physical light curtains, and real-time OK/NOT OK quality data logging based on pressure-vs-distance graphs.</p>
                </div>
              </motion.div>
              <motion.div variants={fadeInUp} className="pt-6">
                <Link href="/contact" className="inline-flex items-center justify-center px-10 py-4 bg-[#0B1530] text-white font-rajdhani font-bold text-lg uppercase tracking-widest hover:bg-[#ED611C] transition-all duration-300 shadow-xl hover:-translate-y-1 rounded-xl">
                  Enquiry Now
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* 3. Indexing Rotary Processing SPM */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8">
              <motion.span variants={fadeInUp} className="text-[#ED611C] font-rajdhani font-bold text-2xl tracking-widest block">03</motion.span>
              <motion.h3 variants={fadeInUp} className="text-4xl md:text-5xl font-barlow-condensed font-bold uppercase tracking-wide text-[#0B1530]">
                Indexing Rotary Processing SPM
              </motion.h3>
              <motion.div variants={fadeInUp} className="space-y-6 text-[#475569] text-xl leading-relaxed">
                <div>
                  <strong className="text-[#0B1530] font-rajdhani font-bold block mb-2 text-2xl">Description:</strong>
                  <p>Multi-station, high-velocity Special Purpose Machines built around a high-precision mechanical rotary indexing table. This system moves components smoothly across progressive manufacturing steps (e.g., loading, drilling, pressing, scanning, and unloading) within a highly compact circular footprint, ensuring multiple operations happen simultaneously on a single cycle tick.</p>
                </div>
                <div>
                  <strong className="text-[#0B1530] font-rajdhani font-bold block mb-2 text-2xl">Best For:</strong>
                  <p>High-volume batch manufacturing, automated multi-stage assembly, progressive machining, and complex multi-component bonding.</p>
                </div>
                <div className="bg-[#ED611C]/5 p-6 rounded-2xl border border-[#ED611C]/20">
                  <strong className="text-[#ED611C] font-rajdhani font-bold block mb-2 text-2xl">Key Feature:</strong>
                  <p>Fast, backlash-free index timing perfectly synchronized with upper pneumatic slide cylinders and core PLC logic.</p>
                </div>
              </motion.div>
              <motion.div variants={fadeInUp} className="pt-6">
                <Link href="/contact" className="inline-flex items-center justify-center px-10 py-4 bg-[#0B1530] text-white font-rajdhani font-bold text-lg uppercase tracking-widest hover:bg-[#ED611C] transition-all duration-300 shadow-xl hover:-translate-y-1 rounded-xl">
                  Enquiry Now
                </Link>
              </motion.div>
            </div>
            <motion.div variants={scaleIn} className="relative w-full h-[400px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-slate-100 bg-white">
              <Image src="/img/solutions/spm/indexing-rotary-processing-new.jpg" alt="Indexing Rotary Processing SPM" fill className="object-contain p-8 mix-blend-multiply" />
            </motion.div>
          </motion.div>

          {/* 4. Inline Check Weigher */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div variants={scaleIn} className="relative w-full h-[400px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-slate-100 bg-white order-2 lg:order-1">
              <Image src="/img/solutions/spm/inline-check-weigher.jpg" alt="Inline Check Weigher" fill className="object-contain p-8 mix-blend-multiply" />
            </motion.div>
            <div className="space-y-8 order-1 lg:order-2">
              <motion.span variants={fadeInUp} className="text-[#ED611C] font-rajdhani font-bold text-2xl tracking-widest block">04</motion.span>
              <motion.h3 variants={fadeInUp} className="text-4xl md:text-5xl font-barlow-condensed font-bold uppercase tracking-wide text-[#0B1530]">
                Inline Check Weigher
              </motion.h3>
              <motion.div variants={fadeInUp} className="space-y-6 text-[#475569] text-xl leading-relaxed">
                <div>
                  <strong className="text-[#0B1530] font-rajdhani font-bold block mb-2 text-2xl">Description:</strong>
                  <p>Dynamic, high-accuracy weight verification systems designed to weigh every single box, bag, or component moving along your high-speed conveyor line. Equipped with highly sensitive digital load cells and vibration-filtering algorithms, it instantly flags and isolates over-weight or under-weight products to protect your raw material margins and ensure strict packaging compliance.</p>
                </div>
                <div>
                  <strong className="text-[#0B1530] font-rajdhani font-bold block mb-2 text-2xl">Best For:</strong>
                  <p>Packaging lines, food processing, bulk bagging validation, and missing-part verification inside sealed corrugated shippers.</p>
                </div>
                <div className="bg-[#ED611C]/5 p-6 rounded-2xl border border-[#ED611C]/20">
                  <strong className="text-[#ED611C] font-rajdhani font-bold block mb-2 text-2xl">Key Feature:</strong>
                  <p>Integrated smart rejecters (pusher arms, air blasts, or drop-flap conveyors) with complete data logging for daily yield auditing.</p>
                </div>
              </motion.div>
              <motion.div variants={fadeInUp} className="pt-6">
                <Link href="/contact" className="inline-flex items-center justify-center px-10 py-4 bg-[#0B1530] text-white font-rajdhani font-bold text-lg uppercase tracking-widest hover:bg-[#ED611C] transition-all duration-300 shadow-xl hover:-translate-y-1 rounded-xl">
                  Enquiry Now
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* 5. Flipping Station */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8">
              <motion.span variants={fadeInUp} className="text-[#ED611C] font-rajdhani font-bold text-2xl tracking-widest block">05</motion.span>
              <motion.h3 variants={fadeInUp} className="text-4xl md:text-5xl font-barlow-condensed font-bold uppercase tracking-wide text-[#0B1530]">
                Flipping Station for Heavy-Duty Material Handling
              </motion.h3>
              <motion.div variants={fadeInUp} className="space-y-6 text-[#475569] text-xl leading-relaxed">
                <div>
                  <strong className="text-[#0B1530] font-rajdhani font-bold block mb-2 text-2xl">Description:</strong>
                  <p>Robust, high-capacity mechanical flipping and rotation stations designed to safely orient heavy, oversized loads (such as steel coils, industrial molds, large castings, or stacked pallets) by 90° or 180°. Engineered with high-torque gear motors, heavy-duty hydraulic actuators, and reinforced structural steel frames, it completely eliminates the hazards of using overhead cranes or forklifts for manual load tilting.</p>
                </div>
                <div>
                  <strong className="text-[#0B1530] font-rajdhani font-bold block mb-2 text-2xl">Best For:</strong>
                  <p>Foundry operations, automotive assembly lines, heavy component manufacturing, and pallet-inverting logistics hubs.</p>
                </div>
                <div className="bg-[#ED611C]/5 p-6 rounded-2xl border border-[#ED611C]/20">
                  <strong className="text-[#ED611C] font-rajdhani font-bold block mb-2 text-2xl">Key Feature:</strong>
                  <p>Features a self-locking mechanical drive system that ensures the load remains absolutely secure at any angle of rotation, even during a total power failure.</p>
                </div>
              </motion.div>
              <motion.div variants={fadeInUp} className="pt-6">
                <Link href="/contact" className="inline-flex items-center justify-center px-10 py-4 bg-[#0B1530] text-white font-rajdhani font-bold text-lg uppercase tracking-widest hover:bg-[#ED611C] transition-all duration-300 shadow-xl hover:-translate-y-1 rounded-xl">
                  Enquiry Now
                </Link>
              </motion.div>
            </div>
            <motion.div variants={scaleIn} className="relative w-full h-[400px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-slate-100 bg-white">
              <Image src="/img/solutions/spm/flipping-station.png" alt="Flipping Station" fill className="object-contain p-8 mix-blend-multiply" />
            </motion.div>
          </motion.div>

        </div>
      </section>

    </main>
  );
}
