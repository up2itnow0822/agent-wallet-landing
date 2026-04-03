"use client";

import ScrollReveal from "./ScrollReveal";
import { motion, useReducedMotion } from "framer-motion";

const stats = [
  {
    value: "94",
    title: "Production Skills",
    detail: "ClawPowers Agent · Commerce · Skills · BSL 1.1",
  },
  {
    value: "332+",
    title: "Tests Passing",
    detail: "332 JS tests + 138 Rust tests · 0.77% transaction fee",
  },
  {
    value: "1",
    title: "Patent Pending",
    detail: "USPTO provisional, March 2026 · AI Agent Economy LLC (formation pending)",
  },
];

export default function StatsBar() {
  const reduce = useReducedMotion();

  return (
    <section
      className="relative border-y"
      style={{
        background: "var(--bg-secondary)",
        borderColor: "var(--border)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.title} delay={i * 90}>
              <motion.div
                className="text-center md:text-left rounded-2xl p-6 md:p-8 glass-card h-full"
                whileHover={
                  reduce
                    ? undefined
                    : { y: -4, boxShadow: "0 0 32px rgba(0, 212, 255, 0.15)" }
                }
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
              >
                <div
                  className="font-mono text-4xl md:text-5xl font-black mb-2 tracking-tight"
                  style={{
                    color: "var(--cyan)",
                    textShadow: "0 0 40px rgba(0, 212, 255, 0.35)",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-sm font-bold uppercase tracking-widest mb-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  {stat.title}
                </div>
                <p
                  className="text-sm leading-relaxed max-w-sm mx-auto md:mx-0"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {stat.detail}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
