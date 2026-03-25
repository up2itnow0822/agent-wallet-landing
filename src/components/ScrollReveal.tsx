"use client";

import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
} from "framer-motion";
import type { ReactNode } from "react";

interface ScrollRevealProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Stagger index for parent-controlled lists */
  index?: number;
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  index = 0,
  ...rest
}: ScrollRevealProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: "some" }}
      transition={
        reduce
          ? { duration: 0 }
          : {
              duration: 0.55,
              delay: delay / 1000 + index * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }
      }
      {...rest}
    >
      {children}
    </motion.div>
  );
}
