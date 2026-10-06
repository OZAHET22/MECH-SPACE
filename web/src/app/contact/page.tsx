"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, X } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function ContactPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      company: formData.get('company') || '',
      industry: formData.get('industry'),
      message: formData.get('message') || formData.get('note') || '',
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Thank you! Your message has been sent.");
        setIsModalOpen(false);
        e.currentTarget.reset();
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-bg-primary relative overflow-hidden">
      
      {/* SECTION 1 — Hero Banner */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-deep-blue/80 z-10"></div>
          {/* Defaulting to the requested industrial-style background video */}
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0 opacity-70">
            <source src="/video/Website_video.mp4" type="video/mp4" />
          </video>
        </div>
        
        <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h1 className="text-5xl md:text-7xl font-barlow-condensed font-bold text-white uppercase mb-6 tracking-wide drop-shadow-lg">
              Let's Talk About <span className="text-white">Your Project</span>
            </h1>
            <p className="text-lg md:text-xl text-white font-rajdhani max-w-2xl mx-auto leading-relaxed drop-shadow">
              Whether it's Standard Automation Systems or Food & Beverage solutions — our team is ready to engineer the right solution for you.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-6 py-24 space-y-32">
        
        {/* SECTION 2 — Contact Form */}
        <section id="contact-form">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal>
              <div className="text-sm font-rajdhani text-accent-primary font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                <span className="w-8 h-[2px] bg-accent-primary"></span>
                Inquire Now
              </div>
              <h2 className="text-4xl md:text-5xl font-barlow-condensed font-bold text-text-high uppercase mb-8">
                Send Us a Message
              </h2>
              <p className="text-text-medium font-barlow text-lg mb-8">
                Fill out the form with your project details and our engineering team will get back to you within 24 hours.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={1}>
              <form onSubmit={handleFormSubmit} className="bg-bg-surface p-8 rounded-xl border border-border-light shadow-sm space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-rajdhani font-semibold text-text-high uppercase">Full Name</label>
                    <input required type="text" name="name" className="w-full bg-bg-primary border border-border-light rounded px-4 py-3 text-text-high focus:outline-none focus:border-accent-primary transition-colors" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-rajdhani font-semibold text-text-high uppercase">Phone</label>
                    <input required type="tel" name="phone" className="w-full bg-bg-primary border border-border-light rounded px-4 py-3 text-text-high focus:outline-none focus:border-accent-primary transition-colors" placeholder="+91 98765 43210" />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-rajdhani font-semibold text-text-high uppercase">Email</label>
                    <input required type="email" name="email" className="w-full bg-bg-primary border border-border-light rounded px-4 py-3 text-text-high focus:outline-none focus:border-accent-primary transition-colors" placeholder="john@company.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-rajdhani font-semibold text-text-high uppercase">Company</label>
                    <input required type="text" name="company" className="w-full bg-bg-primary border border-border-light rounded px-4 py-3 text-text-high focus:outline-none focus:border-accent-primary transition-colors" placeholder="Company Ltd." />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-rajdhani font-semibold text-text-high uppercase">Industry</label>
                  <select required name="industry" defaultValue="" className="w-full bg-bg-primary border border-border-light rounded px-4 py-3 text-text-high focus:outline-none focus:border-accent-primary transition-colors appearance-none cursor-pointer">
                    <option value="" disabled>Select an industry...</option>
                    <option value="standard">Standard Automation Systems</option>
                    <option value="food">Food & Beverage Solutions</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-rajdhani font-semibold text-text-high uppercase">Message</label>
                  <textarea required name="message" rows={4} className="w-full bg-bg-primary border border-border-light rounded px-4 py-3 text-text-high focus:outline-none focus:border-accent-primary transition-colors resize-none" placeholder="Tell us about your requirements..."></textarea>
                </div>

                <div className="flex items-start gap-3">
                  <input required type="checkbox" id="terms" className="mt-1 w-4 h-4 accent-accent-primary" />
                  <label htmlFor="terms" className="text-sm text-text-medium font-barlow cursor-pointer">
                    I agree to the Terms & Privacy Policy and consent to having this website store my submitted information so they can respond to my inquiry.
                  </label>
                </div>

                <button type="submit" disabled={isSubmitting} className="w-full bg-accent-primary hover:bg-accent-hover text-white font-barlow-condensed font-bold py-4 px-6 rounded transition-colors uppercase tracking-wider text-lg disabled:opacity-70 disabled:cursor-not-allowed">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </ScrollReveal>
          </div>
        </section>

        {/* SECTION 3 — Office Location */}
        <section>
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-barlow-condensed font-bold text-text-high uppercase">
                Our Office Location
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-3 gap-8 h-full">
            <ScrollReveal delay={1} className="lg:col-span-1">
              <div className="bg-bg-surface border border-border-light rounded-xl p-8 h-full flex flex-col justify-center space-y-8">
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="text-accent-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-rajdhani font-bold text-sm text-text-medium uppercase tracking-wider mb-2">Address</h4>
                    <p className="font-barlow text-text-high font-medium leading-relaxed mb-3">
                      A-2/748/8/5A, Near Purohit Char Rasta,<br />
                      Makarpura GIDC, Makarpura,<br />
                      Vadodara, Gujarat 390010
                    </p>
                    <a href="https://maps.app.goo.gl/gMr2N1R9Bh2uQkkV8" target="_blank" rel="noopener noreferrer" className="text-accent-primary text-sm font-bold hover:underline uppercase tracking-wider">
                      Open in Google Maps →
                    </a>
                  </div>
                </div>

                <div className="w-full h-px bg-border-light"></div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <Mail className="text-accent-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-rajdhani font-bold text-sm text-text-medium uppercase tracking-wider mb-2">Email Us</h4>
                    <a href="mailto:Sales@mechspaceautomation.com" className="block font-barlow text-text-high font-medium hover:text-accent-primary transition-colors mb-1">
                      <span className="text-text-medium text-sm w-16 inline-block">Sales:</span> Sales@mechspaceautomation.com
                    </a>
                    <a href="mailto:Info@mechspaceautomation.com" className="block font-barlow text-text-high font-medium hover:text-accent-primary transition-colors">
                      <span className="text-text-medium text-sm w-16 inline-block">Info:</span> Info@mechspaceautomation.com
                    </a>
                  </div>
                </div>

                <div className="w-full h-px bg-border-light"></div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="text-accent-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-rajdhani font-bold text-sm text-text-medium uppercase tracking-wider mb-2">Call Us</h4>
                    <a href="tel:+918200181382" className="block font-barlow text-text-high font-medium hover:text-accent-primary transition-colors mb-1">
                      <span className="text-text-medium text-sm w-16 inline-block">Sales:</span> +91 8200181382
                    </a>
                    <a href="tel:+919408206743" className="block font-barlow text-text-high font-medium hover:text-accent-primary transition-colors mb-1">
                      <span className="text-text-medium text-sm w-16 inline-block">Support:</span> +91 9408206743
                    </a>
                    <a href="tel:+919016600955" className="block font-barlow text-text-high font-medium hover:text-accent-primary transition-colors">
                      <span className="text-text-medium text-sm w-16 inline-block">Office:</span> +91 9016600955
                    </a>
                  </div>
                </div>

              </div>
            </ScrollReveal>

            <ScrollReveal delay={2} className="lg:col-span-2 h-[400px] lg:h-auto min-h-[400px]">
              <div className="w-full h-full rounded-xl overflow-hidden border border-border-light bg-bg-surface">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d922.1214!2d73.1832081!3d22.2485751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc502680db6a3%3A0xb284560e63ecd440!2sMECH%20SPACE%20AUTOMATION!5e0!3m2!1sen!2sin!4v1720000000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="MECH SPACE Office Location"
                ></iframe>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>

      {/* SECTION 4 — Bottom CTA Banner */}
      <section className="bg-[#0a1122] border-t border-border-light py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent-primary to-transparent pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <ScrollReveal>
            <h2 className="text-5xl md:text-6xl font-barlow-condensed font-bold text-white uppercase mb-10 tracking-wide">
              Engineering Tomorrow's Business
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href="#contact-form" 
                className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0a1122] font-barlow-condensed font-bold py-4 px-10 rounded transition-colors uppercase tracking-wider text-lg"
              >
                Start a Project
              </a>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto bg-accent-primary hover:bg-accent-hover text-white font-barlow-condensed font-bold py-4 px-10 rounded transition-colors uppercase tracking-wider text-lg border-2 border-accent-primary"
              >
                Book a Call
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 5 — Book a Call Popup Form (Modal) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onClick={() => setIsModalOpen(false)}></div>
          
          <div className="relative w-full max-w-lg bg-bg-surface border border-border-light rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="p-6 sm:p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-3xl font-barlow-condensed font-bold text-text-high uppercase">Book a Call</h3>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-bg-primary text-text-medium hover:text-text-high hover:bg-border-light transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              
              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-rajdhani font-semibold text-text-medium uppercase tracking-wider">Full Name</label>
                  <input required type="text" name="name" className="w-full bg-bg-primary border border-border-light rounded px-4 py-2.5 text-text-high focus:outline-none focus:border-accent-primary transition-colors" placeholder="John Doe" />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-rajdhani font-semibold text-text-medium uppercase tracking-wider">Phone</label>
                    <input required type="tel" name="phone" className="w-full bg-bg-primary border border-border-light rounded px-4 py-2.5 text-text-high focus:outline-none focus:border-accent-primary transition-colors" placeholder="+91 98765 43210" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-rajdhani font-semibold text-text-medium uppercase tracking-wider">Email</label>
                    <input required type="email" name="email" className="w-full bg-bg-primary border border-border-light rounded px-4 py-2.5 text-text-high focus:outline-none focus:border-accent-primary transition-colors" placeholder="john@company.com" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-rajdhani font-semibold text-text-medium uppercase tracking-wider">Industry</label>
                  <select required name="industry" defaultValue="" className="w-full bg-bg-primary border border-border-light rounded px-4 py-2.5 text-text-high focus:outline-none focus:border-accent-primary transition-colors appearance-none cursor-pointer">
                    <option value="" disabled>Select an industry...</option>
                    <option value="standard">Standard Automation Systems</option>
                    <option value="food">Food & Beverage Solutions</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-rajdhani font-semibold text-text-medium uppercase tracking-wider">Optional Note</label>
                  <textarea name="note" rows={3} className="w-full bg-bg-primary border border-border-light rounded px-4 py-2.5 text-text-high focus:outline-none focus:border-accent-primary transition-colors resize-none" placeholder="What would you like to discuss?"></textarea>
                </div>

                <div className="flex items-start gap-3 pt-2">
                  <input required type="checkbox" id="modal-consent" className="mt-1 w-4 h-4 accent-accent-primary cursor-pointer" />
                  <label htmlFor="modal-consent" className="text-xs text-text-medium font-barlow cursor-pointer leading-tight">
                    I consent to having Mech Space store my submitted details to arrange this call.
                  </label>
                </div>

                <button type="submit" disabled={isSubmitting} className="w-full bg-accent-primary hover:bg-accent-hover text-white font-barlow-condensed font-bold py-3.5 px-6 rounded transition-colors uppercase tracking-wider mt-4 disabled:opacity-70 disabled:cursor-not-allowed">
                  {isSubmitting ? 'Sending...' : 'Send Request'}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

    </main>
  );
}
