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
    t: "Полимеризация",
    d: "Запекание в печи ППО: порошок спекается в прочную плёнку.",
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
    <section className="bg-[#f4f2ec] px-6 py-20 md:px-[72px] md:py-28">
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
                className={`flex h-[210px] flex-col justify-between rounded-[28px] border p-5 text-left transition-all duration-300 md:h-[240px] ${
                  isActive
                    ? "scale-[1.04] border-[#ff5a36] bg-[#ff5a36] shadow-[0_16px_40px_-12px_rgba(255,90,54,0.45)]"
                    : "border-[#ced4cf] bg-white hover:border-[#ff5a36]/50 hover:scale-[1.02]"
                }`}
              >
                <div
                  className={`flex size-14 items-center justify-center rounded-full text-[15px] font-bold ${
                    isActive
                      ? "bg-white text-[#ff5a36] shadow-md"
                      : "bg-[#101412] text-[#faf9f5] ring-2 ring-[#101412]/20"
                  }`}
                >
                  {s.n}
                </div>
                <div>
                  <p className={`mb-2 text-[19px] ${isActive ? "text-white" : "text-[#101412]"}`}>{s.t}</p>
                  <p className={`text-[11px] leading-[1.45] ${isActive ? "text-[#ffe1d9]" : "text-[#69736d]"}`}>
                    {s.d}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
        <div className="relative flex h-[300px] items-end justify-between overflow-hidden rounded-[40px] p-6 md:h-[360px] md:p-7">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            key={current.img}
            src={current.img}
            alt=""
            className="absolute inset-0 size-full object-cover transition-opacity duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="relative z-10 flex items-center gap-2.5 rounded-full bg-[rgba(16,20,18,0.85)] px-4 py-3">
            <span className="size-2 animate-pulse rounded-full bg-[#d7ff55]" />
            <span className="text-[11px] text-[#faf9f5]">{current.status}</span>
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
