"use client";

import { useState } from "react";
import { A, Marker, Reveal } from "./shared";

/** Классические этапы полимерно-порошковой окраски — понятные заказчику */
const STEPS = [
  {
    n: "01",
    t: "Приёмка",
    d: "Проверяем металл, габариты и требования к покрытию.",
    img: A.factory,
    status: "Входной контроль · приёмка партии",
  },
  {
    n: "02",
    t: "Подготовка",
    d: "Очистка, обезжиривание, дробеструй или фосфатирование.",
    img: A.tech,
    status: "Подготовка поверхности",
  },
  {
    n: "03",
    t: "Сушка",
    d: "Убираем влагу из швов и полостей перед нанесением.",
    img: A.lab,
    status: "Сушильная камера",
  },
  {
    n: "04",
    t: "Нанесение",
    d: "Электростатическое напыление порошка на деталь.",
    img: A.factory,
    status: "Нанесение порошка",
  },
  {
    n: "05",
    t: "Запекание",
    d: "Полимеризация в печи ППО: порошок спекается в прочную плёнку.",
    img: A.capacity,
    status: "Печь ППО · полимеризация",
  },
  {
    n: "06",
    t: "Контроль",
    d: "Толщина, цвет, адгезия. Упаковка и отгрузка.",
    img: A.lab,
    status: "Контроль качества · отгрузка",
  },
];

export function Process() {
  const [active, setActive] = useState(3);
  const current = STEPS[active];

  return (
    <section className="bg-[#f4f2ec] px-4 py-14 sm:px-6 sm:py-20 md:px-[72px] md:py-28">
      <div className="mx-auto max-w-[1296px]">
        <Reveal className="mb-12 flex flex-col gap-8 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[700px]">
            <Marker label="Этапы покраски" />
            <h2 className="mt-5 text-[clamp(32px,4vw,52px)] leading-[1.06] text-[#101412]">
              Как проходит порошковая окраска
            </h2>
          </div>
          <p className="max-w-[390px] text-[16px] leading-[1.55] text-[#69736d]">
            Шесть последовательных этапов — от приёмки металла до отгрузки готовой детали. Нажмите на этап, чтобы посмотреть описание.
          </p>
        </Reveal>
        <div className="mb-10 grid grid-cols-2 gap-2.5 md:grid-cols-3 lg:grid-cols-6">
          {STEPS.map((s, i) => {
            const isActive = i === active;
            return (
              <button
                key={s.n}
                type="button"
                onClick={() => setActive(i)}
                className={`flex min-h-[160px] flex-col justify-between overflow-hidden rounded-[20px] border p-3 text-left transition-all duration-300 sm:min-h-[180px] sm:rounded-[28px] sm:p-4 md:min-h-[240px] md:p-5 ${
                  isActive
                    ? "scale-[1.04] border-[#ff5a36] bg-[#ff5a36] shadow-[0_16px_40px_-12px_rgba(255,90,54,0.45)]"
                    : "border-[#ced4cf] bg-white hover:border-[#ff5a36]/50 hover:scale-[1.02]"
                }`}
              >
                <div
                  className={`flex size-12 shrink-0 items-center justify-center rounded-full text-[14px] font-bold md:size-14 md:text-[15px] ${
                    isActive
                      ? "bg-white text-[#ff5a36] shadow-md"
                      : "bg-[#101412] text-[#faf9f5] ring-2 ring-[#101412]/20"
                  }`}
                >
                  {s.n}
                </div>
                <div className="min-w-0 pt-3">
                  <p
                    className={`mb-1.5 text-[16px] leading-tight md:text-[17px] ${
                      isActive ? "text-white" : "text-[#101412]"
                    }`}
                  >
                    {s.t}
                  </p>
                  <p
                    className={`hidden text-[11px] leading-[1.4] sm:block ${
                      isActive ? "text-[#ffe1d9]" : "text-[#69736d]"
                    }`}
                  >
                    {s.d}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
        {/* Mobile active step summary */}
        <div className="mb-4 rounded-[20px] border border-[#ced4cf] bg-white p-4 sm:hidden">
          <div className="mb-1 flex items-center justify-between text-[10px] text-[#69736d]">
            <span>Этап {current.n}</span>
            <span>{current.status}</span>
          </div>
          <p className="text-[20px] text-[#101412]">{current.t}</p>
          <p className="mt-1 text-[13px] leading-[1.45] text-[#69736d]">{current.d}</p>
        </div>
        <div className="relative flex h-[220px] items-end justify-between overflow-hidden rounded-[24px] p-4 sm:h-[280px] sm:rounded-[32px] sm:p-6 md:h-[360px] md:rounded-[40px] md:p-7">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            key={current.img}
            src={current.img}
            alt=""
            className="absolute inset-0 size-full object-cover transition-opacity duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="relative z-10 flex max-w-[70%] items-center gap-2.5 rounded-full bg-[rgba(16,20,18,0.85)] px-3 py-2.5 sm:px-4 sm:py-3">
            <span className="size-2 shrink-0 animate-pulse rounded-full bg-[#d7ff55]" />
            <span className="truncate text-[10px] text-[#faf9f5] sm:text-[11px]">{current.status}</span>
          </div>
          <div className="relative z-10 hidden w-[300px] rounded-[28px] bg-white/91 p-5 backdrop-blur-sm md:block">
            <div className="mb-3 flex justify-between text-[10px]">
              <span className="text-[#101412]">Этап {current.n}</span>
              <span className="text-[#69736d]">{current.t}</span>
            </div>
            <div className="mb-3 flex items-end justify-between">
              <span className="text-[28px] text-[#101412]">{current.t}</span>
            </div>
            <p className="text-[12px] leading-[1.4] text-[#69736d]">{current.d}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
