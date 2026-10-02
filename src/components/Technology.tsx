"use client";

import { useEffect, useRef, useState } from "react";
import { A, Marker, Reveal } from "./shared";

/** Ring + number: count up to target in sync with arc fill */
function StatRing({
  value,
  suffix = "",
  label,
  percent,
  decimals = 1,
}: {
  value: number;
  suffix?: string;
  label: string;
  percent: number; // 0–100 for ring fill
  decimals?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);
  const [n, setN] = useState(0);
  const [p, setP] = useState(0);
  const r = 34;
  const circ = 2 * Math.PI * r;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setOn(true);
      },
      { threshold: 0.45 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!on) return;
    const duration = 1800;
    const t0 = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - t0) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setN(value * eased);
      setP(percent * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
      else {
        setN(value);
        setP(percent);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [on, value, percent]);

  const display =
    decimals > 0
      ? n.toFixed(decimals).replace(".", ",")
      : Math.round(n).toString();

  return (
    <div
      ref={ref}
      className="flex h-[116px] items-center justify-between rounded-[28px] bg-[#bfe7d2] p-[22px]"
    >
      <div>
        <p className="text-[30px] text-[#101412] tabular-nums">
          {display}
          {suffix}
        </p>
        <p className="text-[11px] text-[#202824]">{label}</p>
      </div>
      <div className="relative size-[80px]">
        <svg className="size-full -rotate-90" viewBox="0 0 80 80">
          <circle cx="40" cy="40" r={r} fill="none" stroke="rgba(16,20,18,0.12)" strokeWidth="7" />
          <circle
            cx="40"
            cy="40"
            r={r}
            fill="none"
            stroke="#101412"
            strokeWidth="7"
            strokeLinecap="round"
            strokeDasharray={circ}
            strokeDashoffset={circ * (1 - p / 100)}
            style={{ transition: "none" }}
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-[13px] font-semibold tabular-nums text-[#101412]">
          {Math.round(p)}%
        </span>
      </div>
    </div>
  );
}

export function Technology() {
  const steps = [
    { n: "01", t: "Подготовленный металл", d: "Обезжиривание, травление и конверсионный слой." },
    { n: "02", t: "Порошковая матрица", d: "Заряженные частицы равномерно покрывают геометрию." },
    { n: "03", t: "Полимерная оболочка", d: "При 180–200 °C слой сшивается в монолитную плёнку.", a: true },
  ];

  return (
    <section id="Технология" className="bg-[#101412] px-6 py-20 md:px-[72px] md:py-28">
      <div className="mx-auto max-w-[1296px]">
        <Reveal className="mb-12 flex flex-col gap-8 lg:mb-[68px] lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[700px]">
            <Marker label="Система покрытия" light />
            <h2 className="mt-5 text-[clamp(32px,4vw,52px)] leading-[1.06] text-[#faf9f5]">
              Не краска поверх металла. Новая поверхность.
            </h2>
          </div>
          <p className="max-w-[400px] text-[16px] leading-[1.55] text-[#aeb7b1]">
            Электростатическое нанесение и контролируемая полимеризация создают молекулярно связанную оболочку — плотную, эластичную и одинаковую на плоскостях, кромках и сложной геометрии.
          </p>
        </Reveal>
        <div className="flex flex-col gap-6 lg:flex-row">
          <Reveal className="relative h-[360px] overflow-hidden rounded-[40px] bg-[#171e1a] p-7 lg:h-[600px] lg:w-[720px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={A.tech}
              alt=""
              className="absolute inset-0 size-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="relative z-10 flex h-full flex-col justify-between">
              <span className="w-fit rounded-full border border-white/13 bg-[rgba(16,20,18,0.73)] px-3.5 py-2 text-[10px] uppercase text-[#faf9f5]">
                Разнесённая структура · 120×
              </span>
              <div className="flex flex-wrap gap-2.5">
                {["60–120 μm", "Δt ±3°C", "Faraday-safe"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/13 bg-white/5 px-4 py-2.5 text-[13px] text-[#faf9f5]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
          <div className="flex flex-1 flex-col gap-3">
            {steps.map((l, i) => (
              <Reveal key={l.n} delay={i * 100}>
                <div
                  className={`card-lift flex flex-1 items-center gap-5 rounded-[28px] border p-6 transition-all duration-300 hover:scale-[1.02] ${
                    l.a
                      ? "border-[#ff5a36] bg-[#ff5a36]"
                      : "border-white/8 bg-white/4 hover:border-white/20 hover:bg-white/8"
                  }`}
                >
                  <div
                    className={`flex size-14 shrink-0 items-center justify-center rounded-full text-[13px] font-medium ${
                      l.a ? "bg-white text-[#ff5a36]" : "bg-white/10 text-[#faf9f5]"
                    }`}
                  >
                    {l.n}
                  </div>
                  <div>
                    <p className={`text-[21px] ${l.a ? "text-white" : "text-[#faf9f5]"}`}>{l.t}</p>
                    <p className={`text-[12px] leading-[1.45] ${l.a ? "text-[#ffe3dc]" : "text-[#9ea8a2]"}`}>
                      {l.d}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
            <Reveal delay={300}>
              <StatRing
                value={1.5}
                suffix="×"
                label="эластичнее жидких покрытий"
                percent={65}
                decimals={1}
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
