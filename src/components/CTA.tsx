"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { motion, useReducedMotion } from "framer-motion";

const INSTALL_CMD = "npm install -g clawpowers";

export default function CTA() {
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
      id="cta"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: "var(--bg-secondary)" }}
    >
      <NeuralBackdrop />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <ScrollReveal>
          <h2 className="section-title mb-6">
            Start Building with{" "}
            <span className="gradient-text">ClawPowers</span>
          </h2>
          <p className="section-subtitle mx-auto text-center mb-10 text-balance">
            Non-custodial wallets, x402 payments, and 94 production skills — install in one command,
            read the docs on GitHub, and ship agents that can pay their own way.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="code-block text-left mb-8 max-w-xl mx-auto">
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>
                shell
              </span>
              <button
                type="button"
                onClick={handleCopy}
                className={`copy-btn !py-2 !px-3 !text-xs ${copied ? "copied" : ""}`}
              >
                {copied ? "Copied ✓" : "Copy"}
              </button>
            </div>
            <code className="font-mono text-sm" style={{ color: "var(--cyan)" }}>
              {INSTALL_CMD}
            </code>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={160}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center">
            <motion.a
              href="https://github.com/up2itnow0822/ClawPowers-Agent"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary justify-center"
              whileHover={reduce ? undefined : { scale: 1.02 }}
              whileTap={reduce ? undefined : { scale: 0.98 }}
            >
              <span>Get Started</span>
            </motion.a>
            <motion.a
              href="https://www.npmjs.com/package/clawpowers"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary justify-center"
              style={{
                borderColor: "rgba(200, 80, 255, 0.45)",
                color: "var(--magenta)",
              }}
              whileHover={reduce ? undefined : { scale: 1.02 }}
              whileTap={reduce ? undefined : { scale: 0.98 }}
            >
              View on npm
            </motion.a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function NeuralBackdrop() {
  return (
    <div
      className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden"
      aria-hidden
      style={{ opacity: 0.07 }}
    >
      <svg
        className="w-[min(900px,140vw)] h-auto blur-sm"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="neuralGlow" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#060a14" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="200" cy="200" r="180" fill="url(#neuralGlow)" />
        {[...Array(12)].map((_, i) => {
          const a = (i / 12) * Math.PI * 2;
          const x = 200 + Math.cos(a) * 120;
          const y = 200 + Math.sin(a) * 120;
          return (
            <g key={i}>
              <line
                x1="200"
                y1="200"
                x2={x}
                y2={y}
                stroke="#00d4ff"
                strokeWidth="0.5"
                opacity="0.4"
              />
              <circle cx={x} cy={y} r="4" fill="#c850ff" opacity="0.7" />
            </g>
          );
        })}
        <circle cx="200" cy="200" r="14" fill="#00d4ff" opacity="0.85" />
      </svg>
    </div>
  );
}
