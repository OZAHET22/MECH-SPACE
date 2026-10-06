"use client";

import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact-us" className="py-16 border-t border-slate-200 font-barlow" style={{ background: "linear-gradient(160deg, #f0f4ff 0%, #ffffff 60%, #fff8f3 100%)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-16">

          {/* Column 1: Logo & Tagline */}
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/mech-space-logo-transparent.png"
              alt="Mech Space Automation"
              className="mb-3 object-contain"
              style={{ width: "360px", height: "auto", maxWidth: "100%", marginTop: "-55px" }}
            />
            <p className="font-barlow leading-relaxed mb-6" style={{ color: "#64748B" }}>
              Designing and Customized Engineering Equipment for efficient Production
            </p>
          </div>

          {/* Column 2: Contact Info */}
          <div>
            <h4 className="font-rajdhani font-bold uppercase tracking-wider mb-6" style={{ color: "#1E2A5E" }}>Contact Info</h4>
            <ul className="space-y-6 font-barlow text-sm" style={{ color: "#64748B" }}>
              <li className="flex items-start gap-3">
                <Mail size={20} className="text-orange mt-1 shrink-0" />
                <span className="leading-relaxed">
                  <strong className="block mb-1 text-base" style={{ color: "#1E2A5E" }}>Email address</strong>
                  <a href="mailto:Sales@mechspaceautomation.com" className="hover:text-orange transition-colors block">Sales@mechspaceautomation.com</a>
                  <a href="mailto:info@mechspaceautomation.com" className="hover:text-orange transition-colors block">info@mechspaceautomation.com</a>
                </span>
              </li>

              <li className="flex items-start gap-3">
                <Phone size={20} className="text-orange mt-1 shrink-0" />
                <span className="leading-relaxed">
                  <strong className="block mb-1 text-base" style={{ color: "#1E2A5E" }}>Phone No.</strong>
                  <a href="tel:+918200181382" className="hover:text-orange transition-colors block">+91 8200181382</a>
                  <a href="tel:+919408206743" className="hover:text-orange transition-colors block">+91 9408206743</a>
                  <a href="tel:+919016600955" className="hover:text-orange transition-colors block">+91 9016600955</a>
                </span>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="font-rajdhani font-bold uppercase tracking-wider mb-6" style={{ color: "#1E2A5E" }}>Company</h4>
            <ul className="space-y-4 font-barlow font-medium" style={{ color: "#64748B" }}>
              <li><Link href="/company" className="hover:text-orange transition-colors">About Us</Link></li>
              <li><Link href="/leadership" className="hover:text-orange transition-colors">Leadership</Link></li>
              <li><Link href="/contact" className="hover:text-orange transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 4: Address */}
          <div>
            <h4 className="font-rajdhani font-bold uppercase tracking-wider mb-6" style={{ color: "#1E2A5E" }}>Get In Touch</h4>
            <ul className="space-y-6 font-barlow text-sm" style={{ color: "#64748B" }}>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-orange mt-1 shrink-0" />
                <span className="leading-relaxed">
                  <strong className="block mb-1 text-base" style={{ color: "#1E2A5E" }}>Office address</strong>
                  A-2/748/8/5A, Near Purohit Char Rasta,<br />
                  Makarpura GIDC, Makarpura,<br />
                  Vadodara, Gujarat 390010
                </span>
              </li>
            </ul>
            <div className="mt-6 rounded-xl overflow-hidden border border-slate-200 shadow-sm h-40 relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d922.1214!2d73.1832081!3d22.2485751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc502680db6a3%3A0xb284560e63ecd440!2sMECH%20SPACE%20AUTOMATION!5e0!3m2!1sen!2sin!4v1720000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-barlow text-sm font-medium" style={{ color: "#94A3B8" }}>
            &copy; {new Date().getFullYear()} Mech Space Automation. All rights reserved.
          </div>
          <div className="flex gap-6 font-barlow text-sm font-medium" style={{ color: "#94A3B8" }}>
            <Link href="/privacy-policy" className="hover:text-slate-700 transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
