"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Settings, Activity, Target, Layers, Box, Maximize, Cpu, RotateCcw, Download, ShieldCheck, Zap, Globe, MapPin, Phone, Mail, CheckCircle2 } from "lucide-react";
import Image from "next/image";

// === REUSABLE ANIMATION VARIANTS ===
const snapEasing: [number, number, number, number] = [0.25, 1, 0.5, 1];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: snapEasing } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: snapEasing } }
};

export default function CataloguePage() {
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <main className="bg-bg-primary min-h-screen relative overflow-hidden font-barlow">
      
      {/* HEADER */}
      <header className="fixed w-full top-0 z-[100] bg-bg-primary/90 backdrop-blur-md border-b border-border-light">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="/" className="font-barlow-condensed font-bold text-3xl text-text-high tracking-wider hover:text-accent-primary transition-colors">
            MECH SPACE AUTOMATION
          </a>
          <a 
            href="/Mech_Space_Brochure.pdf"
            download="Mech_Space_Automation_Catalog.pdf"
            className="hidden md:flex items-center gap-2 bg-accent-primary hover:bg-accent-hover text-white px-5 py-2 rounded-lg font-rajdhani font-bold uppercase tracking-wider text-sm transition-colors shadow-lg shadow-accent-primary/20"
          >
            <Download size={18} />
            Download Original PDF
          </a>
        </div>
      </header>

      {/* SECTION 1: HERO & ABOUT US (PAGE 2) */}
      <section className="relative min-h-screen pt-32 pb-24 px-6 flex items-center">
        <motion.div style={{ y: yParallax }} className="absolute right-0 top-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent-primary/5 to-transparent z-0" />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 bg-bg-surface border border-border-light rounded-full text-text-medium text-sm font-rajdhani font-bold uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-accent-secondary animate-pulse"></span>
                Official Product Catalog
              </motion.div>
              <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl font-barlow-condensed font-bold text-text-high leading-[0.9] uppercase">
                Creating <br /> <span className="text-accent-primary">Autonomous</span> System
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-xl text-text-medium leading-relaxed max-w-lg">
                We design, engineer, and deliver Autonomous mechanical solutions that transform the way industries manufacture, package, and move products.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-lg text-text-medium leading-relaxed max-w-lg font-semibold">
                With a proven track record in gantry robotics, conveyor automation, customized filling & packaging, and special purpose machines (SPM), we help businesses unlock higher efficiency, consistency, and safety.
              </motion.p>
            </div>

            <div className="space-y-8">
              <motion.div variants={fadeInUp} className="relative w-full h-64 rounded-2xl overflow-hidden border border-border-light shadow-lg">
                <Image src="/img/hero.png" alt="Autonomous Assembly Line" fill className="object-cover hover:scale-105 transition-transform duration-1000" />
              </motion.div>
              <motion.div variants={fadeInUp} className="bg-bg-surface-alt p-8 rounded-2xl border border-border-light border-l-4 border-l-[#EF4444]">
                <h3 className="font-barlow-condensed text-2xl font-bold text-text-high uppercase mb-4 flex items-center gap-2">
                  <Activity className="text-[#EF4444]" /> Industry Challenges
                </h3>
                <ul className="space-y-3 text-text-medium">
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#EF4444] mt-2 shrink-0" /> Rising labor costs & skill shortages</li>
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#EF4444] mt-2 shrink-0" /> Need for faster throughput & zero downtime</li>
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#EF4444] mt-2 shrink-0" /> Increasing demand for customization in production</li>
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#EF4444] mt-2 shrink-0" /> Safety & compliance requirements</li>
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#EF4444] mt-2 shrink-0" /> Space optimization in warehouses and factories</li>
                </ul>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-bg-surface p-8 rounded-2xl border border-border-light border-l-4 border-l-[#10B981] shadow-lg shadow-[#10B981]/5">
                <h3 className="font-barlow-condensed text-2xl font-bold text-text-high uppercase mb-4 flex items-center gap-2">
                  <Target className="text-[#10B981]" /> Solutions We Provide
                </h3>
                <ul className="space-y-3 text-text-medium font-semibold">
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#10B981] mt-2 shrink-0" /> Gantry Automation & Robotic Solutions</li>
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#10B981] mt-2 shrink-0" /> Filling, Weighing & Packaging Solutions</li>
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#10B981] mt-2 shrink-0" /> Conveyor Automation</li>
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#10B981] mt-2 shrink-0" /> Special Purpose Machines (SPM)</li>
                </ul>
                <p className="mt-6 text-sm text-[#10B981] font-bold uppercase tracking-wider">Scalable, Intelligent, & Tailored for your Industry.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: GANTRY AUTOMATION (PAGE 3-5) */}
      <section className="py-24 px-6 bg-bg-surface border-y border-border-light">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="mb-16">
            <motion.h2 variants={fadeInUp} className="text-5xl md:text-6xl font-barlow-condensed font-bold text-text-high uppercase">
              Gantry Automation
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-text-medium mt-4 max-w-2xl">
              Our Customized Gantry robots provide efficient material handling, pick & place, palletizing, and automated assembly with Speed, Precision and Reliability.
            </motion.p>
          </motion.div>

          {/* Gantry Specs */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div variants={fadeInUp} className="relative w-full h-80 rounded-2xl overflow-hidden border border-border-light shadow-lg md:col-span-2">
              <Image src="/img/gantry.png" alt="3-Axis Gantry Robot" fill className="object-cover hover:scale-105 transition-transform duration-1000" />
            </motion.div>
            {[
              { title: "2 Axis Gantry System", load: "Upto 15 Kg standard", envelope: "Customizable" },
              { title: "3 Axis Gantry System", load: "Upto 100 Kg standard", envelope: "Customizable" }
            ].map((gantry, i) => (
              <motion.div key={i} variants={fadeInUp} className="bg-bg-primary p-8 rounded-2xl border border-border-light">
                <Cpu className="text-accent-primary mb-6" size={40} />
                <h3 className="text-3xl font-barlow-condensed font-bold text-text-high uppercase mb-6">{gantry.title}</h3>
                <ul className="space-y-3 text-text-medium">
                  <li className="flex justify-between border-b border-border-light pb-2"><span>Load</span><span className="font-bold text-text-high">{gantry.load}</span></li>
                  <li className="flex justify-between border-b border-border-light pb-2"><span>Envelope</span><span className="font-bold text-text-high">{gantry.envelope}</span></li>
                  <li className="flex justify-between border-b border-border-light pb-2"><span>Drive</span><span className="font-bold text-text-high">Servo motor</span></li>
                  <li className="flex justify-between border-b border-border-light pb-2"><span>Speed</span><span className="font-bold text-text-high">4.5 m/s</span></li>
                  <li className="flex justify-between border-b border-border-light pb-2"><span>Acceleration</span><span className="font-bold text-text-high">5 m/s²</span></li>
                  <li className="flex justify-between pb-2"><span>MOC</span><span className="font-bold text-text-high">IS2062(m.s), Aluminium</span></li>
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Palletising Gantry Robot */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInRight} className="bg-bg-text-high bg-[#1E293B] border border-[#334155] p-10 rounded-3xl text-white mb-16">
            <h3 className="text-4xl font-barlow-condensed font-bold text-white uppercase mb-4">Palletising Gantry Robot</h3>
            <p className="text-[#94A3B8] mb-8 text-lg max-w-3xl">
              Robot-In-A-Box solution is a complete "plug and play" solution for case palletising. This unit is equipped with a universal vacuum gripper head and universal pallet positioning device and will handle practically any case or pallet you want to operate.
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              {['Increased Productivity', 'Versatile Operation', 'Plug and Play Design', 'Universal Gripper'].map((benefit, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent-primary/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="text-accent-secondary" size={16} />
                  </div>
                  <span className="font-barlow font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* SECTION 3: ROBOTIC SOLUTION (PAGE 6) */}
      <section className="py-24 px-6 bg-bg-primary border-y border-border-light">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="space-y-8">
            <motion.div variants={fadeInUp} className="relative w-full h-64 rounded-2xl overflow-hidden border border-border-light shadow-lg lg:hidden">
              <Image src="/img/robot.png" alt="6-Axis Robotic Arm" fill className="object-cover" />
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-5xl md:text-6xl font-barlow-condensed font-bold text-text-high uppercase">
              Robotic <span className="text-accent-primary">Solutions</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-text-medium leading-relaxed">
              Robotic solutions are used for automating a vast range of tasks, from physical industrial applications like welding, assembly, pick-and-place, and material handling in manufacturing.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-xl text-text-medium leading-relaxed">
              By leveraging industrial robots, manufacturers can streamline their production processes, enhance productivity, and improve overall quality.
            </motion.p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInRight} className="space-y-8">
            <div className="relative w-full h-96 rounded-2xl overflow-hidden border border-border-light shadow-lg hidden lg:block">
              <Image src="/img/robot.png" alt="6-Axis Robotic Arm" fill className="object-cover hover:scale-105 transition-transform duration-1000" />
            </div>
            <div className="bg-bg-surface-alt p-8 rounded-2xl border border-border-light">
            <h3 className="font-barlow-condensed text-2xl font-bold text-text-high uppercase mb-6">Key Benefits</h3>
            <ul className="space-y-4 font-barlow text-lg text-text-high font-medium">
              <li className="flex items-center gap-3"><Zap className="text-accent-primary" /> Faster and reliable lead times</li>
              <li className="flex items-center gap-3"><Zap className="text-accent-primary" /> Higher production capacity</li>
              <li className="flex items-center gap-3"><Zap className="text-accent-primary" /> Lights-out manufacturing</li>
              <li className="flex items-center gap-3"><Zap className="text-accent-primary" /> Flexibility and scalability</li>
            </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: CONVEYOR AUTOMATION (PAGE 7-9) */}
      <section className="py-24 px-6 bg-bg-surface-alt">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="mb-16">
            <motion.h2 variants={fadeInUp} className="text-5xl md:text-6xl font-barlow-condensed font-bold text-text-high uppercase">
              Conveyor Automation
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-text-medium mt-4 max-w-2xl">
              We design and implement conveyor systems that keep your production and logistics moving seamlessly.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              { title: "Flat Belt Conveyor", load: "Up to 100 Kg", speed: "Up to 30 m/min" },
              { title: "Curved Conveyor", load: "Up to 100 Kg", speed: "Up to 20 m/min" },
              { title: "Stacker Conveyor", load: "Up to 200 Kg", speed: "Customizable" },
              { title: "Powered Roller", load: "Up to 70 Kg", speed: "Up to 15 m/min" },
              { title: "Incline Conveyor", load: "As per standard", speed: "As per standard" },
              { title: "Screw Conveyor", load: "Up to 100 Kg", speed: "Up to 20 m/min" }
            ].map((conv, i) => (
              <motion.div key={i} variants={fadeInUp} className="bg-bg-primary p-8 rounded-2xl border border-border-light hover:border-accent-primary transition-colors group">
                <h3 className="font-barlow-condensed text-2xl font-bold text-text-high uppercase mb-6">{conv.title}</h3>
                <ul className="space-y-2 text-text-medium text-sm">
                  <li className="flex justify-between border-b border-border-light pb-1"><span>Load</span><span className="font-bold text-text-high">{conv.load}</span></li>
                  <li className="flex justify-between border-b border-border-light pb-1"><span>Drive</span><span className="font-bold text-text-high">Induction motor</span></li>
                  <li className="flex justify-between pb-1"><span>Speed</span><span className="font-bold text-text-high">{conv.speed}</span></li>
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Spiral Conveyor Showpiece */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="bg-accent-primary rounded-3xl p-1 overflow-hidden shadow-2xl">
            <div className="bg-bg-primary rounded-[28px] p-8 md:p-12">
              <h3 className="text-4xl md:text-5xl font-barlow-condensed font-bold text-text-high uppercase mb-8">Spiral Conveyor</h3>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-4 text-sm text-text-medium font-barlow">
                  <div className="flex justify-between border-b border-border-light pb-2"><span>Structure</span><span className="font-bold text-text-high">Chain Conveyor</span></div>
                  <div className="flex justify-between border-b border-border-light pb-2"><span>Material</span><span className="font-bold text-text-high">M.S, Stainless steel (Heat Resistant)</span></div>
                  <div className="flex justify-between border-b border-border-light pb-2"><span>Power</span><span className="font-bold text-text-high">0.25 - 5.5KW</span></div>
                  <div className="flex justify-between border-b border-border-light pb-2"><span>Conveyor Speed</span><span className="font-bold text-text-high">Max 45 m/min</span></div>
                  <div className="flex justify-between pb-2"><span>Warranty</span><span className="font-bold text-text-high">1 Year</span></div>
                </div>
                <div>
                  <h4 className="font-barlow-condensed font-bold text-xl text-text-high uppercase mb-2">Application</h4>
                  <p className="text-text-medium leading-relaxed mb-6">
                    Handle material from top to bottom, bottom to top for bags handling, containers, cartoons, crates, tires, trays, bottles, cans, jars, cups, and pouches.
                  </p>
                  <div className="relative w-full h-64 rounded-xl overflow-hidden shadow-lg border border-border-light mt-4">
                    <Image src="/img/spiral.png" alt="Spiral Conveyor System" fill className="object-cover hover:scale-105 transition-transform duration-1000" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5: SPM & WHY CHOOSE US (PAGE 10-11) */}
      <section className="py-24 px-6 bg-bg-primary">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
              <motion.div variants={fadeInUp} className="relative w-full h-64 rounded-2xl overflow-hidden border border-border-light shadow-lg mb-8">
                <Image src="/img/spm.png" alt="Special Purpose Machine" fill className="object-cover hover:scale-105 transition-transform duration-1000" />
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-barlow-condensed font-bold text-text-high uppercase mb-6">
                Customized Special Purpose Machines (SPM)
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-xl text-text-medium mb-8">
                When Standard Isn't Enough. Our SPMs are built to meet unique production challenges where off-the-shelf machines don't fit.
              </motion.p>
              <motion.ul variants={staggerContainer} className="space-y-3 font-rajdhani font-bold text-accent-primary uppercase tracking-wider">
                <motion.li variants={fadeInUp} className="flex items-center gap-2"><ShieldCheck size={20} /> 100% Customized Engineering</motion.li>
                <motion.li variants={fadeInUp} className="flex items-center gap-2"><ShieldCheck size={20} /> Boosts Throughput</motion.li>
                <motion.li variants={fadeInUp} className="flex items-center gap-2"><ShieldCheck size={20} /> Seamless Integration</motion.li>
                <motion.li variants={fadeInUp} className="flex items-center gap-2"><ShieldCheck size={20} /> Built for Durability & Safety</motion.li>
              </motion.ul>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="bg-bg-surface p-8 rounded-2xl border border-border-light">
              <motion.h2 variants={fadeInUp} className="text-3xl font-barlow-condensed font-bold text-text-high uppercase mb-8">Competitive Advantage</motion.h2>
              <div className="grid sm:grid-cols-2 gap-6">
                <motion.div variants={fadeInUp} className="p-4 bg-bg-primary rounded-xl border border-border-light text-center">
                  <Globe className="text-accent-secondary mx-auto mb-2" />
                  <span className="font-barlow-condensed font-bold uppercase text-text-high">Cross-Industry Expertise</span>
                </motion.div>
                <motion.div variants={fadeInUp} className="p-4 bg-bg-primary rounded-xl border border-border-light text-center">
                  <Activity className="text-accent-secondary mx-auto mb-2" />
                  <span className="font-barlow-condensed font-bold uppercase text-text-high">End-to-End Execution</span>
                </motion.div>
                <motion.div variants={fadeInUp} className="p-4 bg-bg-primary rounded-xl border border-border-light text-center">
                  <Settings className="text-accent-secondary mx-auto mb-2" />
                  <span className="font-barlow-condensed font-bold uppercase text-text-high">Customization First</span>
                </motion.div>
                <motion.div variants={fadeInUp} className="p-4 bg-bg-primary rounded-xl border border-border-light text-center">
                  <Phone className="text-accent-secondary mx-auto mb-2" />
                  <span className="font-barlow-condensed font-bold uppercase text-text-high">After-Sales Support</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>



    </main>
  );
}
