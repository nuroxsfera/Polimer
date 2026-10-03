"use client";

import { A, Arrow, CountUp, PHONE, PHONE_TEL } from "../shared";

function FadeImg({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className={`img-fade ${className ?? ""}`}
      onLoad={(e) => e.currentTarget.classList.add("loaded")}
      onError={(e) => {
        e.currentTarget.style.opacity = "0.25";
        e.currentTarget.classList.add("loaded");
      }}
    />
  );
}

export function HeroDecision() {
  return (
    <section className="relative overflow-hidden bg-[#101412]">
      <div className="pointer-events-none absolute -right-16 top-24 h-[320px] w-[320px] rounded-full bg-[#ff5a36]/12 blur-[90px]" />

      <div className="relative mx-auto grid max-w-[1100px] gap-10 px-4 pb-12 pt-[5.5rem] sm:px-6 sm:pb-16 sm:pt-28 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-12 lg:px-10 lg:pb-20">
        <div>
          <div className="hero-in mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5">
            <span className="size-1.5 animate-status rounded-full bg-[#d7ff55]" />
            <span className="text-[11px] tracking-wide text-[#cdd3cf]">
              Новосибирск · Переездная 1 · приём заявок
            </span>
          </div>

          <p className="hero-in hero-in-d1 text-[13px] font-medium uppercase tracking-[0.12em] text-[#ff5a36]">
            ПолимерКолор
          </p>
          <h1 className="hero-in hero-in-d2 mt-2 text-[clamp(26px,5.2vw,42px)] font-semibold leading-[1.12] tracking-tight text-[#faf9f5]">
            Полимерно-порошковое покрытие
            <span className="mt-1 block font-medium text-[#aeb7b1]">крупногабаритных изделий</span>
          </h1>
          <p className="hero-in hero-in-d3 mt-4 max-w-[520px] text-[15px] leading-[1.55] text-[#9da7a1] sm:text-[17px]">
            Изделия длиной до&nbsp;12&nbsp;м без разборки и резки. Параметры камеры ППП: 12×3×3&nbsp;м, грузоподъёмность до&nbsp;3,5&nbsp;т.
          </p>

          <div className="hero-in hero-in-d4 mt-8 grid grid-cols-2 gap-2.5 sm:grid-cols-4 sm:gap-3">
            {[
              { n: 12, s: " м", l: "длина" },
              { n: 3, s: "×3 м", l: "сечение" },
              { n: 3.5, s: " т", l: "нагрузка", dec: 1 },
              { n: 2, s: " дня", l: "от приёмки" },
            ].map((x) => (
              <div
                key={x.l}
                className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] px-3 py-4 backdrop-blur-sm transition duration-300 hover:border-white/20 hover:bg-white/[0.06]"
              >
                <p className="text-[26px] font-semibold leading-none tracking-tight text-[#faf9f5] sm:text-[28px]">
                  <CountUp end={x.n} suffix={x.s} decimals={x.dec ?? 0} immediate duration={1100} />
                </p>
                <p className="mt-2 text-[11px] uppercase tracking-wide text-[#6f7973]">{x.l}</p>
              </div>
            ))}
          </div>

          <div className="hero-in hero-in-d5 mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
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
              Параметры камеры
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              className="text-center text-[14px] text-[#8a948e] underline-offset-4 transition hover:text-[#faf9f5] hover:underline sm:text-left"
            >
              {PHONE}
            </a>
          </div>
        </div>

        <div className="hero-in hero-in-d3 relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-white/10 bg-[#151a17] sm:aspect-[5/6] lg:aspect-[4/5]">
            <FadeImg src={A.capacity} alt="Полимерная камера" className="size-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#101412] via-[#101412]/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
              <p className="text-[11px] uppercase tracking-wider text-[#aeb7b1]">Камера ППП</p>
              <p className="mt-1 text-[20px] font-medium text-white">12 × 3 × 3 м</p>
              <p className="mt-1 text-[13px] text-[#9da7a1]">до 3,5 т · без разборки и резки</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/8">
        <div className="mx-auto flex max-w-[1100px] flex-wrap items-center justify-between gap-4 px-4 py-4 text-[12px] text-[#7a847e] sm:px-6 lg:px-10">
          <span>Для заводов МК, стройки, сварки</span>
          <span className="hidden h-3 w-px bg-white/15 sm:block" />
          <span>Ответ по расчёту — в рабочий день</span>
          <span className="hidden h-3 w-px bg-white/15 sm:block" />
          <span>RAL / каталог по запросу</span>
        </div>
      </div>
    </section>
  );
}
