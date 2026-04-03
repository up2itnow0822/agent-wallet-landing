"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

export default function Hero() {
  const reduce = useReducedMotion();
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-[100svh] flex items-center overflow-hidden pt-28 pb-20"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="hero-grid" aria-hidden />
      <div
        className="glow-orb glow-orb-cyan absolute"
        aria-hidden
        style={{ top: "-12%", left: "-8%" }}
      />
      <div
        className="glow-orb glow-orb-magenta absolute"
        aria-hidden
        style={{ bottom: "-15%", right: "-10%", animationDelay: "1.5s" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid lg:grid-cols-[1fr_1.05fr] gap-12 lg:gap-8 items-center">
          <div className="text-center lg:text-left flex flex-col gap-8">
            <ScrollReveal>
              <div className="badge mx-auto lg:mx-0 w-fit">
                <span aria-hidden>⬡</span>
                CLAWPOWERS — AGENTS THAT PAY
              </div>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.05]">
                Agents That Finish Tasks —{" "}
                <span className="block sm:inline mt-1 sm:mt-0">
                  <span className="gradient-text">Even When They Have to Pay</span>
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={140}>
              <p
                className="text-lg sm:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                Non-custodial payment rails, x402 micropayments, and cross-chain
                identity (UAID + ERC-8004) for the autonomous agent economy.
                BSL 1.1 licensed. One-command install.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start">
                <motion.a
                  href="https://github.com/up2itnow0822/ClawPowers-Agent"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary justify-center sm:justify-start"
                  whileHover={reduce ? undefined : { scale: 1.02 }}
                  whileTap={reduce ? undefined : { scale: 0.98 }}
                >
                  <span>Get Started →</span>
                </motion.a>
                <motion.a
                  href="https://github.com/up2itnow0822"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary justify-center sm:justify-start"
                  whileHover={reduce ? undefined : { scale: 1.02 }}
                  whileTap={reduce ? undefined : { scale: 0.98 }}
                >
                  <GithubIcon /> View on GitHub
                </motion.a>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={120} className="relative min-h-[280px] lg:min-h-[420px] flex items-center justify-center">
            <HeroNetworkGraphic floating={!reduce} />
          </ScrollReveal>
        </div>
      </div>

      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
        style={{ color: "var(--text-muted)" }}
        aria-hidden
      >
        <span className="text-[10px] font-mono uppercase tracking-[0.2em]">Scroll</span>
        <div
          className="w-px h-8 rounded-full"
          style={{
            background: "linear-gradient(180deg, var(--cyan), transparent)",
            animation: reduce ? undefined : "float 2.2s ease-in-out infinite",
          }}
        />
      </div>
    </section>
  );
}

function GithubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.4.6.1.82-.26.82-.57v-2c-3.34.72-4.04-1.6-4.04-1.6-.54-1.38-1.33-1.75-1.33-1.75-1.08-.74.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.06 1.82 2.78 1.3 3.46.99.1-.77.41-1.3.75-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 016 0C17.3 4.68 18.3 5 18.3 5c.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.68.82.57C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function HeroNetworkGraphic({ floating }: { floating: boolean }) {
  return (
    <div className="relative w-full max-w-lg mx-auto aspect-square md:aspect-auto md:h-[420px]">
      <motion.div
        className="absolute inset-0 rounded-3xl overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 45%, rgba(0,212,255,0.12), transparent 55%)",
          border: "1px solid rgba(0,212,255,0.2)",
          boxShadow:
            "0 0 60px rgba(0, 212, 255, 0.12), inset 0 0 80px rgba(0,0,0,0.5)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
        animate={
          floating
            ? { y: [0, -10, 0], rotate: [0, 0.6, 0] }
            : undefined
        }
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <defs>
            <radialGradient id="heroNode" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#00d4ff" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="heroLine" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#00d4ff" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#c850ff" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <g opacity="0.85">
            <motion.path
              d="M80 200 L200 90 L320 200 L200 310 Z"
              stroke="url(#heroLine)"
              strokeWidth="1.2"
              fill="rgba(0,212,255,0.04)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2.2, ease: "easeOut" }}
            />
            <path
              d="M200 90 L200 200 M200 200 L80 200 M200 200 L320 200 M200 200 L200 310"
              stroke="url(#heroLine)"
              strokeWidth="0.8"
              strokeDasharray="4 6"
            />
            {[
              [200, 90],
              [80, 200],
              [320, 200],
              [200, 310],
              [200, 200],
            ].map(([cx, cy], i) => (
              <motion.circle
                key={i}
                cx={cx}
                cy={cy}
                r={i === 4 ? 14 : 9}
                fill={i === 4 ? "url(#heroNode)" : "rgba(0,212,255,0.35)"}
                stroke="#00d4ff"
                strokeOpacity={0.6}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.15 * i, type: "spring", stiffness: 260, damping: 20 }}
              />
            ))}
          </g>
          <text
            x="200"
            y="196"
            textAnchor="middle"
            fill="#7a8ba0"
            fontSize="11"
            fontFamily="JetBrains Mono, monospace"
          >
            x402
          </text>
          <text
            x="200"
            y="212"
            textAnchor="middle"
            fill="#00d4ff"
            fontSize="10"
            fontFamily="JetBrains Mono, monospace"
          >
            ERC-8004
          </text>
        </svg>
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full font-mono text-xs"
          style={{
            background: "rgba(6,10,20,0.75)",
            border: "1px solid rgba(0,212,255,0.25)",
            color: "var(--cyan)",
            boxShadow: "0 0 20px rgba(0,212,255,0.15)",
          }}
          animate={
            floating
              ? { opacity: [0.85, 1, 0.85] }
              : undefined
          }
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ background: "var(--cyan)" }}
          />
          Live · Base mainnet
        </motion.div>
      </motion.div>
    </div>
  );
}
