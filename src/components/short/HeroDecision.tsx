"use client";

import { Arrow, CountUp, PHONE, PHONE_TEL } from "../shared";

export function HeroDecision() {
  return (
    <section className="relative overflow-hidden bg-[#101412]">
      <div className="pointer-events-none absolute -right-16 top-24 h-[320px] w-[320px] rounded-full bg-[#ff5a36]/12 blur-[90px]" />

      <div className="relative mx-auto max-w-[1100px] px-4 pb-12 pt-[5.5rem] sm:px-6 sm:pb-16 sm:pt-28 lg:px-10 lg:pb-20">
        <div className="max-w-[720px]">
          <div className="hero-in mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5">
            <span className="size-1.5 animate-status rounded-full bg-[#d7ff55]" />
            <span className="text-[11px] tracking-wide text-[#cdd3cf]">
              Новосибирск · Переездная 1
            </span>
          </div>

          <p className="hero-in hero-in-d1 text-[13px] font-medium uppercase tracking-[0.12em] text-[#ff5a36]">
            ПолимерКолор
          </p>
          <h1 className="hero-in hero-in-d2 mt-2 text-[clamp(28px,5.5vw,48px)] font-semibold leading-[1.1] tracking-tight text-[#faf9f5]">
            Полимерно-порошковое покрытие
            <span className="mt-1 block font-medium text-[#aeb7b1]">крупногабаритных изделий</span>
          </h1>
          <p className="hero-in hero-in-d3 mt-5 max-w-[540px] text-[16px] leading-[1.55] text-[#9da7a1] sm:text-[18px]">
            Изделия длиной до 12&nbsp;м без разборки и резки. Камера ППП 12×3×3&nbsp;м,
            грузоподъёмность до 3,5&nbsp;т. Новосибирск.
          </p>

          <div className="hero-in hero-in-d4 mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="btn-lift flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-[#ff5a36] px-7 text-[15px] font-medium text-white shadow-[0_12px_40px_-10px_rgba(255,90,54,0.55)]"
            >
              Получить расчёт <Arrow className="size-4" />
            </a>
            <a
              href="#kamera"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#kamera")?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="btn-lift flex min-h-[52px] items-center justify-center gap-2 rounded-full border border-white/20 px-6 text-[14px] text-[#e8ece9] hover:border-white/40 hover:bg-white/5"
            >
              Характеристики
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              className="text-center text-[14px] text-[#8a948e] underline-offset-4 transition hover:text-[#faf9f5] hover:underline sm:text-left"
            >
              {PHONE}
            </a>
          </div>
        </div>

        <div className="hero-in hero-in-d5 mt-12 grid grid-cols-2 gap-2.5 border-t border-white/10 pt-8 sm:grid-cols-4 sm:gap-3">
          {[
            { n: 12, s: " м", l: "длина изделий" },
            { n: 3.5, s: " т", l: "на крюке", dec: 1 },
            { n: 3, s: "×3 м", l: "камера ППП" },
            { n: 2, s: " дня", l: "от приёмки" },
          ].map((x) => (
            <div key={x.l} className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-3.5 sm:px-4">
              <p className="text-[22px] font-semibold leading-none tracking-tight text-[#faf9f5] sm:text-[26px]">
                <CountUp end={x.n} suffix={x.s} decimals={x.dec ?? 0} immediate duration={1100} />
              </p>
              <p className="mt-1.5 text-[11px] uppercase tracking-wide text-[#6f7973]">{x.l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
