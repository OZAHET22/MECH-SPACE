"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user already consented
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Slide up after 2.5s delay as specified in web.md
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
          <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="fixed bottom-0 left-0 right-0 bg-[#0B1530] border-t-[3px] border-[#ED611C] z-[100] p-4 md:p-6 shadow-[0_-10px_40px_rgba(0,0,0,0.3)]"
        >
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-gray-300 font-barlow text-sm md:text-base leading-relaxed">
              <span className="font-rajdhani font-bold text-[#ED611C] uppercase tracking-wider block mb-1">Privacy-First UX</span>
              We use cookies to improve your experience and analyze site traffic. We do not use dark patterns or sell your data.
              Read our <a href="/privacy-policy" className="text-[#ED611C] hover:text-white transition-colors underline">Privacy Policy</a>.
            </div>
            <div className="flex gap-4 shrink-0 w-full md:w-auto">
              <button 
                onClick={handleDecline}
                className="flex-1 md:flex-none border border-gray-600 text-gray-300 hover:bg-white/10 hover:text-white font-rajdhani font-bold py-2.5 px-6 rounded transition-all duration-300 uppercase tracking-widest text-sm"
              >
                Decline
              </button>
              <button 
                onClick={handleAccept}
                className="flex-1 md:flex-none bg-[#ED611C] hover:bg-[#c54e12] text-white font-rajdhani font-bold py-2.5 px-6 rounded transition-all duration-300 uppercase tracking-widest text-sm shadow-[0_4px_14px_rgba(237,97,28,0.39)]"
              >
                Accept All
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
