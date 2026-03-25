"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { motion, useReducedMotion } from "framer-motion";

const INSTALL_CMD = "npm install agentwallet-sdk";

export default function Demo() {
  const [copied, setCopied] = useState(false);
  const reduce = useReducedMotion();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(INSTALL_CMD);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section
      id="demo"
      className="relative py-24 md:py-32"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <ScrollReveal>
          <div className="badge mx-auto mb-4">Install</div>
          <h2 className="section-title mb-4">
            Ship in one{" "}
            <span className="gradient-text">command</span>
          </h2>
          <p className="section-subtitle mx-auto text-center mb-10 text-balance">
            Copy the install line below, then follow the README on GitHub to
            wire x402 payments and spending limits in your agent runtime.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <motion.div
            className="demo-frame-wrapper relative"
            whileHover={reduce ? undefined : { boxShadow: "0 0 48px rgba(0, 212, 255, 0.15)" }}
          >
            <div
              className="rounded-xl overflow-hidden text-left"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
              }}
            >
              <div
                className="flex items-center gap-3 px-4 py-3"
                style={{ borderBottom: "1px solid var(--border)" }}
              >
                <div className="flex gap-1.5" aria-hidden>
                  {["#ff5f57", "#ffbd2e", "#28ca41"].map((c, i) => (
                    <div key={i} className="w-3 h-3 rounded-full" style={{ background: c }} />
                  ))}
                </div>
                <span
                  className="font-mono text-xs flex-1 truncate"
                  style={{ color: "var(--text-muted)" }}
                >
                  terminal — agent workspace
                </span>
              </div>
              <div className="p-6 md:p-8 flex flex-col sm:flex-row sm:items-center gap-4">
                <code
                  className="font-mono text-sm md:text-base flex-1 break-all"
                  style={{ color: "var(--text-primary)" }}
                >
                  <span style={{ color: "var(--text-muted)" }}>$ </span>
                  {INSTALL_CMD}
                </code>
                <motion.button
                  type="button"
                  onClick={handleCopy}
                  className={`copy-btn shrink-0 ${copied ? "copied" : ""}`}
                  whileTap={reduce ? undefined : { scale: 0.97 }}
                >
                  <CopyGlyph done={copied} />
                  {copied ? "Copied" : "Copy"}
                </motion.button>
              </div>
            </div>
          </motion.div>
        </ScrollReveal>

        <ScrollReveal delay={160}>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://www.npmjs.com/package/agentwallet-sdk"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              npm package ↗
            </a>
            <a
              href="https://github.com/up2itnow0822"
              target="_blank"
              rel="noopener noreferrer"
              className="product-link text-base justify-center py-2"
            >
              Organization on GitHub ↗
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function CopyGlyph({ done }: { done: boolean }) {
  if (done) {
    return (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
        <polyline points="20 6 9 17 4 12" />
      </svg>
    );
  }
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
    </svg>
  );
}
