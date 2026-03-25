"use client";

import ScrollReveal from "./ScrollReveal";
import { motion, useReducedMotion } from "framer-motion";

const badges = [
  { label: "AutoGen", sub: "Microsoft ecosystem" },
  { label: "smolagents", sub: "Hugging Face" },
  { label: "Agent Control", sub: "Orchestration" },
];

export default function SocialProof() {
  const reduce = useReducedMotion();

  return (
    <section
      id="social-proof"
      className="relative py-24 md:py-32"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center mb-14">
            <div className="badge mx-auto mb-4">Ecosystem</div>
            <h2 className="section-title mb-4">
              Trusted by the{" "}
              <span className="gradient-text">Ecosystem</span>
            </h2>
            <p className="section-subtitle mx-auto text-center text-balance">
              Verifiable upstream work: merged tooling in NVIDIA NeMo and active
              submissions across major agent frameworks.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <ScrollReveal delay={60}>
            <motion.a
              href="https://github.com/NVIDIA/NeMo-Agent-Toolkit-Examples/pull/17"
              target="_blank"
              rel="noopener noreferrer"
              className="proof-item block no-underline h-full"
              whileHover={reduce ? undefined : { scale: 1.01 }}
            >
              <div
                className="proof-icon shrink-0"
                style={{
                  background: "rgba(0, 212, 255, 0.12)",
                  border: "1px solid rgba(0, 212, 255, 0.25)",
                }}
              >
                <NvidiaMark />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h3
                    className="font-semibold text-base"
                    style={{ color: "var(--text-primary)" }}
                  >
                    NVIDIA NeMo Agent Toolkit
                  </h3>
                  <span
                    className="text-xs font-mono px-2 py-0.5 rounded"
                    style={{
                      background: "rgba(0, 212, 255, 0.12)",
                      border: "1px solid rgba(0, 212, 255, 0.25)",
                      color: "var(--cyan)",
                    }}
                  >
                    PR #17 merged
                  </span>
                </div>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Official NeMo Agent Toolkit examples include an x402 payment
                  tool path — merged as PR #17 on GitHub.{" "}
                  <span style={{ color: "var(--cyan)" }}>View on GitHub →</span>
                </p>
              </div>
            </motion.a>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <div className="proof-item h-full">
              <div
                className="proof-icon shrink-0"
                style={{
                  background: "rgba(200, 80, 255, 0.1)",
                  border: "1px solid rgba(200, 80, 255, 0.22)",
                }}
              >
                <PlatformIcon />
              </div>
              <div>
                <h3
                  className="font-semibold text-base mb-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  Platform submissions
                </h3>
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Integration and submission work is in flight across leading agent
                  runtimes so x402-native payments work where developers already
                  build.
                </p>
                <div className="flex flex-wrap gap-2">
                  {badges.map((b) => (
                    <span
                      key={b.label}
                      className="text-xs font-mono px-3 py-1.5 rounded-lg"
                      style={{
                        background: "rgba(0,0,0,0.35)",
                        border: "1px solid var(--border)",
                        color: "var(--text-primary)",
                      }}
                    >
                      {b.label}
                      <span style={{ color: "var(--text-muted)" }} className="ml-1">
                        · {b.sub}
                      </span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={80}>
          <div
            className="rounded-2xl p-6 md:p-8 text-center glass-card"
            style={{
              borderColor: "rgba(200, 80, 255, 0.2)",
            }}
          >
            <p
              className="text-sm font-mono mb-2"
              style={{ color: "var(--magenta)" }}
            >
              Weekly npm downloads (sum of published packages)
            </p>
            <p
              className="text-3xl md:text-4xl font-black font-mono mb-1"
              style={{
                color: "var(--cyan)",
                textShadow: "0 0 32px rgba(0, 212, 255, 0.35)",
              }}
            >
              ~1,737+
            </p>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
              879 + 232 + 626 / week from agentwallet-sdk, agentpay-mcp, and
              clawpowers respectively — see each npm page for current ranges.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function NvidiaMark() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6 16l6-10 6 10M9 14h6"
        stroke="var(--cyan)"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PlatformIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="3" width="8" height="8" rx="1.5" stroke="var(--magenta)" strokeWidth="1.4" />
      <rect x="13" y="3" width="8" height="8" rx="1.5" stroke="var(--magenta)" strokeWidth="1.4" />
      <rect x="3" y="13" width="18" height="8" rx="1.5" stroke="var(--magenta)" strokeWidth="1.4" />
    </svg>
  );
}
