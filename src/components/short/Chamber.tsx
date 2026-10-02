"use client";

import { useState } from "react";
import { A, Arrow, Reveal } from "../shared";

const SPECS = [
  { k: "Длина", v: "8–12 м", sub: "типовая ~10 м" },
  { k: "Ширина", v: "3 м", sub: "рабочая" },
  { k: "Высота", v: "3 м", sub: "рабочая" },
  { k: "Нагрузка", v: "1,5 т", sub: "макс." },
];

const ITEMS = [
  { t: "Фермы и балки", img: A.arch },
  { t: "Ворота, калитки", img: A.urban },
  { t: "Каркасы", img: A.equipment },
  { t: "Ограждения", img: A.transport },
];

function FadeImg({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className={`img-fade ${className ?? ""}`}
      onLoad={(e) => e.currentTarget.classList.add("loaded")}
      onError={(e) => {
        e.currentTarget.style.opacity = "0.2";
        e.currentTarget.classList.add("loaded");
      }}
    />
  );
}

export function Chamber() {
  const [open, setOpen] = useState(false);

  return (
    <section id="kamera" className="bg-[#f4f2ec] px-4 py-14 sm:px-6 sm:py-20 lg:px-10">
      <div className="mx-auto max-w-[1100px]">
        <Reveal className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#ff5a36]">
              Полимерная камера ППО
            </p>
            <h2 className="mt-2 text-[clamp(26px,4.5vw,40px)] font-semibold leading-[1.1] tracking-tight text-[#101412]">
              Влезет ли ваша деталь
            </h2>
          </div>
          <p className="max-w-[340px] text-[14px] leading-[1.5] text-[#69736d]">
            Крупногабарит и длинномер целиком — без разборки. Полимеризация, прочное покрытие, срок от 2 дней.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
          {SPECS.map((s, i) => (
            <Reveal
              key={s.k}
              delay={i * 70}
              className="rounded-2xl border border-[#e0ddd6] bg-white p-4 shadow-[0_8px_30px_-16px_rgba(16,20,18,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_-16px_rgba(16,20,18,0.18)] sm:p-5"
            >
              <p className="text-[12px] uppercase tracking-wide text-[#8a948e]">{s.k}</p>
              <p className="mt-1 text-[28px] font-semibold tracking-tight text-[#101412]">{s.v}</p>
              <p className="mt-1 text-[12px] text-[#a0a9a3]">{s.sub}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal className="relative min-h-[220px] overflow-hidden rounded-[24px] sm:min-h-[300px]">
            <FadeImg src={A.factory} alt="" className="absolute inset-0 size-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#101412]/70 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <p className="text-[13px] text-white/80">Производство · Новосибирск</p>
              <p className="mt-1 max-w-[280px] text-[18px] font-medium leading-snug text-white">
                Одна камера — от мелкого узла до фермы 12&nbsp;м
              </p>
            </div>
          </Reveal>

          <Reveal delay={100} className="flex flex-col justify-between rounded-[24px] border border-[#e0ddd6] bg-white p-6">
            <div>
              <p className="text-[13px] font-medium text-[#101412]">Что важно инженеру</p>
              <ul className="mt-4 space-y-3 text-[14px] leading-[1.45] text-[#69736d]">
                {[
                  "Габарит и вес — сразу в заявке, проверим влезание",
                  "Цвет RAL / образец — согласуем до запуска партии",
                  "Срок от 2 дней при свободном слоте камеры",
                ].map((t) => (
                  <li key={t} className="flex gap-2">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[#ff5a36]" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="btn-lift mt-6 flex h-11 items-center justify-center gap-2 rounded-full border border-[#101412]/15 text-[13px] font-medium text-[#101412] hover:bg-[#f4f2ec]"
            >
              {open ? "Свернуть" : "Полные характеристики"} <Arrow className="size-3.5" />
            </button>
          </Reveal>
        </div>

        <div
          className={`grid transition-all duration-400 ease-out ${
            open ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="rounded-2xl border border-[#e0ddd6] bg-white p-5 text-[14px] leading-[1.55] text-[#69736d] sm:p-6">
              <p>
                Рабочая длина <strong className="text-[#101412]">8–12 м</strong> (камера ориентировочно{" "}
                <strong className="text-[#101412]">10 × 3 × 3 м</strong>), грузоподъёмность до{" "}
                <strong className="text-[#101412]">1,5 т</strong>. Окраска длинномера и крупногабарита
                целиком, без разборки и порезки.
              </p>
            </div>
          </div>
        </div>

        <Reveal className="mt-14">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#8a948e]">Типовые изделия</p>
              <h3 className="mt-1 text-[22px] font-semibold text-[#101412] sm:text-[26px]">Что отдаёте в камеру</h3>
            </div>
            <a href="#contact" className="hidden text-[13px] font-medium text-[#ff5a36] transition hover:underline sm:inline">
              Спросить по вашему типу →
            </a>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
            {ITEMS.map((item, i) => (
              <Reveal
                key={item.t}
                delay={i * 80}
                className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#101412]"
              >
                <FadeImg
                  src={item.img}
                  alt={item.t}
                  className="size-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                <p className="absolute bottom-3 left-3 right-3 text-[13px] font-medium text-white sm:text-[14px]">
                  {item.t}
                </p>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal delay={80} className="mt-10 flex flex-col gap-4 rounded-2xl border border-[#e0ddd6] bg-white p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div>
            <p className="text-[15px] font-medium text-[#101412]">Как считается цена</p>
            <p className="mt-1 max-w-[480px] text-[13px] leading-[1.5] text-[#69736d]">
              Площадь, сложность подготовки, цвет и объём партии. Ориентир по рынку Новосибирска — в просчёте за рабочий день.
            </p>
          </div>
          <a
            href="#contact"
            className="btn-lift flex h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-[#101412] px-6 text-[13px] text-white"
          >
            Запросить сумму <Arrow className="size-3.5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
