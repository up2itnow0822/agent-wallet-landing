"use client";

import ScrollReveal from "./ScrollReveal";
import { motion, useReducedMotion } from "framer-motion";

const flowSteps = [
  { n: 1, label: "Agent", text: "HTTP request → service" },
  { n: 2, label: "Service", text: "402 Payment Required" },
  { n: 3, label: "Wallet", text: "check_spending() → budget OK" },
  { n: 4, label: "Chain", text: "send_payment() → tx signed" },
  { n: 5, label: "Agent", text: "Retry → 200 OK + body" },
];

const mcpLines: { text: string; cls: string }[][] = [
  [{ text: "{", cls: "default" }],
  [
    { text: '  "mcpServers"', cls: "variable" },
    { text: ": ", cls: "default" },
    { text: "{", cls: "default" },
  ],
  [
    { text: '    "agentpay"', cls: "variable" },
    { text: ": ", cls: "default" },
    { text: "{", cls: "default" },
  ],
  [
    { text: '      "command"', cls: "variable" },
    { text: ": ", cls: "default" },
    { text: '"npx"', cls: "string" },
    { text: ",", cls: "default" },
  ],
  [
    { text: '      "args"', cls: "variable" },
    { text: ": ", cls: "default" },
    { text: '["-y", "agentpay-mcp"]', cls: "string" },
    { text: ",", cls: "default" },
  ],
  [
    { text: '      "env"', cls: "variable" },
    { text: ": ", cls: "default" },
    { text: "{ ", cls: "default" },
    { text: "/* RPC + wallet keys */", cls: "comment" },
    { text: " }", cls: "default" },
  ],
  [{ text: "    }", cls: "default" }],
  [{ text: "  }", cls: "default" }],
  [{ text: "}", cls: "default" }],
];

export default function Architecture() {
  const reduce = useReducedMotion();

  return (
    <section
      id="how-it-works"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: "var(--bg-primary)" }}
    >
      <div
        className="absolute top-24 left-1/2 -translate-x-1/2 w-px h-40 pointer-events-none opacity-50"
        style={{
          background: "linear-gradient(180deg, var(--cyan), transparent)",
          boxShadow: "0 0 20px var(--cyan)",
        }}
        aria-hidden
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-12">
            <motion.div
              className="mx-auto mb-6 flex justify-center"
              animate={reduce ? undefined : { y: [0, -6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              aria-hidden
            >
              <BoltSvg />
            </motion.div>
            <div className="badge mx-auto mb-4">Payment rail</div>
            <h2 className="section-title mb-4">
              How It Works —{" "}
              <span className="gradient-text">x402 + MCP</span>
            </h2>
            <p className="section-subtitle mx-auto text-center text-balance">
              Agents negotiate HTTP 402 natively, settle on-chain with
              non-custodial controls, then drop the same flow into Claude Code
              or Cursor via MCP.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="glass-card p-6 md:p-10 mb-10 md:mb-14">
            <h3
              className="text-center font-mono text-sm uppercase tracking-widest mb-8"
              style={{ color: "var(--cyan)" }}
            >
              x402 machine payment flow
            </h3>
            <div className="flex flex-col lg:flex-row lg:items-stretch gap-4 lg:gap-2">
              {flowSteps.map((step, i) => (
                <div key={step.n} className="flex flex-col lg:flex-row lg:items-center flex-1 gap-4 lg:gap-2">
                  <motion.div
                    className="flex-1 rounded-xl p-4 text-center lg:text-left"
                    style={{
                      background: "rgba(0,0,0,0.28)",
                      border: "1px solid rgba(0,212,255,0.15)",
                    }}
                    initial={reduce ? false : { opacity: 0, y: 12 }}
                    whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <div className="flex items-center gap-2 justify-center lg:justify-start mb-2">
                      <span className="step-number !w-8 !h-8 !text-xs">{step.n}</span>
                      <span
                        className="font-mono font-bold text-sm"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {step.label}
                      </span>
                    </div>
                    <p
                      className="text-sm font-mono"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {step.text}
                    </p>
                  </motion.div>
                  {i < flowSteps.length - 1 && (
                    <div
                      className="hidden lg:block flow-connector self-center mx-1 opacity-60"
                      aria-hidden
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <ScrollReveal delay={80}>
            <div>
              <h3
                className="font-semibold text-lg mb-4 flex items-center gap-2"
                style={{ color: "var(--text-primary)" }}
              >
                <span style={{ color: "var(--cyan)" }}>⬢</span> Drop-in MCP config
              </h3>
              <p className="text-sm mb-4" style={{ color: "var(--text-secondary)" }}>
                Add <span className="font-mono text-[var(--cyan)]">agentpay-mcp</span>{" "}
                to your IDE MCP settings — agents get x402 payment tools without
                a custom server.
              </p>
              <div className="code-block text-[0.8rem] md:text-[0.82rem]">
                <div
                  className="flex items-center gap-2 mb-3 pb-3"
                  style={{ borderBottom: "1px solid rgba(0,212,255,0.15)" }}
                >
                  <span
                    className="text-xs font-mono px-2 py-1 rounded"
                    style={{
                      background: "rgba(0,212,255,0.1)",
                      color: "var(--cyan)",
                      border: "1px solid rgba(0,212,255,0.2)",
                    }}
                  >
                    .cursor/mcp.json
                  </span>
                  <a
                    href="https://www.npmjs.com/package/agentpay-mcp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto text-xs font-mono no-underline"
                    style={{ color: "var(--magenta)" }}
                  >
                    npm →
                  </a>
                </div>
                <pre className="font-mono whitespace-pre-wrap break-words">
                  {mcpLines.map((line, li) => (
                    <div key={li} className="flex gap-3">
                      <span className="select-none opacity-40 w-5 text-right shrink-0">{li + 1}</span>
                      <span>
                        {line.map((tok, ti) => (
                          <span key={ti} className={`code-${tok.cls}`}>
                            {tok.text}
                          </span>
                        ))}
                      </span>
                    </div>
                  ))}
                </pre>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={140}>
            <div className="glass-card p-6 md:p-8 h-full">
              <h3
                className="font-semibold text-lg mb-4"
                style={{ color: "var(--text-primary)" }}
              >
                Why this wiring wins
              </h3>
              <ul className="space-y-4 text-[0.95rem]" style={{ color: "var(--text-secondary)" }}>
                <li className="flex gap-3">
                  <span style={{ color: "var(--cyan)" }}>✓</span>
                  <span>
                    <strong style={{ color: "var(--text-primary)" }}>402 is a first-class HTTP state</strong>{" "}
                    — agents already speak REST; payment negotiation stays in-band.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span style={{ color: "var(--cyan)" }}>✓</span>
                  <span>
                    <strong style={{ color: "var(--text-primary)" }}>MCP is the IDE lingua franca</strong>{" "}
                    — same tools in Claude Code, Cursor, and compatible hosts.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span style={{ color: "var(--cyan)" }}>✓</span>
                  <span>
                    Read the protocol at{" "}
                    <a
                      href="https://x402.org"
                      className="font-mono"
                      style={{ color: "var(--cyan)" }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      x402.org
                    </a>{" "}
                    and install from{" "}
                    <a
                      href="https://www.npmjs.com/package/agentwallet-sdk"
                      className="font-mono"
                      style={{ color: "var(--cyan)" }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      npm
                    </a>
                    .
                  </span>
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function BoltSvg() {
  return (
    <svg width="48" height="72" viewBox="0 0 48 72" fill="none" aria-hidden>
      <defs>
        <linearGradient id="boltGrad" x1="24" y1="0" x2="24" y2="72">
          <stop stopColor="#00d4ff" />
          <stop offset="1" stopColor="#c850ff" />
        </linearGradient>
      </defs>
      <path
        d="M26 4L12 34h10l-6 34 26-40H30l4-24z"
        stroke="url(#boltGrad)"
        strokeWidth="2"
        fill="rgba(0,212,255,0.08)"
        style={{ filter: "drop-shadow(0 0 12px rgba(0,212,255,0.6))" }}
      />
    </svg>
  );
}
