"use client";

import ScrollReveal from "./ScrollReveal";
import { motion, useReducedMotion } from "framer-motion";

const features = [
  {
    title: "Non-Custodial Wallet",
    description:
      "ERC-6551 token-bound accounts + ERC-8004 identity. Agents hold their own keys. x402 micropayments built in.",
    Icon: ShieldIcon,
  },
  {
    title: "Self-Improving RSI",
    description:
      "4-tier recursive self-improvement engine with full user control. Agents measure, hypothesize, mutate, and evolve.",
    Icon: SlidersIcon,
  },
  {
    title: "Cross-Chain Identity",
    description:
      "UAID + ERC-8004 on-chain identity across chains. Agents build portable reputation through verified transactions.",
    Icon: ChainIcon,
  },
  {
    title: "Agent Access Control",
    description:
      "Guard middleware filters agents by identity and reputation before they touch your site or API. Pay accepts x402.",
    Icon: HttpIcon,
  },
  {
    title: "94 Built-In Skills",
    description:
      "Production skills for OpenClaw, Hermes, LangChain, CrewAI, and AutoGen. 332+ tests. Payments and wallet built in.",
    Icon: GridIcon,
  },
  {
    title: "Rust Core (v1.1)",
    description:
      "High-performance Rust core coming in v1.1. 138 Rust tests. BSL 1.1 licensed — use freely, compete commercially with a license.",
    Icon: IdIcon,
  },
];

export default function Features() {
  const reduce = useReducedMotion();

  return (
    <section
      id="features"
      className="relative py-24 md:py-32"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center mb-14 md:mb-20">
            <div className="badge mx-auto mb-4">Why it matters</div>
            <h2 className="section-title mb-4">
              Why Agents Need{" "}
              <span className="gradient-text">Their Own Wallets</span>
            </h2>
            <p className="section-subtitle mx-auto text-center text-balance">
              Production-grade controls for autonomous systems that move real
              value — built on open standards agents can reason about.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {features.map((f, i) => {
            const Icon = f.Icon;
            const content = (
              <>
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    background: "rgba(0, 212, 255, 0.1)",
                    border: "1px solid rgba(0, 212, 255, 0.2)",
                  }}
                >
                  <Icon />
                </div>
                <h3
                  className="font-semibold text-lg mb-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  {f.title}
                </h3>
                <p
                  className="text-[0.95rem] leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {f.description}
                </p>
              </>
            );

            return (
              <ScrollReveal key={f.title} delay={i * 70}>
                <motion.div
                  className="glass-card p-6 md:p-7 h-full"
                  whileHover={
                    reduce
                      ? undefined
                      : {
                          y: -5,
                          boxShadow: "0 0 40px rgba(0, 212, 255, 0.12)",
                        }
                  }
                >
                  {content}
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ShieldIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 3l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V7l8-4z"
        stroke="var(--cyan)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SlidersIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 15h16M4 9h16M10 3v4M14 17v4M6 19v-2M18 5v2" stroke="var(--cyan)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function HttpIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="4" y="4" width="16" height="16" rx="2" stroke="var(--cyan)" strokeWidth="1.5" />
      <path d="M8 8h8M8 12h5" stroke="var(--cyan)" strokeWidth="1.5" strokeLinecap="round" />
      <text x="15" y="17" fill="var(--orange)" fontSize="6" fontFamily="monospace" fontWeight="bold">
        402
      </text>
    </svg>
  );
}

function ChainIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="8" cy="8" r="3" stroke="var(--cyan)" strokeWidth="1.5" />
      <circle cx="16" cy="16" r="3" stroke="var(--magenta)" strokeWidth="1.5" />
      <path d="M10.5 10.5l5 5" stroke="var(--cyan)" strokeWidth="1.2" strokeDasharray="2 2" />
    </svg>
  );
}

function IdIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="5" y="3" width="14" height="18" rx="2" stroke="var(--cyan)" strokeWidth="1.5" />
      <circle cx="12" cy="10" r="2.5" stroke="var(--cyan)" strokeWidth="1.3" />
      <path d="M8 16c0-2 1.8-3 4-3s4 1 4 3" stroke="var(--cyan)" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function GridIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 4h7v7H4V4zm9 0h7v7h-7V4zM4 13h7v7H4v-7zm9 0h7v7h-7v-7z" stroke="var(--cyan)" strokeWidth="1.3" strokeLinejoin="round" />
    </svg>
  );
}
