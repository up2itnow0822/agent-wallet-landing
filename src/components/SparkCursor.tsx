"use client";

import { useEffect, useRef } from "react";

interface Spark {
  el: HTMLDivElement;
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
}

export default function SparkCursor() {
  const orbRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const narrow = window.matchMedia("(max-width: 767px)").matches;
    if (reduce || coarse || narrow) return;

    const orb = orbRef.current;
    const sparks: Spark[] = [];
    const colors = ["#00d4ff", "#c850ff", "#ff6b35", "#e8edf5"];

    let lastX = 0;
    let lastY = 0;
    let orbX = 0;
    let orbY = 0;

    const createSpark = (x: number, y: number, burst = false) => {
      const el = document.createElement("div");
      el.className = "spark";
      const color = colors[Math.floor(Math.random() * colors.length)];
      const size = burst ? Math.random() * 6 + 4 : Math.random() * 4 + 3;
      el.style.cssText = `
        left: ${x}px;
        top: ${y}px;
        background: ${color};
        box-shadow: 0 0 8px ${color};
        width: ${size}px;
        height: ${size}px;
      `;
      document.body.appendChild(el);

      const speed = burst ? 6 : 4;
      sparks.push({
        el,
        x,
        y,
        vx: (Math.random() - 0.5) * speed,
        vy: (Math.random() - 0.5) * speed - (burst ? 2 : 1),
        life: 1,
      });
    };

    const onMove = (e: MouseEvent) => {
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      const speed = Math.sqrt(dx * dx + dy * dy);

      if (speed > 2) {
        const count = Math.min(Math.floor(speed / 6), 3);
        for (let i = 0; i < count; i++) {
          createSpark(e.clientX, e.clientY);
        }
      }

      lastX = e.clientX;
      lastY = e.clientY;
    };

    const onClick = (e: MouseEvent) => {
      for (let i = 0; i < 10; i++) {
        createSpark(e.clientX, e.clientY, true);
      }
    };

    const loop = () => {
      orbX += (lastX - orbX) * 0.18;
      orbY += (lastY - orbY) * 0.18;
      if (orb) {
        orb.style.transform = `translate(${orbX - 10}px, ${orbY - 10}px)`;
      }

      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];
        s.life -= 0.04;
        s.x += s.vx;
        s.y += s.vy;
        s.vy += 0.08;

        if (s.life <= 0) {
          s.el.remove();
          sparks.splice(i, 1);
        } else {
          s.el.style.left = `${s.x}px`;
          s.el.style.top = `${s.y}px`;
          s.el.style.opacity = String(s.life);
          s.el.style.transform = `scale(${0.4 + s.life * 0.6})`;
        }
      }

      rafRef.current = requestAnimationFrame(loop);
    };

    document.body.style.cursor = "none";
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("click", onClick);

    rafRef.current = requestAnimationFrame(loop);

    return () => {
      document.body.style.cursor = "";
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("click", onClick);
      cancelAnimationFrame(rafRef.current);
      sparks.forEach((s) => s.el.remove());
    };
  }, []);

  return (
    <div
      ref={orbRef}
      className="spark-cursor-orb fixed top-0 left-0 pointer-events-none z-[10000]"
      aria-hidden
      style={{
        width: 20,
        height: 20,
        borderRadius: "50%",
        background: "radial-gradient(circle at 30% 30%, #ffffff 0%, #00d4ff 45%, #c850ff 100%)",
        boxShadow: "0 0 16px rgba(0, 212, 255, 0.8), 0 0 32px rgba(200, 80, 255, 0.35)",
        mixBlendMode: "screen",
        willChange: "transform",
      }}
    />
  );
}
