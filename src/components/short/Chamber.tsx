"use client";

import { useState } from "react";
import { A, Arrow } from "../shared";

const SPECS = [
  { k: "Длина рабочей зоны", v: "8–12 м (типовая камера ~10 м)" },
  { k: "Ширина", v: "3 м" },
  { k: "Высота", v: "3 м" },
  { k: "Грузоподъёмность", v: "до 1,5 т" },
  { k: "Формат", v: "Длинномер и крупногабарит целиком" },
  { k: "Срок", v: "от 2 дней" },
];

const ITEMS = [
  "Фермы и балки",
  "Ворота и калитки",
  "Каркасы и рамы",
  "Ограждения",
  "Корпуса оборудования",
  "Листовые и сварные узлы",
];

/** Экран 2: камера + что красим */
export function Chamber() {
  const [open, setOpen] = useState(false);

  return (
    <section id="kamera" className="bg-[#faf9f5] px-4 py-12 sm:px-6 sm:py-16 md:px-[72px]">
      <div className="mx-auto max-w-[960px]">
        <p className="text-[11px] uppercase tracking-wide text-[#69736d]">Полимерная камера ППО</p>
        <h2 className="mt-2 text-[clamp(24px,5vw,36px)] leading-[1.15] text-[#101412]">
          Влезет ли ваша деталь
        </h2>
        <p className="mt-3 max-w-[520px] text-[15px] leading-[1.5] text-[#69736d]">
          Окрашиваем длинномерные и крупногабаритные металлоизделия целиком — без разборки и порезки.
          Качественная полимеризация, прочное покрытие.
        </p>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          <div className="relative min-h-[200px] overflow-hidden rounded-[24px] bg-[#101412] sm:min-h-[260px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={A.capacity}
              alt="Полимерная камера"
              className="absolute inset-0 size-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <p className="absolute bottom-4 left-4 text-[12px] text-white/90">Камера ППО · схема/фото — позже</p>
          </div>

          <div className="flex flex-col justify-between rounded-[24px] border border-[#ced4cf] bg-white p-5 sm:p-6">
            <ul className="space-y-3">
              {SPECS.slice(0, 4).map((s) => (
                <li key={s.k} className="flex justify-between gap-4 border-b border-[#eee] pb-2 text-[14px]">
                  <span className="text-[#69736d]">{s.k}</span>
                  <span className="text-right font-medium text-[#101412]">{s.v}</span>
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="mt-4 flex h-11 items-center justify-center gap-2 rounded-full border border-[#101412]/20 text-[13px] text-[#101412]"
            >
              {open ? "Скрыть подробности" : "Все характеристики"} <Arrow className="size-3.5" />
            </button>
          </div>
        </div>

        {open && (
          <div className="mt-4 rounded-[20px] border border-[#ced4cf] bg-white p-5 text-[14px] leading-[1.55] text-[#69736d]">
            <p className="mb-3 text-[#101412]">
              Рабочая длина в цикле — ориентир <strong>8–12 м</strong>, фактическая камера около{" "}
              <strong>10 × 3 × 3 м</strong>, нагрузка до <strong>1,5 т</strong>.
            </p>
            <ul className="list-inside list-disc space-y-1">
              {SPECS.map((s) => (
                <li key={s.k}>
                  <span className="text-[#101412]">{s.k}:</span> {s.v}
                </li>
              ))}
            </ul>
            <p className="mt-3">
              Рендер камеры и чертёж добавим отдельно — пока каркас под контент.
            </p>
          </div>
        )}

        <div className="mt-10">
          <p className="text-[11px] uppercase tracking-wide text-[#69736d]">Что окрашиваем</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {ITEMS.map((t) => (
              <span
                key={t}
                className="rounded-full border border-[#ced4cf] bg-white px-3.5 py-2 text-[13px] text-[#101412]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
