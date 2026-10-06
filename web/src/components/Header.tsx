"use client";

import { useEffect, useRef, useState, forwardRef, useCallback } from "react";
import Link from "next/link";

// ─── NAV DATA ─────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "Home", href: "/" },
  {
    label: "Product",
    href: "/product",
    dropdown: [
      { label: "Machine Tending Application", href: "/product" },
      { label: "Packaging Solution", href: "/product/packaging-solution" },
      { label: "Spiral Freezer", href: "/product/spiral-freezer" },
      { label: "SPM", href: "/product/spm" },
    ],
  },
  { label: "About", href: "/company" },
  { label: "Leadership", href: "/leadership" },
  { label: "Contact Us", href: "/contact" },
];

// Top bar height
const TOP_BAR_H = 38;
const NAV_BAR_H = 72;

// ─── MAIN HEADER EXPORT ───────────────────────────────────────────────────────

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [activeLink, setActiveLink] = useState("Home");
  const [isMobile, setIsMobile] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile, { passive: true });
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > TOP_BAR_H + 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown on outside click (exclude mobile menu panel)
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as Node;
      const isInsideHeader = headerRef.current?.contains(target);
      const isInsideMobileMenu = mobileMenuRef.current?.contains(target);
      if (!isInsideHeader && !isInsideMobileMenu) {
        setOpenDropdown(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Lock body scroll on mobile open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // On mobile (≤480px) top bar is hidden so header is just NAV_BAR_H
  const totalHeaderH = isMobile
    ? NAV_BAR_H
    : scrolled ? NAV_BAR_H : TOP_BAR_H + NAV_BAR_H;

  return (
    <>
      {/* ── FIXED WRAPPER ── */}
      <div
        ref={headerRef}
        className="fixed top-0 left-0 right-0 z-50"
        style={{ height: totalHeaderH, transition: "height 0.35s ease" }}
      >

        {/* ── ROW 1: TOP INFO BAR — hidden on mobile ≤480px ── */}
        <div
          className="hidden sm:block w-full overflow-hidden transition-all duration-350"
          style={{
            height: scrolled ? 0 : TOP_BAR_H,
            opacity: scrolled ? 0 : 1,
            background: "#1E2A5E",
          }}
        >
          <div className="max-w-7xl mx-auto px-5 lg:px-8 h-full flex items-center justify-between">
            {/* Left — contact info */}
            <div className="flex items-center gap-4">
              {/* Emails */}
              <div className="flex items-center gap-2">
                <a
                  href="mailto:Sales@mechspaceautomation.com"
                  className="flex items-center gap-1.5 text-white/80 hover:text-white transition-colors duration-200"
                  style={{ fontSize: 12, letterSpacing: "0.01em" }}
                >
                  <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5 shrink-0">
                    <rect x="1" y="3" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M1 5l7 5 7-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  <span className="font-barlow">Sales@mechspaceautomation.com</span>
                </a>
                <span className="text-white/30 hidden lg:inline">|</span>
                <a
                  href="mailto:info@mechspaceautomation.com"
                  className="hidden lg:flex items-center text-white/80 hover:text-white transition-colors duration-200"
                  style={{ fontSize: 12, letterSpacing: "0.01em" }}
                >
                  <span className="font-barlow">info@mechspaceautomation.com</span>
                </a>
              </div>

              {/* Divider */}
              <span className="w-px h-3 bg-white/20" />

              {/* Phones */}
              <div className="flex items-center gap-2">
                <a
                  href="tel:+918200181382"
                  className="flex items-center gap-1.5 text-white/80 hover:text-white transition-colors duration-200"
                  style={{ fontSize: 12 }}
                >
                  <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5 shrink-0">
                    <path d="M2 2.5C2 2 2.5 1.5 3 1.5h2.5l1 3-1.5 1a8 8 0 0 0 3.5 3.5l1-1.5 3 1V11c0 .5-.5 1-1 1A11 11 0 0 1 2 2.5z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="font-barlow">+91 8200181382</span>
                </a>
                <span className="text-white/30 hidden lg:inline">|</span>
                <a
                  href="tel:+919408206743"
                  className="hidden lg:flex items-center text-white/80 hover:text-white transition-colors duration-200"
                  style={{ fontSize: 12 }}
                >
                  <span className="font-barlow">+91 9408206743</span>
                </a>
              </div>
            </div>

            {/* Right — social icons */}
            <div className="flex items-center gap-3">
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/company/mech-space-automation/?viewAsMember=true" target="_blank" rel="noopener noreferrer"
                className="w-6 h-6 flex items-center justify-center rounded text-white/70 hover:text-white transition-colors"
                aria-label="Mech Space Automation on LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              {/* YouTube */}
              <a href="https://www.youtube.com/channel/UCGhhI1jIXSph72VUTN_d4IA" target="_blank" rel="noopener noreferrer"
                className="w-6 h-6 flex items-center justify-center rounded text-white/70 hover:text-white transition-colors"
                aria-label="Mech Space Automation on YouTube">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                  <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.5 15.6V8.4l6.3 3.6-6.3 3.6z"/>
                </svg>
              </a>

              {/* WhatsApp */}
              <a href="https://wa.me/918200181382" target="_blank" rel="noopener noreferrer"
                className="w-6 h-6 flex items-center justify-center rounded text-white/70 hover:text-white transition-colors"
                aria-label="WhatsApp">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* ── ROW 2: MAIN NAV BAR ── */}
        <div
          className="w-full transition-all duration-350"
          style={{
            height: NAV_BAR_H,
            background: "#ffffff",
            borderBottom: "1px solid #e5e9f0",
            boxShadow: scrolled ? "0 2px 20px rgba(30,42,94,0.1)" : "none",
          }}
        >
          <div className="max-w-7xl mx-auto px-5 lg:px-8 h-full flex items-center justify-between gap-8">

            {/* ─ LOGO ─ */}
            <Link
              href="/"
              className="flex items-center shrink-0 group"
              aria-label="Mech Space — Creating Autonomous System"
              onClick={() => setActiveLink("Home")}
            >
              {/* New brand logo image — white header, no wrapper needed */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/mech-space-logo.jpeg"
                alt="Mech Space — Creating Autonomous System"
                className="transition-transform duration-300 group-hover:scale-105"
                style={{
                  height: 46,
                  width: "auto",
                  display: "block",
                  objectFit: "contain",
                }}
              />
            </Link>

            {/* ─ DESKTOP NAV ─ */}
            <nav className="hidden lg:flex items-center" aria-label="Main navigation">
              {NAV_LINKS.map((link) => (
                <DesktopNavItem
                  key={link.label}
                  link={link}
                  isActive={activeLink === link.label}
                  isOpen={openDropdown === link.label}
                  onOpen={() => setOpenDropdown(link.label)}
                  onClose={() => setOpenDropdown(null)}
                  onActivate={() => setActiveLink(link.label)}
                />
              ))}
            </nav>

            {/* ─ HAMBURGER (mobile) ─ */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              className="lg:hidden flex flex-col justify-center items-center gap-[5px] w-10 h-10 rounded-lg transition-all duration-200"
              style={{
                background: mobileOpen ? "rgba(237,97,28,0.08)" : "rgba(30,42,94,0.06)",
                border: "1px solid rgba(30,42,94,0.12)",
              }}
            >
              <span
                className="block rounded-full transition-all duration-300"
                style={{
                  width: 18, height: 2,
                  background: "#1E2A5E",
                  transform: mobileOpen ? "rotate(45deg) translate(2px, 5px)" : "none",
                }}
              />
              <span
                className="block rounded-full transition-all duration-300"
                style={{
                  width: 18, height: 2,
                  background: "#1E2A5E",
                  opacity: mobileOpen ? 0 : 1,
                  transform: mobileOpen ? "scaleX(0)" : "none",
                }}
              />
              <span
                className="block rounded-full transition-all duration-300"
                style={{
                  width: 18, height: 2,
                  background: "#1E2A5E",
                  transform: mobileOpen ? "rotate(-45deg) translate(2px, -5px)" : "none",
                }}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Spacer so page content doesn't hide under header */}
      <div style={{ height: totalHeaderH, transition: "height 0.35s ease" }} />

      {/* ── MOBILE MENU ── */}
      <MobileMenu
        ref={mobileMenuRef}
        open={mobileOpen}
        links={NAV_LINKS}
        activeLink={activeLink}
        totalHeaderH={totalHeaderH}
        onSelect={(label) => {
          setActiveLink(label);
          setMobileOpen(false);
        }}
      />
    </>
  );
}

// ─── DESKTOP NAV ITEM ─────────────────────────────────────────────────────────

function DesktopNavItem({
  link,
  isActive,
  isOpen,
  onOpen,
  onClose,
  onActivate,
}: {
  link: (typeof NAV_LINKS)[0];
  isActive: boolean;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onActivate: () => void;
}) {
  const hasDropdown = !!link.dropdown?.length;
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Animate dropdown
  useEffect(() => {
    const el = dropdownRef.current;
    if (!el) return;
    import("gsap").then(({ gsap }) => {
      if (isOpen) {
        gsap.fromTo(el,
          { opacity: 0, y: -6 },
          { opacity: 1, y: 0, duration: 0.2, ease: "power2.out" }
        );
      }
    });
  }, [isOpen]);

  return (
    <div
      className="relative"
      onMouseEnter={() => hasDropdown && onOpen()}
      onMouseLeave={() => hasDropdown && onClose()}
    >
      <Link
        href={link.href}
        onClick={onActivate}
        className="relative flex items-center gap-1 px-4 py-2 font-rajdhani font-bold text-sm uppercase tracking-wider transition-colors duration-200 whitespace-nowrap"
        style={{
          color: isActive ? "#ED611C" : "#1E2A5E",
          letterSpacing: "0.08em",
          fontSize: 13,
        }}
        onMouseEnter={(e) => {
          if (!isActive) (e.currentTarget as HTMLAnchorElement).style.color = "#ED611C";
        }}
        onMouseLeave={(e) => {
          if (!isActive) (e.currentTarget as HTMLAnchorElement).style.color = "#1E2A5E";
        }}
      >
        {link.label}
        {hasDropdown && (
          <svg
            viewBox="0 0 10 10"
            fill="none"
            className="w-2.5 h-2.5 shrink-0 transition-transform duration-200"
            style={{ transform: isOpen ? "rotate(180deg)" : "none" }}
          >
            <path d="M1.5 3.5l3.5 3 3.5-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
        {/* Active underline */}
        <span
          className="absolute bottom-0 left-4 right-4 rounded-full transition-all duration-300"
          style={{
            height: 2,
            background: "#ED611C",
            transform: isActive ? "scaleX(1)" : "scaleX(0)",
            transformOrigin: "left",
          }}
        />
      </Link>

      {/* Dropdown panel */}
      {hasDropdown && isOpen && (
        <div
          ref={dropdownRef}
          className="absolute top-full left-0 pt-1 z-50"
          style={{ minWidth: 260 }}
        >
          <div
            style={{
              background: "#fff",
              border: "1px solid #e5e9f0",
              borderTop: "3px solid #ED611C",
              boxShadow: "0 12px 40px rgba(30,42,94,0.13)",
              borderRadius: "0 0 10px 10px",
            }}
          >
            {link.dropdown!.map((sub, i) => (
              <Link
                key={i}
                href={sub.href}
                onClick={onActivate}
                className="flex items-center gap-3 px-5 py-3 font-barlow text-sm transition-all duration-150"
                style={{
                  color: "#374151",
                  borderBottom: i < link.dropdown!.length - 1 ? "1px solid #f1f5f9" : "none",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = "#FFF7F3";
                  el.style.color = "#ED611C";
                  el.style.paddingLeft = "24px";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = "transparent";
                  el.style.color = "#374151";
                  el.style.paddingLeft = "20px";
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full shrink-0"
                  style={{ background: "#ED611C", opacity: 0.7 }}
                />
                {sub.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

const MobileMenu = forwardRef<HTMLDivElement, {
  open: boolean;
  links: typeof NAV_LINKS;
  activeLink: string;
  totalHeaderH: number;
  onSelect: (label: string) => void;
}>(function MobileMenu({
  open,
  links,
  activeLink,
  totalHeaderH,
  onSelect,
}, forwardedRef) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Merge forwarded ref + internal panelRef
  const setRefs = useCallback((node: HTMLDivElement | null) => {
    panelRef.current = node;
    if (typeof forwardedRef === 'function') {
      forwardedRef(node);
    } else if (forwardedRef) {
      forwardedRef.current = node;
    }
  }, [forwardedRef]);

  useEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;
    import("gsap").then(({ gsap }) => {
      if (open) {
        gsap.fromTo(panel, { x: "100%", opacity: 0 }, { x: "0%", opacity: 1, duration: 0.38, ease: "power3.out" });
        gsap.fromTo(panel.querySelectorAll(".mob-item"),
          { opacity: 0, x: 20 },
          { opacity: 1, x: 0, duration: 0.3, stagger: 0.05, ease: "power2.out", delay: 0.1 }
        );
      } else {
        gsap.to(panel, { x: "100%", opacity: 0, duration: 0.28, ease: "power2.in" });
      }
    }).catch(() => {
      // If GSAP fails to load, ensure panel is visible
      if (panel) {
        panel.style.transform = open ? "translateX(0%)" : "translateX(100%)";
        panel.style.opacity = open ? "1" : "0";
      }
    });
  }, [open]);

  return (
    <div
      ref={setRefs}
      className="fixed z-40 lg:hidden flex flex-col"
      style={{
        top: totalHeaderH,
        left: 0, right: 0,
        bottom: 0,
        background: "#fff",
        transform: open ? "translateX(0%)" : "translateX(100%)",
        opacity: open ? 1 : 0,
        visibility: open ? "visible" : "hidden",
        pointerEvents: open ? "auto" : "none",
        borderTop: "3px solid #ED611C",
        boxShadow: "0 8px 40px rgba(30,42,94,0.15)",
        overflowY: "auto",
        transition: open ? "none" : "transform 0.28s ease-in, opacity 0.28s ease-in",
      }}
    >
      <div className="px-5 py-6 flex flex-col gap-2">
        {/* Accent strip */}
        <div className="w-12 h-1 rounded-full mb-4" style={{ background: "linear-gradient(90deg, #ED611C, #f59e0b)" }} />

        {links.map((link) => (
          <div key={link.label} className="mob-item">
            {link.dropdown?.length ? (
              <>
                <button
                  onClick={() => setExpandedItem(expandedItem === link.label ? null : link.label)}
                  className="w-full flex items-center justify-between px-4 rounded-xl transition-all duration-200"
                  style={{
                    minHeight: 56,
                    background: activeLink === link.label ? "rgba(237,97,28,0.08)" : "#f8fafc",
                    border: `1px solid ${activeLink === link.label ? "rgba(237,97,28,0.25)" : "#e5e9f0"}`,
                    color: activeLink === link.label ? "#ED611C" : "#1E2A5E",
                  }}
                >
                  <span className="font-rajdhani font-bold text-base uppercase tracking-widest">{link.label}</span>
                  <svg
                    viewBox="0 0 16 16" fill="none" className="w-4 h-4 transition-transform duration-250"
                    style={{ transform: expandedItem === link.label ? "rotate(180deg)" : "none" }}
                  >
                    <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                {expandedItem === link.label && (
                  <div className="ml-3 mt-1 flex flex-col gap-1">
                    {link.dropdown.map((sub, j) => (
                      <Link
                        key={j}
                        href={sub.href}
                        onClick={() => onSelect(link.label)}
                        className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-barlow transition-all duration-150"
                        style={{
                          color: "#64748B",
                          background: "#fafafa",
                          borderLeft: "3px solid #ED611C",
                        }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#ED611C"; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#64748B"; }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0 opacity-80" />
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <Link
                href={link.href}
                onClick={() => onSelect(link.label)}
                className="flex items-center px-4 rounded-xl transition-all duration-200"
                style={{
                  minHeight: 56,
                  background: activeLink === link.label ? "rgba(237,97,28,0.08)" : "#f8fafc",
                  border: `1px solid ${activeLink === link.label ? "rgba(237,97,28,0.25)" : "#e5e9f0"}`,
                  color: activeLink === link.label ? "#ED611C" : "#1E2A5E",
                }}
              >
                <span className="font-rajdhani font-bold text-base uppercase tracking-widest">{link.label}</span>
              </Link>
            )}
          </div>
        ))}

        {/* Divider + meta */}
        <div className="mt-6 pt-5 border-t border-slate-100">
          <p className="font-barlow text-xs text-center" style={{ color: "#94a3b8" }}>
            Mech Space Automation © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </div>
  );
});
