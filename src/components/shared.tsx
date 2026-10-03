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

/** Scroll reveal — fast, no blank flash, no stuck opacity 0 */
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
      return r.top < vh + 120 && r.bottom > -60;
    };

    let raf = requestAnimationFrame(() => {
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
        { threshold: 0, rootMargin: "60px 0px 30% 0px" }
      );
      io.observe(el);

      const safety = window.setTimeout(() => setOn(true), 900);

      const onScroll = () => {
        if (isVisible()) {
          setOn(true);
          io.disconnect();
          window.clearTimeout(safety);
        }
      };
      window.addEventListener("scroll", onScroll, { passive: true });

      (el as HTMLElement & { __revealCleanup?: () => void }).__revealCleanup = () => {
        io.disconnect();
        window.clearTimeout(safety);
        window.removeEventListener("scroll", onScroll);
      };
    });

    return () => {
      cancelAnimationFrame(raf);
      (el as HTMLElement & { __revealCleanup?: () => void }).__revealCleanup?.();
    };
  }, [on]);

  return (
    <Tag
      ref={ref as never}
      className={`reveal ${on ? "reveal-on" : ""} ${className}`}
      style={{ transitionDelay: on ? `${Math.min(delay, 200)}ms` : "0ms" } as CSSProperties}
    >
      {children}
    </Tag>
  );
}

/** Count-up — starts on mount if immediate, else when in view. Never stuck at 0. */
export function CountUp({
  end,
  suffix = "",
  decimals = 0,
  duration = 1200,
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
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (started) return;

    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVal(end);
      setStarted(true);
      setDone(true);
      return;
    }

    if (immediate) {
      setStarted(true);
      return;
    }

    const el = ref.current;
    if (!el) {
      setStarted(true);
      return;
    }

    const visible = () => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || 800;
      return r.top < vh && r.bottom > 0;
    };

    if (visible()) {
      setStarted(true);
      return;
    }

    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setStarted(true);
          io.disconnect();
        }
      },
      { threshold: 0, rootMargin: "80px 0px" }
    );
    io.observe(el);

    const t = window.setTimeout(() => setStarted(true), 600);

    return () => {
      io.disconnect();
      window.clearTimeout(t);
    };
  }, [started, immediate, end]);

  useEffect(() => {
    if (!started || done) return;
    const t0 = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(end * eased);
      if (p < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setVal(end);
        setDone(true);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, end, duration, done]);

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
