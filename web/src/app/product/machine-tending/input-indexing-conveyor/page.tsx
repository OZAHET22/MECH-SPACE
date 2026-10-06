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

export default function InputIndexingConveyorPage() {
  return (
    <main className="bg-[#ffffff] min-h-screen relative overflow-hidden font-barlow text-[#1a1a1a]">
      <section className="pt-32 pb-24 px-6 lg:px-12 max-w-[1400px] mx-auto min-h-[85vh] flex items-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
          
          <motion.div variants={fadeInUp} className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] flex items-center justify-center order-1">
            <div className="absolute inset-0 bg-slate-50 rounded-3xl" />
            <Image
              src="/img/solutions/machine-tending/input-indexing-conveyor.jpg"
              alt="Input Indexing Conveyor"
              fill
              className="object-contain p-8 mix-blend-multiply"
              priority
            />
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-8 order-2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-barlow-condensed font-bold text-[#111] leading-[1.1] tracking-wide">
              Input Indexing Conveyor
            </h1>
            
            <div className="space-y-6 text-[1.1rem] md:text-[1.15rem] leading-[1.8] text-[#333]">
              <div>
                <p className="mb-4">
                  Whether you're new to automation or redeploying an existing robot/collaborative robot, our machine tending kits are ideal for tending CNC mills and lathes.
                </p>
                <p className="mb-4">
                  By taking our years of experience with robotic handling in different fields, Mechspace can help you automate your machine tending process. Quickly implement collaborative robots to perform repetitive tasks, increasing production capacity while removing error. Our in-stock gripper kits can be found towards the bottom of the page.
                </p>
                <p>
                  Our Machine Tending Kits are now available with one of the industry's most iconic gripper, the PGN-plus-P and PZN-plus, 2 and 3-jaw grippers by SCHUNK®. Compatible with our existing mounting interface and adjustable gripper fingers, the PGN & PZN series grippers are a fantastic compliment to EMI's product offering.
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
