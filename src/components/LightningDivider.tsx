"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function LightningDivider() {
  const reduce = useReducedMotion();

  return (
    <div className="w-full py-8 md:py-10" aria-hidden="true">
      <div className="relative h-px max-w-7xl mx-auto px-6">
        <motion.div
          className="lightning-divider h-[2px] rounded-full"
          animate={
            reduce
              ? undefined
              : {
                  opacity: [0.65, 1, 0.65],
                  filter: [
                    "blur(0px) brightness(1)",
                    "blur(0.5px) brightness(1.15)",
                    "blur(0px) brightness(1)",
                  ],
                }
          }
          transition={{
            duration: 3.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute inset-x-[10%] -top-2 h-4 pointer-events-none rounded-full opacity-40"
          style={{
            background:
              "linear-gradient(90deg, transparent, var(--cyan), var(--magenta), var(--cyan), transparent)",
            filter: "blur(12px)",
          }}
          animate={reduce ? undefined : { opacity: [0.25, 0.55, 0.25] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
}
