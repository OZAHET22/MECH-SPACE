"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ROW_1_LOGOS = [
  "/img/logos/1.png",
  "/img/logos/2.png",
  "/img/logos/3.png",
  "/img/logos/4.png",
  "/img/logos/5.png",
  "/img/logos/6.png",
  "/img/logos/7.png",
  "/img/logos/8.png",
  "/img/logos/9.png",
  "/img/logos/10.png",
];

const ROW_2_LOGOS = [
  "/img/logos/11.png",
  "/img/logos/12.png",
  "/img/logos/13.png",
  "/img/logos/14.png",
  "/img/logos/15.png",
  "/img/logos/16.png",
  "/img/logos/17.png",
  "/img/logos/18.png",
  "/img/logos/19.png",
];

export function TrustedLeadersSection() {
  return (
    <section className="relative w-full py-24 overflow-hidden bg-[#F8F8F8]">
      {/* Background Grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40" 
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 mb-16 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-[2.5rem] font-barlow-condensed font-bold text-[#111] uppercase tracking-wide"
        >
          Trusted By Industry Leaders
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: "80px" }}
          viewport={{ once: true }}
          className="h-1 bg-[#ED611C] mx-auto mt-6"
        />
      </div>

      {/* Marquee Container with Mask */}
      <div 
        className="relative flex flex-col gap-12 w-full overflow-hidden select-none"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        {/* Row 1 */}
        <div className="flex w-max group">
          <div className="flex w-max animate-marquee-left-to-right gap-16 pr-16 items-center group-hover:[animation-play-state:paused]">
            {ROW_1_LOGOS.map((src, i) => (
              <div key={i} className="relative w-[180px] md:w-[250px] h-[80px] md:h-[120px] shrink-0 grayscale hover:grayscale-0 transition-all duration-500">
                <Image src={src} alt={`Partner logo ${i+1}`} fill className="object-contain" sizes="(max-width: 768px) 180px, 250px" />
              </div>
            ))}
          </div>
          <div className="flex w-max animate-marquee-left-to-right gap-16 pr-16 items-center group-hover:[animation-play-state:paused]" aria-hidden="true">
            {ROW_1_LOGOS.map((src, i) => (
              <div key={`dup-${i}`} className="relative w-[180px] md:w-[250px] h-[80px] md:h-[120px] shrink-0 grayscale hover:grayscale-0 transition-all duration-500">
                <Image src={src} alt="" fill className="object-contain" sizes="(max-width: 768px) 180px, 250px" />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex w-max group">
          <div className="flex w-max animate-marquee-right-to-left gap-16 pr-16 items-center group-hover:[animation-play-state:paused]">
            {ROW_2_LOGOS.map((src, i) => (
              <div key={i} className="relative w-[180px] md:w-[250px] h-[80px] md:h-[120px] shrink-0 grayscale hover:grayscale-0 transition-all duration-500">
                <Image src={src} alt={`Partner logo ${i+1}`} fill className="object-contain" sizes="(max-width: 768px) 180px, 250px" />
              </div>
            ))}
          </div>
          <div className="flex w-max animate-marquee-right-to-left gap-16 pr-16 items-center group-hover:[animation-play-state:paused]" aria-hidden="true">
            {ROW_2_LOGOS.map((src, i) => (
              <div key={`dup-${i}`} className="relative w-[180px] md:w-[250px] h-[80px] md:h-[120px] shrink-0 grayscale hover:grayscale-0 transition-all duration-500">
                <Image src={src} alt="" fill className="object-contain" sizes="(max-width: 768px) 180px, 250px" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-100%, 0, 0); }
        }
        @keyframes marquee-reverse {
          0% { transform: translate3d(-100%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        .animate-marquee-left-to-right {
          animation: marquee-reverse 35s linear infinite;
          will-change: transform;
        }
        .animate-marquee-right-to-left {
          animation: marquee 30s linear infinite;
          will-change: transform;
        }
      `}} />
    </section>
  );
}
