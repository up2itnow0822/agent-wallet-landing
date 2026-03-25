"use client";

import type { CSSProperties } from "react";
import ScrollReveal from "./ScrollReveal";
import { motion, useReducedMotion } from "framer-motion";

const products = [
  {
    name: "agentwallet-sdk",
    description:
      "Non-custodial AI agent wallets with on-chain spending limits. ERC-6551 TBA, ERC-8004 identity, x402 payments, 17-chain CCTP bridging, Uniswap V3 swaps.",
    tags: ["npm", "879/wk downloads"] as const,
    color: "var(--cyan)",
    npm: "https://www.npmjs.com/package/agentwallet-sdk",
    icon: WalletIcon,
  },
  {
    name: "agentpay-mcp",
    description:
      "Drop-in MCP payment server for Claude Code, Cursor, and any MCP-compatible agent. Non-custodial x402 payments with spending limits.",
    tags: ["npm", "232/wk downloads"] as const,
    color: "var(--magenta)",
    npm: "https://www.npmjs.com/package/agentpay-mcp",
    icon: PayIcon,
  },
  {
    name: "clawpowers",
    description:
      "27 production skills for coding agents. Runtime execution, persistent memory, self-improvement, and autonomous payments.",
    tags: ["npm", "626/wk downloads"] as const,
    color: "var(--orange)",
    npm: "https://www.npmjs.com/package/clawpowers",
    icon: ClawIcon,
  },
];

export default function Products() {
  const reduce = useReducedMotion();

  return (
    <section
      id="products"
      className="relative py-24 md:py-32"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center mb-14 md:mb-20">
            <div className="badge mx-auto mb-4">Production stack</div>
            <h2 className="section-title mb-4">
              Built for Agents.{" "}
              <span className="gradient-text">Powered by Crypto.</span>
            </h2>
            <p className="section-subtitle mx-auto text-center text-balance">
              Three open-source packages you can install today — real npm stats,
              real on-chain infrastructure, no vaporware.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {products.map((p, i) => {
            const Icon = p.icon;
            return (
              <ScrollReveal key={p.name} delay={i * 100}>
                <motion.article
                  className="glass-card p-6 md:p-8 h-full flex flex-col gap-5 group"
                  whileHover={
                    reduce
                      ? undefined
                      : { y: -6, transition: { type: "spring", stiffness: 400, damping: 25 } }
                  }
                >
                  <div className="flex items-start justify-between gap-3">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-shadow"
                      style={iconFrameStyle(p.color)}
                    >
                      <Icon />
                    </div>
                    <a
                      href={p.npm}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="product-tag no-underline hover:brightness-125"
                    >
                      View on npm ↗
                    </a>
                  </div>

                  <h3
                    className="font-mono font-bold text-lg tracking-tight"
                    style={{ color: p.color }}
                  >
                    {p.name}
                  </h3>

                  <p
                    className="text-[0.95rem] leading-relaxed flex-1"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {p.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="product-tag"
                        style={{
                          background: `${p.color}12`,
                          borderColor: `${p.color}30`,
                          color: p.color,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={p.npm}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-sm px-4 py-3 rounded-xl no-underline transition-all duration-300 flex items-center gap-2 mt-auto"
                    style={{
                      background: "rgba(0,0,0,0.35)",
                      border: "1px solid rgba(0,212,255,0.15)",
                      color: "var(--text-secondary)",
                    }}
                  >
                    <span style={{ color: "var(--text-muted)" }}>$</span>
                    npm install {p.name}
                  </a>
                </motion.article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function iconFrameStyle(color: string): CSSProperties {
  if (color.includes("magenta")) {
    return {
      background: "rgba(200, 80, 255, 0.1)",
      border: "1px solid rgba(200, 80, 255, 0.35)",
      boxShadow: "0 0 24px rgba(200, 80, 255, 0.15)",
    };
  }
  if (color.includes("orange")) {
    return {
      background: "rgba(255, 107, 53, 0.1)",
      border: "1px solid rgba(255, 107, 53, 0.35)",
      boxShadow: "0 0 24px rgba(255, 107, 53, 0.12)",
    };
  }
  return {
    background: "rgba(0, 212, 255, 0.1)",
    border: "1px solid rgba(0, 212, 255, 0.35)",
    boxShadow: "0 0 24px rgba(0, 212, 255, 0.15)",
  };
}

function WalletIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 7a3 3 0 013-3h11a2 2 0 012 2v3M4 7v12a2 2 0 002 2h14a2 2 0 002-2V10a2 2 0 00-2-2H6a2 2 0 00-2 2v1"
        stroke="var(--cyan)"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="17" cy="14" r="1.5" fill="var(--cyan)" />
    </svg>
  );
}

function PayIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect
        x="3"
        y="6"
        width="18"
        height="12"
        rx="2"
        stroke="var(--magenta)"
        strokeWidth="1.6"
      />
      <path d="M3 11h18" stroke="var(--magenta)" strokeWidth="1.6" />
      <path
        d="M8 15h3"
        stroke="var(--magenta)"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ClawIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 3v4M8 5l2 3M16 5l-2 3M6 12c0 2 1.5 4 3 5l3 4 3-4c1.5-1 3-3 3-5"
        stroke="var(--orange)"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 14l-2 5M15 14l2 5"
        stroke="var(--orange)"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
