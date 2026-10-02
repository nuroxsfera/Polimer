"use client";

import { A, Arrow, Marker, CountUp } from "./shared";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#101412] pt-16 sm:pt-20 md:pt-24">
      <div className="relative mx-auto max-w-[1440px]">
        {/* Navbar is fixed site-wide in Navbar.tsx */}
        <div className="pointer-events-none absolute right-0 top-[100px] z-10 hidden size-[min(680px,44vw)] rounded-[40px] opacity-95 lg:block animate-float">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={A.hero} alt="" className="size-full rounded-[40px] object-cover" />
          <div className="pointer-events-none absolute inset-0 rounded-[40px] bg-[radial-gradient(circle_at_50%_40%,rgba(255,90,54,0.18),transparent_60%)] animate-glow" />
        </div>

        <div className="relative z-20 flex gap-16 px-4 pb-8 pt-10 sm:px-6 sm:pb-10 sm:pt-14 md:px-[72px] md:pt-[60px]">
          <div className="flex w-full max-w-[680px] flex-col gap-5 sm:gap-6 md:gap-[30px]">
            <Marker label="Порошковая окраска · Новосибирск" light />
            <h1 className="animate-reveal text-[clamp(28px,8vw,72px)] font-normal leading-[1.05] text-[#faf9f5]">
              Длинномер и крупногабарит — целиком
            </h1>
            <p className="animate-reveal delay-200 max-w-[560px] text-[15px] leading-[1.55] text-[#b8c0bb] sm:text-[17px] md:text-[19px]">
              Печь ППО до 12&nbsp;м · 3×3&nbsp;м · до 1,5&nbsp;т. Окрашиваем металлоизделия без разборки и порезки. Качественная полимеризация, прочное покрытие, сроки от 2 дней.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-3.5">
              <a
                href="#contact"
                className="btn-lift flex h-12 w-full items-center justify-center gap-3 rounded-full bg-[#ff5a36] px-6 text-[13px] text-white sm:w-auto md:h-14"
              >
                Рассчитать проект <Arrow />
              </a>
              <a
                href="#palette"
                className="btn-lift flex h-12 w-full items-center justify-center gap-3 rounded-full bg-[#faf9f5] px-6 text-[13px] text-[#101412] sm:w-auto md:h-14"
              >
                Смотреть покрытия <Arrow />
              </a>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="size-2 shrink-0 animate-pulse rounded-full bg-[#d7ff55]" />
              <span className="text-[11px] text-[#9da7a1] sm:text-[12px]">Инженерный расчёт и образец цвета — за 24 часа</span>
            </div>

            <div className="relative mt-2 aspect-[4/3] w-full overflow-hidden rounded-[24px] sm:rounded-[32px] lg:hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={A.hero} alt="Порошковое покрытие" className="size-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101412]/50 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                <span className="rounded-full border border-white/20 bg-black/40 px-3 py-1.5 text-[10px] text-white backdrop-blur-sm">
                  Печь ППО · 8–12 м
                </span>
                <span className="rounded-full border border-white/20 bg-black/40 px-3 py-1.5 text-[10px] text-white backdrop-blur-sm">
                  до 1,5 т
                </span>
              </div>
            </div>
          </div>

          <div className="relative hidden flex-1 flex-col items-end justify-between lg:flex">
            <div className="flex items-center gap-2 rounded-full border border-white/13 bg-white/5 px-3.5 py-2.5">
              <span className="text-[10px] uppercase text-[#faf9f5]">Печь ППО · 8–12 м</span>
            </div>
            <div className="animate-soft-float w-[260px] rounded-[28px] border border-white/12 bg-[rgba(21,27,24,0.8)] p-5 backdrop-blur-sm">
              <div className="mb-3 flex justify-between text-[11px]">
                <span className="text-[#98a29c]">Покрытие</span>
                <span className="text-[#faf9f5]">RAL 2004</span>
              </div>
              <div className="mb-3 h-[54px] rounded-xl bg-[#ff5a36]" />
              <div className="flex justify-between text-[10px] text-[#98a29c]">
                <span>70–90 μm</span>
                <span>Super Durable</span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-20 mx-4 mb-8 grid grid-cols-2 gap-3 rounded-[24px] border border-white/10 bg-white/[0.04] p-4 sm:mx-6 sm:grid-cols-4 sm:gap-0 sm:rounded-[32px] sm:p-6 md:mx-[72px] md:mb-12">
          {[
            { end: 12, suffix: " м", label: "длина печи" },
            { end: 3, suffix: " м", label: "ширина / высота" },
            { end: 1.5, suffix: " т", label: "груз", decimals: 1 as number | undefined },
            { end: 2, suffix: " дня", label: "от приёмки" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col items-start px-2 py-2 sm:items-center sm:px-4 sm:py-0">
              <p className="text-[28px] leading-none text-[#faf9f5] sm:text-[36px] md:text-[42px]">
                <CountUp end={s.end} suffix={s.suffix} decimals={s.decimals ?? 0} />
              </p>
              <p className="mt-1 text-[10px] text-[#8a948e] sm:text-[11px]">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
