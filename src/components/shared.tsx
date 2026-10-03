"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

export { A, PHONE, PHONE_TEL, ADDRESS, EMAIL } from "./assets";

export function Arrow({ className = "size-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Marker({ label, light }: { label: string; light?: boolean }) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="size-[7px] animate-status rounded-full bg-[#ff5a36]" />
      <span className={`text-[11px] uppercase tracking-wide ${light ? "text-[#faf9f5]" : "text-[#101412]"}`}>{label}</span>
    </div>
  );
}

/**
 * Scroll reveal — same motion as long landing:
 * opacity 0 until in view, then CSS keyframe reveal-up 0.9s.
 */
export function Reveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "article";
}) {
  const ref = useRef<HTMLElement>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || on) return;

    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setOn(true);
      return;
    }

    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setOn(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -5% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [on]);

  return (
    <Tag
      ref={ref as never}
      className={`reveal ${on ? "reveal-on" : ""} ${className}`}
      style={delay > 0 && on ? ({ animationDelay: `${delay}ms` } as CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
}

/** Count-up when in view (or immediately for hero) */
export function CountUp({
  end,
  suffix = "",
  decimals = 0,
  duration = 1600,
  className = "",
  immediate = false,
}: {
  end: number;
  suffix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
  immediate?: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (started) return;

    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVal(end);
      setStarted(true);
      return;
    }

    if (immediate) {
      const t = window.setTimeout(() => setStarted(true), 80);
      return () => window.clearTimeout(t);
    }

    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setStarted(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [started, immediate, end]);

  useEffect(() => {
    if (!started) return;
    const t0 = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(end * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
      else setVal(end);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, end, duration]);

  const display =
    decimals > 0
      ? val.toFixed(decimals).replace(".", ",")
      : Math.round(val).toLocaleString("ru-RU");

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
}
