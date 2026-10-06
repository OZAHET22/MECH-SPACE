"use client";

import { useEffect, useRef, useState, useCallback } from "react";

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
];

// ─── COMPONENT ────────────────────────────────────────────────────────────────

export function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [activeLink, setActiveLink] = useState("Home");

  // ── Scroll-aware state ─────────────────────────────────────────────────
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── GSAP entrance animation ────────────────────────────────────────────
  useEffect(() => {
    const nav = navRef.current;
    const logo = logoRef.current;
    const links = linksRef.current;
    const cta = ctaRef.current;
    if (!nav || !logo || !links || !cta) return;

    let cleanup: (() => void) | null = null;

    import("gsap").then(({ gsap }) => {
      // Logo slides down from top
      gsap.fromTo(
        logo,
        { opacity: 0, y: -28 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", delay: 0.2 }
      );

      // Nav links stagger in
      gsap.fromTo(
        links.querySelectorAll(".nav-item"),
        { opacity: 0, y: -20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          stagger: 0.08,
          ease: "power2.out",
          delay: 0.35,
        }
      );

      // CTA button pops in
      gsap.fromTo(
        cta,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: "back.out(1.8)",
          delay: 0.85,
        }
      );

      // Underline sweep on the nav bar itself
      gsap.fromTo(
        nav.querySelector(".nav-bottom-line"),
        { scaleX: 0 },
        { scaleX: 1, duration: 0.8, ease: "power3.inOut", delay: 0.9 }
      );

      cleanup = () => {
        gsap.killTweensOf([logo, cta, ".nav-item", ".nav-bottom-line"]);
      };
    });

    return () => cleanup?.();
  }, []);

  // ── Close dropdown on outside click ────────────────────────────────────
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // ── Mobile: prevent body scroll when open ──────────────────────────────
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const toggleDropdown = (label: string) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  // ─── RENDER ────────────────────────────────────────────────────────────
  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? "rgba(8,14,32,0.92)"
            : "linear-gradient(to bottom, rgba(8,14,32,0.75) 0%, transparent 100%)",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "none",
          boxShadow: scrolled ? "0 4px 40px rgba(0,0,0,0.4)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="flex items-center justify-between h-[72px] md:h-20">

            {/* ── LOGO ── */}
            <div ref={logoRef} style={{ opacity: 0 }}>
              <a
                href="/"
                className="flex items-center group"
                aria-label="Mech Space — Creating Autonomous System"
              >
                {/* New brand logo image */}
                <div
                  className="transition-transform duration-300 group-hover:scale-105"
                  style={{
                    background: "rgba(255,255,255,0.96)",
                    borderRadius: 10,
                    padding: "5px 14px",
                    boxShadow: "0 2px 16px rgba(0,0,0,0.22)",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/img/mech-space-logo.jpeg"
                    alt="Mech Space — Creating Autonomous System"
                    style={{
                      height: 42,
                      width: "auto",
                      display: "block",
                      objectFit: "contain",
                    }}
                  />
                </div>
              </a>
            </div>

            {/* ── DESKTOP NAV ── */}
            <div ref={linksRef} className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <NavItem
                  key={link.label}
                  link={link}
                  active={activeLink === link.label}
                  openDropdown={openDropdown}
                  onToggleDropdown={toggleDropdown}
                  onSetActive={setActiveLink}
                  onCloseDropdown={() => setOpenDropdown(null)}
                />
              ))}
            </div>

            {/* ── CTA + Hamburger ── */}
            <div ref={ctaRef} className="flex items-center gap-3" style={{ opacity: 0 }}>
              {/* Contact Us CTA */}
              <a
                href="/contact"
                onClick={() => setActiveLink("Contact us")}
                className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-rajdhani font-bold text-sm uppercase tracking-widest text-white transition-all duration-300 group"
                style={{
                  background: "linear-gradient(135deg, #ED611C, #d85618)",
                  boxShadow: "0 4px 20px rgba(237,97,28,0.35)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 6px 28px rgba(237,97,28,0.55)";
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 20px rgba(237,97,28,0.35)";
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                }}
              >
                Contact Us
                <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>

              {/* Hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
                className="lg:hidden flex flex-col justify-center items-center w-11 h-11 gap-1.5 rounded-lg transition-all duration-200"
                style={{
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <span
                  className="block rounded-full transition-all duration-300 origin-center"
                  style={{
                    width: 20, height: 2,
                    background: "#fff",
                    transform: mobileOpen ? "rotate(45deg) translate(2.5px, 2.5px)" : "none",
                  }}
                />
                <span
                  className="block rounded-full transition-all duration-300"
                  style={{
                    width: 20, height: 2,
                    background: "#fff",
                    opacity: mobileOpen ? 0 : 1,
                    transform: mobileOpen ? "scaleX(0)" : "none",
                  }}
                />
                <span
                  className="block rounded-full transition-all duration-300 origin-center"
                  style={{
                    width: 20, height: 2,
                    background: "#fff",
                    transform: mobileOpen ? "rotate(-45deg) translate(2.5px, -2.5px)" : "none",
                  }}
                />
              </button>
            </div>
          </div>
        </div>

        {/* ── Bottom accent line ── */}
        <div
          className="nav-bottom-line absolute bottom-0 left-0 right-0 h-px"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(237,97,28,0.5), rgba(255,255,255,0.08), transparent)",
            transformOrigin: "left center",
            display: scrolled ? "block" : "none",
          }}
        />
      </nav>

      {/* ── MOBILE MENU ── */}
      <MobileMenu
        open={mobileOpen}
        links={NAV_LINKS}
        activeLink={activeLink}
        onSetActive={(l) => { setActiveLink(l); setMobileOpen(false); }}
      />
    </>
  );
}

// ─── DESKTOP NAV ITEM ────────────────────────────────────────────────────────

function NavItem({
  link,
  active,
  openDropdown,
  onToggleDropdown,
  onSetActive,
  onCloseDropdown,
}: {
  link: (typeof NAV_LINKS)[0];
  active: boolean;
  openDropdown: string | null;
  onToggleDropdown: (l: string) => void;
  onSetActive: (l: string) => void;
  onCloseDropdown: () => void;
}) {
  const hasDropdown = link.dropdown && link.dropdown.length > 0;
  const isOpen = openDropdown === link.label;
  const itemRef = useRef<HTMLDivElement>(null);

  // Animate dropdown open with GSAP
  useEffect(() => {
    const el = itemRef.current?.querySelector<HTMLElement>(".dropdown-panel");
    if (!el) return;
    import("gsap").then(({ gsap }) => {
      if (isOpen) {
        gsap.fromTo(el,
          { opacity: 0, y: -10, scale: 0.97 },
          { opacity: 1, y: 0, scale: 1, duration: 0.28, ease: "power2.out" }
        );
      }
    });
  }, [isOpen]);

  return (
    <div
      ref={itemRef}
      className="nav-item relative"
      onMouseEnter={() => hasDropdown && onToggleDropdown(link.label)}
      onMouseLeave={() => hasDropdown && onCloseDropdown()}
    >
      <a
        href={link.href}
        onClick={() => { onSetActive(link.label); if (!hasDropdown) onCloseDropdown(); }}
        className="relative flex items-center gap-1 px-3.5 py-2 rounded-lg font-rajdhani font-semibold text-sm uppercase tracking-wider transition-all duration-200"
        style={{
          color: active ? "#ED611C" : "rgba(255,255,255,0.82)",
          letterSpacing: "0.1em",
        }}
        onMouseEnter={(e) => {
          if (!active) (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
          (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.06)";
        }}
        onMouseLeave={(e) => {
          if (!active) (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.82)";
          (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
        }}
      >
        {link.label}
        {hasDropdown && (
          <svg
            viewBox="0 0 12 12"
            fill="none"
            className="w-2.5 h-2.5 transition-transform duration-200"
            style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
          >
            <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
        {/* Active underline */}
        {active && (
          <span
            className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full"
            style={{ background: "linear-gradient(90deg, #ED611C, #f59e0b)" }}
          />
        )}
      </a>

      {/* Dropdown */}
      {hasDropdown && isOpen && (
        <div
          className="dropdown-panel absolute top-full left-0 pt-2 z-50"
          style={{ minWidth: 260 }}
        >
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              background: "rgba(10,16,40,0.97)",
              backdropFilter: "blur(24px)",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(237,97,28,0.1)",
            }}
          >
            {/* Dropdown top accent */}
            <div className="h-0.5" style={{ background: "linear-gradient(90deg, #ED611C, transparent)" }} />
            <div className="p-2">
              {link.dropdown!.map((sub, i) => (
                <a
                  key={i}
                  href={sub.href}
                  className="flex items-center justify-between gap-3 px-4 py-3 rounded-xl transition-all duration-200 group"
                  style={{ color: "rgba(255,255,255,0.75)" }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.background = "rgba(237,97,28,0.1)";
                    el.style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.background = "transparent";
                    el.style.color = "rgba(255,255,255,0.75)";
                  }}
                >
                  <span className="font-barlow text-sm">{sub.label}</span>
                  <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" style={{ color: "#ED611C" }}>
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── MOBILE MENU ─────────────────────────────────────────────────────────────

function MobileMenu({
  open,
  links,
  activeLink,
  onSetActive,
}: {
  open: boolean;
  links: typeof NAV_LINKS;
  activeLink: string;
  onSetActive: (l: string) => void;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  useEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;
    import("gsap").then(({ gsap }) => {
      if (open) {
        gsap.fromTo(panel,
          { x: "100%", opacity: 0 },
          { x: "0%", opacity: 1, duration: 0.4, ease: "power3.out" }
        );
        gsap.fromTo(
          panel.querySelectorAll(".mob-item"),
          { opacity: 0, x: 30 },
          { opacity: 1, x: 0, duration: 0.4, stagger: 0.07, ease: "power2.out", delay: 0.15 }
        );
      } else {
        gsap.to(panel, { x: "100%", opacity: 0, duration: 0.3, ease: "power2.in" });
      }
    });
  }, [open]);

  return (
    <div
      ref={panelRef}
      className="fixed inset-0 z-40 lg:hidden"
      style={{
        background: "rgba(6,10,26,0.98)",
        backdropFilter: "blur(20px)",
        transform: "translateX(100%)",
        opacity: 0,
        visibility: open ? "visible" : "hidden",
        pointerEvents: open ? "auto" : "none",
      }}
    >
      {/* Header area (spacer) */}
      <div className="h-[72px] border-b border-white/5" />

      {/* Links */}
      <div className="flex flex-col px-6 py-8 gap-2 overflow-y-auto" style={{ maxHeight: "calc(100vh - 72px)" }}>

        {/* Top accent */}
        <div className="w-16 h-1 rounded-full mb-4" style={{ background: "linear-gradient(90deg, #ED611C, #f59e0b)" }} />

        {links.map((link) => (
          <div key={link.label} className="mob-item" style={{ opacity: 0 }}>
            {link.dropdown ? (
              <>
                <button
                  onClick={() => setExpandedItem(expandedItem === link.label ? null : link.label)}
                  className="w-full flex items-center justify-between px-4 py-4 rounded-xl transition-all duration-200"
                  style={{
                    background: activeLink === link.label ? "rgba(237,97,28,0.1)" : "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    color: activeLink === link.label ? "#ED611C" : "rgba(255,255,255,0.85)",
                  }}
                >
                  <span className="font-rajdhani font-bold text-lg uppercase tracking-widest">
                    {link.label}
                  </span>
                  <svg
                    viewBox="0 0 16 16" fill="none" className="w-4 h-4 transition-transform duration-250"
                    style={{ transform: expandedItem === link.label ? "rotate(180deg)" : "none" }}
                  >
                    <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                {expandedItem === link.label && (
                  <div className="ml-4 mt-1 flex flex-col gap-1">
                    {link.dropdown.map((sub, j) => (
                      <a
                        key={j}
                        href={sub.href}
                        onClick={() => onSetActive(link.label)}
                        className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-barlow transition-all duration-200"
                        style={{
                          color: "rgba(255,255,255,0.6)",
                          background: "rgba(255,255,255,0.02)",
                          borderLeft: "2px solid rgba(237,97,28,0.3)",
                        }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#fff"; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.6)"; }}
                      >
                        <span className="w-1 h-1 rounded-full bg-orange-500 shrink-0" />
                        {sub.label}
                      </a>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <a
                href={link.href}
                onClick={() => onSetActive(link.label)}
                className="flex items-center px-4 py-4 rounded-xl transition-all duration-200"
                style={{
                  background: activeLink === link.label ? "rgba(237,97,28,0.1)" : "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  color: activeLink === link.label ? "#ED611C" : "rgba(255,255,255,0.85)",
                }}
              >
                <span className="font-rajdhani font-bold text-lg uppercase tracking-widest">{link.label}</span>
              </a>
            )}
          </div>
        ))}

        {/* Contact CTA */}
        <div className="mob-item mt-6" style={{ opacity: 0 }}>
          <a
            href="/contact"
            onClick={() => onSetActive("Contact us")}
            className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl font-rajdhani font-bold text-base uppercase tracking-widest text-white transition-all duration-200"
            style={{
              background: "linear-gradient(135deg, #ED611C, #d85618)",
              boxShadow: "0 8px 32px rgba(237,97,28,0.35)",
            }}
          >
            Contact Us
            <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* Divider + meta */}
        <div className="mt-8 pt-6 border-t border-white/5">
          <p className="font-barlow text-xs text-center" style={{ color: "rgba(255,255,255,0.2)" }}>
            Mech Space Automation © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </div>
  );
}
