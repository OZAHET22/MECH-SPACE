"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

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

export default function BaggingMachinePage() {
  return (
    <main className="bg-[#ffffff] min-h-screen relative overflow-hidden font-barlow text-[#1a1a1a]">
      <section className="pt-32 pb-24 px-6 lg:px-12 max-w-[1400px] mx-auto min-h-[85vh] flex items-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
          
          <motion.div variants={fadeInUp} className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] flex items-center justify-center order-1">
            <div className="absolute inset-0 bg-slate-50 rounded-3xl" />
            <Image
              src="/img/solutions/packaging-solution/bagging-machine.png"
              alt="Bagging Machine (Up to 50 Kg)"
              fill
              className="object-contain p-8 mix-blend-multiply"
              priority
            />
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-8 order-2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-barlow-condensed font-bold text-[#111] leading-[1.1] tracking-wide">
              Bagging Machine (Up to 50 Kg)
            </h1>
            
            <div className="space-y-6 text-[1.1rem] md:text-[1.15rem] leading-[1.8] text-[#333]">
              <div>
                <strong className="text-[#111] font-bold block mb-2 text-xl font-rajdhani">Description:</strong>
                <p>
                  Heavy-duty industrial bagging systems designed for high-precision filling, sealing, and continuous handling of large-format sacks and bags. Engineered with integrated load-cell weighing modules for exact dosing, it features automatic bag clamping and robust stitching or heat-sealing assemblies to transition bulk raw materials seamlessly into heavy-duty end-of-line robotic palletizing systems.
                </p>
              </div>
              
              <div>
                <strong className="text-[#111] font-bold block mb-2 text-xl font-rajdhani">Best For:</strong>
                <p>
                  Grains, animal feed, powders, chemicals, and heavy-payload bulk processing industries.
                </p>
              </div>
            </div>

            <div className="pt-6">
              <Link href="/contact" className="inline-flex items-center justify-center px-10 py-4 bg-[#ED611C] text-white font-rajdhani font-bold text-[0.95rem] uppercase tracking-widest hover:bg-[#D55618] transition-colors duration-300 shadow-[0_10px_30px_rgba(237,97,28,0.3)] hover:shadow-[0_15px_40px_rgba(237,97,28,0.4)] hover:-translate-y-1">
                Enquiry Now
                <svg className="ml-3 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </motion.div>

        </motion.div>
      </section>
    </main>
  );
}
