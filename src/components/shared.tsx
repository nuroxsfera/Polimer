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

/** Scroll-in reveal — once, never stuck at opacity 0 */
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

    const isVisible = () => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      return r.top < vh * 1.15 && r.bottom > -40;
    };

    if (isVisible()) {
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
      { threshold: 0, rootMargin: "40px 0px 25% 0px" }
    );
    io.observe(el);

    const safety = window.setTimeout(() => {
      if (isVisible()) setOn(true);
    }, 1800);

    const onScroll = () => {
      if (isVisible()) {
        setOn(true);
        io.disconnect();
        window.clearTimeout(safety);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      io.disconnect();
      window.clearTimeout(safety);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [on]);

  return (
    <Tag
      ref={ref as never}
      className={`reveal ${on ? "reveal-on" : ""} ${className}`}
      style={{ transitionDelay: on ? `${delay}ms` : "0ms" } as CSSProperties}
    >
      {children}
    </Tag>
  );
}

/** Count-up when in view */
export function CountUp({
  end,
  suffix = "",
  decimals = 0,
  duration = 1400,
  className = "",
}: {
  end: number;
  suffix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setStarted(true);
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const t0 = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(end * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
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
