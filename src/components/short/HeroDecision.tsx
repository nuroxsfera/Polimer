"use client";

import { A, Arrow, PHONE, PHONE_TEL } from "../shared";

export function HeroDecision() {
  return (
    <section className="relative overflow-hidden bg-[#101412]">
      <div className="pointer-events-none absolute -right-20 top-20 h-[420px] w-[420px] rounded-full bg-[#ff5a36]/15 blur-[100px]" />
      <div className="pointer-events-none absolute -left-16 bottom-0 h-[280px] w-[280px] rounded-full bg-[#355cff]/10 blur-[80px]" />

      <div className="relative mx-auto grid max-w-[1100px] gap-10 px-4 pb-12 pt-[5.5rem] sm:px-6 sm:pb-16 sm:pt-28 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-12 lg:px-10 lg:pb-20">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5">
            <span className="size-1.5 animate-pulse rounded-full bg-[#d7ff55]" />
            <span className="text-[11px] tracking-wide text-[#cdd3cf]">
              Новосибирск · Переездная 1 · приём заявок
            </span>
          </div>

          <p className="text-[13px] font-medium uppercase tracking-[0.12em] text-[#ff5a36]">ПолимерКолор</p>
          <h1 className="mt-2 text-[clamp(30px,6.5vw,56px)] font-semibold leading-[1.05] tracking-tight text-[#faf9f5]">
            Порошковая окраска
            <span className="block text-[#aeb7b1]">крупногабарита</span>
          </h1>
          <p className="mt-4 max-w-[480px] text-[15px] leading-[1.55] text-[#9da7a1] sm:text-[17px]">
            Длинномер до&nbsp;12&nbsp;м — целиком, без разборки и порезки. Полимерная камера ППО 10×3×3&nbsp;м, до&nbsp;1,5&nbsp;т. Срок от&nbsp;2&nbsp;дней.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-2.5 sm:grid-cols-4 sm:gap-3">
            {[
              { v: "12 м", l: "длина" },
              { v: "3×3 м", l: "сечение" },
              { v: "1,5 т", l: "нагрузка" },
              { v: "2 дня", l: "от приёмки" },
            ].map((x) => (
              <div
                key={x.l}
                className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] px-3 py-4 backdrop-blur-sm"
              >
                <p className="text-[26px] font-semibold leading-none tracking-tight text-[#faf9f5] sm:text-[28px]">{x.v}</p>
                <p className="mt-2 text-[11px] uppercase tracking-wide text-[#6f7973]">{x.l}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="btn-lift flex h-13 min-h-[52px] items-center justify-center gap-2 rounded-full bg-[#ff5a36] px-7 text-[15px] font-medium text-white shadow-[0_12px_40px_-10px_rgba(255,90,54,0.55)]"
            >
              Получить просчёт <Arrow className="size-4" />
            </a>
            <a
              href="#kamera"
              className="flex h-13 min-h-[52px] items-center justify-center gap-2 rounded-full border border-white/20 px-6 text-[14px] text-[#e8ece9] transition hover:border-white/40 hover:bg-white/5"
            >
              Параметры камеры
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              className="text-center text-[14px] text-[#8a948e] underline-offset-4 hover:text-[#faf9f5] hover:underline sm:text-left"
            >
              {PHONE}
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-white/10 sm:aspect-[5/6] lg:aspect-[4/5]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={A.capacity} alt="" className="size-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#101412] via-[#101412]/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
              <p className="text-[11px] uppercase tracking-wider text-[#aeb7b1]">Камера ППО</p>
              <p className="mt-1 text-[20px] font-medium text-white">10 × 3 × 3 м</p>
              <p className="mt-1 text-[13px] text-[#9da7a1]">Рабочая зона под длинномер и фермы</p>
            </div>
          </div>
          <div className="absolute -left-3 top-6 hidden rounded-2xl border border-white/10 bg-[#151a17]/95 px-4 py-3 shadow-xl backdrop-blur-md sm:block">
            <p className="text-[10px] uppercase text-[#8a948e]">Формат</p>
            <p className="text-[14px] font-medium text-[#faf9f5]">Без разборки</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/8">
        <div className="mx-auto flex max-w-[1100px] flex-wrap items-center justify-between gap-4 px-4 py-4 text-[12px] text-[#7a847e] sm:px-6 lg:px-10">
          <span>Для заводов МК, стройки, сварки</span>
          <span className="hidden h-3 w-px bg-white/15 sm:block" />
          <span>Ответ по просчёту — в рабочий день</span>
          <span className="hidden h-3 w-px bg-white/15 sm:block" />
          <span>RAL / каталог по запросу</span>
        </div>
      </div>
    </section>
  );
}
