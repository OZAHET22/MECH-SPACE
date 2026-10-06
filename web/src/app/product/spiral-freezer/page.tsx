"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Animation Variants
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

export default function SpiralFreezerPage() {
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
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-slate-50 to-transparent pointer-events-none" />
        
        <div className="max-w-[1000px] mx-auto text-center relative z-10">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-6">
            <motion.span variants={fadeInUp} className="inline-block py-2 px-6 rounded-full bg-[#ED611C]/10 text-[#ED611C] font-rajdhani font-bold tracking-widest uppercase text-sm border border-[#ED611C]/20">
              Industrial Cooling Solutions
            </motion.span>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-barlow-condensed font-extrabold text-[#0B1530] uppercase tracking-tight leading-[1.05]">
              Industrial Spiral Freezers
            </motion.h1>
            
            <motion.div variants={fadeInUp} className="space-y-6 text-lg md:text-xl text-[#64748B] leading-relaxed max-w-4xl mx-auto mt-8">
              <p>
                In high-volume food processing, traditional blast freezers create massive production bottlenecks, damage delicate cell structures, and exhaust valuable factory floor space. <strong className="text-[#1A2A6C] font-semibold">Mechspace Automation’s Industrial Spiral Freezers completely solve these challenges.</strong>
              </p>
              <p>
                By utilizing a continuous, vertically winding helical conveyor system, our spiral freezers squeeze hundreds of meters of rapid-freezing track into a minimal square-foot footprint. High-velocity, cryogenic or mechanical sub-zero airflow is precisely directed over the product from all 360 degrees. This flashes the core temperature down instantly, locking in freshness, preserving texture, preventing moisture dehydration, and preparing wrapped or raw food items for downstream automated case packing and palletizing lines.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. MODELS SECTION (Changed from Dark to Light Theme) */}
      <section className="py-24 px-6 lg:px-12 bg-[#f8faff]">
        <div className="max-w-[1400px] mx-auto">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-barlow-condensed font-bold uppercase tracking-wide text-[#0B1530] mb-6 leading-tight">
              We have Two Specialized Mechanical Spiro-Drive Models
            </h2>
            <p className="text-[#64748B] text-xl leading-relaxed">
              To perfectly match your facility’s hygiene requirements, budget, and product characteristics, we engineer your spiral tower using one of two distinct mechanical drive methodologies:
            </p>
          </motion.div>

          <div className="space-y-32">
            
            {/* MODEL 3.1: Self-Stacking */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="flex flex-col gap-10">
              <div className="text-center space-y-4">
                <motion.span variants={fadeInUp} className="text-[#ED611C] font-rajdhani font-bold text-xl tracking-widest">MODEL 3.1</motion.span>
                <motion.h3 variants={fadeInUp} className="text-4xl md:text-5xl font-barlow-condensed font-bold uppercase tracking-wide text-[#0B1530]">Self-Stacking Spiral Freezer</motion.h3>
              </div>
              
              <motion.div variants={scaleIn} className="relative w-full h-[50vh] md:h-[75vh] rounded-3xl overflow-hidden bg-white border border-slate-100 shadow-xl p-4 md:p-8">
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#f8faff]">
                  <Image 
                    src="/img/solutions/spiral-freezer/self-stacking-spiral-freezer-new.jpg" 
                    alt="Self-Stacking Spiral Freezer" 
                    fill 
                    className="object-contain p-4 mix-blend-multiply" 
                  />
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="grid md:grid-cols-3 gap-8 text-[#475569] text-lg max-w-6xl mx-auto">
                <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="text-[#0B1530] font-rajdhani font-bold text-2xl mb-4 border-b border-slate-100 pb-4">Working Principal</h4>
                  <p>In this cutting-edge design, the food-grade stainless steel belt links feature integrated structural side-baffles. As the belt winds upward, it sits directly on top of the layer below it, effectively supporting itself without any internal structural frame.</p>
                </div>
                <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="text-[#0B1530] font-rajdhani font-bold text-2xl mb-4 border-b border-slate-100 pb-4">Advantage</h4>
                  <p><strong className="text-[#ED611C]">100% Hygienic Open Zone.</strong> Because it completely eliminates internal support rails, glide strips, and a central drum, there are zero hidden areas where food debris, ice, or bacteria can hide. It reduces your floor footprint by up to 30% and makes cleaning exceptionally fast.</p>
                </div>
                <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="text-[#0B1530] font-rajdhani font-bold text-2xl mb-4 border-b border-slate-100 pb-4">Running Product</h4>
                  <p>Ready-to-eat meals, raw meat, poultry, seafood, and high-hygiene food applications.</p>
                </div>
              </motion.div>
            </motion.div>

            {/* MODEL 3.2: Drum Type */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="flex flex-col gap-10">
              <div className="text-center space-y-4">
                <motion.span variants={fadeInUp} className="text-[#ED611C] font-rajdhani font-bold text-xl tracking-widest">MODEL 3.2</motion.span>
                <motion.h3 variants={fadeInUp} className="text-4xl md:text-5xl font-barlow-condensed font-bold uppercase tracking-wide text-[#0B1530]">Drum Type Spiral Freezer</motion.h3>
              </div>
              
              <motion.div variants={scaleIn} className="relative w-full h-[50vh] md:h-[75vh] rounded-3xl overflow-hidden bg-white border border-slate-100 shadow-xl p-4 md:p-8">
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#f8faff]">
                  <Image 
                    src="/img/solutions/spiral-freezer/drum-type-spiral-freezer-new.jpg" 
                    alt="Drum Type Spiral Freezer" 
                    fill 
                    className="object-cover mix-blend-multiply opacity-90" 
                  />
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="grid md:grid-cols-3 gap-8 text-[#475569] text-lg max-w-6xl mx-auto">
                <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="text-[#0B1530] font-rajdhani font-bold text-2xl mb-4 border-b border-slate-100 pb-4">Working Principal</h4>
                  <p>The traditional, ultra-reliable industry standard. The conveyor belt wraps smoothly around a large, centrally driven vertical cage or drum. Friction or direct-drive teeth push the inside edge of the belt, while a lightweight structural steel frame supports the outer tiers.</p>
                </div>
                <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="text-[#0B1530] font-rajdhani font-bold text-2xl mb-4 border-b border-slate-100 pb-4">Advantage</h4>
                  <p><strong className="text-[#ED611C]">Massive Payload Heavy-Duty Stacking.</strong> The drum drive provides exceptional mechanical leverage, making it the perfect option for wide belts, heavy trays, or massive, continuous tonnage runs that require high-tension reliability over decades of service.</p>
                </div>
                <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="text-[#0B1530] font-rajdhani font-bold text-2xl mb-4 border-b border-slate-100 pb-4">Running Product</h4>
                  <p>Bakery lines (par-baked bread, pastries), heavy boxed products, pizza production, and large-batch bulk lines.</p>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. COMMON TECHNIQUES */}
      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-[1400px] mx-auto">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-barlow-condensed font-bold text-[#0B1530] uppercase tracking-wide">
              Common Techniques Used in Both Spiral Freezers
            </h2>
            <div className="w-24 h-1 bg-[#ED611C] mx-auto mt-8" />
          </motion.div>

          <div className="space-y-32">
            
            {/* Technique 1 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={scaleIn} className="relative h-[400px] md:h-[500px] bg-[#f8faff] rounded-3xl p-8 border border-slate-100 shadow-xl overflow-hidden group">
                <Image src="/img/solutions/spiral-freezer/high-yield-dehydration-control-new.jpg" alt="High-Yield Dehydration Control" fill className="object-contain p-8 group-hover:scale-105 transition-transform duration-700" />
              </motion.div>
              <motion.div variants={fadeInUp} className="space-y-6">
                <h3 className="text-3xl md:text-4xl font-rajdhani font-bold text-[#0B1530]">High-Yield Dehydration Control</h3>
                <p className="text-[#64748B] text-xl leading-relaxed">
                  Patented vapor-balanced air paths minimize moisture loss from the food, retaining raw product weight and maximizing your profitability.
                </p>
              </motion.div>
            </motion.div>

            {/* Technique 2 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInUp} className="order-2 lg:order-1 space-y-8">
                <h3 className="text-3xl md:text-4xl font-rajdhani font-bold text-[#0B1530]">Customized Production by PLC Speed Tuning</h3>
                <div className="bg-[#f8faff] p-8 rounded-2xl border-l-4 border-[#ED611C] shadow-sm">
                  <h4 className="font-bold text-[#0B1530] text-2xl mb-4">Fully Enclosed Thermal Protection</h4>
                  <p className="text-[#64748B] text-lg leading-relaxed">Built inside a fully TIG-welded, food-safe stainless steel double-skinned enclosure insulated with premium high-density PIR panels to eliminate "cold bridges" onto your factory floor.</p>
                </div>
              </motion.div>
              <motion.div variants={scaleIn} className="relative h-[400px] md:h-[500px] bg-[#f8faff] rounded-3xl p-6 border border-slate-100 shadow-xl order-1 lg:order-2 overflow-hidden group">
                <Image src="/img/solutions/spiral-freezer/Control-Panel-Testing.jpg.webp" alt="Customized Production by PLC Speed Tuning" fill className="object-contain p-4 group-hover:scale-105 transition-transform duration-700" />
              </motion.div>
            </motion.div>

            {/* Technique 3 & 4: Full Size Images */}
            <div className="space-y-32">
              
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="flex flex-col gap-8">
                <motion.h3 variants={fadeInUp} className="text-4xl font-barlow-condensed font-bold text-[#0B1530] text-center uppercase tracking-wide">Automated Frost Prevention</motion.h3>
                <motion.div variants={scaleIn} className="relative w-full h-[50vh] md:h-[70vh] bg-[#f8faff] rounded-3xl p-4 border border-slate-100 shadow-lg overflow-hidden">
                  <Image src="/img/solutions/spiral-freezer/automated-frost-prevention-new.jpg" alt="Automated Frost Prevention" fill className="object-contain p-4" />
                </motion.div>
                <motion.div variants={fadeInUp} className="max-w-5xl mx-auto bg-white p-10 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.06)] border border-slate-100 -mt-20 relative z-10 text-center">
                  <p className="text-[#475569] text-xl leading-relaxed">
                    Integrated Air Defrost Systems (ADF) use high-speed air pulses to keep evaporator fins clean, allowing the line to run continuously for extended shifts without stopping for hot-gas defrosting.
                  </p>
                </motion.div>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="flex flex-col gap-8">
                <motion.h3 variants={fadeInUp} className="text-4xl font-barlow-condensed font-bold text-[#0B1530] text-center uppercase tracking-wide">Clean-In-Place (CIP) Sanitization System</motion.h3>
                <motion.div variants={scaleIn} className="relative w-full h-[50vh] md:h-[70vh] bg-[#f8faff] rounded-3xl border border-slate-100 shadow-lg overflow-hidden">
                  <Image src="/img/solutions/spiral-freezer/new-cip-sanitization-system-2.png" alt="Clean-In-Place (CIP) Sanitization System" fill className="object-cover" />
                </motion.div>
                <motion.div variants={fadeInUp} className="max-w-5xl mx-auto bg-white p-10 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.06)] border border-slate-100 -mt-20 relative z-10 text-center">
                  <p className="text-[#475569] text-xl leading-relaxed">
                    Automated low-pressure cleaning loops with integrated foam detergent applicators and high-pressure rinsing nozzles that sanitize the entire belt path automatically.
                  </p>
                </motion.div>
              </motion.div>

              {/* Technique 5: Belts */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="flex flex-col gap-12 pt-12 border-t border-slate-200">
                <motion.h3 variants={fadeInUp} className="text-4xl md:text-5xl font-barlow-condensed font-bold text-[#0B1530] text-center uppercase tracking-wide">Food-Grade SS304 Mesh & Link Belts</motion.h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <motion.div variants={scaleIn} className="relative h-[350px] md:h-[500px] rounded-3xl overflow-hidden shadow-xl group border border-slate-100">
                    <Image src="/img/solutions/spiral-freezer/food-grade-ss304-mesh-new.jpeg" alt="Food-Grade SS304 Mesh" fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8">
                      <span className="text-white font-rajdhani font-bold text-3xl tracking-widest">FOOD-GRADE SS304 MESH</span>
                    </div>
                  </motion.div>
                  <motion.div variants={scaleIn} className="relative h-[350px] md:h-[500px] rounded-3xl overflow-hidden shadow-xl group bg-[#f8faff] border border-slate-100">
                    <Image src="/img/solutions/spiral-freezer/link-belts-new.jpeg" alt="Link Belts" fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8">
                      <span className="text-white font-rajdhani font-bold text-3xl tracking-widest">LINK BELTS</span>
                    </div>
                  </motion.div>
                </div>

                <motion.div variants={fadeInUp} className="max-w-4xl mx-auto text-center mt-6">
                  <p className="text-[#475569] text-2xl leading-relaxed font-light">
                    High-strength, smooth conveyor surfaces that leave absolutely zero marks or grid impressions on delicate food products.
                  </p>
                </motion.div>

              </motion.div>

            </div>

          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mt-32 text-center">
            <Link href="/contact" className="inline-flex items-center justify-center px-14 py-6 bg-[#ED611C] text-white font-rajdhani font-bold text-xl uppercase tracking-widest hover:bg-[#0B1530] transition-all duration-300 shadow-[0_20px_40px_rgba(237,97,28,0.25)] hover:shadow-[0_25px_50px_rgba(11,21,48,0.3)] hover:-translate-y-2 rounded-xl">
              Enquiry Now
              <svg className="ml-4 w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </motion.div>

        </div>
      </section>

    </main>
  );
}
