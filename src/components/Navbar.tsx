"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Products", href: "#products" },
  { label: "Features", href: "#features" },
  {
    label: "Docs",
    href: "https://github.com/up2itnow0822/ClawPowers-Agent",
    external: true,
  },
  {
    label: "npm",
    href: "https://www.npmjs.com/package/clawpowers",
    external: true,
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      className={`navbar ${scrolled ? "scrolled" : ""}`}
      role="navigation"
      aria-label="Main navigation"
      initial={false}
      style={{
        background: scrolled ? "rgba(6, 10, 20, 0.82)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        boxShadow: scrolled ? "0 8px 32px rgba(0, 0, 0, 0.45)" : undefined,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-center gap-2 sm:gap-3 no-underline shrink-0 group"
        >
          <motion.div
            className="relative w-9 h-9 rounded-xl flex items-center justify-center overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(0,212,255,0.25), rgba(200,80,255,0.2))",
              border: "1px solid rgba(0,212,255,0.35)",
              boxShadow: "0 0 20px rgba(0, 212, 255, 0.25)",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 24 }}
            aria-hidden
          >
            <svg width="22" height="22" viewBox="0 0 32 32" fill="none">
              <path
                d="M8 22 L16 6 L24 22 M11 18 h10"
                stroke="var(--cyan)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
          <span
            className="font-bold text-[0.7rem] min-[400px]:text-xs sm:text-sm tracking-tight leading-tight"
            style={{ color: "var(--text-primary)" }}
          >
            AI-AGENT-ECONOMY
            <span style={{ color: "var(--cyan)" }}>.COM</span>
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="group nav-link text-sm font-medium no-underline relative tracking-tight"
            >
              {link.label}
              <span
                className="absolute -bottom-0.5 left-0 w-0 h-px bg-[var(--cyan)] transition-all duration-300 group-hover:w-full"
                style={{ boxShadow: "0 0 8px var(--cyan)" }}
              />
            </a>
          ))}
          <motion.a
            href="https://github.com/up2itnow0822/ClawPowers-Agent"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg font-semibold text-sm no-underline"
            style={{
              padding: "10px 22px",
              background: "linear-gradient(135deg, var(--cyan), var(--magenta))",
              color: "var(--bg-primary)",
              boxShadow: "0 0 24px rgba(0, 212, 255, 0.35)",
            }}
            whileHover={{ scale: 1.03, boxShadow: "0 0 32px rgba(0, 212, 255, 0.5)" }}
            whileTap={{ scale: 0.98 }}
          >
            Get Started
          </motion.a>
        </div>

        <button
          type="button"
          className="lg:hidden flex flex-col gap-1.5 p-2 rounded-lg"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
          style={{
            background: "rgba(0,212,255,0.08)",
            border: "1px solid var(--border)",
            cursor: "pointer",
          }}
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="w-6 h-0.5 rounded-full block origin-center"
              style={{ background: "var(--cyan)" }}
              animate={
                menuOpen
                  ? i === 0
                    ? { rotate: 45, y: 6 }
                    : i === 1
                      ? { opacity: 0, scaleX: 0 }
                      : { rotate: -45, y: -6 }
                  : { rotate: 0, y: 0, opacity: 1, scaleX: 1 }
              }
            />
          ))}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="lg:hidden border-t overflow-hidden"
            style={{
              background: "rgba(6,10,20,0.98)",
              borderColor: "var(--border)",
            }}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="px-6 py-5 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="text-sm font-medium no-underline py-2"
                  style={{ color: "var(--text-secondary)" }}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://github.com/up2itnow0822/ClawPowers-Agent"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-center justify-center mt-2"
                onClick={() => setMenuOpen(false)}
              >
                <span>Get Started</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
